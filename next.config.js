/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Optionally, if you're deploying to a subdirectory (like username.github.io/repo-name)
  // uncomment the line below and replace 'repo-name' with your repository name
  // basePath: '/repo-name',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 