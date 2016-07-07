var DefaultConfig = require('webpack-babel-conf');
var _ = require('lodash');

var babelConf = {
    module: {
        loaders: [
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
