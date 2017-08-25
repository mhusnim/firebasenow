webpackHotUpdate(5,{

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(582);

var _markdownInJs = __webpack_require__(1093);

var _markdownInJs2 = _interopRequireDefault(_markdownInJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/radiegtya/Documents/react-apps/firebasenow/pages/InputReactDiv.js';


var Installation = _react2.default.createElement('div', { className: 'schema-output', __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  }
}, _react2.default.createElement('div', { className: 'command', __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}, _react2.default.createElement('p', {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}, '$ npm install firebase --save')));

var code = _react2.default.createElement('div', { className: 'client-output', __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, _react2.default.createElement('div', { className: 'command', __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, 'markdown` # Title ## Subtitle ### Subsubtitle Paragram with also - One - nice - list [and a link](http://www.pointing.to/nowhere) *Thank you* `'));

var InputReactDiv = function (_Component) {
  (0, _inherits3.default)(InputReactDiv, _Component);

  function InputReactDiv() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InputReactDiv);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InputReactDiv.__proto__ || (0, _getPrototypeOf2.default)(InputReactDiv)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: "true"
    }, _this.onChange = function (e) {
      console.log('radio checked', e.target.value);
      _this.setState({
        value: e.target.value
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(InputReactDiv, [{
    key: 'render',
    value: function render() {
      var mode = this.state.mode;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_antd.Radio.Group, { className: 'ButtonInput', onChange: this.onChange, value: mode, defaultValue: 'true', style: { marginBottom: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_antd.Radio.Button, { value: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Installation')), _react2.default.createElement(_antd.Radio.Button, { value: 'false', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Code'))), this.state.value == "true" ? Installation : code);
    }
  }]);

  return InputReactDiv;
}(_react.Component);

exports.default = InputReactDiv;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/radiegtya/Documents/react-apps/firebasenow/pages/InputReactDiv.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/radiegtya/Documents/react-apps/firebasenow/pages/InputReactDiv.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/InputReactDiv")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbnB1dFJlYWN0RGl2LmpzPzFlNzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7Ozs7QUFDTTs7QUFDMUI7Ozs7Ozs7OztBQUVQLElBQU0sK0JBQ0YsdUJBQUssV0FBVTtjQUFmO2dCQUNFO0FBREY7Q0FBQSxrQkFDRSx1QkFBSyxXQUFVO2NBQWY7Z0JBQ0U7QUFERjttQkFDRTs7Y0FBQTtnQkFBQTtBQUFBO0FBQUE7O0FBS1IsSUFBTSx1QkFDRix1QkFBSyxXQUFVO2NBQWY7Z0JBQ0U7QUFERjtDQUFBLGtCQUNFLHVCQUFLLFdBQVU7Y0FBZjtnQkFBQTtBQUFBO0dBQUE7O0lBZ0JlOzs7Ozs7Ozs7Ozs7OzswTkFDbkI7YUFDUztBQUFQLGFBRUYsV0FBVyxVQUFDLEdBQ1Y7Y0FBUSxJQUFJLGlCQUFpQixFQUFFLE9BQy9CO1lBQUs7ZUFDSSxFQUFFLE9BRVo7QUFGRzs7Ozs7OzZCQUlLO1VBQ0MsT0FBUyxLQUFLLE1BQ3RCOzs2QkFDRTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsWUFBTyxTQUFNLFdBQVUsZUFBYyxVQUFVLEtBQUssVUFBVSxPQUFPLE1BQU0sY0FBYSxRQUFPLE9BQU8sRUFBRSxjQUFjO29CQUF0SDtzQkFDRTtBQURGO3lCQUNHLGNBQUQsWUFBTyxVQUFPLE9BQU07b0JBQXBCO3NCQUEyQjtBQUEzQjt5QkFBMkI7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUMzQixrQ0FBQyxjQUFELFlBQU8sVUFBTyxPQUFNO29CQUFwQjtzQkFBNEI7QUFBNUI7eUJBQTRCOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FHN0IsZ0JBQUssTUFBTSxTQUFTLFNBQVMsZUFHbkM7Ozs7O0FBdkJ3Qzs7a0JBQXRCLGMiLCJmaWxlIjoiNS5jNmVkMjJlNDhkNGY0NjE5NTBiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBSb3csIEljb24sIEJ1dHRvbiwgUmFkaW99IGZyb20gJ2FudGQnO1xuaW1wb3J0IG1hcmtkb3duIGZyb20gJ21hcmtkb3duLWluLWpzJ1xuXG5jb25zdCBJbnN0YWxsYXRpb24gPShcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjaGVtYS1vdXRwdXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZFwiPlxuICAgICAgICA8cD4kIG5wbSBpbnN0YWxsIGZpcmViYXNlIC0tc2F2ZTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCBjb2RlID0oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtb3V0cHV0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1hbmRcIj5cbiAgICAgICAgbWFya2Rvd25gXG4gICAgICAgICMgVGl0bGVcbiAgICAgICAgIyMgU3VidGl0bGVcbiAgICAgICAgIyMjIFN1YnN1YnRpdGxlXG4gICAgICAgIFBhcmFncmFtIHdpdGggYWxzb1xuICAgICAgICAtIE9uZVxuICAgICAgICAtIG5pY2VcbiAgICAgICAgLSBsaXN0XG4gICAgICAgIFthbmQgYSBsaW5rXShodHRwOi8vd3d3LnBvaW50aW5nLnRvL25vd2hlcmUpXG4gICAgICAgICpUaGFuayB5b3UqXG4gICAgICAgIGBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFJlYWN0RGl2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IFwidHJ1ZVwiLFxuICB9XG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmFkaW8gY2hlY2tlZCcsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vZGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cIkJ1dHRvbklucHV0XCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHZhbHVlPXttb2RlfSBkZWZhdWx0VmFsdWU9XCJ0cnVlXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PlxuICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJ0cnVlXCI+PHN0cm9uZz5JbnN0YWxsYXRpb248L3N0cm9uZz48L1JhZGlvLkJ1dHRvbj5cbiAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiZmFsc2VcIj48c3Ryb25nPkNvZGU8L3N0cm9uZz48L1JhZGlvLkJ1dHRvbj5cbiAgICAgICAgPC9SYWRpby5Hcm91cD5cblxuICAgICAgICB7dGhpcy5zdGF0ZS52YWx1ZSA9PSBcInRydWVcIiA/IEluc3RhbGxhdGlvbiA6IGNvZGV9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL0lucHV0UmVhY3REaXYuanMiXSwic291cmNlUm9vdCI6IiJ9