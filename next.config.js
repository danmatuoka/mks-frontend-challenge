/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mks-sistemas.nyc3.digitaloceanspaces.com",
        port: "",
        pathname: "/products/**",
      },
    ],
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = nextConfig;
