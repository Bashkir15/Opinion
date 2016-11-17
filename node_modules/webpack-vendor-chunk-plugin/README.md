# webpack-vendor-chunk-plugin

Removes the runtime code from a webpack chunk.

## Usage

`new VendorChunkPlugin(chunkNames)`, where `chunkNames` can be either an array of chunk names or a single chunk name.

## Example

`webpack.config.js`:

```js
var webpack = require('webpack');
module.exports = {
  entry: {
    app: './app.js',
    vendor: ['react', 'redux'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ],
};
```

Will create two files:
* `vendor.js`, which contains the `react` and `redux` modules and all their dependencies.
* `bundle.js`, which contains your application code and the rest of its dependencies.

While you would expect `vendor.js` to only execute the `react` and `redux` modules once they are required from within `bundle.js`, this is not the case. In fact, upon loading `bundle.js`, an equivalent to the following code is executed:

```js
require('react');
require('redux');
```

**This plugin removes this runtime code from your vendor chunks.**

The previous configuration becomes:

```js
var webpack = require('webpack');
var VendorChunkPlugin = require('webpack-vendor-chunk-plugin');
module.exports = {
  entry: {
    app: './app.js',
    vendor: ['react', 'redux'],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new VendorChunkPlugin('vendor'),
  ],
};
```
