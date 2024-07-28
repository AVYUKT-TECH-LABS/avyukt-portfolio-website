/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["internspace.in", 'xstore.b-cdn.net', 'themewagon.com'],
        unoptimized: true
    },
    output: "export"
};

export default nextConfig;
