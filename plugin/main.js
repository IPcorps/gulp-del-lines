var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","stream"],e)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=__importDefault(e("stream"));t.default=new o.default.Transform({objectMode:!0,transform(e,t,o){e.contents=Buffer.from(e.contents.toString().replace(/^.*-DEL$/gm,"")),o(null,e)}})}));