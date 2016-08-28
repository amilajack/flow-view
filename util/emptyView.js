(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.emptyView = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var emptyView = {
    height: 500,
    width: 500,
    node: {},
    link: {},
    selectedItems: [],
    isDraggingItems: false,
    previousDraggingPoint: null,
    nodeSelector: null,
    draggedLinkId: null,
    pinRadius: 6,
    nodeHeight: 40,
    fontWidth: 8
  };

  exports.default = emptyView;
  module.exports = exports["default"];
});