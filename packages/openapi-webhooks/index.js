export const schemas = {
  ["api.github.com"]: (
    await import("./generated/api.github.com.json", { with: { type: "json" } })
  ).default,
  ["ghec"]: (await import("./generated/ghec.json", { with: { type: "json" } }))
    .default,
  ["ghes-3.14"]: (
    await import("./generated/ghes-3.14.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.15"]: (
    await import("./generated/ghes-3.15.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.16"]: (
    await import("./generated/ghes-3.16.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.17"]: (
    await import("./generated/ghes-3.17.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.18"]: (
    await import("./generated/ghes-3.18.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.19"]: (
    await import("./generated/ghes-3.19.json", { with: { type: "json" } })
  ).default,
};
