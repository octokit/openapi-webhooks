export const schemas = {
  ["api.github.com"]: (
    await import("./generated/api.github.com.json", { with: { type: "json" } })
  ).default,
  ["ghec"]: (await import("./generated/ghec.json", { with: { type: "json" } }))
    .default,
  ["ghes-3.18"]: (
    await import("./generated/ghes-3.18.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.19"]: (
    await import("./generated/ghes-3.19.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.20"]: (
    await import("./generated/ghes-3.20.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.21"]: (
    await import("./generated/ghes-3.21.json", { with: { type: "json" } })
  ).default,
  ["ghes-3.22"]: (
    await import("./generated/ghes-3.22.json", { with: { type: "json" } })
  ).default,
};
