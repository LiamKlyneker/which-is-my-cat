module.exports = {
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: '.',
        alias: {
          'luar-components': './src/components/luar-components',
          '#components': './src/components',
          '#assets': './src/assets',
        },
      },
    ],
  ],
};
