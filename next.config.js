require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  webpack(config) {
    config.resolve.alias = {
      '~components': path.join(__dirname, 'components'),
      '~': __dirname,
    };
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
});
