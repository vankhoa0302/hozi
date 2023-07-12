/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        "root": [
          "./src"
        ],
        "alias": {
          '@navigators': './src/navigators/',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@config': './src/config',
          '@assets': './src/assets',
          '@redux': './src/redux',
          '@common': './src/common',
          '@modules': './src/modules',
          '@data': './src/data',

        },
      },
    ],
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      blacklist: null,
      whitelist: null,
      safe: false,
      allowUndefined: true
    }],
    'babel-plugin-transform-inline-environment-variables'
  ],
  // env: {
  //   production: {
  //     plugins: ['transform-remove-console'],
  //   },
  // },
};

