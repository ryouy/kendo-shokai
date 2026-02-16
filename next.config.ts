import type { NextConfig } from "next";

const isGitHubPages =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";

// If you publish as a GitHub Project Page, the site is served under /<repo>.
// For https://ryouy.github.io/kendo-shokai/ => basePath = "/kendo-shokai"
const repoBasePath = "/kendo-shokai";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        images: { unoptimized: true },
        trailingSlash: true,
        basePath: repoBasePath,
        assetPrefix: repoBasePath,
      }
    : {}),
};

export default nextConfig;
