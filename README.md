# React Async Flux Boilerplate

React Async Flux Boilerplate is a minimal single-page web application demonstrating the unidirectional Flux data flow in an asynchronous setting. The application itself is a simple chat app, offering server persistence of messages to memory and realtime updates between browser sessions. It is built using [React](https://facebook.github.io/react/), [Socket.io](http://socket.io/), and [Redux](https://github.com/gaearon/redux), compiled using [Webpack](http://webpack.github.io/) and [Babel](http://babeljs.io/).

Notable features include...

- Clear distinction between "Smart and Dumb Components" [[1]](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) [[2]](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c)
- Network requests and Socket.io bindings contained in controller-views. Action creators are always synchronous
- Re-use of same action and reducer logic between server and client

## Installation

The following instructions assume [Node.js](https://nodejs.org/) is already installed.

First, clone the repository.

```bash
$ git clone https://github.com/aduth/react-async-flux.git
```

Next, navigate to the directory and install Node dependencies.

```bash
$ cd react-async-flux
$ npm install
```

Finally, use the npm `dev` script to start the server and to watch source files for change.

```bash
$ npm run dev
```

Now you can navigate to [http://localhost:3000/](http://localhost:3000) in your browser.

## License

Copyright 2015 Andrew Duthie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
