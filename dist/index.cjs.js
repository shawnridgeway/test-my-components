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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ComponentB_root__2nj4x {\n\tcolor: green;\n}";
var style = {"root":"ComponentB_root__2nj4x"};
styleInject(css);

class ComponentB extends React.Component {
  render() {
    return React__default.createElement("div", {
      className: cx(style.root)
    }, "Hello World 2!");
  }

}

exports.ComponentA = ComponentA;
exports.ComponentB = ComponentB;
