webpackHotUpdate_N_E("pages/index",{

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.module.css */ \"./components/about.module.css\");\n/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ \"./node_modules/prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismjs_components_prism_rust__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-rust */ \"./node_modules/prismjs/components/prism-rust.js\");\n/* harmony import */ var prismjs_components_prism_rust__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_rust__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/home/nacho/prog/next/tic-tac-toe/components/about.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar About = function About() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    prismjs__WEBPACK_IMPORTED_MODULE_3___default.a.highlightAll();\n  }, []);\n  var minimaxCode = \"\\n   //  Returns the optimal action for the current player on the board.\\n   fn minimax(game: &Game) -> Option<usize> {\\n    if terminal(game) {\\n        return None;\\n    }\\n\\n    let mut best_action: usize = 2;\\n\\n    match player(game) {\\n        Square::X => {\\n            let mut max_v = i64::MIN;\\n            for action in actions(game) {\\n                let next_board = result(game, action).unwrap();\\n                if winner(&next_board) == Some(Square::X) {\\n                    return Some(action);\\n                }\\n                let v = min_val(&next_board, i64::MIN, i64::MAX);\\n                if v > max_v {\\n                    best_action = action;\\n                    max_v = v;\\n                }\\n            }\\n        }\\n        Square::O => {\\n            let mut min_v = i64::MAX;\\n            for action in actions(game) {\\n                let next_board = result(game, action).unwrap();\\n                if winner(&next_board) == Some(Square::O) {\\n                    return Some(action);\\n                }\\n                let v = max_val(&next_board, i64::MIN, i64::MAX);\\n                if v < min_v {\\n                    best_action = action;\\n                    min_v = v;\\n                }\\n            }\\n        }\\n        Square::Null => (),\\n    }\\n\\n    Some(best_action)\\n}\\n\\n// Returns the max value \\\"v\\\"\\nfn max_val(game: &Game, mut alpha: i64, beta: i64) -> i64 {\\n    if terminal(&game) {\\n        return utility(&game);\\n    }\\n    let mut v = i64::MIN;\\n    for action in actions(game) {\\n        v = v.max(min_val(&result(game, action).unwrap(), alpha, beta));\\n        alpha = v.max(alpha);\\n        if alpha >= beta {\\n            break;\\n        }\\n    }\\n\\n    v\\n}\\n\\n// Returns the min value \\\"v\\\"\\nfn min_val(game: &Game, alpha: i64, mut beta: i64) -> i64 {\\n    if terminal(&game) {\\n        return utility(&game);\\n    }\\n    let mut v = i64::MAX;\\n    for action in actions(game) {\\n        v = v.min(max_val(&result(&game, action).unwrap(), alpha, beta));\\n        beta = v.min(beta);\\n        if alpha >= beta {\\n            break;\\n        }\\n    }\\n\\n    v\\n}\\n  \";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: [\"Las respuestas autom\\xE1ticas en el TA-TE-TI de arriba est\\xE1n generadas en base al algor\\xEDtmo \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://es.wikipedia.org/wiki/Minimax\",\n        target: \"_\",\n        children: \"minimax\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 98\n      }, _this), \". Como dice Wikipedia \\\"minimax es un m\\xE9todo de decisi\\xF3n para minimizar la p\\xE9rdida m\\xE1xima esperada en juegos con adversario y con informaci\\xF3n perfecta\\\".\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: \"La implementaci\\xF3n est\\xE1 hecha en Rust y compilado a Webassembly con wasm-pack. La p\\xE1gina web est\\xE1 hecha en Next.js.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n        className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.codeBlock,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n          className: \"language-rust\",\n          children: minimaxCode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 43\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(About, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\nvar _c;\n\n$RefreshReg$(_c, \"About\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC5qcz9kMzgyIl0sIm5hbWVzIjpbIkFib3V0IiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGwiLCJtaW5pbWF4Q29kZSIsInN0eWxlcyIsInRleHQiLCJjb2RlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxrREFBSyxDQUFDQyxZQUFOO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQU1DLFdBQVcsa21FQUFqQjtBQWdGQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQyx3REFBTSxDQUFDQyxJQUF2QjtBQUFBLG9JQUMyRjtBQUFHLFlBQUksRUFBQyx1Q0FBUjtBQUFnRCxjQUFNLEVBQUMsR0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFLLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVFFO0FBQUssZUFBUyxFQUFFRCx3REFBTSxDQUFDQyxJQUF2QjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUQsd0RBQU0sQ0FBQ0UsU0FBdkI7QUFBQSwrQkFBa0M7QUFBTSxtQkFBUyxFQUFFLGVBQWpCO0FBQUEsb0JBQW1DSDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQSxrQkFERjtBQWNELENBcEdEOztHQUFNSixLOztLQUFBQSxLO0FBc0dTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vYWJvdXQubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnXG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1ydXN0J1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbWluaW1heENvZGUgPSBcbiAgYFxuICAgLy8gIFJldHVybnMgdGhlIG9wdGltYWwgYWN0aW9uIGZvciB0aGUgY3VycmVudCBwbGF5ZXIgb24gdGhlIGJvYXJkLlxuICAgZm4gbWluaW1heChnYW1lOiAmR2FtZSkgLT4gT3B0aW9uPHVzaXplPiB7XG4gICAgaWYgdGVybWluYWwoZ2FtZSkge1xuICAgICAgICByZXR1cm4gTm9uZTtcbiAgICB9XG5cbiAgICBsZXQgbXV0IGJlc3RfYWN0aW9uOiB1c2l6ZSA9IDI7XG5cbiAgICBtYXRjaCBwbGF5ZXIoZ2FtZSkge1xuICAgICAgICBTcXVhcmU6OlggPT4ge1xuICAgICAgICAgICAgbGV0IG11dCBtYXhfdiA9IGk2NDo6TUlOO1xuICAgICAgICAgICAgZm9yIGFjdGlvbiBpbiBhY3Rpb25zKGdhbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dF9ib2FyZCA9IHJlc3VsdChnYW1lLCBhY3Rpb24pLnVud3JhcCgpO1xuICAgICAgICAgICAgICAgIGlmIHdpbm5lcigmbmV4dF9ib2FyZCkgPT0gU29tZShTcXVhcmU6OlgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNvbWUoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHYgPSBtaW5fdmFsKCZuZXh0X2JvYXJkLCBpNjQ6Ok1JTiwgaTY0OjpNQVgpO1xuICAgICAgICAgICAgICAgIGlmIHYgPiBtYXhfdiB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RfYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICBtYXhfdiA9IHY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNxdWFyZTo6TyA9PiB7XG4gICAgICAgICAgICBsZXQgbXV0IG1pbl92ID0gaTY0OjpNQVg7XG4gICAgICAgICAgICBmb3IgYWN0aW9uIGluIGFjdGlvbnMoZ2FtZSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0X2JvYXJkID0gcmVzdWx0KGdhbWUsIGFjdGlvbikudW53cmFwKCk7XG4gICAgICAgICAgICAgICAgaWYgd2lubmVyKCZuZXh0X2JvYXJkKSA9PSBTb21lKFNxdWFyZTo6Tykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU29tZShhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdiA9IG1heF92YWwoJm5leHRfYm9hcmQsIGk2NDo6TUlOLCBpNjQ6Ok1BWCk7XG4gICAgICAgICAgICAgICAgaWYgdiA8IG1pbl92IHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdF9hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIG1pbl92ID0gdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgU3F1YXJlOjpOdWxsID0+ICgpLFxuICAgIH1cblxuICAgIFNvbWUoYmVzdF9hY3Rpb24pXG59XG5cbi8vIFJldHVybnMgdGhlIG1heCB2YWx1ZSBcInZcIlxuZm4gbWF4X3ZhbChnYW1lOiAmR2FtZSwgbXV0IGFscGhhOiBpNjQsIGJldGE6IGk2NCkgLT4gaTY0IHtcbiAgICBpZiB0ZXJtaW5hbCgmZ2FtZSkge1xuICAgICAgICByZXR1cm4gdXRpbGl0eSgmZ2FtZSk7XG4gICAgfVxuICAgIGxldCBtdXQgdiA9IGk2NDo6TUlOO1xuICAgIGZvciBhY3Rpb24gaW4gYWN0aW9ucyhnYW1lKSB7XG4gICAgICAgIHYgPSB2Lm1heChtaW5fdmFsKCZyZXN1bHQoZ2FtZSwgYWN0aW9uKS51bndyYXAoKSwgYWxwaGEsIGJldGEpKTtcbiAgICAgICAgYWxwaGEgPSB2Lm1heChhbHBoYSk7XG4gICAgICAgIGlmIGFscGhhID49IGJldGEge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2XG59XG5cbi8vIFJldHVybnMgdGhlIG1pbiB2YWx1ZSBcInZcIlxuZm4gbWluX3ZhbChnYW1lOiAmR2FtZSwgYWxwaGE6IGk2NCwgbXV0IGJldGE6IGk2NCkgLT4gaTY0IHtcbiAgICBpZiB0ZXJtaW5hbCgmZ2FtZSkge1xuICAgICAgICByZXR1cm4gdXRpbGl0eSgmZ2FtZSk7XG4gICAgfVxuICAgIGxldCBtdXQgdiA9IGk2NDo6TUFYO1xuICAgIGZvciBhY3Rpb24gaW4gYWN0aW9ucyhnYW1lKSB7XG4gICAgICAgIHYgPSB2Lm1pbihtYXhfdmFsKCZyZXN1bHQoJmdhbWUsIGFjdGlvbikudW53cmFwKCksIGFscGhhLCBiZXRhKSk7XG4gICAgICAgIGJldGEgPSB2Lm1pbihiZXRhKTtcbiAgICAgICAgaWYgYWxwaGEgPj0gYmV0YSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZcbn1cbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIExhcyByZXNwdWVzdGFzIGF1dG9tw6F0aWNhcyBlbiBlbCBUQS1URS1USSBkZSBhcnJpYmEgZXN0w6FuIGdlbmVyYWRhcyBlbiBiYXNlIGFsIGFsZ29yw610bW8gPGEgaHJlZj1cImh0dHBzOi8vZXMud2lraXBlZGlhLm9yZy93aWtpL01pbmltYXhcIiB0YXJnZXQ9XCJfXCI+bWluaW1heDwvYT4uXG4gICAgICAgIENvbW8gZGljZSBXaWtpcGVkaWEgXCJtaW5pbWF4IGVzIHVuIG3DqXRvZG8gZGUgZGVjaXNpw7NuIHBhcmEgbWluaW1pemFyIGxhIHDDqXJkaWRhIG3DoXhpbWEgZXNwZXJhZGEgZW4ganVlZ29zIGNvbiBhZHZlcnNhcmlvIHkgY29uIGluZm9ybWFjacOzbiBwZXJmZWN0YVwiLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICBMYSBpbXBsZW1lbnRhY2nDs24gZXN0w6EgaGVjaGEgZW4gUnVzdCB5IGNvbXBpbGFkbyBhIFdlYmFzc2VtYmx5IGNvbiB3YXNtLXBhY2suIExhIHDDoWdpbmEgd2ViIGVzdMOhIGhlY2hhIGVuIE5leHQuanMuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIDxwcmUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZUJsb2NrfT48Y29kZSBjbGFzc05hbWU9e1wibGFuZ3VhZ2UtcnVzdFwifT57bWluaW1heENvZGV9PC9jb2RlPjwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/about.js\n");

/***/ }),

