## webpack-react-conf

This module helps to reduce the overloaded webpack configuration using **babel and JSX** as a default loader, dependencies management.

## Usage

* Create a file in the root folder `webpack.conf.js` and add the following code.

````
    const configuration = require('webpack-react-conf');
    const webpackConf = configuration(
    './src/index.jsx',
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


* Run webpack in the root folder
* See output file on `dist/index.min.js`
* Test your component in a web server

#### Options

The module returns a function, it accepts 4 parameters.

1. The entry point file
2. The output name
3. The name of the library
4. The library target


This module extend [webpack-babel-conf](https://github.com/juanpicado/webpack-babel-conf)
