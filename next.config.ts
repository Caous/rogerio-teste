import type { NextConfig } from "next";
import mdx from "@next/mdx";

const withMDX = mdx();

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  turbopack: {
    resolveExtensions: [".mdx", ".md", ".tsx", ".ts", ".jsx", ".js", ".json"],
  },
};

export default withMDX(nextConfig);
