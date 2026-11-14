# GitHub Copilot Code Review Instructions

## Project overview

This repository maintains GitHub's Webhooks OpenAPI specifications with Octokit-specific extensions and generates distributable JSON specifications and TypeScript definitions.

The project supports GitHub.com, GitHub Enterprise Cloud (GHEC), and multiple GitHub Enterprise Server (GHES) versions.

The repository is primarily a specification-processing and code-generation project. Many files are automatically generated from upstream specifications rather than authored manually.

## Repository structure

- `scripts/` contains the code responsible for downloading, processing, validating, and generating specifications and TypeScript definitions.
- `cache/` contains cached upstream specification data.
- `packages/openapi-webhooks/` contains the distributable OpenAPI specifications.
- `packages/openapi-webhooks-types/` contains generated TypeScript types for GitHub.com.
- `packages/openapi-webhooks-types-ghec/` contains generated TypeScript types for GitHub Enterprise Cloud.
- `packages/openapi-webhooks-types-ghes-*/` contains generated TypeScript types for individual GitHub Enterprise Server versions.
- `packages/openapi-webhooks-types-transition/` contains transitional TypeScript definitions.

## Code review priorities

Prioritize functional correctness, backward compatibility, and the integrity of generated specifications.

Focus on:

1. Errors in OpenAPI schema processing, transformations, and generation.
2. Incorrect handling of webhook event names, actions, payloads, and schemas.
3. Incorrect TypeScript generation, including missing, invalid, or incompatible definitions.
4. Unintended changes to supported GitHub API versions or differences between GitHub.com, GHEC, and GHES.
5. Regressions in package publishing, build scripts, and automated releases.
6. Incorrect assumptions about optional properties, nullable values, schema references, or OpenAPI constructs.
7. Changes that could silently omit webhook events, actions, or payload properties.

## Webhook specification change summary

When reviewing pull requests that modify webhook specifications or generated TypeScript definitions, provide a consolidated summary of the changes, even when no actionable code review issues are found.

The summary must identify the following categories.

### Added events

- List newly introduced webhook events and actions.
- Use the format `event.action` for events with actions, and `event` for those without.
- Use actual GitHub webhook event and action identifiers rather than generated TypeScript type names.
- Distinguish entirely new webhook events from new actions added to existing events.
- Group actions belonging to the same event when appropriate.

### Removed events

- List webhook events or actions that have been removed.
- Distinguish removal of an entire webhook event from removal of individual actions.
- Identify removals that may affect existing webhook consumers.

### Deprecated events

- Identify webhook events or actions newly marked as deprecated.
- Identify changes to existing deprecation status, including removal of deprecation markers.
- Note when previously deprecated events or actions are removed.
- Do not assume that a removed event was previously deprecated.

### Payload changes

Summarize meaningful changes to webhook payload schemas, grouped by event and action where applicable.

Identify:

- Added, removed, or renamed properties.
- Changes to property types.
- Changes to required or optional properties.
- Changes to property nullability.
- Added, removed, or modified enum values.
- Changes to schema references and relationships.
- Structural changes to nested objects and arrays.
- Changes to shared schemas that affect multiple webhook payloads.
- Changes to discriminators or other properties used to distinguish webhook actions.
- Changes that could affect downstream TypeScript consumers or webhook handlers.

Clearly distinguish additive changes from potentially breaking changes.

Prioritize changes that affect the public shape or semantics of webhook payloads. Avoid enumerating repetitive or purely cosmetic schema differences.

When a shared schema changes, identify the affected webhook events where reasonably possible without duplicating the same explanation.

### Breaking changes

Highlight changes that could break existing consumers, including:

- Removed webhook events or actions.
- Removed or renamed payload properties.
- Newly required properties.
- Changes to existing property types.
- Narrowed enum values or incompatible schema constraints.
- Changes to generated TypeScript declarations that invalidate previously valid consumer code.

Distinguish confirmed breaking changes from potential compatibility concerns.

### Review summary format

Use the following structure:

**Webhook specification changes**

**Added events**
- List newly added events and actions, or "None".

**Removed events**
- List removed events and actions, or "None".

**Deprecated events**
- List newly deprecated events and actions, or "None".

