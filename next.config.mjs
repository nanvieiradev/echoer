/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true, // Necessário se usar placeholders em SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Recomendado com SVG
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig;
