'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _antd = require('antd');

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Pricing = require('./Pricing');

var _Pricing2 = _interopRequireDefault(_Pricing);

var _ScrollParallax = require('rc-scroll-anim/lib/ScrollParallax');

var _ScrollParallax2 = _interopRequireDefault(_ScrollParallax);

var _rcScrollAnim = require('rc-scroll-anim');

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
			}, 'Firebasenow'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
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
			}, _react2.default.createElement('img', { src: '../static/images/main-logo.png', className: 'logo', __source: {
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
			}, _react2.default.createElement(_rcScrollAnim.Link, { className: 'nav-button', to: 'professional', __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, 'Blog')), _react2.default.createElement('li', { className: 'nav-list', __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement(_rcScrollAnim.Link, { className: 'nav-button', to: 'experience', __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, 'Docs')), _react2.default.createElement('li', { className: 'nav-list', __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(_rcScrollAnim.Link, { className: 'nav-button', to: 'price', __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, 'Pricing'))))), _react2.default.createElement(_antd.Layout, { id: 'home', __source: {
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
			}, 'Bottom'), _react2.default.createElement(_rcScrollAnim.Link, { className: 'button-scroll', to: 'home.', __source: {
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