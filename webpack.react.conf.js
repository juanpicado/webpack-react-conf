var DefaultConfig = require('webpack-babel-conf');
var _ = require('lodash');

var reactConf = {
    module: {
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.png$/, loader: "url-loader?limit=100000" },
          { test: /\.jpg$/, loader: "file-loader" },
          {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
          },
          {
            test: /.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['.css', '.png', '.jpg', '.scss', '.js', '.jsx']
    }
};

module.exports = function() {
    return _.merge(DefaultConfig.call(null, ...arguments), reactConf);
};
