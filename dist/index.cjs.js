'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var cx = _interopDefault(require('classnames'));

class ComponentA extends React.Component {
  render() {
    return React__default.createElement("div", null, "Hello World!");
  }

}

var style = {"root":"ComponentB_root__2nj4x"};

class ComponentB extends React.Component {
  render() {
    return React__default.createElement("div", {
      className: cx(style.root)
    }, "Hello World 2!");
  }

}

exports.ComponentA = ComponentA;
exports.ComponentB = ComponentB;
