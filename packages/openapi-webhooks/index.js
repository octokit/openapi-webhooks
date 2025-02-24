export const schemas = {
  ["api.github.com"]: (
    await import("./generated/api.github.com.json", { with: { type: "json" } })
  ).default,
  ["ghec"]: (await import("./generated/ghec.json", { with: { type: "json" } }))
    .default,
  ["ghes-3.10"]: (
    await import("./generated/ghes-3.10.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.11"]: (
    await import("./generated/ghes-3.11.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.12"]: (
    await import("./generated/ghes-3.12.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.13"]: (
    await import("./generated/ghes-3.13.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.14"]: (
    await import("./generated/ghes-3.14.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.15"]: (
    await import("./generated/ghes-3.15.json", { with: { type: "json" } })
  ).default,
};
