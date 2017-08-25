webpackHotUpdate(5,{

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(577);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _antd = __webpack_require__(591);

var _Home = __webpack_require__(1093);

var _Home2 = _interopRequireDefault(_Home);

var _Pricing = __webpack_require__(1096);

var _Pricing2 = _interopRequireDefault(_Pricing);

var _ScrollParallax = __webpack_require__(846);

var _ScrollParallax2 = _interopRequireDefault(_ScrollParallax);

var _rcScrollAnim = __webpack_require__(1182);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/radiegtya/Documents/react-apps/firebasenow/pages/index.js?entry';

var Header = _antd.Layout.Header;

var Index = function (_Component) {
	(0, _inherits3.default)(Index, _Component);

	function Index() {
		(0, _classCallCheck3.default)(this, Index);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

		_this.handleScroll = function () {
			var affix = _this.state.affix;
			var offset = _this.props.offset;
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

			if (!affix && scrollTop >= offset) {
				_this.setState({
					affix: true
				});
			}

			if (affix && scrollTop < offset) {
				_this.setState({
					affix: false
				});
			}
		};

		_this.state = {
			affix: false
		};
		return _this;
	}

	(0, _createClass3.default)(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('scroll', this.handleScroll);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('scroll', this.handleScroll);
		}
	}, {
		key: 'render',
		value: function render() {
			var affix = this.state.affix ? 'affix' : '';

			var _props = this.props,
			    className = _props.className,
			    props = (0, _objectWithoutProperties3.default)(_props, ['className']);

			return _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/png', href: '../static/images/favicon.ico', __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}), _react2.default.createElement('title', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'FirebaseTable'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css', __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}), _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/styles/style.css', __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			})), _react2.default.createElement(Header, (0, _extends3.default)({}, props, { className: 'nav ' + ' ' + affix, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}), _react2.default.createElement(_antd.Col, { md: 24, className: 'navbar', __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement('img', { src: '../static/images/logo-firebasetable.png', className: 'logo', __source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}), _react2.default.createElement('ul', { className: 'nav-group', __source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement('li', { className: 'nav-list', __source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, _react2.default.createElement(_rcScrollAnim.Link, { className: 'nav-button', to: 'home', __source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, 'Home')), _react2.default.createElement('li', { className: 'nav-list', __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, _react2.default.createElement(_rcScrollAnim.Link, { className: 'nav-button', to: 'price', __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, 'Pricing')), _react2.default.createElement('li', { className: 'nav-list', __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement(_rcScrollAnim.Link, { className: 'nav-button', __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, 'Sign In')), _react2.default.createElement('li', { className: 'nav-list', __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(_rcScrollAnim.Link, { className: 'nav-button', __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, 'Sign Up'))))), _react2.default.createElement(_antd.Layout, { id: 'home', __source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement('div', { className: 'demo-crud', __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement('img', { src: '../static/images/gif.png', className: 'content-crud', __source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			})), _react2.default.createElement('div', { className: 'scrolling', __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, 'Explore FirebaseTable'), _react2.default.createElement(_rcScrollAnim.Link, { className: 'button-scroll', to: 'home.', __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(_antd.Icon, { type: 'down-circle', __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			})))), _react2.default.createElement(_antd.Layout, { className: 'Landing', id: 'home.', __source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement(_Home2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			})), _react2.default.createElement(_antd.Layout, { className: 'Price', id: 'price', __source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement(_Pricing2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			})));
		}
	}]);

	return Index;
}(_react.Component);

