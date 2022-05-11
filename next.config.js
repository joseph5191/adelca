require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  generateEtags: false,

  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },
};
