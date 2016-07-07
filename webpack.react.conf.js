var DefaultConfig = require('webpack-babel-conf');
var _ = require('lodash');

var babelConf = {
    module: {
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.png$/, loader: "url-loader?limit=100000" },
          { test: /\.jpg$/, loader: "file-loader" },
          {
            test: /.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }
        ]
    }
};

module.exports = function() {
    return _.merge(DefaultConfig.call(null, ...arguments), babelConf);
};
