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

var _jsxFileName = '/Users/radiegtya/Documents/react-apps/firebasenow/pages/Home.js';

var _Input = 'Input',
    TextArea = _Input.TextArea;

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
          lineNumber: 8
        }
      }, _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_antd.Col, { md: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('img', { src: '../static/images/logo.png', className: 'Content-Logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })), _react2.default.createElement(_antd.Col, { md: 22, className: 'title', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'Out of The Box Table GUI for Your Firebase Data'), _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_antd.Col, { md: 11, className: 'instant', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'tool', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), ' Easy Data Management'), _react2.default.createElement('p', { className: 'instant-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Firebase is a good Backend as a Service, but it ', "doesn't", ' have Graphical User Interface for managing ', "it's", ' data. FirebaseTable come to solve those problem by developing an Easy and Intuitive GUI for firebase.')), _react2.default.createElement(_antd.Col, { md: 11, className: 'instant', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'bar-chart', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), ' Increase Productivity'), _react2.default.createElement('p', { className: 'instant-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'FirebaseTable make your work easier and faster. Creating text input, text area, table relationship, uploading image and more. All of those can be easily done with FirebaseTable.'))), _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_antd.Col, { md: 11, className: 'instant', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'retweet', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), ' Integration'), _react2.default.createElement('p', { className: 'instant-content', align: 'jutify', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'FirebaseTable output is just a bunch of Firebase Objects that can be used on your Web App and Mobile App easily. Just like fetching data from Firebase, but with easier data management on backend.'))))), _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_antd.Col, { md: 22, push: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Getting Started'), _react2.default.createElement('div', { className: 'started-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('ol', { className: 'started-group-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Register into Firebasenow ', _react2.default.createElement('a', { href: 'http://facebook.com', className: 'register', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'click here'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Set your Firebase API Token'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('img', { src: '../static/images/token.png', className: 'token-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Create your first Table'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('img', { src: '../static/images/create-table.png', className: 'create-table-gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Add some column as you need'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('img', { src: '../static/images/create-table.png', className: 'create-table-gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Fetch your data using Firebase SDK or API'), _react2.default.createElement(_antd.Col, { md: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_antd.Col, { md: 7, className: 'javascript-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'appstore-o', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), ' Javascript'), _react2.default.createElement('div', { className: 'javascript-list-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Installation'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'npm instal xxxxxxxxxxx-xxxx'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'npm run dev'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Fetch data'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'This is place code')))))), _react2.default.createElement(_antd.Col, { md: 8, className: 'RN-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'appstore-o', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), ' React Native'), _react2.default.createElement('div', { className: 'RN-list-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Installation'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'npm instal xxxxxxxxxxx-xxxx'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, 'npm run dev'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'Fetch data'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'This is place code')))))), _react2.default.createElement(_antd.Col, { md: 7, className: 'mobile-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'appstore-o', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), ' IOS & Android'), _react2.default.createElement('div', { className: 'mobile-list-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'Installation'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'npm instal xxxxxxxxxxx-xxxx'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, 'npm run dev'))), _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, 'Fetch data'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, 'This is place code'))))))), _react2.default.createElement('div', { className: 'button-More', __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement(_antd.Button, { type: 'primary', icon: 'eye-o', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, 'View More on Docs'))))))), _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_antd.Col, { md: 22, push: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, 'Output'), _react2.default.createElement(_antd.Col, { md: 24, xs: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement(_antd.Col, { md: 8, xs: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('div', { className: 'left-box', __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement('img', { src: '../static/images/leftward.svg', style: { marginTop: 70 }, className: 'leftward', __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }))), _react2.default.createElement(_antd.Col, { md: 8, xs: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement('h3', { className: 'Json-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, 'JSON / Firebase obj'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, 'npm instal xxxxxxxxxxx-xxxx'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, 'npm run dev'))), _react2.default.createElement(_antd.Col, { md: 8, xs: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement('div', { className: 'right-box', __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement('img', { src: '../static/images/rightward.svg', style: { marginTop: 70 }, className: 'rightward', __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      })))), _react2.default.createElement(_antd.Col, { md: 24, __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement(_antd.Col, { md: 12, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement('div', { className: 'web-output', __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement('h3', { className: 'web-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, 'Web'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, 'This is place code')))), _react2.default.createElement(_antd.Col, { md: 12, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement('div', { className: 'mobile-output', __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement('h3', { className: 'mobile-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, 'Mobile'), _react2.default.createElement('div', { className: 'command', __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, 'This is place code'))))))));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;