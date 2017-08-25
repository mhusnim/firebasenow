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

var _markdownInJs = require('markdown-in-js');

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