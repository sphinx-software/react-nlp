'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WordComponent = require('./WordComponent');

var _WordComponent2 = _interopRequireDefault(_WordComponent);

var _SettingLang = require('./SettingLang');

var _SettingLang2 = _interopRequireDefault(_SettingLang);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineComponent = function (_React$Component) {
    _inherits(LineComponent, _React$Component);

    function LineComponent(props) {
        _classCallCheck(this, LineComponent);

        return _possibleConstructorReturn(this, (LineComponent.__proto__ || Object.getPrototypeOf(LineComponent)).call(this, props));
    }

    _createClass(LineComponent, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var renderWord = this.props.line.items.map(function (item, index) {
                return _react2.default.createElement(_WordComponent2.default, { settings: _this2.props.settings, key: index, index: index, data: item });
            });
            return _react2.default.createElement(
                'div',
                {
                    style: this.props.index % 2 === 0 ? Object.assign(_Styles2.default.itemTranslate, _Styles2.default.itemTranslateBg) : Object.assign(_Styles2.default.itemTranslate, _Styles2.default.itemTranslateBgGray) },
                _react2.default.createElement(
                    'div',
                    { style: _Styles2.default.displayFlex },
                    _react2.default.createElement(
                        'div',
                        { style: Object.assign(_Styles2.default.itemCount, _Styles2.default.textRight, _Styles2.default.paddingTopBottom) },
                        this.props.index + 1
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: Object.assign(_Styles2.default.borderLeft, _Styles2.default.textResult, _Styles2.default.paddingTopBottom) },
                        _react2.default.createElement(
                            'div',
                            { style: _Styles2.default.lineWord },
                            renderWord
                        )
                    )
                ),
                _react2.default.createElement(_SettingLang2.default, { lang: 'EN', display: this.props.settings.en, text: this.props.line.text }),
                _react2.default.createElement(_SettingLang2.default, { lang: 'JA', display: this.props.settings.ja, text: this.props.line.text_ja }),
                _react2.default.createElement(_SettingLang2.default, { lang: 'CN', display: this.props.settings.cn, text: this.props.line.text_cn })
            );
        }
    }]);

    return LineComponent;
}(_react2.default.Component);

LineComponent.defaultProps = {
    line: {
        items: [],
        text: ''
    }
};

var _default = LineComponent;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(LineComponent, 'LineComponent', 'src/LineComponent.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/LineComponent.jsx');
}();

;