import React, { Component } from 'react';
import cx from 'classnames';
import style from './ComponentB.css';

class ComponentB extends Component {
	render() {
		return (
			<div className={cx(style.root)}>Hello World 2!</div>
		);
	}
}

export default ComponentB;