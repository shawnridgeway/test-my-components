import React, { Component } from 'react';
import { ComponentA, ComponentB } from './entry';

class Example extends Component {
  render() {
    return (
      <div>
        <ComponentA />
        <ComponentB />
      </div>
    );
  }
}

export default Example;
