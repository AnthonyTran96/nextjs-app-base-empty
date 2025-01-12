/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    }
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**'
      }
    ]
  },
  poweredByHeader: false,
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' && {
      exclude: ['error'],
    }
  }
  // webpack: (config) => {
  //   config.externals.push({
  //     bufferutil: 'bufferutil',
  //     'utf-8-validate': 'utf-8-validate',
  //   });
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: {
  //       loader: '@svgr/webpack',
  //       options: {
  //         dimensions: false,
  //       },
  //     },
  //   });
  //   return config;
  // },
};

module.exports = nextConfig;