**Payload changes**
- Summarize significant changes grouped by affected event and action, or "None".

**Breaking changes**
- Identify confirmed or potential breaking changes, or "None identified".

### Summary guidelines

- Compare specifications before and after the pull request rather than relying solely on filenames or generated TypeScript diffs.
- Account for differences between GitHub.com, GHEC, and GHES.
- Identify which GitHub API version is affected when a change is version-specific.
- Do not report the same change multiple times merely because it appears in multiple generated packages.
- Distinguish intentional upstream specification changes from possible generator regressions.
- Do not confuse generated TypeScript type names with actual webhook event or action identifiers.
- Do not classify an event as deprecated unless its deprecation is explicitly indicated.
- Do not classify a removed event as deprecated merely because it has disappeared.
- If a category contains no changes, explicitly state "None".
- If the available diff is insufficient to reliably identify changes, state that the category could not be fully verified rather than assuming no changes.
- Keep the summary concise but comprehensive, prioritizing changes relevant to downstream consumers.

## Generated files

Generated files should be treated as outputs of the generation pipeline, not independently maintained source files.

- Do not recommend manually editing generated specifications or TypeScript definitions when the underlying issue belongs in the generator or upstream schema.
- Changes to generated files may be large and repetitive, especially when updating upstream specifications.
- Do not flag differences caused by legitimate upstream specification updates unless there is concrete evidence of a regression.
- When identifying a problem in generated output, attempt to trace it to its source in the generation scripts or upstream specification.
- Do not suggest adding individual tests for every generated webhook event or schema.
- Avoid repetitive comments about the same issue appearing across generated files or GitHub versions.
- Do not confuse valid upstream changes with errors introduced by the generation pipeline.

## OpenAPI and TypeScript

- Preserve upstream schema semantics unless the project explicitly implements a transformation.
- Distinguish between required, optional, and nullable properties.
- Preserve valid schema references and relationships between definitions.
- Do not assume that every webhook event has an action or that every webhook payload has the same structure.
- Preserve distinctions between webhook event names and their actions.
- Do not assume that all GitHub API versions expose identical webhook events or schemas.
- Avoid unnecessary type assertions, broad `any` types, or changes that reduce type accuracy.
- Consider compatibility with downstream consumers of the published packages.
- Pay particular attention to changes affecting discriminated unions and event-specific payload types.

## Development conventions

- The project uses JavaScript ES modules and Node.js.
- Follow existing code patterns rather than introducing unrelated architectural changes.
- Respect the repository's Prettier formatting conventions.
- Prefer minimal, targeted changes to the generation pipeline.
- Avoid introducing new dependencies unless clearly justified.
- Consider whether a change affects deterministic generation and reproducibility.

Relevant package scripts include:

- `npm run download`
- `npm run build`
- `npm test`
- `npm run generate-types`
- `npm run lint`

## Releases and versioning

The repository uses semantic-release and publishes multiple npm packages.

- Consider the compatibility implications of changes to generated specifications and public TypeScript definitions.
- Identify genuine breaking changes to published interfaces.
- Do not assume that an upstream schema change indicates a defect.
- Pay particular attention to changes that could cause package versions, generated files, or published artifacts to become inconsistent.
- Avoid suggesting manual version bumps where versioning is managed automatically.
- Distinguish changes requiring consumer migration from backward-compatible schema additions.

## Review behavior

- Report actionable issues introduced by the pull request, not unrelated pre-existing problems.
- Focus on defects with concrete evidence and meaningful consequences.
- Explain the conditions under which a suspected issue would occur.
- Avoid speculative warnings without a plausible failure scenario.
- Do not flag intentional project conventions as problems.
- Avoid stylistic suggestions already covered by automated formatting.
- Do not propose refactoring unrelated code.
- Consolidate duplicate findings into a single comment wherever possible.
- Prefer correctness and maintainability over subjective style preferences.
- If a change is consistent with the upstream specification and existing generation behavior, do not flag it merely because it appears unusual.
- Prioritize issues that could result in incorrect published specifications, invalid TypeScript, missing webhook definitions, or unexpected breaking changes.
- Provide the webhook specification change summary for relevant pull requests regardless of whether defects are identified.
