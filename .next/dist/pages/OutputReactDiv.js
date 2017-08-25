'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/radiegtya/Documents/react-apps/firebasenow/pages/OutputReactDiv.js';


var OutputReactDiv = function (_Component) {
  (0, _inherits3.default)(OutputReactDiv, _Component);

  function OutputReactDiv() {
    (0, _classCallCheck3.default)(this, OutputReactDiv);

    return (0, _possibleConstructorReturn3.default)(this, (OutputReactDiv.__proto__ || (0, _getPrototypeOf2.default)(OutputReactDiv)).apply(this, arguments));
  }

  (0, _createClass3.default)(OutputReactDiv, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement(_antd.Col, { md: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_antd.Col, { md: 8, className: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement('h1', { className: 'outputTitle', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, 'Output')), _react2.default.createElement(_antd.Col, { md: 16, className: 'optionButton', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('a', { href: '#', className: 'linkToOthers', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'React Native docs'), ' ', _react2.default.createElement(_antd.Icon, { type: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })), _react2.default.createElement('a', { href: '#', className: 'linkToOthers', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'View on Github'), ' ', _react2.default.createElement(_antd.Icon, { type: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })))), _react2.default.createElement(_antd.Col, { md: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', { className: 'root', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'GraphQL Rocks by Sashko Stubailo ', _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, '(3 votes)')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Introduction to GraphQL by Tom Coleman ', _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, '(2 votes)')), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Advanced GraphQL by Sashko Stubailo ', _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, '(1 votes)'))))));
    }
  }]);

  return OutputReactDiv;
}(_react.Component);

exports.default = OutputReactDiv;