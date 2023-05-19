# openapi

> GitHub's official OpenAPI spec with Octokit extensions

[![@latest](https://img.shields.io/npm/v/@wolfy1339/openapi-webhooks.svg)](https://www.npmjs.com/package/@wolfy1339/openapi-webhooks)

Amends webhooks from [GitHub's official OpenAPI specification](https://github.com/github/rest-api-description/) with an `x-octokit` extension that includes the following keys

- `changes`: see change files in [changes/](changes/)

## Download

Download from https://unpkg.com/browse/@wolfy1339/openapi-webhooks/generated/

## Node Usage

```js
const { schemas } = require("@wolfy1339/openapi-webhooks");
const version = schemas["api.github.com"].info.version;
const paths = Object.keys(schemas["api.github.com"].paths).sort();
```

## GitHub Actions usage

1. Install [Octokit Release Notifier app](https://github.com/apps/octokit-release-notifier/)
2. Create a new workflow file:

```yml
name: Update OpenAPI
on:
  repository_dispatch:
    types: [octokit/openapi-webhooks release]

jobs:
  published:
    runs-on: ubuntu-latest
    steps:
      - run: "echo: 'new release: ${{ github.event.release.tag_name }}'"
```

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## License

[MIT](LICENSE)
