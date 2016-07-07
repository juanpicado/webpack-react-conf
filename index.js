// return a basic webpack configuration

var config = require('./webpack.react.conf');
module.exports = function() {
    return config.call(null, ...arguments);
};
