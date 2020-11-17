module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/tic_tac_toe_bg.wasm": function() {
/******/ 			return {
/******/ 				"./tic_tac_toe_bg.js": {
/******/ 					"__wbindgen_json_parse": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/tic_tac_toe_bg.js"].exports["__wbindgen_json_parse"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_json_serialize": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/tic_tac_toe_bg.js"].exports["__wbindgen_json_serialize"](p0i32,p1i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["./pkg/tic_tac_toe_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = new Promise(function (resolve, reject) {
/******/ 					var { readFile } = require('fs');
/******/ 					var { join } = require('path');
/******/
/******/ 					try {
/******/ 						readFile(join(__dirname, "..", "static/wasm/" + {"./pkg/tic_tac_toe_bg.wasm":"bdc09159512491bfda84"}[wasmModuleId] + ".wasm"), function(err, buffer){
/******/ 							if (err) return reject(err);
/******/
/******/ 							// Fake fetch response
/******/ 							resolve({
/******/ 								arrayBuffer() { return Promise.resolve(buffer); }
/******/ 							});
/******/ 						});
/******/ 					} catch (err) { reject(err); }
/******/ 				});
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise) {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = Promise.all([
/******/ 						bytesPromise.then(function(bytes) { return WebAssembly.compile(bytes); }),
/******/ 						importObject
/******/ 					]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.module.css */ \"./components/about.module.css\");\n/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ \"prismjs\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismjs_components_prism_rust__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-rust */ \"prismjs/components/prism-rust\");\n/* harmony import */ var prismjs_components_prism_rust__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_rust__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/nacho/prog/next/tic-tac-toe/components/about.js\";\n\n\n\n\n\nconst About = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    prismjs__WEBPACK_IMPORTED_MODULE_3___default.a.highlightAll();\n  }, []);\n  const minimaxCode = `\n   //  Returns the optimal action for the current player on the board.\n   fn minimax(game: &Game) -> Option<usize> {\n    if terminal(game) {\n        return None;\n    }\n\n    let mut best_action: usize = 2;\n\n    match player(game) {\n        Square::X => {\n            let mut max_v = i64::MIN;\n            for action in actions(game) {\n                let next_board = result(game, action).unwrap();\n                if winner(&next_board) == Some(Square::X) {\n                    return Some(action);\n                }\n                let v = min_val(&next_board, i64::MIN, i64::MAX);\n                if v > max_v {\n                    best_action = action;\n                    max_v = v;\n                }\n            }\n        }\n        Square::O => {\n            let mut min_v = i64::MAX;\n            for action in actions(game) {\n                let next_board = result(game, action).unwrap();\n                if winner(&next_board) == Some(Square::O) {\n                    return Some(action);\n                }\n                let v = max_val(&next_board, i64::MIN, i64::MAX);\n                if v < min_v {\n                    best_action = action;\n                    min_v = v;\n                }\n            }\n        }\n        Square::Null => (),\n    }\n\n    Some(best_action)\n}\n\n// Returns the max value \"v\"\nfn max_val(game: &Game, mut alpha: i64, beta: i64) -> i64 {\n    if terminal(&game) {\n        return utility(&game);\n    }\n    let mut v = i64::MIN;\n    for action in actions(game) {\n        v = v.max(min_val(&result(game, action).unwrap(), alpha, beta));\n        alpha = v.max(alpha);\n        if alpha >= beta {\n            break;\n        }\n    }\n\n    v\n}\n\n// Returns the min value \"v\"\nfn min_val(game: &Game, alpha: i64, mut beta: i64) -> i64 {\n    if terminal(&game) {\n        return utility(&game);\n    }\n    let mut v = i64::MAX;\n    for action in actions(game) {\n        v = v.min(max_val(&result(&game, action).unwrap(), alpha, beta));\n        beta = v.min(beta);\n        if alpha >= beta {\n            break;\n        }\n    }\n\n    v\n}\n  `;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: [\"Las respuestas autom\\xE1ticas en el TA-TE-TI de arriba est\\xE1n generadas en base al algor\\xEDtmo \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://es.wikipedia.org/wiki/Minimax\",\n        target: \"_\",\n        children: \"minimax\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 98\n      }, undefined), \". Como dice Wikipedia \\\"minimax es un m\\xE9todo de decisi\\xF3n para minimizar la p\\xE9rdida m\\xE1xima esperada en juegos con adversario y con informaci\\xF3n perfecta\\\".\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: \"La implementaci\\xF3n est\\xE1 hecha en Rust y compilado a Webassembly con wasm-pack. La p\\xE1gina web est\\xE1 hecha en Next.js.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: \"Cada vez que uno hace una jugada el programa responde con la respuesta \\xF3ptima en base a la siguiente funci\\xF3n:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n        className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.codeBlock,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n          class: \"language-rust\",\n          children: minimaxCode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 43\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0LmpzP2QzODIiXSwibmFtZXMiOlsiQWJvdXQiLCJ1c2VFZmZlY3QiLCJQcmlzbSIsImhpZ2hsaWdodEFsbCIsIm1pbmltYXhDb2RlIiwic3R5bGVzIiwidGV4dCIsImNvZGVCbG9jayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUVsQkMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLGtEQUFLLENBQUNDLFlBQU47QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsUUFBTUMsV0FBVyxHQUNoQjtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E5RUU7QUFnRkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQSxvSUFDMkY7QUFBRyxZQUFJLEVBQUMsdUNBQVI7QUFBZ0QsY0FBTSxFQUFDLEdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFRRTtBQUFLLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFXRTtBQUFLLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVELHdEQUFNLENBQUNFLFNBQXZCO0FBQUEsK0JBQWtDO0FBQU0sZUFBSyxFQUFDLGVBQVo7QUFBQSxvQkFBNkJIO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQSxrQkFERjtBQWlCRCxDQXZHRDs7QUF5R2VKLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9hYm91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcydcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJ1c3QnXG5cblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG1pbmltYXhDb2RlID0gXG4gIGBcbiAgIC8vICBSZXR1cm5zIHRoZSBvcHRpbWFsIGFjdGlvbiBmb3IgdGhlIGN1cnJlbnQgcGxheWVyIG9uIHRoZSBib2FyZC5cbiAgIGZuIG1pbmltYXgoZ2FtZTogJkdhbWUpIC0+IE9wdGlvbjx1c2l6ZT4ge1xuICAgIGlmIHRlcm1pbmFsKGdhbWUpIHtcbiAgICAgICAgcmV0dXJuIE5vbmU7XG4gICAgfVxuXG4gICAgbGV0IG11dCBiZXN0X2FjdGlvbjogdXNpemUgPSAyO1xuXG4gICAgbWF0Y2ggcGxheWVyKGdhbWUpIHtcbiAgICAgICAgU3F1YXJlOjpYID0+IHtcbiAgICAgICAgICAgIGxldCBtdXQgbWF4X3YgPSBpNjQ6Ok1JTjtcbiAgICAgICAgICAgIGZvciBhY3Rpb24gaW4gYWN0aW9ucyhnYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRfYm9hcmQgPSByZXN1bHQoZ2FtZSwgYWN0aW9uKS51bndyYXAoKTtcbiAgICAgICAgICAgICAgICBpZiB3aW5uZXIoJm5leHRfYm9hcmQpID09IFNvbWUoU3F1YXJlOjpYKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTb21lKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB2ID0gbWluX3ZhbCgmbmV4dF9ib2FyZCwgaTY0OjpNSU4sIGk2NDo6TUFYKTtcbiAgICAgICAgICAgICAgICBpZiB2ID4gbWF4X3Yge1xuICAgICAgICAgICAgICAgICAgICBiZXN0X2FjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbWF4X3YgPSB2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBTcXVhcmU6Ok8gPT4ge1xuICAgICAgICAgICAgbGV0IG11dCBtaW5fdiA9IGk2NDo6TUFYO1xuICAgICAgICAgICAgZm9yIGFjdGlvbiBpbiBhY3Rpb25zKGdhbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dF9ib2FyZCA9IHJlc3VsdChnYW1lLCBhY3Rpb24pLnVud3JhcCgpO1xuICAgICAgICAgICAgICAgIGlmIHdpbm5lcigmbmV4dF9ib2FyZCkgPT0gU29tZShTcXVhcmU6Ok8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNvbWUoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHYgPSBtYXhfdmFsKCZuZXh0X2JvYXJkLCBpNjQ6Ok1JTiwgaTY0OjpNQVgpO1xuICAgICAgICAgICAgICAgIGlmIHYgPCBtaW5fdiB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RfYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICBtaW5fdiA9IHY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNxdWFyZTo6TnVsbCA9PiAoKSxcbiAgICB9XG5cbiAgICBTb21lKGJlc3RfYWN0aW9uKVxufVxuXG4vLyBSZXR1cm5zIHRoZSBtYXggdmFsdWUgXCJ2XCJcbmZuIG1heF92YWwoZ2FtZTogJkdhbWUsIG11dCBhbHBoYTogaTY0LCBiZXRhOiBpNjQpIC0+IGk2NCB7XG4gICAgaWYgdGVybWluYWwoJmdhbWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxpdHkoJmdhbWUpO1xuICAgIH1cbiAgICBsZXQgbXV0IHYgPSBpNjQ6Ok1JTjtcbiAgICBmb3IgYWN0aW9uIGluIGFjdGlvbnMoZ2FtZSkge1xuICAgICAgICB2ID0gdi5tYXgobWluX3ZhbCgmcmVzdWx0KGdhbWUsIGFjdGlvbikudW53cmFwKCksIGFscGhhLCBiZXRhKSk7XG4gICAgICAgIGFscGhhID0gdi5tYXgoYWxwaGEpO1xuICAgICAgICBpZiBhbHBoYSA+PSBiZXRhIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdlxufVxuXG4vLyBSZXR1cm5zIHRoZSBtaW4gdmFsdWUgXCJ2XCJcbmZuIG1pbl92YWwoZ2FtZTogJkdhbWUsIGFscGhhOiBpNjQsIG11dCBiZXRhOiBpNjQpIC0+IGk2NCB7XG4gICAgaWYgdGVybWluYWwoJmdhbWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxpdHkoJmdhbWUpO1xuICAgIH1cbiAgICBsZXQgbXV0IHYgPSBpNjQ6Ok1BWDtcbiAgICBmb3IgYWN0aW9uIGluIGFjdGlvbnMoZ2FtZSkge1xuICAgICAgICB2ID0gdi5taW4obWF4X3ZhbCgmcmVzdWx0KCZnYW1lLCBhY3Rpb24pLnVud3JhcCgpLCBhbHBoYSwgYmV0YSkpO1xuICAgICAgICBiZXRhID0gdi5taW4oYmV0YSk7XG4gICAgICAgIGlmIGFscGhhID49IGJldGEge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2XG59XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICBMYXMgcmVzcHVlc3RhcyBhdXRvbcOhdGljYXMgZW4gZWwgVEEtVEUtVEkgZGUgYXJyaWJhIGVzdMOhbiBnZW5lcmFkYXMgZW4gYmFzZSBhbCBhbGdvcsOtdG1vIDxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9NaW5pbWF4XCIgdGFyZ2V0PVwiX1wiPm1pbmltYXg8L2E+LlxuICAgICAgICBDb21vIGRpY2UgV2lraXBlZGlhIFwibWluaW1heCBlcyB1biBtw6l0b2RvIGRlIGRlY2lzacOzbiBwYXJhIG1pbmltaXphciBsYSBww6lyZGlkYSBtw6F4aW1hIGVzcGVyYWRhIGVuIGp1ZWdvcyBjb24gYWR2ZXJzYXJpbyB5IGNvbiBpbmZvcm1hY2nDs24gcGVyZmVjdGFcIi5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgTGEgaW1wbGVtZW50YWNpw7NuIGVzdMOhIGhlY2hhIGVuIFJ1c3QgeSBjb21waWxhZG8gYSBXZWJhc3NlbWJseSBjb24gd2FzbS1wYWNrLiBMYSBww6FnaW5hIHdlYiBlc3TDoSBoZWNoYSBlbiBOZXh0LmpzLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICBDYWRhIHZleiBxdWUgdW5vIGhhY2UgdW5hIGp1Z2FkYSBlbCBwcm9ncmFtYSByZXNwb25kZSBjb24gbGEgcmVzcHVlc3RhIMOzcHRpbWEgZW4gYmFzZSBhIGxhIHNpZ3VpZW50ZSBmdW5jacOzbjpcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgPHByZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlQmxvY2t9Pjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtcnVzdFwiPnttaW5pbWF4Q29kZX08L2NvZGU+PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/about.js\n");

/***/ }),

