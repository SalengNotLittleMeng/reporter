(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.requestlist = {}));
})(this, (function (exports) { 'use strict';

  function requestlist() {
      return 'Hello from requestlist';
  }

  exports.requestlist = requestlist;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=requestlist.js.map
