/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/personal-loan",
        destination: `/personal-loan/${process.env.DEMO_API_KEY}/${process.env.DEMO_API_SECRET}`,
        permanent: true,
      },
      {
        source: "/personal-loan-questionairre",
        destination: `/personal-loan-questionairre/${process.env.DEMO_API_KEY}/${process.env.DEMO_API_SECRET}`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
