/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'bn_resume';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  generateBuildId: async () => {
    return 'build'
  }
};

export default nextConfig;