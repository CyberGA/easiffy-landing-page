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
        hostname: "easiffy.onrender.com",
        port: "",
        pathname: "/upload-dir/*/**",
      },
    ],
  },
};


export default nextConfig;