/***/ "./components/about.module.css":
/*!*************************************!*\
  !*** ./components/about.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"text\": \"about_text__YGDB0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0Lm1vZHVsZS5jc3M/MDQwOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWJvdXQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRleHRcIjogXCJhYm91dF90ZXh0X19ZR0RCMFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/about.module.css\n");

/***/ }),

/***/ "./components/board.js":
/*!*****************************!*\
  !*** ./components/board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square */ \"./components/square.js\");\n\nvar _jsxFileName = \"/home/nacho/prog/next/tic-tac-toe/components/board.js\";\n\n\nconst Board = props => {\n  const renderSquare = i => {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_square__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      value: props.squares[i],\n      onClick: () => props.onClick(i)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"board-row\",\n      children: [renderSquare(0), renderSquare(1), renderSquare(2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"board-row\",\n      children: [renderSquare(3), renderSquare(4), renderSquare(5)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"board-row\",\n      children: [renderSquare(6), renderSquare(7), renderSquare(8)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkLmpzPzc1ZDgiXSwibmFtZXMiOlsiQm9hcmQiLCJwcm9wcyIsInJlbmRlclNxdWFyZSIsImkiLCJzcXVhcmVzIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFJQyxLQUFELElBQVc7QUFFdkIsUUFBTUMsWUFBWSxHQUFJQyxDQUFELElBQU87QUFDMUIsd0JBQ0UscUVBQUMsK0NBQUQ7QUFDRSxXQUFLLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjRCxDQUFkLENBRFQ7QUFFRSxhQUFPLEVBQUUsTUFBTUYsS0FBSyxDQUFDSSxPQUFOLENBQWNGLENBQWQ7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtELEdBTkQ7O0FBUUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsaUJBQ0dELFlBQVksQ0FBQyxDQUFELENBRGYsRUFFR0EsWUFBWSxDQUFDLENBQUQsQ0FGZixFQUdHQSxZQUFZLENBQUMsQ0FBRCxDQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSxpQkFDR0EsWUFBWSxDQUFDLENBQUQsQ0FEZixFQUVHQSxZQUFZLENBQUMsQ0FBRCxDQUZmLEVBR0dBLFlBQVksQ0FBQyxDQUFELENBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBV0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLGlCQUNHQSxZQUFZLENBQUMsQ0FBRCxDQURmLEVBRUdBLFlBQVksQ0FBQyxDQUFELENBRmYsRUFHR0EsWUFBWSxDQUFDLENBQUQsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsQ0E5QkQ7O0FBZ0NlRixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYm9hcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3F1YXJlIGZyb20gJy4vc3F1YXJlJ1xuXG5jb25zdCBCb2FyZCA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHJlbmRlclNxdWFyZSA9IChpKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTcXVhcmVcbiAgICAgICAgdmFsdWU9e3Byb3BzLnNxdWFyZXNbaV19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2soaSl9XG4gICAgICAvPik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICB7cmVuZGVyU3F1YXJlKDApfVxuICAgICAgICB7cmVuZGVyU3F1YXJlKDEpfVxuICAgICAgICB7cmVuZGVyU3F1YXJlKDIpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICB7cmVuZGVyU3F1YXJlKDMpfVxuICAgICAgICB7cmVuZGVyU3F1YXJlKDQpfVxuICAgICAgICB7cmVuZGVyU3F1YXJlKDUpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICB7cmVuZGVyU3F1YXJlKDYpfVxuICAgICAgICB7cmVuZGVyU3F1YXJlKDcpfVxuICAgICAgICB7cmVuZGVyU3F1YXJlKDgpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/board.js\n");

