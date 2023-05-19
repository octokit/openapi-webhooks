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
    "@semantic-release/github",
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
    )
    .concat([
      [
        "semantic-release-plugin-update-version-in-files",
        {
          files: ["generated/*"],
        },
      ],
      [
        "@semantic-release/github",
        {
          assets: "generated/*.json",
        },
      ],
      ["@semantic-release/npm", { pkgRoot: "packages/openapi-webhooks" }],
    ]);

  await writeFile(
    "package.json",
    prettier.format(JSON.stringify(pkg), { parser: "json-stringify" })
  );
}
