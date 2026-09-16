/**
 * @type {import('next').NextConfig}
 *
 * Security headers here are intentionally safe defaults that never break
 * inline scripts (dark-mode, JSON-LD) or third-party loaders (AdSense).
 *
 * Deliberately NOT added yet (add when actually needed):
 *  - Content-Security-Policy: requires 'unsafe-inline'/'unsafe-eval' once
 *    AdSense is active, which mostly defeats the purpose. Introduce a tested
 *    starter policy when ads are live and validated.
 *  - images.*: only relevant once next/image serves remote/optimized images
 *    (currently 0 usages).
 *  - redirects: add when a route is renamed or removed.
 *  - compress: Vercel's CDN already gzips/Brotli-compresses responses.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;