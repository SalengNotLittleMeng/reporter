(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.errorcatch = {}));
})(this, (function (exports) { 'use strict';

  function errorcatch() {
      return "Hello from errorcatch!!";
  }

  exports.errorcatch = errorcatch;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=errorcatch.js.map
