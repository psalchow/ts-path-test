module.exports = () => {
  return {
    entry: {
      index: './src/index.ts',
    },
    output: {
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'DummyComponent',
      umdNamedDefine: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          // loader: 'awesome-typescript-loader',
          loader: 'ts-loader',
        },
      ],
    },
  };
};
