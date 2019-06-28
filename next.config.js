const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  webpack(config) {
    config.resolve.alias = {
        "~components": path.join(__dirname, 'components'),
        "~": __dirname
    }

    return config;
  },
});