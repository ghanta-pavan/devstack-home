import type { NextConfig } from "next";

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
}

// User / Organization pages (<username>.github.io) are served from root "/"
const isUserPage = repo.endsWith(".github.io");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubActions && repo && !isUserPage ? `/${repo}` : "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGithubActions ? "export" : undefined,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
