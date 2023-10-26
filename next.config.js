/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.themoviedb.org",
      "image.tmdb.org",
      "lh3.googleusercontent.com",
      "s.gravatar.com",
    ],
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,

      fs: false, // the solution
    };
    return config;
  },
};

module.exports = nextConfig;
