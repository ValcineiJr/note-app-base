module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@dtos': './src/dtos',
            '@hooks': './src/hooks',
            '@pages': './src/pages',
            '@router': './src/router',
            '@services': './src/services',
            '@store': './src/store',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@schemas': '.src/schemas',
            '@navigation': '.src/navigation',
          },
        },
      ],
    ],
  };
};
