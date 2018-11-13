import React, { Component } from 'react';
import cx from 'classnames';

class ComponentA extends Component {
  render() {
    return React.createElement("div", null, "Hello World!");
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

class ComponentB extends Component {
  render() {
    return React.createElement("div", {
      className: cx(style.root)
    }, "Hello World 2!");
  }

}

export { ComponentA, ComponentB };
