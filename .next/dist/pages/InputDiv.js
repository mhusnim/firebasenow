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

var _jsxFileName = '/Users/radiegtya/Documents/react-apps/firebasenow/pages/InputDiv.js';

var TabPane = _antd.Tabs.TabPane;

function callback(key) {
  console.log(key);
}

var InputDiv = function (_Component) {
  (0, _inherits3.default)(InputDiv, _Component);

  function InputDiv() {
    (0, _classCallCheck3.default)(this, InputDiv);

    return (0, _possibleConstructorReturn3.default)(this, (InputDiv.__proto__ || (0, _getPrototypeOf2.default)(InputDiv)).apply(this, arguments));
  }

  (0, _createClass3.default)(InputDiv, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_antd.Tabs, { onChange: callback, type: 'card', className: 'TabInput', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(TabPane, { tab: 'Javascript', key: '1', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('div', { className: 'javascript-list-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('div', { className: 'InstallationBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'Installation'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'npm instal xxxxxxxxxxx-xxxx'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'npm run dev'))), _react2.default.createElement('div', { className: 'InstallationBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Fetch data'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'This is place code'))))), _react2.default.createElement(TabPane, { tab: 'React Native', key: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', { className: 'RN-list-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('div', { className: 'InstallationBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Installation'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'npm instal xxxxxxxxxxx-xxxx'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'npm run dev'))), _react2.default.createElement('div', { className: 'InstallationBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Fetch data'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'This is place code'))))), _react2.default.createElement(TabPane, { tab: 'IOS & Android', key: '3', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('div', { className: 'mobile-list-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('div', { className: 'InstallationBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Installation'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'npm instal xxxxxxxxxxx-xxxx'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'npm run dev'))), _react2.default.createElement('div', { className: 'InstallationBlock', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Fetch data'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'This is place code')))))));
    }
  }]);

  return InputDiv;
}(_react.Component);

exports.default = InputDiv;