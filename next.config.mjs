/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/bn_resume",
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;