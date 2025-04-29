import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media0.giphy.com', 'res.cloudinary.com'], // <-- autorizas tu dominio de GIF
    
  },
};

export default nextConfig;
