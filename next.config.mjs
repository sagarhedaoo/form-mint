/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "form-mint.vercel.app",
      },
    ],
  },
};

export default nextConfig;

// images: {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'res.cloudinary.com',
//       pathname: '**',
//     },
//   ],
// },

// ["https://form-mint.vercel.app/"],
