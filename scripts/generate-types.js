import { readdir, mkdir, rm, writeFile, copyFile } from "node:fs/promises";
import { basename } from "node:path";

import * as prettier from "prettier";
import openapiTS from "openapi-typescript";
import { pathToFileURL } from "node:url"
import ts from "typescript";

/* (!process.env.OCTOKIT_OPENAPI_VERSION) {
  throw new Error("OCTOKIT_OPENAPI_VERSION is not set");
}*/

run();

const packageDefaults = {
  publishConfig: {
    access: "public",
  },
  version: "0.0.0-development",
  main: "",
  types: "types.d.ts",
  author: "wolfy1339 <webmaster@wolfy1339.com>",
  license: "MIT",
  /*octokit: {
    "openapi-version": process.env.OCTOKIT_OPENAPI_VERSION.replace(/^v/, ""),
  },*/
};

async function run() {
  const files = await readdir("packages/openapi-webhooks/generated");
  for (const fileName of files) {
    if (!/\.json$/.test(fileName)) continue;

    const name = basename(fileName, ".json");

    const packageName =
      name === "api.github.com"
        ? "openapi-webhooks-types"
        : `openapi-webhooks-types-${name}`;

    await rm(`packages/${packageName}`, { recursive: true, force: true });
    await mkdir(`packages/${packageName}`);
    await writeFile(
      `packages/${packageName}/package.json`,
      await prettier.format(
        JSON.stringify({
          name: `@wolfy1339/${packageName}`,
          description: `Generated TypeScript definitions based on GitHub's OpenAPI spec for ${name}`,
          repository: {
            type: "git",
            url: "https://github.com/wolfy1330/openapi-webhooks.git",
            directory: `packages/${packageName}`,
          },
          ...packageDefaults,
        }),
        { parser: "json-stringify" }
      )
    );
    await writeFile(
      `packages/${packageName}/README.md`,
      await prettier.format(
        `
# @octokit/${packageName}

> Generated TypeScript definitions based on GitHub's OpenAPI spec ${
          packageName === "openapi-webhooks-types" ? "" : `for ${name}`
        }

This package is continously updated based on [GitHub's OpenAPI specification](https://github.com/github/rest-api-description/) 

## Usage

\`\`\`ts
import { components } from "@octokit/${packageName}";

type Repository = components["schemas"]["full-repository"]
\`\`\`

## License

[MIT](LICENSE)
`,
        { parser: "markdown" }
      )
    );

    await copyFile("LICENSE", `packages/${packageName}/LICENSE`);

    const generated = await openapiTS(pathToFileURL(`packages/openapi-webhooks/generated/${name}.json`));
    const sourceFile = ts.createSourceFile(
      'placeholder.ts',
      '',
      ts.ScriptTarget.ESNext,
      true,
      ts.ScriptKind.TS
    )
    const printer = ts.createPrinter()

    const outputFile = printer.printList(ts.ListFormat.MultiLine, generated, sourceFile)
    await writeFile(
      `packages/${packageName}/types.d.ts`,
      await prettier.format(
        outputFile,
        {
          parser: "typescript",
        }
      )
    );
    console.log(`packages/${packageName}/types.d.ts written`);
  }
}
