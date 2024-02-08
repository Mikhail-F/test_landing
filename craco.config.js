const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@svg': path.resolve(__dirname, 'src/assets/svg/'),
      '@state': path.resolve(__dirname, 'src/state/'),
      '@widgets': path.resolve(__dirname, 'src/components/widgets/'),
      '@commons': path.resolve(__dirname, 'src/components/commons/'),
    },
  },
};