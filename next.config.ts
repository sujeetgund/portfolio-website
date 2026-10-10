import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Link',
            value: '</llms.txt>; rel="describedby"; type="text/markdown", </sitemap.xml>; rel="sitemap"; type="application/xml"',
          },
        ],
      },
    ];
  },
  env: {
    SITE_URL: process.env.NODE_ENV === 'production' ? 'https://sujeetgund.in' : 'http://localhost:3000',
  }
};

export default nextConfig;
