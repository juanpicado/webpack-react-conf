var DefaultConfig = require('webpack-babel-conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var _ = require('lodash');

var query = { 
    presets: ['es2015', 'react']
};
var styling = ['style', 'css'];
var reactConf = {
    module: {
        loaders: [          
          { test: /\.png$/, loader: "url-loader?limit=100000" , exclude: /node_modules/ },
          { test: /\.jpg$/, loader: "file-loader" , exclude: /node_modules/ },
          { test: /\.scss$/, loaders: styling.concat(['sass']) , exclude: /node_modules/},
          { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
          { test: /.jsx?$/, loader: 'babel', exclude: /node_modules/, query: query
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components']    
    }
};

module.exports = function() {
    return _.merge(DefaultConfig.call(null, ...arguments), reactConf);
};
