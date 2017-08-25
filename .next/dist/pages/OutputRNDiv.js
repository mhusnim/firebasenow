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

var _jsxFileName = '/Users/radiegtya/Documents/react-apps/firebasenow/pages/OutputRNDiv.js';


var OutputRNDiv = function (_Component) {
  (0, _inherits3.default)(OutputRNDiv, _Component);

  function OutputRNDiv() {
    (0, _classCallCheck3.default)(this, OutputRNDiv);

    return (0, _possibleConstructorReturn3.default)(this, (OutputRNDiv.__proto__ || (0, _getPrototypeOf2.default)(OutputRNDiv)).apply(this, arguments));
  }

  (0, _createClass3.default)(OutputRNDiv, [{
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
          lineNumber: 17
        }
      }, _react2.default.createElement('div', { className: 'imageOutBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('img', { src: '../static/images/RN.png', className: 'outRN', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }))));
    }
  }]);

  return OutputRNDiv;
}(_react.Component);

exports.default = OutputRNDiv;