/***/ }),

/***/ "./components/game.js":
/*!****************************!*\
  !*** ./components/game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ \"./components/board.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.module.css */ \"./components/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/nacho/prog/next/tic-tac-toe/components/game.js\";\n\n\n\n\nconst Game = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()({\n  loader: async () => {\n    const rustModule = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../pkg */ \"./pkg/tic_tac_toe.js\"));\n    return props => {\n      const {\n        0: history,\n        1: setHistory\n      } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([{\n        squares: Array(9).fill(null)\n      }]);\n      const {\n        0: stepNumber,\n        1: setStepNumber\n      } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0);\n      const {\n        0: xIsNext,\n        1: setXIsNext\n      } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true);\n      const {\n        0: status,\n        1: setStatus\n      } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\");\n\n      const handleClick = i => {\n        const hist = history.slice(0, stepNumber + 1);\n        const current = hist[hist.length - 1];\n        const squares = current.squares.slice();\n\n        if (calculateWinner(squares) || squares[i]) {\n          return;\n        }\n\n        squares[i] = xIsNext ? \"X\" : \"O\"; // set the computer move\n\n        if (hist.length < 5) {\n          const squares_to_rust = squares.map(n => n === null ? String(n) : n);\n          const move = rustModule.solve(squares_to_rust);\n          squares[move] = !xIsNext ? \"X\" : \"O\";\n        }\n\n        setHistory(hist.concat([{\n          squares\n        }]));\n        setStepNumber(hist.length);\n      };\n\n      const jumpTo = step => {\n        setStepNumber(step);\n      };\n\n      const moves = history.map((step, move) => {\n        const desc = move ? 'Ir a jugada #' + move : 'Inicio';\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: () => jumpTo(move),\n            children: desc\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, undefined)\n        }, move, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, undefined);\n      });\n      let current = history[stepNumber];\n      let winner = calculateWinner(current.squares);\n      Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(() => {\n        current = history[stepNumber];\n        winner = calculateWinner(current.squares);\n\n        if (winner) {\n          setStatus(\"Ganador: \" + winner);\n        } else {\n          setStatus(\"Siguiente jugador: \" + (xIsNext ? \"X\" : \"O\"));\n        }\n      });\n\n      const changePlayer = () => {\n        if (stepNumber === 0) {\n          setXIsNext(!xIsNext);\n        }\n      };\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _game_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.game,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            squares: current.squares,\n            onClick: i => handleClick(i)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _game_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.gameInfo,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            className: _game_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.switch,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: _game_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.checkbox,\n              children: [\"Jugar como X? \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"checkbox\",\n                checked: xIsNext,\n                onChange: () => changePlayer()\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 33\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _game_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.status,\n            children: status\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _game_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.moves,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n              children: moves\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }, undefined);\n    };\n  },\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../pkg */ \"./pkg/tic_tac_toe.js\")],\n    modules: ['../pkg']\n  }\n});\n\nfunction calculateWinner(squares) {\n  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n\n  for (let i = 0; i < lines.length; i++) {\n    const [a, b, c] = lines[i];\n\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n      return squares[a];\n    }\n  }\n\n  return null;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUuanM/MzVjYSJdLCJuYW1lcyI6WyJHYW1lIiwiZHluYW1pYyIsImxvYWRlciIsInJ1c3RNb2R1bGUiLCJwcm9wcyIsImhpc3RvcnkiLCJzZXRIaXN0b3J5IiwidXNlU3RhdGUiLCJzcXVhcmVzIiwiQXJyYXkiLCJmaWxsIiwic3RlcE51bWJlciIsInNldFN0ZXBOdW1iZXIiLCJ4SXNOZXh0Iiwic2V0WElzTmV4dCIsInN0YXR1cyIsInNldFN0YXR1cyIsImhhbmRsZUNsaWNrIiwiaSIsImhpc3QiLCJzbGljZSIsImN1cnJlbnQiLCJsZW5ndGgiLCJjYWxjdWxhdGVXaW5uZXIiLCJzcXVhcmVzX3RvX3J1c3QiLCJtYXAiLCJuIiwiU3RyaW5nIiwibW92ZSIsInNvbHZlIiwiY29uY2F0IiwianVtcFRvIiwic3RlcCIsIm1vdmVzIiwiZGVzYyIsIndpbm5lciIsInVzZUVmZmVjdCIsImNoYW5nZVBsYXllciIsInN0eWxlcyIsImdhbWUiLCJnYW1lSW5mbyIsInN3aXRjaCIsImNoZWNrYm94IiwibGluZXMiLCJhIiwiYiIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHQyxtREFBTyxDQUFDO0FBQ25CQyxRQUFNLEVBQUUsWUFBWTtBQUNsQixVQUFNQyxVQUFVLEdBQUcsTUFBTSxtSEFBekI7QUFFQSxXQUNHQyxLQUFELElBQVc7QUFDVCxZQUFNO0FBQUEsV0FBQ0MsT0FBRDtBQUFBLFdBQVVDO0FBQVYsVUFBd0JDLHNEQUFRLENBQUMsQ0FBQztBQUFFQyxlQUFPLEVBQUVDLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0MsSUFBVCxDQUFjLElBQWQ7QUFBWCxPQUFELENBQUQsQ0FBdEM7QUFDQSxZQUFNO0FBQUEsV0FBQ0MsVUFBRDtBQUFBLFdBQWFDO0FBQWIsVUFBOEJMLHNEQUFRLENBQUMsQ0FBRCxDQUE1QztBQUNBLFlBQU07QUFB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QztBQUNoQyxRQUFNbUMsS0FBSyxHQUFHLENBQ1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEWSxFQUVaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRlksRUFHWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhZLEVBSVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKWSxFQUtaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTFksRUFNWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQU5ZLEVBT1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FQWSxFQVFaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBUlksQ0FBZDs7QUFVQSxPQUFLLElBQUl6QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUIsS0FBSyxDQUFDckIsTUFBMUIsRUFBa0NKLENBQUMsRUFBbkMsRUFBdUM7QUFDckMsVUFBTSxDQUFDMEIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsSUFBWUgsS0FBSyxDQUFDekIsQ0FBRCxDQUF2Qjs7QUFDQSxRQUFJVixPQUFPLENBQUNvQyxDQUFELENBQVAsSUFBY3BDLE9BQU8sQ0FBQ29DLENBQUQsQ0FBUCxLQUFlcEMsT0FBTyxDQUFDcUMsQ0FBRCxDQUFwQyxJQUEyQ3JDLE9BQU8sQ0FBQ29DLENBQUQsQ0FBUCxLQUFlcEMsT0FBTyxDQUFDc0MsQ0FBRCxDQUFyRSxFQUEwRTtBQUN4RSxhQUFPdEMsT0FBTyxDQUFDb0MsQ0FBRCxDQUFkO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLElBQVA7QUFDRDs7QUFFYzVDLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9nYW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2FtZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBHYW1lID0gZHluYW1pYyh7XG4gIGxvYWRlcjogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJ1c3RNb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4uL3BrZycpXG5cbiAgICByZXR1cm4gKFxuICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFt7IHNxdWFyZXM6IEFycmF5KDkpLmZpbGwobnVsbCkgfV0pO1xuICAgICAgICBjb25zdCBbc3RlcE51bWJlciwgc2V0U3RlcE51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgICAgICAgY29uc3QgW3hJc05leHQsIHNldFhJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgICAgICBjb25zdCBoYW5kbGVDbGljayA9IChpKSA9PiB7XG4gICAgICAgICAgY29uc3QgaGlzdCA9IGhpc3Rvcnkuc2xpY2UoMCwgc3RlcE51bWJlciArIDEpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0W2hpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgICAgY29uc3Qgc3F1YXJlcyA9IGN1cnJlbnQuc3F1YXJlcy5zbGljZSgpO1xuICAgICAgICAgIGlmIChjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykgfHwgc3F1YXJlc1tpXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNxdWFyZXNbaV0gPSB4SXNOZXh0ID8gXCJYXCIgOiBcIk9cIjtcblxuICAgICAgICAgIC8vIHNldCB0aGUgY29tcHV0ZXIgbW92ZVxuICAgICAgICAgIGlmIChoaXN0Lmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZXNfdG9fcnVzdCA9IHNxdWFyZXMubWFwKChuKSA9PiBuID09PSBudWxsID8gU3RyaW5nKG4pIDogbilcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBydXN0TW9kdWxlLnNvbHZlKHNxdWFyZXNfdG9fcnVzdClcbiAgICAgICAgICAgIHNxdWFyZXNbbW92ZV0gPSAheElzTmV4dCA/IFwiWFwiIDogXCJPXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0SGlzdG9yeShoaXN0LmNvbmNhdChbeyBzcXVhcmVzIH1dKSk7XG4gICAgICAgICAgc2V0U3RlcE51bWJlcihoaXN0Lmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBqdW1wVG8gPSAoc3RlcCkgPT4ge1xuICAgICAgICAgIHNldFN0ZXBOdW1iZXIoc3RlcCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IG1vdmVzID0gaGlzdG9yeS5tYXAoKHN0ZXAsIG1vdmUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZXNjID0gbW92ZSA/XG4gICAgICAgICAgICAnSXIgYSBqdWdhZGEgIycgKyBtb3ZlIDpcbiAgICAgICAgICAgICdJbmljaW8nO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXttb3ZlfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBqdW1wVG8obW92ZSl9PntkZXNjfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY3VycmVudCA9IGhpc3Rvcnlbc3RlcE51bWJlcl07XG4gICAgICAgIGxldCB3aW5uZXIgPSBjYWxjdWxhdGVXaW5uZXIoY3VycmVudC5zcXVhcmVzKTtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICBjdXJyZW50ID0gaGlzdG9yeVtzdGVwTnVtYmVyXTtcbiAgICAgICAgICB3aW5uZXIgPSBjYWxjdWxhdGVXaW5uZXIoY3VycmVudC5zcXVhcmVzKTtcblxuICAgICAgICAgIGlmICh3aW5uZXIpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhcIkdhbmFkb3I6IFwiICsgd2lubmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U3RhdHVzKFwiU2lndWllbnRlIGp1Z2Fkb3I6IFwiICsgKHhJc05leHQgPyBcIlhcIiA6IFwiT1wiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZVBsYXllciA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoc3RlcE51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgc2V0WElzTmV4dCgheElzTmV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWV9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEJvYXJkXG4gICAgICAgICAgICAgICAgc3F1YXJlcz17Y3VycmVudC5zcXVhcmVzfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2kgPT4gaGFuZGxlQ2xpY2soaSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZUluZm99PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuc3dpdGNofT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH0+XG4gICAgICAgICAgICAgICAgICBKdWdhciBjb21vIFg/IDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt4SXNOZXh0fSBvbkNoYW5nZT17KCkgPT4gY2hhbmdlUGxheWVyKCl9IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+e3N0YXR1c308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3Zlc30+XG4gICAgICAgICAgICAgICAgPG9sPnttb3Zlc308L29sPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSlcbiAgfSxcbn0pXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKSB7XG4gIGNvbnN0IGxpbmVzID0gW1xuICAgIFswLCAxLCAyXSxcbiAgICBbMywgNCwgNV0sXG4gICAgWzYsIDcsIDhdLFxuICAgIFswLCAzLCA2XSxcbiAgICBbMSwgNCwgN10sXG4gICAgWzIsIDUsIDhdLFxuICAgIFswLCA0LCA4XSxcbiAgICBbMiwgNCwgNl1cbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xuICAgIGlmIChzcXVhcmVzW2FdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbYl0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tjXSkge1xuICAgICAgcmV0dXJuIHNxdWFyZXNbYV07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game.js\n");

