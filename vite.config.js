import { defineConfig } from "vite";

function githubPagesBase() {
  const isActions = process.env.GITHUB_ACTIONS === "true";
  if (!isActions) return "/";

  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
  return repo ? `/${repo}/` : "/";
}

export default defineConfig({
  base: githubPagesBase(),
});
