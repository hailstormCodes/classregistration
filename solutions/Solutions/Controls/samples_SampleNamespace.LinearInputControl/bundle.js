/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./LinearInputControl/index.ts":
/*!*************************************!*\
  !*** ./LinearInputControl/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.LinearInputControl = void 0;\n\nvar LinearInputControl =\n/** @class */\nfunction () {\n  function LinearInputControl() {}\n\n  LinearInputControl.prototype.init = function (context, notifyOutputChanged, state, container) {\n    this._context = context;\n    this._container = document.createElement(\"div\");\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._refreshData = this.refreshData.bind(this); // creating HTML elements for the input type range and binding it to the function which refreshes the control data\n\n    this.inputElement = document.createElement(\"input\");\n    this.inputElement.setAttribute(\"type\", \"range\");\n    this.inputElement.addEventListener(\"input\", this._refreshData); //setting the max and min values for the control.\n\n    this.inputElement.setAttribute(\"min\", \"1\");\n    this.inputElement.setAttribute(\"max\", \"1000\");\n    this.inputElement.setAttribute(\"class\", \"linearslider\");\n    this.inputElement.setAttribute(\"id\", \"linearrangeinput\"); // creating a HTML label element that shows the value that is set on the linear range control\n\n    this.labelElement = document.createElement(\"label\");\n    this.labelElement.setAttribute(\"class\", \"LinearRangeLabel\");\n    this.labelElement.setAttribute(\"id\", \"lrclabel\"); // retrieving the latest value from the control and setting it to the HTMl elements.\n\n    this._value = context.parameters.controlValue.raw;\n    this.inputElement.setAttribute(\"value\", context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"0\");\n    this.labelElement.innerHTML = context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"0\"; // appending the HTML elements to the control's HTML container element.\n\n    this._container.appendChild(this.inputElement);\n\n    this._container.appendChild(this.labelElement);\n\n    container.appendChild(this._container);\n  };\n\n  LinearInputControl.prototype.refreshData = function (evt) {\n    this._value = this.inputElement.value;\n    this.labelElement.innerHTML = this.inputElement.value;\n\n    this._notifyOutputChanged();\n  };\n\n  LinearInputControl.prototype.updateView = function (context) {\n    // storing the latest context from the control.\n    this._value = context.parameters.controlValue.raw;\n    this._context = context;\n    this.inputElement.setAttribute(\"value\", context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"\");\n    this.labelElement.innerHTML = context.parameters.controlValue.formatted ? context.parameters.controlValue.formatted : \"\";\n  };\n\n  LinearInputControl.prototype.getOutputs = function () {\n    return {\n      controlValue: this._value\n    };\n  };\n\n  LinearInputControl.prototype.destroy = function () {\n    this.inputElement.removeEventListener(\"input\", this._refreshData);\n  };\n\n  return LinearInputControl;\n}();\n\nexports.LinearInputControl = LinearInputControl;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./LinearInputControl/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./LinearInputControl/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('SampleNamespace.LinearInputControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LinearInputControl);
} else {
	var SampleNamespace = SampleNamespace || {};
	SampleNamespace.LinearInputControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.LinearInputControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}