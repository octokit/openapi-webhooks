import { rm, mkdir } from "node:fs/promises";
import {
  readdirSync,
  writeFileSync,
  readFileSync,
  copyFileSync,
} from "node:fs";
import * as prettier from "prettier";
import _ from "lodash";

/* if (!process.env.GITHUB_ACTIONS && !process.env.ANICCA_REPOSITORY_PATH) {
  throw new Error("Please set ANICCA_REPOSITORY_PATH");
} */

run();

async function run() {
  await rm("packages", { recursive: true }).catch(() => {});
  await mkdir("packages/openapi-webhooks/generated", { recursive: true });
  const schemaFileNames = readdirSync("cache");

  for (const file of schemaFileNames) {
    const schema = JSON.parse(readFileSync(`cache/${file}`).toString());

    // overwrite version to "0.0.0-development", will be updated
    // right before publish via semantic-release
    schema.info.version = "0.0.0-development";
    schema.info.title =
      "GitHub's official Webhooks OpenAPI spec + Octokit extension";
    schema.info.description =
      "Webhooks OpenAPI specs from https://github.com/github/rest-api-description with the 'x-octokit' extension required by the Octokit SDKs";
    schema.info.contact.url = "https://github.com/octokit/openapi";

    // Isolate the webhooks schemas
    delete schema.components.responses;
    delete schema.components.parameters;
    delete schema.components.headers;
    delete schema.components.examples;

    const tempSchema = { ...schema };
    tempSchema.components = {
      schemas: {},
    };

    // Check all instances of `$ref` in the OpenAPI spec, and add them to the definitions
    const handleRefs = (obj) => {
      if (typeof obj !== "object" || obj === null) return obj;

      for (let key in obj) {
        if (key === "$ref" && typeof obj[key] === "string") {
          const ref = obj[key].split("/").at(-1);
          tempSchema.components.schemas[ref] = schema.components.schemas[ref];
          // Call the function with the new definition to handle any of it's $refs
          handleRefs(tempSchema.components.schemas[ref]);
        } else {
          obj[key] = handleRefs(obj[key]);
        }
      }
      return obj;
    };

    const webhooks = schema.webhooks;
    for (const webhookId in webhooks) {
      const webhook = webhooks[webhookId].post;
      const requestBody = webhook.requestBody;
      const ref = requestBody.content["application/json"].schema.$ref;
      const refName = ref.split("/").at(-1);
      if (
        typeof requestBody.content["application/x-www-form-urlencoded"] !==
        "undefined"
      ) {
        delete requestBody.content["application/x-www-form-urlencoded"];
      }
      // Mark all headers as required
      for (let parameter of webhook.parameters) {
        parameter.required = true;
      }
      tempSchema.components.schemas[refName] =
        schema.components.schemas[refName];
      handleRefs(schema.components.schemas[refName]);
    }

    writeFileSync(
      `packages/openapi-webhooks/generated/${file}`,
      prettier.format(JSON.stringify(tempSchema), { parser: "json" })
    );
    console.log(`packages/openapi-webhooks/generated/${file} written`);
  }

  let schemasCode = "";

  for (const name of schemaFileNames) {
    schemasCode += `["${name.replace(
      ".json",
      ""
    )}"]: require("./generated/${name}"),`;
  }

  writeFileSync(
    "packages/openapi-webhooks/generated/README.md",
    prettier.format(
      `# Please do not edit files in this folder

They are all generated, your changes would be overwritten with the next update. If you found a problem with GitHub's OpenAPI schema, file an issue at https://github.com/github/rest-api-description/. If you found a problem specific to the \`x-octokit\` extension or usage of the \`@octokit/openapi\` module, please file an issue at https://github.com/octokit/openapi.`,
      { parser: "markdown" }
    )
  );
  writeFileSync(
    "packages/openapi-webhooks/index.js",
    prettier.format(
      `
      module.exports = {
        schemas: {
          ${schemasCode}
        }
      }
    `,
      {
        parser: "babel",
      }
    )
  );
  writeFileSync(
    `packages/openapi-webhooks/package.json`,
    prettier.format(
      JSON.stringify({
        name: `@wolfy1339/openapi-webhooks`,
        version: "0.0.0-development",
        description:
          "GitHub's official Webhooks OpenAPI spec with Octokit extensions",
        main: "index.js",
        files: ["generated/*", "index.js"],
        type: "commonjs",
        repository: {
          type: "git",
          url: "https://github.com/wolfy1330/openapi-webhooks.git",
          directory: `packages/openapi-webhooks`,
        },
        keywords: ["github", "openapi", "octokit", "webhooks"],
        author: "wolfy1339 <webmaster@wolfy1339.com>",
        license: "MIT",
        publishConfig: {
          access: "public",
        },
      }),
      { parser: "json-stringify" }
    )
  );

  writeFileSync(
    `packages/openapi-webhooks/README.md`,
    readFileSync("README.md", "utf8")
      .toString()
      .replace("(CONTRIBUTING.md)", "(../../CONTRIBUTING.md)")
  );
  copyFileSync("LICENSE", `packages/openapi-webhooks/LICENSE`);
}
