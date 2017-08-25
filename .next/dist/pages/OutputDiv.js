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

var _jsxFileName = '/Users/radiegtya/Documents/react-apps/firebasenow/pages/OutputDiv.js';


var mobile = _react2.default.createElement('div', { className: 'mobile-output', __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  }
}, _react2.default.createElement('h3', { className: 'mobile-title', __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  }
}, 'Mobile Output'), _react2.default.createElement('div', { className: 'command', __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}, _react2.default.createElement('p', {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  }
}, 'This is place code')));

var web = _react2.default.createElement('div', { className: 'web-output', __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, _react2.default.createElement('h3', { className: 'web-title', __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, 'Web Output'), _react2.default.createElement('div', { className: 'command', __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  }
}, _react2.default.createElement('p', {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}, 'This is place code')));

var OutputDiv = function (_Component) {
  (0, _inherits3.default)(OutputDiv, _Component);

  function OutputDiv() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, OutputDiv);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = OutputDiv.__proto__ || (0, _getPrototypeOf2.default)(OutputDiv)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: true
    }, _this.onChange = function (e) {
      console.log('radio checked', e.target.value);
      _this.setState({
        value: e.target.value
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(OutputDiv, [{
    key: 'render',
    value: function render() {
      var mode = this.state.mode;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_antd.Col, { md: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_antd.Col, { md: 12, className: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('h1', { className: 'outputTitle', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Output')), _react2.default.createElement(_antd.Col, { md: 12, className: 'optionButton', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_antd.Radio.Group, { onChange: this.onChange, value: mode, style: { marginBottom: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_antd.Radio.Button, { value: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Web'), _react2.default.createElement(_antd.Radio.Button, { value: 'false', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Mobile')))), _react2.default.createElement(_antd.Col, { md: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('h3', { className: 'Json-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'JSON / Firebase obj'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'npm instal xxxxxxxxxxx-xxxx'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'npm run dev')), this.state.value == "true" ? web : mobile));
    }
  }]);

  return OutputDiv;
}(_react.Component);

exports.default = OutputDiv;