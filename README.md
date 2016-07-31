## webpack-react-conf

This module helps to reduce the overloaded webpack configuration using **babel and JSX** as a default loader, dependencies management.

    npm install webpack-react-conf --save-dev
    
The configuration contains the following loaders:

* scss-loader (.scss) `node-sass required`
* file-loader
* style-loader (css modules)
* postcss-loader
* url-loader (jpg and png)

It bundle a file (style.css) with all components that use styles as references.

## Usage

* Create a file in the root folder `webpack.conf.js` and add the following code.

````
    const configuration = require('webpack-react-conf');
    const webpackConf = configuration(
    './src/index.jsx',
    './build',
    'index.min.js',
    'myAppFoo',
    'umd');
    module.exports = webpackConf;
````

* Define your React Component at `./src/index.jsx`

`````
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return <p>Hello, world!</p>;
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

export default HelloWorld;

`````


* Run webpack in the root folder `webpack --config webpack.conf.js`
* Look the output file at `build/index.min.js`
* Test your component in a web server

#### Options

The module returns a function, it accepts 4 parameters.

1. The entry point file
2. The output name
3. The name of the library
4. The library target

#### Examples

[https://github.com/juanpicado/webpack-examples/tree/master/react-bundle](https://github.com/juanpicado/webpack-examples/tree/master/react-bundle)


This module extends [webpack-babel-conf](https://github.com/juanpicado/webpack-babel-conf)