/***/ }),

/***/ "./components/game.module.css":
/*!************************************!*\
  !*** ./components/game.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"game\": \"game_game__1oiaB\",\n\t\"gameInfo\": \"game_gameInfo__30dNY\",\n\t\"switch\": \"game_switch__3PIUh\",\n\t\"status\": \"game_status__1e9ww\",\n\t\"moves\": \"game_moves__ICNhl\",\n\t\"checkbox\": \"game_checkbox__1A1xQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUubW9kdWxlLmNzcz9jMzhmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2FtZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ2FtZVwiOiBcImdhbWVfZ2FtZV9fMW9pYUJcIixcblx0XCJnYW1lSW5mb1wiOiBcImdhbWVfZ2FtZUluZm9fXzMwZE5ZXCIsXG5cdFwic3dpdGNoXCI6IFwiZ2FtZV9zd2l0Y2hfXzNQSVVoXCIsXG5cdFwic3RhdHVzXCI6IFwiZ2FtZV9zdGF0dXNfXzFlOXd3XCIsXG5cdFwibW92ZXNcIjogXCJnYW1lX21vdmVzX19JQ05obFwiLFxuXHRcImNoZWNrYm94XCI6IFwiZ2FtZV9jaGVja2JveF9fMUExeFFcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game.module.css\n");

/***/ }),

