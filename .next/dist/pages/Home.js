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

var _InputReactDiv = require('./InputReactDiv');

var _InputReactDiv2 = _interopRequireDefault(_InputReactDiv);

var _OutputReactDiv = require('./OutputReactDiv');

var _OutputReactDiv2 = _interopRequireDefault(_OutputReactDiv);

var _InputRNDiv = require('./InputRNDiv');

var _InputRNDiv2 = _interopRequireDefault(_InputRNDiv);

var _OutputRNDiv = require('./OutputRNDiv');

var _OutputRNDiv2 = _interopRequireDefault(_OutputRNDiv);

var _rcScrollAnim = require('rc-scroll-anim');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/radiegtya/Documents/react-apps/firebasenow/pages/Home.js';

var _Input = 'Input',
    TextArea = _Input.TextArea;

var FormItem = _antd.Form.Item;

var TabPane = _antd.Tabs.TabPane;

function callback(key) {
  console.log(key);
}

var react = _react2.default.createElement('div', {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
});

var reactNative = _react2.default.createElement('div', {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  }
});

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
          lineNumber: 34
        }
      }, _react2.default.createElement(_antd.Row, { className: 'intro', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_antd.Col, { md: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_antd.Col, { md: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('img', { src: '../static/images/logo.png', className: 'Content-Logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), _react2.default.createElement(_antd.Col, { md: 22, className: 'title', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Out of The Box Table GUI for Your Firebase Data'))), _react2.default.createElement(_antd.Col, { md: 24, className: 'introComponent', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_antd.Col, { md: 8, className: 'instant', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('div', { className: 'introImageComponent', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('img', { src: '../static/images/easy-management.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'tool', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), ' Easy Data Management'), _react2.default.createElement('p', { className: 'instant-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Firebase is a good Backend as a Service, but it ', "doesn't", ' have Graphical User Interface for managing ', "it's", ' data. FirebaseTable come to solve those problem by developing an Easy and Intuitive GUI for firebase.')), _react2.default.createElement(_antd.Col, { md: 8, className: 'instant', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('div', { className: 'introImageComponent', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('img', { src: '../static/images/increase-productivity.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'bar-chart', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), ' Increase Productivity'), _react2.default.createElement('p', { className: 'instant-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'FirebaseTable make your work easier and faster. Creating text input, text area, table relationship, uploading image and more. All of those can be easily done with FirebaseTable.')), _react2.default.createElement(_antd.Col, { md: 8, className: 'instant', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('div', { className: 'introImageComponent', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('img', { src: '../static/images/integration.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'retweet', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), ' Integration'), _react2.default.createElement('p', { className: 'instant-content', align: 'jutify', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'FirebaseTable output is just a bunch of Firebase Objects that can be used on your Web App and Mobile App easily. Just like fetching data from Firebase, but with easier data management on backend.')))), _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('div', { className: 'mailGroup', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('div', { className: 'mailBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('h3', { className: 'headBox', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Increase Your Productivity with FirebaseTable'), _react2.default.createElement(_antd.Form, { layout: 'inline', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_antd.Input, { placeholder: 'Your Email', className: 'emailForm', type: 'email', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })), _react2.default.createElement(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_antd.Button, { type: 'primary', className: 'mailButton', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Sign up for free'))), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'FirebaseTable is free to use. We also offer paid plans with additional features, and support.')))), _react2.default.createElement(_antd.Row, { className: 'started', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('div', { className: 'star', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('h1', { classname: 'fancy', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'Getting Started'), _react2.default.createElement('div', { className: 'started-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('ol', { className: 'started-group-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_antd.Col, { md: 12, sm: 12, xs: 24, className: 'StratedLeftSide', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'Create Your Firebase Project if You ', "don't", ' have one. ', _react2.default.createElement('a', { href: 'https://console.firebase.google.com/', target: '_blank', className: 'register', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'click here'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, 'Sign Up into FirebaseTable. ', _react2.default.createElement('a', { href: '#', className: 'register', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, 'Sign Up'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, 'Set your Firebase API Info on FirebaseTable Settings Page'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('img', { src: '../static/images/token.png', className: 'token-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'Create your first Table'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('img', { src: '../static/images/gif-twitter.gif', className: 'create-table-gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })))), _react2.default.createElement(_antd.Col, { md: 12, sm: 12, xs: 24, className: 'StratedRightSide', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, 'Add some column as you need'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('img', { src: '../static/images/gif-twitter.gif', className: 'create-table-gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, 'Fetch or Mutate your data using Firebase SDK or API'), _react2.default.createElement(_rcScrollAnim.Link, { to: 'queries', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, 'Firebase Queries - See Example Below'))))))), _react2.default.createElement(_antd.Row, { className: 'started', __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement(_antd.Col, { md: 24, className: 'queries', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement('h1', { classname: 'fancy', __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, 'Queries'), _react2.default.createElement('h4', { className: 'SubFancy', __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, 'Because FirebaseTable output is just a bunch of Firebase Object, you can use Query just exactly like normal Firebase Query.')), _react2.default.createElement(_antd.Tabs, { defaultActiveKey: '1', onChange: callback, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(TabPane, { tab: 'Web', key: '1', __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_antd.Col, { md: 12, className: 'input', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_InputReactDiv2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), _react2.default.createElement(_antd.Col, { md: 12, className: 'output', __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('div', { className: 'triangle', __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), _react2.default.createElement(_OutputReactDiv2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }))), _react2.default.createElement(TabPane, { tab: 'React Native', key: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement(_antd.Col, { md: 12, className: 'input', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement(_InputRNDiv2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      })), _react2.default.createElement(_antd.Col, { md: 12, className: 'output', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement('div', { className: 'triangle', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), _react2.default.createElement(_OutputRNDiv2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      })))), _react2.default.createElement('div', { className: 'button-More', __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement(_antd.Button, { onClick: function onClick() {
          return window.open('https://firebase.google.com/docs/', '_blank');
        }, type: 'primary', icon: 'eye-o', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, 'Learn More about Firebase')))));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;