/***/ "./node_modules/prismjs/components/prism-rust.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-rust.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (Prism) {\n\n\tvar multilineComment = /\\/\\*(?:[^*/]|\\*(?!\\/)|\\/(?!\\*)|<self>)*\\*\\//.source;\n\tfor (var i = 0; i < 2; i++) {\n\t\t// support 4 levels of nested comments\n\t\tmultilineComment = multilineComment.replace(/<self>/g, function () { return multilineComment; });\n\t}\n\tmultilineComment = multilineComment.replace(/<self>/g, function () { return /[^\\s\\S]/.source; });\n\n\n\tPrism.languages.rust = {\n\t\t'comment': [\n\t\t\t{\n\t\t\t\tpattern: RegExp(/(^|[^\\\\])/.source + multilineComment),\n\t\t\t\tlookbehind: true,\n\t\t\t\tgreedy: true\n\t\t\t},\n\t\t\t{\n\t\t\t\tpattern: /(^|[^\\\\:])\\/\\/.*/,\n\t\t\t\tlookbehind: true,\n\t\t\t\tgreedy: true\n\t\t\t}\n\t\t],\n\t\t'string': {\n\t\t\tpattern: /b?\"(?:\\\\[\\s\\S]|[^\\\\\"])*\"|b?r(#*)\"(?:[^\"]|\"(?!\\1))*\"\\1/,\n\t\t\tgreedy: true\n\t\t},\n\t\t'char': {\n\t\t\tpattern: /b?'(?:\\\\(?:x[0-7][\\da-fA-F]|u\\{(?:[\\da-fA-F]_*){1,6}\\}|.)|[^\\\\\\r\\n\\t'])'/,\n\t\t\tgreedy: true,\n\t\t\talias: 'string'\n\t\t},\n\t\t'attribute': {\n\t\t\tpattern: /#!?\\[(?:[^\\[\\]\"]|\"(?:\\\\[\\s\\S]|[^\\\\\"])*\")*\\]/,\n\t\t\tgreedy: true,\n\t\t\talias: 'attr-name',\n\t\t\tinside: {\n\t\t\t\t'string': null // see below\n\t\t\t}\n\t\t},\n\n\t\t// Closure params should not be confused with bitwise OR |\n\t\t'closure-params': {\n\t\t\tpattern: /([=(,:]\\s*|\\bmove\\s*)\\|[^|]*\\||\\|[^|]*\\|(?=\\s*(?:\\{|->))/,\n\t\t\tlookbehind: true,\n\t\t\tgreedy: true,\n\t\t\tinside: {\n\t\t\t\t'closure-punctuation': {\n\t\t\t\t\tpattern: /^\\||\\|$/,\n\t\t\t\t\talias: 'punctuation'\n\t\t\t\t},\n\t\t\t\trest: null // see below\n\t\t\t}\n\t\t},\n\n\t\t'lifetime-annotation': {\n\t\t\tpattern: /'\\w+/,\n\t\t\talias: 'symbol'\n\t\t},\n\n\t\t'fragment-specifier': {\n\t\t\tpattern: /(\\$\\w+:)[a-z]+/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'punctuation'\n\t\t},\n\t\t'variable': /\\$\\w+/,\n\n\t\t'function-definition': {\n\t\t\tpattern: /(\\bfn\\s+)\\w+/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'function'\n\t\t},\n\t\t'type-definition': {\n\t\t\tpattern: /(\\b(?:enum|struct|union)\\s+)\\w+/,\n\t\t\tlookbehind: true,\n\t\t\talias: 'class-name'\n\t\t},\n\t\t'module-declaration': [\n\t\t\t{\n\t\t\t\tpattern: /(\\b(?:crate|mod)\\s+)[a-z][a-z_\\d]*/,\n\t\t\t\tlookbehind: true,\n\t\t\t\talias: 'namespace'\n\t\t\t},\n\t\t\t{\n\t\t\t\tpattern: /(\\b(?:crate|self|super)\\s*)::\\s*[a-z][a-z_\\d]*\\b(?:\\s*::(?:\\s*[a-z][a-z_\\d]*\\s*::)*)?/,\n\t\t\t\tlookbehind: true,\n\t\t\t\talias: 'namespace',\n\t\t\t\tinside: {\n\t\t\t\t\t'punctuation': /::/\n\t\t\t\t}\n\t\t\t}\n\t\t],\n\t\t'keyword': [\n\t\t\t// https://github.com/rust-lang/reference/blob/master/src/keywords.md\n\t\t\t/\\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\\b/,\n\t\t\t// primitives and str\n\t\t\t// https://doc.rust-lang.org/stable/rust-by-example/primitives.html\n\t\t\t/\\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\\b/\n\t\t],\n\n\t\t// functions can technically start with an upper-case letter, but this will introduce a lot of false positives\n\t\t// and Rust's naming conventions recommend snake_case anyway.\n\t\t// https://doc.rust-lang.org/1.0.0/style/style/naming/README.html\n\t\t'function': /\\b[a-z_]\\w*(?=\\s*(?:::\\s*<|\\())/,\n\t\t'macro': {\n\t\t\tpattern: /\\w+!/,\n\t\t\talias: 'property'\n\t\t},\n\t\t'constant': /\\b[A-Z_][A-Z_\\d]+\\b/,\n\t\t'class-name': /\\b[A-Z]\\w*\\b/,\n\n\t\t'namespace': {\n\t\t\tpattern: /(?:\\b[a-z][a-z_\\d]*\\s*::\\s*)*\\b[a-z][a-z_\\d]*\\s*::(?!\\s*<)/,\n\t\t\tinside: {\n\t\t\t\t'punctuation': /::/\n\t\t\t}\n\t\t},\n\n\t\t// Hex, oct, bin, dec numbers with visual separators and type suffix\n\t\t'number': /\\b(?:0x[\\dA-Fa-f](?:_?[\\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:\\d(?:_?\\d)*)?\\.?\\d(?:_?\\d)*(?:[Ee][+-]?\\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\\b/,\n\t\t'boolean': /\\b(?:false|true)\\b/,\n\t\t'punctuation': /->|\\.\\.=|\\.{1,3}|::|[{}[\\];(),:]/,\n\t\t'operator': /[-+*\\/%!^]=?|=[=>]?|&[&=]?|\\|[|=]?|<<?=?|>>?=?|[@?]/\n\t};\n\n\tPrism.languages.rust['closure-params'].inside.rest = Prism.languages.rust;\n\tPrism.languages.rust['attribute'].inside['string'] = Prism.languages.rust['string'];\n\n}(Prism));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1ydXN0LmpzPzA0NzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBLHNFQUFzRSx5QkFBeUIsRUFBRTtBQUNqRztBQUNBLHFFQUFxRSx5QkFBeUIsRUFBRTs7O0FBR2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSw0Q0FBNEMsaUJBQWlCLElBQUksRUFBRTtBQUNuRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsSUFBSSxPQUFPLElBQUk7QUFDN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJ1c3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIG11bHRpbGluZUNvbW1lbnQgPSAvXFwvXFwqKD86W14qL118XFwqKD8hXFwvKXxcXC8oPyFcXCopfDxzZWxmPikqXFwqXFwvLy5zb3VyY2U7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XG5cdFx0Ly8gc3VwcG9ydCA0IGxldmVscyBvZiBuZXN0ZWQgY29tbWVudHNcblx0XHRtdWx0aWxpbmVDb21tZW50ID0gbXVsdGlsaW5lQ29tbWVudC5yZXBsYWNlKC88c2VsZj4vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4gbXVsdGlsaW5lQ29tbWVudDsgfSk7XG5cdH1cblx0bXVsdGlsaW5lQ29tbWVudCA9IG11bHRpbGluZUNvbW1lbnQucmVwbGFjZSgvPHNlbGY+L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIC9bXlxcc1xcU10vLnNvdXJjZTsgfSk7XG5cblxuXHRQcmlzbS5sYW5ndWFnZXMucnVzdCA9IHtcblx0XHQnY29tbWVudCc6IFtcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKC8oXnxbXlxcXFxdKS8uc291cmNlICsgbXVsdGlsaW5lQ29tbWVudCksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogL2I/XCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcInxiP3IoIyopXCIoPzpbXlwiXXxcIig/IVxcMSkpKlwiXFwxLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0J2NoYXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvYj8nKD86XFxcXCg/OnhbMC03XVtcXGRhLWZBLUZdfHVcXHsoPzpbXFxkYS1mQS1GXV8qKXsxLDZ9XFx9fC4pfFteXFxcXFxcclxcblxcdCddKScvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHQnYXR0cmlidXRlJzoge1xuXHRcdFx0cGF0dGVybjogLyMhP1xcWyg/OlteXFxbXFxdXCJdfFwiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIpKlxcXS8sXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ2F0dHItbmFtZScsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3N0cmluZyc6IG51bGwgLy8gc2VlIGJlbG93XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIENsb3N1cmUgcGFyYW1zIHNob3VsZCBub3QgYmUgY29uZnVzZWQgd2l0aCBiaXR3aXNlIE9SIHxcblx0XHQnY2xvc3VyZS1wYXJhbXMnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFs9KCw6XVxccyp8XFxibW92ZVxccyopXFx8W158XSpcXHx8XFx8W158XSpcXHwoPz1cXHMqKD86XFx7fC0+KSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnY2xvc3VyZS1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxcfHxcXHwkLyxcblx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZXN0OiBudWxsIC8vIHNlZSBiZWxvd1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQnbGlmZXRpbWUtYW5ub3RhdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8nXFx3Ky8sXG5cdFx0XHRhbGlhczogJ3N5bWJvbCdcblx0XHR9LFxuXG5cdFx0J2ZyYWdtZW50LXNwZWNpZmllcic6IHtcblx0XHRcdHBhdHRlcm46IC8oXFwkXFx3KzopW2Etel0rLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdH0sXG5cdFx0J3ZhcmlhYmxlJzogL1xcJFxcdysvLFxuXG5cdFx0J2Z1bmN0aW9uLWRlZmluaXRpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcYmZuXFxzKylcXHcrLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHRcdH0sXG5cdFx0J3R5cGUtZGVmaW5pdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXFxiKD86ZW51bXxzdHJ1Y3R8dW5pb24pXFxzKylcXHcrLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnXG5cdFx0fSxcblx0XHQnbW9kdWxlLWRlY2xhcmF0aW9uJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxcYig/OmNyYXRlfG1vZClcXHMrKVthLXpdW2Etel9cXGRdKi8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnbmFtZXNwYWNlJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyhcXGIoPzpjcmF0ZXxzZWxmfHN1cGVyKVxccyopOjpcXHMqW2Etel1bYS16X1xcZF0qXFxiKD86XFxzKjo6KD86XFxzKlthLXpdW2Etel9cXGRdKlxccyo6OikqKT8vLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ25hbWVzcGFjZScsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC86Oi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2tleXdvcmQnOiBbXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vcnVzdC1sYW5nL3JlZmVyZW5jZS9ibG9iL21hc3Rlci9zcmMva2V5d29yZHMubWRcblx0XHRcdC9cXGIoPzphYnN0cmFjdHxhc3xhc3luY3xhd2FpdHxiZWNvbWV8Ym94fGJyZWFrfGNvbnN0fGNvbnRpbnVlfGNyYXRlfGRvfGR5bnxlbHNlfGVudW18ZXh0ZXJufGZpbmFsfGZufGZvcnxpZnxpbXBsfGlufGxldHxsb29wfG1hY3JvfG1hdGNofG1vZHxtb3ZlfG11dHxvdmVycmlkZXxwcml2fHB1YnxyZWZ8cmV0dXJufHNlbGZ8U2VsZnxzdGF0aWN8c3RydWN0fHN1cGVyfHRyYWl0fHRyeXx0eXBlfHR5cGVvZnx1bmlvbnx1bnNhZmV8dW5zaXplZHx1c2V8dmlydHVhbHx3aGVyZXx3aGlsZXx5aWVsZClcXGIvLFxuXHRcdFx0Ly8gcHJpbWl0aXZlcyBhbmQgc3RyXG5cdFx0XHQvLyBodHRwczovL2RvYy5ydXN0LWxhbmcub3JnL3N0YWJsZS9ydXN0LWJ5LWV4YW1wbGUvcHJpbWl0aXZlcy5odG1sXG5cdFx0XHQvXFxiKD86W3VpXSg/Ojh8MTZ8MzJ8NjR8MTI4fHNpemUpfGYoPzozMnw2NCl8Ym9vbHxjaGFyfHN0cilcXGIvXG5cdFx0XSxcblxuXHRcdC8vIGZ1bmN0aW9ucyBjYW4gdGVjaG5pY2FsbHkgc3RhcnQgd2l0aCBhbiB1cHBlci1jYXNlIGxldHRlciwgYnV0IHRoaXMgd2lsbCBpbnRyb2R1Y2UgYSBsb3Qgb2YgZmFsc2UgcG9zaXRpdmVzXG5cdFx0Ly8gYW5kIFJ1c3QncyBuYW1pbmcgY29udmVudGlvbnMgcmVjb21tZW5kIHNuYWtlX2Nhc2UgYW55d2F5LlxuXHRcdC8vIGh0dHBzOi8vZG9jLnJ1c3QtbGFuZy5vcmcvMS4wLjAvc3R5bGUvc3R5bGUvbmFtaW5nL1JFQURNRS5odG1sXG5cdFx0J2Z1bmN0aW9uJzogL1xcYlthLXpfXVxcdyooPz1cXHMqKD86OjpcXHMqPHxcXCgpKS8sXG5cdFx0J21hY3JvJzoge1xuXHRcdFx0cGF0dGVybjogL1xcdyshLyxcblx0XHRcdGFsaWFzOiAncHJvcGVydHknXG5cdFx0fSxcblx0XHQnY29uc3RhbnQnOiAvXFxiW0EtWl9dW0EtWl9cXGRdK1xcYi8sXG5cdFx0J2NsYXNzLW5hbWUnOiAvXFxiW0EtWl1cXHcqXFxiLyxcblxuXHRcdCduYW1lc3BhY2UnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKD86XFxiW2Etel1bYS16X1xcZF0qXFxzKjo6XFxzKikqXFxiW2Etel1bYS16X1xcZF0qXFxzKjo6KD8hXFxzKjwpLyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvOjovXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIEhleCwgb2N0LCBiaW4sIGRlYyBudW1iZXJzIHdpdGggdmlzdWFsIHNlcGFyYXRvcnMgYW5kIHR5cGUgc3VmZml4XG5cdFx0J251bWJlcic6IC9cXGIoPzoweFtcXGRBLUZhLWZdKD86Xz9bXFxkQS1GYS1mXSkqfDBvWzAtN10oPzpfP1swLTddKSp8MGJbMDFdKD86Xz9bMDFdKSp8KD86XFxkKD86Xz9cXGQpKik/XFwuP1xcZCg/Ol8/XFxkKSooPzpbRWVdWystXT9cXGQrKT8pKD86Xz8oPzpbaXVdKD86OHwxNnwzMnw2NHxzaXplKT98ZjMyfGY2NCkpP1xcYi8sXG5cdFx0J2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuXHRcdCdwdW5jdHVhdGlvbic6IC8tPnxcXC5cXC49fFxcLnsxLDN9fDo6fFt7fVtcXF07KCksOl0vLFxuXHRcdCdvcGVyYXRvcic6IC9bLSsqXFwvJSFeXT0/fD1bPT5dP3wmWyY9XT98XFx8W3w9XT98PDw/PT98Pj4/PT98W0A/XS9cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMucnVzdFsnY2xvc3VyZS1wYXJhbXMnXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5ydXN0O1xuXHRQcmlzbS5sYW5ndWFnZXMucnVzdFsnYXR0cmlidXRlJ10uaW5zaWRlWydzdHJpbmcnXSA9IFByaXNtLmxhbmd1YWdlcy5ydXN0WydzdHJpbmcnXTtcblxufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/prismjs/components/prism-rust.js\n");

/***/ })

})