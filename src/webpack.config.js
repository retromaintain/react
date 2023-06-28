const webpack = require('webpack');

module.exports = {
  // ... other webpack configuration options
  
  plugins: [
    // Exclude ResizeObserver polyfill from the bundle
    new webpack.IgnorePlugin(/^@juggle\/resize-observer$/),
  ],
};
