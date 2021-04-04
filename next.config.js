const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([[withImages, {}]], {
  images: {
    domains: ['localhost'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
});
