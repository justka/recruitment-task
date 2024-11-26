import type { Configuration as WebpackConfig } from "webpack";

const nextConfig = {
  webpack(config: WebpackConfig) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
export default nextConfig;
