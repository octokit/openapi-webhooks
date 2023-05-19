import { writeFile, readdir, readFile } from "node:fs/promises";
import prettier from "prettier";

/* if (!process.env.OCTOKIT_OPENAPI_VERSION) {
  throw new Error("OCTOKIT_OPENAPI_VERSION is not set");
} */

const pkg = JSON.parse((await readFile("package.json")).toString());

updatePackage();

async function updatePackage() {
  // set semantic-release configuration of npm packages
  const items = await readdir("packages");
  const typePackages = items.filter((item) =>
    item.startsWith("openapi-webhooks-types")
  );

  pkg.release.plugins = [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "semantic-release-plugin-update-version-in-files",
      {
        files: ["packages/openapi-webhooks/generated/*"],
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "packages/openapi-webhooks/generated/*.json",
      },
    ],
    ["@semantic-release/npm", { pkgRoot: "packages/openapi-webhooks" }],
  ]
    .concat(
      typePackages.map((packageName) => {
        return [
          "@semantic-release/npm",
          {
            pkgRoot: `packages/${packageName}`,
          },
        ];
      })
    );

  await writeFile(
    "package.json",
    prettier.format(JSON.stringify(pkg), { parser: "json-stringify" })
  );
}
