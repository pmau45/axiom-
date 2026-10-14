/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Netlify handles trailing slashes
  trailingSlash: false,
  // Production source maps off for performance
  productionBrowserSourceMaps: false,
  // Keep MDX sources in the serverless trace so sitemap/blog can read frontmatter
  // if Netlify ever invokes these routes as functions instead of static files.
  outputFileTracingIncludes: {
    '/sitemap.xml': ['./app/blog/content/**/*'],
    '/blog': ['./app/blog/content/**/*'],
    '/blog/[slug]': ['./app/blog/content/**/*'],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
