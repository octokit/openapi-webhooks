# Octokit Webhooks

> Generated TypeScript definitions based on GitHub's OpenAPI spec

This package is continously updated based on [GitHub's OpenAPI specification](https://github.com/github/rest-api-description/)

## Usage

```typescript
import { WebhookEvent, IssuesOpenedEvent } from "@octokit/openapi-webhooks-types-transition";

const handleWebhookEvent = (event: WebhookEvent) => {
  if ("action" in event && event.action === "completed") {
    console.log(`${event.sender.login} completed something!`);
  }
};

const handleIssuesOpenedEvent = (event: IssuesOpenedEvent) => {
  console.log(
    `${event.sender.login} opened "${event.issue.title}" on ${event.repository.full_name}`,
  );
};
```

>[!IMPORTANT]
> Webhooks Types are expected to be used with the [`strictNullChecks` option](https://www.typescriptlang.org/tsconfig#strictNullChecks) enabled in your `tsconfig`. If you don't have this option enabled, there's the possibility that you get `never` as the inferred type in some use cases. See [octokit/webhooks#395](https://github.com/octokit/webhooks/issues/395) for details.

## See also

- [octokit/graphql-schema](https://github.com/octokit/graphql-schema) – GitHub’s
  GraphQL Schema with validation
- [octokit/openapi](https://github.com/octokit/openapi) – GitHub REST API route
  specifications
- [octokit/app-permissions](https://github.com/octokit/app-permissions) – GitHub
  App permission specifications

## LICENSE

[MIT](LICENSE.md)