/***/ "./components/square.js":
/*!******************************!*\
  !*** ./components/square.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _square_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square.module.css */ \"./components/square.module.css\");\n/* harmony import */ var _square_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_square_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/nacho/prog/next/tic-tac-toe/components/square.js\";\n\n\nconst Square = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: _square_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.square,\n    onClick: props.onClick,\n    children: props.value\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NxdWFyZS5qcz8wZWRjIl0sIm5hbWVzIjpbIlNxdWFyZSIsInByb3BzIiwic3R5bGVzIiwic3F1YXJlIiwib25DbGljayIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELElBQVc7QUFDeEIsc0JBQ0U7QUFBUSxhQUFTLEVBQUVDLHlEQUFNLENBQUNDLE1BQTFCO0FBQWtDLFdBQU8sRUFBRUYsS0FBSyxDQUFDRyxPQUFqRDtBQUFBLGNBQ0dILEtBQUssQ0FBQ0k7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFlTCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3F1YXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NxdWFyZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBTcXVhcmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNxdWFyZX0gb25DbGljaz17cHJvcHMub25DbGlja30+XG4gICAgICB7cHJvcHMudmFsdWV9XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/square.js\n");

/***/ }),

/***/ "./components/square.module.css":
/*!**************************************!*\
  !*** ./components/square.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"square\": \"square_square__3A258\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NxdWFyZS5tb2R1bGUuY3NzP2FiYWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NxdWFyZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3F1YXJlXCI6IFwic3F1YXJlX3NxdWFyZV9fM0EyNThcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/square.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game */ \"./components/game.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/about */ \"./components/about.js\");\n\n\nvar _jsxFileName = \"/home/nacho/prog/next/tic-tac-toe/pages/index.js\";\n\n\n\n\nconst Index = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.encabezado,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"TA-TE-TI: Soluci\\xF3n con Minimax\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Rust \\uD83E\\uDD80 + Wasm \\uD83D\\uDD78\\uFE0F + Next.js\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.game,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwic3R5bGVzIiwiZW5jYWJlemFkbyIsImdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFFbEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsVUFBdkI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssZUFBUyxFQUFFRCx3REFBTSxDQUFDRSxJQUF2QjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBUUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBLGtCQURGO0FBWUQsQ0FkRDs7QUFnQmVILG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0J1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVuY2FiZXphZG99PlxuICAgICAgICA8aDE+VEEtVEUtVEk6IFNvbHVjacOzbiBjb24gTWluaW1heDwvaDE+XG4gICAgICAgIDxoMj5SdXN0IPCfpoAgKyBXYXNtIPCflbjvuI8gKyBOZXh0LmpzPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cbiAgICAgICAgPEdhbWUgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEFib3V0IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXggICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"encabezado\": \"index_encabezado__3lAE6\",\n\t\"game\": \"index_game__2AGvc\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzPzlhNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlbmNhYmV6YWRvXCI6IFwiaW5kZXhfZW5jYWJlemFkb19fM2xBRTZcIixcblx0XCJnYW1lXCI6IFwiaW5kZXhfZ2FtZV9fMkFHdmNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWpzXCI/MmVlYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcmlzbWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismjs\n");

/***/ }),

/***/ "prismjs/components/prism-rust":
/*!************************************************!*\
  !*** external "prismjs/components/prism-rust" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismjs/components/prism-rust\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcnVzdFwiP2FiOWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJ1c3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcnVzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismjs/components/prism-rust\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });