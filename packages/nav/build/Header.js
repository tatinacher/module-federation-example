"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _cart = _interopRequireDefault(require("home/cart"));

var _reflect = require("@effector/reflect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HeaderBlock = function HeaderBlock(_ref) {
  var cart = _ref.cart,
      increment = _ref.increment;
  return /*#__PURE__*/_react["default"].createElement("header", {
    style: {
      fontSize: "xx-large",
      backgroundColor: "#313D5A",
      color: "white",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Navigation App - remote "), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Cart: ", cart), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      fontSize: "large",
      backgroundColor: "#D62839",
      color: "white",
      border: 0,
      padding: 10,
      margin: "0 10px",
      borderRadius: "13px"
    },
    onClick: increment
  }, "Add")));
};

var Header = (0, _reflect.reflect)({
  view: HeaderBlock,
  bind: {
    cart: _cart["default"].$cart,
    increment: _cart["default"].incrementCart
  }
});
var _default = Header;
exports["default"] = _default;