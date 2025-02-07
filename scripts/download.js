import { get } from "https";
import fs from "fs";

import { Octokit } from "@octokit/core";
import { getCurrentVersions } from "github-enterprise-server-versions";
import * as prettier from "prettier";

run().then(() => console.log("done"), console.error);

async function run() {
  fs.rmSync("cache", { recursive: true });
  fs.mkdirSync("cache");
  console.log("cache/ cleared");

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const {
    data: {
      items: [mostRecentPr],
    },
  } = await octokit.request("GET /search/issues", {
    q: "is:open is:pr author:github-openapi-bot repo:github/rest-api-description",
  });

  const getDescriptionsOptions = {
    owner: "github",
    repo: "rest-api-description",
    path: "descriptions-next",
    ref: "main",
  };

  if (mostRecentPr) {
    const {
      data: {
        head: { ref },
      },
    } = await octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
      owner: "github",
      repo: "rest-api-description",
      pull_number: mostRecentPr.number,
    });
    getDescriptionsOptions.ref = ref;
    console.log(
      `Open pull requests found by @github-openapi-bot: ${mostRecentPr.html_url}.\nLoading descriptions from "${ref}" branch`,
    );
  } else {
    console.log(
      "No open pull requests found by @github-openapi-bot. Loading descriptions from default branch",
    );
  }

  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    getDescriptionsOptions,
  );

  if (!Array.isArray(data)) {
    throw new Error(
      "https://github.com/github/rest-api-description/tree/main/descriptions-next is not a directory",
    );
  }

  // temporarily hardcode versions until we unblock automated updates
  const currentGhesVersions = [...(await getCurrentVersions())];

  for (const folder of data.filter((e) => e.name !== "github.ae")) {
    const { name } = folder;
    const ref = getDescriptionsOptions.ref;

    if (
      name.startsWith("ghes-") &&
      !currentGhesVersions.includes(name.substring("ghes-".length))
    ) {
      console.log(`Skipping ${name} because it is not a current GHES version`);
      continue;
    }

    await download(name, `${ref}/descriptions-next/${name}/${name}.json`);
  }
}

async function download(name, remotePath) {
  const path = `cache/${name}.json`;

  const file = fs.createWriteStream(path);
  const url = `https://raw.githubusercontent.com/github/rest-api-description/${remotePath}`;

  console.log("Downloading %s", url);

  await new Promise((resolve, reject) => {
    get(url, (response) => {
      response.pipe(file);
      file
        .on("finish", () =>
          file.close((error) => {
            if (error) return reject(error);
            console.log("%s written", path);
            resolve();
          }),
        )
        .on("error", (error) => reject(error.message));
    });
  });

  console.log("Formatting %s", path);

  const content = fs.readFileSync(path, "utf-8");
  const jsonContent = JSON.parse(content);
  delete jsonContent.paths;
  fs.writeFileSync(
    path,
    await prettier.format(JSON.stringify(jsonContent), {
      parser: "json",
    }),
  );
}
