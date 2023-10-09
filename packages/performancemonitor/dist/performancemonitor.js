(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.performancemonitor = {}));
})(this, (function (exports) { 'use strict';

  function performancemonitor() {
      return 'Hello from performancemonitor';
  }

  exports.performancemonitor = performancemonitor;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=performancemonitor.js.map
