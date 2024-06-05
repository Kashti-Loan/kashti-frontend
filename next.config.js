/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/personal-loan",
        destination: `/personal-loan/${process.env.DEMO_API_KEY_LP1}/${process.env.DEMO_API_SECRET_LP1}`,
        permanent: true,
      },
      {
        source: "/personal-loan-questionairre",
        destination: `/personal-loan-questionairre/${process.env.DEMO_API_KEY_LP2}/${process.env.DEMO_API_SECRET_LP2}`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
