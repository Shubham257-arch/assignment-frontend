module.exports = function override(config, env) {
  // Example: modify the Webpack config or Jest config here
  if (env === 'test') {
    config.module.rules.push({
      test: /\.js$/,
      loader: require.resolve('babel-jest'),
    });
  }
  return config;
};
