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
	styleInject(css);

	class ComponentB$1 extends React.Component {
	  render() {
	    return React__default.createElement("div", {
	      className: "root"
	    }, "Hello World 2!");
	  }

	}

	exports.ComponentA = ComponentA;
	exports.ComponentB = ComponentB$1;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
