const path = require("path");

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true, // React 엄격모드
  eslint: {
    ignoreDuringBuilds: true, // 빌드 중 ESLint오류 무시
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"], // 페이지 확장자 설정
  webpack: config => {
    config.resolve = {
      alias: {
        "@components": path.join(__dirname, "app", "_components/"),
        "@utils": path.join(__dirname, "app", "_utils"),
        "@styles": path.join(__dirname, "app", "_styles"),
        "@hooks": path.join(__dirname, "app", "_hooks"),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
