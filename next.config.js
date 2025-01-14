/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  modularizeImports: {
    'antd': {
      transform: 'antd/es/{{member}}',
      style: true
    }
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' && {
      exclude: ['error'],
    }
  },
  webpack: (config) => {
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
