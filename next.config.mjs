/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'bn_resume';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repoName}` : '',
  basePath: isProd ? `/${repoName}` : '',
  output: 'export',
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    
    // Update asset handling for fonts
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });

    return config;
  }
};

export default nextConfig;