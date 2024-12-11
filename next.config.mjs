/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.easiffy.com",
        port: "",
        pathname: "/resources/**",
      },
    ],
  },
};


export default nextConfig;
