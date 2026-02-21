import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // ✅ 必须有这个
  images: {
    unoptimized: true,
  },
  basePath: '/my-blog',
  assetPrefix: '/my-blog/',
};

export default nextConfig;