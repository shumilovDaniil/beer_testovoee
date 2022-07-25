/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  basePath: "/beer_testovoee",
  assetPrefix: "/beer_testovoee"
};

module.exports = nextConfig;
