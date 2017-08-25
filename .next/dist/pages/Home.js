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

var _InputDiv = require('./InputDiv');

var _InputDiv2 = _interopRequireDefault(_InputDiv);

var _OutputDiv = require('./OutputDiv');

var _OutputDiv2 = _interopRequireDefault(_OutputDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/radiegtya/Documents/react-apps/firebasenow/pages/Home.js';

var _Input = 'Input',
    TextArea = _Input.TextArea;

var FormItem = _antd.Form.Item;

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_antd.Row, { className: 'intro', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_antd.Col, { md: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_antd.Col, { md: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('img', { src: '../static/images/logo.png', className: 'Content-Logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), _react2.default.createElement(_antd.Col, { md: 22, className: 'title', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Out of The Box Table GUI for Your Firebase Data'))), _react2.default.createElement(_antd.Col, { md: 24, className: 'introComponent', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_antd.Col, { md: 8, className: 'instant', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('div', { className: 'introImageComponent', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('img', { src: '../static/images/easy-management.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'tool', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), ' Easy Data Management'), _react2.default.createElement('p', { className: 'instant-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'Firebase is a good Backend as a Service, but it ', "doesn't", ' have Graphical User Interface for managing ', "it's", ' data. FirebaseTable come to solve those problem by developing an Easy and Intuitive GUI for firebase.')), _react2.default.createElement(_antd.Col, { md: 8, className: 'instant', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('div', { className: 'introImageComponent', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('img', { src: '../static/images/increase-productivity.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'bar-chart', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), ' Increase Productivity'), _react2.default.createElement('p', { className: 'instant-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'FirebaseTable make your work easier and faster. Creating text input, text area, table relationship, uploading image and more. All of those can be easily done with FirebaseTable.')), _react2.default.createElement(_antd.Col, { md: 8, className: 'instant', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('div', { className: 'introImageComponent', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('img', { src: '../static/images/integration.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'retweet', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), ' Integration'), _react2.default.createElement('p', { className: 'instant-content', align: 'jutify', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'FirebaseTable output is just a bunch of Firebase Objects that can be used on your Web App and Mobile App easily. Just like fetching data from Firebase, but with easier data management on backend.')))), _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('div', { className: 'mailGroup', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('div', { className: 'mailBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('h3', { className: 'headBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Increase Your Productivity with FirebaseTable'), _react2.default.createElement(_antd.Form, { layout: 'inline', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_antd.Input, { placeholder: 'Your Email', className: 'emailForm', type: 'email', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), _react2.default.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_antd.Button, { type: 'primary', className: 'mailButton', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Sign up for free'))), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'FirebaseTable is free to use. We also offer paid plans with additional features, and support.')))), _react2.default.createElement(_antd.Row, { className: 'started', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('div', { className: 'star', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('h1', { classname: 'fancy', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Getting Started'), _react2.default.createElement('div', { className: 'started-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('ol', { className: 'started-group-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Create Your Firebase Account if You ', "don't", ' have one. ', _react2.default.createElement('a', { href: 'https://firebase.google.com/', target: '_blank', className: 'register', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'click here'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Sign Up into FirebaseTable. ', _react2.default.createElement('a', { href: '#', className: 'register', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Sign Up'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Set your Firebase API Info on FirebaseTable Settings Page'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('img', { src: '../static/images/token.png', className: 'token-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Create your first Table'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('img', { src: '../static/images/create-table.png', className: 'create-table-gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Add some column as you need'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('img', { src: '../static/images/create-table.png', className: 'create-table-gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'Fetch your data using Firebase SDK or API'), _react2.default.createElement(_antd.Col, { md: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_antd.Col, { md: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_InputDiv2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), _react2.default.createElement(_antd.Col, { md: 12, className: 'output', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_OutputDiv2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }))), _react2.default.createElement('div', { className: 'button-More', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_antd.Button, { onClick: function onClick() {
          return window.open('https://firebase.google.com/docs/', '_blank');
        }, type: 'primary', icon: 'eye-o', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'Learn More about Firebase'))))))));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;