(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global['my-components'] = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;

	class ComponentA extends React.Component {
	  render() {
	    return React__default.createElement("div", null, "Hello World!");
	  }

	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
	});

	var style = {
	    "root": "mc9de166f0_root"
	};

	class ComponentB extends React.Component {
	  render() {
	    return React__default.createElement("div", {
	      className: classnames(style.root)
	    }, "Hello World 2!");
	  }

	}

	exports.ComponentA = ComponentA;
	exports.ComponentB = ComponentB;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
