/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['blockchain.sirv.com'],
    },
    webpack: config => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
    },
}

module.exports = nextConfig
