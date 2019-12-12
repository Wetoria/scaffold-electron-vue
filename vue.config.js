const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  assetsDir: '.',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/common/components'))
      .set('@pages', resolve('src/pages'))
      .set('@router', resolve('src/common/router'))
      .set('@store', resolve('src/common/store'))
      .set('@common', resolve('src/common'))
      .set('@assets', resolve('src/common/assets'));
  },
};