Index.propTypes = { offset: _react.PropTypes.number };
Index.defaultProps = { offset: 30 };
exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/radiegtya/Documents/react-apps/firebasenow/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/radiegtya/Documents/react-apps/firebasenow/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7Ozs7QUFDcEI7Ozs7QUFDZTs7QUFHZjs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDRTs7Ozs7O0lBUEQsU0FBVyxhQUFYOztJQVVhO2dDQUtuQjs7a0JBQWM7c0NBQUE7OzRIQUFBOztRQWVkLGVBQWUsWUFDYjtPQUFNLFFBQVEsTUFBSyxNQUNuQjtPQUFNLFNBQVMsTUFBSyxNQUNwQjtPQUFNLFlBQVksU0FBUyxnQkFBZ0IsYUFBYSxTQUFTLEtBRWpFOztPQUFJLENBQUMsU0FBUyxhQUFhLFFBQ3pCO1VBQUs7WUFHTjtBQUZHO0FBSUo7O09BQUksU0FBUyxZQUFZLFFBQ3ZCO1VBQUs7WUFHTjtBQUZHO0FBR0w7QUE3QkM7O1FBQUs7VUFDSTtBQUFQO1NBRUg7Ozs7O3NDQUdDO1VBQU8saUJBQWlCLFVBQVUsS0FDbkM7Ozs7eUNBR0M7VUFBTyxvQkFBb0IsVUFBVSxLQUN0Qzs7OzsyQkFxQkQ7T0FBTSxRQUFRLEtBQUssTUFBTSxRQUFRLFVBQVU7O2dCQUNULEtBQUs7T0FBN0I7T0FBYyx3REFFeEI7OzBCQUNFOztlQUFEO2lCQUNDO0FBREQ7QUFBQSxzQkFDRTs7ZUFBRDtpQkFDQztBQUREO0FBQUEsOENBQ08sS0FBSSxpQkFBZ0IsTUFBSyxhQUFZLE1BQUs7ZUFBaEQ7aUJBQ0E7QUFEQTt1QkFDQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFDQSwwREFBTSxTQUFRO2VBQWQ7aUJBQ0E7QUFEQTsrQ0FDTSxNQUFLLFlBQVcsU0FBUTtlQUE5QjtpQkFDQTtBQURBOytDQUNNLEtBQUksY0FBYSxNQUFLO2VBQTVCO2lCQUNBO0FBREE7K0NBQ00sS0FBSSxjQUFhLE1BQUs7ZUFBNUI7aUJBRUQ7QUFGQzt3QkFFQSxjQUFELG1DQUFZLFNBQU8sMEJBQXdCO2VBQTNDO2lCQUNDO0FBREQ7dUJBQ0UsMkJBQUksSUFBSSxJQUFJLFdBQVU7ZUFBdkI7aUJBQ0M7QUFERDs2Q0FDTSxLQUFJLDJDQUEwQyxXQUFVO2VBQTdEO2lCQUNBO0FBREE7dUJBQ0Esc0JBQUksV0FBVTtlQUFkO2lCQUNDO0FBREQ7c0JBQ0Msc0JBQUksV0FBVTtlQUFkO2lCQUF5QjtBQUF6QjtzQkFBMEIsb0NBQUssV0FBVSxjQUFhLElBQUc7ZUFBaEM7aUJBQUE7QUFBQTtNQUN6QixnREFBSSxXQUFVO2VBQWQ7aUJBQXlCO0FBQXpCO3NCQUEwQixvQ0FBSyxXQUFVLGNBQWEsSUFBRztlQUFoQztpQkFBQTtBQUFBO01BQ3pCLG1EQUFJLFdBQVU7ZUFBZDtpQkFBeUI7QUFBekI7c0JBQTBCLG9DQUFLLFdBQVU7ZUFBaEI7aUJBQUE7QUFBQTtNQUN6QixtREFBSSxXQUFVO2VBQWQ7aUJBQXlCO0FBQXpCO3NCQUEwQixvQ0FBSyxXQUFVO2VBQWhCO2lCQUFBO0FBQUE7TUFLM0IsZ0NBQUMsOEJBQU8sSUFBRztlQUFYO2lCQUNBO0FBREE7c0JBQ0EsdUJBQUssV0FBVTtlQUFmO2lCQUNDO0FBREQ7NkNBQ00sS0FBSSw0QkFBMkIsV0FBVTtlQUE5QztpQkFFRDtBQUZDO3dCQUVELHVCQUFLLFdBQVU7ZUFBZjtpQkFDQztBQUREO3NCQUNDOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUNBLDBDQUFDLG9DQUFLLFdBQVUsaUJBQWdCLElBQUc7ZUFBbkM7aUJBQTJDO0FBQTNDO3NCQUE0Qyw0QkFBSyxNQUFLO2VBQVg7aUJBSTdDO0FBSjZDOzBCQUk1Qyw4QkFBTyxXQUFVLFdBQVUsSUFBRztlQUEvQjtpQkFDQztBQUREO3NCQUNFOztlQUFEO2lCQUdEO0FBSEM7QUFBQSx3QkFHQSw4QkFBTyxXQUFVLFNBQVEsSUFBRztlQUE3QjtpQkFDQztBQUREO3NCQUNFOztlQUFEO2lCQUlIO0FBSkc7QUFBQTs7Ozs7QUEvRThCOztBQUFkLE1BQ2IsWUFBWSxFQUFFLFFBQVEsaUJBQVU7QUFEbkIsTUFHWixlQUFlLEVBQUUsUUFBUTtrQkFIYixNIiwiZmlsZSI6IjUuNTlhMzVlNWVhOWQ3ZDgwN2U2NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBMYXlvdXQsIENvbCwgSWNvbn0gZnJvbSAnYW50ZCc7XG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuaW1wb3J0IFByaWNpbmcgZnJvbSAnLi9QcmljaW5nJztcblxuXG5pbXBvcnQgU2Nyb2xsUGFyYWxsYXggZnJvbSAncmMtc2Nyb2xsLWFuaW0vbGliL1Njcm9sbFBhcmFsbGF4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyYy1zY3JvbGwtYW5pbSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0geyBvZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIsIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsgb2Zmc2V0OiAzMCwgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZmZpeDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IGFmZml4ID0gdGhpcy5zdGF0ZS5hZmZpeDtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnByb3BzLm9mZnNldDtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKCFhZmZpeCAmJiBzY3JvbGxUb3AgPj0gb2Zmc2V0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWZmaXg6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWZmaXggJiYgc2Nyb2xsVG9wIDwgb2Zmc2V0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWZmaXg6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3QgYWZmaXggPSB0aGlzLnN0YXRlLmFmZml4ID8gJ2FmZml4JyA6ICcnO1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIuLi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24uaWNvXCIvPlxuXHRcdFx0XHRcdDx0aXRsZT5GaXJlYmFzZVRhYmxlPC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cblx0XHRcdFx0XHQ8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMi45LjMvYW50ZC5taW4uY3NzJyAvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLi4vc3RhdGljL3N0eWxlcy9zdHlsZS5jc3MnIC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PEhlYWRlciB7Li4ucHJvcHN9IGNsYXNzTmFtZT17YG5hdiAkeycnfSAke2FmZml4fWB9PlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezI0fSBjbGFzc05hbWU9XCJuYXZiYXJcIj5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9sb2dvLWZpcmViYXNldGFibGUucG5nXCIgY2xhc3NOYW1lPVwibG9nb1wiLz5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXYtZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0XCI+PExpbmsgY2xhc3NOYW1lPVwibmF2LWJ1dHRvblwiIHRvPVwiaG9tZVwiPkhvbWU8L0xpbms+PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0XCI+PExpbmsgY2xhc3NOYW1lPVwibmF2LWJ1dHRvblwiIHRvPVwicHJpY2VcIj5QcmljaW5nPC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdFwiPjxMaW5rIGNsYXNzTmFtZT1cIm5hdi1idXR0b25cIj5TaWduIEluPC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdFwiPjxMaW5rIGNsYXNzTmFtZT1cIm5hdi1idXR0b25cIj5TaWduIFVwPC9MaW5rPjwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdCAgICA8L0hlYWRlcj5cblxuXHRcdFx0ICA8TGF5b3V0IGlkPVwiaG9tZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1jcnVkXCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvZ2lmLnBuZ1wiIGNsYXNzTmFtZT1cImNvbnRlbnQtY3J1ZFwiLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbGluZ1wiPlxuXHRcdFx0XHRcdFx0PHA+RXhwbG9yZSBGaXJlYmFzZVRhYmxlPC9wPlxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiYnV0dG9uLXNjcm9sbFwiIHRvPVwiaG9tZS5cIj48SWNvbiB0eXBlPVwiZG93bi1jaXJjbGVcIiAvPjwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9MYXlvdXQ+XG5cblx0XHRcdFx0PExheW91dCBjbGFzc05hbWU9XCJMYW5kaW5nXCIgaWQ9XCJob21lLlwiPlxuXHRcdFx0XHRcdDxIb21lIC8+XG5cdFx0XHRcdDwvTGF5b3V0PlxuXG5cdFx0XHRcdDxMYXlvdXQgY2xhc3NOYW1lPVwiUHJpY2VcIiBpZD1cInByaWNlXCI+XG5cdFx0XHRcdFx0PFByaWNpbmcgLz5cblx0XHRcdFx0PC9MYXlvdXQ+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==