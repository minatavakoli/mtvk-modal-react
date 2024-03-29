"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modalcomponent;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./Modalcomponent.css");

var _close = _interopRequireDefault(require("./close.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Modalcomponent(_ref) {
  let {
    type = undefined,
    size = undefined,
    show = false,
    label = ""
  } = _ref;
  const [openModal, setOpenModal] = (0, _react.useState)(true);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-component"
  }, openModal && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper modal-".concat(type, " modal-").concat(size, " ")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-label"
  }, " ", label, " "), /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => {
      setOpenModal(false);
    },
    style: {
      position: "absolute",
      top: 5,
      left: 5
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _close.default,
    style: {
      width: "30px",
      height: "28px"
    }
  }))));
}