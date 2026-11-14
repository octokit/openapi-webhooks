# openapi

> GitHub's official Webhooks OpenAPI spec with Octokit extensions

[![@latest](https://img.shields.io/npm/v/@octokit/openapi-webhooks.svg)](https://www.npmjs.com/package/@octokit/openapi-webhooks)

Amends webhooks from [GitHub's official OpenAPI specification](https://github.com/github/rest-api-description/) with an `x-octokit` extension that includes the following keys

- `changes`: see change files in [changes/](changes/)

## Download

Download from https://unpkg.com/browse/@octokit/openapi-webhooks/generated/

## Node Usage

```js
import { schemas } from "@octokit/openapi-webhooks";
const version = schemas["api.github.com"].info.version;
const paths = Object.keys(schemas["api.github.com"].paths).sort();
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](LICENSE)
