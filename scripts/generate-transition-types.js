import { readFile, writeFile, copyFile } from "node:fs/promises";
import * as prettier from "prettier";

const snakeToPascalCase = (str) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    )
    .replace(/^[a-z]/, (match) => match.toUpperCase());


const packageDefaults = {
  publishConfig: {
    access: "public",
    provenance: true,
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
  const packageName = "openapi-webhooks-types-transition";
  const schema = JSON.parse(
    await readFile("packages/openapi-webhooks/generated/api.github.com.json")
  );
  const eventsMap = {};

  for (const webhookDefinitionKey of Object.keys(schema.webhooks)) {
    const webhookDefinition = schema.webhooks[webhookDefinitionKey];
    const operationDefinition = webhookDefinition.post;
    const emitterEventName = operationDefinition.operationId
      .replace(/-/g, "_")
      .replace("/", ".");

    const [eventName] = emitterEventName.split(".");

    eventsMap[eventName] ||= new Set();
    eventsMap[eventName].add(emitterEventName);
  }

  const typeDefinitions = [
    "// THIS FILE IS GENERATED - DO NOT EDIT DIRECTLY",
    "// make edits in scripts/generate-types.ts",
    "",
    `import type { webhooks as OpenAPIWebhooks } from "@octokit/openapi-webhooks-types";`,
    "",
    "type WebhookEventDefinition<TEventName extends keyof OpenAPIWebhooks> =",
    `OpenAPIWebhooks[TEventName]["post"]["requestBody"]["content"]["application/json"];`,
    "",
  ];

  // Iterate over event groups and generate types
  for (const [eventName, webhooks] of Object.entries(eventsMap).toSorted()) {
    const webhookArray = Array.from(webhooks).map(e => e.replace(".", "-").replaceAll("_", "-"));

    if (webhookArray.length > 1 && webhookArray[0] !== eventName) {
      const webhookTypes = webhookArray.map(
        (event) =>
          `export type ${snakeToPascalCase(event)}Event = WebhookEventDefinition<"${event}">;`
      );

      typeDefinitions.push(...webhookTypes);
    }

    const groupedEventType = `export type ${snakeToPascalCase(eventName)}Event = ${webhookArray.map(
      (event) => `WebhookEventDefinition<"${event}">`).join(" | ")};`;
    typeDefinitions.push(groupedEventType);
  }

  typeDefinitions.push(
    "export type EventPayloadMap = {",
    ...Object.entries(eventsMap).map(
      ([eventName, webhooks]) =>
        `"${eventName}": ${Array.from(webhooks)
          .map((event) => `WebhookEventDefinition<"${event}">`)
          .join(" | ")}`
    ),
    "};",
    "export type WebhookEvent =",
    Object.keys(eventsMap).map(
      (eventName) => `${snakeToPascalCase(eventName)}Event`
    ).join(" | "),
    "export type WebhookEventMap = EventPayloadMap;",
    "export type WebhookEventName = keyof EventPayloadMap;"
  );

  await writeFile(
    `packages/${packageName}/types.ts`,
    await prettier.format(typeDefinitions.join("\n"), { parser: "typescript" })
  );
  await copyFile("LICENSE", `packages/${packageName}/LICENSE`);
  await writeFile(
    `packages/${packageName}/package.json`,
    await prettier.format(
      JSON.stringify({
        name: `@octokit/${packageName}`,
        description: "Transition package for OpenAPI Webhooks Types",
        repository: {
          type: "git",
          url: "git+https://github.com/octokit/openapi-webhooks.git",
          directory: `packages/${packageName}`,
        },
        dependencies: {
          "@octokit/openapi-webhooks-types": "^0.0.0-development"
        },
        ...packageDefaults,
      }),
      { parser: "json-stringify" }
    )
  );
}

run();
