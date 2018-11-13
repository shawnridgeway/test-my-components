import React, { Component } from 'react';
import cx from 'classnames';

class ComponentA extends Component {
  render() {
    return React.createElement("div", null, "Hello World!");
  }

}

var style = {"root":"ComponentB_root__2nj4x"};

class ComponentB extends Component {
  render() {
    return React.createElement("div", {
      className: cx(style.root)
    }, "Hello World 2!");
  }

}

export { ComponentA, ComponentB };
