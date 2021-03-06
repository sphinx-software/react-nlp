'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SettingLang = function (_React$Component) {
    _inherits(SettingLang, _React$Component);

    function SettingLang(props) {
        _classCallCheck(this, SettingLang);

        return _possibleConstructorReturn(this, (SettingLang.__proto__ || Object.getPrototypeOf(SettingLang)).call(this, props));
    }

    _createClass(SettingLang, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.props.display ? _Styles2.default.displayFlex : _Styles2.default.hide },
                _react2.default.createElement(
                    'div',
                    { style: Object.assign(_Styles2.default.itemCount, _Styles2.default.textRight, _Styles2.default.paddingTopBottom) },
                    this.props.lang
                ),
                _react2.default.createElement(
                    'div',
                    { style: Object.assign(_Styles2.default.borderLeft, _Styles2.default.textResult, _Styles2.default.paddingTopBottom) },
                    this.props.text
                )
            );
        }
    }]);

    return SettingLang;
}(_react2.default.Component);

SettingLang.defaultProps = {
    display: true
};

var _default = SettingLang;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(SettingLang, 'SettingLang', 'src/SettingLang.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/SettingLang.jsx');
}();

;