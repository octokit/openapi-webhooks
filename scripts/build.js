import { rm, mkdir } from "node:fs/promises";
import {
  readdirSync,
  writeFileSync,
  readFileSync,
  copyFileSync,
} from "node:fs";
import * as prettier from "prettier";
import overrides from "./overrides/index.js";
import { types } from "node:util"

/* if (!process.env.GITHUB_ACTIONS && !process.env.ANICCA_REPOSITORY_PATH) {
  throw new Error("Please set ANICCA_REPOSITORY_PATH");
} */

run();

async function run() {
  await rm("packages/openapi-webhooks", { recursive: true }).catch(() => {});
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

    const tempSchema = {
      ...schema,
      components: {
        schemas: {},
        examples: {},
      },
    };

    overrides(file, schema);
    /**
     *  Function to handle special cases:
     * Check all instances of `$ref` in the OpenAPI spec, and add them to the definitions
     * Remove all instances of `enterprise` in the OpenAPI spec for GitHub.com
     * @param {object} obj - The object to check for special cases
     * @returns {object} - The object with any special cases handled
     */
    const specialHandling = (obj) => {
      if (typeof obj !== "object" || obj === null) return obj;

      for (let key of Object.keys(obj)) {
        if (key === "enterprise" && file === "api.github.com.json") {
          delete obj[key];
        }
        if (key === "$ref" && typeof obj[key] === "string") {
          const ref = obj[key].split("/").at(-1);
          const originalSchemaComponent = schema.components.schemas[ref];
          if (originalSchemaComponent === undefined) {
            throw new Error(`Schema component ${obj[key]} not found`);
          }
          tempSchema.components.schemas[ref] = originalSchemaComponent;
          // Call the function with the new definition to handle any of it's `$ref`s, and `enterprise` keys
          specialHandling(tempSchema.components.schemas[ref]);
        } else {
          obj[key] = specialHandling(obj[key]);
        }
      }
      return obj;
    };

    function addActionToRequired(schema) {
      if (
        schema.properties.action !== undefined &&
        schema.required !== undefined &&
        !schema.required.includes("action")
      ) {
        schema.required.push("action");
      }
    }
    const webhooks = schema.webhooks;
    for (const webhookId in webhooks) {
      const webhook = webhooks[webhookId].post;
      const requestBody = webhook.requestBody;
      const ref = requestBody.content["application/json"].schema.$ref;
      const examples = requestBody.content["application/json"].examples;
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
      specialHandling(schema.components.schemas[refName]);
      if (tempSchema.components.schemas[refName].oneOf !== undefined) {
        for (let oneOf of tempSchema.components.schemas[refName].oneOf) {
          addActionToRequired(oneOf);
        }
      } else {
        addActionToRequired(tempSchema.components.schemas[refName]);
      }
      if (typeof examples !== "undefined") {
        for (let key of Object.keys(examples)) {
          const example$ref = examples[key].$ref.split("/").at(-1);
          tempSchema.components.examples[example$ref] =
            schema.components.examples[example$ref];
        }
      }
    }

    writeFileSync(
      `packages/openapi-webhooks/generated/${file}`,
      await prettier.format(JSON.stringify(tempSchema), { parser: "json" }),
    );
    console.log(`packages/openapi-webhooks/generated/${file} written`);
  }

  let schemasCode = "";
  let schemasTypes = "";

  for (const name of schemaFileNames) {
    schemasCode += `["${name.replace(
      ".json",
      "",
    )}"]: (await import("./generated/${name}", { with: { type: "json" } })).default,`;
    schemasTypes += `"${name.replace(
      ".json",
      "",
    )}": Record<string, unknown>;`;
  }

  writeFileSync(
    "packages/openapi-webhooks/generated/README.md",
    await prettier.format(
      `# Please do not edit files in this folder

They are all generated, your changes would be overwritten with the next update. If you found a problem with GitHub's OpenAPI schema, file an issue at https://github.com/github/rest-api-description/. If you found a problem specific to the \`x-octokit\` extension or usage of the \`@octokit/openapi\` module, please file an issue at https://github.com/octokit/openapi.`,
      { parser: "markdown" },
    ),
  );
  writeFileSync(
    "packages/openapi-webhooks/index.js",
    await prettier.format(
      `
      export const schemas = {
        ${schemasCode}
      }
    `,
      {
        parser: "babel",
      },
    ),
  );
  writeFileSync(`packages/openapi-webhooks/types.d.ts`, await prettier.format(
    `
    export declare const schemas: {
      ${schemasTypes}
    }
    `,
    {
      parser: "typescript",
    },
  )
  );
  writeFileSync(
    `packages/openapi-webhooks/package.json`,
    await prettier.format(
      JSON.stringify({
        name: `@octokit/openapi-webhooks`,
        version: "0.0.0-development",
        description:
          "GitHub's official Webhooks OpenAPI spec with Octokit extensions",
        main: "index.js",
        types:  "types.d.ts",
        files: ["generated/*", "index.js", "types.d.ts"],
        type: "module",
        repository: {
          type: "git",
          url: "git+https://github.com/octokit/openapi-webhooks.git",
          directory: `packages/openapi-webhooks`,
        },
        keywords: ["github", "openapi", "octokit", "webhooks"],
        author: "wolfy1339 <webmaster@wolfy1339.com>",
        license: "MIT",
        publishConfig: {
          access: "public",
          provenance: true,
        },
        engines: {
          node: "^18.20.0 || >= 20.10.0",
        }
      }),
      { parser: "json-stringify" },
    ),
  );

  writeFileSync(
    `packages/openapi-webhooks/README.md`,
    readFileSync("README.md", "utf8")
      .toString()
      .replace("(CONTRIBUTING.md)", "(../../CONTRIBUTING.md)"),
  );
  copyFileSync("LICENSE", `packages/openapi-webhooks/LICENSE`);
}
