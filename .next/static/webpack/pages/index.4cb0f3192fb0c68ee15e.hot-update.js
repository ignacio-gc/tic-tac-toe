webpackHotUpdate_N_E("pages/index",{

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.module.css */ \"./components/about.module.css\");\n/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ \"./node_modules/prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismjs_components_prism_rust__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-rust */ \"./node_modules/prismjs/components/prism-rust.js\");\n/* harmony import */ var prismjs_components_prism_rust__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_rust__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/home/nacho/prog/next/tic-tac-toe/components/about.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar About = function About() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    prismjs__WEBPACK_IMPORTED_MODULE_3___default.a.highlightAll();\n  }, []);\n  var minimaxCode = \"\\n   //  Returns the optimal action for the current player on the board.\\n   fn minimax(game: &Game) -> Option<usize> {\\n    if terminal(game) {\\n        return None;\\n    }\\n\\n    let mut best_action: usize = 2;\\n\\n    match player(game) {\\n        Square::X => {\\n            let mut max_v = i64::MIN;\\n            for action in actions(game) {\\n                let next_board = result(game, action).unwrap();\\n                if winner(&next_board) == Some(Square::X) {\\n                    return Some(action);\\n                }\\n                let v = min_val(&next_board, i64::MIN, i64::MAX);\\n                if v > max_v {\\n                    best_action = action;\\n                    max_v = v;\\n                }\\n            }\\n        }\\n        Square::O => {\\n            let mut min_v = i64::MAX;\\n            for action in actions(game) {\\n                let next_board = result(game, action).unwrap();\\n                if winner(&next_board) == Some(Square::O) {\\n                    return Some(action);\\n                }\\n                let v = max_val(&next_board, i64::MIN, i64::MAX);\\n                if v < min_v {\\n                    best_action = action;\\n                    min_v = v;\\n                }\\n            }\\n        }\\n        Square::Null => (),\\n    }\\n\\n    Some(best_action)\\n}\\n\\n// Returns the max value \\\"v\\\"\\nfn max_val(game: &Game, mut alpha: i64, beta: i64) -> i64 {\\n    if terminal(&game) {\\n        return utility(&game);\\n    }\\n    let mut v = i64::MIN;\\n    for action in actions(game) {\\n        v = v.max(min_val(&result(game, action).unwrap(), alpha, beta));\\n        alpha = v.max(alpha);\\n        if alpha >= beta {\\n            break;\\n        }\\n    }\\n\\n    v\\n}\\n\\n// Returns the min value \\\"v\\\"\\nfn min_val(game: &Game, alpha: i64, mut beta: i64) -> i64 {\\n    if terminal(&game) {\\n        return utility(&game);\\n    }\\n    let mut v = i64::MAX;\\n    for action in actions(game) {\\n        v = v.min(max_val(&result(&game, action).unwrap(), alpha, beta));\\n        beta = v.min(beta);\\n        if alpha >= beta {\\n            break;\\n        }\\n    }\\n\\n    v\\n}\\n  \";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: [\"Las respuestas autom\\xE1ticas en el TA-TE-TI de arriba est\\xE1n generadas en base al algor\\xEDtmo \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://es.wikipedia.org/wiki/Minimax\",\n        target: \"_\",\n        children: \"minimax\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 98\n      }, _this), \". Como dice Wikipedia \\\"minimax es un m\\xE9todo de decisi\\xF3n para minimizar la p\\xE9rdida m\\xE1xima esperada en juegos con adversario y con informaci\\xF3n perfecta\\\".\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: \"La implementaci\\xF3n est\\xE1 hecha en Rust y compilado a Webassembly con wasm-pack. La p\\xE1gina web est\\xE1 hecha en Next.js.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n        className: _about_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.codeBlock,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n          \"class\": \"language-rust\",\n          children: minimaxCode\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 43\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(About, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\nvar _c;\n\n$RefreshReg$(_c, \"About\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC5qcz9kMzgyIl0sIm5hbWVzIjpbIkFib3V0IiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGwiLCJtaW5pbWF4Q29kZSIsInN0eWxlcyIsInRleHQiLCJjb2RlQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxrREFBSyxDQUFDQyxZQUFOO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQU1DLFdBQVcsa21FQUFqQjtBQWdGQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQyx3REFBTSxDQUFDQyxJQUF2QjtBQUFBLG9JQUMyRjtBQUFHLFlBQUksRUFBQyx1Q0FBUjtBQUFnRCxjQUFNLEVBQUMsR0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFLLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVFFO0FBQUssZUFBUyxFQUFFRCx3REFBTSxDQUFDQyxJQUF2QjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUQsd0RBQU0sQ0FBQ0UsU0FBdkI7QUFBQSwrQkFBa0M7QUFBTSxtQkFBTSxlQUFaO0FBQUEsb0JBQTZCSDtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQSxrQkFERjtBQWNELENBcEdEOztHQUFNSixLOztLQUFBQSxLO0FBc0dTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vYWJvdXQubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnXG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1ydXN0J1xuXG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBtaW5pbWF4Q29kZSA9IFxuICBgXG4gICAvLyAgUmV0dXJucyB0aGUgb3B0aW1hbCBhY3Rpb24gZm9yIHRoZSBjdXJyZW50IHBsYXllciBvbiB0aGUgYm9hcmQuXG4gICBmbiBtaW5pbWF4KGdhbWU6ICZHYW1lKSAtPiBPcHRpb248dXNpemU+IHtcbiAgICBpZiB0ZXJtaW5hbChnYW1lKSB7XG4gICAgICAgIHJldHVybiBOb25lO1xuICAgIH1cblxuICAgIGxldCBtdXQgYmVzdF9hY3Rpb246IHVzaXplID0gMjtcblxuICAgIG1hdGNoIHBsYXllcihnYW1lKSB7XG4gICAgICAgIFNxdWFyZTo6WCA9PiB7XG4gICAgICAgICAgICBsZXQgbXV0IG1heF92ID0gaTY0OjpNSU47XG4gICAgICAgICAgICBmb3IgYWN0aW9uIGluIGFjdGlvbnMoZ2FtZSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0X2JvYXJkID0gcmVzdWx0KGdhbWUsIGFjdGlvbikudW53cmFwKCk7XG4gICAgICAgICAgICAgICAgaWYgd2lubmVyKCZuZXh0X2JvYXJkKSA9PSBTb21lKFNxdWFyZTo6WCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU29tZShhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdiA9IG1pbl92YWwoJm5leHRfYm9hcmQsIGk2NDo6TUlOLCBpNjQ6Ok1BWCk7XG4gICAgICAgICAgICAgICAgaWYgdiA+IG1heF92IHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdF9hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIG1heF92ID0gdjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgU3F1YXJlOjpPID0+IHtcbiAgICAgICAgICAgIGxldCBtdXQgbWluX3YgPSBpNjQ6Ok1BWDtcbiAgICAgICAgICAgIGZvciBhY3Rpb24gaW4gYWN0aW9ucyhnYW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRfYm9hcmQgPSByZXN1bHQoZ2FtZSwgYWN0aW9uKS51bndyYXAoKTtcbiAgICAgICAgICAgICAgICBpZiB3aW5uZXIoJm5leHRfYm9hcmQpID09IFNvbWUoU3F1YXJlOjpPKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTb21lKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB2ID0gbWF4X3ZhbCgmbmV4dF9ib2FyZCwgaTY0OjpNSU4sIGk2NDo6TUFYKTtcbiAgICAgICAgICAgICAgICBpZiB2IDwgbWluX3Yge1xuICAgICAgICAgICAgICAgICAgICBiZXN0X2FjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbWluX3YgPSB2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBTcXVhcmU6Ok51bGwgPT4gKCksXG4gICAgfVxuXG4gICAgU29tZShiZXN0X2FjdGlvbilcbn1cblxuLy8gUmV0dXJucyB0aGUgbWF4IHZhbHVlIFwidlwiXG5mbiBtYXhfdmFsKGdhbWU6ICZHYW1lLCBtdXQgYWxwaGE6IGk2NCwgYmV0YTogaTY0KSAtPiBpNjQge1xuICAgIGlmIHRlcm1pbmFsKCZnYW1lKSB7XG4gICAgICAgIHJldHVybiB1dGlsaXR5KCZnYW1lKTtcbiAgICB9XG4gICAgbGV0IG11dCB2ID0gaTY0OjpNSU47XG4gICAgZm9yIGFjdGlvbiBpbiBhY3Rpb25zKGdhbWUpIHtcbiAgICAgICAgdiA9IHYubWF4KG1pbl92YWwoJnJlc3VsdChnYW1lLCBhY3Rpb24pLnVud3JhcCgpLCBhbHBoYSwgYmV0YSkpO1xuICAgICAgICBhbHBoYSA9IHYubWF4KGFscGhhKTtcbiAgICAgICAgaWYgYWxwaGEgPj0gYmV0YSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZcbn1cblxuLy8gUmV0dXJucyB0aGUgbWluIHZhbHVlIFwidlwiXG5mbiBtaW5fdmFsKGdhbWU6ICZHYW1lLCBhbHBoYTogaTY0LCBtdXQgYmV0YTogaTY0KSAtPiBpNjQge1xuICAgIGlmIHRlcm1pbmFsKCZnYW1lKSB7XG4gICAgICAgIHJldHVybiB1dGlsaXR5KCZnYW1lKTtcbiAgICB9XG4gICAgbGV0IG11dCB2ID0gaTY0OjpNQVg7XG4gICAgZm9yIGFjdGlvbiBpbiBhY3Rpb25zKGdhbWUpIHtcbiAgICAgICAgdiA9IHYubWluKG1heF92YWwoJnJlc3VsdCgmZ2FtZSwgYWN0aW9uKS51bndyYXAoKSwgYWxwaGEsIGJldGEpKTtcbiAgICAgICAgYmV0YSA9IHYubWluKGJldGEpO1xuICAgICAgICBpZiBhbHBoYSA+PSBiZXRhIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdlxufVxuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgTGFzIHJlc3B1ZXN0YXMgYXV0b23DoXRpY2FzIGVuIGVsIFRBLVRFLVRJIGRlIGFycmliYSBlc3TDoW4gZ2VuZXJhZGFzIGVuIGJhc2UgYWwgYWxnb3LDrXRtbyA8YSBocmVmPVwiaHR0cHM6Ly9lcy53aWtpcGVkaWEub3JnL3dpa2kvTWluaW1heFwiIHRhcmdldD1cIl9cIj5taW5pbWF4PC9hPi5cbiAgICAgICAgQ29tbyBkaWNlIFdpa2lwZWRpYSBcIm1pbmltYXggZXMgdW4gbcOpdG9kbyBkZSBkZWNpc2nDs24gcGFyYSBtaW5pbWl6YXIgbGEgcMOpcmRpZGEgbcOheGltYSBlc3BlcmFkYSBlbiBqdWVnb3MgY29uIGFkdmVyc2FyaW8geSBjb24gaW5mb3JtYWNpw7NuIHBlcmZlY3RhXCIuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIExhIGltcGxlbWVudGFjacOzbiBlc3TDoSBoZWNoYSBlbiBSdXN0IHkgY29tcGlsYWRvIGEgV2ViYXNzZW1ibHkgY29uIHdhc20tcGFjay4gTGEgcMOhZ2luYSB3ZWIgZXN0w6EgaGVjaGEgZW4gTmV4dC5qcy5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgPHByZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlQmxvY2t9Pjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtcnVzdFwiPnttaW5pbWF4Q29kZX08L2NvZGU+PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/about.js\n");

/***/ })

})