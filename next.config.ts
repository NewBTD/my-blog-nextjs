import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {    
    serverComponentsExternalPackages: ["mongoose"] // <-- and this
  },
  // and the following to enable top-level await support for Webpack
  serverExternalPackages: ["mongoose"],

  webpack: (config,{isServer}) => {
    if (isServer) {
      config.externals = [
        ...config.externals,
        "mongoose",
      ];
    }
    config.experiments = {
      topLevelAwait: true,
      layers: true,

    };
    return config;
  },
  
};

export default nextConfig;