/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR mode - removed static export
  images: {
    unoptimized: false, // Can use Next.js image optimization with SSR
  },
  trailingSlash: true,
}

module.exports = nextConfig