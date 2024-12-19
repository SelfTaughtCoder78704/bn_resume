/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/bn_resume/' : '',
  basePath: isProd ? '/bn_resume' : '',
  output: 'export'
};

export default nextConfig;