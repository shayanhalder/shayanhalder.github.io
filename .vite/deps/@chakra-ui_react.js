import {
  require_react_dom
} from "./chunk-ZIYUGMGG.js";
import {
  AnimatePresence,
  motion,
  require_jsx_runtime,
  useIsPresent,
  usePresence
} from "./chunk-YEHCCVJ3.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  init_emotion_is_prop_valid_esm,
  init_emotion_memoize_esm,
  isPropValid,
  memoize
} from "./chunk-ZPR2NN6K.js";
import {
  __commonJS,
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object2) {
          if (typeof object2 === "object" && object2 !== null) {
            var $$typeof = object2.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object2.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment15 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object2) || typeOf(object2) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object2) {
          return typeOf(object2) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object2) {
          return typeOf(object2) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object2) {
          return typeOf(object2) === REACT_PROVIDER_TYPE;
        }
        function isElement6(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object2) {
          return typeOf(object2) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object2) {
          return typeOf(object2) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object2) {
          return typeOf(object2) === REACT_LAZY_TYPE;
        }
        function isMemo(object2) {
          return typeOf(object2) === REACT_MEMO_TYPE;
        }
        function isPortal(object2) {
          return typeOf(object2) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object2) {
          return typeOf(object2) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object2) {
          return typeOf(object2) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object2) {
          return typeOf(object2) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment15;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement6;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys2 = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys2.length; ++i) {
          var key = keys2[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics2;
  }
});

// node_modules/lodash.mergewith/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.mergewith/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func2, thisArg, args) {
      switch (args.length) {
        case 0:
          return func2.call(thisArg);
        case 1:
          return func2.call(thisArg, args[0]);
        case 2:
          return func2.call(thisArg, args[0], args[1]);
        case 3:
          return func2.call(thisArg, args[0], args[1], args[2]);
      }
      return func2.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func2) {
      return function(value) {
        return func2(value);
      };
    }
    function getValue(object2, key) {
      return object2 == null ? void 0 : object2[key];
    }
    function overArg(func2, transform2) {
      return function(arg) {
        return func2(transform2(arg));
      };
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var objectCtorString = funcToString.call(Object);
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var defineProperty = function() {
      try {
        var func2 = getNative(Object, "defineProperty");
        func2({}, "", {});
        return func2;
      } catch (e) {
      }
    }();
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeMax = Math.max;
    var nativeNow = Date.now;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var baseCreate = /* @__PURE__ */ function() {
      function object2() {
      }
      return function(proto) {
        if (!isObject3(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object2.prototype = proto;
        var result = new object2();
        object2.prototype = void 0;
        return result;
      };
    }();
    function Hash(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length2 = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length2) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size2 = data.size;
      data.set(key, value);
      this.size += data.size == size2 ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack2(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack2.prototype.clear = stackClear;
    Stack2.prototype["delete"] = stackDelete;
    Stack2.prototype.get = stackGet;
    Stack2.prototype.has = stackHas;
    Stack2.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length2)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignMergeValue(object2, key, value) {
      if (value !== void 0 && !eq(object2[key], value) || value === void 0 && !(key in object2)) {
        baseAssignValue(object2, key, value);
      }
    }
    function assignValue(object2, key, value) {
      var objValue = object2[key];
      if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
        baseAssignValue(object2, key, value);
      }
    }
    function assocIndexOf(array, key) {
      var length2 = array.length;
      while (length2--) {
        if (eq(array[length2][0], key)) {
          return length2;
        }
      }
      return -1;
    }
    function baseAssignValue(object2, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object2, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object2[key] = value;
      }
    }
    var baseFor = createBaseFor();
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsNative(value) {
      if (!isObject3(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction5(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeysIn(object2) {
      if (!isObject3(object2)) {
        return nativeKeysIn(object2);
      }
      var isProto = isPrototype(object2), result = [];
      for (var key in object2) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object2, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseMerge(object2, source, srcIndex, customizer, stack) {
      if (object2 === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack2());
        if (isObject3(srcValue)) {
          baseMergeDeep(object2, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object2, key, newValue);
        }
      }, keysIn);
    }
    function baseMergeDeep(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object2, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object2, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray2(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject3(objValue) || isFunction5(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object2, key, newValue);
    }
    function baseRest(func2, start2) {
      return setToString(overRest(func2, start2, identity), func2 + "");
    }
    var baseSetToString = !defineProperty ? identity : function(func2, string2) {
      return defineProperty(func2, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string2),
        "writable": true
      });
    };
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length2 = source.length;
      array || (array = Array(length2));
      while (++index < length2) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object2, customizer) {
      var isNew = !object2;
      object2 || (object2 = {});
      var index = -1, length2 = props.length;
      while (++index < length2) {
        var key = props[index];
        var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object2, key, newValue);
        } else {
          assignValue(object2, key, newValue);
        }
      }
      return object2;
    }
    function createAssigner(assigner) {
      return baseRest(function(object2, sources) {
        var index = -1, length2 = sources.length, customizer = length2 > 1 ? sources[length2 - 1] : void 0, guard2 = length2 > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length2--, customizer) : void 0;
        if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
          customizer = length2 < 3 ? void 0 : customizer;
          length2 = 1;
        }
        object2 = Object(object2);
        while (++index < length2) {
          var source = sources[index];
          if (source) {
            assigner(object2, source, index, customizer);
          }
        }
        return object2;
      });
    }
    function createBaseFor(fromRight) {
      return function(object2, iteratee, keysFunc) {
        var index = -1, iterable = Object(object2), props = keysFunc(object2), length2 = props.length;
        while (length2--) {
          var key = props[fromRight ? length2 : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object2;
      };
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object2, key) {
      var value = getValue(object2, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    function initCloneObject(object2) {
      return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
    }
    function isIndex(value, length2) {
      var type = typeof value;
      length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
      return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
    }
    function isIterateeCall(value, index, object2) {
      if (!isObject3(object2)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type == "string" && index in object2) {
        return eq(object2[index], value);
      }
      return false;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func2) {
      return !!maskSrcKey && maskSrcKey in func2;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object2) {
      var result = [];
      if (object2 != null) {
        for (var key in Object(object2)) {
          result.push(key);
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function overRest(func2, start2, transform2) {
      start2 = nativeMax(start2 === void 0 ? func2.length - 1 : start2, 0);
      return function() {
        var args = arguments, index = -1, length2 = nativeMax(args.length - start2, 0), array = Array(length2);
        while (++index < length2) {
          array[index] = args[start2 + index];
        }
        index = -1;
        var otherArgs = Array(start2 + 1);
        while (++index < start2) {
          otherArgs[index] = args[index];
        }
        otherArgs[start2] = transform2(array);
        return apply(func2, this, otherArgs);
      };
    }
    function safeGet(object2, key) {
      if (key === "constructor" && typeof object2[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object2[key];
    }
    var setToString = shortOut(baseSetToString);
    function shortOut(func2) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func2.apply(void 0, arguments);
      };
    }
    function toSource(func2) {
      if (func2 != null) {
        try {
          return funcToString.call(func2);
        } catch (e) {
        }
        try {
          return func2 + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray2 = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction5(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction5(value) {
      if (!isObject3(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject3(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    function keysIn(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
    }
    var mergeWith6 = createAssigner(function(object2, source, srcIndex, customizer) {
      baseMerge(object2, source, srcIndex, customizer);
    });
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function stubFalse() {
      return false;
    }
    module.exports = mergeWith6;
  }
});

// node_modules/react-fast-compare/index.js
var require_react_fast_compare = __commonJS({
  "node_modules/react-fast-compare/index.js"(exports, module) {
    var hasElementType = typeof Element !== "undefined";
    var hasMap = typeof Map === "function";
    var hasSet = typeof Set === "function";
    var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
    function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length2, i, keys2;
        if (Array.isArray(a)) {
          length2 = a.length;
          if (length2 != b.length) return false;
          for (i = length2; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!equal(i.value[1], b.get(i.value[0]))) return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done)
            if (!b.has(i.value[0])) return false;
          return true;
        }
        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length2 = a.length;
          if (length2 != b.length) return false;
          for (i = length2; i-- !== 0; )
            if (a[i] !== b[i]) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
        keys2 = Object.keys(a);
        length2 = keys2.length;
        if (length2 !== Object.keys(b).length) return false;
        for (i = length2; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys2[i])) return false;
        if (hasElementType && a instanceof Element) return false;
        for (i = length2; i-- !== 0; ) {
          if ((keys2[i] === "_owner" || keys2[i] === "__v" || keys2[i] === "__o") && a.$$typeof) {
            continue;
          }
          if (!equal(a[keys2[i]], b[keys2[i]])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }
    module.exports = function isEqual2(a, b) {
      try {
        return equal(a, b);
      } catch (error2) {
        if ((error2.message || "").match(/stack|recursion/i)) {
          console.warn("react-fast-compare cannot handle circular refs");
          return false;
        }
        throw error2;
      }
    };
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from2;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from2 = Object(arguments[s]);
        for (var key in from2) {
          if (hasOwnProperty.call(from2, key)) {
            to[key] = from2[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from2);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from2, symbols[i])) {
              to[symbols[i]] = from2[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error2;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error2 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error2 = ex;
            }
            if (error2 && !(error2 instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error2 + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error2 instanceof Error && !(error2.message in loggedTypeFailures)) {
              loggedTypeFailures[error2.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error2.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign2 = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement8, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate2) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate2(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate2(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error2 = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error2 instanceof Error) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement8(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createElementTypeTypeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate2(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error2 = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error2 instanceof Error) {
                return error2;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate2(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate2);
      }
      function createNodeChecker() {
        function validate2(props, propName, componentName, location, propFullName) {
          if (!isNode2(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate2(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign2({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate2);
      }
      function isNode2(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode2);
            }
            if (propValue === null || isValidElement8(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode2(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode2(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range2) {
            selection.addRange(range2);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy3(text, options) {
      var debug, message, reselectPrevious, range2, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range2 = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range2.selectNodeContents(mark);
        selection.addRange(range2);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range2);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy3;
  }
});

// node_modules/@emotion/react/dist/emotion-element-7a1343fa.browser.development.esm.js
var React2 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js
var isDevelopment = true;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
  return void 0;
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error('There was a problem inserting the following rule: "' + rule + '"', e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet2;
}();

// node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end2) {
  return value.slice(begin, end2);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end2) {
  return substr(characters, begin, end2);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset2 = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference2 = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset2:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference2 = ruleset(characters2, root, parent, index, offset2, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset2 === 0)
                parse(characters2, root, reference2, reference2, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference2, reference2, rule && append(ruleset(value, reference2, reference2, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference2, reference2, reference2, [""], children, 0, points, children);
                }
        }
        index = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset2, rules, points, type, props, children, length2) {
  var post = offset2 - 1;
  var rule = offset2 === 0 ? rules : [""];
  var size2 = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size2; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k++] = z;
  return node(value, root, parent, offset2 === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}

// node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize2(func2) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func2(arg);
    cache.set(arg, ret);
    return ret;
  };
};

// node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js
init_emotion_memoize_esm();
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment2(element) {
  return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
  return function(element, index, children) {
    if (element.type !== "rule" || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = !!element.parent;
      var commentContainer = isNested ? element.parent.children : (
        // global rule at the root level
        children
      );
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node3 = commentContainer[i];
        if (node3.line < element.line) {
          break;
        }
        if (node3.column < element.column) {
          if (isIgnoringComment(node3)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function(unsafePseudoClass) {
        console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
      });
    }
  };
};
var isImportRule = function isImportRule2(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement2(element) {
  element.type = "";
  element.value = "";
  element["return"] = "";
  element.children = "";
  element.props = "";
};
var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
function prefix2(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
        case 109:
          if (charat(value, length2 + 4) !== 45) break;
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
        case 115:
          return ~indexof(value, "stretch") ? prefix2(replace(value, "stretch", "fill-available"), length2) + value : value;
      }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix2(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function(value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
              })], callback);
            case "::placeholder":
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
              })], callback);
          }
          return "";
        });
    }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node3) {
      var dataEmotionAttribute = node3.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node3);
      node3.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  {
    if (/[^a-z-]/.test(key)) {
      throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    }
  }
  var inserted = {};
  var container2;
  var nodesToHydrate = [];
  {
    container2 = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node3) {
        var attrib = node3.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node3);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [stringify, function(element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          currentSheet.insert(element.value + "{}");
        }
      }
    }];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (serialized.map !== void 0) {
        currentSheet = {
          insert: function insert2(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container: container2,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t2 = arguments[e];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n[r2] = t2[r2]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());

// node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js
init_emotion_memoize_esm();
var isDevelopment2 = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match3, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
{
  contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue3(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    if (String(componentSelector) === "NO_COMPONENT_SELECTOR") {
      throw new Error(noComponentSelectorMessage);
    }
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes3 = interpolation;
      if (keyframes3.anim === 1) {
        cursor = {
          name: keyframes3.name,
          styles: keyframes3.styles,
          next: cursor
        };
        return keyframes3.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next2 = serializedStyles.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles2 = serializedStyles.styles + ";";
        if (serializedStyles.map !== void 0) {
          styles2 += serializedStyles.map;
        }
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(_match, _p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
        }
      }
      break;
  }
  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string2 = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string2 += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (registered != null && registered[asString] !== void 0) {
          string2 += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string2 += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment2) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string2 += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string2 += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string2 += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string2;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
{
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    if (asTemplateStringsArr[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles2 += asTemplateStringsArr[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      if (templateStringsArr[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles2 += templateStringsArr[i];
    }
  }
  var sourceMap;
  {
    styles2 = styles2.replace(sourceMapPattern, function(match4) {
      sourceMap = match4;
      return "";
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match3;
  while ((match3 = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match3[1];
  }
  var name = murmur2(styles2) + identifierName;
  {
    var devStyles = {
      name,
      styles: styles2,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return devStyles;
  }
}

// node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var React = __toESM(require_react());
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect2 || React.useLayoutEffect;

// node_modules/@emotion/react/dist/emotion-element-7a1343fa.browser.development.esm.js
var EmotionCacheContext = React2.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? createCache({
    key: "css"
  }) : null
);
{
  EmotionCacheContext.displayName = "EmotionCacheContext";
}
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func2) {
  return (0, import_react.forwardRef)(function(props, ref) {
    var cache = (0, import_react.useContext)(EmotionCacheContext);
    return func2(props, cache, ref);
  });
};
var ThemeContext = React2.createContext({});
{
  ThemeContext.displayName = "EmotionThemeContext";
}
var getTheme = function getTheme2(outerTheme, theme2) {
  if (typeof theme2 === "function") {
    var mergedTheme = theme2(outerTheme);
    if (mergedTheme == null || typeof mergedTheme !== "object" || Array.isArray(mergedTheme)) {
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    }
    return mergedTheme;
  }
  if (theme2 == null || typeof theme2 !== "object" || Array.isArray(theme2)) {
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  }
  return _extends({}, outerTheme, theme2);
};
var createCacheWithTheme = weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme2) {
    return getTheme(outerTheme, theme2);
  });
});
var ThemeProvider = function ThemeProvider2(props) {
  var theme2 = React2.useContext(ThemeContext);
  if (props.theme !== theme2) {
    theme2 = createCacheWithTheme(theme2)(props.theme);
  }
  return React2.createElement(ThemeContext.Provider, {
    value: theme2
  }, props.children);
};
var hasOwn = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var Insertion = function Insertion2(_ref2) {
  var cache = _ref2.cache, serialized = _ref2.serialized, isStringTag = _ref2.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var Emotion = withEmotionCache(
  /* <any, any> */
  function(props, cache, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, React2.useContext(ThemeContext));
    if (serialized.name.indexOf("-") === -1) {
      var labelFromStack = props[labelPropName];
      if (labelFromStack) {
        serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
      }
    }
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwn.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
        newProps[key] = props[key];
      }
    }
    newProps.className = className;
    if (ref) {
      newProps.ref = ref;
    }
    return React2.createElement(React2.Fragment, null, React2.createElement(Insertion, {
      cache,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), React2.createElement(WrappedComponent, newProps));
  }
);
{
  Emotion.displayName = "EmotionCssPropInternal";
}

// node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js
var React3 = __toESM(require_react());
var import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());
var isDevelopment3 = true;
var pkg = {
  name: "@emotion/react",
  version: "11.13.3",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  exports: {
    ".": {
      types: {
        "import": "./dist/emotion-react.cjs.mjs",
        "default": "./dist/emotion-react.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        worker: {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        browser: {
          module: "./dist/emotion-react.browser.development.esm.js",
          "import": "./dist/emotion-react.browser.development.cjs.mjs",
          "default": "./dist/emotion-react.browser.development.cjs.js"
        },
        module: "./dist/emotion-react.development.esm.js",
        "import": "./dist/emotion-react.development.cjs.mjs",
        "default": "./dist/emotion-react.development.cjs.js"
      },
      "edge-light": {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      worker: {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      workerd: {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      browser: {
        module: "./dist/emotion-react.browser.esm.js",
        "import": "./dist/emotion-react.browser.cjs.mjs",
        "default": "./dist/emotion-react.browser.cjs.js"
      },
      module: "./dist/emotion-react.esm.js",
      "import": "./dist/emotion-react.cjs.mjs",
      "default": "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      types: {
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        worker: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        browser: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
        },
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
      },
      "edge-light": {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      worker: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      workerd: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      browser: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
      },
      module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
      "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      types: {
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        worker: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        browser: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
        },
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
      },
      "edge-light": {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      worker: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      workerd: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      browser: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
      },
      module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
      "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      types: {
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        worker: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        browser: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
        },
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
      },
      "edge-light": {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      worker: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      workerd: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      browser: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
      },
      module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
      "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        "import": "./macro.d.mts",
        "default": "./macro.d.ts"
      },
      "default": "./macro.js"
    }
  },
  imports: {
    "#is-development": {
      development: "./src/conditions/true.js",
      "default": "./src/conditions/false.js"
    },
    "#is-browser": {
      "edge-light": "./src/conditions/false.js",
      workerd: "./src/conditions/false.js",
      worker: "./src/conditions/false.js",
      browser: "./src/conditions/true.js",
      "default": "./src/conditions/is-browser.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.12.0",
    "@emotion/cache": "^11.13.0",
    "@emotion/serialize": "^1.3.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.1.0",
    "@emotion/utils": "^1.4.0",
    "@emotion/weak-memoize": "^0.4.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.13.0",
    "@emotion/css-prettifier": "1.1.4",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.13.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^5.4.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            "import": "./macro.d.mts",
            "default": "./macro.d.ts"
          },
          "default": "./macro.js"
        }
      }
    }
  }
};
var warnedAboutCssPropForGlobal = false;
var Global = withEmotionCache(function(props, cache) {
  if (!warnedAboutCssPropForGlobal && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // I don't really want to add it to the type since it shouldn't be used
  (props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, React3.useContext(ThemeContext));
  var sheetRef = React3.useRef();
  useInsertionEffectWithLayoutFallback(function() {
    var key = cache.key + "-global";
    var sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node3 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node3 !== null) {
      rehydrating = true;
      node3.setAttribute("data-emotion", key);
      sheet.hydrate([node3]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
{
  Global.displayName = "EmotionGlobal";
}
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = "";
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
          }
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css4, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css4(registeredStyles);
}
var Insertion3 = function Insertion4(_ref2) {
  var cache = _ref2.cache, serializedArr = _ref2.serializedArr;
  useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var i = 0; i < serializedArr.length; i++) {
      insertStyles(cache, serializedArr[i], false);
    }
  });
  return null;
};
var ClassNames = withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css4 = function css5() {
    if (hasRendered && isDevelopment3) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized);
    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var cx4 = function cx5() {
    if (hasRendered && isDevelopment3) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css4, classnames(args));
  };
  var content = {
    css: css4,
    cx: cx4,
    theme: React3.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return React3.createElement(React3.Fragment, null, React3.createElement(Insertion3, {
    cache,
    serializedArr
  }), ele);
});
{
  ClassNames.displayName = "EmotionClassNames";
}
{
  isBrowser4 = typeof document !== "undefined";
  isTestEnv = typeof jest !== "undefined" || typeof vi !== "undefined";
  if (isBrowser4 && !isTestEnv) {
    globalContext = // $FlowIgnore
    typeof globalThis !== "undefined" ? globalThis : isBrowser4 ? window : global;
    globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    if (globalContext[globalKey]) {
      console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
    }
    globalContext[globalKey] = true;
  }
}
var isBrowser4;
var isTestEnv;
var globalContext;
var globalKey;

// node_modules/@chakra-ui/css-reset/dist/chunk-B4LBJQ3X.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var css2 = String.raw;
var vhPolyfill = css2`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`;
var CSSPolyfill = () => (0, import_jsx_runtime.jsx)(Global, { styles: vhPolyfill });
var CSSReset = ({ scope = "" }) => (0, import_jsx_runtime.jsx)(
  Global,
  {
    styles: css2`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${scope} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${scope} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${scope} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${scope} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${scope} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${scope} :where(b, strong) {
        font-weight: bold;
      }

      ${scope} small {
        font-size: 80%;
      }

      ${scope} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${scope} sub {
        bottom: -0.25em;
      }

      ${scope} sup {
        top: -0.5em;
      }

      ${scope} img {
        border-style: none;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${scope} :where(button, input) {
        overflow: visible;
      }

      ${scope} :where(button, select) {
        text-transform: none;
      }

      ${scope} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${scope} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${scope} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${scope} progress {
        vertical-align: baseline;
      }

      ${scope} textarea {
        overflow: auto;
      }

      ${scope} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${scope} input[type="number"]::-webkit-inner-spin-button,
      ${scope} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${scope} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${scope} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${scope} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${scope} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${scope} details {
        display: block;
      }

      ${scope} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${scope} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${scope} button {
        background: transparent;
        padding: 0;
      }

      ${scope} fieldset {
        margin: 0;
        padding: 0;
      }

      ${scope} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${scope} textarea {
        resize: vertical;
      }

      ${scope} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${scope} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${scope} table {
        border-collapse: collapse;
      }

      ${scope} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${scope} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${scope} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${scope} select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    `
  }
);

// node_modules/@chakra-ui/react-context/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
function getErrorMessage(hook, provider) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext2(options = {}) {
  const {
    name,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage,
    defaultValue
  } = options;
  const Context = (0, import_react3.createContext)(defaultValue);
  Context.displayName = name;
  function useContext9() {
    var _a8;
    const context = (0, import_react3.useContext)(Context);
    if (!context && strict) {
      const error2 = new Error(
        errorMessage != null ? errorMessage : getErrorMessage(hookName, providerName)
      );
      error2.name = "ContextError";
      (_a8 = Error.captureStackTrace) == null ? void 0 : _a8.call(Error, error2, useContext9);
      throw error2;
    }
    return context;
  }
  return [Context.Provider, useContext9, Context];
}

// node_modules/@chakra-ui/portal/dist/chunk-HK66PB7M.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var [PortalManagerContextProvider, usePortalManager] = createContext2({
  strict: false,
  name: "PortalManagerContext"
});
function PortalManager(props) {
  const { children, zIndex } = props;
  return (0, import_jsx_runtime2.jsx)(PortalManagerContextProvider, { value: { zIndex }, children });
}
PortalManager.displayName = "PortalManager";

// node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
var useSafeLayoutEffect = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react4.useLayoutEffect : import_react4.useEffect;

// node_modules/@chakra-ui/portal/dist/chunk-34PD6CUK.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var [PortalContextProvider, usePortalContext] = createContext2({
  strict: false,
  name: "PortalContext"
});
var PORTAL_CLASSNAME = "chakra-portal";
var PORTAL_SELECTOR = `.chakra-portal`;
var Container = (props) => (0, import_jsx_runtime3.jsx)(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: props.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: props.children
  }
);
var DefaultPortal = (props) => {
  const { appendToParentPortal, children } = props;
  const [tempNode, setTempNode] = (0, import_react5.useState)(null);
  const portal = (0, import_react5.useRef)(null);
  const [, forceUpdate] = (0, import_react5.useState)({});
  (0, import_react5.useEffect)(() => forceUpdate({}), []);
  const parentPortal = usePortalContext();
  const manager = usePortalManager();
  useSafeLayoutEffect(() => {
    if (!tempNode)
      return;
    const doc = tempNode.ownerDocument;
    const host = appendToParentPortal ? parentPortal != null ? parentPortal : doc.body : doc.body;
    if (!host)
      return;
    portal.current = doc.createElement("div");
    portal.current.className = PORTAL_CLASSNAME;
    host.appendChild(portal.current);
    forceUpdate({});
    const portalNode = portal.current;
    return () => {
      if (host.contains(portalNode)) {
        host.removeChild(portalNode);
      }
    };
  }, [tempNode]);
  const _children = (manager == null ? void 0 : manager.zIndex) ? (0, import_jsx_runtime3.jsx)(Container, { zIndex: manager == null ? void 0 : manager.zIndex, children }) : children;
  return portal.current ? (0, import_react_dom.createPortal)(
    (0, import_jsx_runtime3.jsx)(PortalContextProvider, { value: portal.current, children: _children }),
    portal.current
  ) : (0, import_jsx_runtime3.jsx)(
    "span",
    {
      ref: (el) => {
        if (el)
          setTempNode(el);
      }
    }
  );
};
var ContainerPortal = (props) => {
  const { children, containerRef, appendToParentPortal } = props;
  const containerEl = containerRef.current;
  const host = containerEl != null ? containerEl : typeof window !== "undefined" ? document.body : void 0;
  const portal = (0, import_react5.useMemo)(() => {
    const node3 = containerEl == null ? void 0 : containerEl.ownerDocument.createElement("div");
    if (node3)
      node3.className = PORTAL_CLASSNAME;
    return node3;
  }, [containerEl]);
  const [, forceUpdate] = (0, import_react5.useState)({});
  useSafeLayoutEffect(() => forceUpdate({}), []);
  useSafeLayoutEffect(() => {
    if (!portal || !host)
      return;
    host.appendChild(portal);
    return () => {
      host.removeChild(portal);
    };
  }, [portal, host]);
  if (host && portal) {
    return (0, import_react_dom.createPortal)(
      (0, import_jsx_runtime3.jsx)(PortalContextProvider, { value: appendToParentPortal ? portal : null, children }),
      portal
    );
  }
  return null;
};
function Portal(props) {
  const portalProps = {
    appendToParentPortal: true,
    ...props
  };
  const { containerRef, ...rest } = portalProps;
  return containerRef ? (0, import_jsx_runtime3.jsx)(ContainerPortal, { containerRef, ...rest }) : (0, import_jsx_runtime3.jsx)(DefaultPortal, { ...rest });
}
Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;
Portal.displayName = "Portal";

// node_modules/@chakra-ui/system/dist/chunk-UIGT7YZF.mjs
var import_react7 = __toESM(require_react(), 1);
function useTheme2() {
  const theme2 = (0, import_react7.useContext)(
    ThemeContext
  );
  if (!theme2) {
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  }
  return theme2;
}

// node_modules/@chakra-ui/color-mode/dist/chunk-UQDW7KKV.mjs
var import_react8 = __toESM(require_react(), 1);
var ColorModeContext = (0, import_react8.createContext)({});
ColorModeContext.displayName = "ColorModeContext";
function useColorMode() {
  const context = (0, import_react8.useContext)(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}
function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === "dark" ? dark : light;
}

// node_modules/@chakra-ui/color-mode/dist/chunk-X7ZBZ4KW.mjs
var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function getColorModeUtils(options = {}) {
  const { preventTransition = true } = options;
  const utils = {
    setDataset: (value) => {
      const cleanup = preventTransition ? utils.preventTransition() : void 0;
      document.documentElement.dataset.theme = value;
      document.documentElement.style.colorScheme = value;
      cleanup == null ? void 0 : cleanup();
    },
    setClassName(dark) {
      document.body.classList.add(dark ? classNames.dark : classNames.light);
      document.body.classList.remove(dark ? classNames.light : classNames.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(fallback) {
      var _a8;
      const dark = (_a8 = utils.query().matches) != null ? _a8 : fallback === "dark";
      return dark ? "dark" : "light";
    },
    addListener(fn2) {
      const mql = utils.query();
      const listener = (e) => {
        fn2(e.matches ? "dark" : "light");
      };
      if (typeof mql.addListener === "function")
        mql.addListener(listener);
      else
        mql.addEventListener("change", listener);
      return () => {
        if (typeof mql.removeListener === "function")
          mql.removeListener(listener);
        else
          mql.removeEventListener("change", listener);
      };
    },
    preventTransition() {
      const css4 = document.createElement("style");
      css4.appendChild(
        document.createTextNode(
          `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
        )
      );
      document.head.appendChild(css4);
      return () => {
        ;
        (() => window.getComputedStyle(document.body))();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(css4);
          });
        });
      };
    }
  };
  return utils;
}

// node_modules/@chakra-ui/color-mode/dist/chunk-44OWBZ77.mjs
var STORAGE_KEY = "chakra-ui-color-mode";
function createLocalStorageManager(key) {
  return {
    ssr: false,
    type: "localStorage",
    get(init) {
      if (!(globalThis == null ? void 0 : globalThis.document))
        return init;
      let value;
      try {
        value = localStorage.getItem(key) || init;
      } catch (e) {
      }
      return value || init;
    },
    set(value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
      }
    }
  };
}
var localStorageManager = createLocalStorageManager(STORAGE_KEY);
function parseCookie(cookie, key) {
  const match3 = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match3 == null ? void 0 : match3[2];
}
function createCookieStorageManager(key, cookie) {
  return {
    ssr: !!cookie,
    type: "cookie",
    get(init) {
      if (cookie)
        return parseCookie(cookie, key);
      if (!(globalThis == null ? void 0 : globalThis.document))
        return init;
      return parseCookie(document.cookie, key) || init;
    },
    set(value) {
      document.cookie = `${key}=${value}; max-age=31536000; path=/`;
    }
  };
}
var cookieStorageManager = createCookieStorageManager(STORAGE_KEY);
var cookieStorageManagerSSR = (cookie) => createCookieStorageManager(STORAGE_KEY, cookie);

// node_modules/@chakra-ui/color-mode/dist/chunk-AMBGAKG2.mjs
var import_react9 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var noop = () => {
};
function getTheme3(manager, fallback) {
  return manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback;
}
function ColorModeProvider(props) {
  const {
    value,
    children,
    options: {
      useSystemColorMode,
      initialColorMode,
      disableTransitionOnChange
    } = {},
    colorModeManager = localStorageManager
  } = props;
  const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  const [colorMode, rawSetColorMode] = (0, import_react9.useState)(
    () => getTheme3(colorModeManager, defaultColorMode)
  );
  const [resolvedColorMode, setResolvedColorMode] = (0, import_react9.useState)(
    () => getTheme3(colorModeManager)
  );
  const { getSystemTheme, setClassName, setDataset, addListener } = (0, import_react9.useMemo)(
    () => getColorModeUtils({ preventTransition: disableTransitionOnChange }),
    [disableTransitionOnChange]
  );
  const resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
  const setColorMode = (0, import_react9.useCallback)(
    (value2) => {
      const resolved = value2 === "system" ? getSystemTheme() : value2;
      rawSetColorMode(resolved);
      setClassName(resolved === "dark");
      setDataset(resolved);
      colorModeManager.set(resolved);
    },
    [colorModeManager, getSystemTheme, setClassName, setDataset]
  );
  useSafeLayoutEffect(() => {
    if (initialColorMode === "system") {
      setResolvedColorMode(getSystemTheme());
    }
  }, []);
  (0, import_react9.useEffect)(() => {
    const managerValue = colorModeManager.get();
    if (managerValue) {
      setColorMode(managerValue);
      return;
    }
    if (initialColorMode === "system") {
      setColorMode("system");
      return;
    }
    setColorMode(defaultColorMode);
  }, [colorModeManager, defaultColorMode, initialColorMode, setColorMode]);
  const toggleColorMode = (0, import_react9.useCallback)(() => {
    setColorMode(resolvedValue === "dark" ? "light" : "dark");
  }, [resolvedValue, setColorMode]);
  (0, import_react9.useEffect)(() => {
    if (!useSystemColorMode)
      return;
    return addListener(setColorMode);
  }, [useSystemColorMode, addListener, setColorMode]);
  const context = (0, import_react9.useMemo)(
    () => ({
      colorMode: value != null ? value : resolvedValue,
      toggleColorMode: value ? noop : toggleColorMode,
      setColorMode: value ? noop : setColorMode,
      forced: value !== void 0
    }),
    [resolvedValue, toggleColorMode, setColorMode, value]
  );
  return (0, import_jsx_runtime4.jsx)(ColorModeContext.Provider, { value: context, children });
}
ColorModeProvider.displayName = "ColorModeProvider";
function DarkMode(props) {
  const context = (0, import_react9.useMemo)(
    () => ({
      colorMode: "dark",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return (0, import_jsx_runtime4.jsx)(ColorModeContext.Provider, { value: context, ...props });
}
DarkMode.displayName = "DarkMode";
function LightMode(props) {
  const context = (0, import_react9.useMemo)(
    () => ({
      colorMode: "light",
      toggleColorMode: noop,
      setColorMode: noop,
      forced: true
    }),
    []
  );
  return (0, import_jsx_runtime4.jsx)(ColorModeContext.Provider, { value: context, ...props });
}
LightMode.displayName = "LightMode";

// node_modules/@chakra-ui/color-mode/dist/chunk-WP4V2BSL.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var VALID_VALUES = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function normalize(initialColorMode) {
  let value = initialColorMode;
  if (!VALID_VALUES.has(value))
    value = "light";
  return value;
}
function getScriptSrc(props = {}) {
  const {
    initialColorMode = "light",
    type = "localStorage",
    storageKey: key = "chakra-ui-color-mode"
  } = props;
  const init = normalize(initialColorMode);
  const isCookie = type === "cookie";
  const cookieScript = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${init}",r="${key}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `;
  const localStorageScript = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${init}",e="${key}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  const fn2 = isCookie ? cookieScript : localStorageScript;
  return `!${fn2}`.trim();
}
function ColorModeScript(props = {}) {
  const { nonce } = props;
  return (0, import_jsx_runtime5.jsx)(
    "script",
    {
      id: "chakra-script",
      nonce,
      dangerouslySetInnerHTML: { __html: getScriptSrc(props) }
    }
  );
}

// node_modules/@chakra-ui/system/dist/chunk-7FWEOSAE.mjs
function useChakra() {
  const colorModeResult = useColorMode();
  const theme2 = useTheme2();
  return { ...colorModeResult, theme: theme2 };
}
function getBreakpointValue(theme2, value, fallback) {
  var _a8, _b5;
  if (value == null)
    return value;
  const getValue = (val) => {
    var _a24, _b22;
    return (_b22 = (_a24 = theme2.__breakpoints) == null ? void 0 : _a24.asArray) == null ? void 0 : _b22[val];
  };
  return (_b5 = (_a8 = getValue(value)) != null ? _a8 : getValue(fallback)) != null ? _b5 : fallback;
}
function getTokenValue(theme2, value, fallback) {
  var _a8, _b5;
  if (value == null)
    return value;
  const getValue = (val) => {
    var _a24, _b22;
    return (_b22 = (_a24 = theme2.__cssMap) == null ? void 0 : _a24[val]) == null ? void 0 : _b22.value;
  };
  return (_b5 = (_a8 = getValue(value)) != null ? _a8 : getValue(fallback)) != null ? _b5 : fallback;
}
function useToken(scale2, token2, fallback) {
  const theme2 = useTheme2();
  return getToken(scale2, token2, fallback)(theme2);
}
function getToken(scale2, token2, fallback) {
  const _token = Array.isArray(token2) ? token2 : [token2];
  const _fallback = Array.isArray(fallback) ? fallback : [fallback];
  return (theme2) => {
    const fallbackArr = _fallback.filter(Boolean);
    const result = _token.map((token22, index) => {
      var _a8, _b5;
      if (scale2 === "breakpoints") {
        return getBreakpointValue(theme2, token22, (_a8 = fallbackArr[index]) != null ? _a8 : token22);
      }
      const path = `${scale2}.${token22}`;
      return getTokenValue(theme2, path, (_b5 = fallbackArr[index]) != null ? _b5 : token22);
    });
    return Array.isArray(token2) ? result : result[0];
  };
}

// node_modules/@chakra-ui/shared-utils/dist/index.mjs
var cx = (...classNames2) => classNames2.filter(Boolean).join(" ");
function isDev() {
  return true;
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !Array.isArray(value);
}
var warn = (options) => {
  const { condition, message } = options;
  if (condition && isDev()) {
    console.warn(message);
  }
};
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
var isFunction = (value) => typeof value === "function";
var dataAttr = (condition) => condition ? "" : void 0;
var ariaAttr = (condition) => condition ? true : void 0;
function callAllHandlers(...fns) {
  return function func2(event) {
    fns.some((fn2) => {
      fn2 == null ? void 0 : fn2(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}
function callAll(...fns) {
  return function mergedFn(arg) {
    fns.forEach((fn2) => {
      fn2 == null ? void 0 : fn2(arg);
    });
  };
}

// node_modules/@chakra-ui/styled-system/dist/index.mjs
var import_lodash = __toESM(require_lodash(), 1);
var import_lodash2 = __toESM(require_lodash(), 1);
var import_lodash3 = __toESM(require_lodash(), 1);
var import_lodash4 = __toESM(require_lodash(), 1);
var isImportant = (value) => /!(important)?$/.test(value);
var withoutImportant = (value) => typeof value === "string" ? value.replace(/!(important)?$/, "").trim() : value;
var tokenToCSSVar = (scale2, value) => (theme2) => {
  const valueStr = String(value);
  const important = isImportant(valueStr);
  const valueWithoutImportant = withoutImportant(valueStr);
  const key = scale2 ? `${scale2}.${valueWithoutImportant}` : valueWithoutImportant;
  let transformed = isObject(theme2.__cssMap) && key in theme2.__cssMap ? theme2.__cssMap[key].varRef : value;
  transformed = withoutImportant(transformed);
  return important ? `${transformed} !important` : transformed;
};
function createTransform(options) {
  const { scale: scale2, transform: transform2, compose: compose2 } = options;
  const fn2 = (value, theme2) => {
    var _a8;
    const _value = tokenToCSSVar(scale2, value)(theme2);
    let result = (_a8 = transform2 == null ? void 0 : transform2(_value, theme2)) != null ? _a8 : _value;
    if (compose2) {
      result = compose2(result, theme2);
    }
    return result;
  };
  return fn2;
}
var pipe = (...fns) => (v) => fns.reduce((a, b) => b(a), v);
function toConfig(scale2, transform2) {
  return (property) => {
    const result = { property, scale: scale2 };
    result.transform = createTransform({
      scale: scale2,
      transform: transform2
    });
    return result;
  };
}
var getRtl = ({ rtl, ltr }) => (theme2) => theme2.direction === "rtl" ? rtl : ltr;
function logical(options) {
  const { property, scale: scale2, transform: transform2 } = options;
  return {
    scale: scale2,
    property: getRtl(property),
    transform: scale2 ? createTransform({
      scale: scale2,
      compose: transform2
    }) : transform2
  };
}
var transformTemplate = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function getTransformTemplate() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...transformTemplate
  ].join(" ");
}
function getTransformGpuTemplate() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...transformTemplate
  ].join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": `var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)`,
    "--chakra-ring-shadow": `var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)`,
    "--chakra-ring-width": value,
    boxShadow: [
      `var(--chakra-ring-offset-shadow)`,
      `var(--chakra-ring-shadow)`,
      `var(--chakra-shadow, 0 0 #0000)`
    ].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]);
var trimSpace = (str) => str.trim();
function parseGradient(value, theme2) {
  if (value == null || globalSet.has(value))
    return value;
  const prevent = isCSSFunction(value) || globalSet.has(value);
  if (!prevent)
    return `url('${value}')`;
  const regex = /(^[a-z-A-Z]+)\((.*)\)/g;
  const results = regex.exec(value);
  const type = results == null ? void 0 : results[1];
  const values = results == null ? void 0 : results[2];
  if (!type || !values)
    return value;
  const _type = type.includes("-gradient") ? type : `${type}-gradient`;
  const [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  const direction2 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction2);
  const _values = stops.map((stop) => {
    if (valueSet.has(stop))
      return stop;
    const firstStop = stop.indexOf(" ");
    const [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];
    const _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
    const key = `colors.${_color}`;
    const color2 = key in theme2.__cssMap ? theme2.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [
      color2,
      ...Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]
    ].join(" ") : color2;
  });
  return `${_type}(${_values.join(", ")})`;
}
var isCSSFunction = (value) => {
  return typeof value === "string" && value.includes("(") && value.includes(")");
};
var gradientTransform = (value, theme2) => parseGradient(value, theme2 != null ? theme2 : {});
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
var analyzeCSSValue = (value) => {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
};
var wrap = (str) => (value) => `${str}(${value})`;
var transformFunctions = {
  filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip(value) {
    return value === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: value };
  },
  transform(value) {
    if (value === "auto")
      return getTransformTemplate();
    if (value === "auto-gpu")
      return getTransformGpuTemplate();
    return value;
  },
  vh(value) {
    return value === "$100vh" ? "var(--chakra-vh)" : value;
  },
  px(value) {
    if (value == null)
      return value;
    const { unitless } = analyzeCSSValue(value);
    return unitless || typeof value === "number" ? `${value}px` : value;
  },
  fraction(value) {
    return !(typeof value === "number") || value > 1 ? value : `${value * 100}%`;
  },
  float(value, theme2) {
    const map = { left: "right", right: "left" };
    return theme2.direction === "rtl" ? map[value] : value;
  },
  degree(value) {
    if (isCssVar(value) || value == null)
      return value;
    const unitless = typeof value === "string" && !value.endsWith("deg");
    return typeof value === "number" || unitless ? `${value}deg` : value;
  },
  gradient: gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: (value) => wrap("hue-rotate")(transformFunctions.degree(value)),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage(value) {
    if (value == null)
      return value;
    const prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? `url(${value})` : value;
  },
  outline(value) {
    const isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: value };
  },
  flexDirection(value) {
    var _a8;
    const { space: space2, divide: divide22 } = (_a8 = flexDirectionTemplate[value]) != null ? _a8 : {};
    const result = { flexDirection: value };
    if (space2)
      result[space2] = 1;
    if (divide22)
      result[divide22] = 1;
    return result;
  }
};
var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  gradients: toConfig("gradients", transformFunctions.gradient),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  spaceT: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  degreeT(property) {
    return { property, transform: transformFunctions.degree };
  },
  prop(property, scale2, transform2) {
    return {
      property,
      scale: scale2,
      ...scale2 && {
        transform: createTransform({ scale: scale2, transform: transform2 })
      }
    };
  },
  propT(property, transform2) {
    return { property, transform: transform2 };
  },
  sizes: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.px)),
  sizesT: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.fraction)),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};
var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.gradients("backgroundImage"),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transformFunctions.bgClip },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.gradients("backgroundImage"),
  bgClip: { transform: transformFunctions.bgClip }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});
var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke")
};
var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});
var filter = {
  filter: { transform: transformFunctions.filter },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.propT("--chakra-hue-rotate", transformFunctions.hueRotate),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: { transform: transformFunctions.backdropFilter },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT(
    "--chakra-backdrop-brightness",
    transformFunctions.brightness
  ),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t.propT(
    "--chakra-backdrop-hue-rotate",
    transformFunctions.hueRotate
  ),
  backdropInvert: t.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: { transform: transformFunctions.flexDirection },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t.space("gap"),
  rowGap: t.space("rowGap"),
  columnGap: t.space("columnGap")
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});
var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: { transform: transformFunctions.outline },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};
var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  aspectRatio: true,
  hideFrom: {
    scale: "breakpoints",
    transform: (value, theme2) => {
      var _a8, _b5, _c3;
      const breakpoint = (_c3 = (_b5 = (_a8 = theme2.__breakpoints) == null ? void 0 : _a8.get(value)) == null ? void 0 : _b5.minW) != null ? _c3 : value;
      const mq = `@media screen and (min-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (value, theme2) => {
      var _a8, _b5, _c3;
      const breakpoint = (_c3 = (_b5 = (_a8 = theme2.__breakpoints) == null ? void 0 : _a8.get(value)) == null ? void 0 : _b5._minW) != null ? _c3 : value;
      const mq = `@media screen and (max-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    }
  },
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: t.propT("float", transformFunctions.float),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage")
};
function get(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize2 = (fn2) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn2(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn2(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize2(get);
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var getWithPriority = (theme2, key, styles2) => {
  const result = {};
  const obj = memoizedGet(theme2, key, {});
  for (const prop in obj) {
    const isInStyles = prop in styles2 && styles2[prop] != null;
    if (!isInStyles)
      result[prop] = obj[prop];
  }
  return result;
};
var others = {
  srOnly: {
    transform(value) {
      if (value === true)
        return srOnly;
      if (value === "focusable")
        return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority(theme2, `layerStyles.${value}`, styles2)
  },
  textStyle: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority(theme2, `textStyles.${value}`, styles2)
  },
  apply: {
    processResult: true,
    transform: (value, theme2, styles2) => getWithPriority(theme2, value, styles2)
  }
};
var position2 = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT("inset"),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(position2, {
  insetStart: position2.insetInlineStart,
  insetEnd: position2.insetInlineEnd
});
var ring = {
  ring: { transform: transformFunctions.ring },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};
var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: { property: "textDecoration" },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow")
};
var transform = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate")
};
var transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
};
var typography = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  textIndent: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  isTruncated: {
    transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
};
var scroll = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  // scroll margin
  scrollMargin: t.spaceT("scrollMargin"),
  scrollMarginTop: t.spaceT("scrollMarginTop"),
  scrollMarginBottom: t.spaceT("scrollMarginBottom"),
  scrollMarginLeft: t.spaceT("scrollMarginLeft"),
  scrollMarginRight: t.spaceT("scrollMarginRight"),
  scrollMarginX: t.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: t.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: t.spaceT("scrollPadding"),
  scrollPaddingTop: t.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: t.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: t.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: t.spaceT("scrollPaddingRight"),
  scrollPaddingX: t.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: t.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression = (operator, ...operands) => operands.map(resolveReference).join(` ${operator} `).replace(/calc/g, "");
var add = (...operands) => `calc(${toExpression("+", ...operands)})`;
var subtract = (...operands) => `calc(${toExpression("-", ...operands)})`;
var multiply = (...operands) => `calc(${toExpression("*", ...operands)})`;
var divide = (...operands) => `calc(${toExpression("/", ...operands)})`;
var negate = (x) => {
  const value = resolveReference(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply(value, -1);
};
var calc = Object.assign(
  (x) => ({
    add: (...operands) => calc(add(x, ...operands)),
    subtract: (...operands) => calc(subtract(x, ...operands)),
    multiply: (...operands) => calc(multiply(x, ...operands)),
    divide: (...operands) => calc(divide(x, ...operands)),
    negate: () => calc(negate(x)),
    toString: () => x.toString()
  }),
  {
    add,
    subtract,
    multiply,
    divide,
    negate
  }
);
function replaceWhiteSpace(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  const valueStr = replaceWhiteSpace(value.toString());
  return escapeSymbol(escapeDot(valueStr));
}
function escapeDot(value) {
  if (value.includes("\\."))
    return value;
  const isDecimal2 = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal2 ? value.replace(".", `\\.`) : value;
}
function escapeSymbol(value) {
  return value.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function addPrefix(value, prefix4 = "") {
  return [prefix4, value].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return `var(${name}${fallback ? `, ${fallback}` : ""})`;
}
function toVarDefinition(value, prefix4 = "") {
  return escape(`--${addPrefix(value, prefix4)}`);
}
function cssVar(name, fallback, cssVarPrefix) {
  const cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}
function defineCssVars(scope, keys2) {
  const vars2 = {};
  for (const key of keys2) {
    if (Array.isArray(key)) {
      const [name, fallback] = key;
      vars2[name] = cssVar(`${scope}-${name}`, fallback);
      continue;
    }
    vars2[key] = cssVar(`${scope}-${key}`);
  }
  return vars2;
}
function getLastItem(array) {
  const length2 = array == null ? 0 : array.length;
  return length2 ? array[length2 - 1] : void 0;
}
function analyzeCSSValue2(value) {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
}
function px(value) {
  if (value == null)
    return value;
  const { unitless } = analyzeCSSValue2(value);
  return unitless || typeof value === "number" ? `${value}px` : value;
}
var sortByBreakpointValue = (a, b) => parseInt(a[1], 10) > parseInt(b[1], 10) ? 1 : -1;
var sortBps = (breakpoints4) => Object.fromEntries(Object.entries(breakpoints4).sort(sortByBreakpointValue));
function normalize2(breakpoints4) {
  const sorted = sortBps(breakpoints4);
  return Object.assign(Object.values(sorted), sorted);
}
function keys(breakpoints4) {
  const value = Object.keys(sortBps(breakpoints4));
  return new Set(value);
}
function subtract2(value) {
  var _a8;
  if (!value)
    return value;
  value = (_a8 = px(value)) != null ? _a8 : value;
  const OFFSET = -0.02;
  return typeof value === "number" ? `${value + OFFSET}` : value.replace(/(\d+\.?\d*)/u, (m) => `${parseFloat(m) + OFFSET}`);
}
function toMediaQueryString(min2, max2) {
  const query = ["@media screen"];
  if (min2)
    query.push("and", `(min-width: ${px(min2)})`);
  if (max2)
    query.push("and", `(max-width: ${px(max2)})`);
  return query.join(" ");
}
function analyzeBreakpoints(breakpoints4) {
  var _a8;
  if (!breakpoints4)
    return null;
  breakpoints4.base = (_a8 = breakpoints4.base) != null ? _a8 : "0px";
  const normalized = normalize2(breakpoints4);
  const queries = Object.entries(breakpoints4).sort(sortByBreakpointValue).map(([breakpoint, minW], index, entry) => {
    var _a24;
    let [, maxW] = (_a24 = entry[index + 1]) != null ? _a24 : [];
    maxW = parseFloat(maxW) > 0 ? subtract2(maxW) : void 0;
    return {
      _minW: subtract2(minW),
      breakpoint,
      minW,
      maxW,
      maxWQuery: toMediaQueryString(null, maxW),
      minWQuery: toMediaQueryString(minW),
      minMaxQuery: toMediaQueryString(minW, maxW)
    };
  });
  const _keys = keys(breakpoints4);
  const _keysArr = Array.from(_keys.values());
  return {
    keys: _keys,
    normalized,
    isResponsive(test) {
      const keys2 = Object.keys(test);
      return keys2.length > 0 && keys2.every((key) => _keys.has(key));
    },
    asObject: sortBps(breakpoints4),
    asArray: normalize2(breakpoints4),
    details: queries,
    get(key) {
      return queries.find((q) => q.breakpoint === key);
    },
    media: [
      null,
      ...normalized.map((minW) => toMediaQueryString(minW)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(test) {
      if (!isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }
      const result = _keysArr.map((bp) => {
        var _a24;
        return (_a24 = test[bp]) != null ? _a24 : null;
      });
      while (getLastItem(result) === null) {
        result.pop();
      }
      return result;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }
      return test.reduce((acc, value, index) => {
        const key = _keysArr[index];
        if (key != null && value != null)
          acc[key] = value;
        return acc;
      }, {});
    }
  };
}
var state = {
  hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
  focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
  focusVisible: (str, post) => `${str}:focus-visible ${post}`,
  focusWithin: (str, post) => `${str}:focus-within ${post}`,
  active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
  disabled: (str, post) => `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
  invalid: (str, post) => `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
  checked: (str, post) => `${str}:checked ${post}, ${str}[data-checked] ${post}`,
  indeterminate: (str, post) => `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
  readOnly: (str, post) => `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
  expanded: (str, post) => `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
  placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`
};
var toGroup = (fn2) => merge2((v) => fn2(v, "&"), "[role=group]", "[data-group]", ".group");
var toPeer = (fn2) => merge2((v) => fn2(v, "~ &"), "[data-peer]", ".peer");
var merge2 = (fn2, ...selectors) => selectors.map(fn2).join(", ");
var pseudoSelectors = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: toGroup(state.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: toPeer(state.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: toGroup(state.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: toPeer(state.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: toGroup(state.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: toPeer(state.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: toGroup(state.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: toPeer(state.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: toGroup(state.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: toPeer(state.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: toGroup(state.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: toPeer(state.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: toGroup(state.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: toPeer(state.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: toGroup(state.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: toPeer(state.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: toPeer(state.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
};
var pseudoPropNames = Object.keys(
  pseudoSelectors
);
function tokenToCssVar(token2, prefix4) {
  return cssVar(String(token2).replace(/\./g, "-"), void 0, prefix4);
}
function createThemeVars(flatTokens, options) {
  let cssVars2 = {};
  const cssMap = {};
  for (const [token2, tokenValue] of Object.entries(flatTokens)) {
    const { isSemantic, value } = tokenValue;
    const { variable, reference: reference2 } = tokenToCssVar(token2, options == null ? void 0 : options.cssVarPrefix);
    if (!isSemantic) {
      if (token2.startsWith("space")) {
        const keys2 = token2.split(".");
        const [firstKey, ...referenceKeys] = keys2;
        const negativeLookupKey = `${firstKey}.-${referenceKeys.join(".")}`;
        const negativeValue = calc.negate(value);
        const negatedReference = calc.negate(reference2);
        cssMap[negativeLookupKey] = {
          value: negativeValue,
          var: variable,
          varRef: negatedReference
        };
      }
      cssVars2[variable] = value;
      cssMap[token2] = {
        value,
        var: variable,
        varRef: reference2
      };
      continue;
    }
    const lookupToken = (maybeToken) => {
      const scale2 = String(token2).split(".")[0];
      const withScale = [scale2, maybeToken].join(".");
      const resolvedTokenValue = flatTokens[withScale];
      if (!resolvedTokenValue)
        return maybeToken;
      const { reference: reference22 } = tokenToCssVar(withScale, options == null ? void 0 : options.cssVarPrefix);
      return reference22;
    };
    const normalizedValue = isObject(value) ? value : { default: value };
    cssVars2 = (0, import_lodash.default)(
      cssVars2,
      Object.entries(normalizedValue).reduce(
        (acc, [conditionAlias, conditionValue]) => {
          var _a8, _b5;
          if (!conditionValue)
            return acc;
          const tokenReference = lookupToken(`${conditionValue}`);
          if (conditionAlias === "default") {
            acc[variable] = tokenReference;
            return acc;
          }
          const conditionSelector = (_b5 = (_a8 = pseudoSelectors) == null ? void 0 : _a8[conditionAlias]) != null ? _b5 : conditionAlias;
          acc[conditionSelector] = { [variable]: tokenReference };
          return acc;
        },
        {}
      )
    );
    cssMap[token2] = {
      value: reference2,
      var: variable,
      varRef: reference2
    };
  }
  return {
    cssVars: cssVars2,
    cssMap
  };
}
function omit(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
function pick(object2, keysToPick) {
  const result = {};
  for (const key of keysToPick) {
    if (key in object2) {
      result[key] = object2[key];
    }
  }
  return result;
}
function isObject5(value) {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
function walkObject(target, predicate, options = {}) {
  const { stop, getKey } = options;
  function inner(value, path = []) {
    var _a8;
    if (isObject5(value) || Array.isArray(value)) {
      const result = {};
      for (const [prop, child] of Object.entries(value)) {
        const key = (_a8 = getKey == null ? void 0 : getKey(prop)) != null ? _a8 : prop;
        const childPath = [...path, key];
        if (stop == null ? void 0 : stop(value, childPath)) {
          return predicate(value, path);
        }
        result[key] = inner(child, childPath);
      }
      return result;
    }
    return predicate(value, path);
  }
  return inner(target);
}
var tokens = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function extractTokens(theme2) {
  const _tokens = tokens;
  return pick(theme2, _tokens);
}
function extractSemanticTokens(theme2) {
  return theme2.semanticTokens;
}
function omitVars(rawTheme) {
  const { __cssMap, __cssVars, __breakpoints, ...cleanTheme } = rawTheme;
  return cleanTheme;
}
var isSemanticCondition = (key) => pseudoPropNames.includes(key) || "default" === key;
function flattenTokens({
  tokens: tokens2,
  semanticTokens: semanticTokens2
}) {
  const result = {};
  walkObject(tokens2, (value, path) => {
    if (value == null)
      return;
    result[path.join(".")] = { isSemantic: false, value };
  });
  walkObject(
    semanticTokens2,
    (value, path) => {
      if (value == null)
        return;
      result[path.join(".")] = { isSemantic: true, value };
    },
    {
      stop: (value) => Object.keys(value).every(isSemanticCondition)
    }
  );
  return result;
}
function toCSSVar(rawTheme) {
  var _a8;
  const theme2 = omitVars(rawTheme);
  const tokens2 = extractTokens(theme2);
  const semanticTokens2 = extractSemanticTokens(theme2);
  const flatTokens = flattenTokens({ tokens: tokens2, semanticTokens: semanticTokens2 });
  const cssVarPrefix = (_a8 = theme2.config) == null ? void 0 : _a8.cssVarPrefix;
  const {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: cssVars2
  } = createThemeVars(flatTokens, { cssVarPrefix });
  const defaultCssVars = {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme2, {
    __cssVars: { ...defaultCssVars, ...cssVars2 },
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme2.breakpoints)
  });
  return theme2;
}
var systemProps = (0, import_lodash3.default)(
  {},
  background,
  border,
  color,
  flexbox,
  layout,
  filter,
  ring,
  interactivity,
  grid,
  others,
  position2,
  effect,
  space,
  scroll,
  typography,
  textDecoration,
  transform,
  list,
  transition
);
var layoutSystem = Object.assign({}, space, layout, flexbox, grid, position2);
var layoutPropNames = Object.keys(
  layoutSystem
);
var propNames = [...Object.keys(systemProps), ...pseudoPropNames];
var styleProps = { ...systemProps, ...pseudoSelectors };
var isStyleProp = (prop) => prop in styleProps;
var expandResponsive = (styles2) => (theme2) => {
  if (!theme2.__breakpoints)
    return styles2;
  const { isResponsive, toArrayValue, media: medias } = theme2.__breakpoints;
  const computedStyles = {};
  for (const key in styles2) {
    let value = runIfFn(styles2[key], theme2);
    if (value == null)
      continue;
    value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
    if (!Array.isArray(value)) {
      computedStyles[key] = value;
      continue;
    }
    const queries = value.slice(0, medias.length).length;
    for (let index = 0; index < queries; index += 1) {
      const media = medias == null ? void 0 : medias[index];
      if (!media) {
        computedStyles[key] = value[index];
        continue;
      }
      computedStyles[media] = computedStyles[media] || {};
      if (value[index] == null) {
        continue;
      }
      computedStyles[media][key] = value[index];
    }
  }
  return computedStyles;
};
function splitByComma(value) {
  const chunks = [];
  let chunk2 = "";
  let inParens = false;
  for (let i = 0; i < value.length; i++) {
    const char2 = value[i];
    if (char2 === "(") {
      inParens = true;
      chunk2 += char2;
    } else if (char2 === ")") {
      inParens = false;
      chunk2 += char2;
    } else if (char2 === "," && !inParens) {
      chunks.push(chunk2);
      chunk2 = "";
    } else {
      chunk2 += char2;
    }
  }
  chunk2 = chunk2.trim();
  if (chunk2) {
    chunks.push(chunk2);
  }
  return chunks;
}
function isCssVar2(value) {
  return /^var\(--.+\)$/.test(value);
}
var isCSSVariableTokenValue = (key, value) => key.startsWith("--") && typeof value === "string" && !isCssVar2(value);
var resolveTokenValue = (theme2, value) => {
  var _a8, _b5;
  if (value == null)
    return value;
  const getVar = (val) => {
    var _a24, _b22;
    return (_b22 = (_a24 = theme2.__cssMap) == null ? void 0 : _a24[val]) == null ? void 0 : _b22.varRef;
  };
  const getValue = (val) => {
    var _a24;
    return (_a24 = getVar(val)) != null ? _a24 : val;
  };
  const [tokenValue, fallbackValue] = splitByComma(value);
  value = (_b5 = (_a8 = getVar(tokenValue)) != null ? _a8 : getValue(fallbackValue)) != null ? _b5 : getValue(value);
  return value;
};
function getCss(options) {
  const { configs = {}, pseudos = {}, theme: theme2 } = options;
  const css22 = (stylesOrFn, nested = false) => {
    var _a8, _b5, _c3;
    const _styles = runIfFn(stylesOrFn, theme2);
    const styles2 = expandResponsive(_styles)(theme2);
    let computedStyles = {};
    for (let key in styles2) {
      const valueOrFn = styles2[key];
      let value = runIfFn(valueOrFn, theme2);
      if (key in pseudos) {
        key = pseudos[key];
      }
      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme2, value);
      }
      let config2 = configs[key];
      if (config2 === true) {
        config2 = { property: key };
      }
      if (isObject(value)) {
        computedStyles[key] = (_a8 = computedStyles[key]) != null ? _a8 : {};
        computedStyles[key] = (0, import_lodash2.default)(
          {},
          computedStyles[key],
          css22(value, true)
        );
        continue;
      }
      let rawValue = (_c3 = (_b5 = config2 == null ? void 0 : config2.transform) == null ? void 0 : _b5.call(config2, value, theme2, _styles)) != null ? _c3 : value;
      rawValue = (config2 == null ? void 0 : config2.processResult) ? css22(rawValue, true) : rawValue;
      const configProperty = runIfFn(config2 == null ? void 0 : config2.property, theme2);
      if (!nested && (config2 == null ? void 0 : config2.static)) {
        const staticStyles = runIfFn(config2.static, theme2);
        computedStyles = (0, import_lodash2.default)({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (const property of configProperty) {
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = (0, import_lodash2.default)({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = (0, import_lodash2.default)({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css22;
}
var css3 = (styles2) => (theme2) => {
  const cssFn = getCss({
    theme: theme2,
    pseudos: pseudoSelectors,
    configs: systemProps
  });
  return cssFn(styles2);
};
function defineStyle(styles2) {
  return styles2;
}
function defineStyleConfig(config2) {
  return config2;
}
function createMultiStyleConfigHelpers(parts) {
  return {
    definePartsStyle(config2) {
      return config2;
    },
    defineMultiStyleConfig(config2) {
      return { parts, ...config2 };
    }
  };
}
function normalize22(value, toArray3) {
  if (Array.isArray(value))
    return value;
  if (isObject(value))
    return toArray3(value);
  if (value != null)
    return [value];
}
function getNextIndex(values, i) {
  for (let j = i + 1; j < values.length; j++) {
    if (values[j] != null)
      return j;
  }
  return -1;
}
function createResolver(theme2) {
  const breakpointUtil = theme2.__breakpoints;
  return function resolver(config2, prop, value, props) {
    var _a8, _b5;
    if (!breakpointUtil)
      return;
    const result = {};
    const normalized = normalize22(value, breakpointUtil.toArrayValue);
    if (!normalized)
      return result;
    const len = normalized.length;
    const isSingle = len === 1;
    const isMultipart = !!config2.parts;
    for (let i = 0; i < len; i++) {
      const key = breakpointUtil.details[i];
      const nextKey = breakpointUtil.details[getNextIndex(normalized, i)];
      const query = toMediaQueryString(key.minW, nextKey == null ? void 0 : nextKey._minW);
      const styles2 = runIfFn((_a8 = config2[prop]) == null ? void 0 : _a8[normalized[i]], props);
      if (!styles2)
        continue;
      if (isMultipart) {
        (_b5 = config2.parts) == null ? void 0 : _b5.forEach((part) => {
          (0, import_lodash4.default)(result, {
            [part]: isSingle ? styles2[part] : { [query]: styles2[part] }
          });
        });
        continue;
      }
      if (!isMultipart) {
        if (isSingle)
          (0, import_lodash4.default)(result, styles2);
        else
          result[query] = styles2;
        continue;
      }
      result[query] = styles2;
    }
    return result;
  };
}
function resolveStyleConfig(config2) {
  return (props) => {
    var _a8;
    const { variant, size: size2, theme: theme2 } = props;
    const recipe = createResolver(theme2);
    return (0, import_lodash4.default)(
      {},
      runIfFn((_a8 = config2.baseStyle) != null ? _a8 : {}, props),
      recipe(config2, "sizes", size2, props),
      recipe(config2, "variants", variant, props)
    );
  };
}
function getCSSVar(theme2, scale2, value) {
  var _a8, _b5, _c3;
  return (_c3 = (_b5 = (_a8 = theme2.__cssMap) == null ? void 0 : _a8[`${scale2}.${value}`]) == null ? void 0 : _b5.varRef) != null ? _c3 : value;
}
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}

// node_modules/@chakra-ui/theme/dist/chunk-P56GPN75.mjs
var requiredChakraThemeKeys = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function isChakraTheme(unit) {
  if (!isObject(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every(
    (propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName)
  );
}

// node_modules/@chakra-ui/theme/dist/chunk-SIH73G3H.mjs
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition2 = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var transition_default = transition2;

// node_modules/@chakra-ui/theme/dist/chunk-45VJLTIL.mjs
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var z_index_default = zIndices;

// node_modules/@chakra-ui/theme/dist/chunk-B75T2J64.mjs
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var borders_default = borders;

// node_modules/@chakra-ui/theme/dist/chunk-TXLFBUTF.mjs
var breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
};
var breakpoints_default = breakpoints;

// node_modules/@chakra-ui/theme/dist/chunk-E47HH2QS.mjs
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var colors_default = colors;

// node_modules/@chakra-ui/theme/dist/chunk-VIVTPWHP.mjs
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var radius_default = radii;

// node_modules/@chakra-ui/theme/dist/chunk-IZUFFCXS.mjs
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var shadows_default = shadows;

// node_modules/@chakra-ui/theme/dist/chunk-HQ6WXDYV.mjs
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var blur_default = blur;

// node_modules/@chakra-ui/theme/dist/chunk-6XA2KDUD.mjs
var typography2 = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var typography_default = typography2;

// node_modules/@chakra-ui/theme/dist/chunk-V7WMN6TQ.mjs
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

// node_modules/@chakra-ui/theme/dist/chunk-NJCYBKFH.mjs
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes = {
  ...spacing,
  ...largeSizes,
  container
};
var sizes_default = sizes;

// node_modules/@chakra-ui/theme/dist/chunk-3WO5B3NB.mjs
var foundations = {
  breakpoints: breakpoints_default,
  zIndices: z_index_default,
  radii: radius_default,
  blur: blur_default,
  colors: colors_default,
  ...typography_default,
  sizes: sizes_default,
  shadows: shadows_default,
  space: spacing,
  borders: borders_default,
  transition: transition_default
};

// node_modules/@chakra-ui/theme/dist/chunk-Q5NOVGYN.mjs
var { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]);
var $size = cssVar("stepper-indicator-size");
var $iconSize = cssVar("stepper-icon-size");
var $titleFontSize = cssVar("stepper-title-font-size");
var $descFontSize = cssVar("stepper-description-font-size");
var $accentColor = cssVar("stepper-accent-color");
var baseStyle = definePartsStyle(({ colorScheme: c }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [$accentColor.variable]: `colors.${c}.500`,
    _dark: {
      [$accentColor.variable]: `colors.${c}.200`
    }
  },
  title: {
    fontSize: $titleFontSize.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: $descFontSize.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: $titleFontSize.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: $iconSize.reference,
    height: $iconSize.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: $size.reference,
    height: $size.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: $accentColor.reference
    },
    "&[data-status=complete]": {
      bg: $accentColor.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: $accentColor.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${$size.reference} - 8px)`,
      top: `calc(${$size.reference} + 4px)`,
      insetStart: `calc(${$size.reference} / 2 - 1px)`
    }
  }
}));
var stepperTheme = defineMultiStyleConfig({
  baseStyle,
  sizes: {
    xs: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.4",
        [$iconSize.variable]: "sizes.3",
        [$titleFontSize.variable]: "fontSizes.xs",
        [$descFontSize.variable]: "fontSizes.xs"
      }
    }),
    sm: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.6",
        [$iconSize.variable]: "sizes.4",
        [$titleFontSize.variable]: "fontSizes.sm",
        [$descFontSize.variable]: "fontSizes.xs"
      }
    }),
    md: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.8",
        [$iconSize.variable]: "sizes.5",
        [$titleFontSize.variable]: "fontSizes.md",
        [$descFontSize.variable]: "fontSizes.sm"
      }
    }),
    lg: definePartsStyle({
      stepper: {
        [$size.variable]: "sizes.10",
        [$iconSize.variable]: "sizes.6",
        [$titleFontSize.variable]: "fontSizes.lg",
        [$descFontSize.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/anatomy/dist/chunk-OA3DH5LS.mjs
function anatomy(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function parts(...values) {
    assert();
    for (const part of values) {
      ;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function extend(...parts2) {
    for (const part of parts2) {
      if (part in map)
        continue;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function selectors() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.selector])
    );
    return value;
  }
  function classnames3() {
    const value = Object.fromEntries(
      Object.entries(map).map(([key, part]) => [key, part.className])
    );
    return value;
  }
  function toPart(part) {
    const el = ["container", "root"].includes(part != null ? part : "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  const __type = {};
  return {
    parts,
    toPart,
    extend,
    selectors,
    classnames: classnames3,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}

// node_modules/@chakra-ui/anatomy/dist/chunk-7OOI6RFH.mjs
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel").extend("icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon", "spinner");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
var buttonAnatomy = anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
var circularProgressAnatomy = anatomy("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts(
  "preview",
  "input",
  "textarea"
);
var formAnatomy = anatomy("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
);
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts(
  "addon",
  "field",
  "element",
  "group"
);
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
var pinInputAnatomy = anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts(
  "label",
  "filledTrack",
  "track"
);
var radioAnatomy = anatomy("radio").parts(
  "container",
  "control",
  "label"
);
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
);
var statAnatomy = anatomy("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
);
var switchAnatomy = anatomy("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
);
var tableAnatomy = anatomy("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
);
var tabsAnatomy = anatomy("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
);
var tagAnatomy = anatomy("tag").parts(
  "container",
  "label",
  "closeButton"
);
var cardAnatomy = anatomy("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
var stepperAnatomy = anatomy("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);

// node_modules/color2k/dist/index.exports.import.es.mjs
function guard(low, high, value) {
  return Math.min(Math.max(low, value), high);
}
var ColorError = class extends Error {
  constructor(color2) {
    super(`Failed to parse color: "${color2}"`);
  }
};
var ColorError$1 = ColorError;
function parseToRgba(color2) {
  if (typeof color2 !== "string") throw new ColorError$1(color2);
  if (color2.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let normalizedColor = color2.trim();
  normalizedColor = namedColorRegex.test(color2) ? nameToHex(color2) : color2;
  const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
  if (reducedHexMatch) {
    const arr = Array.from(reducedHexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(r(x, 2), 16)), parseInt(r(arr[3] || "f", 2), 16) / 255];
  }
  const hexMatch = hexRegex.exec(normalizedColor);
  if (hexMatch) {
    const arr = Array.from(hexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 16)), parseInt(arr[3] || "ff", 16) / 255];
  }
  const rgbaMatch = rgbaRegex.exec(normalizedColor);
  if (rgbaMatch) {
    const arr = Array.from(rgbaMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 10)), parseFloat(arr[3] || "1")];
  }
  const hslaMatch = hslaRegex.exec(normalizedColor);
  if (hslaMatch) {
    const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
    if (guard(0, 100, s) !== s) throw new ColorError$1(color2);
    if (guard(0, 100, l) !== l) throw new ColorError$1(color2);
    return [...hslToRgb(h, s, l), Number.isNaN(a) ? 1 : a];
  }
  throw new ColorError$1(color2);
}
function hash2(str) {
  let hash5 = 5381;
  let i = str.length;
  while (i) {
    hash5 = hash5 * 33 ^ str.charCodeAt(--i);
  }
  return (hash5 >>> 0) % 2341;
}
var colorToInt = (x) => parseInt(x.replace(/_/g, ""), 36);
var compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next2) => {
  const key = colorToInt(next2.substring(0, 3));
  const hex = colorToInt(next2.substring(3)).toString(16);
  let prefix4 = "";
  for (let i = 0; i < 6 - hex.length; i++) {
    prefix4 += "0";
  }
  acc[key] = `${prefix4}${hex}`;
  return acc;
}, {});
function nameToHex(color2) {
  const normalizedColorName = color2.toLowerCase().trim();
  const result = compressedColorMap[hash2(normalizedColorName)];
  if (!result) throw new ColorError$1(color2);
  return `#${result}`;
}
var r = (str, amount) => Array.from(Array(amount)).map(() => str).join("");
var reducedHexRegex = new RegExp(`^#${r("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
var hexRegex = new RegExp(`^#${r("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
var rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
var hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
var namedColorRegex = /^[a-z]+$/i;
var roundColor = (color2) => {
  return Math.round(color2 * 255);
};
var hslToRgb = (hue, saturation, lightness) => {
  let l = lightness / 100;
  if (saturation === 0) {
    return [l, l, l].map(roundColor);
  }
  const huePrime = (hue % 360 + 360) % 360 / 60;
  const chroma = (1 - Math.abs(2 * l - 1)) * (saturation / 100);
  const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  let red = 0;
  let green = 0;
  let blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  const lightnessModification = l - chroma / 2;
  const finalRed = red + lightnessModification;
  const finalGreen = green + lightnessModification;
  const finalBlue = blue + lightnessModification;
  return [finalRed, finalGreen, finalBlue].map(roundColor);
};
function rgba(red, green, blue, alpha) {
  return `rgba(${guard(0, 255, red).toFixed()}, ${guard(0, 255, green).toFixed()}, ${guard(0, 255, blue).toFixed()}, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
function transparentize(color2, amount) {
  const [r2, g, b, a] = parseToRgba(color2);
  return rgba(r2, g, b, a - amount);
}
function toHex(color2) {
  const [r2, g, b, a] = parseToRgba(color2);
  let hex = (x) => {
    const h = guard(0, 255, x).toString(16);
    return h.length === 1 ? `0${h}` : h;
  };
  return `#${hex(r2)}${hex(g)}${hex(b)}${a < 1 ? hex(Math.round(a * 255)) : ""}`;
}

// node_modules/@chakra-ui/theme-tools/dist/chunk-6IC2I3BY.mjs
function dlv_es_default(t2, e, l, n, r2) {
  for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
    t2 = t2 ? t2[e[n]] : r2;
  return t2 === r2 ? l : t2;
}
var isEmptyObject = (obj) => Object.keys(obj).length === 0;
var getColor = (theme2, color2, fallback) => {
  const hex = dlv_es_default(theme2, `colors.${color2}`, color2);
  try {
    toHex(hex);
    return hex;
  } catch {
    return fallback != null ? fallback : "#000000";
  }
};
var getBrightness = (color2) => {
  const [r2, g, b] = parseToRgba(color2);
  return (r2 * 299 + g * 587 + b * 114) / 1e3;
};
var tone = (color2) => (theme2) => {
  const hex = getColor(theme2, color2);
  const brightness = getBrightness(hex);
  const isDark2 = brightness < 128;
  return isDark2 ? "dark" : "light";
};
var isDark = (color2) => (theme2) => tone(color2)(theme2) === "dark";
var transparentize2 = (color2, opacity) => (theme2) => {
  const raw = getColor(theme2, color2);
  return transparentize(raw, 1 - opacity);
};
function generateStripe(size2 = "1rem", color2 = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${color2} 25%,
    transparent 25%,
    transparent 50%,
    ${color2} 50%,
    ${color2} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${size2} ${size2}`
  };
}
var randomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function randomColor(opts) {
  const fallback = randomHex();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  let hash5 = 0;
  if (str.length === 0)
    return hash5.toString();
  for (let i = 0; i < str.length; i += 1) {
    hash5 = str.charCodeAt(i) + ((hash5 << 5) - hash5);
    hash5 = hash5 & hash5;
  }
  let color2 = "#";
  for (let j = 0; j < 3; j += 1) {
    const value = hash5 >> j * 8 & 255;
    color2 += `00${value.toString(16)}`.substr(-2);
  }
  return color2;
}
function randomColorFromList(str, list2) {
  let index = 0;
  if (str.length === 0)
    return list2[0];
  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list2.length + list2.length) % list2.length;
  return list2[index];
}
function randomFromList(list2) {
  return list2[Math.floor(Math.random() * list2.length)];
}

// node_modules/@chakra-ui/theme-tools/dist/chunk-FNB7ZWWX.mjs
function mode(light, dark) {
  return (props) => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}

// node_modules/@chakra-ui/theme-tools/dist/chunk-XMZHFSTS.mjs
function toRef(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpr = (operator, ...operands) => operands.map(toRef).join(` ${operator} `).replace(/calc/g, "");
var add2 = (...operands) => `calc(${toExpr("+", ...operands)})`;
var subtract3 = (...operands) => `calc(${toExpr("-", ...operands)})`;
var multiply2 = (...operands) => `calc(${toExpr("*", ...operands)})`;
var divide2 = (...operands) => `calc(${toExpr("/", ...operands)})`;
var negate2 = (x) => {
  const value = toRef(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply2(value, -1);
};
var calc2 = Object.assign(
  (x) => ({
    add: (...operands) => calc2(add2(x, ...operands)),
    subtract: (...operands) => calc2(subtract3(x, ...operands)),
    multiply: (...operands) => calc2(multiply2(x, ...operands)),
    divide: (...operands) => calc2(divide2(x, ...operands)),
    negate: () => calc2(negate2(x)),
    toString: () => x.toString()
  }),
  {
    add: add2,
    subtract: subtract3,
    multiply: multiply2,
    divide: divide2,
    negate: negate2
  }
);

// node_modules/@chakra-ui/theme-tools/dist/chunk-WSAJBJJ4.mjs
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace2(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape2(value) {
  const valueStr = replaceWhiteSpace2(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix2(value, prefix4 = "") {
  return [prefix4, escape2(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return `var(${escape2(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar(value, prefix4 = "") {
  return `--${addPrefix2(value, prefix4)}`;
}
function cssVar2(name, options) {
  const cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}

// node_modules/@chakra-ui/theme/dist/chunk-SG67NFYS.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig2, definePartsStyle: definePartsStyle2 } = createMultiStyleConfigHelpers(switchAnatomy.keys);
var $width = cssVar2("switch-track-width");
var $height = cssVar2("switch-track-height");
var $diff = cssVar2("switch-track-diff");
var diffValue = calc2.subtract($width, $height);
var $translateX = cssVar2("switch-thumb-x");
var $bg = cssVar2("switch-bg");
var baseStyleTrack = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [$bg.variable]: "colors.gray.300",
    _dark: {
      [$bg.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [$bg.variable]: `colors.${c}.500`,
      _dark: {
        [$bg.variable]: `colors.${c}.200`
      }
    },
    bg: $bg.reference
  };
});
var baseStyleThumb = defineStyle({
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`
  }
});
var baseStyle2 = definePartsStyle2((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc2($diff).negate().toString()
    }
  },
  track: baseStyleTrack(props),
  thumb: baseStyleThumb
}));
var sizes2 = {
  sm: definePartsStyle2({
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "sizes.3"
    }
  }),
  md: definePartsStyle2({
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "sizes.4"
    }
  }),
  lg: definePartsStyle2({
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "sizes.6"
    }
  })
};
var switchTheme = defineMultiStyleConfig2({
  baseStyle: baseStyle2,
  sizes: sizes2,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-QWN3S45W.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig3, definePartsStyle: definePartsStyle3 } = createMultiStyleConfigHelpers(tableAnatomy.keys);
var baseStyle3 = definePartsStyle3({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
});
var numericStyles = defineStyle({
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
});
var variantSimple = definePartsStyle3((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variantStripe = definePartsStyle3((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(`${c}.100`, `${c}.700`)(props)
          },
          td: {
            background: mode(`${c}.100`, `${c}.700`)(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variants = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({})
};
var sizes3 = {
  sm: definePartsStyle3({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: definePartsStyle3({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: definePartsStyle3({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
};
var tableTheme = defineMultiStyleConfig3({
  baseStyle: baseStyle3,
  variants,
  sizes: sizes3,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-GYISOX2E.mjs
var $fg = cssVar("tabs-color");
var $bg2 = cssVar("tabs-bg");
var $border = cssVar("tabs-border-color");
var { defineMultiStyleConfig: defineMultiStyleConfig4, definePartsStyle: definePartsStyle4 } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
var baseStyleRoot = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
});
var baseStyleTab = defineStyle((props) => {
  const { isFitted } = props;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
});
var baseStyleTablist = defineStyle((props) => {
  const { align = "start", orientation } = props;
  const alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
});
var baseStyleTabpanel = defineStyle({
  p: 4
});
var baseStyle4 = definePartsStyle4((props) => ({
  root: baseStyleRoot(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
}));
var sizes4 = {
  sm: definePartsStyle4({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: definePartsStyle4({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: definePartsStyle4({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
};
var variantLine = definePartsStyle4((props) => {
  const { colorScheme: c, orientation } = props;
  const isVertical = orientation === "vertical";
  const borderProp = isVertical ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        [$fg.variable]: `colors.${c}.600`,
        _dark: {
          [$fg.variable]: `colors.${c}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [$bg2.variable]: "colors.gray.200",
        _dark: {
          [$bg2.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: $fg.reference,
      bg: $bg2.reference
    }
  };
});
var variantEnclosed = definePartsStyle4((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [$border.variable]: "transparent",
      _selected: {
        [$fg.variable]: `colors.${c}.600`,
        [$border.variable]: `colors.white`,
        _dark: {
          [$fg.variable]: `colors.${c}.300`,
          [$border.variable]: `colors.gray.800`
        },
        borderColor: "inherit",
        borderBottomColor: $border.reference
      },
      color: $fg.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantEnclosedColored = definePartsStyle4((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [$bg2.variable]: "colors.gray.50",
      _dark: {
        [$bg2.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [$bg2.variable]: "colors.white",
        [$fg.variable]: `colors.${c}.600`,
        _dark: {
          [$bg2.variable]: "colors.gray.800",
          [$fg.variable]: `colors.${c}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: $fg.reference,
      bg: $bg2.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantSoftRounded = definePartsStyle4((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme2, `${c}.700`),
        bg: getColor(theme2, `${c}.100`)
      }
    }
  };
});
var variantSolidRounded = definePartsStyle4((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [$fg.variable]: "colors.gray.600",
      _dark: {
        [$fg.variable]: "inherit"
      },
      _selected: {
        [$fg.variable]: "colors.white",
        [$bg2.variable]: `colors.${c}.600`,
        _dark: {
          [$fg.variable]: "colors.gray.800",
          [$bg2.variable]: `colors.${c}.300`
        }
      },
      color: $fg.reference,
      bg: $bg2.reference
    }
  };
});
var variantUnstyled = definePartsStyle4({});
var variants2 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled
};
var tabsTheme = defineMultiStyleConfig4({
  baseStyle: baseStyle4,
  sizes: sizes4,
  variants: variants2,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-ZQMLTFF3.mjs
var vars = defineCssVars("badge", ["bg", "color", "shadow"]);
var baseStyle5 = defineStyle({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var variantSolid = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const dark = transparentize2(`${c}.500`, 0.6)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.500`,
    [vars.color.variable]: `colors.white`,
    _dark: {
      [vars.bg.variable]: dark,
      [vars.color.variable]: `colors.whiteAlpha.800`
    }
  };
});
var variantSubtle = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkBg = transparentize2(`${c}.200`, 0.16)(theme2);
  return {
    [vars.bg.variable]: `colors.${c}.100`,
    [vars.color.variable]: `colors.${c}.800`,
    _dark: {
      [vars.bg.variable]: darkBg,
      [vars.color.variable]: `colors.${c}.200`
    }
  };
});
var variantOutline = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkColor = transparentize2(`${c}.200`, 0.8)(theme2);
  return {
    [vars.color.variable]: `colors.${c}.500`,
    _dark: {
      [vars.color.variable]: darkColor
    },
    [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
  };
});
var variants3 = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline
};
var badgeTheme = defineStyleConfig({
  baseStyle: baseStyle5,
  variants: variants3,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-7RVLYCMR.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig5, definePartsStyle: definePartsStyle5 } = createMultiStyleConfigHelpers(tagAnatomy.keys);
var $bg3 = cssVar("tag-bg");
var $color = cssVar("tag-color");
var $shadow = cssVar("tag-shadow");
var $minH = cssVar("tag-min-height");
var $minW = cssVar("tag-min-width");
var $fontSize = cssVar("tag-font-size");
var $paddingX = cssVar("tag-padding-inline");
var baseStyleContainer = defineStyle({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [$color.variable]: vars.color.reference,
  [$bg3.variable]: vars.bg.reference,
  [$shadow.variable]: vars.shadow.reference,
  color: $color.reference,
  bg: $bg3.reference,
  boxShadow: $shadow.reference,
  borderRadius: "md",
  minH: $minH.reference,
  minW: $minW.reference,
  fontSize: $fontSize.reference,
  px: $paddingX.reference,
  _focusVisible: {
    [$shadow.variable]: "shadows.outline"
  }
});
var baseStyleLabel = defineStyle({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton = defineStyle({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
var baseStyle6 = definePartsStyle5({
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton
});
var sizes5 = {
  sm: definePartsStyle5({
    container: {
      [$minH.variable]: "sizes.5",
      [$minW.variable]: "sizes.5",
      [$fontSize.variable]: "fontSizes.xs",
      [$paddingX.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle5({
    container: {
      [$minH.variable]: "sizes.6",
      [$minW.variable]: "sizes.6",
      [$fontSize.variable]: "fontSizes.sm",
      [$paddingX.variable]: "space.2"
    }
  }),
  lg: definePartsStyle5({
    container: {
      [$minH.variable]: "sizes.8",
      [$minW.variable]: "sizes.8",
      [$fontSize.variable]: "fontSizes.md",
      [$paddingX.variable]: "space.3"
    }
  })
};
var variants4 = {
  subtle: definePartsStyle5((props) => {
    var _a8;
    return {
      container: (_a8 = badgeTheme.variants) == null ? void 0 : _a8.subtle(props)
    };
  }),
  solid: definePartsStyle5((props) => {
    var _a8;
    return {
      container: (_a8 = badgeTheme.variants) == null ? void 0 : _a8.solid(props)
    };
  }),
  outline: definePartsStyle5((props) => {
    var _a8;
    return {
      container: (_a8 = badgeTheme.variants) == null ? void 0 : _a8.outline(props)
    };
  })
};
var tagTheme = defineMultiStyleConfig5({
  variants: variants4,
  baseStyle: baseStyle6,
  sizes: sizes5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-ICL3HPTT.mjs
var { definePartsStyle: definePartsStyle6, defineMultiStyleConfig: defineMultiStyleConfig6 } = createMultiStyleConfigHelpers(inputAnatomy.keys);
var $height2 = cssVar("input-height");
var $fontSize2 = cssVar("input-font-size");
var $padding = cssVar("input-padding");
var $borderRadius = cssVar("input-border-radius");
var baseStyle7 = definePartsStyle6({
  addon: {
    height: $height2.reference,
    fontSize: $fontSize2.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference
  },
  field: {
    width: "100%",
    height: $height2.reference,
    fontSize: $fontSize2.reference,
    px: $padding.reference,
    borderRadius: $borderRadius.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: defineStyle({
    [$fontSize2.variable]: "fontSizes.lg",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height2.variable]: "sizes.12"
  }),
  md: defineStyle({
    [$fontSize2.variable]: "fontSizes.md",
    [$padding.variable]: "space.4",
    [$borderRadius.variable]: "radii.md",
    [$height2.variable]: "sizes.10"
  }),
  sm: defineStyle({
    [$fontSize2.variable]: "fontSizes.sm",
    [$padding.variable]: "space.3",
    [$borderRadius.variable]: "radii.sm",
    [$height2.variable]: "sizes.8"
  }),
  xs: defineStyle({
    [$fontSize2.variable]: "fontSizes.xs",
    [$padding.variable]: "space.2",
    [$borderRadius.variable]: "radii.sm",
    [$height2.variable]: "sizes.6"
  })
};
var sizes6 = {
  lg: definePartsStyle6({
    field: size.lg,
    group: size.lg
  }),
  md: definePartsStyle6({
    field: size.md,
    group: size.md
  }),
  sm: definePartsStyle6({
    field: size.sm,
    group: size.sm
  }),
  xs: definePartsStyle6({
    field: size.xs,
    group: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}
var variantOutline2 = definePartsStyle6((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0 0 0 1px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme2, fc),
        boxShadow: `0 0 0 1px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle6((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme2, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle6((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        borderColor: getColor(theme2, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled2 = definePartsStyle6({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants5 = {
  outline: variantOutline2,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled2
};
var inputTheme = defineMultiStyleConfig6({
  baseStyle: baseStyle7,
  sizes: sizes6,
  variants: variants5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-KJ26FGJD.mjs
var _a;
var baseStyle8 = defineStyle({
  ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
var _a2;
var _b;
var variants6 = {
  outline: defineStyle(
    (props) => {
      var _a42, _b32;
      return (_b32 = (_a42 = inputTheme.variants) == null ? void 0 : _a42.outline(props).field) != null ? _b32 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a42, _b32;
      return (_b32 = (_a42 = inputTheme.variants) == null ? void 0 : _a42.flushed(props).field) != null ? _b32 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a42, _b32;
      return (_b32 = (_a42 = inputTheme.variants) == null ? void 0 : _a42.filled(props).field) != null ? _b32 : {};
    }
  ),
  unstyled: (_b = (_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) != null ? _b : {}
};
var _a3;
var _b2;
var _c;
var _d;
var _e;
var _f;
var _g;
var _h;
var sizes7 = {
  xs: (_b2 = (_a3 = inputTheme.sizes) == null ? void 0 : _a3.xs.field) != null ? _b2 : {},
  sm: (_d = (_c = inputTheme.sizes) == null ? void 0 : _c.sm.field) != null ? _d : {},
  md: (_f = (_e = inputTheme.sizes) == null ? void 0 : _e.md.field) != null ? _f : {},
  lg: (_h = (_g = inputTheme.sizes) == null ? void 0 : _g.lg.field) != null ? _h : {}
};
var textareaTheme = defineStyleConfig({
  baseStyle: baseStyle8,
  sizes: sizes7,
  variants: variants6,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-R7ZISUMV.mjs
var $bg4 = cssVar2("tooltip-bg");
var $fg2 = cssVar2("tooltip-fg");
var $arrowBg = cssVar2("popper-arrow-bg");
var baseStyle9 = defineStyle({
  bg: $bg4.reference,
  color: $fg2.reference,
  [$bg4.variable]: "colors.gray.700",
  [$fg2.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$bg4.variable]: "colors.gray.300",
    [$fg2.variable]: "colors.gray.900"
  },
  [$arrowBg.variable]: $bg4.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
});
var tooltipTheme = defineStyleConfig({
  baseStyle: baseStyle9
});

// node_modules/@chakra-ui/theme/dist/chunk-37MNRBP2.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig7, definePartsStyle: definePartsStyle7 } = createMultiStyleConfigHelpers(progressAnatomy.keys);
var filledStyle = defineStyle((props) => {
  const { colorScheme: c, theme: t2, isIndeterminate, hasStripe } = props;
  const stripeStyle = mode(
    generateStripe(),
    generateStripe("1rem", "rgba(0,0,0,0.1)")
  )(props);
  const bgColor = mode(`${c}.500`, `${c}.200`)(props);
  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t2, bgColor)} 50%,
    transparent 100%
  )`;
  const addStripe = !isIndeterminate && hasStripe;
  return {
    ...addStripe && stripeStyle,
    ...isIndeterminate ? { bgImage: gradient } : { bgColor }
  };
});
var baseStyleLabel2 = defineStyle({
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
});
var baseStyleTrack2 = defineStyle((props) => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
});
var baseStyleFilledTrack = defineStyle((props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props)
  };
});
var baseStyle10 = definePartsStyle7((props) => ({
  label: baseStyleLabel2,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack2(props)
}));
var sizes8 = {
  xs: definePartsStyle7({
    track: { h: "1" }
  }),
  sm: definePartsStyle7({
    track: { h: "2" }
  }),
  md: definePartsStyle7({
    track: { h: "3" }
  }),
  lg: definePartsStyle7({
    track: { h: "4" }
  })
};
var progressTheme = defineMultiStyleConfig7({
  sizes: sizes8,
  baseStyle: baseStyle10,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-UV3F75RF.mjs
var isFunction2 = (value) => typeof value === "function";
function runIfFn2(valueOrFn, ...args) {
  return isFunction2(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

// node_modules/@chakra-ui/theme/dist/chunk-XHYVH6UO.mjs
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
var $size2 = cssVar("checkbox-size");
var baseStyleControl = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    w: $size2.reference,
    h: $size2.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: mode(`${c}.600`, `${c}.300`)(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
});
var baseStyleContainer2 = defineStyle({
  _disabled: { cursor: "not-allowed" }
});
var baseStyleLabel3 = defineStyle({
  userSelect: "none",
  _disabled: { opacity: 0.4 }
});
var baseStyleIcon = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal"
});
var baseStyle11 = definePartsStyle8((props) => ({
  icon: baseStyleIcon,
  container: baseStyleContainer2,
  control: runIfFn2(baseStyleControl, props),
  label: baseStyleLabel3
}));
var sizes9 = {
  sm: definePartsStyle8({
    control: { [$size2.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: definePartsStyle8({
    control: { [$size2.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: definePartsStyle8({
    control: { [$size2.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
};
var checkboxTheme = defineMultiStyleConfig8({
  baseStyle: baseStyle11,
  sizes: sizes9,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-VZUATZ4E.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig9, definePartsStyle: definePartsStyle9 } = createMultiStyleConfigHelpers(radioAnatomy.keys);
var baseStyleControl2 = defineStyle((props) => {
  var _a8;
  const controlStyle = (_a8 = runIfFn2(checkboxTheme.baseStyle, props)) == null ? void 0 : _a8.control;
  return {
    ...controlStyle,
    borderRadius: "full",
    _checked: {
      ...controlStyle == null ? void 0 : controlStyle["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
});
var baseStyle12 = definePartsStyle9((props) => {
  var _a8, _b5, _c3, _d3;
  return {
    label: (_b5 = (_a8 = checkboxTheme).baseStyle) == null ? void 0 : _b5.call(_a8, props).label,
    container: (_d3 = (_c3 = checkboxTheme).baseStyle) == null ? void 0 : _d3.call(_c3, props).container,
    control: baseStyleControl2(props)
  };
});
var sizes10 = {
  md: definePartsStyle9({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: definePartsStyle9({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: definePartsStyle9({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
};
var radioTheme = defineMultiStyleConfig9({
  baseStyle: baseStyle12,
  sizes: sizes10,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-NNA4E64A.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig10, definePartsStyle: definePartsStyle10 } = createMultiStyleConfigHelpers(selectAnatomy.keys);
var $bg5 = cssVar("select-bg");
var _a4;
var baseStyleField = defineStyle({
  ...(_a4 = inputTheme.baseStyle) == null ? void 0 : _a4.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: $bg5.reference,
  [$bg5.variable]: "colors.white",
  _dark: {
    [$bg5.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: $bg5.reference
  }
});
var baseStyleIcon2 = defineStyle({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
});
var baseStyle13 = definePartsStyle10({
  field: baseStyleField,
  icon: baseStyleIcon2
});
var iconSpacing = defineStyle({
  paddingInlineEnd: "8"
});
var _a22;
var _b3;
var _c2;
var _d2;
var _e2;
var _f2;
var _g2;
var _h2;
var sizes11 = {
  lg: {
    ...(_a22 = inputTheme.sizes) == null ? void 0 : _a22.lg,
    field: {
      ...(_b3 = inputTheme.sizes) == null ? void 0 : _b3.lg.field,
      ...iconSpacing
    }
  },
  md: {
    ...(_c2 = inputTheme.sizes) == null ? void 0 : _c2.md,
    field: {
      ...(_d2 = inputTheme.sizes) == null ? void 0 : _d2.md.field,
      ...iconSpacing
    }
  },
  sm: {
    ...(_e2 = inputTheme.sizes) == null ? void 0 : _e2.sm,
    field: {
      ...(_f2 = inputTheme.sizes) == null ? void 0 : _f2.sm.field,
      ...iconSpacing
    }
  },
  xs: {
    ...(_g2 = inputTheme.sizes) == null ? void 0 : _g2.xs,
    field: {
      ...(_h2 = inputTheme.sizes) == null ? void 0 : _h2.xs.field,
      ...iconSpacing
    },
    icon: {
      insetEnd: "1"
    }
  }
};
var selectTheme = defineMultiStyleConfig10({
  baseStyle: baseStyle13,
  sizes: sizes11,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme/dist/chunk-X6XFE4TF.mjs
var $startColor = cssVar("skeleton-start-color");
var $endColor = cssVar("skeleton-end-color");
var baseStyle14 = defineStyle({
  [$startColor.variable]: "colors.gray.100",
  [$endColor.variable]: "colors.gray.400",
  _dark: {
    [$startColor.variable]: "colors.gray.800",
    [$endColor.variable]: "colors.gray.600"
  },
  background: $startColor.reference,
  borderColor: $endColor.reference,
  opacity: 0.7,
  borderRadius: "sm"
});
var skeletonTheme = defineStyleConfig({
  baseStyle: baseStyle14
});

// node_modules/@chakra-ui/theme/dist/chunk-ZREGO6US.mjs
var $bg6 = cssVar("skip-link-bg");
var baseStyle15 = defineStyle({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$bg6.variable]: "colors.white",
    _dark: {
      [$bg6.variable]: "colors.gray.700"
    },
    bg: $bg6.reference
  }
});
var skipLinkTheme = defineStyleConfig({
  baseStyle: baseStyle15
});

// node_modules/@chakra-ui/theme/dist/chunk-5FA7Y3RP.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig11, definePartsStyle: definePartsStyle11 } = createMultiStyleConfigHelpers(sliderAnatomy.keys);
var $thumbSize = cssVar("slider-thumb-size");
var $trackSize = cssVar("slider-track-size");
var $bg7 = cssVar("slider-bg");
var baseStyleContainer3 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...orient({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
});
var baseStyleTrack3 = defineStyle((props) => {
  const orientationStyles = orient({
    orientation: props.orientation,
    horizontal: { h: $trackSize.reference },
    vertical: { w: $trackSize.reference }
  });
  return {
    ...orientationStyles,
    overflow: "hidden",
    borderRadius: "sm",
    [$bg7.variable]: "colors.gray.200",
    _dark: {
      [$bg7.variable]: "colors.whiteAlpha.200"
    },
    _disabled: {
      [$bg7.variable]: "colors.gray.300",
      _dark: {
        [$bg7.variable]: "colors.whiteAlpha.300"
      }
    },
    bg: $bg7.reference
  };
});
var baseStyleThumb2 = defineStyle((props) => {
  const { orientation } = props;
  const orientationStyle = orient({
    orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`
      }
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`
      }
    }
  });
  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
});
var baseStyleFilledTrack2 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    width: "inherit",
    height: "inherit",
    [$bg7.variable]: `colors.${c}.500`,
    _dark: {
      [$bg7.variable]: `colors.${c}.200`
    },
    bg: $bg7.reference
  };
});
var baseStyle16 = definePartsStyle11((props) => ({
  container: baseStyleContainer3(props),
  track: baseStyleTrack3(props),
  thumb: baseStyleThumb2(props),
  filledTrack: baseStyleFilledTrack2(props)
}));
var sizeLg = definePartsStyle11({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeMd = definePartsStyle11({
  container: {
    [$thumbSize.variable]: `sizes.3.5`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeSm = definePartsStyle11({
  container: {
    [$thumbSize.variable]: `sizes.2.5`,
    [$trackSize.variable]: `sizes.0.5`
  }
});
var sizes12 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var sliderTheme = defineMultiStyleConfig11({
  baseStyle: baseStyle16,
  sizes: sizes12,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-L3YAB6CV.mjs
var $size3 = cssVar2("spinner-size");
var baseStyle17 = defineStyle({
  width: [$size3.reference],
  height: [$size3.reference]
});
var sizes13 = {
  xs: defineStyle({
    [$size3.variable]: "sizes.3"
  }),
  sm: defineStyle({
    [$size3.variable]: "sizes.4"
  }),
  md: defineStyle({
    [$size3.variable]: "sizes.6"
  }),
  lg: defineStyle({
    [$size3.variable]: "sizes.8"
  }),
  xl: defineStyle({
    [$size3.variable]: "sizes.12"
  })
};
var spinnerTheme = defineStyleConfig({
  baseStyle: baseStyle17,
  sizes: sizes13,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-2KWJXISX.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig12, definePartsStyle: definePartsStyle12 } = createMultiStyleConfigHelpers(statAnatomy.keys);
var baseStyleLabel4 = defineStyle({
  fontWeight: "medium"
});
var baseStyleHelpText = defineStyle({
  opacity: 0.8,
  marginBottom: "2"
});
var baseStyleNumber = defineStyle({
  verticalAlign: "baseline",
  fontWeight: "semibold"
});
var baseStyleIcon3 = defineStyle({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
});
var baseStyle18 = definePartsStyle12({
  container: {},
  label: baseStyleLabel4,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon3
});
var sizes14 = {
  md: definePartsStyle12({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
};
var statTheme = defineMultiStyleConfig12({
  baseStyle: baseStyle18,
  sizes: sizes14,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-AFCBUAM5.mjs
var $bg8 = cssVar("kbd-bg");
var baseStyle19 = defineStyle({
  [$bg8.variable]: "colors.gray.100",
  _dark: {
    [$bg8.variable]: "colors.whiteAlpha.100"
  },
  bg: $bg8.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
});
var kbdTheme = defineStyleConfig({
  baseStyle: baseStyle19
});

// node_modules/@chakra-ui/theme/dist/chunk-V5KSHSOQ.mjs
var baseStyle20 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var linkTheme = defineStyleConfig({
  baseStyle: baseStyle20
});

// node_modules/@chakra-ui/theme/dist/chunk-MGNM2WZQ.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig13, definePartsStyle: definePartsStyle13 } = createMultiStyleConfigHelpers(listAnatomy.keys);
var baseStyleIcon4 = defineStyle({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
});
var baseStyle21 = definePartsStyle13({
  icon: baseStyleIcon4
});
var listTheme = defineMultiStyleConfig13({
  baseStyle: baseStyle21
});

// node_modules/@chakra-ui/theme/dist/chunk-N2GP2AF7.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig14, definePartsStyle: definePartsStyle14 } = createMultiStyleConfigHelpers(menuAnatomy.keys);
var $bg9 = cssVar("menu-bg");
var $shadow2 = cssVar("menu-shadow");
var baseStyleList = defineStyle({
  [$bg9.variable]: "#fff",
  [$shadow2.variable]: "shadows.sm",
  _dark: {
    [$bg9.variable]: "colors.gray.700",
    [$shadow2.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: $bg9.reference,
  boxShadow: $shadow2.reference
});
var baseStyleItem = defineStyle({
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [$bg9.variable]: "colors.gray.100",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg9.variable]: "colors.gray.200",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [$bg9.variable]: "colors.gray.100",
    _dark: {
      [$bg9.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: $bg9.reference
});
var baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
});
var baseStyleIcon5 = defineStyle({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
var baseStyleCommand = defineStyle({
  opacity: 0.6
});
var baseStyleDivider = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
});
var baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyle22 = definePartsStyle14({
  button: baseStyleButton,
  list: baseStyleList,
  item: baseStyleItem,
  groupTitle: baseStyleGroupTitle,
  icon: baseStyleIcon5,
  command: baseStyleCommand,
  divider: baseStyleDivider
});
var menuTheme = defineMultiStyleConfig14({
  baseStyle: baseStyle22
});

// node_modules/@chakra-ui/theme/dist/chunk-JN6QBAR6.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig15, definePartsStyle: definePartsStyle15 } = createMultiStyleConfigHelpers(modalAnatomy.keys);
var $bg10 = cssVar("modal-bg");
var $shadow3 = cssVar("modal-shadow");
var baseStyleOverlay = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
});
var baseStyleDialog = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    borderRadius: "md",
    color: "inherit",
    my: isCentered ? "auto" : "16",
    mx: isCentered ? "auto" : void 0,
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [$bg10.variable]: "colors.white",
    [$shadow3.variable]: "shadows.lg",
    _dark: {
      [$bg10.variable]: "colors.gray.700",
      [$shadow3.variable]: "shadows.dark-lg"
    },
    bg: $bg10.reference,
    boxShadow: $shadow3.reference
  };
});
var baseStyleHeader = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton2 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
});
var baseStyleFooter = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle23 = definePartsStyle15((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: runIfFn2(baseStyleDialogContainer, props),
  dialog: runIfFn2(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton2,
  body: runIfFn2(baseStyleBody, props),
  footer: baseStyleFooter
}));
function getSize(value) {
  if (value === "full") {
    return definePartsStyle15({
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0"
      }
    });
  }
  return definePartsStyle15({
    dialog: { maxW: value }
  });
}
var sizes15 = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
  xl: getSize("xl"),
  "2xl": getSize("2xl"),
  "3xl": getSize("3xl"),
  "4xl": getSize("4xl"),
  "5xl": getSize("5xl"),
  "6xl": getSize("6xl"),
  full: getSize("full")
};
var modalTheme = defineMultiStyleConfig15({
  baseStyle: baseStyle23,
  sizes: sizes15,
  defaultProps: { size: "md" }
});

// node_modules/@chakra-ui/theme/dist/chunk-57T4IAPW.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig16, definePartsStyle: definePartsStyle16 } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
var $stepperWidth = cssVar2("number-input-stepper-width");
var $inputPadding = cssVar2("number-input-input-padding");
var inputPaddingValue = calc2($stepperWidth).add("0.5rem").toString();
var $bg11 = cssVar2("number-input-bg");
var $fg3 = cssVar2("number-input-color");
var $border2 = cssVar2("number-input-border-color");
var baseStyleRoot2 = defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
var baseStyleField2 = defineStyle(
  (props) => {
    var _a8, _b5;
    return (_b5 = (_a8 = runIfFn2(inputTheme.baseStyle, props)) == null ? void 0 : _a8.field) != null ? _b5 : {};
  }
);
var baseStyleStepperGroup = defineStyle({
  width: $stepperWidth.reference
});
var baseStyleStepper = defineStyle({
  borderStart: "1px solid",
  borderStartColor: $border2.reference,
  color: $fg3.reference,
  bg: $bg11.reference,
  [$fg3.variable]: "colors.chakra-body-text",
  [$border2.variable]: "colors.chakra-border-color",
  _dark: {
    [$fg3.variable]: "colors.whiteAlpha.800",
    [$border2.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [$bg11.variable]: "colors.gray.200",
    _dark: {
      [$bg11.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
});
var baseStyle24 = definePartsStyle16((props) => {
  var _a8;
  return {
    root: baseStyleRoot2,
    field: (_a8 = runIfFn2(baseStyleField2, props)) != null ? _a8 : {},
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper
  };
});
function getSize2(size2) {
  var _a8, _b5, _c3;
  const sizeStyle = (_a8 = inputTheme.sizes) == null ? void 0 : _a8[size2];
  const radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  const _fontSize = (_c3 = (_b5 = sizeStyle.field) == null ? void 0 : _b5.fontSize) != null ? _c3 : "md";
  const fontSize = typography_default.fontSizes[_fontSize];
  return definePartsStyle16({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: calc2(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var sizes16 = {
  xs: getSize2("xs"),
  sm: getSize2("sm"),
  md: getSize2("md"),
  lg: getSize2("lg")
};
var numberInputTheme = defineMultiStyleConfig16({
  baseStyle: baseStyle24,
  sizes: sizes16,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme/dist/chunk-OEFJDLVS.mjs
var _a5;
var baseStyle25 = defineStyle({
  ...(_a5 = inputTheme.baseStyle) == null ? void 0 : _a5.field,
  textAlign: "center"
});
var sizes17 = {
  lg: defineStyle({
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  })
};
var _a23;
var _b4;
var variants7 = {
  outline: defineStyle(
    (props) => {
      var _a32, _b22, _c3;
      return (_c3 = (_b22 = runIfFn2((_a32 = inputTheme.variants) == null ? void 0 : _a32.outline, props)) == null ? void 0 : _b22.field) != null ? _c3 : {};
    }
  ),
  flushed: defineStyle(
    (props) => {
      var _a32, _b22, _c3;
      return (_c3 = (_b22 = runIfFn2((_a32 = inputTheme.variants) == null ? void 0 : _a32.flushed, props)) == null ? void 0 : _b22.field) != null ? _c3 : {};
    }
  ),
  filled: defineStyle(
    (props) => {
      var _a32, _b22, _c3;
      return (_c3 = (_b22 = runIfFn2((_a32 = inputTheme.variants) == null ? void 0 : _a32.filled, props)) == null ? void 0 : _b22.field) != null ? _c3 : {};
    }
  ),
  unstyled: (_b4 = (_a23 = inputTheme.variants) == null ? void 0 : _a23.unstyled.field) != null ? _b4 : {}
};
var pinInputTheme = defineStyleConfig({
  baseStyle: baseStyle25,
  sizes: sizes17,
  variants: variants7,
  defaultProps: inputTheme.defaultProps
});

// node_modules/@chakra-ui/theme/dist/chunk-U3INMHUO.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig17, definePartsStyle: definePartsStyle17 } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
var $popperBg = cssVar2("popper-bg");
var $arrowBg2 = cssVar2("popper-arrow-bg");
var $arrowShadowColor = cssVar2("popper-arrow-shadow-color");
var baseStylePopper = defineStyle({ zIndex: 10 });
var baseStyleContent = defineStyle({
  [$popperBg.variable]: `colors.white`,
  bg: $popperBg.reference,
  [$arrowBg2.variable]: $popperBg.reference,
  [$arrowShadowColor.variable]: `colors.gray.200`,
  _dark: {
    [$popperBg.variable]: `colors.gray.700`,
    [$arrowShadowColor.variable]: `colors.whiteAlpha.300`
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
});
var baseStyleHeader2 = defineStyle({
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
});
var baseStyleBody2 = defineStyle({
  px: 3,
  py: 2
});
var baseStyleFooter2 = defineStyle({
  px: 3,
  py: 2,
  borderTopWidth: "1px"
});
var baseStyleCloseButton3 = defineStyle({
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
});
var baseStyle26 = definePartsStyle17({
  popper: baseStylePopper,
  content: baseStyleContent,
  header: baseStyleHeader2,
  body: baseStyleBody2,
  footer: baseStyleFooter2,
  closeButton: baseStyleCloseButton3
});
var popoverTheme = defineMultiStyleConfig17({
  baseStyle: baseStyle26
});

// node_modules/@chakra-ui/theme/dist/chunk-VWP3ZVQT.mjs
var { definePartsStyle: definePartsStyle18, defineMultiStyleConfig: defineMultiStyleConfig18 } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
var $bg12 = cssVar("drawer-bg");
var $bs = cssVar("drawer-box-shadow");
function getSize3(value) {
  if (value === "full") {
    return definePartsStyle18({
      dialog: { maxW: "100vw", h: "100vh" }
    });
  }
  return definePartsStyle18({
    dialog: { maxW: value }
  });
}
var baseStyleOverlay2 = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer2 = defineStyle({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
});
var baseStyleDialog2 = defineStyle((props) => {
  const { isFullHeight } = props;
  return {
    ...isFullHeight && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$bg12.variable]: "colors.white",
    [$bs.variable]: "shadows.lg",
    _dark: {
      [$bg12.variable]: "colors.gray.700",
      [$bs.variable]: "shadows.dark-lg"
    },
    bg: $bg12.reference,
    boxShadow: $bs.reference
  };
});
var baseStyleHeader3 = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton4 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody3 = defineStyle({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
});
var baseStyleFooter3 = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle27 = definePartsStyle18((props) => ({
  overlay: baseStyleOverlay2,
  dialogContainer: baseStyleDialogContainer2,
  dialog: runIfFn2(baseStyleDialog2, props),
  header: baseStyleHeader3,
  closeButton: baseStyleCloseButton4,
  body: baseStyleBody3,
  footer: baseStyleFooter3
}));
var sizes18 = {
  xs: getSize3("xs"),
  sm: getSize3("md"),
  md: getSize3("lg"),
  lg: getSize3("2xl"),
  xl: getSize3("4xl"),
  full: getSize3("full")
};
var drawerTheme = defineMultiStyleConfig18({
  baseStyle: baseStyle27,
  sizes: sizes18,
  defaultProps: {
    size: "xs"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-D6DZ26HA.mjs
var { definePartsStyle: definePartsStyle19, defineMultiStyleConfig: defineMultiStyleConfig19 } = createMultiStyleConfigHelpers(editableAnatomy.keys);
var baseStylePreview = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyleInput = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyleTextarea = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyle28 = definePartsStyle19({
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
});
var editableTheme = defineMultiStyleConfig19({
  baseStyle: baseStyle28
});

// node_modules/@chakra-ui/theme/dist/chunk-O6GGGS4Y.mjs
var { definePartsStyle: definePartsStyle20, defineMultiStyleConfig: defineMultiStyleConfig20 } = createMultiStyleConfigHelpers(formAnatomy.keys);
var $fg4 = cssVar("form-control-color");
var baseStyleRequiredIndicator = defineStyle({
  marginStart: "1",
  [$fg4.variable]: "colors.red.500",
  _dark: {
    [$fg4.variable]: "colors.red.300"
  },
  color: $fg4.reference
});
var baseStyleHelperText = defineStyle({
  mt: "2",
  [$fg4.variable]: "colors.gray.600",
  _dark: {
    [$fg4.variable]: "colors.whiteAlpha.600"
  },
  color: $fg4.reference,
  lineHeight: "normal",
  fontSize: "sm"
});
var baseStyle29 = definePartsStyle20({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});
var formTheme = defineMultiStyleConfig20({
  baseStyle: baseStyle29
});

// node_modules/@chakra-ui/theme/dist/chunk-SRBDDT7F.mjs
var { definePartsStyle: definePartsStyle21, defineMultiStyleConfig: defineMultiStyleConfig21 } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);
var $fg5 = cssVar("form-error-color");
var baseStyleText = defineStyle({
  [$fg5.variable]: `colors.red.500`,
  _dark: {
    [$fg5.variable]: `colors.red.300`
  },
  color: $fg5.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
});
var baseStyleIcon6 = defineStyle({
  marginEnd: "0.5em",
  [$fg5.variable]: `colors.red.500`,
  _dark: {
    [$fg5.variable]: `colors.red.300`
  },
  color: $fg5.reference
});
var baseStyle30 = definePartsStyle21({
  text: baseStyleText,
  icon: baseStyleIcon6
});
var formErrorTheme = defineMultiStyleConfig21({
  baseStyle: baseStyle30
});

// node_modules/@chakra-ui/theme/dist/chunk-VHM7WLW6.mjs
var baseStyle31 = defineStyle({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
var formLabelTheme = defineStyleConfig({
  baseStyle: baseStyle31
});

// node_modules/@chakra-ui/theme/dist/chunk-WXARPSDQ.mjs
var baseStyle32 = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold"
});
var sizes19 = {
  "4xl": defineStyle({
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  }),
  "3xl": defineStyle({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  }),
  "2xl": defineStyle({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  }),
  xl: defineStyle({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  lg: defineStyle({
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  md: defineStyle({
    fontSize: "xl",
    lineHeight: 1.2
  }),
  sm: defineStyle({
    fontSize: "md",
    lineHeight: 1.2
  }),
  xs: defineStyle({
    fontSize: "sm",
    lineHeight: 1.2
  })
};
var headingTheme = defineStyleConfig({
  baseStyle: baseStyle32,
  sizes: sizes19,
  defaultProps: {
    size: "xl"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-FU5DDBRC.mjs
var { defineMultiStyleConfig: defineMultiStyleConfig22, definePartsStyle: definePartsStyle22 } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
var $decor = cssVar("breadcrumb-link-decor");
var baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: $decor.reference,
  [$decor.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [$decor.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
});
var baseStyle33 = definePartsStyle22({
  link: baseStyleLink
});
var breadcrumbTheme = defineMultiStyleConfig22({
  baseStyle: baseStyle33
});

// node_modules/@chakra-ui/theme/dist/chunk-MBVM6PEK.mjs
var baseStyle34 = defineStyle({
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
});
var variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  if (c === "gray") {
    return {
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }
  const darkHoverBg = transparentize2(`${c}.200`, 0.12)(theme2);
  const darkActiveBg = transparentize2(`${c}.200`, 0.24)(theme2);
  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props)
    }
  };
});
var variantOutline3 = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...runIfFn2(variantGhost, props)
  };
});
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid2 = defineStyle((props) => {
  var _a8;
  const { colorScheme: c } = props;
  if (c === "gray") {
    const bg2 = mode(`gray.100`, `whiteAlpha.200`)(props);
    return {
      bg: bg2,
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg: bg2
        }
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) }
    };
  }
  const {
    bg = `${c}.500`,
    color: color2 = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`
  } = (_a8 = accessibleColorMap[c]) != null ? _a8 : {};
  const background2 = mode(bg, `${c}.200`)(props);
  return {
    bg: background2,
    color: mode(color2, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background2
      }
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) }
  };
});
var variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantUnstyled3 = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
});
var variants8 = {
  ghost: variantGhost,
  outline: variantOutline3,
  solid: variantSolid2,
  link: variantLink,
  unstyled: variantUnstyled3
};
var sizes20 = {
  lg: defineStyle({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  }),
  md: defineStyle({
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  }),
  sm: defineStyle({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  }),
  xs: defineStyle({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  })
};
var buttonTheme = defineStyleConfig({
  baseStyle: baseStyle34,
  variants: variants8,
  sizes: sizes20,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-F7CKIHPM.mjs
var { definePartsStyle: definePartsStyle23, defineMultiStyleConfig: defineMultiStyleConfig23 } = createMultiStyleConfigHelpers(cardAnatomy.keys);
var $bg13 = cssVar("card-bg");
var $padding2 = cssVar("card-padding");
var $shadow4 = cssVar("card-shadow");
var $radius = cssVar("card-radius");
var $border3 = cssVar("card-border-width", "0");
var $borderColor = cssVar("card-border-color");
var baseStyle35 = definePartsStyle23({
  container: {
    [$bg13.variable]: "colors.chakra-body-bg",
    backgroundColor: $bg13.reference,
    boxShadow: $shadow4.reference,
    borderRadius: $radius.reference,
    color: "chakra-body-text",
    borderWidth: $border3.reference,
    borderColor: $borderColor.reference
  },
  body: {
    padding: $padding2.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: $padding2.reference
  },
  footer: {
    padding: $padding2.reference
  }
});
var sizes21 = {
  sm: definePartsStyle23({
    container: {
      [$radius.variable]: "radii.base",
      [$padding2.variable]: "space.3"
    }
  }),
  md: definePartsStyle23({
    container: {
      [$radius.variable]: "radii.md",
      [$padding2.variable]: "space.5"
    }
  }),
  lg: definePartsStyle23({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding2.variable]: "space.7"
    }
  })
};
var variants9 = {
  elevated: definePartsStyle23({
    container: {
      [$shadow4.variable]: "shadows.base",
      _dark: {
        [$bg13.variable]: "colors.gray.700"
      }
    }
  }),
  outline: definePartsStyle23({
    container: {
      [$border3.variable]: "1px",
      [$borderColor.variable]: "colors.chakra-border-color"
    }
  }),
  filled: definePartsStyle23({
    container: {
      [$bg13.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [$padding2.variable]: 0
    },
    header: {
      [$padding2.variable]: 0
    },
    footer: {
      [$padding2.variable]: 0
    }
  }
};
var cardTheme = defineMultiStyleConfig23({
  baseStyle: baseStyle35,
  variants: variants9,
  sizes: sizes21,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-OB7MMEC3.mjs
var $size4 = cssVar2("close-button-size");
var $bg14 = cssVar2("close-button-bg");
var baseStyle36 = defineStyle({
  w: [$size4.reference],
  h: [$size4.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [$bg14.variable]: "colors.blackAlpha.100",
    _dark: {
      [$bg14.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [$bg14.variable]: "colors.blackAlpha.200",
    _dark: {
      [$bg14.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: $bg14.reference
});
var sizes22 = {
  lg: defineStyle({
    [$size4.variable]: "sizes.10",
    fontSize: "md"
  }),
  md: defineStyle({
    [$size4.variable]: "sizes.8",
    fontSize: "xs"
  }),
  sm: defineStyle({
    [$size4.variable]: "sizes.6",
    fontSize: "2xs"
  })
};
var closeButtonTheme = defineStyleConfig({
  baseStyle: baseStyle36,
  sizes: sizes22,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-K3RH7Y2L.mjs
var { variants: variants10, defaultProps } = badgeTheme;
var baseStyle37 = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: vars.bg.reference,
  color: vars.color.reference,
  boxShadow: vars.shadow.reference
});
var codeTheme = defineStyleConfig({
  baseStyle: baseStyle37,
  variants: variants10,
  defaultProps
});

// node_modules/@chakra-ui/theme/dist/chunk-TECE6HDR.mjs
var baseStyle38 = defineStyle({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
var containerTheme = defineStyleConfig({
  baseStyle: baseStyle38
});

// node_modules/@chakra-ui/theme/dist/chunk-5S44M2O4.mjs
var baseStyle39 = defineStyle({
  opacity: 0.6,
  borderColor: "inherit"
});
var variantSolid3 = defineStyle({
  borderStyle: "solid"
});
var variantDashed = defineStyle({
  borderStyle: "dashed"
});
var variants11 = {
  solid: variantSolid3,
  dashed: variantDashed
};
var dividerTheme = defineStyleConfig({
  baseStyle: baseStyle39,
  variants: variants11,
  defaultProps: {
    variant: "solid"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-J7AGDWFO.mjs
var { definePartsStyle: definePartsStyle24, defineMultiStyleConfig: defineMultiStyleConfig24 } = createMultiStyleConfigHelpers(accordionAnatomy.keys);
var baseStyleContainer4 = defineStyle({
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
});
var baseStyleButton2 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
});
var baseStylePanel = defineStyle({
  pt: "2",
  px: "4",
  pb: "5"
});
var baseStyleIcon7 = defineStyle({
  fontSize: "1.25em"
});
var baseStyle40 = definePartsStyle24({
  container: baseStyleContainer4,
  button: baseStyleButton2,
  panel: baseStylePanel,
  icon: baseStyleIcon7
});
var accordionTheme = defineMultiStyleConfig24({ baseStyle: baseStyle40 });

// node_modules/@chakra-ui/theme/dist/chunk-BNQWYFTH.mjs
var { definePartsStyle: definePartsStyle25, defineMultiStyleConfig: defineMultiStyleConfig25 } = createMultiStyleConfigHelpers(alertAnatomy.keys);
var $fg6 = cssVar("alert-fg");
var $bg15 = cssVar("alert-bg");
var baseStyle41 = definePartsStyle25({
  container: {
    bg: $bg15.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: $fg6.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $fg6.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function getBg(props) {
  const { theme: theme2, colorScheme: c } = props;
  const darkBg = transparentize2(`${c}.200`, 0.16)(theme2);
  return {
    light: `colors.${c}.100`,
    dark: darkBg
  };
}
var variantSubtle2 = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg6.variable]: `colors.${c}.600`,
      [$bg15.variable]: bg.light,
      _dark: {
        [$fg6.variable]: `colors.${c}.200`,
        [$bg15.variable]: bg.dark
      }
    }
  };
});
var variantLeftAccent = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg6.variable]: `colors.${c}.600`,
      [$bg15.variable]: bg.light,
      _dark: {
        [$fg6.variable]: `colors.${c}.200`,
        [$bg15.variable]: bg.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $fg6.reference
    }
  };
});
var variantTopAccent = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  const bg = getBg(props);
  return {
    container: {
      [$fg6.variable]: `colors.${c}.600`,
      [$bg15.variable]: bg.light,
      _dark: {
        [$fg6.variable]: `colors.${c}.200`,
        [$bg15.variable]: bg.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $fg6.reference
    }
  };
});
var variantSolid4 = definePartsStyle25((props) => {
  const { colorScheme: c } = props;
  return {
    container: {
      [$fg6.variable]: `colors.white`,
      [$bg15.variable]: `colors.${c}.600`,
      _dark: {
        [$fg6.variable]: `colors.gray.900`,
        [$bg15.variable]: `colors.${c}.200`
      },
      color: $fg6.reference
    }
  };
});
var variants12 = {
  subtle: variantSubtle2,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid4
};
var alertTheme = defineMultiStyleConfig25({
  baseStyle: baseStyle41,
  variants: variants12,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-Q5ZQE4MD.mjs
var { definePartsStyle: definePartsStyle26, defineMultiStyleConfig: defineMultiStyleConfig26 } = createMultiStyleConfigHelpers(avatarAnatomy.keys);
var $border4 = cssVar("avatar-border-color");
var $bg16 = cssVar("avatar-bg");
var $fs = cssVar("avatar-font-size");
var $size5 = cssVar("avatar-size");
var baseStyleBadge = defineStyle({
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: $border4.reference,
  [$border4.variable]: "white",
  _dark: {
    [$border4.variable]: "colors.gray.800"
  }
});
var baseStyleExcessLabel = defineStyle({
  bg: $bg16.reference,
  fontSize: $fs.reference,
  width: $size5.reference,
  height: $size5.reference,
  lineHeight: "1",
  [$bg16.variable]: "colors.gray.200",
  _dark: {
    [$bg16.variable]: "colors.whiteAlpha.400"
  }
});
var baseStyleContainer5 = defineStyle((props) => {
  const { name, theme: theme2 } = props;
  const bg = name ? randomColor({ string: name }) : "colors.gray.400";
  const isBgDark = isDark(bg)(theme2);
  let color2 = "white";
  if (!isBgDark)
    color2 = "gray.800";
  return {
    bg: $bg16.reference,
    fontSize: $fs.reference,
    color: color2,
    borderColor: $border4.reference,
    verticalAlign: "top",
    width: $size5.reference,
    height: $size5.reference,
    "&:not([data-loaded])": {
      [$bg16.variable]: bg
    },
    [$border4.variable]: "colors.white",
    _dark: {
      [$border4.variable]: "colors.gray.800"
    }
  };
});
var baseStyleLabel5 = defineStyle({
  fontSize: $fs.reference,
  lineHeight: "1"
});
var baseStyle42 = definePartsStyle26((props) => ({
  badge: runIfFn2(baseStyleBadge, props),
  excessLabel: runIfFn2(baseStyleExcessLabel, props),
  container: runIfFn2(baseStyleContainer5, props),
  label: baseStyleLabel5
}));
function getSize4(size2) {
  const themeSize = size2 !== "100%" ? sizes_default[size2] : void 0;
  return definePartsStyle26({
    container: {
      [$size5.variable]: themeSize != null ? themeSize : size2,
      [$fs.variable]: `calc(${themeSize != null ? themeSize : size2} / 2.5)`
    },
    excessLabel: {
      [$size5.variable]: themeSize != null ? themeSize : size2,
      [$fs.variable]: `calc(${themeSize != null ? themeSize : size2} / 2.5)`
    }
  });
}
var sizes23 = {
  "2xs": getSize4(4),
  xs: getSize4(6),
  sm: getSize4(8),
  md: getSize4(12),
  lg: getSize4(16),
  xl: getSize4(24),
  "2xl": getSize4(32),
  full: getSize4("100%")
};
var avatarTheme = defineMultiStyleConfig26({
  baseStyle: baseStyle42,
  sizes: sizes23,
  defaultProps: {
    size: "md"
  }
});

// node_modules/@chakra-ui/theme/dist/chunk-P7SDT22G.mjs
var components = {
  Accordion: accordionTheme,
  Alert: alertTheme,
  Avatar: avatarTheme,
  Badge: badgeTheme,
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  CloseButton: closeButtonTheme,
  Code: codeTheme,
  Container: containerTheme,
  Divider: dividerTheme,
  Drawer: drawerTheme,
  Editable: editableTheme,
  Form: formTheme,
  FormError: formErrorTheme,
  FormLabel: formLabelTheme,
  Heading: headingTheme,
  Input: inputTheme,
  Kbd: kbdTheme,
  Link: linkTheme,
  List: listTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  NumberInput: numberInputTheme,
  PinInput: pinInputTheme,
  Popover: popoverTheme,
  Progress: progressTheme,
  Radio: radioTheme,
  Select: selectTheme,
  Skeleton: skeletonTheme,
  SkipLink: skipLinkTheme,
  Slider: sliderTheme,
  Spinner: spinnerTheme,
  Stat: statTheme,
  Switch: switchTheme,
  Table: tableTheme,
  Tabs: tabsTheme,
  Tag: tagTheme,
  Textarea: textareaTheme,
  Tooltip: tooltipTheme,
  Card: cardTheme,
  Stepper: stepperTheme
};

// node_modules/@chakra-ui/theme/dist/chunk-5GOSZLB7.mjs
var semanticTokens = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
};

// node_modules/@chakra-ui/theme/dist/chunk-3F7U33P5.mjs
var styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
};

// node_modules/@chakra-ui/theme/dist/index.mjs
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = {
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config
};
var baseTheme = {
  semanticTokens,
  direction,
  components: {},
  ...foundations,
  styles,
  config
};

// node_modules/@chakra-ui/theme-utils/dist/chunk-LIR5QAZY.mjs
var import_lodash5 = __toESM(require_lodash(), 1);
function isFunction3(value) {
  return typeof value === "function";
}
function pipe2(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
var createExtendTheme = (theme2) => {
  return function extendTheme2(...extensions) {
    let overrides = [...extensions];
    let activeTheme = extensions[extensions.length - 1];
    if (isChakraTheme(activeTheme) && // this ensures backward compatibility
    // previously only `extendTheme(override, activeTheme?)` was allowed
    overrides.length > 1) {
      overrides = overrides.slice(0, overrides.length - 1);
    } else {
      activeTheme = theme2;
    }
    return pipe2(
      ...overrides.map(
        (extension) => (prevTheme) => isFunction3(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension)
      )
    )(activeTheme);
  };
};
var extendTheme = createExtendTheme(theme);
var extendBaseTheme = createExtendTheme(baseTheme);
function mergeThemeOverride(...overrides) {
  return (0, import_lodash5.default)({}, ...overrides, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object2) {
  if ((isFunction3(source) || isFunction3(override)) && Object.prototype.hasOwnProperty.call(object2, key)) {
    return (...args) => {
      const sourceValue = isFunction3(source) ? source(...args) : source;
      const overrideValue = isFunction3(override) ? override(...args) : override;
      return (0, import_lodash5.default)({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  return void 0;
}

// node_modules/@chakra-ui/theme-utils/dist/chunk-7FV6Z5GW.mjs
function withDefaultColorScheme({
  colorScheme,
  components: components2
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components2)) {
      names = components2;
    } else if (isObject(components2)) {
      names = Object.keys(components2);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withColorScheme = {
            defaultProps: {
              colorScheme
            }
          };
          return [componentName, withColorScheme];
        })
      )
    });
  };
}

// node_modules/@chakra-ui/theme-utils/dist/chunk-5IM46G4H.mjs
function withDefaultSize({
  size: size2,
  components: components2
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components2)) {
      names = components2;
    } else if (isObject(components2)) {
      names = Object.keys(components2);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withSize = {
            defaultProps: {
              size: size2
            }
          };
          return [componentName, withSize];
        })
      )
    });
  };
}

// node_modules/@chakra-ui/theme-utils/dist/chunk-5UFXUR4J.mjs
function withDefaultVariant({
  variant,
  components: components2
}) {
  return (theme2) => {
    let names = Object.keys(theme2.components || {});
    if (Array.isArray(components2)) {
      names = components2;
    } else if (isObject(components2)) {
      names = Object.keys(components2);
    }
    return mergeThemeOverride(theme2, {
      components: Object.fromEntries(
        names.map((componentName) => {
          const withVariant = {
            defaultProps: {
              variant
            }
          };
          return [componentName, withVariant];
        })
      )
    });
  };
}

// node_modules/@chakra-ui/theme-utils/dist/chunk-PE3QADR6.mjs
function pipe3(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function withDefaultProps({
  defaultProps: { colorScheme, variant, size: size2 },
  components: components2
}) {
  const identity = (t2) => t2;
  const fns = [
    colorScheme ? withDefaultColorScheme({ colorScheme, components: components2 }) : identity,
    size2 ? withDefaultSize({ size: size2, components: components2 }) : identity,
    variant ? withDefaultVariant({ variant, components: components2 }) : identity
  ];
  return (theme2) => mergeThemeOverride(pipe3(...fns)(theme2));
}

// node_modules/@chakra-ui/utils/dist/chunk-O3SWHQEE.mjs
function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isHTMLElement(el) {
  var _a8;
  if (!isElement(el)) {
    return false;
  }
  const win = (_a8 = el.ownerDocument.defaultView) != null ? _a8 : window;
  return el instanceof win.HTMLElement;
}
function getOwnerWindow(node3) {
  var _a8, _b5;
  return isElement(node3) ? (_b5 = (_a8 = getOwnerDocument(node3)) == null ? void 0 : _a8.defaultView) != null ? _b5 : window : window;
}
function getOwnerDocument(node3) {
  var _a8;
  return isElement(node3) ? (_a8 = node3.ownerDocument) != null ? _a8 : document : document;
}
function getEventWindow(event) {
  var _a8;
  return (_a8 = event.view) != null ? _a8 : window;
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser2 = canUseDOM();
function getActiveElement(node3) {
  const doc = getOwnerDocument(node3);
  return doc == null ? void 0 : doc.activeElement;
}
function contains(parent, child) {
  if (!parent)
    return false;
  return parent === child || parent.contains(child);
}
function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return () => {
    target.removeEventListener(eventName, handler, options);
  };
}

// node_modules/@chakra-ui/utils/dist/chunk-DGFLLHTM.mjs
function getUserAgentBrowser(navigator2) {
  const { userAgent: ua, vendor } = navigator2;
  const android = /(android)/i.test(ua);
  switch (true) {
    case /CriOS/.test(ua):
      return "Chrome for iOS";
    case /Edg\//.test(ua):
      return "Edge";
    case (android && /Silk\//.test(ua)):
      return "Silk";
    case (/Chrome/.test(ua) && /Google Inc/.test(vendor)):
      return "Chrome";
    case /Firefox\/\d+\.\d+$/.test(ua):
      return "Firefox";
    case android:
      return "AOSP";
    case /MSIE|Trident/.test(ua):
      return "IE";
    case (/Safari/.test(navigator2.userAgent) && /Apple Computer/.test(ua)):
      return "Safari";
    case /AppleWebKit/.test(ua):
      return "WebKit";
    default:
      return null;
  }
}
function detectBrowser(browser) {
  if (!isBrowser2)
    return false;
  return getUserAgentBrowser(window.navigator) === browser;
}

// node_modules/@chakra-ui/utils/dist/chunk-YTQ3XZ3T.mjs
var import_lodash6 = __toESM(require_lodash(), 1);
function omit2(object2, keys2) {
  const result = {};
  Object.keys(object2).forEach((key) => {
    if (keys2.includes(key))
      return;
    result[key] = object2[key];
  });
  return result;
}
function get2(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize3 = (fn2) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn2(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn2(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet2 = memoize3(get2);
function objectFilter(object2, fn2) {
  const result = {};
  Object.keys(object2).forEach((key) => {
    const value = object2[key];
    const shouldPass = fn2(value, key, object2);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = (object2) => objectFilter(object2, (val) => val !== null && val !== void 0);

// node_modules/@chakra-ui/utils/dist/chunk-Y5FGD7DM.mjs
function isNumber(value) {
  return typeof value === "number";
}
function isFunction4(value) {
  return typeof value === "function";
}
var __DEV__ = true;
function isRefObject(val) {
  return "current" in val;
}

// node_modules/@chakra-ui/utils/dist/chunk-M3TFMUOL.mjs
function runIfFn3(valueOrFn, ...args) {
  return isFunction4(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
function callAllHandlers2(...fns) {
  return function func2(event) {
    fns.some((fn2) => {
      fn2 == null ? void 0 : fn2(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}
function once(fn2) {
  let result;
  return function func2(...args) {
    if (fn2) {
      result = fn2.apply(this, args);
      fn2 = null;
    }
    return result;
  };
}
var noop2 = () => {
};
var warn2 = once((options) => () => {
  const { condition, message } = options;
  if (condition && __DEV__) {
    console.warn(message);
  }
});
var error = once((options) => () => {
  const { condition, message } = options;
  if (condition && __DEV__) {
    console.error(message);
  }
});
var pipe4 = (...fns) => (v) => fns.reduce((a, b) => b(a), v);
var distance1D = (a, b) => Math.abs(a - b);
var isPoint = (point) => "x" in point && "y" in point;
function distance(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return distance1D(a, b);
  }
  if (isPoint(a) && isPoint(b)) {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
  }
  return 0;
}

// node_modules/@chakra-ui/utils/dist/chunk-YAFHXCR4.mjs
var minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
var maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;

// node_modules/@chakra-ui/utils/dist/chunk-LCE7F24A.mjs
function isMouseEvent(event) {
  const win = getEventWindow(event);
  if (typeof win.PointerEvent !== "undefined" && event instanceof win.PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof win.MouseEvent;
}
function isTouchEvent(event) {
  const hasTouches = !!event.touches;
  return hasTouches;
}
function filterPrimaryPointer(eventHandler) {
  return (event) => {
    const win = getEventWindow(event);
    const isMouseEvent22 = event instanceof win.MouseEvent;
    const isPrimaryPointer = !isMouseEvent22 || isMouseEvent22 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType = "page") {
  const primaryTouch = e.touches[0] || e.changedTouches[0];
  const point = primaryTouch || defaultPagePoint;
  return {
    x: point[`${pointType}X`],
    y: point[`${pointType}Y`]
  };
}
function pointFromMouse(point, pointType = "page") {
  return {
    x: point[`${pointType}X`],
    y: point[`${pointType}Y`]
  };
}
function extractEventInfo(event, pointType = "page") {
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
var wrapPointerEventHandler = (handler, shouldFilterPrimaryPointer = false) => {
  const listener = (event) => handler(event, extractEventInfo(event));
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};
var supportsPointerEvents = () => isBrowser2 && window.onpointerdown === null;
var supportsTouchEvents = () => isBrowser2 && window.ontouchstart === null;
var supportsMouseEvents = () => isBrowser2 && window.onmousedown === null;
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  }
  if (supportsTouchEvents()) {
    return touchEventNames[name];
  }
  if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(
    target,
    getPointerEventName(eventName),
    wrapPointerEventHandler(handler, eventName === "pointerdown"),
    options
  );
}
function isMultiTouchEvent(event) {
  return isTouchEvent(event) && event.touches.length > 1;
}

// node_modules/@chakra-ui/utils/dist/chunk-NHABU752.mjs
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/framesync/dist/es/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// node_modules/framesync/dist/es/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1)
        toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
var getFrameData = () => frame;
var es_default = sync;

// node_modules/@chakra-ui/utils/dist/chunk-SV3JYFGC.mjs
var PanSession = class {
  constructor(event, handlers2, threshold) {
    __publicField(this, "history", []);
    __publicField(this, "startEvent", null);
    __publicField(this, "lastEvent", null);
    __publicField(this, "lastEventInfo", null);
    __publicField(this, "handlers", {});
    __publicField(this, "removeListeners", noop2);
    __publicField(this, "threshold", 3);
    __publicField(this, "win");
    __publicField(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const info2 = getPanInfo(this.lastEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { timestamp: timestamp2 } = getFrameData();
      this.history.push({ ...info2.point, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart == null ? void 0 : onStart(this.lastEvent, info2);
        this.startEvent = this.lastEvent;
      }
      onMove == null ? void 0 : onMove(this.lastEvent, info2);
    });
    __publicField(this, "onPointerMove", (event2, info2) => {
      this.lastEvent = event2;
      this.lastEventInfo = info2;
      if (isMouseEvent(event2) && event2.buttons === 0) {
        this.onPointerUp(event2, info2);
        return;
      }
      es_default.update(this.updatePoint, true);
    });
    __publicField(this, "onPointerUp", (event2, info2) => {
      const panInfo = getPanInfo(info2, this.history);
      const { onEnd, onSessionEnd } = this.handlers;
      onSessionEnd == null ? void 0 : onSessionEnd(event2, panInfo);
      this.end();
      if (!onEnd || !this.startEvent)
        return;
      onEnd == null ? void 0 : onEnd(event2, panInfo);
    });
    this.win = getEventWindow(event);
    if (isMultiTouchEvent(event))
      return;
    this.handlers = handlers2;
    if (threshold) {
      this.threshold = threshold;
    }
    event.stopPropagation();
    event.preventDefault();
    const info = extractEventInfo(event);
    const { timestamp } = getFrameData();
    this.history = [{ ...info.point, timestamp }];
    const { onSessionStart } = handlers2;
    onSessionStart == null ? void 0 : onSessionStart(event, getPanInfo(info, this.history));
    this.removeListeners = pipe4(
      addPointerEvent(this.win, "pointermove", this.onPointerMove),
      addPointerEvent(this.win, "pointerup", this.onPointerUp),
      addPointerEvent(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(handlers2) {
    this.handlers = handlers2;
  }
  end() {
    var _a8;
    (_a8 = this.removeListeners) == null ? void 0 : _a8.call(this);
    cancelSync.update(this.updatePoint);
  }
};
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function startPanPoint(history) {
  return history[0];
}
function lastPanPoint(history) {
  return history[history.length - 1];
}
function getPanInfo(info, history) {
  return {
    point: info.point,
    delta: subtractPoint(info.point, lastPanPoint(history)),
    offset: subtractPoint(info.point, startPanPoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
var toMilliseconds = (seconds) => seconds * 1e3;
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > toMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/@chakra-ui/utils/dist/chunk-FGAEJGLB.mjs
var breakpoints2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);

// node_modules/@chakra-ui/utils/dist/chunk-P6S57EDQ.mjs
var hasTabIndex = (element) => element.hasAttribute("tabindex");
var hasNegativeTabIndex = (element) => hasTabIndex(element) && element.tabIndex === -1;
function isDisabled(element) {
  return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}
function isInputElement(element) {
  return isHTMLElement(element) && element.localName === "input" && "select" in element;
}
function isActiveElement(element) {
  const doc = isHTMLElement(element) ? getOwnerDocument(element) : document;
  return doc.activeElement === element;
}
function hasFocusWithin(element) {
  if (!document.activeElement)
    return false;
  return element.contains(document.activeElement);
}
function isHidden(element) {
  if (element.parentElement && isHidden(element.parentElement))
    return true;
  return element.hidden;
}
function isContentEditable(element) {
  const value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}
function isFocusable(element) {
  if (!isHTMLElement(element) || isHidden(element) || isDisabled(element)) {
    return false;
  }
  const { localName } = element;
  const focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0)
    return true;
  const others2 = {
    a: () => element.hasAttribute("href"),
    audio: () => element.hasAttribute("controls"),
    video: () => element.hasAttribute("controls")
  };
  if (localName in others2) {
    return others2[localName]();
  }
  if (isContentEditable(element))
    return true;
  return hasTabIndex(element);
}
function isTabbable(element) {
  if (!element)
    return false;
  return isHTMLElement(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}

// node_modules/@chakra-ui/utils/dist/chunk-5LUSIWEA.mjs
var focusableElList = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];
var focusableElSelector = focusableElList.join();
var isVisible = (el) => el.offsetWidth > 0 && el.offsetHeight > 0;
function getAllFocusable(container2) {
  const focusableEls = Array.from(
    container2.querySelectorAll(focusableElSelector)
  );
  focusableEls.unshift(container2);
  return focusableEls.filter((el) => isFocusable(el) && isVisible(el));
}

// node_modules/@chakra-ui/utils/dist/chunk-QKXRP2IX.mjs
function focus(element, options = {}) {
  const {
    isActive = isActiveElement,
    nextTick,
    preventScroll = true,
    selectTextIfInput = true
  } = options;
  if (!element || isActive(element))
    return -1;
  function triggerFocus() {
    if (!element) {
      warn2({
        condition: true,
        message: "[chakra-ui]: can't call focus() on `null` or `undefined` element"
      });
      return;
    }
    if (supportsPreventScroll()) {
      element.focus({ preventScroll });
    } else {
      element.focus();
      if (preventScroll) {
        const scrollableElements = getScrollableElements(element);
        restoreScrollPosition(scrollableElements);
      }
    }
    if (selectTextIfInput) {
      if (isInputElement(element)) {
        element.select();
      } else if ("setSelectionRange" in element) {
        const el = element;
        el.setSelectionRange(el.value.length, el.value.length);
      }
    }
  }
  if (nextTick) {
    return requestAnimationFrame(triggerFocus);
  }
  triggerFocus();
  return -1;
}
var supportsPreventScrollCached = null;
function supportsPreventScroll() {
  if (supportsPreventScrollCached == null) {
    supportsPreventScrollCached = false;
    try {
      const div = document.createElement("div");
      div.focus({
        get preventScroll() {
          supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return supportsPreventScrollCached;
}
function getScrollableElements(element) {
  var _a8;
  const doc = getOwnerDocument(element);
  const win = (_a8 = doc.defaultView) != null ? _a8 : window;
  let parent = element.parentNode;
  const scrollableElements = [];
  const rootScrollingElement = doc.scrollingElement || doc.documentElement;
  while (parent instanceof win.HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    }
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof win.HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  }
  return scrollableElements;
}
function restoreScrollPosition(scrollableElements) {
  for (const { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix3 = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix3);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix3, ": ").concat(provided) : prefix3;
  throw new Error(value);
}

// node_modules/css-box-model/dist/css-box-model.esm.js
var getRect = function getRect2(_ref2) {
  var top2 = _ref2.top, right2 = _ref2.right, bottom2 = _ref2.bottom, left2 = _ref2.left;
  var width = right2 - left2;
  var height = bottom2 - top2;
  var rect = {
    top: top2,
    right: right2,
    bottom: bottom2,
    left: left2,
    width,
    height,
    x: left2,
    y: top2,
    center: {
      x: (right2 + left2) / 2,
      y: (bottom2 + top2) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border2 = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border2));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border: border2,
    padding
  };
};
var parse2 = function parse3(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? true ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
  return result;
};
var calculateBox = function calculateBox2(borderBox, styles2) {
  var margin = {
    top: parse2(styles2.marginTop),
    right: parse2(styles2.marginRight),
    bottom: parse2(styles2.marginBottom),
    left: parse2(styles2.marginLeft)
  };
  var padding = {
    top: parse2(styles2.paddingTop),
    right: parse2(styles2.paddingRight),
    bottom: parse2(styles2.paddingBottom),
    left: parse2(styles2.paddingLeft)
  };
  var border2 = {
    top: parse2(styles2.borderTopWidth),
    right: parse2(styles2.borderRightWidth),
    bottom: parse2(styles2.borderBottomWidth),
    left: parse2(styles2.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border: border2
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles2 = window.getComputedStyle(el);
  return calculateBox(borderBox, styles2);
};

// node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs
var import_react10 = __toESM(require_react(), 1);
var import_react_fast_compare = __toESM(require_react_fast_compare(), 1);
function useStyleConfigImpl(themeKey, props = {}) {
  var _a8;
  const { styleConfig: styleConfigProp, ...rest } = props;
  const { theme: theme2, colorMode } = useChakra();
  const themeStyleConfig = themeKey ? memoizedGet2(theme2, `components.${themeKey}`) : void 0;
  const styleConfig = styleConfigProp || themeStyleConfig;
  const mergedProps = (0, import_lodash6.default)(
    { theme: theme2, colorMode },
    (_a8 = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _a8 : {},
    filterUndefined(omit2(rest, ["children"]))
  );
  const stylesRef = (0, import_react10.useRef)({});
  if (styleConfig) {
    const getStyles4 = resolveStyleConfig(styleConfig);
    const styles2 = getStyles4(mergedProps);
    const isStyleEqual = (0, import_react_fast_compare.default)(stylesRef.current, styles2);
    if (!isStyleEqual) {
      stylesRef.current = styles2;
    }
  }
  return stylesRef.current;
}
function useStyleConfig(themeKey, props = {}) {
  return useStyleConfigImpl(themeKey, props);
}
function useMultiStyleConfig(themeKey, props = {}) {
  return useStyleConfigImpl(themeKey, props);
}
function useComponentStyles__unstable(themeKey, props) {
  var _a8;
  const { baseConfig, ...restProps } = props;
  const { theme: theme2 } = useChakra();
  const overrides = (_a8 = theme2.components) == null ? void 0 : _a8[themeKey];
  const styleConfig = overrides ? mergeThemeOverride(overrides, baseConfig) : baseConfig;
  return useStyleConfigImpl(null, {
    ...restProps,
    styleConfig
  });
}

// node_modules/@chakra-ui/system/dist/chunk-FDQH4LQI.mjs
var allPropNames = /* @__PURE__ */ new Set([
  ...propNames,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]);
var validHTMLProps = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function shouldForwardProp(prop) {
  return validHTMLProps.has(prop) || !allPropNames.has(prop);
}

// node_modules/@chakra-ui/object-utils/dist/chunk-OLTBUDV5.mjs
function assignAfter(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  const result = { ...target };
  for (const nextSource of sources) {
    if (nextSource == null)
      continue;
    for (const nextKey in nextSource) {
      if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey))
        continue;
      if (nextKey in result)
        delete result[nextKey];
      result[nextKey] = nextSource[nextKey];
    }
  }
  return result;
}

// node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs
function compact(object2) {
  const clone = Object.assign({}, object2);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}

// node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.development.esm.js
var React4 = __toESM(require_react());
init_emotion_is_prop_valid_esm();
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var isDevelopment4 = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var Insertion5 = function Insertion6(_ref2) {
  var cache = _ref2.cache, serialized = _ref2.serialized, isStringTag = _ref2.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var createStyled = function createStyled2(tag, options) {
  {
    if (tag === void 0) {
      throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");
    }
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      if (args[0][0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
      }
      styles2.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (args[0][i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
        }
        styles2.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = React4.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as") continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      if (ref) {
        newProps.ref = ref;
      }
      return React4.createElement(React4.Fragment, null, React4.createElement(Insertion5, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), React4.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && isDevelopment4) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};

// node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js
var import_react12 = __toESM(require_react());
init_emotion_is_prop_valid_esm();
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});

// node_modules/@chakra-ui/system/dist/chunk-5PL47M24.mjs
var import_react14 = __toESM(require_react(), 1);
var _a6;
var emotion_styled = (_a6 = newStyled.default) != null ? _a6 : newStyled;
var toCSSObject = ({ baseStyle: baseStyle44 }) => (props) => {
  const { theme: theme2, css: cssProp, __css, sx, ...rest } = props;
  const styleProps2 = objectFilter(rest, (_, prop) => isStyleProp(prop));
  const finalBaseStyle = runIfFn3(baseStyle44, props);
  const finalStyles = assignAfter(
    {},
    __css,
    finalBaseStyle,
    filterUndefined(styleProps2),
    sx
  );
  const computedCSS = css3(finalStyles)(props.theme);
  return cssProp ? [computedCSS, cssProp] : computedCSS;
};
function styled(component, options) {
  const { baseStyle: baseStyle44, ...styledOptions } = options != null ? options : {};
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  const styleObject = toCSSObject({ baseStyle: baseStyle44 });
  const Component = emotion_styled(
    component,
    styledOptions
  )(styleObject);
  const chakraComponent = import_react14.default.forwardRef(function ChakraComponent(props, ref) {
    const { colorMode, forced } = useColorMode();
    return import_react14.default.createElement(Component, {
      ref,
      "data-theme": forced ? colorMode : void 0,
      ...props
    });
  });
  return chakraComponent;
}

// node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs
function factory() {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(styled, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(target, thisArg, argArray) {
      return styled(...argArray);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
var chakra = factory();

// node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs
var import_react15 = __toESM(require_react(), 1);
function forwardRef3(component) {
  return (0, import_react15.forwardRef)(component);
}

// node_modules/@chakra-ui/react-utils/dist/chunk-IH2MM24A.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react-utils/dist/chunk-ITIKTQWJ.mjs
var import_react17 = __toESM(require_react(), 1);
function createContext4(options = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  const Context = (0, import_react17.createContext)(void 0);
  Context.displayName = name;
  function useContext9() {
    var _a8;
    const context = (0, import_react17.useContext)(Context);
    if (!context && strict) {
      const error2 = new Error(errorMessage);
      error2.name = "ContextError";
      (_a8 = Error.captureStackTrace) == null ? void 0 : _a8.call(Error, error2, useContext9);
      throw error2;
    }
    return context;
  }
  return [
    Context.Provider,
    useContext9,
    Context
  ];
}

// node_modules/@chakra-ui/system/dist/chunk-MFVQSVQB.mjs
var import_react19 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function ThemeProvider3(props) {
  const { cssVarsRoot, theme: theme2, children } = props;
  const computedTheme = (0, import_react19.useMemo)(() => toCSSVar(theme2), [theme2]);
  return (0, import_jsx_runtime6.jsxs)(ThemeProvider, { theme: computedTheme, children: [
    (0, import_jsx_runtime6.jsx)(CSSVars, { root: cssVarsRoot }),
    children
  ] });
}
function CSSVars({ root = ":host, :root" }) {
  const selector = [root, `[data-theme]`].join(",");
  return (0, import_jsx_runtime6.jsx)(Global, { styles: (theme2) => ({ [selector]: theme2.__cssVars }) });
}
var [StylesProvider, useStyles] = createContext4({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function createStylesContext(componentName) {
  return createContext4({
    name: `${componentName}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${componentName} />" `
  });
}
function GlobalStyle() {
  const { colorMode } = useColorMode();
  return (0, import_jsx_runtime6.jsx)(
    Global,
    {
      styles: (theme2) => {
        const styleObjectOrFn = memoizedGet2(theme2, "styles.global");
        const globalStyles = runIfFn3(styleObjectOrFn, { theme: theme2, colorMode });
        if (!globalStyles)
          return void 0;
        const styles2 = css3(globalStyles)(theme2);
        return styles2;
      }
    }
  );
}

// node_modules/@chakra-ui/react-env/dist/chunk-VMD3UMGK.mjs
var import_react21 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var EnvironmentContext = (0, import_react21.createContext)({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
EnvironmentContext.displayName = "EnvironmentContext";
function useEnvironment({ defer } = {}) {
  const [, forceUpdate] = (0, import_react21.useReducer)((c) => c + 1, 0);
  useSafeLayoutEffect(() => {
    if (!defer)
      return;
    forceUpdate();
  }, [defer]);
  return (0, import_react21.useContext)(EnvironmentContext);
}
function EnvironmentProvider(props) {
  const { children, environment: environmentProp, disabled } = props;
  const ref = (0, import_react21.useRef)(null);
  const context = (0, import_react21.useMemo)(() => {
    if (environmentProp)
      return environmentProp;
    return {
      getDocument: () => {
        var _a8, _b5;
        return (_b5 = (_a8 = ref.current) == null ? void 0 : _a8.ownerDocument) != null ? _b5 : document;
      },
      getWindow: () => {
        var _a8, _b5;
        return (_b5 = (_a8 = ref.current) == null ? void 0 : _a8.ownerDocument.defaultView) != null ? _b5 : window;
      }
    };
  }, [environmentProp]);
  const showSpan = !disabled || !environmentProp;
  return (0, import_jsx_runtime7.jsxs)(EnvironmentContext.Provider, { value: context, children: [
    children,
    showSpan && (0, import_jsx_runtime7.jsx)("span", { id: "__chakra_env", hidden: true, ref })
  ] });
}
EnvironmentProvider.displayName = "EnvironmentProvider";

// node_modules/@chakra-ui/provider/dist/chunk-3DDHO3UN.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var ChakraProvider = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetScope,
    resetCSS = true,
    theme: theme2 = {},
    environment,
    cssVarsRoot,
    disableEnvironment,
    disableGlobalStyle
  } = props;
  const _children = (0, import_jsx_runtime8.jsx)(
    EnvironmentProvider,
    {
      environment,
      disabled: disableEnvironment,
      children
    }
  );
  return (0, import_jsx_runtime8.jsx)(ThemeProvider3, { theme: theme2, cssVarsRoot, children: (0, import_jsx_runtime8.jsxs)(
    ColorModeProvider,
    {
      colorModeManager,
      options: theme2.config,
      children: [
        resetCSS ? (0, import_jsx_runtime8.jsx)(CSSReset, { scope: resetScope }) : (0, import_jsx_runtime8.jsx)(CSSPolyfill, {}),
        !disableGlobalStyle && (0, import_jsx_runtime8.jsx)(GlobalStyle, {}),
        portalZIndex ? (0, import_jsx_runtime8.jsx)(PortalManager, { zIndex: portalZIndex, children: _children }) : _children
      ]
    }
  ) });
};

// node_modules/@chakra-ui/toast/dist/chunk-LDADOVIM.mjs
var findById = (arr, id) => arr.find((toast) => toast.id === id);
function findToast(toasts, id) {
  const position3 = getToastPosition(toasts, id);
  const index = position3 ? toasts[position3].findIndex((toast) => toast.id === id) : -1;
  return {
    position: position3,
    index
  };
}
function getToastPosition(toasts, id) {
  for (const [position3, values] of Object.entries(toasts)) {
    if (findById(values, id)) {
      return position3;
    }
  }
}
function getToastStyle(position3) {
  const isRighty = position3.includes("right");
  const isLefty = position3.includes("left");
  let alignItems = "center";
  if (isRighty)
    alignItems = "flex-end";
  if (isLefty)
    alignItems = "flex-start";
  return {
    display: "flex",
    flexDirection: "column",
    alignItems
  };
}
function getToastListStyle(position3) {
  const isTopOrBottom = position3 === "top" || position3 === "bottom";
  const margin = isTopOrBottom ? "0 auto" : void 0;
  const top2 = position3.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0;
  const bottom2 = position3.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0;
  const right2 = !position3.includes("left") ? "env(safe-area-inset-right, 0px)" : void 0;
  const left2 = !position3.includes("right") ? "env(safe-area-inset-left, 0px)" : void 0;
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin,
    top: top2,
    bottom: bottom2,
    right: right2,
    left: left2
  };
}

// node_modules/@chakra-ui/react-use-timeout/dist/index.mjs
var import_react23 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs
var import_react22 = __toESM(require_react(), 1);
function useCallbackRef(callback, deps = []) {
  const callbackRef = (0, import_react22.useRef)(callback);
  (0, import_react22.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react22.useCallback)((...args) => {
    var _a8;
    return (_a8 = callbackRef.current) == null ? void 0 : _a8.call(callbackRef, ...args);
  }, deps);
}

// node_modules/@chakra-ui/react-use-timeout/dist/index.mjs
function useTimeout(callback, delay) {
  const fn2 = useCallbackRef(callback);
  (0, import_react23.useEffect)(() => {
    if (delay == null)
      return void 0;
    let timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn2();
    }, delay);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn2]);
}

// node_modules/@chakra-ui/react-use-update-effect/dist/index.mjs
var import_react24 = __toESM(require_react(), 1);
function useUpdateEffect(callback, deps) {
  const renderCycleRef = (0, import_react24.useRef)(false);
  const effectCycleRef = (0, import_react24.useRef)(false);
  (0, import_react24.useEffect)(() => {
    const mounted = renderCycleRef.current;
    const run = mounted && effectCycleRef.current;
    if (run) {
      return callback();
    }
    effectCycleRef.current = true;
  }, deps);
  (0, import_react24.useEffect)(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
}

// node_modules/@chakra-ui/toast/dist/chunk-VXESY33O.mjs
var import_react25 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var toastMotionVariants = {
  initial: (props) => {
    const { position: position3 } = props;
    const dir = ["top", "bottom"].includes(position3) ? "y" : "x";
    let factor = ["top-right", "bottom-right"].includes(position3) ? 1 : -1;
    if (position3 === "bottom")
      factor = 1;
    return {
      opacity: 0,
      [dir]: factor * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};
var ToastComponent = (0, import_react25.memo)((props) => {
  const {
    id,
    message,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position: position3 = "bottom",
    duration = 5e3,
    containerStyle,
    motionVariants: motionVariants2 = toastMotionVariants,
    toastSpacing = "0.5rem"
  } = props;
  const [delay, setDelay] = (0, import_react25.useState)(duration);
  const isPresent = useIsPresent();
  useUpdateEffect(() => {
    if (!isPresent) {
      onCloseComplete == null ? void 0 : onCloseComplete();
    }
  }, [isPresent]);
  useUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);
  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);
  const close = () => {
    if (isPresent)
      onRequestRemove();
  };
  (0, import_react25.useEffect)(() => {
    if (isPresent && requestClose) {
      onRequestRemove();
    }
  }, [isPresent, requestClose, onRequestRemove]);
  useTimeout(close, delay);
  const containerStyles = (0, import_react25.useMemo)(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: toastSpacing,
      ...containerStyle
    }),
    [containerStyle, toastSpacing]
  );
  const toastStyle = (0, import_react25.useMemo)(() => getToastStyle(position3), [position3]);
  return (0, import_jsx_runtime9.jsx)(
    motion.div,
    {
      layout: true,
      className: "chakra-toast",
      variants: motionVariants2,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: onMouseEnter,
      onHoverEnd: onMouseLeave,
      custom: { position: position3 },
      style: toastStyle,
      children: (0, import_jsx_runtime9.jsx)(
        chakra.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: containerStyles,
          children: runIfFn(message, { id, onClose: close })
        }
      )
    }
  );
});
ToastComponent.displayName = "ToastComponent";

// node_modules/@chakra-ui/toast/dist/chunk-LHPMGMGT.mjs
function getToastPlacement(position3, dir) {
  var _a8;
  const computedPosition = position3 != null ? position3 : "bottom";
  const logicals2 = {
    "top-start": { ltr: "top-left", rtl: "top-right" },
    "top-end": { ltr: "top-right", rtl: "top-left" },
    "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
    "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" }
  };
  const logical2 = logicals2[computedPosition];
  return (_a8 = logical2 == null ? void 0 : logical2[dir]) != null ? _a8 : computedPosition;
}

// node_modules/@chakra-ui/icon/dist/chunk-2GBDXOMA.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var fallbackIcon = {
  path: (0, import_jsx_runtime10.jsxs)("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    (0, import_jsx_runtime10.jsx)(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    (0, import_jsx_runtime10.jsx)(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    (0, import_jsx_runtime10.jsx)("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
};
var Icon = forwardRef3((props, ref) => {
  const {
    as: element,
    viewBox,
    color: color2 = "currentColor",
    focusable = false,
    children,
    className,
    __css,
    ...rest
  } = props;
  const _className = cx("chakra-icon", className);
  const customStyles = useStyleConfig("Icon", props);
  const styles2 = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: color2,
    ...__css,
    ...customStyles
  };
  const shared = {
    ref,
    focusable,
    className: _className,
    __css: styles2
  };
  const _viewBox = viewBox != null ? viewBox : fallbackIcon.viewBox;
  if (element && typeof element !== "string") {
    return (0, import_jsx_runtime10.jsx)(chakra.svg, { as: element, ...shared, ...rest });
  }
  const _path = children != null ? children : fallbackIcon.path;
  return (0, import_jsx_runtime10.jsx)(chakra.svg, { verticalAlign: "middle", viewBox: _viewBox, ...shared, ...rest, children: _path });
});
Icon.displayName = "Icon";

// node_modules/@chakra-ui/icon/dist/chunk-DEQZ7DVA.mjs
var import_react26 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function createIcon(options) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    displayName,
    defaultProps: defaultProps2 = {}
  } = options;
  const path = import_react26.Children.toArray(options.path);
  const Comp = forwardRef3((props, ref) => (0, import_jsx_runtime11.jsx)(Icon, { ref, viewBox, ...defaultProps2, ...props, children: path.length ? path : (0, import_jsx_runtime11.jsx)("path", { fill: "currentColor", d: pathDefinition }) }));
  Comp.displayName = displayName;
  return Comp;
}

// node_modules/@chakra-ui/alert/dist/chunk-NEDBTDT2.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function CheckIcon(props) {
  return (0, import_jsx_runtime12.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime12.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function InfoIcon(props) {
  return (0, import_jsx_runtime12.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime12.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function WarningIcon(props) {
  return (0, import_jsx_runtime12.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime12.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}

// node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var Spinner = forwardRef3((props, ref) => {
  const styles2 = useStyleConfig("Spinner", props);
  const {
    label = "Loading...",
    thickness = "2px",
    speed = "0.45s",
    emptyColor = "transparent",
    className,
    ...rest
  } = omitThemingProps(props);
  const _className = cx("chakra-spinner", className);
  const spinnerStyles = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: `${spin} ${speed} linear infinite`,
    ...styles2
  };
  return (0, import_jsx_runtime13.jsx)(
    chakra.div,
    {
      ref,
      __css: spinnerStyles,
      className: _className,
      ...rest,
      children: label && (0, import_jsx_runtime13.jsx)(chakra.span, { srOnly: true, children: label })
    }
  );
});
Spinner.displayName = "Spinner";

// node_modules/@chakra-ui/alert/dist/chunk-XCES3W5V.mjs
var [AlertProvider, useAlertContext] = createContext2({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
});
var [AlertStylesProvider, useAlertStyles] = createContext2({
  name: `AlertStylesContext`,
  hookName: `useAlertStyles`,
  providerName: "<Alert />"
});
var STATUSES = {
  info: { icon: InfoIcon, colorScheme: "blue" },
  warning: { icon: WarningIcon, colorScheme: "orange" },
  success: { icon: CheckIcon, colorScheme: "green" },
  error: { icon: WarningIcon, colorScheme: "red" },
  loading: { icon: Spinner, colorScheme: "blue" }
};
function getStatusColorScheme(status) {
  return STATUSES[status].colorScheme;
}
function getStatusIcon(status) {
  return STATUSES[status].icon;
}

// node_modules/@chakra-ui/alert/dist/chunk-CUKBNH6U.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var AlertDescription = forwardRef3(
  function AlertDescription2(props, ref) {
    const styles2 = useAlertStyles();
    const { status } = useAlertContext();
    const descriptionStyles = {
      display: "inline",
      ...styles2.description
    };
    return (0, import_jsx_runtime14.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__desc", props.className),
        __css: descriptionStyles
      }
    );
  }
);
AlertDescription.displayName = "AlertDescription";

// node_modules/@chakra-ui/alert/dist/chunk-ALC6QPCI.mjs
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
function AlertIcon(props) {
  const { status } = useAlertContext();
  const BaseIcon = getStatusIcon(status);
  const styles2 = useAlertStyles();
  const css4 = status === "loading" ? styles2.spinner : styles2.icon;
  return (0, import_jsx_runtime15.jsx)(
    chakra.span,
    {
      display: "inherit",
      "data-status": status,
      ...props,
      className: cx("chakra-alert__icon", props.className),
      __css: css4,
      children: props.children || (0, import_jsx_runtime15.jsx)(BaseIcon, { h: "100%", w: "100%" })
    }
  );
}
AlertIcon.displayName = "AlertIcon";

// node_modules/@chakra-ui/alert/dist/chunk-QURMB2UJ.mjs
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var AlertTitle = forwardRef3(
  function AlertTitle2(props, ref) {
    const styles2 = useAlertStyles();
    const { status } = useAlertContext();
    return (0, import_jsx_runtime16.jsx)(
      chakra.div,
      {
        ref,
        "data-status": status,
        ...props,
        className: cx("chakra-alert__title", props.className),
        __css: styles2.title
      }
    );
  }
);
AlertTitle.displayName = "AlertTitle";

// node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var Alert = forwardRef3(function Alert2(props, ref) {
  var _a8;
  const { status = "info", addRole = true, ...rest } = omitThemingProps(props);
  const colorScheme = (_a8 = props.colorScheme) != null ? _a8 : getStatusColorScheme(status);
  const styles2 = useMultiStyleConfig("Alert", { ...props, colorScheme });
  const alertStyles = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...styles2.container
  };
  return (0, import_jsx_runtime17.jsx)(AlertProvider, { value: { status }, children: (0, import_jsx_runtime17.jsx)(AlertStylesProvider, { value: styles2, children: (0, import_jsx_runtime17.jsx)(
    chakra.div,
    {
      "data-status": status,
      role: addRole ? "alert" : void 0,
      ref,
      ...rest,
      className: cx("chakra-alert", props.className),
      __css: alertStyles
    }
  ) }) });
});
Alert.displayName = "Alert";

// node_modules/@chakra-ui/close-button/dist/chunk-37N6GCLA.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
function CloseIcon(props) {
  return (0, import_jsx_runtime18.jsx)(Icon, { focusable: "false", "aria-hidden": true, ...props, children: (0, import_jsx_runtime18.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var CloseButton = forwardRef3(
  function CloseButton2(props, ref) {
    const styles2 = useStyleConfig("CloseButton", props);
    const { children, isDisabled: isDisabled3, __css, ...rest } = omitThemingProps(props);
    const baseStyle44 = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return (0, import_jsx_runtime18.jsx)(
      chakra.button,
      {
        type: "button",
        "aria-label": "Close",
        ref,
        disabled: isDisabled3,
        __css: {
          ...baseStyle44,
          ...styles2,
          ...__css
        },
        ...rest,
        children: children || (0, import_jsx_runtime18.jsx)(CloseIcon, { width: "1em", height: "1em" })
      }
    );
  }
);
CloseButton.displayName = "CloseButton";

// node_modules/@chakra-ui/toast/dist/chunk-HYCJNCPE.mjs
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var initialState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
};
var toastStore = createStore(initialState);
function createStore(initialState2) {
  let state2 = initialState2;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (setStateFn) => {
    state2 = setStateFn(state2);
    listeners.forEach((l) => l());
  };
  return {
    getState: () => state2,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        setState(() => initialState2);
        listeners.delete(listener);
      };
    },
    /**
     * Delete a toast record at its position
     */
    removeToast: (id, position3) => {
      setState((prevState) => ({
        ...prevState,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [position3]: prevState[position3].filter((toast) => toast.id != id)
      }));
    },
    notify: (message, options) => {
      const toast = createToast(message, options);
      const { position: position3, id } = toast;
      setState((prevToasts) => {
        var _a8, _b5;
        const isTop = position3.includes("top");
        const toasts = isTop ? [toast, ...(_a8 = prevToasts[position3]) != null ? _a8 : []] : [...(_b5 = prevToasts[position3]) != null ? _b5 : [], toast];
        return {
          ...prevToasts,
          [position3]: toasts
        };
      });
      return id;
    },
    update: (id, options) => {
      if (!id)
        return;
      setState((prevState) => {
        const nextState = { ...prevState };
        const { position: position3, index } = findToast(nextState, id);
        if (position3 && index !== -1) {
          nextState[position3][index] = {
            ...nextState[position3][index],
            ...options,
            message: createRenderToast(options)
          };
        }
        return nextState;
      });
    },
    closeAll: ({ positions } = {}) => {
      setState((prev2) => {
        const allPositions = [
          "bottom",
          "bottom-right",
          "bottom-left",
          "top",
          "top-left",
          "top-right"
        ];
        const positionsToClose = positions != null ? positions : allPositions;
        return positionsToClose.reduce(
          (acc, position3) => {
            acc[position3] = prev2[position3].map((toast) => ({
              ...toast,
              requestClose: true
            }));
            return acc;
          },
          { ...prev2 }
        );
      });
    },
    close: (id) => {
      setState((prevState) => {
        const position3 = getToastPosition(prevState, id);
        if (!position3)
          return prevState;
        return {
          ...prevState,
          [position3]: prevState[position3].map((toast) => {
            if (toast.id == id) {
              return {
                ...toast,
                requestClose: true
              };
            }
            return toast;
          })
        };
      });
    },
    isActive: (id) => Boolean(findToast(toastStore.getState(), id).position)
  };
}
var counter = 0;
function createToast(message, options = {}) {
  var _a8, _b5;
  counter += 1;
  const id = (_a8 = options.id) != null ? _a8 : counter;
  const position3 = (_b5 = options.position) != null ? _b5 : "bottom";
  return {
    id,
    message,
    position: position3,
    duration: options.duration,
    onCloseComplete: options.onCloseComplete,
    onRequestRemove: () => toastStore.removeToast(String(id), position3),
    status: options.status,
    requestClose: false,
    containerStyle: options.containerStyle
  };
}
var Toast = (props) => {
  const {
    status,
    variant = "solid",
    id,
    title,
    isClosable,
    onClose,
    description,
    colorScheme,
    icon
  } = props;
  const ids = id ? {
    root: `toast-${id}`,
    title: `toast-${id}-title`,
    description: `toast-${id}-description`
  } : void 0;
  return (0, import_jsx_runtime19.jsxs)(
    Alert,
    {
      addRole: false,
      status,
      variant,
      id: ids == null ? void 0 : ids.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme,
      children: [
        (0, import_jsx_runtime19.jsx)(AlertIcon, { children: icon }),
        (0, import_jsx_runtime19.jsxs)(chakra.div, { flex: "1", maxWidth: "100%", children: [
          title && (0, import_jsx_runtime19.jsx)(AlertTitle, { id: ids == null ? void 0 : ids.title, children: title }),
          description && (0, import_jsx_runtime19.jsx)(AlertDescription, { id: ids == null ? void 0 : ids.description, display: "block", children: description })
        ] }),
        isClosable && (0, import_jsx_runtime19.jsx)(
          CloseButton,
          {
            size: "sm",
            onClick: onClose,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function createRenderToast(options = {}) {
  const { render, toastComponent: ToastComponent2 = Toast } = options;
  const renderToast = (props) => {
    if (typeof render === "function") {
      return render({ ...props, ...options });
    }
    return (0, import_jsx_runtime19.jsx)(ToastComponent2, { ...props, ...options });
  };
  return renderToast;
}
function createToastFn(dir, defaultOptions4) {
  const normalizeToastOptions = (options) => {
    var _a8;
    return {
      ...defaultOptions4,
      ...options,
      position: getToastPlacement(
        (_a8 = options == null ? void 0 : options.position) != null ? _a8 : defaultOptions4 == null ? void 0 : defaultOptions4.position,
        dir
      )
    };
  };
  const toast = (options) => {
    const normalizedToastOptions = normalizeToastOptions(options);
    const Message = createRenderToast(normalizedToastOptions);
    return toastStore.notify(Message, normalizedToastOptions);
  };
  toast.update = (id, options) => {
    toastStore.update(id, normalizeToastOptions(options));
  };
  toast.promise = (promise, options) => {
    const id = toast({
      ...options.loading,
      status: "loading",
      duration: null
    });
    promise.then(
      (data) => toast.update(id, {
        status: "success",
        duration: 5e3,
        ...runIfFn(options.success, data)
      })
    ).catch(
      (error2) => toast.update(id, {
        status: "error",
        duration: 5e3,
        ...runIfFn(options.error, error2)
      })
    );
  };
  toast.closeAll = toastStore.closeAll;
  toast.close = toastStore.close;
  toast.isActive = toastStore.isActive;
  return toast;
}

// node_modules/@chakra-ui/toast/dist/chunk-3Y4YXCR2.mjs
var import_react27 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var [ToastOptionProvider, useToastOptionContext] = createContext2({
  name: `ToastOptionsContext`,
  strict: false
});
var ToastProvider = (props) => {
  const state2 = (0, import_react27.useSyncExternalStore)(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );
  const {
    motionVariants: motionVariants2,
    component: Component = ToastComponent,
    portalProps
  } = props;
  const stateKeys = Object.keys(state2);
  const toastList = stateKeys.map((position3) => {
    const toasts = state2[position3];
    return (0, import_jsx_runtime20.jsx)(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${position3}`,
        id: `chakra-toast-manager-${position3}`,
        style: getToastListStyle(position3),
        children: (0, import_jsx_runtime20.jsx)(AnimatePresence, { initial: false, children: toasts.map((toast) => (0, import_jsx_runtime20.jsx)(
          Component,
          {
            motionVariants: motionVariants2,
            ...toast
          },
          toast.id
        )) })
      },
      position3
    );
  });
  return (0, import_jsx_runtime20.jsx)(Portal, { ...portalProps, children: toastList });
};

// node_modules/@chakra-ui/toast/dist/chunk-6RSEZNRH.mjs
var import_react28 = __toESM(require_react(), 1);
function useToast(options) {
  const { theme: theme2 } = useChakra();
  const defaultOptions4 = useToastOptionContext();
  return (0, import_react28.useMemo)(
    () => createToastFn(theme2.direction, {
      ...defaultOptions4,
      ...options
    }),
    [options, theme2.direction, defaultOptions4]
  );
}

// node_modules/@chakra-ui/toast/dist/chunk-FOFDA6UD.mjs
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var defaults = {
  duration: 5e3,
  variant: "solid"
};
var defaultStandaloneParam = {
  theme,
  colorMode: "light",
  toggleColorMode: () => {
  },
  setColorMode: () => {
  },
  defaultOptions: defaults,
  forced: false
};
function createStandaloneToast({
  theme: theme2 = defaultStandaloneParam.theme,
  colorMode = defaultStandaloneParam.colorMode,
  toggleColorMode = defaultStandaloneParam.toggleColorMode,
  setColorMode = defaultStandaloneParam.setColorMode,
  defaultOptions: defaultOptions4 = defaultStandaloneParam.defaultOptions,
  motionVariants: motionVariants2,
  toastSpacing,
  component,
  forced
} = defaultStandaloneParam) {
  const colorModeContextValue = {
    colorMode,
    setColorMode,
    toggleColorMode,
    forced
  };
  const ToastContainer = () => (0, import_jsx_runtime21.jsx)(ThemeProvider3, { theme: theme2, children: (0, import_jsx_runtime21.jsx)(ColorModeContext.Provider, { value: colorModeContextValue, children: (0, import_jsx_runtime21.jsx)(
    ToastProvider,
    {
      defaultOptions: defaultOptions4,
      motionVariants: motionVariants2,
      toastSpacing,
      component
    }
  ) }) });
  return {
    ToastContainer,
    toast: createToastFn(theme2.direction, defaultOptions4)
  };
}

// node_modules/@chakra-ui/react/dist/chunk-QAITB7GG.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var createChakraProvider = (providerTheme) => {
  return function ChakraProvider22({
    children,
    theme: theme2 = providerTheme,
    toastOptions,
    ...restProps
  }) {
    return (0, import_jsx_runtime22.jsxs)(ChakraProvider, { theme: theme2, ...restProps, children: [
      (0, import_jsx_runtime22.jsx)(ToastOptionProvider, { value: toastOptions == null ? void 0 : toastOptions.defaultOptions, children }),
      (0, import_jsx_runtime22.jsx)(ToastProvider, { ...toastOptions })
    ] });
  };
};
var ChakraProvider2 = createChakraProvider(theme);
var ChakraBaseProvider = createChakraProvider(baseTheme);

// node_modules/@chakra-ui/descendant/dist/chunk-3A5YOZDU.mjs
var import_react29 = __toESM(require_react(), 1);
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
function sortNodes(nodes) {
  return nodes.sort((a, b) => {
    const compare = a.compareDocumentPosition(b);
    if (compare & Node.DOCUMENT_POSITION_FOLLOWING || compare & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      return -1;
    }
    if (compare & Node.DOCUMENT_POSITION_PRECEDING || compare & Node.DOCUMENT_POSITION_CONTAINS) {
      return 1;
    }
    if (compare & Node.DOCUMENT_POSITION_DISCONNECTED || compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) {
      throw Error("Cannot sort the given nodes.");
    } else {
      return 0;
    }
  });
}
var isElement2 = (el) => typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
function getNextIndex3(current, max2, loop) {
  let next2 = current + 1;
  if (loop && next2 >= max2)
    next2 = 0;
  return next2;
}
function getPrevIndex2(current, max2, loop) {
  let next2 = current - 1;
  if (loop && next2 < 0)
    next2 = max2;
  return next2;
}
var useSafeLayoutEffect2 = typeof window !== "undefined" ? import_react29.useLayoutEffect : import_react29.useEffect;
var cast = (value) => value;

// node_modules/@chakra-ui/descendant/dist/chunk-FT3H4P66.mjs
var DescendantsManager = class {
  constructor() {
    __publicField2(this, "descendants", /* @__PURE__ */ new Map());
    __publicField2(this, "register", (nodeOrOptions) => {
      if (nodeOrOptions == null)
        return;
      if (isElement2(nodeOrOptions)) {
        return this.registerNode(nodeOrOptions);
      }
      return (node3) => {
        this.registerNode(node3, nodeOrOptions);
      };
    });
    __publicField2(this, "unregister", (node3) => {
      this.descendants.delete(node3);
      const sorted = sortNodes(Array.from(this.descendants.keys()));
      this.assignIndex(sorted);
    });
    __publicField2(this, "destroy", () => {
      this.descendants.clear();
    });
    __publicField2(this, "assignIndex", (descendants) => {
      this.descendants.forEach((descendant) => {
        const index = descendants.indexOf(descendant.node);
        descendant.index = index;
        descendant.node.dataset["index"] = descendant.index.toString();
      });
    });
    __publicField2(this, "count", () => this.descendants.size);
    __publicField2(this, "enabledCount", () => this.enabledValues().length);
    __publicField2(this, "values", () => {
      const values = Array.from(this.descendants.values());
      return values.sort((a, b) => a.index - b.index);
    });
    __publicField2(this, "enabledValues", () => {
      return this.values().filter((descendant) => !descendant.disabled);
    });
    __publicField2(this, "item", (index) => {
      if (this.count() === 0)
        return void 0;
      return this.values()[index];
    });
    __publicField2(this, "enabledItem", (index) => {
      if (this.enabledCount() === 0)
        return void 0;
      return this.enabledValues()[index];
    });
    __publicField2(this, "first", () => this.item(0));
    __publicField2(this, "firstEnabled", () => this.enabledItem(0));
    __publicField2(this, "last", () => this.item(this.descendants.size - 1));
    __publicField2(this, "lastEnabled", () => {
      const lastIndex = this.enabledValues().length - 1;
      return this.enabledItem(lastIndex);
    });
    __publicField2(this, "indexOf", (node3) => {
      var _a8, _b5;
      if (!node3)
        return -1;
      return (_b5 = (_a8 = this.descendants.get(node3)) == null ? void 0 : _a8.index) != null ? _b5 : -1;
    });
    __publicField2(this, "enabledIndexOf", (node3) => {
      if (node3 == null)
        return -1;
      return this.enabledValues().findIndex((i) => i.node.isSameNode(node3));
    });
    __publicField2(this, "next", (index, loop = true) => {
      const next2 = getNextIndex3(index, this.count(), loop);
      return this.item(next2);
    });
    __publicField2(this, "nextEnabled", (index, loop = true) => {
      const item = this.item(index);
      if (!item)
        return;
      const enabledIndex = this.enabledIndexOf(item.node);
      const nextEnabledIndex = getNextIndex3(
        enabledIndex,
        this.enabledCount(),
        loop
      );
      return this.enabledItem(nextEnabledIndex);
    });
    __publicField2(this, "prev", (index, loop = true) => {
      const prev2 = getPrevIndex2(index, this.count() - 1, loop);
      return this.item(prev2);
    });
    __publicField2(this, "prevEnabled", (index, loop = true) => {
      const item = this.item(index);
      if (!item)
        return;
      const enabledIndex = this.enabledIndexOf(item.node);
      const prevEnabledIndex = getPrevIndex2(
        enabledIndex,
        this.enabledCount() - 1,
        loop
      );
      return this.enabledItem(prevEnabledIndex);
    });
    __publicField2(this, "registerNode", (node3, options) => {
      if (!node3 || this.descendants.has(node3))
        return;
      const keys2 = Array.from(this.descendants.keys()).concat(node3);
      const sorted = sortNodes(keys2);
      if (options == null ? void 0 : options.disabled) {
        options.disabled = !!options.disabled;
      }
      const descendant = { node: node3, index: -1, ...options };
      this.descendants.set(node3, descendant);
      this.assignIndex(sorted);
    });
  }
};

// node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs
var import_react30 = __toESM(require_react(), 1);
function assignRef2(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error2) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs2(...refs) {
  return (node3) => {
    refs.forEach((ref) => {
      assignRef2(ref, node3);
    });
  };
}
function useMergeRefs(...refs) {
  return (0, import_react30.useMemo)(() => mergeRefs2(...refs), refs);
}

// node_modules/@chakra-ui/descendant/dist/chunk-OCNORRQU.mjs
var import_react31 = __toESM(require_react(), 1);
function useDescendants() {
  const descendants = (0, import_react31.useRef)(new DescendantsManager());
  useSafeLayoutEffect2(() => {
    return () => descendants.current.destroy();
  });
  return descendants.current;
}
var [DescendantsContextProvider, useDescendantsContext] = createContext2({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function useDescendant(options) {
  const descendants = useDescendantsContext();
  const [index, setIndex] = (0, import_react31.useState)(-1);
  const ref = (0, import_react31.useRef)(null);
  useSafeLayoutEffect2(() => {
    return () => {
      if (!ref.current)
        return;
      descendants.unregister(ref.current);
    };
  }, []);
  useSafeLayoutEffect2(() => {
    if (!ref.current)
      return;
    const dataIndex = Number(ref.current.dataset["index"]);
    if (index != dataIndex && !Number.isNaN(dataIndex)) {
      setIndex(dataIndex);
    }
  });
  const refCallback = options ? cast(descendants.register(options)) : cast(descendants.register);
  return {
    descendants,
    index,
    enabledIndex: descendants.enabledIndexOf(ref.current),
    register: mergeRefs2(refCallback, ref)
  };
}
function createDescendantContext() {
  const ContextProvider = cast(DescendantsContextProvider);
  const _useDescendantsContext = () => cast(useDescendantsContext());
  const _useDescendant = (options) => useDescendant(options);
  const _useDescendants = () => useDescendants();
  return [
    // context provider
    ContextProvider,
    // call this when you need to read from context
    _useDescendantsContext,
    // descendants state information, to be called and passed to `ContextProvider`
    _useDescendants,
    // descendant index information
    _useDescendant
  ];
}

// node_modules/@chakra-ui/accordion/dist/chunk-RUEU7BLR.mjs
var [AccordionStylesProvider, useAccordionStyles] = createContext2({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
});
var [AccordionItemProvider, useAccordionItemContext] = createContext2({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
});
var [
  AccordionDescendantsProvider,
  useAccordionDescendantsContext,
  useAccordionDescendants,
  useAccordionDescendant
] = createDescendantContext();

// node_modules/@chakra-ui/accordion/dist/chunk-QCAXGLVH.mjs
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var AccordionButton = forwardRef3(
  function AccordionButton2(props, ref) {
    const { getButtonProps } = useAccordionItemContext();
    const buttonProps = getButtonProps(props, ref);
    const styles2 = useAccordionStyles();
    const buttonStyles = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...styles2.button
    };
    return (0, import_jsx_runtime23.jsx)(
      chakra.button,
      {
        ...buttonProps,
        className: cx("chakra-accordion__button", props.className),
        __css: buttonStyles
      }
    );
  }
);
AccordionButton.displayName = "AccordionButton";

// node_modules/@chakra-ui/react-use-controllable-state/dist/index.mjs
var import_react32 = __toESM(require_react(), 1);
function useControllableState(props) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev2, next2) => prev2 !== next2
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);
  const [uncontrolledState, setUncontrolledState] = (0, import_react32.useState)(defaultValue);
  const controlled = valueProp !== void 0;
  const value = controlled ? valueProp : uncontrolledState;
  const setValue = useCallbackRef(
    (next2) => {
      const setter = next2;
      const nextValue = typeof next2 === "function" ? setter(value) : next2;
      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }
      if (!controlled) {
        setUncontrolledState(nextValue);
      }
      onChangeProp(nextValue);
    },
    [controlled, onChangeProp, value, shouldUpdateProp]
  );
  return [value, setValue];
}

// node_modules/@chakra-ui/accordion/dist/chunk-74QY6M57.mjs
var import_react33 = __toESM(require_react(), 1);
function useAccordion(props) {
  const {
    onChange,
    defaultIndex,
    index: indexProp,
    allowMultiple,
    allowToggle,
    ...htmlProps
  } = props;
  allowMultipleWarning(props);
  allowMultipleAndAllowToggleWarning(props);
  const descendants = useAccordionDescendants();
  const [focusedIndex, setFocusedIndex] = (0, import_react33.useState)(-1);
  (0, import_react33.useEffect)(() => {
    return () => {
      setFocusedIndex(-1);
    };
  }, []);
  const [index, setIndex] = useControllableState({
    value: indexProp,
    defaultValue() {
      if (allowMultiple)
        return defaultIndex != null ? defaultIndex : [];
      return defaultIndex != null ? defaultIndex : -1;
    },
    onChange
  });
  const getAccordionItemProps = (idx) => {
    let isOpen = false;
    if (idx !== null) {
      isOpen = Array.isArray(index) ? index.includes(idx) : index === idx;
    }
    const onChange2 = (isOpen2) => {
      if (idx === null)
        return;
      if (allowMultiple && Array.isArray(index)) {
        const nextState = isOpen2 ? index.concat(idx) : index.filter((i) => i !== idx);
        setIndex(nextState);
      } else if (isOpen2) {
        setIndex(idx);
      } else if (allowToggle) {
        setIndex(-1);
      }
    };
    return { isOpen, onChange: onChange2 };
  };
  return {
    index,
    setIndex,
    htmlProps,
    getAccordionItemProps,
    focusedIndex,
    setFocusedIndex,
    descendants
  };
}
var [AccordionProvider, useAccordionContext] = createContext2({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function useAccordionItem(props) {
  const { isDisabled: isDisabled3, isFocusable: isFocusable3, id, ...htmlProps } = props;
  const { getAccordionItemProps, setFocusedIndex } = useAccordionContext();
  const buttonRef = (0, import_react33.useRef)(null);
  const reactId = (0, import_react33.useId)();
  const uid = id != null ? id : reactId;
  const buttonId = `accordion-button-${uid}`;
  const panelId = `accordion-panel-${uid}`;
  focusableNotDisabledWarning(props);
  const { register, index, descendants } = useAccordionDescendant({
    disabled: isDisabled3 && !isFocusable3
  });
  const { isOpen, onChange } = getAccordionItemProps(
    index === -1 ? null : index
  );
  warnIfOpenAndDisabled({ isOpen, isDisabled: isDisabled3 });
  const onOpen = () => {
    onChange == null ? void 0 : onChange(true);
  };
  const onClose = () => {
    onChange == null ? void 0 : onChange(false);
  };
  const onClick = (0, import_react33.useCallback)(() => {
    onChange == null ? void 0 : onChange(!isOpen);
    setFocusedIndex(index);
  }, [index, setFocusedIndex, isOpen, onChange]);
  const onKeyDown = (0, import_react33.useCallback)(
    (event) => {
      const keyMap = {
        ArrowDown: () => {
          const next2 = descendants.nextEnabled(index);
          next2 == null ? void 0 : next2.node.focus();
        },
        ArrowUp: () => {
          const prev2 = descendants.prevEnabled(index);
          prev2 == null ? void 0 : prev2.node.focus();
        },
        Home: () => {
          const first = descendants.firstEnabled();
          first == null ? void 0 : first.node.focus();
        },
        End: () => {
          const last = descendants.lastEnabled();
          last == null ? void 0 : last.node.focus();
        }
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, index]
  );
  const onFocus3 = (0, import_react33.useCallback)(() => {
    setFocusedIndex(index);
  }, [setFocusedIndex, index]);
  const getButtonProps = (0, import_react33.useCallback)(
    function getButtonProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        type: "button",
        ref: mergeRefs2(register, buttonRef, ref),
        id: buttonId,
        disabled: !!isDisabled3,
        "aria-expanded": !!isOpen,
        "aria-controls": panelId,
        onClick: callAllHandlers(props2.onClick, onClick),
        onFocus: callAllHandlers(props2.onFocus, onFocus3),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown)
      };
    },
    [
      buttonId,
      isDisabled3,
      isOpen,
      onClick,
      onFocus3,
      onKeyDown,
      panelId,
      register
    ]
  );
  const getPanelProps = (0, import_react33.useCallback)(
    function getPanelProps2(props2 = {}, ref = null) {
      return {
        ...props2,
        ref,
        role: "region",
        id: panelId,
        "aria-labelledby": buttonId,
        hidden: !isOpen
      };
    },
    [buttonId, isOpen, panelId]
  );
  return {
    isOpen,
    isDisabled: isDisabled3,
    isFocusable: isFocusable3,
    onOpen,
    onClose,
    getButtonProps,
    getPanelProps,
    htmlProps
  };
}
function allowMultipleWarning(props) {
  const index = props.index || props.defaultIndex;
  const condition = index != null && !Array.isArray(index) && props.allowMultiple;
  warn({
    condition: !!condition,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof index},`
  });
}
function allowMultipleAndAllowToggleWarning(props) {
  warn({
    condition: !!(props.allowMultiple && props.allowToggle),
    message: `If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not`
  });
}
function focusableNotDisabledWarning(props) {
  warn({
    condition: !!(props.isFocusable && !props.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function warnIfOpenAndDisabled(props) {
  warn({
    condition: props.isOpen && !!props.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}

// node_modules/@chakra-ui/accordion/dist/chunk-YI3ICT2T.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
function AccordionIcon(props) {
  const { isOpen, isDisabled: isDisabled3 } = useAccordionItemContext();
  const { reduceMotion } = useAccordionContext();
  const _className = cx("chakra-accordion__icon", props.className);
  const styles2 = useAccordionStyles();
  const iconStyles = {
    opacity: isDisabled3 ? 0.4 : 1,
    transform: isOpen ? "rotate(-180deg)" : void 0,
    transition: reduceMotion ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...styles2.icon
  };
  return (0, import_jsx_runtime24.jsx)(
    Icon,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": true,
      className: _className,
      __css: iconStyles,
      ...props,
      children: (0, import_jsx_runtime24.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
AccordionIcon.displayName = "AccordionIcon";

// node_modules/@chakra-ui/accordion/dist/chunk-JQ2DNXQ3.mjs
var import_react34 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var AccordionItem = forwardRef3(
  function AccordionItem2(props, ref) {
    const { children, className } = props;
    const { htmlProps, ...context } = useAccordionItem(props);
    const styles2 = useAccordionStyles();
    const containerStyles = {
      ...styles2.container,
      overflowAnchor: "none"
    };
    const ctx = (0, import_react34.useMemo)(() => context, [context]);
    return (0, import_jsx_runtime25.jsx)(AccordionItemProvider, { value: ctx, children: (0, import_jsx_runtime25.jsx)(
      chakra.div,
      {
        ref,
        ...htmlProps,
        className: cx("chakra-accordion__item", className),
        __css: containerStyles,
        children: typeof children === "function" ? children({
          isExpanded: !!context.isOpen,
          isDisabled: !!context.isDisabled
        }) : children
      }
    ) });
  }
);
AccordionItem.displayName = "AccordionItem";

// node_modules/@chakra-ui/transition/dist/chunk-6NHXDBFO.mjs
var TRANSITION_EASINGS = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
};
var TRANSITION_VARIANTS = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function getSlideTransition(options) {
  var _a8;
  const side = (_a8 = options == null ? void 0 : options.direction) != null ? _a8 : "right";
  switch (side) {
    case "right":
      return TRANSITION_VARIANTS.slideRight;
    case "left":
      return TRANSITION_VARIANTS.slideLeft;
    case "bottom":
      return TRANSITION_VARIANTS.slideDown;
    case "top":
      return TRANSITION_VARIANTS.slideUp;
    default:
      return TRANSITION_VARIANTS.slideRight;
  }
}
var TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.2,
    ease: TRANSITION_EASINGS.easeOut
  },
  exit: {
    duration: 0.1,
    ease: TRANSITION_EASINGS.easeIn
  }
};
var withDelay = {
  enter: (transition3, delay) => ({
    ...transition3,
    delay: typeof delay === "number" ? delay : delay == null ? void 0 : delay["enter"]
  }),
  exit: (transition3, delay) => ({
    ...transition3,
    delay: typeof delay === "number" ? delay : delay == null ? void 0 : delay["exit"]
  })
};

// node_modules/@chakra-ui/transition/dist/chunk-RKXMPHPI.mjs
var import_react35 = __toESM(require_react(), 1);
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var isNumeric2 = (value) => value != null && parseInt(value.toString(), 10) > 0;
var defaultTransitions = {
  exit: {
    height: { duration: 0.2, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.3, ease: TRANSITION_EASINGS.ease }
  },
  enter: {
    height: { duration: 0.3, ease: TRANSITION_EASINGS.ease },
    opacity: { duration: 0.4, ease: TRANSITION_EASINGS.ease }
  }
};
var variants13 = {
  exit: ({
    animateOpacity,
    startingHeight,
    transition: transition3,
    transitionEnd,
    delay
  }) => {
    var _a8;
    return {
      ...animateOpacity && { opacity: isNumeric2(startingHeight) ? 1 : 0 },
      height: startingHeight,
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit,
      transition: (_a8 = transition3 == null ? void 0 : transition3.exit) != null ? _a8 : withDelay.exit(defaultTransitions.exit, delay)
    };
  },
  enter: ({
    animateOpacity,
    endingHeight,
    transition: transition3,
    transitionEnd,
    delay
  }) => {
    var _a8;
    return {
      ...animateOpacity && { opacity: 1 },
      height: endingHeight,
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter,
      transition: (_a8 = transition3 == null ? void 0 : transition3.enter) != null ? _a8 : withDelay.enter(defaultTransitions.enter, delay)
    };
  }
};
var Collapse = (0, import_react35.forwardRef)(
  (props, ref) => {
    const {
      in: isOpen,
      unmountOnExit,
      animateOpacity = true,
      startingHeight = 0,
      endingHeight = "auto",
      style,
      className,
      transition: transition3,
      transitionEnd,
      ...rest
    } = props;
    const [mounted, setMounted] = (0, import_react35.useState)(false);
    (0, import_react35.useEffect)(() => {
      const timeout = setTimeout(() => {
        setMounted(true);
      });
      return () => clearTimeout(timeout);
    }, []);
    warn({
      condition: Number(startingHeight) > 0 && !!unmountOnExit,
      message: `startingHeight and unmountOnExit are mutually exclusive. You can't use them together`
    });
    const hasStartingHeight = parseFloat(startingHeight.toString()) > 0;
    const custom = {
      startingHeight,
      endingHeight,
      animateOpacity,
      transition: !mounted ? { enter: { duration: 0 } } : transition3,
      transitionEnd: {
        enter: transitionEnd == null ? void 0 : transitionEnd.enter,
        exit: unmountOnExit ? transitionEnd == null ? void 0 : transitionEnd.exit : {
          ...transitionEnd == null ? void 0 : transitionEnd.exit,
          display: hasStartingHeight ? "block" : "none"
        }
      }
    };
    const show = unmountOnExit ? isOpen : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    return (0, import_jsx_runtime26.jsx)(AnimatePresence, { initial: false, custom, children: show && (0, import_jsx_runtime26.jsx)(
      motion.div,
      {
        ref,
        ...rest,
        className: cx("chakra-collapse", className),
        style: {
          overflow: "hidden",
          display: "block",
          ...style
        },
        custom,
        variants: variants13,
        initial: unmountOnExit ? "exit" : false,
        animate,
        exit: "exit"
      }
    ) });
  }
);
Collapse.displayName = "Collapse";

// node_modules/@chakra-ui/transition/dist/chunk-TR226DUX.mjs
var import_react36 = __toESM(require_react(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var variants14 = {
  enter: ({ transition: transition3, transitionEnd, delay } = {}) => {
    var _a8;
    return {
      opacity: 1,
      transition: (_a8 = transition3 == null ? void 0 : transition3.enter) != null ? _a8 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: ({ transition: transition3, transitionEnd, delay } = {}) => {
    var _a8;
    return {
      opacity: 0,
      transition: (_a8 = transition3 == null ? void 0 : transition3.exit) != null ? _a8 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  }
};
var fadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants14
};
var Fade = (0, import_react36.forwardRef)(function Fade2(props, ref) {
  const {
    unmountOnExit,
    in: isOpen,
    className,
    transition: transition3,
    transitionEnd,
    delay,
    ...rest
  } = props;
  const animate = isOpen || unmountOnExit ? "enter" : "exit";
  const show = unmountOnExit ? isOpen && unmountOnExit : true;
  const custom = { transition: transition3, transitionEnd, delay };
  return (0, import_jsx_runtime27.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime27.jsx)(
    motion.div,
    {
      ref,
      className: cx("chakra-fade", className),
      custom,
      ...fadeConfig,
      animate,
      ...rest
    }
  ) });
});
Fade.displayName = "Fade";

// node_modules/@chakra-ui/transition/dist/chunk-SR4VX3RF.mjs
var import_react37 = __toESM(require_react(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var variants15 = {
  exit: ({ reverse, initialScale, transition: transition3, transitionEnd, delay }) => {
    var _a8;
    return {
      opacity: 0,
      ...reverse ? { scale: initialScale, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { scale: initialScale, ...transitionEnd == null ? void 0 : transitionEnd.exit } },
      transition: (_a8 = transition3 == null ? void 0 : transition3.exit) != null ? _a8 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay)
    };
  },
  enter: ({ transitionEnd, transition: transition3, delay }) => {
    var _a8;
    return {
      opacity: 1,
      scale: 1,
      transition: (_a8 = transition3 == null ? void 0 : transition3.enter) != null ? _a8 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  }
};
var scaleFadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants15
};
var ScaleFade = (0, import_react37.forwardRef)(
  function ScaleFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      initialScale = 0.95,
      className,
      transition: transition3,
      transitionEnd,
      delay,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = { initialScale, reverse, transition: transition3, transitionEnd, delay };
    return (0, import_jsx_runtime28.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime28.jsx)(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        ...scaleFadeConfig,
        animate,
        custom,
        ...rest
      }
    ) });
  }
);
ScaleFade.displayName = "ScaleFade";

// node_modules/@chakra-ui/transition/dist/chunk-7254PCTD.mjs
var import_react38 = __toESM(require_react(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var variants16 = {
  initial: ({ offsetX, offsetY, transition: transition3, transitionEnd, delay }) => {
    var _a8;
    return {
      opacity: 0,
      x: offsetX,
      y: offsetY,
      transition: (_a8 = transition3 == null ? void 0 : transition3.exit) != null ? _a8 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: ({ transition: transition3, transitionEnd, delay }) => {
    var _a8;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (_a8 = transition3 == null ? void 0 : transition3.enter) != null ? _a8 : withDelay.enter(TRANSITION_DEFAULTS.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: ({ offsetY, offsetX, transition: transition3, transitionEnd, reverse, delay }) => {
    var _a8;
    const offset2 = { x: offsetX, y: offsetY };
    return {
      opacity: 0,
      transition: (_a8 = transition3 == null ? void 0 : transition3.exit) != null ? _a8 : withDelay.exit(TRANSITION_DEFAULTS.exit, delay),
      ...reverse ? { ...offset2, transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit } : { transitionEnd: { ...offset2, ...transitionEnd == null ? void 0 : transitionEnd.exit } }
    };
  }
};
var slideFadeConfig = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: variants16
};
var SlideFade = (0, import_react38.forwardRef)(
  function SlideFade2(props, ref) {
    const {
      unmountOnExit,
      in: isOpen,
      reverse = true,
      className,
      offsetX = 0,
      offsetY = 8,
      transition: transition3,
      transitionEnd,
      delay,
      ...rest
    } = props;
    const show = unmountOnExit ? isOpen && unmountOnExit : true;
    const animate = isOpen || unmountOnExit ? "enter" : "exit";
    const custom = {
      offsetX,
      offsetY,
      reverse,
      transition: transition3,
      transitionEnd,
      delay
    };
    return (0, import_jsx_runtime29.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime29.jsx)(
      motion.div,
      {
        ref,
        className: cx("chakra-offset-slide", className),
        custom,
        ...slideFadeConfig,
        animate,
        ...rest
      }
    ) });
  }
);
SlideFade.displayName = "SlideFade";

// node_modules/@chakra-ui/transition/dist/chunk-CYUETFQE.mjs
var import_react39 = __toESM(require_react(), 1);
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var defaultTransition = {
  exit: {
    duration: 0.15,
    ease: TRANSITION_EASINGS.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
};
var variants17 = {
  exit: ({ direction: direction2, transition: transition3, transitionEnd, delay }) => {
    var _a8;
    const { exit: exitStyles } = getSlideTransition({ direction: direction2 });
    return {
      ...exitStyles,
      transition: (_a8 = transition3 == null ? void 0 : transition3.exit) != null ? _a8 : withDelay.exit(defaultTransition.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: ({ direction: direction2, transitionEnd, transition: transition3, delay }) => {
    var _a8;
    const { enter: enterStyles } = getSlideTransition({ direction: direction2 });
    return {
      ...enterStyles,
      transition: (_a8 = transition3 == null ? void 0 : transition3.enter) != null ? _a8 : withDelay.enter(defaultTransition.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  }
};
var Slide = (0, import_react39.forwardRef)(function Slide2(props, ref) {
  const {
    direction: direction2 = "right",
    style,
    unmountOnExit,
    in: isOpen,
    className,
    transition: transition3,
    transitionEnd,
    delay,
    motionProps,
    ...rest
  } = props;
  const transitionStyles = getSlideTransition({ direction: direction2 });
  const computedStyle = Object.assign(
    { position: "fixed" },
    transitionStyles.position,
    style
  );
  const show = unmountOnExit ? isOpen && unmountOnExit : true;
  const animate = isOpen || unmountOnExit ? "enter" : "exit";
  const custom = { transitionEnd, transition: transition3, direction: direction2, delay };
  return (0, import_jsx_runtime30.jsx)(AnimatePresence, { custom, children: show && (0, import_jsx_runtime30.jsx)(
    motion.div,
    {
      ...rest,
      ref,
      initial: "exit",
      className: cx("chakra-slide", className),
      animate,
      exit: "exit",
      custom,
      variants: variants17,
      style: computedStyle,
      ...motionProps
    }
  ) });
});
Slide.displayName = "Slide";

// node_modules/@chakra-ui/accordion/dist/chunk-5VAIMVHT.mjs
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var AccordionPanel = forwardRef3(
  function AccordionPanel2(props, ref) {
    const { className, motionProps, ...rest } = props;
    const { reduceMotion } = useAccordionContext();
    const { getPanelProps, isOpen } = useAccordionItemContext();
    const panelProps = getPanelProps(rest, ref);
    const _className = cx("chakra-accordion__panel", className);
    const styles2 = useAccordionStyles();
    if (!reduceMotion) {
      delete panelProps.hidden;
    }
    const child = (0, import_jsx_runtime31.jsx)(chakra.div, { ...panelProps, __css: styles2.panel, className: _className });
    if (!reduceMotion) {
      return (0, import_jsx_runtime31.jsx)(Collapse, { in: isOpen, ...motionProps, children: child });
    }
    return child;
  }
);
AccordionPanel.displayName = "AccordionPanel";

// node_modules/@chakra-ui/accordion/dist/chunk-CRBMUVJA.mjs
var import_react40 = __toESM(require_react(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var Accordion = forwardRef3(function Accordion2({ children, reduceMotion, ...props }, ref) {
  const styles2 = useMultiStyleConfig("Accordion", props);
  const ownProps = omitThemingProps(props);
  const { htmlProps, descendants, ...context } = useAccordion(ownProps);
  const ctx = (0, import_react40.useMemo)(
    () => ({ ...context, reduceMotion: !!reduceMotion }),
    [context, reduceMotion]
  );
  return (0, import_jsx_runtime32.jsx)(AccordionDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime32.jsx)(AccordionProvider, { value: ctx, children: (0, import_jsx_runtime32.jsx)(AccordionStylesProvider, { value: styles2, children: (0, import_jsx_runtime32.jsx)(
    chakra.div,
    {
      ref,
      ...htmlProps,
      className: cx("chakra-accordion", props.className),
      __css: styles2.root,
      children
    }
  ) }) }) });
});
Accordion.displayName = "Accordion";

// node_modules/@chakra-ui/accordion/dist/chunk-3OO6EZWZ.mjs
function useAccordionItemState() {
  const { isOpen, isDisabled: isDisabled3, onClose, onOpen } = useAccordionItemContext();
  return { isOpen, onClose, isDisabled: isDisabled3, onOpen };
}

// node_modules/@chakra-ui/avatar/dist/chunk-RD3LQCU3.mjs
var [AvatarStylesProvider, useAvatarStyles] = createContext2({
  name: `AvatarStylesContext`,
  hookName: `useAvatarStyles`,
  providerName: "<Avatar/>"
});

// node_modules/@chakra-ui/avatar/dist/chunk-BVSSY3BL.mjs
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var placementMap = {
  "top-start": {
    top: "0",
    insetStart: "0",
    transform: "translate(-25%, -25%)"
  },
  "top-end": {
    top: "0",
    insetEnd: "0",
    transform: "translate(25%, -25%)"
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)"
  },
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)"
  }
};
var AvatarBadge = forwardRef3(
  function AvatarBadge2(props, ref) {
    const { placement = "bottom-end", className, ...rest } = props;
    const styles2 = useAvatarStyles();
    const placementStyles = placementMap[placement];
    const badgeStyles = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...placementStyles,
      ...styles2.badge
    };
    return (0, import_jsx_runtime33.jsx)(
      chakra.div,
      {
        ref,
        ...rest,
        className: cx("chakra-avatar__badge", className),
        __css: badgeStyles
      }
    );
  }
);
AvatarBadge.displayName = "AvatarBadge";

// node_modules/@chakra-ui/avatar/dist/chunk-O25PJXSD.mjs
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
function initials(name) {
  var _a8;
  const names = name.split(" ");
  const firstName = (_a8 = names[0]) != null ? _a8 : "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
function AvatarName(props) {
  const { name, getInitials, ...rest } = props;
  const styles2 = useAvatarStyles();
  return (0, import_jsx_runtime34.jsx)(chakra.div, { role: "img", "aria-label": name, ...rest, __css: styles2.label, children: name ? getInitials == null ? void 0 : getInitials(name) : null });
}
AvatarName.displayName = "AvatarName";

// node_modules/@chakra-ui/avatar/dist/chunk-CXYPMOCL.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var GenericAvatarIcon = (props) => (0, import_jsx_runtime35.jsxs)(
  chakra.svg,
  {
    viewBox: "0 0 128 128",
    color: "#fff",
    width: "100%",
    height: "100%",
    className: "chakra-avatar__svg",
    ...props,
    children: [
      (0, import_jsx_runtime35.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
        }
      ),
      (0, import_jsx_runtime35.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
        }
      )
    ]
  }
);

// node_modules/@chakra-ui/image/dist/chunk-X3PS6RUF.mjs
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var NativeImage = forwardRef3(function NativeImage2(props, ref) {
  const { htmlWidth, htmlHeight, alt, ...rest } = props;
  return (0, import_jsx_runtime36.jsx)("img", { width: htmlWidth, height: htmlHeight, ref, alt, ...rest });
});
NativeImage.displayName = "NativeImage";

// node_modules/@chakra-ui/image/dist/chunk-SPIKMR6I.mjs
var import_react41 = __toESM(require_react(), 1);
function useImage(props) {
  const {
    loading,
    src,
    srcSet,
    onLoad,
    onError,
    crossOrigin,
    sizes: sizes24,
    ignoreFallback
  } = props;
  const [status, setStatus] = (0, import_react41.useState)("pending");
  (0, import_react41.useEffect)(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  const imageRef = (0, import_react41.useRef)();
  const load = (0, import_react41.useCallback)(() => {
    if (!src)
      return;
    flush();
    const img = new Image();
    img.src = src;
    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    if (srcSet)
      img.srcset = srcSet;
    if (sizes24)
      img.sizes = sizes24;
    if (loading)
      img.loading = loading;
    img.onload = (event) => {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };
    img.onerror = (error2) => {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error2);
    };
    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes24, onLoad, onError, loading]);
  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  useSafeLayoutEffect(() => {
    if (ignoreFallback)
      return void 0;
    if (status === "loading") {
      load();
    }
    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);
  return ignoreFallback ? "loaded" : status;
}
var shouldShowFallbackImage = (status, fallbackStrategy) => status !== "loaded" && fallbackStrategy === "beforeLoadOrError" || status === "failed" && fallbackStrategy === "onError";

// node_modules/@chakra-ui/image/dist/chunk-QINAG4RG.mjs
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
function omit4(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
var Image2 = forwardRef3(function Image22(props, ref) {
  const {
    fallbackSrc,
    fallback,
    src,
    srcSet,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin,
    fallbackStrategy = "beforeLoadOrError",
    referrerPolicy,
    ...rest
  } = props;
  const providedFallback = fallbackSrc !== void 0 || fallback !== void 0;
  const shouldIgnoreFallbackImage = loading != null || // use can opt out of fallback image
  ignoreFallback || // if the user doesn't provide any kind of fallback we should ignore it
  !providedFallback;
  const status = useImage({
    ...props,
    crossOrigin,
    ignoreFallback: shouldIgnoreFallbackImage
  });
  const showFallbackImage = shouldShowFallbackImage(status, fallbackStrategy);
  const shared = {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...shouldIgnoreFallbackImage ? rest : omit4(rest, ["onError", "onLoad"])
  };
  if (showFallbackImage) {
    if (fallback)
      return fallback;
    return (0, import_jsx_runtime37.jsx)(
      chakra.img,
      {
        as: NativeImage,
        className: "chakra-image__placeholder",
        src: fallbackSrc,
        ...shared
      }
    );
  }
  return (0, import_jsx_runtime37.jsx)(
    chakra.img,
    {
      as: NativeImage,
      src,
      srcSet,
      crossOrigin,
      loading,
      referrerPolicy,
      className: "chakra-image",
      ...shared
    }
  );
});
Image2.displayName = "Image";

// node_modules/@chakra-ui/image/dist/chunk-YF5BD7DN.mjs
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var Img = forwardRef3((props, ref) => (0, import_jsx_runtime38.jsx)(chakra.img, { ref, as: NativeImage, className: "chakra-image", ...props }));

// node_modules/@chakra-ui/avatar/dist/chunk-V2ATFO44.mjs
var import_react42 = __toESM(require_react(), 1);
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
function AvatarImage(props) {
  const {
    src,
    srcSet,
    onError,
    onLoad,
    getInitials,
    name,
    borderRadius,
    loading,
    iconLabel,
    icon = (0, import_jsx_runtime39.jsx)(GenericAvatarIcon, {}),
    ignoreFallback,
    referrerPolicy,
    crossOrigin
  } = props;
  const status = useImage({ src, onError, crossOrigin, ignoreFallback });
  const hasLoaded = status === "loaded";
  const showFallback = !src || !hasLoaded;
  if (showFallback) {
    return name ? (0, import_jsx_runtime39.jsx)(
      AvatarName,
      {
        className: "chakra-avatar__initials",
        getInitials,
        name
      }
    ) : (0, import_react42.cloneElement)(icon, {
      role: "img",
      "aria-label": iconLabel
    });
  }
  return (0, import_jsx_runtime39.jsx)(
    chakra.img,
    {
      src,
      srcSet,
      alt: name,
      onLoad,
      referrerPolicy,
      crossOrigin: crossOrigin != null ? crossOrigin : void 0,
      className: "chakra-avatar__img",
      loading,
      __css: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius
      }
    }
  );
}
AvatarImage.displayName = "AvatarImage";

// node_modules/@chakra-ui/avatar/dist/chunk-V7PAE35Z.mjs
var import_react43 = __toESM(require_react(), 1);
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var baseStyle43 = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
};
var Avatar = forwardRef3((props, ref) => {
  const styles2 = useMultiStyleConfig("Avatar", props);
  const [isLoaded, setIsLoaded] = (0, import_react43.useState)(false);
  const {
    src,
    srcSet,
    name,
    showBorder,
    borderRadius = "full",
    onError,
    onLoad: onLoadProp,
    getInitials = initials,
    icon = (0, import_jsx_runtime40.jsx)(GenericAvatarIcon, {}),
    iconLabel = " avatar",
    loading,
    children,
    borderColor,
    ignoreFallback,
    crossOrigin,
    referrerPolicy,
    ...rest
  } = omitThemingProps(props);
  const avatarStyles = {
    borderRadius,
    borderWidth: showBorder ? "2px" : void 0,
    ...baseStyle43,
    ...styles2.container
  };
  if (borderColor) {
    avatarStyles.borderColor = borderColor;
  }
  return (0, import_jsx_runtime40.jsx)(
    chakra.span,
    {
      ref,
      ...rest,
      className: cx("chakra-avatar", props.className),
      "data-loaded": dataAttr(isLoaded),
      __css: avatarStyles,
      children: (0, import_jsx_runtime40.jsxs)(AvatarStylesProvider, { value: styles2, children: [
        (0, import_jsx_runtime40.jsx)(
          AvatarImage,
          {
            src,
            srcSet,
            loading,
            onLoad: callAllHandlers(onLoadProp, () => {
              setIsLoaded(true);
            }),
            onError,
            getInitials,
            name,
            borderRadius,
            icon,
            iconLabel,
            ignoreFallback,
            crossOrigin,
            referrerPolicy
          }
        ),
        children
      ] })
    }
  );
});
Avatar.displayName = "Avatar";

// node_modules/@chakra-ui/react-children-utils/dist/index.mjs
var import_react44 = __toESM(require_react(), 1);
function getValidChildren2(children) {
  return import_react44.Children.toArray(children).filter(
    (child) => (0, import_react44.isValidElement)(child)
  );
}

// node_modules/@chakra-ui/avatar/dist/chunk-A4TTV745.mjs
var import_react45 = __toESM(require_react(), 1);
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
function compact2(object2) {
  const clone = Object.assign({}, object2);
  for (let key in clone) {
    if (clone[key] === void 0)
      delete clone[key];
  }
  return clone;
}
var AvatarGroup = forwardRef3(
  function AvatarGroup2(props, ref) {
    const styles2 = useMultiStyleConfig("Avatar", props);
    const {
      children,
      borderColor,
      max: max2,
      spacing: spacing2 = "-0.75rem",
      borderRadius = "full",
      ...rest
    } = omitThemingProps(props);
    const validChildren = getValidChildren2(children);
    const childrenWithinMax = max2 != null ? validChildren.slice(0, max2) : validChildren;
    const excess = max2 != null ? validChildren.length - max2 : 0;
    const reversedChildren = childrenWithinMax.reverse();
    const clones = reversedChildren.map((child, index) => {
      var _a8;
      const isFirstAvatar = index === 0;
      const childProps = {
        marginEnd: isFirstAvatar ? 0 : spacing2,
        size: props.size,
        borderColor: (_a8 = child.props.borderColor) != null ? _a8 : borderColor,
        showBorder: true
      };
      return (0, import_react45.cloneElement)(child, compact2(childProps));
    });
    const groupStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row-reverse",
      ...styles2.group
    };
    const excessStyles = {
      borderRadius,
      marginStart: spacing2,
      ...baseStyle43,
      ...styles2.excessLabel
    };
    return (0, import_jsx_runtime41.jsxs)(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        ...rest,
        className: cx("chakra-avatar__group", props.className),
        children: [
          excess > 0 && (0, import_jsx_runtime41.jsx)(chakra.span, { className: "chakra-avatar__excess", __css: excessStyles, children: `+${excess}` }),
          clones
        ]
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-24NX3CUR.mjs
var [BreadcrumbStylesProvider, useBreadcrumbStyles] = createContext2({
  name: `BreadcrumbStylesContext`,
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `
});

// node_modules/@chakra-ui/breadcrumb/dist/chunk-UIZJRKRT.mjs
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbLink = forwardRef3(
  function BreadcrumbLink2(props, ref) {
    const { isCurrentPage, as, className, href, ...rest } = props;
    const styles2 = useBreadcrumbStyles();
    const sharedProps = {
      ref,
      as,
      className: cx("chakra-breadcrumb__link", className),
      ...rest
    };
    if (isCurrentPage) {
      return (0, import_jsx_runtime42.jsx)(chakra.span, { "aria-current": "page", __css: styles2.link, ...sharedProps });
    }
    return (0, import_jsx_runtime42.jsx)(chakra.a, { __css: styles2.link, href, ...sharedProps });
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-I4SEDIQD.mjs
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbSeparator = forwardRef3(
  function BreadcrumbSeparator2(props, ref) {
    const { spacing: spacing2, ...rest } = props;
    const styles2 = useBreadcrumbStyles();
    const separatorStyles = {
      mx: spacing2,
      ...styles2.separator
    };
    return (0, import_jsx_runtime43.jsx)(
      chakra.span,
      {
        ref,
        role: "presentation",
        ...rest,
        __css: separatorStyles
      }
    );
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-U7EUQI2I.mjs
var import_react46 = __toESM(require_react(), 1);
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var BreadcrumbItem = forwardRef3(
  function BreadcrumbItem2(props, ref) {
    const {
      isCurrentPage,
      separator,
      isLastChild,
      spacing: spacing2,
      children,
      className,
      ...rest
    } = props;
    const validChildren = getValidChildren2(children);
    const clones = validChildren.map((child) => {
      if (child.type === BreadcrumbLink) {
        return (0, import_react46.cloneElement)(child, {
          isCurrentPage
        });
      }
      if (child.type === BreadcrumbSeparator) {
        return (0, import_react46.cloneElement)(child, {
          spacing: spacing2,
          children: child.props.children || separator
        });
      }
      return child;
    });
    const styles2 = useBreadcrumbStyles();
    const itemStyles = {
      display: "inline-flex",
      alignItems: "center",
      ...styles2.item
    };
    const _className = cx("chakra-breadcrumb__list-item", className);
    return (0, import_jsx_runtime44.jsxs)(chakra.li, { ref, className: _className, ...rest, __css: itemStyles, children: [
      clones,
      !isLastChild && (0, import_jsx_runtime44.jsx)(BreadcrumbSeparator, { spacing: spacing2, children: separator })
    ] });
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// node_modules/@chakra-ui/breadcrumb/dist/chunk-QOOL75FN.mjs
var import_react47 = __toESM(require_react(), 1);
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var Breadcrumb = forwardRef3(
  function Breadcrumb2(props, ref) {
    const styles2 = useMultiStyleConfig("Breadcrumb", props);
    const ownProps = omitThemingProps(props);
    const {
      children,
      spacing: spacing2 = "0.5rem",
      separator = "/",
      className,
      listProps,
      ...rest
    } = ownProps;
    const validChildren = getValidChildren2(children);
    const count = validChildren.length;
    const clones = validChildren.map(
      (child, index) => (0, import_react47.cloneElement)(child, {
        separator,
        spacing: spacing2,
        isLastChild: count === index + 1
      })
    );
    const _className = cx("chakra-breadcrumb", className);
    return (0, import_jsx_runtime45.jsx)(
      chakra.nav,
      {
        ref,
        "aria-label": "breadcrumb",
        className: _className,
        __css: styles2.container,
        ...rest,
        children: (0, import_jsx_runtime45.jsx)(BreadcrumbStylesProvider, { value: styles2, children: (0, import_jsx_runtime45.jsx)(
          chakra.ol,
          {
            className: "chakra-breadcrumb__list",
            ...listProps,
            __css: {
              display: "flex",
              alignItems: "center",
              ...styles2.list
            },
            children: clones
          }
        ) })
      }
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

// node_modules/@chakra-ui/button/dist/chunk-T6ZDZOLO.mjs
var [ButtonGroupProvider, useButtonGroup] = createContext2({
  strict: false,
  name: "ButtonGroupContext"
});

// node_modules/@chakra-ui/button/dist/chunk-DA7QIPTJ.mjs
var import_react48 = __toESM(require_react(), 1);
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var attachedStyles = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
  }
};
var gapStyles = {
  horizontal: (spacing2) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: spacing2 }
  }),
  vertical: (spacing2) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: spacing2 }
  })
};
var ButtonGroup = forwardRef3(
  function ButtonGroup2(props, ref) {
    const {
      size: size2,
      colorScheme,
      variant,
      className,
      spacing: spacing2 = "0.5rem",
      isAttached,
      isDisabled: isDisabled3,
      orientation = "horizontal",
      ...rest
    } = props;
    const _className = cx("chakra-button__group", className);
    const context = (0, import_react48.useMemo)(
      () => ({ size: size2, colorScheme, variant, isDisabled: isDisabled3 }),
      [size2, colorScheme, variant, isDisabled3]
    );
    let groupStyles = {
      display: "inline-flex",
      ...isAttached ? attachedStyles[orientation] : gapStyles[orientation](spacing2)
    };
    const isVertical = orientation === "vertical";
    return (0, import_jsx_runtime46.jsx)(ButtonGroupProvider, { value: context, children: (0, import_jsx_runtime46.jsx)(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        className: _className,
        "data-attached": isAttached ? "" : void 0,
        "data-orientation": orientation,
        flexDir: isVertical ? "column" : void 0,
        ...rest
      }
    ) });
  }
);
ButtonGroup.displayName = "ButtonGroup";

// node_modules/@chakra-ui/button/dist/chunk-J37R6SZE.mjs
var import_react49 = __toESM(require_react(), 1);
function useButtonType(value) {
  const [isButton, setIsButton] = (0, import_react49.useState)(!value);
  const refCallback = (0, import_react49.useCallback)((node3) => {
    if (!node3)
      return;
    setIsButton(node3.tagName === "BUTTON");
  }, []);
  const type = isButton ? "button" : void 0;
  return { ref: refCallback, type };
}

// node_modules/@chakra-ui/button/dist/chunk-3RENZ2UO.mjs
var import_react50 = __toESM(require_react(), 1);
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
function ButtonIcon(props) {
  const { children, className, ...rest } = props;
  const _children = (0, import_react50.isValidElement)(children) ? (0, import_react50.cloneElement)(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = cx("chakra-button__icon", className);
  return (0, import_jsx_runtime47.jsx)(
    chakra.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
}
ButtonIcon.displayName = "ButtonIcon";

// node_modules/@chakra-ui/button/dist/chunk-QB2Y5VKH.mjs
var import_react51 = __toESM(require_react(), 1);
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
function ButtonSpinner(props) {
  const {
    label,
    placement,
    spacing: spacing2 = "0.5rem",
    children = (0, import_jsx_runtime48.jsx)(Spinner, { color: "currentColor", width: "1em", height: "1em" }),
    className,
    __css,
    ...rest
  } = props;
  const _className = cx("chakra-button__spinner", className);
  const marginProp = placement === "start" ? "marginEnd" : "marginStart";
  const spinnerStyles = (0, import_react51.useMemo)(
    () => ({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing2 : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css
    }),
    [__css, label, marginProp, spacing2]
  );
  return (0, import_jsx_runtime48.jsx)(chakra.div, { className: _className, ...rest, __css: spinnerStyles, children });
}
ButtonSpinner.displayName = "ButtonSpinner";

// node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs
var import_react52 = __toESM(require_react(), 1);
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var Button = forwardRef3((props, ref) => {
  const group = useButtonGroup();
  const styles2 = useStyleConfig("Button", { ...group, ...props });
  const {
    isDisabled: isDisabled3 = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing: iconSpacing2 = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as,
    ...rest
  } = omitThemingProps(props);
  const buttonStyles = (0, import_react52.useMemo)(() => {
    const _focus = { ...styles2 == null ? void 0 : styles2["_focus"], zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...styles2,
      ...!!group && { _focus }
    };
  }, [styles2, group]);
  const { ref: _ref2, type: defaultType } = useButtonType(as);
  const contentProps = { rightIcon, leftIcon, iconSpacing: iconSpacing2, children };
  return (0, import_jsx_runtime49.jsxs)(
    chakra.button,
    {
      ref: useMergeRefs(ref, _ref2),
      as,
      type: type != null ? type : defaultType,
      "data-active": dataAttr(isActive),
      "data-loading": dataAttr(isLoading),
      __css: buttonStyles,
      className: cx("chakra-button", className),
      ...rest,
      disabled: isDisabled3 || isLoading,
      children: [
        isLoading && spinnerPlacement === "start" && (0, import_jsx_runtime49.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--start",
            label: loadingText,
            placement: "start",
            spacing: iconSpacing2,
            children: spinner
          }
        ),
        isLoading ? loadingText || (0, import_jsx_runtime49.jsx)(chakra.span, { opacity: 0, children: (0, import_jsx_runtime49.jsx)(ButtonContent, { ...contentProps }) }) : (0, import_jsx_runtime49.jsx)(ButtonContent, { ...contentProps }),
        isLoading && spinnerPlacement === "end" && (0, import_jsx_runtime49.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--end",
            label: loadingText,
            placement: "end",
            spacing: iconSpacing2,
            children: spinner
          }
        )
      ]
    }
  );
});
Button.displayName = "Button";
function ButtonContent(props) {
  const { leftIcon, rightIcon, children, iconSpacing: iconSpacing2 } = props;
  return (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
    leftIcon && (0, import_jsx_runtime49.jsx)(ButtonIcon, { marginEnd: iconSpacing2, children: leftIcon }),
    children,
    rightIcon && (0, import_jsx_runtime49.jsx)(ButtonIcon, { marginStart: iconSpacing2, children: rightIcon })
  ] });
}

// node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs
var import_react53 = __toESM(require_react(), 1);
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var IconButton = forwardRef3(
  (props, ref) => {
    const { icon, children, isRound, "aria-label": ariaLabel, ...rest } = props;
    const element = icon || children;
    const _children = (0, import_react53.isValidElement)(element) ? (0, import_react53.cloneElement)(element, {
      "aria-hidden": true,
      focusable: false
    }) : null;
    return (0, import_jsx_runtime50.jsx)(
      Button,
      {
        padding: "0",
        borderRadius: isRound ? "full" : void 0,
        ref,
        "aria-label": ariaLabel,
        ...rest,
        children: _children
      }
    );
  }
);
IconButton.displayName = "IconButton";

// node_modules/@chakra-ui/card/dist/chunk-HAZMUPV3.mjs
var [CardStylesProvider, useCardStyles] = createStylesContext("Card");

// node_modules/@chakra-ui/card/dist/chunk-FHHZMTWR.mjs
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var CardBody = forwardRef3(function CardBody2(props, ref) {
  const { className, ...rest } = props;
  const styles2 = useCardStyles();
  return (0, import_jsx_runtime51.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-card__body", className),
      __css: styles2.body,
      ...rest
    }
  );
});

// node_modules/@chakra-ui/card/dist/chunk-BDSTZZXD.mjs
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var CardFooter = forwardRef3(
  function CardFooter2(props, ref) {
    const { className, justify, ...rest } = props;
    const styles2 = useCardStyles();
    return (0, import_jsx_runtime52.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__footer", className),
        __css: {
          display: "flex",
          justifyContent: justify,
          ...styles2.footer
        },
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/card/dist/chunk-2EW3JUUD.mjs
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var CardHeader = forwardRef3(
  function CardHeader2(props, ref) {
    const { className, ...rest } = props;
    const styles2 = useCardStyles();
    return (0, import_jsx_runtime53.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-card__header", className),
        __css: styles2.header,
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/card/dist/chunk-YQO7BFFX.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var Card = forwardRef3(function Card2(props, ref) {
  const {
    className,
    children,
    direction: direction2 = "column",
    justify,
    align,
    ...rest
  } = omitThemingProps(props);
  const styles2 = useMultiStyleConfig("Card", props);
  return (0, import_jsx_runtime54.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-card", className),
      __css: {
        display: "flex",
        flexDirection: direction2,
        justifyContent: justify,
        alignItems: align,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...styles2.container
      },
      ...rest,
      children: (0, import_jsx_runtime54.jsx)(CardStylesProvider, { value: styles2, children })
    }
  );
});

// node_modules/@chakra-ui/checkbox/dist/chunk-LYGBQ47X.mjs
var [CheckboxGroupProvider, useCheckboxGroupContext] = createContext2({
  name: "CheckboxGroupContext",
  strict: false
});

// node_modules/@chakra-ui/checkbox/dist/chunk-TOQK4WO2.mjs
var import_react54 = __toESM(require_react(), 1);
function isInputEvent2(value) {
  return value && isObject(value) && isObject(value.target);
}
function useCheckboxGroup(props = {}) {
  const {
    defaultValue,
    value: valueProp,
    onChange,
    isDisabled: isDisabled3,
    isNative
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue || [],
    onChange: onChangeProp
  });
  const handleChange = (0, import_react54.useCallback)(
    (eventOrValue) => {
      if (!value)
        return;
      const isChecked = isInputEvent2(eventOrValue) ? eventOrValue.target.checked : !value.includes(eventOrValue);
      const selectedValue = isInputEvent2(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      const nextValue = isChecked ? [...value, selectedValue] : value.filter((v) => String(v) !== String(selectedValue));
      setValue(nextValue);
    },
    [setValue, value]
  );
  const getCheckboxProps = (0, import_react54.useCallback)(
    (props2 = {}) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        [checkedKey]: value.some((val) => String(props2.value) === String(val)),
        onChange: handleChange
      };
    },
    [handleChange, isNative, value]
  );
  return {
    value,
    isDisabled: isDisabled3,
    onChange: handleChange,
    setValue,
    getCheckboxProps
  };
}

// node_modules/@chakra-ui/checkbox/dist/chunk-CKJ5T3MX.mjs
var import_react55 = __toESM(require_react(), 1);
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
function CheckboxGroup(props) {
  const { colorScheme, size: size2, variant, children, isDisabled: isDisabled3 } = props;
  const { value, onChange } = useCheckboxGroup(props);
  const group = (0, import_react55.useMemo)(
    () => ({
      size: size2,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled: isDisabled3
    }),
    [size2, onChange, colorScheme, value, variant, isDisabled3]
  );
  return (0, import_jsx_runtime55.jsx)(CheckboxGroupProvider, { value: group, children });
}
CheckboxGroup.displayName = "CheckboxGroup";

// node_modules/@chakra-ui/checkbox/dist/chunk-2TOCDA5N.mjs
var import_react56 = __toESM(require_react(), 1);
function useInitialAnimationState(isChecked) {
  const [previousIsChecked, setPreviousIsChecked] = (0, import_react56.useState)(isChecked);
  const [shouldAnimate, setShouldAnimate] = (0, import_react56.useState)(false);
  if (isChecked !== previousIsChecked) {
    setShouldAnimate(true);
    setPreviousIsChecked(isChecked);
  }
  return shouldAnimate;
}

// node_modules/@chakra-ui/checkbox/dist/chunk-ULEC7HZU.mjs
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
function CheckIcon2(props) {
  return (0, import_jsx_runtime56.jsx)(
    chakra.svg,
    {
      width: "1.2em",
      viewBox: "0 0 12 10",
      style: {
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16
      },
      ...props,
      children: (0, import_jsx_runtime56.jsx)("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function IndeterminateIcon(props) {
  return (0, import_jsx_runtime56.jsx)(
    chakra.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...props,
      children: (0, import_jsx_runtime56.jsx)("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function CheckboxIcon(props) {
  const { isIndeterminate, isChecked, ...rest } = props;
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon2;
  return isChecked || isIndeterminate ? (0, import_jsx_runtime56.jsx)(
    chakra.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: (0, import_jsx_runtime56.jsx)(BaseIcon, { ...rest })
    }
  ) : null;
}

// node_modules/@chakra-ui/form-control/dist/chunk-DFWC5MHP.mjs
var import_react57 = __toESM(require_react(), 1);
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var [FormControlStylesProvider, useFormControlStyles] = createContext2({
  name: `FormControlStylesContext`,
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
});
var [FormControlProvider, useFormControlContext] = createContext2({
  strict: false,
  name: "FormControlContext"
});
function useFormControlProvider(props) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled: isDisabled3,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = (0, import_react57.useId)();
  const id = idProp || `field-${uuid}`;
  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = (0, import_react57.useState)(false);
  const [hasHelpText, setHasHelpText] = (0, import_react57.useState)(false);
  const [isFocused, setFocus] = (0, import_react57.useState)(false);
  const getHelpTextProps = (0, import_react57.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props2,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: mergeRefs2(forwardedRef, (node3) => {
        if (!node3)
          return;
        setHasHelpText(true);
      })
    }),
    [helpTextId]
  );
  const getLabelProps = (0, import_react57.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled3),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly),
      id: props2.id !== void 0 ? props2.id : labelId,
      htmlFor: props2.htmlFor !== void 0 ? props2.htmlFor : id
    }),
    [id, isDisabled3, isFocused, isInvalid, isReadOnly, labelId]
  );
  const getErrorMessageProps = (0, import_react57.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...props2,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: mergeRefs2(forwardedRef, (node3) => {
        if (!node3)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    }),
    [feedbackId]
  );
  const getRootProps = (0, import_react57.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ...htmlProps,
      ref: forwardedRef,
      role: "group",
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled3),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly)
    }),
    [htmlProps, isDisabled3, isFocused, isInvalid, isReadOnly]
  );
  const getRequiredIndicatorProps = (0, import_react57.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    }),
    []
  );
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled3,
    isFocused: !!isFocused,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
var FormControl = forwardRef3(
  function FormControl2(props, ref) {
    const styles2 = useMultiStyleConfig("Form", props);
    const ownProps = omitThemingProps(props);
    const {
      getRootProps,
      htmlProps: _,
      ...context
    } = useFormControlProvider(ownProps);
    const className = cx("chakra-form-control", props.className);
    return (0, import_jsx_runtime57.jsx)(FormControlProvider, { value: context, children: (0, import_jsx_runtime57.jsx)(FormControlStylesProvider, { value: styles2, children: (0, import_jsx_runtime57.jsx)(
      chakra.div,
      {
        ...getRootProps({}, ref),
        className,
        __css: styles2["container"]
      }
    ) }) });
  }
);
FormControl.displayName = "FormControl";
var FormHelperText = forwardRef3(
  function FormHelperText2(props, ref) {
    const field = useFormControlContext();
    const styles2 = useFormControlStyles();
    const className = cx("chakra-form__helper-text", props.className);
    return (0, import_jsx_runtime57.jsx)(
      chakra.div,
      {
        ...field == null ? void 0 : field.getHelpTextProps(props, ref),
        __css: styles2.helperText,
        className
      }
    );
  }
);
FormHelperText.displayName = "FormHelperText";

// node_modules/@chakra-ui/form-control/dist/chunk-VGESXGVT.mjs
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var [FormErrorStylesProvider, useFormErrorStyles] = createContext2({
  name: `FormErrorStylesContext`,
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
});
var FormErrorMessage = forwardRef3(
  (props, ref) => {
    const styles2 = useMultiStyleConfig("FormError", props);
    const ownProps = omitThemingProps(props);
    const field = useFormControlContext();
    if (!(field == null ? void 0 : field.isInvalid))
      return null;
    return (0, import_jsx_runtime58.jsx)(FormErrorStylesProvider, { value: styles2, children: (0, import_jsx_runtime58.jsx)(
      chakra.div,
      {
        ...field == null ? void 0 : field.getErrorMessageProps(ownProps, ref),
        className: cx("chakra-form__error-message", props.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...styles2.text
        }
      }
    ) });
  }
);
FormErrorMessage.displayName = "FormErrorMessage";
var FormErrorIcon = forwardRef3((props, ref) => {
  const styles2 = useFormErrorStyles();
  const field = useFormControlContext();
  if (!(field == null ? void 0 : field.isInvalid))
    return null;
  const _className = cx("chakra-form__error-icon", props.className);
  return (0, import_jsx_runtime58.jsx)(
    Icon,
    {
      ref,
      "aria-hidden": true,
      ...props,
      __css: styles2.icon,
      className: _className,
      children: (0, import_jsx_runtime58.jsx)(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
FormErrorIcon.displayName = "FormErrorIcon";

// node_modules/@chakra-ui/form-control/dist/chunk-H46NUPBZ.mjs
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var FormLabel = forwardRef3(function FormLabel2(passedProps, ref) {
  var _a8;
  const styles2 = useStyleConfig("FormLabel", passedProps);
  const props = omitThemingProps(passedProps);
  const {
    className,
    children,
    requiredIndicator = (0, import_jsx_runtime59.jsx)(RequiredIndicator, {}),
    optionalIndicator = null,
    ...rest
  } = props;
  const field = useFormControlContext();
  const ownProps = (_a8 = field == null ? void 0 : field.getLabelProps(rest, ref)) != null ? _a8 : { ref, ...rest };
  return (0, import_jsx_runtime59.jsxs)(
    chakra.label,
    {
      ...ownProps,
      className: cx("chakra-form__label", props.className),
      __css: {
        display: "block",
        textAlign: "start",
        ...styles2
      },
      children: [
        children,
        (field == null ? void 0 : field.isRequired) ? requiredIndicator : optionalIndicator
      ]
    }
  );
});
FormLabel.displayName = "FormLabel";
var RequiredIndicator = forwardRef3(
  function RequiredIndicator2(props, ref) {
    const field = useFormControlContext();
    const styles2 = useFormControlStyles();
    if (!(field == null ? void 0 : field.isRequired))
      return null;
    const className = cx("chakra-form__required-indicator", props.className);
    return (0, import_jsx_runtime59.jsx)(
      chakra.span,
      {
        ...field == null ? void 0 : field.getRequiredIndicatorProps(props, ref),
        __css: styles2.requiredIndicator,
        className
      }
    );
  }
);
RequiredIndicator.displayName = "RequiredIndicator";

// node_modules/@chakra-ui/form-control/dist/chunk-56K2BSAJ.mjs
function useFormControl(props) {
  const { isDisabled: isDisabled3, isInvalid, isReadOnly, isRequired, ...rest } = useFormControlProps(props);
  return {
    ...rest,
    disabled: isDisabled3,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly)
  };
}
function useFormControlProps(props) {
  var _a8, _b5, _c3;
  const field = useFormControlContext();
  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled: isDisabled3,
    onFocus: onFocus3,
    onBlur: onBlur3,
    ...rest
  } = props;
  const labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if ((field == null ? void 0 : field.hasFeedbackText) && (field == null ? void 0 : field.isInvalid)) {
    labelIds.push(field.feedbackId);
  }
  if (field == null ? void 0 : field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return {
    ...rest,
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id != null ? id : field == null ? void 0 : field.id,
    isDisabled: (_a8 = disabled != null ? disabled : isDisabled3) != null ? _a8 : field == null ? void 0 : field.isDisabled,
    isReadOnly: (_b5 = readOnly != null ? readOnly : isReadOnly) != null ? _b5 : field == null ? void 0 : field.isReadOnly,
    isRequired: (_c3 = required != null ? required : isRequired) != null ? _c3 : field == null ? void 0 : field.isRequired,
    isInvalid: isInvalid != null ? isInvalid : field == null ? void 0 : field.isInvalid,
    onFocus: callAllHandlers(field == null ? void 0 : field.onFocus, onFocus3),
    onBlur: callAllHandlers(field == null ? void 0 : field.onBlur, onBlur3)
  };
}

// node_modules/@chakra-ui/visually-hidden/dist/chunk-3JHDQ75O.mjs
var visuallyHiddenStyle = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};

// node_modules/@chakra-ui/visually-hidden/dist/chunk-KO6Q73AP.mjs
var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";
var VisuallyHiddenInput = chakra("input", {
  baseStyle: visuallyHiddenStyle
});
VisuallyHiddenInput.displayName = "VisuallyHiddenInput";

// node_modules/@zag-js/dom-query/dist/index.mjs
function itemById(v, id) {
  return v.find((node3) => node3.id === id);
}
function indexOfId(v, id) {
  const item = itemById(v, id);
  return item ? v.indexOf(item) : -1;
}
var getValueText = (item) => item.dataset.valuetext ?? item.textContent ?? "";
var match2 = (valueText, query2) => valueText.toLowerCase().startsWith(query2.toLowerCase());
var wrap2 = (v, idx) => {
  return v.map((_, index) => v[(Math.max(idx, 0) + index) % v.length]);
};
function getByText(v, text, currentId) {
  const index = currentId ? indexOfId(v, currentId) : -1;
  let items = currentId ? wrap2(v, index) : v;
  const isSingleKey = text.length === 1;
  if (isSingleKey) {
    items = items.filter((item) => item.id !== currentId);
  }
  return items.find((item) => match2(getValueText(item), text));
}
function getByTypeaheadImpl(_items, options) {
  const { state: state2, activeId, key, timeout = 350 } = options;
  const search = state2.keysSoFar + key;
  const isRepeated = search.length > 1 && Array.from(search).every((char2) => char2 === search[0]);
  const query2 = isRepeated ? search[0] : search;
  let items = _items.slice();
  const next2 = getByText(items, query2, activeId);
  function cleanup() {
    clearTimeout(state2.timer);
    state2.timer = -1;
  }
  function update(value) {
    state2.keysSoFar = value;
    cleanup();
    if (value !== "") {
      state2.timer = +setTimeout(() => {
        update("");
        cleanup();
      }, timeout);
    }
  }
  update(search);
  return next2;
}
var getByTypeahead = Object.assign(getByTypeaheadImpl, {
  defaultOptions: { keysSoFar: "", timer: -1 },
  isValidEvent: isValidTypeaheadEvent
});
function isValidTypeaheadEvent(event) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
var isDom = () => typeof document !== "undefined";

// node_modules/@zag-js/focus-visible/dist/index.mjs
var hasSetup = false;
var modality = null;
var hasEventBeforeFocus = false;
var hasBlurredWindowRecently = false;
var handlers = /* @__PURE__ */ new Set();
function trigger(modality2, event) {
  handlers.forEach((handler) => handler(modality2, event));
}
var isMac = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : false;
function isValidKey(e) {
  return !(e.metaKey || !isMac && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function onKeyboardEvent(event) {
  hasEventBeforeFocus = true;
  if (isValidKey(event)) {
    modality = "keyboard";
    trigger("keyboard", event);
  }
}
function onPointerEvent(event) {
  modality = "pointer";
  if (event.type === "mousedown" || event.type === "pointerdown") {
    hasEventBeforeFocus = true;
    const target = event.composedPath ? event.composedPath()[0] : event.target;
    let matches = false;
    try {
      matches = target.matches(":focus-visible");
    } catch {
    }
    if (matches)
      return;
    trigger("pointer", event);
  }
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  return event.detail === 0 && !event.pointerType;
}
function onClickEvent(e) {
  if (isVirtualClick(e)) {
    hasEventBeforeFocus = true;
    modality = "virtual";
  }
}
function onWindowFocus(event) {
  if (event.target === window || event.target === document) {
    return;
  }
  if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
    modality = "virtual";
    trigger("virtual", event);
  }
  hasEventBeforeFocus = false;
  hasBlurredWindowRecently = false;
}
function onWindowBlur() {
  hasEventBeforeFocus = false;
  hasBlurredWindowRecently = true;
}
function isFocusVisible() {
  return modality !== "pointer";
}
function setupGlobalFocusEvents() {
  if (!isDom() || hasSetup) {
    return;
  }
  const { focus: focus2 } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function focusElement(...args) {
    hasEventBeforeFocus = true;
    focus2.apply(this, args);
  };
  document.addEventListener("keydown", onKeyboardEvent, true);
  document.addEventListener("keyup", onKeyboardEvent, true);
  document.addEventListener("click", onClickEvent, true);
  window.addEventListener("focus", onWindowFocus, true);
  window.addEventListener("blur", onWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", onPointerEvent, true);
    document.addEventListener("pointermove", onPointerEvent, true);
    document.addEventListener("pointerup", onPointerEvent, true);
  } else {
    document.addEventListener("mousedown", onPointerEvent, true);
    document.addEventListener("mousemove", onPointerEvent, true);
    document.addEventListener("mouseup", onPointerEvent, true);
  }
  hasSetup = true;
}
function trackFocusVisible(fn2) {
  setupGlobalFocusEvents();
  fn2(isFocusVisible());
  const handler = () => fn2(isFocusVisible());
  handlers.add(handler);
  return () => {
    handlers.delete(handler);
  };
}

// node_modules/@chakra-ui/checkbox/dist/chunk-7D6N5TE5.mjs
var import_react58 = __toESM(require_react(), 1);
function omit5(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
function useCheckbox(props = {}) {
  const formControlProps = useFormControlProps(props);
  const {
    isDisabled: isDisabled3,
    isReadOnly,
    isRequired,
    isInvalid,
    id,
    onBlur: onBlur3,
    onFocus: onFocus3,
    "aria-describedby": ariaDescribedBy
  } = formControlProps;
  const {
    defaultChecked,
    isChecked: checkedProp,
    isFocusable: isFocusable3,
    onChange,
    isIndeterminate,
    name,
    value,
    tabIndex = void 0,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-invalid": ariaInvalid,
    ...rest
  } = props;
  const htmlProps = omit5(rest, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]);
  const onChangeProp = useCallbackRef(onChange);
  const onBlurProp = useCallbackRef(onBlur3);
  const onFocusProp = useCallbackRef(onFocus3);
  const [isFocusVisible2, setIsFocusVisible] = (0, import_react58.useState)(false);
  const [isFocused, setFocused] = (0, import_react58.useState)(false);
  const [isHovered, setHovered] = (0, import_react58.useState)(false);
  const [isActive, setActive] = (0, import_react58.useState)(false);
  (0, import_react58.useEffect)(() => {
    return trackFocusVisible(setIsFocusVisible);
  }, []);
  const inputRef = (0, import_react58.useRef)(null);
  const [rootIsLabelElement, setRootIsLabelElement] = (0, import_react58.useState)(true);
  const [checkedState, setCheckedState] = (0, import_react58.useState)(!!defaultChecked);
  const isControlled = checkedProp !== void 0;
  const isChecked = isControlled ? checkedProp : checkedState;
  const handleChange = (0, import_react58.useCallback)(
    (event) => {
      if (isReadOnly || isDisabled3) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        if (isChecked) {
          setCheckedState(event.target.checked);
        } else {
          setCheckedState(isIndeterminate ? true : event.target.checked);
        }
      }
      onChangeProp == null ? void 0 : onChangeProp(event);
    },
    [
      isReadOnly,
      isDisabled3,
      isChecked,
      isControlled,
      isIndeterminate,
      onChangeProp
    ]
  );
  useSafeLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isIndeterminate]);
  useUpdateEffect(() => {
    if (isDisabled3) {
      setFocused(false);
    }
  }, [isDisabled3, setFocused]);
  useSafeLayoutEffect(() => {
    const el = inputRef.current;
    if (!(el == null ? void 0 : el.form))
      return;
    const formResetListener = () => {
      setCheckedState(!!defaultChecked);
    };
    el.form.addEventListener("reset", formResetListener);
    return () => {
      var _a8;
      return (_a8 = el.form) == null ? void 0 : _a8.removeEventListener("reset", formResetListener);
    };
  }, []);
  const trulyDisabled = isDisabled3 && !isFocusable3;
  const onKeyDown = (0, import_react58.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = (0, import_react58.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.checked !== isChecked;
    if (notInSync) {
      setCheckedState(inputRef.current.checked);
    }
  }, [inputRef.current]);
  const getCheckboxProps = (0, import_react58.useCallback)(
    (props2 = {}, forwardedRef = null) => {
      const onPressDown = (event) => {
        if (isFocused) {
          event.preventDefault();
        }
        setActive(true);
      };
      return {
        ...props2,
        ref: forwardedRef,
        "data-active": dataAttr(isActive),
        "data-hover": dataAttr(isHovered),
        "data-checked": dataAttr(isChecked),
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocused && isFocusVisible2),
        "data-indeterminate": dataAttr(isIndeterminate),
        "data-disabled": dataAttr(isDisabled3),
        "data-invalid": dataAttr(isInvalid),
        "data-readonly": dataAttr(isReadOnly),
        "aria-hidden": true,
        onMouseDown: callAllHandlers(props2.onMouseDown, onPressDown),
        onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
        onMouseEnter: callAllHandlers(
          props2.onMouseEnter,
          () => setHovered(true)
        ),
        onMouseLeave: callAllHandlers(
          props2.onMouseLeave,
          () => setHovered(false)
        )
      };
    },
    [
      isActive,
      isChecked,
      isDisabled3,
      isFocused,
      isFocusVisible2,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly
    ]
  );
  const getIndicatorProps = (0, import_react58.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-checked": dataAttr(isChecked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible2),
      "data-indeterminate": dataAttr(isIndeterminate),
      "data-disabled": dataAttr(isDisabled3),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly)
    }),
    [
      isActive,
      isChecked,
      isDisabled3,
      isFocused,
      isFocusVisible2,
      isHovered,
      isIndeterminate,
      isInvalid,
      isReadOnly
    ]
  );
  const getRootProps = (0, import_react58.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...htmlProps,
      ...props2,
      ref: mergeRefs2(forwardedRef, (node3) => {
        if (!node3)
          return;
        setRootIsLabelElement(node3.tagName === "LABEL");
      }),
      onClick: callAllHandlers(props2.onClick, () => {
        var _a8;
        if (!rootIsLabelElement) {
          (_a8 = inputRef.current) == null ? void 0 : _a8.click();
          requestAnimationFrame(() => {
            var _a24;
            (_a24 = inputRef.current) == null ? void 0 : _a24.focus({ preventScroll: true });
          });
        }
      }),
      "data-disabled": dataAttr(isDisabled3),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    }),
    [htmlProps, isDisabled3, isChecked, isInvalid, rootIsLabelElement]
  );
  const getInputProps = (0, import_react58.useCallback)(
    (props2 = {}, forwardedRef = null) => {
      return {
        ...props2,
        ref: mergeRefs2(inputRef, forwardedRef),
        type: "checkbox",
        name,
        value,
        id,
        tabIndex,
        onChange: callAllHandlers(props2.onChange, handleChange),
        onBlur: callAllHandlers(
          props2.onBlur,
          onBlurProp,
          () => setFocused(false)
        ),
        onFocus: callAllHandlers(
          props2.onFocus,
          onFocusProp,
          () => setFocused(true)
        ),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
        required: isRequired,
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-invalid": ariaInvalid ? Boolean(ariaInvalid) : isInvalid,
        "aria-describedby": ariaDescribedBy,
        "aria-disabled": isDisabled3,
        style: visuallyHiddenStyle
      };
    },
    [
      name,
      value,
      id,
      handleChange,
      onBlurProp,
      onFocusProp,
      onKeyDown,
      onKeyUp,
      isRequired,
      isChecked,
      trulyDisabled,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      ariaInvalid,
      isInvalid,
      ariaDescribedBy,
      isDisabled3,
      tabIndex
    ]
  );
  const getLabelProps = (0, import_react58.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent),
      "data-disabled": dataAttr(isDisabled3),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    }),
    [isChecked, isDisabled3, isInvalid]
  );
  const state2 = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isIndeterminate,
    isDisabled: isDisabled3,
    isReadOnly,
    isRequired
  };
  return {
    state: state2,
    getRootProps,
    getCheckboxProps,
    getIndicatorProps,
    getInputProps,
    getLabelProps,
    htmlProps
  };
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@chakra-ui/checkbox/dist/chunk-CWVAJCXJ.mjs
var import_react59 = __toESM(require_react(), 1);
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var controlStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
};
var rootStyles = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
};
var checkAnim = keyframes({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: "scale(0.95)"
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: "scale(1)"
  }
});
var indeterminateOpacityAnim = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var indeterminateScaleAnim = keyframes({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
});
var Checkbox = forwardRef3(function Checkbox2(props, ref) {
  const group = useCheckboxGroupContext();
  const mergedProps = { ...group, ...props };
  const styles2 = useMultiStyleConfig("Checkbox", mergedProps);
  const ownProps = omitThemingProps(props);
  const {
    spacing: spacing2 = "0.5rem",
    className,
    children,
    iconColor,
    iconSize,
    icon = (0, import_jsx_runtime60.jsx)(CheckboxIcon, {}),
    isChecked: isCheckedProp,
    isDisabled: isDisabled3 = group == null ? void 0 : group.isDisabled,
    onChange: onChangeProp,
    inputProps,
    ...rest
  } = ownProps;
  let isChecked = isCheckedProp;
  if ((group == null ? void 0 : group.value) && ownProps.value) {
    isChecked = group.value.includes(ownProps.value);
  }
  let onChange = onChangeProp;
  if ((group == null ? void 0 : group.onChange) && ownProps.value) {
    onChange = callAll(group.onChange, onChangeProp);
  }
  const {
    state: state2,
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps
  } = useCheckbox({
    ...rest,
    isDisabled: isDisabled3,
    isChecked,
    onChange
  });
  const shouldAnimate = useInitialAnimationState(state2.isChecked);
  const iconStyles = (0, import_react59.useMemo)(
    () => ({
      animation: !shouldAnimate ? void 0 : state2.isIndeterminate ? `${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear` : `${checkAnim} 200ms linear`,
      fontSize: iconSize,
      color: iconColor,
      ...styles2.icon
    }),
    [iconColor, iconSize, shouldAnimate, state2.isIndeterminate, styles2.icon]
  );
  const clonedIcon = (0, import_react59.cloneElement)(icon, {
    __css: iconStyles,
    isIndeterminate: state2.isIndeterminate,
    isChecked: state2.isChecked
  });
  return (0, import_jsx_runtime60.jsxs)(
    chakra.label,
    {
      __css: { ...rootStyles, ...styles2.container },
      className: cx("chakra-checkbox", className),
      ...getRootProps(),
      children: [
        (0, import_jsx_runtime60.jsx)(
          "input",
          {
            className: "chakra-checkbox__input",
            ...getInputProps(inputProps, ref)
          }
        ),
        (0, import_jsx_runtime60.jsx)(
          chakra.span,
          {
            __css: { ...controlStyles, ...styles2.control },
            className: "chakra-checkbox__control",
            ...getCheckboxProps(),
            children: clonedIcon
          }
        ),
        children && (0, import_jsx_runtime60.jsx)(
          chakra.span,
          {
            className: "chakra-checkbox__label",
            ...getLabelProps(),
            __css: {
              marginStart: spacing2,
              ...styles2.label
            },
            children
          }
        )
      ]
    }
  );
});
Checkbox.displayName = "Checkbox";

// node_modules/@chakra-ui/control-box/dist/chunk-P2CZ2AGB.mjs
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var ControlBox = (props) => {
  const {
    type = "checkbox",
    _hover,
    _invalid,
    _disabled,
    _focus,
    _checked,
    _child = { opacity: 0 },
    _checkedAndChild = { opacity: 1 },
    _checkedAndDisabled,
    _checkedAndFocus,
    _checkedAndHover,
    children,
    ...rest
  } = props;
  const checkedAndDisabled = `input[type=${type}]:checked:disabled + &`;
  const checkedAndHover = `input[type=${type}]:checked:hover:not(:disabled) + &`;
  const checkedAndFocus = `input[type=${type}]:checked:focus + &`;
  const disabled = `input[type=${type}]:disabled + &`;
  const focus2 = `input[type=${type}]:focus + &`;
  const hover = `input[type=${type}]:hover:not(:disabled):not(:checked) + &`;
  const checked = `input[type=${type}]:checked + &, input[type=${type}][aria-checked=mixed] + &`;
  const invalid = `input[type=${type}][aria-invalid=true] + &`;
  const child = `& > *`;
  return (0, import_jsx_runtime61.jsx)(
    chakra.div,
    {
      ...rest,
      "aria-hidden": true,
      __css: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transitionProperty: "common",
        transitionDuration: "fast",
        flexShrink: 0,
        [focus2]: _focus,
        [hover]: _hover,
        [disabled]: _disabled,
        [invalid]: _invalid,
        [checkedAndDisabled]: _checkedAndDisabled,
        [checkedAndFocus]: _checkedAndFocus,
        [checkedAndHover]: _checkedAndHover,
        [child]: _child,
        [checked]: {
          ..._checked,
          [child]: _checkedAndChild
        }
      },
      children
    }
  );
};
ControlBox.displayName = "ControlBox";

// node_modules/@chakra-ui/number-utils/dist/index.mjs
function toNumber(value) {
  const num = parseFloat(value);
  return typeof num !== "number" || Number.isNaN(num) ? 0 : num;
}
function toPrecision2(value, precision) {
  let nextValue = toNumber(value);
  const scaleFactor = 10 ** (precision != null ? precision : 10);
  nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
  return precision ? nextValue.toFixed(precision) : nextValue.toString();
}
function countDecimalPlaces2(value) {
  if (!Number.isFinite(value))
    return 0;
  let e = 1;
  let p = 0;
  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p += 1;
  }
  return p;
}
function valueToPercent2(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
function percentToValue2(percent, min2, max2) {
  return (max2 - min2) * percent + min2;
}
function roundValueToStep2(value, from2, step) {
  const nextValue = Math.round((value - from2) / step) * step + from2;
  const precision = countDecimalPlaces2(step);
  return toPrecision2(nextValue, precision);
}
function clampValue2(value, min2, max2) {
  if (value == null)
    return value;
  if (max2 < min2) {
    console.warn("clamp: max cannot be less than min");
  }
  return Math.min(Math.max(value, min2), max2);
}

// node_modules/@chakra-ui/counter/dist/chunk-AB3TPYVS.mjs
var import_react60 = __toESM(require_react(), 1);
function useCounter(props = {}) {
  const {
    onChange,
    precision: precisionProp,
    defaultValue,
    value: valueProp,
    step: stepProp = 1,
    min: min2 = Number.MIN_SAFE_INTEGER,
    max: max2 = Number.MAX_SAFE_INTEGER,
    keepWithinRange = true
  } = props;
  const onChangeProp = useCallbackRef(onChange);
  const [valueState, setValue] = (0, import_react60.useState)(() => {
    var _a8;
    if (defaultValue == null)
      return "";
    return (_a8 = cast2(defaultValue, stepProp, precisionProp)) != null ? _a8 : "";
  });
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const decimalPlaces = getDecimalPlaces(parse4(value), stepProp);
  const precision = precisionProp != null ? precisionProp : decimalPlaces;
  const update = (0, import_react60.useCallback)(
    (next2) => {
      if (next2 === value)
        return;
      if (!isControlled) {
        setValue(next2.toString());
      }
      onChangeProp == null ? void 0 : onChangeProp(next2.toString(), parse4(next2));
    },
    [onChangeProp, isControlled, value]
  );
  const clamp = (0, import_react60.useCallback)(
    (value2) => {
      let nextValue = value2;
      if (keepWithinRange) {
        nextValue = clampValue2(nextValue, min2, max2);
      }
      return toPrecision2(nextValue, precision);
    },
    [precision, keepWithinRange, max2, min2]
  );
  const increment = (0, import_react60.useCallback)(
    (step = stepProp) => {
      let next2;
      if (value === "") {
        next2 = parse4(step);
      } else {
        next2 = parse4(value) + step;
      }
      next2 = clamp(next2);
      update(next2);
    },
    [clamp, stepProp, update, value]
  );
  const decrement = (0, import_react60.useCallback)(
    (step = stepProp) => {
      let next2;
      if (value === "") {
        next2 = parse4(-step);
      } else {
        next2 = parse4(value) - step;
      }
      next2 = clamp(next2);
      update(next2);
    },
    [clamp, stepProp, update, value]
  );
  const reset = (0, import_react60.useCallback)(() => {
    var _a8;
    let next2;
    if (defaultValue == null) {
      next2 = "";
    } else {
      next2 = (_a8 = cast2(defaultValue, stepProp, precisionProp)) != null ? _a8 : min2;
    }
    update(next2);
  }, [defaultValue, precisionProp, stepProp, update, min2]);
  const castValue = (0, import_react60.useCallback)(
    (value2) => {
      var _a8;
      const nextValue = (_a8 = cast2(value2, stepProp, precision)) != null ? _a8 : min2;
      update(nextValue);
    },
    [precision, stepProp, update, min2]
  );
  const valueAsNumber = parse4(value);
  const isOutOfRange = valueAsNumber > max2 || valueAsNumber < min2;
  const isAtMax = valueAsNumber === max2;
  const isAtMin = valueAsNumber === min2;
  return {
    isOutOfRange,
    isAtMax,
    isAtMin,
    precision,
    value,
    valueAsNumber,
    update,
    reset,
    increment,
    decrement,
    clamp,
    cast: castValue,
    setValue
  };
}
function parse4(value) {
  return parseFloat(value.toString().replace(/[^\w.-]+/g, ""));
}
function getDecimalPlaces(value, step) {
  return Math.max(countDecimalPlaces2(step), countDecimalPlaces2(value));
}
function cast2(value, step, precision) {
  const parsedValue = parse4(value);
  if (Number.isNaN(parsedValue))
    return void 0;
  const decimalPlaces = getDecimalPlaces(parsedValue, step);
  return toPrecision2(parsedValue, precision != null ? precision : decimalPlaces);
}

// node_modules/@chakra-ui/editable/dist/chunk-WYY72ITE.mjs
var [EditableStylesProvider, useEditableStyles] = createContext2({
  name: `EditableStylesContext`,
  errorMessage: `useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `
});
var [EditableProvider, useEditableContext] = createContext2({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
});

// node_modules/@chakra-ui/editable/dist/chunk-47M7OZ3U.mjs
function useEditableState() {
  const { isEditing, onSubmit, onCancel, onEdit, isDisabled: isDisabled3 } = useEditableContext();
  return {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
    isDisabled: isDisabled3
  };
}

// node_modules/@chakra-ui/editable/dist/chunk-6XCKNNTK.mjs
var commonStyles = {
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "inherit",
  bg: "transparent"
};

// node_modules/@chakra-ui/editable/dist/chunk-7XO4TBDN.mjs
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var EditableInput = forwardRef3(
  function EditableInput2(props, ref) {
    const { getInputProps } = useEditableContext();
    const styles2 = useEditableStyles();
    const inputProps = getInputProps(props, ref);
    const _className = cx("chakra-editable__input", props.className);
    return (0, import_jsx_runtime62.jsx)(
      chakra.input,
      {
        ...inputProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles2.input
        },
        className: _className
      }
    );
  }
);
EditableInput.displayName = "EditableInput";

// node_modules/@chakra-ui/editable/dist/chunk-USE7AZZJ.mjs
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var EditablePreview = forwardRef3(
  function EditablePreview2(props, ref) {
    const { getPreviewProps } = useEditableContext();
    const styles2 = useEditableStyles();
    const previewProps = getPreviewProps(props, ref);
    const _className = cx("chakra-editable__preview", props.className);
    return (0, import_jsx_runtime63.jsx)(
      chakra.span,
      {
        ...previewProps,
        __css: {
          cursor: "text",
          display: "inline-block",
          ...commonStyles,
          ...styles2.preview
        },
        className: _className
      }
    );
  }
);
EditablePreview.displayName = "EditablePreview";

// node_modules/@chakra-ui/editable/dist/chunk-KE6CZM3P.mjs
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var EditableTextarea = forwardRef3(
  function EditableTextarea2(props, ref) {
    const { getTextareaProps } = useEditableContext();
    const styles2 = useEditableStyles();
    const textareaProps = getTextareaProps(props, ref);
    const _className = cx("chakra-editable__textarea", props.className);
    return (0, import_jsx_runtime64.jsx)(
      chakra.textarea,
      {
        ...textareaProps,
        __css: {
          outline: 0,
          ...commonStyles,
          ...styles2.textarea
        },
        className: _className
      }
    );
  }
);
EditableTextarea.displayName = "EditableTextarea";

// node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs
var import_react61 = __toESM(require_react(), 1);
function useEventListener(target, event, handler, options) {
  const listener = useCallbackRef(handler);
  (0, import_react61.useEffect)(() => {
    const node3 = typeof target === "function" ? target() : target != null ? target : document;
    if (!handler || !node3)
      return;
    node3.addEventListener(event, listener, options);
    return () => {
      node3.removeEventListener(event, listener, options);
    };
  }, [event, target, options, listener, handler]);
  return () => {
    const node3 = typeof target === "function" ? target() : target != null ? target : document;
    node3 == null ? void 0 : node3.removeEventListener(event, listener, options);
  };
}

// node_modules/@chakra-ui/react-use-focus-on-pointer-down/dist/index.mjs
function isRefObject2(val) {
  return "current" in val;
}
var isDom2 = () => typeof window !== "undefined";
function getPlatform() {
  var _a8;
  const agent = navigator.userAgentData;
  return (_a8 = agent == null ? void 0 : agent.platform) != null ? _a8 : navigator.platform;
}
var vn = (v) => isDom2() && v.test(navigator.vendor);
var pt = (v) => isDom2() && v.test(getPlatform());
var isApple = () => pt(/mac|iphone|ipad|ipod/i);
var isSafari = () => isApple() && vn(/apple/i);
function useFocusOnPointerDown(props) {
  const { ref, elements, enabled } = props;
  const doc = () => {
    var _a8, _b5;
    return (_b5 = (_a8 = ref.current) == null ? void 0 : _a8.ownerDocument) != null ? _b5 : document;
  };
  useEventListener(doc, "pointerdown", (event) => {
    if (!isSafari() || !enabled)
      return;
    const target = event.target;
    const els = elements != null ? elements : [ref];
    const isValidTarget = els.some((elementOrRef) => {
      const el = isRefObject2(elementOrRef) ? elementOrRef.current : elementOrRef;
      return (el == null ? void 0 : el.contains(target)) || el === target;
    });
    if (doc().activeElement !== target && isValidTarget) {
      event.preventDefault();
      target.focus();
    }
  });
}

// node_modules/@chakra-ui/editable/dist/chunk-TXN5ELBN.mjs
var import_react62 = __toESM(require_react(), 1);
function contains2(parent, child) {
  if (!parent)
    return false;
  return parent === child || parent.contains(child);
}
function useEditable(props = {}) {
  const {
    onChange: onChangeProp,
    onCancel: onCancelProp,
    onSubmit: onSubmitProp,
    onBlur: onBlurProp,
    value: valueProp,
    isDisabled: isDisabled3,
    defaultValue,
    startWithEditView,
    isPreviewFocusable = true,
    submitOnBlur = true,
    selectAllOnFocus = true,
    placeholder,
    onEdit: onEditCallback,
    finalFocusRef,
    ...htmlProps
  } = props;
  const onEditProp = useCallbackRef(onEditCallback);
  const defaultIsEditing = Boolean(startWithEditView && !isDisabled3);
  const [isEditing, setIsEditing] = (0, import_react62.useState)(defaultIsEditing);
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue || "",
    value: valueProp,
    onChange: onChangeProp
  });
  const [prevValue, setPrevValue] = (0, import_react62.useState)(value);
  const inputRef = (0, import_react62.useRef)(null);
  const previewRef = (0, import_react62.useRef)(null);
  const editButtonRef = (0, import_react62.useRef)(null);
  const cancelButtonRef = (0, import_react62.useRef)(null);
  const submitButtonRef = (0, import_react62.useRef)(null);
  useFocusOnPointerDown({
    ref: inputRef,
    enabled: isEditing,
    elements: [cancelButtonRef, submitButtonRef]
  });
  const isInteractive = !isEditing && !isDisabled3;
  useSafeLayoutEffect(() => {
    var _a8, _b5;
    if (isEditing) {
      (_a8 = inputRef.current) == null ? void 0 : _a8.focus();
      if (selectAllOnFocus)
        (_b5 = inputRef.current) == null ? void 0 : _b5.select();
    }
  }, []);
  useUpdateEffect(() => {
    var _a8, _b5, _c3, _d3;
    if (!isEditing) {
      if (finalFocusRef) {
        (_a8 = finalFocusRef.current) == null ? void 0 : _a8.focus();
      } else {
        (_b5 = editButtonRef.current) == null ? void 0 : _b5.focus();
      }
      return;
    }
    (_c3 = inputRef.current) == null ? void 0 : _c3.focus();
    if (selectAllOnFocus) {
      (_d3 = inputRef.current) == null ? void 0 : _d3.select();
    }
    onEditProp == null ? void 0 : onEditProp();
  }, [isEditing, onEditProp, selectAllOnFocus]);
  const onEdit = (0, import_react62.useCallback)(() => {
    if (isInteractive) {
      setIsEditing(true);
    }
  }, [isInteractive]);
  const onUpdatePrevValue = (0, import_react62.useCallback)(() => {
    setPrevValue(value);
  }, [value]);
  const onCancel = (0, import_react62.useCallback)(() => {
    setIsEditing(false);
    setValue(prevValue);
    onCancelProp == null ? void 0 : onCancelProp(prevValue);
    onBlurProp == null ? void 0 : onBlurProp(prevValue);
  }, [onCancelProp, onBlurProp, setValue, prevValue]);
  const onSubmit = (0, import_react62.useCallback)(() => {
    setIsEditing(false);
    setPrevValue(value);
    onSubmitProp == null ? void 0 : onSubmitProp(value);
    onBlurProp == null ? void 0 : onBlurProp(prevValue);
  }, [value, onSubmitProp, onBlurProp, prevValue]);
  (0, import_react62.useEffect)(() => {
    if (isEditing)
      return;
    const inputEl = inputRef.current;
    if ((inputEl == null ? void 0 : inputEl.ownerDocument.activeElement) === inputEl) {
      inputEl == null ? void 0 : inputEl.blur();
    }
  }, [isEditing]);
  const onChange = (0, import_react62.useCallback)(
    (event) => {
      setValue(event.currentTarget.value);
    },
    [setValue]
  );
  const onKeyDown = (0, import_react62.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel,
        Enter: (event2) => {
          if (!event2.shiftKey && !event2.metaKey) {
            onSubmit();
          }
        }
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel, onSubmit]
  );
  const onKeyDownWithoutSubmit = (0, import_react62.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Escape: onCancel
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [onCancel]
  );
  const isValueEmpty = value.length === 0;
  const onBlur3 = (0, import_react62.useCallback)(
    (event) => {
      var _a8;
      if (!isEditing)
        return;
      const doc = event.currentTarget.ownerDocument;
      const relatedTarget = (_a8 = event.relatedTarget) != null ? _a8 : doc.activeElement;
      const targetIsCancel = contains2(cancelButtonRef.current, relatedTarget);
      const targetIsSubmit = contains2(submitButtonRef.current, relatedTarget);
      const isValidBlur = !targetIsCancel && !targetIsSubmit;
      if (isValidBlur) {
        if (submitOnBlur) {
          onSubmit();
        } else {
          onCancel();
        }
      }
    },
    [submitOnBlur, onSubmit, onCancel, isEditing]
  );
  const getPreviewProps = (0, import_react62.useCallback)(
    (props2 = {}, ref = null) => {
      const tabIndex = isInteractive && isPreviewFocusable ? 0 : void 0;
      return {
        ...props2,
        ref: mergeRefs2(ref, previewRef),
        children: isValueEmpty ? placeholder : value,
        hidden: isEditing,
        "aria-disabled": ariaAttr(isDisabled3),
        tabIndex,
        onFocus: callAllHandlers(props2.onFocus, onEdit, onUpdatePrevValue)
      };
    },
    [
      isDisabled3,
      isEditing,
      isInteractive,
      isPreviewFocusable,
      isValueEmpty,
      onEdit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getInputProps = (0, import_react62.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: mergeRefs2(ref, inputRef),
      disabled: isDisabled3,
      "aria-disabled": ariaAttr(isDisabled3),
      value,
      onBlur: callAllHandlers(props2.onBlur, onBlur3),
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onFocus: callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled3,
      isEditing,
      onBlur3,
      onChange,
      onKeyDown,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getTextareaProps = (0, import_react62.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      hidden: !isEditing,
      placeholder,
      ref: mergeRefs2(ref, inputRef),
      disabled: isDisabled3,
      "aria-disabled": ariaAttr(isDisabled3),
      value,
      onBlur: callAllHandlers(props2.onBlur, onBlur3),
      onChange: callAllHandlers(props2.onChange, onChange),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDownWithoutSubmit),
      onFocus: callAllHandlers(props2.onFocus, onUpdatePrevValue)
    }),
    [
      isDisabled3,
      isEditing,
      onBlur3,
      onChange,
      onKeyDownWithoutSubmit,
      onUpdatePrevValue,
      placeholder,
      value
    ]
  );
  const getEditButtonProps = (0, import_react62.useCallback)(
    (props2 = {}, ref = null) => ({
      "aria-label": "Edit",
      ...props2,
      type: "button",
      onClick: callAllHandlers(props2.onClick, onEdit),
      ref: mergeRefs2(ref, editButtonRef),
      disabled: isDisabled3
    }),
    [onEdit, isDisabled3]
  );
  const getSubmitButtonProps = (0, import_react62.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      "aria-label": "Submit",
      ref: mergeRefs2(submitButtonRef, ref),
      type: "button",
      onClick: callAllHandlers(props2.onClick, onSubmit),
      disabled: isDisabled3
    }),
    [onSubmit, isDisabled3]
  );
  const getCancelButtonProps = (0, import_react62.useCallback)(
    (props2 = {}, ref = null) => ({
      "aria-label": "Cancel",
      id: "cancel",
      ...props2,
      ref: mergeRefs2(cancelButtonRef, ref),
      type: "button",
      onClick: callAllHandlers(props2.onClick, onCancel),
      disabled: isDisabled3
    }),
    [onCancel, isDisabled3]
  );
  return {
    isEditing,
    isDisabled: isDisabled3,
    isValueEmpty,
    value,
    onEdit,
    onCancel,
    onSubmit,
    getPreviewProps,
    getInputProps,
    getTextareaProps,
    getEditButtonProps,
    getSubmitButtonProps,
    getCancelButtonProps,
    htmlProps
  };
}

// node_modules/@chakra-ui/editable/dist/chunk-ROCN3PRT.mjs
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var Editable = forwardRef3(function Editable2(props, ref) {
  const styles2 = useMultiStyleConfig("Editable", props);
  const ownProps = omitThemingProps(props);
  const { htmlProps, ...context } = useEditable(ownProps);
  const { isEditing, onSubmit, onCancel, onEdit } = context;
  const _className = cx("chakra-editable", props.className);
  const children = runIfFn(props.children, {
    isEditing,
    onSubmit,
    onCancel,
    onEdit
  });
  return (0, import_jsx_runtime65.jsx)(EditableProvider, { value: context, children: (0, import_jsx_runtime65.jsx)(EditableStylesProvider, { value: styles2, children: (0, import_jsx_runtime65.jsx)(
    chakra.div,
    {
      ref,
      ...htmlProps,
      className: _className,
      children
    }
  ) }) });
});
Editable.displayName = "Editable";

// node_modules/@chakra-ui/editable/dist/chunk-OKWGAP7R.mjs
function useEditableControls() {
  const {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  } = useEditableContext();
  return {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  };
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2) return {};
  var t2 = {};
  for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t2[n] = r2[n];
  }
  return t2;
}

// node_modules/react-focus-lock/dist/es2015/Combination.js
var React14 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/Lock.js
var React11 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/focus-lock/dist/es2015/constants.js
var FOCUS_GROUP = "data-focus-lock";
var FOCUS_DISABLED = "data-focus-lock-disabled";
var FOCUS_ALLOW = "data-no-focus-lock";
var FOCUS_AUTO = "data-autofocus-inside";
var FOCUS_NO_AUTOFOCUS = "data-no-autofocus";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef3(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react63 = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react63.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React6 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React6.useLayoutEffect : React6.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs2(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef3(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef3(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef3(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/react-focus-lock/dist/es2015/FocusGuard.js
var React7 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var hiddenGuard = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
var InFocusGuard = function InFocusGuard2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? null : _ref$children;
  return React7.createElement(React7.Fragment, null, React7.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }), children, children && React7.createElement("div", {
    key: "guard-last",
    "data-focus-guard": true,
    "data-focus-auto-guard": true,
    style: hiddenGuard
  }));
};
InFocusGuard.propTypes = true ? {
  children: import_prop_types.default.node
} : {};

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t2[p[i]] = s[p[i]];
    }
  return t2;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++) {
    if (ar || !(i in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i);
      ar[i] = from2[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React8 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react64 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults2, middleware2) {
  if (middleware2 === void 0) {
    middleware2 = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults2;
    },
    useMedium: function(data) {
      var item = middleware2(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter3) {
          pendingQueue = pendingQueue.filter(filter3);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults2, middleware2) {
  if (middleware2 === void 0) {
    middleware2 = ItoI;
  }
  return innerCreateMedium(defaults2, middleware2);
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React9 = __toESM(require_react());
var import_react65 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React10 = __toESM(require_react());
var SideCar = function(_a8) {
  var sideCar2 = _a8.sideCar, rest = __rest(_a8, ["sideCar"]);
  if (!sideCar2) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar2.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React10.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-focus-lock/dist/es2015/medium.js
var mediumFocus = createMedium({}, function(_ref2) {
  var target = _ref2.target, currentTarget = _ref2.currentTarget;
  return {
    target,
    currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true,
  ssr: typeof document !== "undefined"
});

// node_modules/react-focus-lock/dist/es2015/scope.js
var import_react66 = __toESM(require_react());
var focusScope = (0, import_react66.createContext)(void 0);

// node_modules/react-focus-lock/dist/es2015/Lock.js
var emptyArray = [];
var FocusLock = React11.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;
  var _React$useState = React11.useState(), realObserved = _React$useState[0], setObserved = _React$useState[1];
  var observed = React11.useRef();
  var isActive = React11.useRef(false);
  var originalFocusedElement = React11.useRef(null);
  var _React$useState2 = React11.useState({}), update = _React$useState2[1];
  var children = props.children, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$noFocusGuards = props.noFocusGuards, noFocusGuards = _props$noFocusGuards === void 0 ? false : _props$noFocusGuards, _props$persistentFocu = props.persistentFocus, persistentFocus = _props$persistentFocu === void 0 ? false : _props$persistentFocu, _props$crossFrame = props.crossFrame, crossFrame = _props$crossFrame === void 0 ? true : _props$crossFrame, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus, allowTextSelection = props.allowTextSelection, group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container3 = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar2 = props.sideCar, _props$returnFocus = props.returnFocus, shouldReturnFocus = _props$returnFocus === void 0 ? false : _props$returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation;
  var _React$useState3 = React11.useState({}), id = _React$useState3[0];
  var onActivation = React11.useCallback(function(_ref2) {
    var captureFocusRestore2 = _ref2.captureFocusRestore;
    if (!originalFocusedElement.current) {
      var _document;
      var activeElement = (_document = document) == null ? void 0 : _document.activeElement;
      originalFocusedElement.current = activeElement;
      if (activeElement !== document.body) {
        originalFocusedElement.current = captureFocusRestore2(activeElement);
      }
    }
    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }
    isActive.current = true;
    update();
  }, [onActivationCallback]);
  var onDeactivation = React11.useCallback(function() {
    isActive.current = false;
    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
    update();
  }, [onDeactivationCallback]);
  var returnFocus = React11.useCallback(function(allowDefer) {
    var focusRestore = originalFocusedElement.current;
    if (focusRestore) {
      var returnFocusTo = (typeof focusRestore === "function" ? focusRestore() : focusRestore) || document.body;
      var howToReturnFocus = typeof shouldReturnFocus === "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === "object" ? howToReturnFocus : void 0;
        originalFocusedElement.current = null;
        if (allowDefer) {
          Promise.resolve().then(function() {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]);
  var onFocus3 = React11.useCallback(function(event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur3 = mediumBlur.useMedium;
  var setObserveNode = React11.useCallback(function(newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);
  if (true) {
    if (typeof allowTextSelection !== "undefined") {
      console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default");
    }
    React11.useEffect(function() {
      if (!observed.current && typeof Container3 !== "string") {
        console.error("FocusLock: could not obtain ref to internal node");
      }
    }, []);
  }
  var lockProps = _extends((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && "disabled", _extends2[FOCUS_GROUP] = group, _extends2), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail";
  var mergedRef = useMergeRefs2([parentRef, setObserveNode]);
  var focusScopeValue = React11.useMemo(function() {
    return {
      observed,
      shards,
      enabled: !disabled,
      active: isActive.current
    };
  }, [disabled, isActive.current, shards, realObserved]);
  return React11.createElement(React11.Fragment, null, hasLeadingGuards && [
    React11.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 0,
      style: hiddenGuard
    }),
    hasPositiveIndices ? React11.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": true,
      tabIndex: disabled ? -1 : 1,
      style: hiddenGuard
    }) : null
  ], !disabled && React11.createElement(SideCar2, {
    id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled,
    persistentFocus,
    crossFrame,
    autoFocus,
    whiteList,
    shards,
    onActivation,
    onDeactivation,
    returnFocus,
    focusOptions,
    noFocusGuards
  }), React11.createElement(Container3, _extends({
    ref: mergedRef
  }, lockProps, {
    className,
    onBlur: onBlur3,
    onFocus: onFocus3
  }), React11.createElement(focusScope.Provider, {
    value: focusScopeValue
  }, children)), hasTailingGuards && React11.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = true ? {
  children: import_prop_types2.node,
  disabled: import_prop_types2.bool,
  returnFocus: (0, import_prop_types2.oneOfType)([import_prop_types2.bool, import_prop_types2.object, import_prop_types2.func]),
  focusOptions: import_prop_types2.object,
  noFocusGuards: import_prop_types2.bool,
  hasPositiveIndices: import_prop_types2.bool,
  allowTextSelection: import_prop_types2.bool,
  autoFocus: import_prop_types2.bool,
  persistentFocus: import_prop_types2.bool,
  crossFrame: import_prop_types2.bool,
  group: import_prop_types2.string,
  className: import_prop_types2.string,
  whiteList: import_prop_types2.func,
  shards: (0, import_prop_types2.arrayOf)(import_prop_types2.any),
  as: (0, import_prop_types2.oneOfType)([import_prop_types2.string, import_prop_types2.func, import_prop_types2.object]),
  lockProps: import_prop_types2.object,
  onActivation: import_prop_types2.func,
  onDeactivation: import_prop_types2.func,
  sideCar: import_prop_types2.any.isRequired
} : {};
var Lock_default = FocusLock;

// node_modules/react-focus-lock/dist/es2015/Trap.js
var React13 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t2, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e2) {
    return t3.__proto__ = e2, t3;
  }, _setPrototypeOf(t2, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t2, o) {
  t2.prototype = Object.create(o.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o);
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t2, r2 || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t2) {
  var i = toPrimitive(t2, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r2] = t2, e;
}

// node_modules/react-clientside-effect/lib/index.es.js
var import_react67 = __toESM(require_react());
function withSideEffect(reducePropsToState2, handleStateChangeOnClient2) {
  if (true) {
    if (typeof reducePropsToState2 !== "function") {
      throw new Error("Expected reducePropsToState to be a function.");
    }
    if (typeof handleStateChangeOnClient2 !== "function") {
      throw new Error("Expected handleStateChangeOnClient to be a function.");
    }
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
  }
  return function wrap4(WrappedComponent) {
    if (true) {
      if (typeof WrappedComponent !== "function") {
        throw new Error("Expected WrappedComponent to be a React component.");
      }
    }
    var mountedInstances = [];
    var state2;
    function emitChange() {
      state2 = reducePropsToState2(mountedInstances.map(function(instance) {
        return instance.props;
      }));
      handleStateChangeOnClient2(state2);
    }
    var SideEffect = function(_PureComponent) {
      _inheritsLoose(SideEffect2, _PureComponent);
      function SideEffect2() {
        return _PureComponent.apply(this, arguments) || this;
      }
      SideEffect2.peek = function peek2() {
        return state2;
      };
      var _proto = SideEffect2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };
      _proto.render = function render() {
        return import_react67.default.createElement(WrappedComponent, this.props);
      };
      return SideEffect2;
    }(import_react67.PureComponent);
    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
    return SideEffect;
  };
}
var index_es_default = withSideEffect;

// node_modules/focus-lock/dist/es2015/utils/array.js
var toArray = function(a) {
  var ret = Array(a.length);
  for (var i = 0; i < a.length; ++i) {
    ret[i] = a[i];
  }
  return ret;
};
var asArray = function(a) {
  return Array.isArray(a) ? a : [a];
};
var getFirst = function(a) {
  return Array.isArray(a) ? a[0] : a;
};

// node_modules/focus-lock/dist/es2015/utils/is.js
var isElementHidden = function(node3) {
  if (node3.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  var computedStyle = window.getComputedStyle(node3, null);
  if (!computedStyle || !computedStyle.getPropertyValue) {
    return false;
  }
  return computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
};
var getParentNode = function(node3) {
  return node3.parentNode && node3.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    node3.parentNode.host
  ) : node3.parentNode;
};
var isTopNode = function(node3) {
  return node3 === document || node3 && node3.nodeType === Node.DOCUMENT_NODE;
};
var isInert = function(node3) {
  return node3.hasAttribute("inert");
};
var isVisibleUncached = function(node3, checkParent) {
  return !node3 || isTopNode(node3) || !isElementHidden(node3) && !isInert(node3) && checkParent(getParentNode(node3));
};
var isVisibleCached = function(visibilityCache, node3) {
  var cached = visibilityCache.get(node3);
  if (cached !== void 0) {
    return cached;
  }
  var result = isVisibleUncached(node3, isVisibleCached.bind(void 0, visibilityCache));
  visibilityCache.set(node3, result);
  return result;
};
var isAutoFocusAllowedUncached = function(node3, checkParent) {
  return node3 && !isTopNode(node3) ? isAutoFocusAllowed(node3) ? checkParent(getParentNode(node3)) : false : true;
};
var isAutoFocusAllowedCached = function(cache, node3) {
  var cached = cache.get(node3);
  if (cached !== void 0) {
    return cached;
  }
  var result = isAutoFocusAllowedUncached(node3, isAutoFocusAllowedCached.bind(void 0, cache));
  cache.set(node3, result);
  return result;
};
var getDataset = function(node3) {
  return node3.dataset;
};
var isHTMLButtonElement = function(node3) {
  return node3.tagName === "BUTTON";
};
var isHTMLInputElement = function(node3) {
  return node3.tagName === "INPUT";
};
var isRadioElement = function(node3) {
  return isHTMLInputElement(node3) && node3.type === "radio";
};
var notHiddenInput = function(node3) {
  return !((isHTMLInputElement(node3) || isHTMLButtonElement(node3)) && (node3.type === "hidden" || node3.disabled));
};
var isAutoFocusAllowed = function(node3) {
  var attribute = node3.getAttribute(FOCUS_NO_AUTOFOCUS);
  return ![true, "true", ""].includes(attribute);
};
var isGuard = function(node3) {
  var _a8;
  return Boolean(node3 && ((_a8 = getDataset(node3)) === null || _a8 === void 0 ? void 0 : _a8.focusGuard));
};
var isNotAGuard = function(node3) {
  return !isGuard(node3);
};
var isDefined2 = function(x) {
  return Boolean(x);
};

// node_modules/focus-lock/dist/es2015/utils/tabOrder.js
var tabSort = function(a, b) {
  var aTab = Math.max(0, a.tabIndex);
  var bTab = Math.max(0, b.tabIndex);
  var tabDiff = aTab - bTab;
  var indexDiff = a.index - b.index;
  if (tabDiff) {
    if (!aTab) {
      return 1;
    }
    if (!bTab) {
      return -1;
    }
  }
  return tabDiff || indexDiff;
};
var getTabIndex = function(node3) {
  if (node3.tabIndex < 0) {
    if (!node3.hasAttribute("tabindex")) {
      return 0;
    }
  }
  return node3.tabIndex;
};
var orderByTabIndex = function(nodes, filterNegative, keepGuards) {
  return toArray(nodes).map(function(node3, index) {
    var tabIndex = getTabIndex(node3);
    return {
      node: node3,
      index,
      tabIndex: keepGuards && tabIndex === -1 ? (node3.dataset || {}).focusGuard ? 0 : -1 : tabIndex
    };
  }).filter(function(data) {
    return !filterNegative || data.tabIndex >= 0;
  }).sort(tabSort);
};

// node_modules/focus-lock/dist/es2015/utils/tabbables.js
var tabbables = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
];

// node_modules/focus-lock/dist/es2015/utils/tabUtils.js
var queryTabbables = tabbables.join(",");
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function(parent, withGuards) {
  return toArray((parent.shadowRoot || parent).children).reduce(function(acc, child) {
    return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
  }, []);
};
var getFocusablesWithIFrame = function(parent, withGuards) {
  var _a8;
  if (parent instanceof HTMLIFrameElement && ((_a8 = parent.contentDocument) === null || _a8 === void 0 ? void 0 : _a8.body)) {
    return getFocusables([parent.contentDocument.body], withGuards);
  }
  return [parent];
};
var getFocusables = function(parents, withGuards) {
  return parents.reduce(function(acc, parent) {
    var _a8;
    var focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards);
    var focusableWithIframes = (_a8 = []).concat.apply(_a8, focusableWithShadowDom.map(function(node3) {
      return getFocusablesWithIFrame(node3, withGuards);
    }));
    return acc.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      focusableWithIframes,
      // add if node is tabbable itself
      parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node3) {
        return node3 === parent;
      }) : []
    );
  }, []);
};
var getParentAutofocusables = function(parent) {
  var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
  return toArray(parentFocus).map(function(node3) {
    return getFocusables([node3]);
  }).reduce(function(acc, nodes) {
    return acc.concat(nodes);
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/DOMutils.js
var filterFocusable = function(nodes, visibilityCache) {
  return toArray(nodes).filter(function(node3) {
    return isVisibleCached(visibilityCache, node3);
  }).filter(function(node3) {
    return notHiddenInput(node3);
  });
};
var filterAutoFocusable = function(nodes, cache) {
  if (cache === void 0) {
    cache = /* @__PURE__ */ new Map();
  }
  return toArray(nodes).filter(function(node3) {
    return isAutoFocusAllowedCached(cache, node3);
  });
};
var getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
var getFocusableNodes = function(topNodes, visibilityCache) {
  return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
var parentAutofocusables = function(topNode, visibilityCache) {
  return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
var contains3 = function(scope, element) {
  if (scope.shadowRoot) {
    return contains3(scope.shadowRoot, element);
  } else {
    if (Object.getPrototypeOf(scope).contains !== void 0 && Object.getPrototypeOf(scope).contains.call(scope, element)) {
      return true;
    }
    return toArray(scope.children).some(function(child) {
      var _a8;
      if (child instanceof HTMLIFrameElement) {
        var iframeBody = (_a8 = child.contentDocument) === null || _a8 === void 0 ? void 0 : _a8.body;
        if (iframeBody) {
          return contains3(iframeBody, element);
        }
        return false;
      }
      return contains3(child, element);
    });
  }
};

// node_modules/focus-lock/dist/es2015/utils/all-affected.js
var filterNested = function(nodes) {
  var contained = /* @__PURE__ */ new Set();
  var l = nodes.length;
  for (var i = 0; i < l; i += 1) {
    for (var j = i + 1; j < l; j += 1) {
      var position3 = nodes[i].compareDocumentPosition(nodes[j]);
      if ((position3 & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
        contained.add(j);
      }
      if ((position3 & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
        contained.add(i);
      }
    }
  }
  return nodes.filter(function(_, index) {
    return !contained.has(index);
  });
};
var getTopParent = function(node3) {
  return node3.parentNode ? getTopParent(node3.parentNode) : node3;
};
var getAllAffectedNodes = function(node3) {
  var nodes = asArray(node3);
  return nodes.filter(Boolean).reduce(function(acc, currentNode) {
    var group = currentNode.getAttribute(FOCUS_GROUP);
    acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, '="').concat(group, '"]:not([').concat(FOCUS_DISABLED, '="disabled"])')))) : [currentNode]);
    return acc;
  }, []);
};

// node_modules/focus-lock/dist/es2015/utils/safe.js
var safeProbe = function(cb) {
  try {
    return cb();
  } catch (e) {
    return void 0;
  }
};

// node_modules/focus-lock/dist/es2015/utils/getActiveElement.js
var getActiveElement2 = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  if (!inDocument || !inDocument.activeElement) {
    return void 0;
  }
  var activeElement = inDocument.activeElement;
  return activeElement.shadowRoot ? getActiveElement2(activeElement.shadowRoot) : activeElement instanceof HTMLIFrameElement && safeProbe(function() {
    return activeElement.contentWindow.document;
  }) ? getActiveElement2(activeElement.contentWindow.document) : activeElement;
};

// node_modules/focus-lock/dist/es2015/focusInside.js
var focusInFrame = function(frame2, activeElement) {
  return frame2 === activeElement;
};
var focusInsideIframe = function(topNode, activeElement) {
  return Boolean(toArray(topNode.querySelectorAll("iframe")).some(function(node3) {
    return focusInFrame(node3, activeElement);
  }));
};
var focusInside = function(topNode, activeElement) {
  if (activeElement === void 0) {
    activeElement = getActiveElement2(getFirst(topNode).ownerDocument);
  }
  if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) {
    return false;
  }
  return getAllAffectedNodes(topNode).some(function(node3) {
    return contains3(node3, activeElement) || focusInsideIframe(node3, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/focusIsHidden.js
var focusIsHidden = function(inDocument) {
  if (inDocument === void 0) {
    inDocument = document;
  }
  var activeElement = getActiveElement2(inDocument);
  if (!activeElement) {
    return false;
  }
  return toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node3) {
    return contains3(node3, activeElement);
  });
};

// node_modules/focus-lock/dist/es2015/utils/correctFocus.js
var findSelectedRadio = function(node3, nodes) {
  return nodes.filter(isRadioElement).filter(function(el) {
    return el.name === node3.name;
  }).filter(function(el) {
    return el.checked;
  })[0] || node3;
};
var correctNode = function(node3, nodes) {
  if (isRadioElement(node3) && node3.name) {
    return findSelectedRadio(node3, nodes);
  }
  return node3;
};
var correctNodes = function(nodes) {
  var resultSet = /* @__PURE__ */ new Set();
  nodes.forEach(function(node3) {
    return resultSet.add(correctNode(node3, nodes));
  });
  return nodes.filter(function(node3) {
    return resultSet.has(node3);
  });
};

// node_modules/focus-lock/dist/es2015/utils/firstFocus.js
var pickFirstFocus = function(nodes) {
  if (nodes[0] && nodes.length > 1) {
    return correctNode(nodes[0], nodes);
  }
  return nodes[0];
};
var pickFocusable = function(nodes, node3) {
  return nodes.indexOf(correctNode(node3, nodes));
};

// node_modules/focus-lock/dist/es2015/solver.js
var NEW_FOCUS = "NEW_FOCUS";
var newFocus = function(innerNodes, innerTabbables, outerNodes, activeElement, lastNode) {
  var cnt = innerNodes.length;
  var firstFocus = innerNodes[0];
  var lastFocus = innerNodes[cnt - 1];
  var isOnGuard = isGuard(activeElement);
  if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
    return void 0;
  }
  var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1;
  var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
  var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
  if (activeIndex === -1) {
    if (lastNodeInside !== -1) {
      return lastNodeInside;
    }
    return NEW_FOCUS;
  }
  if (lastNodeInside === -1) {
    return NEW_FOCUS;
  }
  var indexDiff = activeIndex - lastIndex;
  var firstNodeIndex = outerNodes.indexOf(firstFocus);
  var lastNodeIndex = outerNodes.indexOf(lastFocus);
  var correctedNodes = correctNodes(outerNodes);
  var correctedIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1;
  var correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
  if (!indexDiff && lastNodeInside >= 0) {
    return lastNodeInside;
  }
  if (innerTabbables.length === 0) {
    return lastNodeInside;
  }
  var returnFirstNode = pickFocusable(innerNodes, innerTabbables[0]);
  var returnLastNode = pickFocusable(innerNodes, innerTabbables[innerTabbables.length - 1]);
  if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnLastNode;
  }
  if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
    return returnFirstNode;
  }
  if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
    return lastNodeInside;
  }
  if (activeIndex <= firstNodeIndex) {
    return returnLastNode;
  }
  if (activeIndex > lastNodeIndex) {
    return returnFirstNode;
  }
  if (indexDiff) {
    if (Math.abs(indexDiff) > 1) {
      return lastNodeInside;
    }
    return (cnt + lastNodeInside + indexDiff) % cnt;
  }
  return void 0;
};

// node_modules/focus-lock/dist/es2015/utils/auto-focus.js
var findAutoFocused = function(autoFocusables) {
  return function(node3) {
    var _a8;
    var autofocus = (_a8 = getDataset(node3)) === null || _a8 === void 0 ? void 0 : _a8.autofocus;
    return (
      // @ts-expect-error
      node3.autofocus || //
      autofocus !== void 0 && autofocus !== "false" || //
      autoFocusables.indexOf(node3) >= 0
    );
  };
};
var pickAutofocus = function(nodesIndexes, orderedNodes, groups) {
  var nodes = nodesIndexes.map(function(_a8) {
    var node3 = _a8.node;
    return node3;
  });
  var autoFocusable = filterAutoFocusable(nodes.filter(findAutoFocused(groups)));
  if (autoFocusable && autoFocusable.length) {
    return pickFirstFocus(autoFocusable);
  }
  return pickFirstFocus(filterAutoFocusable(orderedNodes));
};

// node_modules/focus-lock/dist/es2015/utils/parenting.js
var getParents = function(node3, parents) {
  if (parents === void 0) {
    parents = [];
  }
  parents.push(node3);
  if (node3.parentNode) {
    getParents(node3.parentNode.host || node3.parentNode, parents);
  }
  return parents;
};
var getCommonParent = function(nodeA, nodeB) {
  var parentsA = getParents(nodeA);
  var parentsB = getParents(nodeB);
  for (var i = 0; i < parentsA.length; i += 1) {
    var currentParent = parentsA[i];
    if (parentsB.indexOf(currentParent) >= 0) {
      return currentParent;
    }
  }
  return false;
};
var getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
  var activeElements = asArray(baseActiveElement);
  var leftEntries = asArray(leftEntry);
  var activeElement = activeElements[0];
  var topCommon = false;
  leftEntries.filter(Boolean).forEach(function(entry) {
    topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
    rightEntries.filter(Boolean).forEach(function(subEntry) {
      var common = getCommonParent(activeElement, subEntry);
      if (common) {
        if (!topCommon || contains3(common, topCommon)) {
          topCommon = common;
        } else {
          topCommon = getCommonParent(common, topCommon);
        }
      }
    });
  });
  return topCommon;
};
var allParentAutofocusables = function(entries, visibilityCache) {
  return entries.reduce(function(acc, node3) {
    return acc.concat(parentAutofocusables(node3, visibilityCache));
  }, []);
};

// node_modules/focus-lock/dist/es2015/focusSolver.js
var reorderNodes = function(srcNodes, dstNodes) {
  var remap = /* @__PURE__ */ new Map();
  dstNodes.forEach(function(entity) {
    return remap.set(entity.node, entity);
  });
  return srcNodes.map(function(node3) {
    return remap.get(node3);
  }).filter(isDefined2);
};
var focusSolver = function(topNode, lastNode) {
  var activeElement = getActiveElement2(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
  var visibilityCache = /* @__PURE__ */ new Map();
  var anyFocusable = getFocusableNodes(entries, visibilityCache);
  var innerElements = anyFocusable.filter(function(_a8) {
    var node3 = _a8.node;
    return isNotAGuard(node3);
  });
  if (!innerElements[0]) {
    return void 0;
  }
  var outerNodes = getFocusableNodes([commonParent], visibilityCache).map(function(_a8) {
    var node3 = _a8.node;
    return node3;
  });
  var orderedInnerElements = reorderNodes(outerNodes, innerElements);
  var innerFocusables = orderedInnerElements.map(function(_a8) {
    var node3 = _a8.node;
    return node3;
  });
  var innerTabbable = orderedInnerElements.filter(function(_a8) {
    var tabIndex = _a8.tabIndex;
    return tabIndex >= 0;
  }).map(function(_a8) {
    var node3 = _a8.node;
    return node3;
  });
  var newId = newFocus(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
  if (newId === NEW_FOCUS) {
    var focusNode = (
      // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
      pickAutofocus(anyFocusable, innerTabbable, allParentAutofocusables(entries, visibilityCache)) || pickAutofocus(anyFocusable, innerFocusables, allParentAutofocusables(entries, visibilityCache))
    );
    if (focusNode) {
      return { node: focusNode };
    } else {
      console.warn("focus-lock: cannot find any node to move focus into");
      return void 0;
    }
  }
  if (newId === void 0) {
    return newId;
  }
  return orderedInnerElements[newId];
};

// node_modules/focus-lock/dist/es2015/focusables.js
var expandFocusableNodes = function(topNode) {
  var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
  var commonParent = getTopCommonParent(topNode, topNode, entries);
  var outerNodes = orderByTabIndex(getFocusables([commonParent], true), true, true);
  var innerElements = getFocusables(entries, false);
  return outerNodes.map(function(_a8) {
    var node3 = _a8.node, index = _a8.index;
    return {
      node: node3,
      index,
      lockItem: innerElements.indexOf(node3) >= 0,
      guard: isGuard(node3)
    };
  });
};

// node_modules/focus-lock/dist/es2015/commands.js
var focusOn = function(target, focusOptions) {
  if (!target) {
    return;
  }
  if ("focus" in target) {
    target.focus(focusOptions);
  }
  if ("contentWindow" in target && target.contentWindow) {
    target.contentWindow.focus();
  }
};

// node_modules/focus-lock/dist/es2015/moveFocusInside.js
var guardCount = 0;
var lockDisabled = false;
var moveFocusInside = function(topNode, lastNode, options) {
  if (options === void 0) {
    options = {};
  }
  var focusable = focusSolver(topNode, lastNode);
  if (lockDisabled) {
    return;
  }
  if (focusable) {
    if (guardCount > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting");
      lockDisabled = true;
      setTimeout(function() {
        lockDisabled = false;
      }, 1);
      return;
    }
    guardCount++;
    focusOn(focusable.node, options.focusOptions);
    guardCount--;
  }
};

// node_modules/focus-lock/dist/es2015/return-focus.js
function weakRef(value) {
  if (!value)
    return null;
  if (typeof WeakRef === "undefined") {
    return function() {
      return value || null;
    };
  }
  var w = value ? new WeakRef(value) : null;
  return function() {
    return (w === null || w === void 0 ? void 0 : w.deref()) || null;
  };
}
var recordElementLocation = function(element) {
  if (!element) {
    return null;
  }
  var stack = [];
  var currentElement = element;
  while (currentElement && currentElement !== document.body) {
    stack.push({
      current: weakRef(currentElement),
      parent: weakRef(currentElement.parentElement),
      left: weakRef(currentElement.previousElementSibling),
      right: weakRef(currentElement.nextElementSibling)
    });
    currentElement = currentElement.parentElement;
  }
  return {
    element: weakRef(element),
    stack,
    ownerDocument: element.ownerDocument
  };
};
var restoreFocusTo = function(location) {
  var _a8, _b5, _c3, _d3, _e3;
  if (!location) {
    return void 0;
  }
  var stack = location.stack, ownerDocument = location.ownerDocument;
  var visibilityCache = /* @__PURE__ */ new Map();
  for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
    var line2 = stack_1[_i];
    var parent_1 = (_a8 = line2.parent) === null || _a8 === void 0 ? void 0 : _a8.call(line2);
    if (parent_1 && ownerDocument.contains(parent_1)) {
      var left2 = (_b5 = line2.left) === null || _b5 === void 0 ? void 0 : _b5.call(line2);
      var savedCurrent = line2.current();
      var current = parent_1.contains(savedCurrent) ? savedCurrent : void 0;
      var right2 = (_c3 = line2.right) === null || _c3 === void 0 ? void 0 : _c3.call(line2);
      var focusables = getTabbableNodes([parent_1], visibilityCache);
      var aim = (
        // that is element itself
        (_e3 = (_d3 = current !== null && current !== void 0 ? current : (
          // or something in it's place
          left2 === null || left2 === void 0 ? void 0 : left2.nextElementSibling
        )) !== null && _d3 !== void 0 ? _d3 : (
          // or somebody to the right, still close enough
          right2
        )) !== null && _e3 !== void 0 ? _e3 : (
          // or somebody to the left, something?
          left2
        )
      );
      while (aim) {
        for (var _f3 = 0, focusables_1 = focusables; _f3 < focusables_1.length; _f3++) {
          var focusable = focusables_1[_f3];
          if (aim === null || aim === void 0 ? void 0 : aim.contains(focusable.node)) {
            return focusable.node;
          }
        }
        aim = aim.nextElementSibling;
      }
      if (focusables.length) {
        return focusables[0].node;
      }
    }
  }
  return void 0;
};
var captureFocusRestore = function(targetElement) {
  var location = recordElementLocation(targetElement);
  return function() {
    return restoreFocusTo(location);
  };
};

// node_modules/focus-lock/dist/es2015/sibling.js
var getRelativeFocusable = function(element, scope, useTabbables) {
  if (!element || !scope) {
    console.error("no element or scope given");
    return {};
  }
  var shards = asArray(scope);
  if (shards.every(function(shard) {
    return !contains3(shard, element);
  })) {
    console.error("Active element is not contained in the scope");
    return {};
  }
  var focusables = useTabbables ? getTabbableNodes(shards, /* @__PURE__ */ new Map()) : getFocusableNodes(shards, /* @__PURE__ */ new Map());
  var current = focusables.findIndex(function(_a8) {
    var node3 = _a8.node;
    return node3 === element;
  });
  if (current === -1) {
    return void 0;
  }
  return {
    prev: focusables[current - 1],
    next: focusables[current + 1],
    first: focusables[0],
    last: focusables[focusables.length - 1]
  };
};
var getBoundary = function(shards, useTabbables) {
  var set = useTabbables ? getTabbableNodes(asArray(shards), /* @__PURE__ */ new Map()) : getFocusableNodes(asArray(shards), /* @__PURE__ */ new Map());
  return {
    first: set[0],
    last: set[set.length - 1]
  };
};
var defaultOptions = function(options) {
  return Object.assign({
    scope: document.body,
    cycle: true,
    onlyTabbable: true
  }, options);
};
var moveFocus = function(fromElement, options, cb) {
  if (options === void 0) {
    options = {};
  }
  var newOptions = defaultOptions(options);
  var solution = getRelativeFocusable(fromElement, newOptions.scope, newOptions.onlyTabbable);
  if (!solution) {
    return;
  }
  var target = cb(solution, newOptions.cycle);
  if (target) {
    focusOn(target.node, newOptions.focusOptions);
  }
};
var focusNextElement = function(fromElement, options) {
  if (options === void 0) {
    options = {};
  }
  moveFocus(fromElement, options, function(_a8, cycle) {
    var next2 = _a8.next, first = _a8.first;
    return next2 || cycle && first;
  });
};
var focusPrevElement = function(fromElement, options) {
  if (options === void 0) {
    options = {};
  }
  moveFocus(fromElement, options, function(_a8, cycle) {
    var prev2 = _a8.prev, last = _a8.last;
    return prev2 || cycle && last;
  });
};
var pickBoundary = function(scope, options, what) {
  var _a8;
  var boundary = getBoundary(scope, (_a8 = options.onlyTabbable) !== null && _a8 !== void 0 ? _a8 : true);
  var node3 = boundary[what];
  if (node3) {
    focusOn(node3.node, options.focusOptions);
  }
};
var focusFirstElement = function(scope, options) {
  if (options === void 0) {
    options = {};
  }
  pickBoundary(scope, options, "first");
};
var focusLastElement = function(scope, options) {
  if (options === void 0) {
    options = {};
  }
  pickBoundary(scope, options, "last");
};

// node_modules/react-focus-lock/dist/es2015/util.js
function deferAction(action) {
  setTimeout(action, 1);
}
var inlineProp = function inlineProp2(name, value) {
  var obj = {};
  obj[name] = value;
  return obj;
};
var extractRef = function extractRef2(ref) {
  return ref && "current" in ref ? ref.current : ref;
};

// node_modules/react-focus-lock/dist/es2015/Trap.js
var focusOnBody = function focusOnBody2() {
  return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus2() {
  return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var tryRestoreFocus = function tryRestoreFocus2() {
  return null;
};
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var windowFocused = false;
var defaultWhitelist = function defaultWhitelist2() {
  return true;
};
var focusWhitelisted = function focusWhitelisted2(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal2(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode,
    portaledElement
  };
};
var focusIsPortaledPair = function focusIsPortaledPair2(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end2, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;
  do {
    var item = allNodes[i];
    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        return;
      }
      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end2);
  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}
var focusWasOutside = function focusWasOutside2(crossFrameOption) {
  if (crossFrameOption) {
    return Boolean(focusWasOutsideWindow);
  }
  return focusWasOutsideWindow === "meanwhile";
};
var checkInHost = function checkInHost2(check, el, boundary) {
  return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost2(check, el.parentNode, boundary));
};
var withinHost = function withinHost2(activeElement, workingArea) {
  return workingArea.some(function(area) {
    return checkInHost(activeElement, area, area);
  });
};
var getNodeFocusables = function getNodeFocusables2(nodes) {
  return getFocusableNodes(nodes, /* @__PURE__ */ new Map());
};
var isNotFocusable = function isNotFocusable2(node3) {
  return !getNodeFocusables([node3.parentNode]).some(function(el) {
    return el.node === node3;
  });
};
var activateTrap = function activateTrap2() {
  var result = false;
  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions, noFocusGuards = _lastActiveTrap.noFocusGuards;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    if (focusOnBody() && lastActiveFocus) {
      if (!document.body.contains(lastActiveFocus) || isNotFocusable(lastActiveFocus)) {
        lastActiveFocus = null;
        var newTarget = tryRestoreFocus();
        if (newTarget) {
          newTarget.focus();
        }
      }
    }
    var activeElement = document && document.activeElement;
    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
      var shouldForceRestoreFocus = function shouldForceRestoreFocus2() {
        if (!focusWasOutside(crossFrame) || !noFocusGuards || !lastActiveFocus || windowFocused) {
          return false;
        }
        var nodes = getNodeFocusables(workingArea);
        var lastIndex = nodes.findIndex(function(_ref2) {
          var node3 = _ref2.node;
          return node3 === lastActiveFocus;
        });
        return lastIndex === 0 || lastIndex === nodes.length - 1;
      };
      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || shouldForceRestoreFocus() || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement, workingNode))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              if (activeElement.blur) {
                activeElement.blur();
              }
              document.body.focus();
            } else {
              result = moveFocusInside(workingArea, lastActiveFocus, {
                focusOptions
              });
              lastPortaledElement = {};
            }
          }
          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
          tryRestoreFocus = captureFocusRestore(lastActiveFocus);
        }
      }
      if (document && activeElement !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
        var newActiveElement = document && document.activeElement;
        var allNodes = expandFocusableNodes(workingArea);
        var focusedIndex = allNodes.map(function(_ref2) {
          var node3 = _ref2.node;
          return node3;
        }).indexOf(newActiveElement);
        if (focusedIndex > -1) {
          allNodes.filter(function(_ref3) {
            var guard2 = _ref3.guard, node3 = _ref3.node;
            return guard2 && node3.dataset.focusAutoGuard;
          }).forEach(function(_ref4) {
            var node3 = _ref4.node;
            return node3.removeAttribute("tabIndex");
          });
          autoGuard(focusedIndex, allNodes.length, 1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }
  return result;
};
var onTrap = function onTrap2(event) {
  if (activateTrap() && event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
var onBlur = function onBlur2() {
  return deferAction(activateTrap);
};
var onFocus = function onFocus2(event) {
  var source = event.target;
  var currentNode = event.currentTarget;
  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};
var FocusWatcher = function FocusWatcher2() {
  return null;
};
var FocusTrap = function FocusTrap2(_ref5) {
  var children = _ref5.children;
  return React13.createElement("div", {
    onBlur,
    onFocus
  }, children);
};
FocusTrap.propTypes = true ? {
  children: import_prop_types3.default.node.isRequired
} : {};
var onWindowFocus2 = function onWindowFocus3() {
  windowFocused = true;
};
var onWindowBlur2 = function onWindowBlur3() {
  windowFocused = false;
  focusWasOutsideWindow = "just";
  deferAction(function() {
    focusWasOutsideWindow = "meanwhile";
  });
};
var attachHandler = function attachHandler2() {
  document.addEventListener("focusin", onTrap);
  document.addEventListener("focusout", onBlur);
  window.addEventListener("focus", onWindowFocus2);
  window.addEventListener("blur", onWindowBlur2);
};
var detachHandler = function detachHandler2() {
  document.removeEventListener("focusin", onTrap);
  document.removeEventListener("focusout", onBlur);
  window.removeEventListener("focus", onWindowFocus2);
  window.removeEventListener("blur", onWindowBlur2);
};
function reducePropsToState(propsList) {
  return propsList.filter(function(_ref6) {
    var disabled = _ref6.disabled;
    return !disabled;
  });
}
var focusLockAPI = {
  moveFocusInside,
  focusInside,
  focusNextElement,
  focusPrevElement,
  focusFirstElement,
  focusLastElement,
  captureFocusRestore
};
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  if (trap && !lastActiveTrap) {
    attachHandler();
  }
  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;
  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation();
    if (!traps.filter(function(_ref7) {
      var id = _ref7.id;
      return id === lastTrap.id;
    }).length) {
      lastTrap.returnFocus(!trap);
    }
  }
  if (trap) {
    lastActiveFocus = null;
    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation(focusLockAPI);
    }
    activateTrap(true);
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function(cb) {
  return cb(focusLockAPI);
});
var Trap_default = index_es_default(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

// node_modules/react-focus-lock/dist/es2015/Combination.js
var FocusLockCombination = React14.forwardRef(function FocusLockUICombination(props, ref) {
  return React14.createElement(Lock_default, _extends({
    sideCar: Trap_default,
    ref
  }, props));
});
var _ref = Lock_default.propTypes || {};
var sideCar = _ref.sideCar;
var propTypes = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = true ? propTypes : {};
var Combination_default = FocusLockCombination;

// node_modules/react-focus-lock/dist/es2015/AutoFocusInside.js
var React15 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var AutoFocusInside = function AutoFocusInside2(_ref2) {
  var _ref$disabled = _ref2.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, children = _ref2.children, _ref$className = _ref2.className, className = _ref$className === void 0 ? void 0 : _ref$className;
  return React15.createElement("div", _extends({}, inlineProp(FOCUS_AUTO, !disabled), {
    className
  }), children);
};
AutoFocusInside.propTypes = true ? {
  children: import_prop_types4.default.node.isRequired,
  disabled: import_prop_types4.default.bool,
  className: import_prop_types4.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/MoveFocusInside.js
var React16 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var useFocusInside = function useFocusInside2(observedRef) {
  React16.useEffect(function() {
    var enabled = true;
    mediumEffect.useMedium(function(car) {
      var observed = observedRef && observedRef.current;
      if (enabled && observed) {
        if (!car.focusInside(observed)) {
          car.moveFocusInside(observed, null);
        }
      }
    });
    return function() {
      enabled = false;
    };
  }, [observedRef]);
};
function MoveFocusInside(_ref2) {
  var _ref$disabled = _ref2.disabled, isDisabled3 = _ref$disabled === void 0 ? false : _ref$disabled, className = _ref2.className, children = _ref2.children;
  var ref = React16.useRef(null);
  useFocusInside(isDisabled3 ? void 0 : ref);
  return React16.createElement("div", _extends({}, inlineProp(FOCUS_AUTO, !isDisabled3), {
    ref,
    className
  }), children);
}
MoveFocusInside.propTypes = true ? {
  children: import_prop_types5.default.node.isRequired,
  disabled: import_prop_types5.default.bool,
  className: import_prop_types5.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/FreeFocusInside.js
var React17 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var FreeFocusInside = function FreeFocusInside2(_ref2) {
  var children = _ref2.children, className = _ref2.className;
  return React17.createElement("div", _extends({}, inlineProp(FOCUS_ALLOW, true), {
    className
  }), children);
};
FreeFocusInside.propTypes = true ? {
  children: import_prop_types6.default.node.isRequired,
  className: import_prop_types6.default.string
} : {};

// node_modules/react-focus-lock/dist/es2015/use-focus-scope.js
var import_react68 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/use-focus-state.js
var import_react69 = __toESM(require_react());

// node_modules/react-focus-lock/dist/es2015/nano-events.js
var createNanoEvents = function createNanoEvents2() {
  return {
    emit: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      for (var i = 0, callbacks = this.events[event] || [], length2 = callbacks.length; i < length2; i++) {
        callbacks[i].apply(callbacks, args);
      }
    },
    events: {},
    on: function on(event, cb) {
      var _this$events, _this = this;
      ((_this$events = this.events)[event] || (_this$events[event] = [])).push(cb);
      return function() {
        var _this$events$event;
        _this.events[event] = (_this$events$event = _this.events[event]) == null ? void 0 : _this$events$event.filter(function(i) {
          return cb !== i;
        });
      };
    }
  };
};

// node_modules/react-focus-lock/dist/es2015/use-focus-state.js
var mainbus = createNanoEvents();

// node_modules/react-focus-lock/dist/es2015/index.js
var es2015_default = Combination_default;

// node_modules/@chakra-ui/dom-utils/dist/chunk-3XANSPY5.mjs
function isElement3(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isHTMLElement2(el) {
  var _a8;
  if (!isElement3(el))
    return false;
  const win = (_a8 = el.ownerDocument.defaultView) != null ? _a8 : window;
  return el instanceof win.HTMLElement;
}
function getOwnerWindow2(node3) {
  var _a8, _b5;
  return (_b5 = (_a8 = getOwnerDocument2(node3)) == null ? void 0 : _a8.defaultView) != null ? _b5 : window;
}
function getOwnerDocument2(node3) {
  return isElement3(node3) ? node3.ownerDocument : document;
}
function getActiveElement3(node3) {
  return getOwnerDocument2(node3).activeElement;
}

// node_modules/@chakra-ui/dom-utils/dist/chunk-4WEUWBTD.mjs
function isScrollParent(el) {
  const win = el.ownerDocument.defaultView || window;
  const { overflow, overflowX, overflowY } = win.getComputedStyle(el);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getParent(el) {
  if (el.localName === "html")
    return el;
  return el.assignedSlot || el.parentElement || el.ownerDocument.documentElement;
}
function getScrollParent(el) {
  if (["html", "body", "#document"].includes(el.localName)) {
    return el.ownerDocument.body;
  }
  if (isHTMLElement2(el) && isScrollParent(el)) {
    return el;
  }
  return getScrollParent(getParent(el));
}

// node_modules/@chakra-ui/dom-utils/dist/chunk-ROURZMX4.mjs
var hasTabIndex2 = (element) => element.hasAttribute("tabindex");
var hasNegativeTabIndex2 = (element) => hasTabIndex2(element) && element.tabIndex === -1;
function isDisabled2(element) {
  return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}
function isHidden2(element) {
  if (element.parentElement && isHidden2(element.parentElement))
    return true;
  return element.hidden;
}
function isContentEditable2(element) {
  const value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}
function isFocusable2(element) {
  if (!isHTMLElement2(element) || isHidden2(element) || isDisabled2(element)) {
    return false;
  }
  const { localName } = element;
  const focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0)
    return true;
  const others2 = {
    a: () => element.hasAttribute("href"),
    audio: () => element.hasAttribute("controls"),
    video: () => element.hasAttribute("controls")
  };
  if (localName in others2) {
    return others2[localName]();
  }
  if (isContentEditable2(element))
    return true;
  return hasTabIndex2(element);
}
function isTabbable2(element) {
  if (!element)
    return false;
  return isHTMLElement2(element) && isFocusable2(element) && !hasNegativeTabIndex2(element);
}

// node_modules/@chakra-ui/dom-utils/dist/index.mjs
var focusableElList2 = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];
var focusableElSelector2 = focusableElList2.join();
var isVisible2 = (el) => el.offsetWidth > 0 && el.offsetHeight > 0;
function getAllFocusable2(container2) {
  const focusableEls = Array.from(
    container2.querySelectorAll(focusableElSelector2)
  );
  focusableEls.unshift(container2);
  return focusableEls.filter((el) => isFocusable2(el) && isVisible2(el));
}

// node_modules/@chakra-ui/focus-lock/dist/chunk-UU5OHSNF.mjs
var import_react70 = __toESM(require_react(), 1);
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var _a7;
var FocusTrap3 = (_a7 = es2015_default.default) != null ? _a7 : es2015_default;
var FocusLock2 = (props) => {
  const {
    initialFocusRef,
    finalFocusRef,
    contentRef,
    restoreFocus,
    children,
    isDisabled: isDisabled3,
    autoFocus,
    persistentFocus,
    lockFocusAcrossFrames
  } = props;
  const onActivation = (0, import_react70.useCallback)(() => {
    if (initialFocusRef == null ? void 0 : initialFocusRef.current) {
      initialFocusRef.current.focus();
    } else if (contentRef == null ? void 0 : contentRef.current) {
      const focusables = getAllFocusable2(contentRef.current);
      if (focusables.length === 0) {
        requestAnimationFrame(() => {
          var _a24;
          (_a24 = contentRef.current) == null ? void 0 : _a24.focus();
        });
      }
    }
  }, [initialFocusRef, contentRef]);
  const onDeactivation = (0, import_react70.useCallback)(() => {
    var _a24;
    (_a24 = finalFocusRef == null ? void 0 : finalFocusRef.current) == null ? void 0 : _a24.focus();
  }, [finalFocusRef]);
  const returnFocus = restoreFocus && !finalFocusRef;
  return (0, import_jsx_runtime66.jsx)(
    FocusTrap3,
    {
      crossFrame: lockFocusAcrossFrames,
      persistentFocus,
      autoFocus,
      disabled: isDisabled3,
      onActivation,
      onDeactivation,
      returnFocus,
      children
    }
  );
};
FocusLock2.displayName = "FocusLock";

// node_modules/@chakra-ui/hooks/dist/chunk-6SQFIFNP.mjs
var import_react71 = __toESM(require_react(), 1);
function usePrevious(value) {
  const ref = (0, import_react71.useRef)();
  (0, import_react71.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// node_modules/@chakra-ui/hooks/dist/chunk-YSKACL7R.mjs
var import_react72 = __toESM(require_react(), 1);
function isPrintableCharacter(event) {
  const { key } = event;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut(props = {}) {
  const { timeout = 300, preventDefault = () => true } = props;
  const [keys2, setKeys] = (0, import_react72.useState)([]);
  const timeoutRef = (0, import_react72.useRef)();
  const flush = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const clearKeysAfterDelay = () => {
    flush();
    timeoutRef.current = setTimeout(() => {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };
  (0, import_react72.useEffect)(() => flush, []);
  function onKeyDown(fn2) {
    return (event) => {
      if (event.key === "Backspace") {
        const keysCopy = [...keys2];
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }
      if (isPrintableCharacter(event)) {
        const keysCopy = keys2.concat(event.key);
        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
        setKeys(keysCopy);
        fn2(keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }
  return onKeyDown;
}

// node_modules/@chakra-ui/hooks/dist/chunk-724WJZW4.mjs
var import_react73 = __toESM(require_react(), 1);
var useSafeLayoutEffect3 = isBrowser2 ? import_react73.useLayoutEffect : import_react73.useEffect;

// node_modules/@chakra-ui/hooks/dist/chunk-KA2477BY.mjs
var import_react74 = __toESM(require_react(), 1);
function useCallbackRef3(fn2, deps = []) {
  const ref = (0, import_react74.useRef)(fn2);
  useSafeLayoutEffect3(() => {
    ref.current = fn2;
  });
  return (0, import_react74.useCallback)((...args) => {
    var _a8;
    return (_a8 = ref.current) == null ? void 0 : _a8.call(ref, ...args);
  }, deps);
}

// node_modules/@chakra-ui/hooks/dist/chunk-HMTAETMO.mjs
var import_react75 = __toESM(require_react(), 1);
function useTimeout2(callback, delay) {
  const fn2 = useCallbackRef3(callback);
  (0, import_react75.useEffect)(() => {
    if (delay == null)
      return void 0;
    let timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn2();
    }, delay);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn2]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-W4SX2OS5.mjs
var import_react76 = __toESM(require_react(), 1);
function useWhyDidYouUpdate(name, props) {
  const previousProps = (0, import_react76.useRef)();
  (0, import_react76.useEffect)(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changesObj = {};
      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });
      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-update]", name, changesObj);
      }
    }
    previousProps.current = props;
  });
}

// node_modules/@chakra-ui/hooks/dist/chunk-GVIR6Q3W.mjs
var import_react77 = __toESM(require_react(), 1);
function useInterval(callback, delay) {
  const fn2 = useCallbackRef3(callback);
  (0, import_react77.useEffect)(() => {
    let intervalId = null;
    const tick = () => fn2();
    if (delay !== null) {
      intervalId = window.setInterval(tick, delay);
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, fn2]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-3VAWNCU2.mjs
var import_react78 = __toESM(require_react(), 1);
function useLatestRef(value) {
  const ref = (0, import_react78.useRef)(null);
  ref.current = value;
  return ref;
}

// node_modules/@chakra-ui/hooks/dist/chunk-AZVKQZKI.mjs
var import_react79 = __toESM(require_react(), 1);
function assignRef4(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error2) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function useMergeRefs3(...refs) {
  return (0, import_react79.useMemo)(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node3) => {
      refs.forEach((ref) => {
        if (ref)
          assignRef4(ref, node3);
      });
    };
  }, refs);
}

// node_modules/@chakra-ui/hooks/dist/chunk-7JEV5YKL.mjs
var import_react80 = __toESM(require_react(), 1);
function useEventListener2(event, handler, env2, options) {
  const listener = useCallbackRef3(handler);
  (0, import_react80.useEffect)(() => {
    var _a8;
    const node3 = (_a8 = runIfFn3(env2)) != null ? _a8 : document;
    if (!handler) {
      return;
    }
    node3.addEventListener(event, listener, options);
    return () => {
      node3.removeEventListener(event, listener, options);
    };
  }, [event, env2, options, listener, handler]);
  return () => {
    var _a8;
    const node3 = (_a8 = runIfFn3(env2)) != null ? _a8 : document;
    node3.removeEventListener(event, listener, options);
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-LMHOK4JG.mjs
var import_react81 = __toESM(require_react(), 1);
function useMouseDownRef(shouldListen = true) {
  const mouseDownRef = (0, import_react81.useRef)();
  useEventListener2("mousedown", (event) => {
    if (shouldListen) {
      mouseDownRef.current = event.target;
    }
  });
  return mouseDownRef;
}

// node_modules/@chakra-ui/hooks/dist/chunk-R5W6LHQW.mjs
var import_react82 = __toESM(require_react(), 1);
function useOutsideClick(props) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef3(handler);
  const stateRef = (0, import_react82.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const state2 = stateRef.current;
  (0, import_react82.useEffect)(() => {
    if (!enabled)
      return;
    const onPointerDown = (e) => {
      if (isValidEvent(e, ref)) {
        state2.isPointerDown = true;
      }
    };
    const onMouseUp = (event) => {
      if (state2.ignoreEmulatedMouseEvents) {
        state2.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state2.isPointerDown && handler && isValidEvent(event, ref)) {
        state2.isPointerDown = false;
        savedHandler(event);
      }
    };
    const onTouchEnd = (event) => {
      state2.ignoreEmulatedMouseEvents = true;
      if (handler && state2.isPointerDown && isValidEvent(event, ref)) {
        state2.isPointerDown = false;
        savedHandler(event);
      }
    };
    const doc = getOwnerDocument(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state2, enabled]);
}
function isValidEvent(event, ref) {
  var _a8;
  const target = event.target;
  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.contains(target))
      return false;
  }
  return !((_a8 = ref.current) == null ? void 0 : _a8.contains(target));
}

// node_modules/@chakra-ui/hooks/dist/chunk-ZCYNKCF5.mjs
function usePointerEvent(env2, eventName, handler, options) {
  return useEventListener2(
    getPointerEventName(eventName),
    wrapPointerEventHandler(handler, eventName === "pointerdown"),
    env2,
    options
  );
}

// node_modules/@chakra-ui/hooks/dist/chunk-NGVRPZ6W.mjs
var import_react83 = __toESM(require_react(), 1);
function useUnmountEffect(fn2, deps = []) {
  return (0, import_react83.useEffect)(
    () => () => fn2(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
}

// node_modules/@chakra-ui/hooks/dist/chunk-77SN3XBT.mjs
var import_react84 = __toESM(require_react(), 1);
function usePanGesture(ref, props) {
  const {
    onPan,
    onPanStart,
    onPanEnd,
    onPanSessionStart,
    onPanSessionEnd,
    threshold
  } = props;
  const hasPanEvents = Boolean(
    onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd
  );
  const panSession = (0, import_react84.useRef)(null);
  const handlers2 = {
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd(event, info) {
      panSession.current = null;
      onPanEnd == null ? void 0 : onPanEnd(event, info);
    }
  };
  (0, import_react84.useEffect)(() => {
    var _a8;
    (_a8 = panSession.current) == null ? void 0 : _a8.updateHandlers(handlers2);
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers2, threshold);
  }
  usePointerEvent(
    () => ref.current,
    "pointerdown",
    hasPanEvents ? onPointerDown : noop2
  );
  useUnmountEffect(() => {
    var _a8;
    (_a8 = panSession.current) == null ? void 0 : _a8.end();
    panSession.current = null;
  });
}

// node_modules/@chakra-ui/hooks/dist/chunk-6B2YUEGK.mjs
var import_react85 = __toESM(require_react(), 1);
function useId3(idProp, prefix4) {
  const id = (0, import_react85.useId)();
  return (0, import_react85.useMemo)(
    () => idProp || [prefix4, id].filter(Boolean).join("-"),
    [idProp, prefix4, id]
  );
}
function useIds(idProp, ...prefixes) {
  const id = useId3(idProp);
  return (0, import_react85.useMemo)(() => {
    return prefixes.map((prefix4) => `${prefix4}-${id}`);
  }, [id, prefixes]);
}
function useOptionalPart(partId) {
  const [id, setId] = (0, import_react85.useState)(null);
  const ref = (0, import_react85.useCallback)(
    (node3) => {
      setId(node3 ? partId : null);
    },
    [partId]
  );
  return { ref, id, isRendered: Boolean(id) };
}

// node_modules/@chakra-ui/hooks/dist/chunk-7JSBRQFI.mjs
var import_react86 = __toESM(require_react(), 1);
function useControllableProp(prop, state2) {
  const isControlled = prop !== void 0;
  const value = isControlled && typeof prop !== "undefined" ? prop : state2;
  return [isControlled, value];
}
function useControllableState2(props) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev2, next2) => prev2 !== next2
  } = props;
  const onChangeProp = useCallbackRef3(onChange);
  const shouldUpdateProp = useCallbackRef3(shouldUpdate);
  const [valueState, setValue] = (0, import_react86.useState)(defaultValue);
  const isControlled = valueProp !== void 0;
  const value = isControlled ? valueProp : valueState;
  const updateValue = (0, import_react86.useCallback)(
    (next2) => {
      const nextValue = runIfFn3(next2, value);
      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }
      if (!isControlled) {
        setValue(nextValue);
      }
      onChangeProp(nextValue);
    },
    [isControlled, onChangeProp, value, shouldUpdateProp]
  );
  return [value, updateValue];
}

// node_modules/@chakra-ui/hooks/dist/chunk-7JBTTEVG.mjs
var import_react87 = __toESM(require_react(), 1);
function useDisclosure(props = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp
  } = props;
  const onOpenPropCallbackRef = useCallbackRef3(onOpenProp);
  const onClosePropCallbackRef = useCallbackRef3(onCloseProp);
  const [isOpenState, setIsOpen] = (0, import_react87.useState)(props.defaultIsOpen || false);
  const [isControlled, isOpen] = useControllableProp(isOpenProp, isOpenState);
  const id = useId3(idProp, "disclosure");
  const onClose = (0, import_react87.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onClosePropCallbackRef == null ? void 0 : onClosePropCallbackRef();
  }, [isControlled, onClosePropCallbackRef]);
  const onOpen = (0, import_react87.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenPropCallbackRef == null ? void 0 : onOpenPropCallbackRef();
  }, [isControlled, onOpenPropCallbackRef]);
  const onToggle = (0, import_react87.useCallback)(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);
  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps: (props2 = {}) => ({
      ...props2,
      "aria-expanded": isOpen,
      "aria-controls": id,
      onClick: callAllHandlers2(props2.onClick, onToggle)
    }),
    getDisclosureProps: (props2 = {}) => ({
      ...props2,
      hidden: !isOpen,
      id
    })
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-QNRG6N65.mjs
var import_react88 = __toESM(require_react(), 1);
function useEventListenerMap() {
  const listeners = (0, import_react88.useRef)(/* @__PURE__ */ new Map());
  const currentListeners = listeners.current;
  const add3 = (0, import_react88.useCallback)((el, type, listener, options) => {
    const pointerEventListener = wrapPointerEventHandler(
      listener,
      type === "pointerdown"
    );
    listeners.current.set(listener, {
      __listener: pointerEventListener,
      type: getPointerEventName(type),
      el,
      options
    });
    el.addEventListener(type, pointerEventListener, options);
  }, []);
  const remove = (0, import_react88.useCallback)(
    (el, type, listener, options) => {
      const { __listener: pointerEventListener } = listeners.current.get(listener);
      el.removeEventListener(type, pointerEventListener, options);
      listeners.current.delete(pointerEventListener);
    },
    []
  );
  (0, import_react88.useEffect)(
    () => () => {
      currentListeners.forEach((value, key) => {
        remove(value.el, value.type, key, value.options);
      });
    },
    [remove, currentListeners]
  );
  return { add: add3, remove };
}

// node_modules/@chakra-ui/hooks/dist/chunk-6WEF4DIO.mjs
var import_react89 = __toESM(require_react(), 1);
var useUpdateEffect2 = (effect5, deps) => {
  const renderCycleRef = (0, import_react89.useRef)(false);
  const effectCycleRef = (0, import_react89.useRef)(false);
  (0, import_react89.useEffect)(() => {
    const isMounted = renderCycleRef.current;
    const shouldRun = isMounted && effectCycleRef.current;
    if (shouldRun) {
      return effect5();
    }
    effectCycleRef.current = true;
  }, deps);
  (0, import_react89.useEffect)(() => {
    renderCycleRef.current = true;
    return () => {
      renderCycleRef.current = false;
    };
  }, []);
};

// node_modules/@chakra-ui/hooks/dist/chunk-LAJNVC3F.mjs
function useFocusEffect(ref, options) {
  const { shouldFocus, preventScroll } = options;
  useUpdateEffect2(() => {
    const node3 = ref.current;
    if (!node3 || !shouldFocus)
      return;
    if (!hasFocusWithin(node3)) {
      focus(node3, { preventScroll, nextTick: true });
    }
  }, [shouldFocus, ref, preventScroll]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-4INTB4VC.mjs
function preventReturnFocus(containerRef) {
  const el = containerRef.current;
  if (!el)
    return false;
  const activeElement = getActiveElement(el);
  if (!activeElement)
    return false;
  if (contains(el, activeElement))
    return false;
  if (isTabbable(activeElement))
    return true;
  return false;
}
function useFocusOnHide(containerRef, options) {
  const { shouldFocus: shouldFocusProp, visible, focusRef } = options;
  const shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect2(() => {
    if (!shouldFocus)
      return;
    if (preventReturnFocus(containerRef)) {
      return;
    }
    const el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;
    if (el) {
      focus(el, { nextTick: true });
    }
  }, [shouldFocus, containerRef, focusRef]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-CUYKOI3H.mjs
function useFocusOnPointerDown2(props) {
  const { ref, elements, enabled } = props;
  const isSafari2 = detectBrowser("Safari");
  const doc = () => getOwnerDocument(ref.current);
  usePointerEvent(doc, "pointerdown", (event) => {
    if (!isSafari2 || !enabled)
      return;
    const target = event.target;
    const els = elements != null ? elements : [ref];
    const isValidTarget = els.some((elementOrRef) => {
      const el = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
      return contains(el, target);
    });
    if (!isActiveElement(target) && isValidTarget) {
      event.preventDefault();
      focus(target);
    }
  });
}

// node_modules/@chakra-ui/hooks/dist/chunk-IQENJQQ5.mjs
var import_react90 = __toESM(require_react(), 1);
var defaultOptions2 = {
  preventScroll: true,
  shouldFocus: false
};
function useFocusOnShow(target, options = defaultOptions2) {
  const { focusRef, preventScroll, shouldFocus, visible } = options;
  const element = isRefObject(target) ? target.current : target;
  const autoFocusValue = shouldFocus && visible;
  const autoFocusRef = (0, import_react90.useRef)(autoFocusValue);
  const lastVisibleRef = (0, import_react90.useRef)(visible);
  useSafeLayoutEffect3(() => {
    if (!lastVisibleRef.current && visible) {
      autoFocusRef.current = autoFocusValue;
    }
    lastVisibleRef.current = visible;
  }, [visible, autoFocusValue]);
  const onFocus3 = (0, import_react90.useCallback)(() => {
    if (!visible || !element || !autoFocusRef.current)
      return;
    autoFocusRef.current = false;
    if (contains(element, document.activeElement))
      return;
    if (focusRef == null ? void 0 : focusRef.current) {
      focus(focusRef.current, { preventScroll, nextTick: true });
    } else {
      const tabbableEls = getAllFocusable(element);
      if (tabbableEls.length > 0) {
        focus(tabbableEls[0], { preventScroll, nextTick: true });
      }
    }
  }, [visible, preventScroll, element, focusRef]);
  useUpdateEffect2(() => {
    onFocus3();
  }, [onFocus3]);
  useEventListener2("transitionend", onFocus3, element);
}

// node_modules/@chakra-ui/hooks/dist/chunk-TJQCN7SC.mjs
var import_react91 = __toESM(require_react(), 1);
function useForceUpdate() {
  const unloadingRef = (0, import_react91.useRef)(false);
  const [count, setCount] = (0, import_react91.useState)(0);
  useUnmountEffect(() => {
    unloadingRef.current = true;
  });
  return (0, import_react91.useCallback)(() => {
    if (!unloadingRef.current) {
      setCount(count + 1);
    }
  }, [count]);
}

// node_modules/@chakra-ui/hooks/dist/chunk-ATO3JZNW.mjs
var import_react92 = __toESM(require_react(), 1);
function useAnimationState(props) {
  const { isOpen, ref } = props;
  const [mounted, setMounted] = (0, import_react92.useState)(isOpen);
  const [once2, setOnce] = (0, import_react92.useState)(false);
  (0, import_react92.useEffect)(() => {
    if (!once2) {
      setMounted(isOpen);
      setOnce(true);
    }
  }, [isOpen, once2, mounted]);
  useEventListener2(
    "animationend",
    () => {
      setMounted(isOpen);
    },
    () => ref.current
  );
  const hidden = isOpen ? false : !mounted;
  return {
    present: !hidden,
    onComplete() {
      var _a8;
      const win = getOwnerWindow(ref.current);
      const evt = new win.CustomEvent("animationend", { bubbles: true });
      (_a8 = ref.current) == null ? void 0 : _a8.dispatchEvent(evt);
    }
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-BBVTFCMB.mjs
var import_react93 = __toESM(require_react(), 1);
function useBoolean(initialState2 = false) {
  const [value, setValue] = (0, import_react93.useState)(initialState2);
  const callbacks = (0, import_react93.useMemo)(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev2) => !prev2)
    }),
    []
  );
  return [value, callbacks];
}

// node_modules/@chakra-ui/hooks/dist/chunk-KYYEOW6S.mjs
var import_react94 = __toESM(require_react(), 1);
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard(), 1);
function useClipboard(value, optionsOrTimeout = {}) {
  const [hasCopied, setHasCopied] = (0, import_react94.useState)(false);
  const [valueState, setValueState] = (0, import_react94.useState)(value);
  (0, import_react94.useEffect)(() => setValueState(value), [value]);
  const { timeout = 1500, ...copyOptions } = typeof optionsOrTimeout === "number" ? { timeout: optionsOrTimeout } : optionsOrTimeout;
  const onCopy = (0, import_react94.useCallback)(() => {
    const didCopy = (0, import_copy_to_clipboard.default)(valueState, copyOptions);
    setHasCopied(didCopy);
  }, [valueState, copyOptions]);
  (0, import_react94.useEffect)(() => {
    let timeoutId = null;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: valueState,
    setValue: setValueState,
    onCopy,
    hasCopied
  };
}

// node_modules/@chakra-ui/hooks/dist/chunk-QP32JBMJ.mjs
var import_react95 = __toESM(require_react(), 1);
function useConst(init) {
  const ref = (0, import_react95.useRef)(null);
  if (ref.current === null) {
    ref.current = typeof init === "function" ? init() : init;
  }
  return ref.current;
}

// node_modules/@chakra-ui/hooks/dist/chunk-S7MFKWQB.mjs
var import_react96 = __toESM(require_react(), 1);
function useDimensions(ref, observe) {
  const [dimensions, setDimensions] = (0, import_react96.useState)(null);
  const rafId = (0, import_react96.useRef)();
  useSafeLayoutEffect3(() => {
    function measure() {
      const node3 = ref.current;
      if (!node3)
        return;
      rafId.current = requestAnimationFrame(() => {
        const boxModel = getBox(node3);
        setDimensions(boxModel);
      });
    }
    measure();
    if (observe) {
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure);
    }
    return () => {
      if (observe) {
        window.removeEventListener("resize", measure);
        window.removeEventListener("scroll", measure);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [observe]);
  return dimensions;
}

// node_modules/@chakra-ui/input/dist/chunk-FKYN3ZGE.mjs
var import_react97 = __toESM(require_react(), 1);
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var [InputGroupStylesProvider, useInputGroupStyles] = createContext2({
  name: `InputGroupStylesContext`,
  errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
});
var InputGroup = forwardRef3(
  function InputGroup2(props, ref) {
    const styles2 = useMultiStyleConfig("Input", props);
    const { children, className, ...rest } = omitThemingProps(props);
    const _className = cx("chakra-input__group", className);
    const groupStyles = {};
    const validChildren = getValidChildren2(children);
    const input = styles2.field;
    validChildren.forEach((child) => {
      var _a8, _b5;
      if (!styles2)
        return;
      if (input && child.type.id === "InputLeftElement") {
        groupStyles.paddingStart = (_a8 = input.height) != null ? _a8 : input.h;
      }
      if (input && child.type.id === "InputRightElement") {
        groupStyles.paddingEnd = (_b5 = input.height) != null ? _b5 : input.h;
      }
      if (child.type.id === "InputRightAddon") {
        groupStyles.borderEndRadius = 0;
      }
      if (child.type.id === "InputLeftAddon") {
        groupStyles.borderStartRadius = 0;
      }
    });
    const clones = validChildren.map((child) => {
      var _a8, _b5;
      const theming = compact({
        size: ((_a8 = child.props) == null ? void 0 : _a8.size) || props.size,
        variant: ((_b5 = child.props) == null ? void 0 : _b5.variant) || props.variant
      });
      return child.type.id !== "Input" ? (0, import_react97.cloneElement)(child, theming) : (0, import_react97.cloneElement)(child, Object.assign(theming, groupStyles, child.props));
    });
    return (0, import_jsx_runtime67.jsx)(
      chakra.div,
      {
        className: _className,
        ref,
        __css: {
          width: "100%",
          display: "flex",
          position: "relative",
          // Parts of inputs override z-index to ensure that they stack correctly on each other
          // Create a new stacking context so that these overrides don't leak out and conflict with other z-indexes
          isolation: "isolate",
          ...styles2.group
        },
        "data-group": true,
        ...rest,
        children: (0, import_jsx_runtime67.jsx)(InputGroupStylesProvider, { value: styles2, children: clones })
      }
    );
  }
);
InputGroup.displayName = "InputGroup";

// node_modules/@chakra-ui/input/dist/chunk-ADBZ7YHX.mjs
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent"
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent"
  }
};
var StyledAddon = chakra("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
});
var InputAddon = forwardRef3(
  function InputAddon2(props, ref) {
    var _a8;
    const { placement = "left", ...rest } = props;
    const placementStyles = (_a8 = placements[placement]) != null ? _a8 : {};
    const styles2 = useInputGroupStyles();
    return (0, import_jsx_runtime68.jsx)(
      StyledAddon,
      {
        ref,
        ...rest,
        __css: {
          ...styles2.addon,
          ...placementStyles
        }
      }
    );
  }
);
InputAddon.displayName = "InputAddon";
var InputLeftAddon = forwardRef3(
  function InputLeftAddon2(props, ref) {
    return (0, import_jsx_runtime68.jsx)(
      InputAddon,
      {
        ref,
        placement: "left",
        ...props,
        className: cx("chakra-input__left-addon", props.className)
      }
    );
  }
);
InputLeftAddon.displayName = "InputLeftAddon";
InputLeftAddon.id = "InputLeftAddon";
var InputRightAddon = forwardRef3(
  function InputRightAddon2(props, ref) {
    return (0, import_jsx_runtime68.jsx)(
      InputAddon,
      {
        ref,
        placement: "right",
        ...props,
        className: cx("chakra-input__right-addon", props.className)
      }
    );
  }
);
InputRightAddon.displayName = "InputRightAddon";
InputRightAddon.id = "InputRightAddon";

// node_modules/@chakra-ui/input/dist/chunk-2ZHRCML3.mjs
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var StyledInputElement = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
});
var InputElement = forwardRef3(function InputElement2(props, ref) {
  var _a8, _b5;
  const { placement = "left", ...rest } = props;
  const styles2 = useInputGroupStyles();
  const input = styles2.field;
  const attr = placement === "left" ? "insetStart" : "insetEnd";
  const elementStyles = {
    [attr]: "0",
    width: (_a8 = input == null ? void 0 : input.height) != null ? _a8 : input == null ? void 0 : input.h,
    height: (_b5 = input == null ? void 0 : input.height) != null ? _b5 : input == null ? void 0 : input.h,
    fontSize: input == null ? void 0 : input.fontSize,
    ...styles2.element
  };
  return (0, import_jsx_runtime69.jsx)(StyledInputElement, { ref, __css: elementStyles, ...rest });
});
InputElement.id = "InputElement";
InputElement.displayName = "InputElement";
var InputLeftElement = forwardRef3(
  function InputLeftElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__left-element", className);
    return (0, import_jsx_runtime69.jsx)(
      InputElement,
      {
        ref,
        placement: "left",
        className: _className,
        ...rest
      }
    );
  }
);
InputLeftElement.id = "InputLeftElement";
InputLeftElement.displayName = "InputLeftElement";
var InputRightElement = forwardRef3(
  function InputRightElement2(props, ref) {
    const { className, ...rest } = props;
    const _className = cx("chakra-input__right-element", className);
    return (0, import_jsx_runtime69.jsx)(
      InputElement,
      {
        ref,
        placement: "right",
        className: _className,
        ...rest
      }
    );
  }
);
InputRightElement.id = "InputRightElement";
InputRightElement.displayName = "InputRightElement";

// node_modules/@chakra-ui/input/dist/chunk-6CVSDS6C.mjs
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var Input = forwardRef3(function Input2(props, ref) {
  const { htmlSize, ...rest } = props;
  const styles2 = useMultiStyleConfig("Input", rest);
  const ownProps = omitThemingProps(rest);
  const input = useFormControl(ownProps);
  const _className = cx("chakra-input", props.className);
  return (0, import_jsx_runtime70.jsx)(
    chakra.input,
    {
      size: htmlSize,
      ...input,
      __css: styles2.field,
      ref,
      className: _className
    }
  );
});
Input.displayName = "Input";
Input.id = "Input";

// node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var Link = forwardRef3(function Link2(props, ref) {
  const styles2 = useStyleConfig("Link", props);
  const { className, isExternal, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime71.jsx)(
    chakra.a,
    {
      target: isExternal ? "_blank" : void 0,
      rel: isExternal ? "noopener" : void 0,
      ref,
      className: cx("chakra-link", className),
      ...rest,
      __css: styles2
    }
  );
});
Link.displayName = "Link";

// node_modules/@chakra-ui/layout/dist/chunk-46CXQZ4E.mjs
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var [ListStylesProvider, useListStyles] = createContext2({
  name: `ListStylesContext`,
  errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
});
var List = forwardRef3(function List2(props, ref) {
  const styles2 = useMultiStyleConfig("List", props);
  const {
    children,
    styleType = "none",
    stylePosition,
    spacing: spacing2,
    ...rest
  } = omitThemingProps(props);
  const validChildren = getValidChildren2(children);
  const selector = "& > *:not(style) ~ *:not(style)";
  const spacingStyle = spacing2 ? { [selector]: { mt: spacing2 } } : {};
  return (0, import_jsx_runtime72.jsx)(ListStylesProvider, { value: styles2, children: (0, import_jsx_runtime72.jsx)(
    chakra.ul,
    {
      ref,
      listStyleType: styleType,
      listStylePosition: stylePosition,
      role: "list",
      __css: { ...styles2.container, ...spacingStyle },
      ...rest,
      children: validChildren
    }
  ) });
});
List.displayName = "List";
var OrderedList = forwardRef3((props, ref) => {
  const { as, ...rest } = props;
  return (0, import_jsx_runtime72.jsx)(List, { ref, as: "ol", styleType: "decimal", marginStart: "1em", ...rest });
});
OrderedList.displayName = "OrderedList";
var UnorderedList = forwardRef3(function UnorderedList2(props, ref) {
  const { as, ...rest } = props;
  return (0, import_jsx_runtime72.jsx)(List, { ref, as: "ul", styleType: "initial", marginStart: "1em", ...rest });
});
UnorderedList.displayName = "UnorderedList";
var ListItem = forwardRef3(function ListItem2(props, ref) {
  const styles2 = useListStyles();
  return (0, import_jsx_runtime72.jsx)(chakra.li, { ref, ...props, __css: styles2.item });
});
ListItem.displayName = "ListItem";
var ListIcon = forwardRef3(function ListIcon2(props, ref) {
  const styles2 = useListStyles();
  return (0, import_jsx_runtime72.jsx)(Icon, { ref, role: "presentation", ...props, __css: styles2.icon });
});
ListIcon.displayName = "ListIcon";

// node_modules/@chakra-ui/layout/dist/chunk-JARCRF6W.mjs
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var Grid = forwardRef3(function Grid2(props, ref) {
  const {
    templateAreas,
    gap,
    rowGap,
    columnGap,
    column: column2,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns,
    ...rest
  } = props;
  const styles2 = {
    display: "grid",
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column2,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return (0, import_jsx_runtime73.jsx)(chakra.div, { ref, __css: styles2, ...rest });
});
Grid.displayName = "Grid";

// node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs
var breakpoints3 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function mapResponsive2(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => item === null ? null : mapper(item));
  }
  if (isObject(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}
function arrayToObjectNotation2(values, bps = breakpoints3) {
  const result = {};
  values.forEach((value, index) => {
    const key = bps[index];
    if (value == null)
      return;
    result[key] = value;
  });
  return result;
}

// node_modules/@chakra-ui/layout/dist/chunk-NEK3OOAM.mjs
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var SimpleGrid = forwardRef3(
  function SimpleGrid2(props, ref) {
    const { columns, spacingX, spacingY, spacing: spacing2, minChildWidth, ...rest } = props;
    const theme2 = useTheme2();
    const templateColumns = minChildWidth ? widthToColumns(minChildWidth, theme2) : countToColumns(columns);
    return (0, import_jsx_runtime74.jsx)(
      Grid,
      {
        ref,
        gap: spacing2,
        columnGap: spacingX,
        rowGap: spacingY,
        templateColumns,
        ...rest
      }
    );
  }
);
SimpleGrid.displayName = "SimpleGrid";
function toPx(n) {
  return typeof n === "number" ? `${n}px` : n;
}
function widthToColumns(width, theme2) {
  return mapResponsive2(width, (value) => {
    const _value = getToken("sizes", value, toPx(value))(theme2);
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return mapResponsive2(
    count,
    (value) => value === null ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}

// node_modules/@chakra-ui/layout/dist/chunk-BL2ZZSHG.mjs
var Spacer = chakra("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";

// node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var Text = forwardRef3(function Text2(props, ref) {
  const styles2 = useStyleConfig("Text", props);
  const { className, align, decoration, casing, ...rest } = omitThemingProps(props);
  const aliasedProps = compact({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return (0, import_jsx_runtime75.jsx)(
    chakra.p,
    {
      ref,
      className: cx("chakra-text", props.className),
      ...aliasedProps,
      ...rest,
      __css: styles2
    }
  );
});
Text.displayName = "Text";

// node_modules/@chakra-ui/layout/dist/chunk-7ELO524Q.mjs
var import_react98 = __toESM(require_react(), 1);
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var Wrap = forwardRef3(function Wrap2(props, ref) {
  const {
    spacing: spacing2 = "0.5rem",
    spacingX,
    spacingY,
    children,
    justify,
    direction: direction2,
    align,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const _children = (0, import_react98.useMemo)(
    () => shouldWrapChildren ? import_react98.Children.map(children, (child, index) => (0, import_jsx_runtime76.jsx)(WrapItem, { children: child }, index)) : children,
    [children, shouldWrapChildren]
  );
  return (0, import_jsx_runtime76.jsx)(chakra.div, { ref, className: cx("chakra-wrap", className), ...rest, children: (0, import_jsx_runtime76.jsx)(
    chakra.ul,
    {
      className: "chakra-wrap__list",
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction2,
        listStyleType: "none",
        gap: spacing2,
        columnGap: spacingX,
        rowGap: spacingY,
        padding: "0"
      },
      children: _children
    }
  ) });
});
Wrap.displayName = "Wrap";
var WrapItem = forwardRef3(function WrapItem2(props, ref) {
  const { className, ...rest } = props;
  return (0, import_jsx_runtime76.jsx)(
    chakra.li,
    {
      ref,
      __css: { display: "flex", alignItems: "flex-start" },
      className: cx("chakra-wrap__listitem", className),
      ...rest
    }
  );
});
WrapItem.displayName = "WrapItem";

// node_modules/@chakra-ui/layout/dist/chunk-KTD65HY5.mjs
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var StackDivider = (props) => (0, import_jsx_runtime77.jsx)(
  chakra.div,
  {
    className: "chakra-stack__divider",
    ...props,
    __css: {
      ...props["__css"],
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto"
    }
  }
);
StackDivider.displayName = "StackDivider";

// node_modules/@chakra-ui/layout/dist/chunk-ZFQCCYWD.mjs
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var StackItem = (props) => (0, import_jsx_runtime78.jsx)(
  chakra.div,
  {
    className: "chakra-stack__item",
    ...props,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"]
    }
  }
);
StackItem.displayName = "StackItem";

// node_modules/@chakra-ui/layout/dist/chunk-5VJV6UNA.mjs
function getDividerStyles(options) {
  const { spacing: spacing2, direction: direction2 } = options;
  const dividerStyles = {
    column: {
      my: spacing2,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing2,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing2,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing2,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": mapResponsive2(
      direction2,
      (value) => dividerStyles[value]
    )
  };
}

// node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs
var import_react99 = __toESM(require_react(), 1);
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
var Stack = forwardRef3((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing: spacing2 = "0.5rem",
    wrap: wrap4,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const direction2 = isInline ? "row" : directionProp != null ? directionProp : "column";
  const dividerStyle = (0, import_react99.useMemo)(
    () => getDividerStyles({ spacing: spacing2, direction: direction2 }),
    [spacing2, direction2]
  );
  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;
  const clones = (0, import_react99.useMemo)(() => {
    const validChildren = getValidChildren2(children);
    return shouldUseChildren ? validChildren : validChildren.map((child, index) => {
      const key = typeof child.key !== "undefined" ? child.key : index;
      const isLast = index + 1 === validChildren.length;
      const wrappedChild = (0, import_jsx_runtime79.jsx)(StackItem, { children: child }, key);
      const _child = shouldWrapChildren ? wrappedChild : child;
      if (!hasDivider)
        return _child;
      const clonedDivider = (0, import_react99.cloneElement)(
        divider,
        {
          __css: dividerStyle
        }
      );
      const _divider = isLast ? null : clonedDivider;
      return (0, import_jsx_runtime79.jsxs)(import_react99.Fragment, { children: [
        _child,
        _divider
      ] }, key);
    });
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children
  ]);
  const _className = cx("chakra-stack", className);
  return (0, import_jsx_runtime79.jsx)(
    chakra.div,
    {
      ref,
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction2,
      flexWrap: wrap4,
      gap: hasDivider ? void 0 : spacing2,
      className: _className,
      ...rest,
      children: clones
    }
  );
});
Stack.displayName = "Stack";

// node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var VStack = forwardRef3((props, ref) => (0, import_jsx_runtime80.jsx)(Stack, { align: "center", ...props, direction: "column", ref }));
VStack.displayName = "VStack";

// node_modules/@chakra-ui/layout/dist/chunk-3ASUQ6PA.mjs
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var HStack = forwardRef3((props, ref) => (0, import_jsx_runtime81.jsx)(Stack, { align: "center", ...props, direction: "row", ref }));
HStack.displayName = "HStack";

// node_modules/@chakra-ui/layout/dist/chunk-ZPFGWTBB.mjs
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
function spanFn(span) {
  return mapResponsive2(
    span,
    (value) => value === "auto" ? "auto" : `span ${value}/span ${value}`
  );
}
var GridItem = forwardRef3(function GridItem2(props, ref) {
  const {
    area,
    colSpan,
    colStart,
    colEnd,
    rowEnd,
    rowSpan,
    rowStart,
    ...rest
  } = props;
  const styles2 = compact({
    gridArea: area,
    gridColumn: spanFn(colSpan),
    gridRow: spanFn(rowSpan),
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd
  });
  return (0, import_jsx_runtime82.jsx)(chakra.div, { ref, __css: styles2, ...rest });
});
GridItem.displayName = "GridItem";

// node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var Heading = forwardRef3(function Heading2(props, ref) {
  const styles2 = useStyleConfig("Heading", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime83.jsx)(
    chakra.h2,
    {
      ref,
      className: cx("chakra-heading", props.className),
      ...rest,
      __css: styles2
    }
  );
});
Heading.displayName = "Heading";

// node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var Box = chakra("div");
Box.displayName = "Box";
var Square = forwardRef3(function Square2(props, ref) {
  const { size: size2, centerContent = true, ...rest } = props;
  const styles2 = centerContent ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return (0, import_jsx_runtime84.jsx)(
    Box,
    {
      ref,
      boxSize: size2,
      __css: {
        ...styles2,
        flexShrink: 0,
        flexGrow: 0
      },
      ...rest
    }
  );
});
Square.displayName = "Square";
var Circle = forwardRef3(function Circle2(props, ref) {
  const { size: size2, ...rest } = props;
  return (0, import_jsx_runtime84.jsx)(Square, { size: size2, ref, borderRadius: "9999px", ...rest });
});
Circle.displayName = "Circle";

// node_modules/@chakra-ui/layout/dist/chunk-6WNMSZKB.mjs
var import_react100 = __toESM(require_react(), 1);
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
var escapeRegexp = (term) => term.replace(/[|\\{}()[\]^$+*?.-]/g, (char2) => `\\${char2}`);
function buildRegex(query) {
  const _query = query.filter((text) => text.length !== 0).map((text) => escapeRegexp(text.trim()));
  if (!_query.length) {
    return null;
  }
  return new RegExp(`(${_query.join("|")})`, "ig");
}
function highlightWords({ text, query }) {
  const regex = buildRegex(Array.isArray(query) ? query : [query]);
  if (!regex) {
    return [{ text, match: false }];
  }
  const result = text.split(regex).filter(Boolean);
  return result.map((str) => ({ text: str, match: regex.test(str) }));
}
function useHighlight(props) {
  const { text, query } = props;
  return (0, import_react100.useMemo)(() => highlightWords({ text, query }), [text, query]);
}
var Mark = forwardRef3(function Mark2(props, ref) {
  const styles2 = useStyleConfig("Mark", props);
  const ownProps = omitThemingProps(props);
  return (0, import_jsx_runtime85.jsx)(
    Box,
    {
      ref,
      ...ownProps,
      as: "mark",
      __css: { bg: "transparent", whiteSpace: "nowrap", ...styles2 }
    }
  );
});
function Highlight(props) {
  const { children, query, styles: styles2 } = props;
  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }
  const chunks = useHighlight({ query, text: children });
  return (0, import_jsx_runtime85.jsx)(import_jsx_runtime85.Fragment, { children: chunks.map((chunk2, index) => {
    return chunk2.match ? (0, import_jsx_runtime85.jsx)(Mark, { sx: styles2, children: chunk2.text }, index) : (0, import_jsx_runtime85.jsx)(import_react100.Fragment, { children: chunk2.text }, index);
  }) });
}

// node_modules/@chakra-ui/layout/dist/chunk-FDDFQHXZ.mjs
var import_react101 = __toESM(require_react(), 1);
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
var Indicator = forwardRef3(function Indicator2(props, ref) {
  const {
    offsetX,
    offsetY,
    offset: offset2 = "0",
    placement = "top-end",
    ...rest
  } = props;
  const styles2 = (0, import_react101.useMemo)(
    () => ({
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      insetBlockStart: mapResponsive2(placement, (v) => {
        const [side] = v.split("-");
        const map = {
          top: offsetY != null ? offsetY : offset2,
          middle: "50%",
          bottom: "auto"
        };
        return map[side];
      }),
      insetBlockEnd: mapResponsive2(placement, (v) => {
        const [side] = v.split("-");
        const map = {
          top: "auto",
          middle: "50%",
          bottom: offsetY != null ? offsetY : offset2
        };
        return map[side];
      }),
      insetStart: mapResponsive2(placement, (v) => {
        const [, align] = v.split("-");
        const map = {
          start: offsetX != null ? offsetX : offset2,
          center: "50%",
          end: "auto"
        };
        return map[align];
      }),
      insetEnd: mapResponsive2(placement, (v) => {
        const [, align] = v.split("-");
        const map = {
          start: "auto",
          center: "50%",
          end: offsetX != null ? offsetX : offset2
        };
        return map[align];
      }),
      translate: mapResponsive2(placement, (v) => {
        const [side, align] = v.split("-");
        const mapX = { start: "-50%", center: "-50%", end: "50%" };
        const mapY = { top: "-50%", middle: "-50%", bottom: "50%" };
        return `${mapX[align]} ${mapY[side]}`;
      })
    }),
    [offset2, offsetX, offsetY, placement]
  );
  return (0, import_jsx_runtime86.jsx)(chakra.div, { ref, __css: styles2, ...rest });
});

// node_modules/@chakra-ui/layout/dist/chunk-EBIU6VW7.mjs
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
var Kbd = forwardRef3(function Kbd2(props, ref) {
  const styles2 = useStyleConfig("Kbd", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime87.jsx)(
    chakra.kbd,
    {
      ref,
      className: cx("chakra-kbd", className),
      ...rest,
      __css: {
        fontFamily: "mono",
        ...styles2
      }
    }
  );
});
Kbd.displayName = "Kbd";

// node_modules/@chakra-ui/layout/dist/chunk-NRJBSIIZ.mjs
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var LinkOverlay = forwardRef3(
  function LinkOverlay2(props, ref) {
    const { isExternal, target, rel, className, ...rest } = props;
    return (0, import_jsx_runtime88.jsx)(
      chakra.a,
      {
        ...rest,
        ref,
        className: cx("chakra-linkbox__overlay", className),
        rel: isExternal ? "noopener noreferrer" : rel,
        target: isExternal ? "_blank" : target,
        __css: {
          position: "static",
          "&::before": {
            content: "''",
            cursor: "inherit",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%"
          }
        }
      }
    );
  }
);
var LinkBox = forwardRef3(function LinkBox2(props, ref) {
  const { className, ...rest } = props;
  return (0, import_jsx_runtime88.jsx)(
    chakra.div,
    {
      ref,
      position: "relative",
      ...rest,
      className: cx("chakra-linkbox", className),
      __css: {
        /* Elevate the links and abbreviations up */
        "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
          position: "relative",
          zIndex: 1
        }
      }
    }
  );
});

// node_modules/@chakra-ui/layout/dist/chunk-ZVFRDZZY.mjs
var import_react102 = __toESM(require_react(), 1);
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
var AspectRatio = forwardRef3(function(props, ref) {
  const { ratio = 4 / 3, children, className, ...rest } = props;
  const child = import_react102.Children.only(children);
  const _className = cx("chakra-aspect-ratio", className);
  return (0, import_jsx_runtime89.jsx)(
    chakra.div,
    {
      ref,
      position: "relative",
      className: _className,
      _before: {
        height: 0,
        content: `""`,
        display: "block",
        paddingBottom: mapResponsive2(ratio, (r2) => `${1 / r2 * 100}%`)
      },
      __css: {
        "& > *:not(style)": {
          overflow: "hidden",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%"
        },
        "& > img, & > video": {
          objectFit: "cover"
        }
      },
      ...rest,
      children: child
    }
  );
});
AspectRatio.displayName = "AspectRatio";

// node_modules/@chakra-ui/layout/dist/chunk-Z6RXEUPO.mjs
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var Badge = forwardRef3(function Badge2(props, ref) {
  const styles2 = useStyleConfig("Badge", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime90.jsx)(
    chakra.span,
    {
      ref,
      className: cx("chakra-badge", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...styles2
      }
    }
  );
});
Badge.displayName = "Badge";

// node_modules/@chakra-ui/layout/dist/chunk-FAWTVNS3.mjs
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
var Center = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
Center.displayName = "Center";
var centerStyles = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)"
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)"
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};
var AbsoluteCenter = forwardRef3(
  function AbsoluteCenter2(props, ref) {
    const { axis = "both", ...rest } = props;
    return (0, import_jsx_runtime91.jsx)(
      chakra.div,
      {
        ref,
        __css: centerStyles[axis],
        ...rest,
        position: "absolute"
      }
    );
  }
);

// node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var Code = forwardRef3(function Code2(props, ref) {
  const styles2 = useStyleConfig("Code", props);
  const { className, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime92.jsx)(
    chakra.code,
    {
      ref,
      className: cx("chakra-code", props.className),
      ...rest,
      __css: {
        display: "inline-block",
        ...styles2
      }
    }
  );
});
Code.displayName = "Code";

// node_modules/@chakra-ui/layout/dist/chunk-5MKCW436.mjs
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var Container2 = forwardRef3(function Container22(props, ref) {
  const { className, centerContent, ...rest } = omitThemingProps(props);
  const styles2 = useStyleConfig("Container", props);
  return (0, import_jsx_runtime93.jsx)(
    chakra.div,
    {
      ref,
      className: cx("chakra-container", className),
      ...rest,
      __css: {
        ...styles2,
        ...centerContent && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }
    }
  );
});
Container2.displayName = "Container";

// node_modules/@chakra-ui/layout/dist/chunk-W7WUSNWJ.mjs
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
var Divider = forwardRef3(function Divider2(props, ref) {
  const {
    borderLeftWidth,
    borderBottomWidth,
    borderTopWidth,
    borderRightWidth,
    borderWidth,
    borderStyle,
    borderColor,
    ...styles2
  } = useStyleConfig("Divider", props);
  const {
    className,
    orientation = "horizontal",
    __css,
    ...rest
  } = omitThemingProps(props);
  const dividerStyles = {
    vertical: {
      borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
      width: "100%"
    }
  };
  return (0, import_jsx_runtime94.jsx)(
    chakra.hr,
    {
      ref,
      "aria-orientation": orientation,
      ...rest,
      __css: {
        ...styles2,
        border: "0",
        borderColor,
        borderStyle,
        ...dividerStyles[orientation],
        ...__css
      },
      className: cx("chakra-divider", className)
    }
  );
});
Divider.displayName = "Divider";

// node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var Flex = forwardRef3(function Flex2(props, ref) {
  const { direction: direction2, align, justify, wrap: wrap4, basis, grow, shrink: shrink3, ...rest } = props;
  const styles2 = {
    display: "flex",
    flexDirection: direction2,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap4,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink3
  };
  return (0, import_jsx_runtime95.jsx)(chakra.div, { ref, __css: styles2, ...rest });
});
Flex.displayName = "Flex";

// node_modules/@chakra-ui/media-query/dist/chunk-57I6FYPZ.mjs
var import_react103 = __toESM(require_react(), 1);
function useMediaQuery(query, options = {}) {
  const { ssr = true, fallback } = options;
  const { getWindow: getWindow2 } = useEnvironment();
  const queries = Array.isArray(query) ? query : [query];
  let fallbackValues = Array.isArray(fallback) ? fallback : [fallback];
  fallbackValues = fallbackValues.filter((v) => v != null);
  const [value, setValue] = (0, import_react103.useState)(() => {
    return queries.map((query2, index) => ({
      media: query2,
      matches: ssr ? !!fallbackValues[index] : getWindow2().matchMedia(query2).matches
    }));
  });
  (0, import_react103.useEffect)(() => {
    const win = getWindow2();
    setValue(
      queries.map((query2) => ({
        media: query2,
        matches: win.matchMedia(query2).matches
      }))
    );
    const mql = queries.map((query2) => win.matchMedia(query2));
    const handler = (evt) => {
      setValue((prev2) => {
        return prev2.slice().map((item) => {
          if (item.media === evt.media)
            return { ...item, matches: evt.matches };
          return item;
        });
      });
    };
    mql.forEach((mql2) => {
      if (typeof mql2.addListener === "function") {
        mql2.addListener(handler);
      } else {
        mql2.addEventListener("change", handler);
      }
    });
    return () => {
      mql.forEach((mql2) => {
        if (typeof mql2.removeListener === "function") {
          mql2.removeListener(handler);
        } else {
          mql2.removeEventListener("change", handler);
        }
      });
    };
  }, [getWindow2]);
  return value.map((item) => item.matches);
}

// node_modules/@chakra-ui/media-query/dist/chunk-Q2OSBGYW.mjs
function Visibility(props) {
  const { breakpoint, hide: hide2, children, ssr } = props;
  const [show] = useMediaQuery(breakpoint, { ssr });
  const isVisible3 = hide2 ? !show : show;
  const rendered = isVisible3 ? children : null;
  return rendered;
}

// node_modules/@chakra-ui/media-query/dist/chunk-OYHRTWD2.mjs
var getBreakpoint = (theme2, value) => {
  var _a8, _b5;
  return (_b5 = (_a8 = theme2 == null ? void 0 : theme2.breakpoints) == null ? void 0 : _a8[value]) != null ? _b5 : value;
};
function useQuery(props) {
  const { breakpoint = "", below, above } = props;
  const theme2 = useTheme2();
  const bpBelow = getBreakpoint(theme2, below);
  const bpAbove = getBreakpoint(theme2, above);
  let query = breakpoint;
  if (bpBelow) {
    query = `(max-width: ${bpBelow})`;
  } else if (bpAbove) {
    query = `(min-width: ${bpAbove})`;
  }
  return query;
}

// node_modules/@chakra-ui/media-query/dist/chunk-E2LBHKJ2.mjs
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
function Hide(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return (0, import_jsx_runtime96.jsx)(Visibility, { breakpoint: query, hide: true, ssr, children });
}
Hide.displayName = "Hide";

// node_modules/@chakra-ui/media-query/dist/chunk-6RI7LWPK.mjs
function usePrefersReducedMotion(options) {
  const [prefersReducedMotion] = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    options
  );
  return prefersReducedMotion;
}
function useColorModePreference(options) {
  const [isLight2, isDark2] = useMediaQuery(
    ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    options
  );
  if (isLight2)
    return "light";
  if (isDark2)
    return "dark";
  return void 0;
}

// node_modules/@chakra-ui/media-query/dist/chunk-VXCSBZ7K.mjs
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
function Show(props) {
  const { children, ssr } = props;
  const query = useQuery(props);
  return (0, import_jsx_runtime97.jsx)(Visibility, { breakpoint: query, ssr, children });
}
Show.displayName = "Show";

// node_modules/@chakra-ui/media-query/dist/chunk-C53CKZDP.mjs
function getClosestValue(values, breakpoint, breakpoints4 = breakpoints3) {
  let index = Object.keys(values).indexOf(breakpoint);
  if (index !== -1) {
    return values[breakpoint];
  }
  let stopIndex = breakpoints4.indexOf(breakpoint);
  while (stopIndex >= 0) {
    const key = breakpoints4[stopIndex];
    if (values.hasOwnProperty(key)) {
      index = stopIndex;
      break;
    }
    stopIndex -= 1;
  }
  if (index !== -1) {
    const key = breakpoints4[index];
    return values[key];
  }
  return void 0;
}

// node_modules/@chakra-ui/media-query/dist/chunk-6KW5I77S.mjs
function useBreakpoint(arg) {
  var _a8, _b5;
  const opts = isObject(arg) ? arg : { fallback: arg != null ? arg : "base" };
  const theme2 = useTheme2();
  const breakpoints4 = theme2.__breakpoints.details.map(
    ({ minMaxQuery, breakpoint }) => ({
      breakpoint,
      query: minMaxQuery.replace("@media screen and ", "")
    })
  );
  const fallback = breakpoints4.map((bp) => bp.breakpoint === opts.fallback);
  const values = useMediaQuery(
    breakpoints4.map((bp) => bp.query),
    { fallback, ssr: opts.ssr }
  );
  const index = values.findIndex((value) => value == true);
  return (_b5 = (_a8 = breakpoints4[index]) == null ? void 0 : _a8.breakpoint) != null ? _b5 : opts.fallback;
}

// node_modules/@chakra-ui/media-query/dist/chunk-KC77MHL3.mjs
function useBreakpointValue(values, arg) {
  var _a8;
  const opts = isObject(arg) ? arg : { fallback: arg != null ? arg : "base" };
  const breakpoint = useBreakpoint(opts);
  const theme2 = useTheme2();
  if (!breakpoint)
    return;
  const breakpoints4 = Array.from(((_a8 = theme2.__breakpoints) == null ? void 0 : _a8.keys) || []);
  const obj = Array.isArray(values) ? Object.fromEntries(
    Object.entries(arrayToObjectNotation2(values, breakpoints4)).map(
      ([key, value]) => [key, value]
    )
  ) : values;
  return getClosestValue(obj, breakpoint, breakpoints4);
}

// node_modules/@chakra-ui/menu/dist/chunk-YSKACL7R.mjs
var import_react104 = __toESM(require_react(), 1);
function isPrintableCharacter2(event) {
  const { key } = event;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut2(props = {}) {
  const { timeout = 300, preventDefault = () => true } = props;
  const [keys2, setKeys] = (0, import_react104.useState)([]);
  const timeoutRef = (0, import_react104.useRef)();
  const flush = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const clearKeysAfterDelay = () => {
    flush();
    timeoutRef.current = setTimeout(() => {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };
  (0, import_react104.useEffect)(() => flush, []);
  function onKeyDown(fn2) {
    return (event) => {
      if (event.key === "Backspace") {
        const keysCopy = [...keys2];
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }
      if (isPrintableCharacter2(event)) {
        const keysCopy = keys2.concat(event.key);
        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
        setKeys(keysCopy);
        fn2(keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }
  return onKeyDown;
}

// node_modules/@chakra-ui/menu/dist/chunk-BWUXSGSJ.mjs
function getNextItemFromSearch2(items, searchString, itemToString, currentItem) {
  if (searchString == null) {
    return currentItem;
  }
  if (!currentItem) {
    const foundItem = items.find(
      (item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())
    );
    return foundItem;
  }
  const matchingItems = items.filter(
    (item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase())
  );
  if (matchingItems.length > 0) {
    let nextIndex;
    if (matchingItems.includes(currentItem)) {
      const currentIndex = matchingItems.indexOf(currentItem);
      nextIndex = currentIndex + 1;
      if (nextIndex === matchingItems.length) {
        nextIndex = 0;
      }
      return matchingItems[nextIndex];
    }
    nextIndex = items.indexOf(matchingItems[0]);
    return items[nextIndex];
  }
  return currentItem;
}

// node_modules/@chakra-ui/clickable/dist/chunk-VDSXRTOE.mjs
var import_react105 = __toESM(require_react(), 1);
function useEventListeners() {
  const listeners = (0, import_react105.useRef)(/* @__PURE__ */ new Map());
  const currentListeners = listeners.current;
  const add3 = (0, import_react105.useCallback)((el, type, listener, options) => {
    listeners.current.set(listener, { type, el, options });
    el.addEventListener(type, listener, options);
  }, []);
  const remove = (0, import_react105.useCallback)(
    (el, type, listener, options) => {
      el.removeEventListener(type, listener, options);
      listeners.current.delete(listener);
    },
    []
  );
  (0, import_react105.useEffect)(
    () => () => {
      currentListeners.forEach((value, key) => {
        remove(value.el, value.type, key, value.options);
      });
    },
    [remove, currentListeners]
  );
  return { add: add3, remove };
}

// node_modules/@chakra-ui/clickable/dist/chunk-AXLEE3EK.mjs
var import_react106 = __toESM(require_react(), 1);
function isValidElement5(event) {
  const element = event.target;
  const { tagName, isContentEditable: isContentEditable3 } = element;
  return tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable3 !== true;
}
function useClickable(props = {}) {
  const {
    ref: htmlRef,
    isDisabled: isDisabled3,
    isFocusable: isFocusable3,
    clickOnEnter = true,
    clickOnSpace = true,
    onMouseDown,
    onMouseUp,
    onClick,
    onKeyDown,
    onKeyUp,
    tabIndex: tabIndexProp,
    onMouseOver,
    onMouseLeave,
    ...htmlProps
  } = props;
  const [isButton, setIsButton] = (0, import_react106.useState)(true);
  const [isPressed, setIsPressed] = (0, import_react106.useState)(false);
  const listeners = useEventListeners();
  const refCallback = (node3) => {
    if (!node3)
      return;
    if (node3.tagName !== "BUTTON") {
      setIsButton(false);
    }
  };
  const tabIndex = isButton ? tabIndexProp : tabIndexProp || 0;
  const trulyDisabled = isDisabled3 && !isFocusable3;
  const handleClick = (0, import_react106.useCallback)(
    (event) => {
      if (isDisabled3) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      const self2 = event.currentTarget;
      self2.focus();
      onClick == null ? void 0 : onClick(event);
    },
    [isDisabled3, onClick]
  );
  const onDocumentKeyUp = (0, import_react106.useCallback)(
    (e) => {
      if (isPressed && isValidElement5(e)) {
        e.preventDefault();
        e.stopPropagation();
        setIsPressed(false);
        listeners.remove(document, "keyup", onDocumentKeyUp, false);
      }
    },
    [isPressed, listeners]
  );
  const handleKeyDown = (0, import_react106.useCallback)(
    (event) => {
      onKeyDown == null ? void 0 : onKeyDown(event);
      if (isDisabled3 || event.defaultPrevented || event.metaKey) {
        return;
      }
      if (!isValidElement5(event.nativeEvent) || isButton)
        return;
      const shouldClickOnEnter = clickOnEnter && event.key === "Enter";
      const shouldClickOnSpace = clickOnSpace && event.key === " ";
      if (shouldClickOnSpace) {
        event.preventDefault();
        setIsPressed(true);
      }
      if (shouldClickOnEnter) {
        event.preventDefault();
        const self2 = event.currentTarget;
        self2.click();
      }
      listeners.add(document, "keyup", onDocumentKeyUp, false);
    },
    [
      isDisabled3,
      isButton,
      onKeyDown,
      clickOnEnter,
      clickOnSpace,
      listeners,
      onDocumentKeyUp
    ]
  );
  const handleKeyUp = (0, import_react106.useCallback)(
    (event) => {
      onKeyUp == null ? void 0 : onKeyUp(event);
      if (isDisabled3 || event.defaultPrevented || event.metaKey)
        return;
      if (!isValidElement5(event.nativeEvent) || isButton)
        return;
      const shouldClickOnSpace = clickOnSpace && event.key === " ";
      if (shouldClickOnSpace) {
        event.preventDefault();
        setIsPressed(false);
        const self2 = event.currentTarget;
        self2.click();
      }
    },
    [clickOnSpace, isButton, isDisabled3, onKeyUp]
  );
  const onDocumentMouseUp = (0, import_react106.useCallback)(
    (event) => {
      if (event.button !== 0)
        return;
      setIsPressed(false);
      listeners.remove(document, "mouseup", onDocumentMouseUp, false);
    },
    [listeners]
  );
  const handleMouseDown = (0, import_react106.useCallback)(
    (event) => {
      if (event.button !== 0)
        return;
      if (isDisabled3) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }
      if (!isButton) {
        setIsPressed(true);
      }
      const target = event.currentTarget;
      target.focus({ preventScroll: true });
      listeners.add(document, "mouseup", onDocumentMouseUp, false);
      onMouseDown == null ? void 0 : onMouseDown(event);
    },
    [isDisabled3, isButton, onMouseDown, listeners, onDocumentMouseUp]
  );
  const handleMouseUp = (0, import_react106.useCallback)(
    (event) => {
      if (event.button !== 0)
        return;
      if (!isButton) {
        setIsPressed(false);
      }
      onMouseUp == null ? void 0 : onMouseUp(event);
    },
    [onMouseUp, isButton]
  );
  const handleMouseOver = (0, import_react106.useCallback)(
    (event) => {
      if (isDisabled3) {
        event.preventDefault();
        return;
      }
      onMouseOver == null ? void 0 : onMouseOver(event);
    },
    [isDisabled3, onMouseOver]
  );
  const handleMouseLeave = (0, import_react106.useCallback)(
    (event) => {
      if (isPressed) {
        event.preventDefault();
        setIsPressed(false);
      }
      onMouseLeave == null ? void 0 : onMouseLeave(event);
    },
    [isPressed, onMouseLeave]
  );
  const ref = mergeRefs2(htmlRef, refCallback);
  if (isButton) {
    return {
      ...htmlProps,
      ref,
      type: "button",
      "aria-disabled": trulyDisabled ? void 0 : isDisabled3,
      disabled: trulyDisabled,
      onClick: handleClick,
      onMouseDown,
      onMouseUp,
      onKeyUp,
      onKeyDown,
      onMouseOver,
      onMouseLeave
    };
  }
  return {
    ...htmlProps,
    ref,
    role: "button",
    "data-active": dataAttr(isPressed),
    "aria-disabled": isDisabled3 ? "true" : void 0,
    tabIndex: trulyDisabled ? void 0 : tabIndex,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave
  };
}

// node_modules/@chakra-ui/react-use-focus-effect/dist/index.mjs
var import_react107 = __toESM(require_react(), 1);
function preventReturnFocus2(containerRef) {
  const el = containerRef.current;
  if (!el)
    return false;
  const activeElement = getActiveElement3(el);
  if (!activeElement)
    return false;
  if (el.contains(activeElement))
    return false;
  if (isTabbable2(activeElement))
    return true;
  return false;
}
function useFocusOnHide2(containerRef, options) {
  const { shouldFocus: shouldFocusProp, visible, focusRef } = options;
  const shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect(() => {
    if (!shouldFocus)
      return;
    if (preventReturnFocus2(containerRef)) {
      return;
    }
    const el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;
    let rafId;
    if (el) {
      rafId = requestAnimationFrame(() => {
        el.focus({ preventScroll: true });
      });
      return () => {
        cancelAnimationFrame(rafId);
      };
    }
  }, [shouldFocus, containerRef, focusRef]);
}
var defaultOptions3 = {
  preventScroll: true,
  shouldFocus: false
};
function useFocusOnShow2(target, options = defaultOptions3) {
  const { focusRef, preventScroll, shouldFocus, visible } = options;
  const element = isRefObject3(target) ? target.current : target;
  const autoFocusValue = shouldFocus && visible;
  const autoFocusRef = (0, import_react107.useRef)(autoFocusValue);
  const lastVisibleRef = (0, import_react107.useRef)(visible);
  useSafeLayoutEffect(() => {
    if (!lastVisibleRef.current && visible) {
      autoFocusRef.current = autoFocusValue;
    }
    lastVisibleRef.current = visible;
  }, [visible, autoFocusValue]);
  const onFocus3 = (0, import_react107.useCallback)(() => {
    if (!visible || !element || !autoFocusRef.current)
      return;
    autoFocusRef.current = false;
    if (element.contains(document.activeElement))
      return;
    if (focusRef == null ? void 0 : focusRef.current) {
      requestAnimationFrame(() => {
        var _a8;
        (_a8 = focusRef.current) == null ? void 0 : _a8.focus({ preventScroll });
      });
    } else {
      const tabbableEls = getAllFocusable2(element);
      if (tabbableEls.length > 0) {
        requestAnimationFrame(() => {
          tabbableEls[0].focus({ preventScroll });
        });
      }
    }
  }, [visible, preventScroll, element, focusRef]);
  useUpdateEffect(() => {
    onFocus3();
  }, [onFocus3]);
  useEventListener(element, "transitionend", onFocus3);
}
function isRefObject3(val) {
  return "current" in val;
}

// node_modules/@chakra-ui/popper/dist/chunk-6WT2JRWX.mjs
var toVar2 = (value, fallback) => ({
  var: value,
  varRef: fallback ? `var(${value}, ${fallback})` : `var(${value})`
});
var cssVars = {
  arrowShadowColor: toVar2("--popper-arrow-shadow-color"),
  arrowSize: toVar2("--popper-arrow-size", "8px"),
  arrowSizeHalf: toVar2("--popper-arrow-size-half"),
  arrowBg: toVar2("--popper-arrow-bg"),
  transformOrigin: toVar2("--popper-transform-origin"),
  arrowOffset: toVar2("--popper-arrow-offset")
};
function getBoxShadow(placement) {
  if (placement.includes("top"))
    return `1px 1px 0px 0 var(--popper-arrow-shadow-color)`;
  if (placement.includes("bottom"))
    return `-1px -1px 0px 0 var(--popper-arrow-shadow-color)`;
  if (placement.includes("right"))
    return `-1px 1px 0px 0 var(--popper-arrow-shadow-color)`;
  if (placement.includes("left"))
    return `1px -1px 0px 0 var(--popper-arrow-shadow-color)`;
}
var transforms = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
};
var toTransformOrigin = (placement) => transforms[placement];
var defaultEventListeners = {
  scroll: true,
  resize: true
};
function getEventListenerOptions(value) {
  let eventListeners;
  if (typeof value === "object") {
    eventListeners = {
      enabled: true,
      options: { ...defaultEventListeners, ...value }
    };
  } else {
    eventListeners = {
      enabled: value,
      options: defaultEventListeners
    };
  }
  return eventListeners;
}

// node_modules/@chakra-ui/popper/dist/chunk-P4KPSAOW.mjs
var matchWidth = {
  name: "matchWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: state2 }) => {
    state2.styles.popper.width = `${state2.rects.reference.width}px`;
  },
  effect: ({ state: state2 }) => () => {
    const reference2 = state2.elements.reference;
    state2.elements.popper.style.width = `${reference2.offsetWidth}px`;
  }
};
var transformOrigin = {
  name: "transformOrigin",
  enabled: true,
  phase: "write",
  fn: ({ state: state2 }) => {
    setTransformOrigin(state2);
  },
  effect: ({ state: state2 }) => () => {
    setTransformOrigin(state2);
  }
};
var setTransformOrigin = (state2) => {
  state2.elements.popper.style.setProperty(
    cssVars.transformOrigin.var,
    toTransformOrigin(state2.placement)
  );
};
var positionArrow = {
  name: "positionArrow",
  enabled: true,
  phase: "afterWrite",
  fn: ({ state: state2 }) => {
    setArrowStyles(state2);
  }
};
var setArrowStyles = (state2) => {
  var _a8;
  if (!state2.placement)
    return;
  const overrides = getArrowStyle(state2.placement);
  if (((_a8 = state2.elements) == null ? void 0 : _a8.arrow) && overrides) {
    Object.assign(state2.elements.arrow.style, {
      [overrides.property]: overrides.value,
      width: cssVars.arrowSize.varRef,
      height: cssVars.arrowSize.varRef,
      zIndex: -1
    });
    const vars2 = {
      [cssVars.arrowSizeHalf.var]: `calc(${cssVars.arrowSize.varRef} / 2 - 1px)`,
      [cssVars.arrowOffset.var]: `calc(${cssVars.arrowSizeHalf.varRef} * -1)`
    };
    for (const property in vars2) {
      state2.elements.arrow.style.setProperty(property, vars2[property]);
    }
  }
};
var getArrowStyle = (placement) => {
  if (placement.startsWith("top")) {
    return { property: "bottom", value: cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("bottom")) {
    return { property: "top", value: cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("left")) {
    return { property: "right", value: cssVars.arrowOffset.varRef };
  }
  if (placement.startsWith("right")) {
    return { property: "left", value: cssVars.arrowOffset.varRef };
  }
};
var innerArrow = {
  name: "innerArrow",
  enabled: true,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: state2 }) => {
    setInnerArrowStyles(state2);
  },
  effect: ({ state: state2 }) => () => {
    setInnerArrowStyles(state2);
  }
};
var setInnerArrowStyles = (state2) => {
  if (!state2.elements.arrow)
    return;
  const inner = state2.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!inner)
    return;
  const boxShadow = getBoxShadow(state2.placement);
  if (boxShadow) {
    inner.style.setProperty("--popper-arrow-default-shadow", boxShadow);
  }
  Object.assign(inner.style, {
    transform: "rotate(45deg)",
    background: cssVars.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: `var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))`
  });
};

// node_modules/@chakra-ui/popper/dist/chunk-AUJXXV3B.mjs
var logicals = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
var opposites = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function getPopperPlacement(placement, dir = "ltr") {
  var _a8, _b5;
  const value = ((_a8 = logicals[placement]) == null ? void 0 : _a8[dir]) || placement;
  if (dir === "ltr")
    return value;
  return (_b5 = opposites[placement]) != null ? _b5 : value;
}

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements2 = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node3) {
  if (node3 == null) {
    return window;
  }
  if (node3.toString() !== "[object Window]") {
    var ownerDocument = node3.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node3;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement4(node3) {
  var OwnElement = getWindow(node3).Element;
  return node3 instanceof OwnElement || node3 instanceof Element;
}
function isHTMLElement3(node3) {
  var OwnElement = getWindow(node3).HTMLElement;
  return node3 instanceof OwnElement || node3 instanceof HTMLElement;
}
function isShadowRoot(node3) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node3).ShadowRoot;
  return node3 instanceof OwnElement || node3 instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref2) {
  var state2 = _ref2.state;
  Object.keys(state2.elements).forEach(function(name) {
    var style = state2.styles[name] || {};
    var attributes = state2.attributes[name] || {};
    var element = state2.elements[name];
    if (!isHTMLElement3(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect2(_ref2) {
  var state2 = _ref2.state;
  var initialStyles = {
    popper: {
      position: state2.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state2.elements.popper.style, initialStyles.popper);
  state2.styles = initialStyles;
  if (state2.elements.arrow) {
    Object.assign(state2.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state2.elements).forEach(function(name) {
      var element = state2.elements[name];
      var attributes = state2.attributes[name] || {};
      var styleProperties = Object.keys(state2.styles.hasOwnProperty(name) ? state2.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement3(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect2,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement3(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref2 = isElement4(element) ? getWindow(element) : window, visualViewport = _ref2.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains5(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next2 = child;
    do {
      if (next2 && parent.isSameNode(next2)) {
        return true;
      }
      next2 = next2.parentNode || next2.host;
    } while (next2);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement4(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode2(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement3(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement3(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode2(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement3(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css4 = getComputedStyle(currentNode);
    if (css4.transform !== "none" || css4.perspective !== "none" || css4.contain === "paint" || ["transform", "perspective"].indexOf(css4.willChange) !== -1 || isFirefox && css4.willChange === "filter" || isFirefox && css4.filter && css4.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state2) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref2) {
  var _state$modifiersData$;
  var state2 = _ref2.state, name = _ref2.name, options = _ref2.options;
  var arrowElement = state2.elements.arrow;
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state2.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state2);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state2.rects.reference[len] + state2.rects.reference[axis] - popperOffsets2[axis] - state2.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state2.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state2.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect3(_ref2) {
  var state2 = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state2.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains5(state2.elements.popper, arrowElement)) {
    return;
  }
  state2.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref2, win) {
  var x = _ref2.x, y = _ref2.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position3 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position3 === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles2 = Object.assign({
    position: position3
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles2, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles2, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state2 = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles2 = {
    placement: getBasePlacement(state2.placement),
    variation: getVariation(state2.placement),
    popper: state2.elements.popper,
    popperRect: state2.rects.popper,
    gpuAcceleration,
    isFixed: state2.options.strategy === "fixed"
  };
  if (state2.modifiersData.popperOffsets != null) {
    state2.styles.popper = Object.assign({}, state2.styles.popper, mapToStyles(Object.assign({}, commonStyles2, {
      offsets: state2.modifiersData.popperOffsets,
      position: state2.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state2.modifiersData.arrow != null) {
    state2.styles.arrow = Object.assign({}, state2.styles.arrow, mapToStyles(Object.assign({}, commonStyles2, {
      offsets: state2.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-placement": state2.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect4(_ref2) {
  var state2 = _ref2.state, instance = _ref2.instance, options = _ref2.options;
  var _options$scroll = options.scroll, scroll2 = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state2.elements.popper);
  var scrollParents = [].concat(state2.scrollParents.reference, state2.scrollParents.popper);
  if (scroll2) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll2) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect4,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash3[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash4 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash4[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node3) {
  var win = getWindow(node3);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent2(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent2(node3) {
  if (["html", "body", "#document"].indexOf(getNodeName(node3)) >= 0) {
    return node3.ownerDocument.body;
  }
  if (isHTMLElement3(node3) && isScrollParent2(node3)) {
    return node3;
  }
  return getScrollParent2(getParentNode2(node3));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list2) {
  var _element$ownerDocumen;
  if (list2 === void 0) {
    list2 = [];
  }
  var scrollParent = getScrollParent2(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent2(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list2.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode2(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement4(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode2(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement3(element) ? getOffsetParent(element) : element;
  if (!isElement4(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement4(clippingParent) && contains5(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref2) {
  var reference2 = _ref2.reference, element = _ref2.element, placement = _ref2.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state2.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state2.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state2.rects.popper;
  var element = state2.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement4(element) ? element : element.contextElement || getDocumentElement(state2.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state2.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state2.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply3 = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply3;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements2 : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements3 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements3.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements3;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
  if (state2.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state2.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements3 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state2, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements3[0];
  for (var i = 0; i < placements3.length; i++) {
    var placement = placements3[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state2, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements3.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state2.placement !== firstFittingPlacement) {
    state2.modifiersData[name]._skip = true;
    state2.placement = firstFittingPlacement;
    state2.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref2) {
  var state2 = _ref2.state, name = _ref2.name;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var preventedOffsets = state2.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state2, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state2, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state2.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref2 = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref2[0], distance3 = _ref2[1];
  skidding = skidding || 0;
  distance3 = (distance3 || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance3,
    y: skidding
  } : {
    x: skidding,
    y: distance3
  };
}
function offset(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements2.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state2.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state2.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state2.modifiersData.popperOffsets != null) {
    state2.modifiersData.popperOffsets.x += x;
    state2.modifiersData.popperOffsets.y += y;
  }
  state2.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref2) {
  var state2 = _ref2.state, name = _ref2.name;
  state2.modifiersData[name] = computeOffsets({
    reference: state2.rects.reference,
    element: state2.rects.popper,
    strategy: "absolute",
    placement: state2.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref2) {
  var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state2, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state2.placement);
  var variation = getVariation(state2.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state2.modifiersData.popperOffsets;
  var referenceRect = state2.rects.reference;
  var popperRect = state2.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state2.rects, {
    placement: state2.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state2.modifiersData.offset ? state2.modifiersData.offset[state2.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state2.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state2.modifiersData["arrow#persistent"] ? state2.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state2.elements.arrow && getOffsetParent(state2.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state2.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node3) {
  if (node3 === getWindow(node3) || !isHTMLElement3(node3)) {
    return getWindowScroll(node3);
  } else {
    return getHTMLElementScroll(node3);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement3(offsetParent);
  var offsetParentIsScaled = isHTMLElement3(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll2 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent2(documentElement)) {
      scroll2 = getNodeScroll(offsetParent);
    }
    if (isHTMLElement3(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll2.scrollLeft - offsets.x,
    y: rect.top + scroll2.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions4 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions4;
    }
    var state2 = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions4),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state2,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state2.options) : setOptionsAction;
        cleanupModifierEffects();
        state2.options = Object.assign({}, defaultOptions4, state2.options, options2);
        state2.scrollParents = {
          reference: isElement4(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state2.options.modifiers)));
        state2.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state2.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state2.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state2.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state2.reset = false;
        state2.placement = state2.options.placement;
        state2.orderedModifiers.forEach(function(modifier) {
          return state2.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state2.orderedModifiers.length; index++) {
          if (state2.reset === true) {
            state2.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state2.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state2 = fn2({
              state: state2,
              options: _options,
              name,
              instance
            }) || state2;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state2);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state3) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state3);
      }
    });
    function runModifierEffects() {
      state2.orderedModifiers.forEach(function(_ref2) {
        var name = _ref2.name, _ref$options = _ref2.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref2.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state: state2,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@chakra-ui/popper/dist/chunk-LUYFNC5G.mjs
var import_react108 = __toESM(require_react(), 1);
function usePopper(props = {}) {
  const {
    enabled = true,
    modifiers,
    placement: placementProp = "bottom",
    strategy = "absolute",
    arrowPadding = 8,
    eventListeners = true,
    offset: offset2,
    gutter = 8,
    flip: flip2 = true,
    boundary = "clippingParents",
    preventOverflow: preventOverflow2 = true,
    matchWidth: matchWidth2,
    direction: direction2 = "ltr"
  } = props;
  const reference2 = (0, import_react108.useRef)(null);
  const popper2 = (0, import_react108.useRef)(null);
  const instance = (0, import_react108.useRef)(null);
  const placement = getPopperPlacement(placementProp, direction2);
  const cleanup = (0, import_react108.useRef)(() => {
  });
  const setupPopper = (0, import_react108.useCallback)(() => {
    var _a8;
    if (!enabled || !reference2.current || !popper2.current)
      return;
    (_a8 = cleanup.current) == null ? void 0 : _a8.call(cleanup);
    instance.current = createPopper3(reference2.current, popper2.current, {
      placement,
      modifiers: [
        innerArrow,
        positionArrow,
        transformOrigin,
        {
          ...matchWidth,
          enabled: !!matchWidth2
        },
        {
          name: "eventListeners",
          ...getEventListenerOptions(eventListeners)
        },
        {
          name: "arrow",
          options: { padding: arrowPadding }
        },
        {
          name: "offset",
          options: {
            offset: offset2 != null ? offset2 : [0, gutter]
          }
        },
        {
          name: "flip",
          enabled: !!flip2,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!preventOverflow2,
          options: { boundary }
        },
        // allow users override internal modifiers
        ...modifiers != null ? modifiers : []
      ],
      strategy
    });
    instance.current.forceUpdate();
    cleanup.current = instance.current.destroy;
  }, [
    placement,
    enabled,
    modifiers,
    matchWidth2,
    eventListeners,
    arrowPadding,
    offset2,
    gutter,
    flip2,
    preventOverflow2,
    boundary,
    strategy
  ]);
  (0, import_react108.useEffect)(() => {
    return () => {
      var _a8;
      if (!reference2.current && !popper2.current) {
        (_a8 = instance.current) == null ? void 0 : _a8.destroy();
        instance.current = null;
      }
    };
  }, []);
  const referenceRef = (0, import_react108.useCallback)(
    (node3) => {
      reference2.current = node3;
      setupPopper();
    },
    [setupPopper]
  );
  const getReferenceProps = (0, import_react108.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs2(referenceRef, ref)
    }),
    [referenceRef]
  );
  const popperRef = (0, import_react108.useCallback)(
    (node3) => {
      popper2.current = node3;
      setupPopper();
    },
    [setupPopper]
  );
  const getPopperProps = (0, import_react108.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs2(popperRef, ref),
      style: {
        ...props2.style,
        position: strategy,
        minWidth: matchWidth2 ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [strategy, popperRef, matchWidth2]
  );
  const getArrowProps = (0, import_react108.useCallback)((props2 = {}, ref = null) => {
    const { size: size2, shadowColor, bg, style, ...rest } = props2;
    return {
      ...rest,
      ref,
      "data-popper-arrow": "",
      style: getArrowStyle2(props2)
    };
  }, []);
  const getArrowInnerProps = (0, import_react108.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var _a8;
      (_a8 = instance.current) == null ? void 0 : _a8.update();
    },
    forceUpdate() {
      var _a8;
      (_a8 = instance.current) == null ? void 0 : _a8.forceUpdate();
    },
    transformOrigin: cssVars.transformOrigin.varRef,
    referenceRef,
    popperRef,
    getPopperProps,
    getArrowProps,
    getArrowInnerProps,
    getReferenceProps
  };
}
function getArrowStyle2(props) {
  const { size: size2, shadowColor, bg, style } = props;
  const computedStyle = { ...style, position: "absolute" };
  if (size2) {
    computedStyle["--popper-arrow-size"] = size2;
  }
  if (shadowColor) {
    computedStyle["--popper-arrow-shadow-color"] = shadowColor;
  }
  if (bg) {
    computedStyle["--popper-arrow-bg"] = bg;
  }
  return computedStyle;
}

// node_modules/@chakra-ui/react-use-disclosure/dist/index.mjs
var import_react109 = __toESM(require_react(), 1);
function useDisclosure2(props = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp
  } = props;
  const handleOpen = useCallbackRef(onOpenProp);
  const handleClose = useCallbackRef(onCloseProp);
  const [isOpenState, setIsOpen] = (0, import_react109.useState)(props.defaultIsOpen || false);
  const isOpen = isOpenProp !== void 0 ? isOpenProp : isOpenState;
  const isControlled = isOpenProp !== void 0;
  const uid = (0, import_react109.useId)();
  const id = idProp != null ? idProp : `disclosure-${uid}`;
  const onClose = (0, import_react109.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    handleClose == null ? void 0 : handleClose();
  }, [isControlled, handleClose]);
  const onOpen = (0, import_react109.useCallback)(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    handleOpen == null ? void 0 : handleOpen();
  }, [isControlled, handleOpen]);
  const onToggle = (0, import_react109.useCallback)(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);
  function getButtonProps(props2 = {}) {
    return {
      ...props2,
      "aria-expanded": isOpen,
      "aria-controls": id,
      onClick(event) {
        var _a8;
        (_a8 = props2.onClick) == null ? void 0 : _a8.call(props2, event);
        onToggle();
      }
    };
  }
  function getDisclosureProps(props2 = {}) {
    return {
      ...props2,
      hidden: !isOpen,
      id
    };
  }
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps,
    getDisclosureProps
  };
}

// node_modules/@chakra-ui/react-use-outside-click/dist/index.mjs
var import_react110 = __toESM(require_react(), 1);
function useOutsideClick2(props) {
  const { ref, handler, enabled = true } = props;
  const savedHandler = useCallbackRef(handler);
  const stateRef = (0, import_react110.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const state2 = stateRef.current;
  (0, import_react110.useEffect)(() => {
    if (!enabled)
      return;
    const onPointerDown = (e) => {
      if (isValidEvent2(e, ref)) {
        state2.isPointerDown = true;
      }
    };
    const onMouseUp = (event) => {
      if (state2.ignoreEmulatedMouseEvents) {
        state2.ignoreEmulatedMouseEvents = false;
        return;
      }
      if (state2.isPointerDown && handler && isValidEvent2(event, ref)) {
        state2.isPointerDown = false;
        savedHandler(event);
      }
    };
    const onTouchEnd = (event) => {
      state2.ignoreEmulatedMouseEvents = true;
      if (handler && state2.isPointerDown && isValidEvent2(event, ref)) {
        state2.isPointerDown = false;
        savedHandler(event);
      }
    };
    const doc = getOwnerDocument3(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return () => {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state2, enabled]);
}
function isValidEvent2(event, ref) {
  var _a8;
  const target = event.target;
  if (target) {
    const doc = getOwnerDocument3(target);
    if (!doc.contains(target))
      return false;
  }
  return !((_a8 = ref.current) == null ? void 0 : _a8.contains(target));
}
function getOwnerDocument3(node3) {
  var _a8;
  return (_a8 = node3 == null ? void 0 : node3.ownerDocument) != null ? _a8 : document;
}

// node_modules/@chakra-ui/react-use-animation-state/dist/index.mjs
var import_react111 = __toESM(require_react(), 1);
function useAnimationState2(props) {
  const { isOpen, ref } = props;
  const [mounted, setMounted] = (0, import_react111.useState)(isOpen);
  const [once2, setOnce] = (0, import_react111.useState)(false);
  (0, import_react111.useEffect)(() => {
    if (!once2) {
      setMounted(isOpen);
      setOnce(true);
    }
  }, [isOpen, once2, mounted]);
  useEventListener(
    () => ref.current,
    "animationend",
    () => {
      setMounted(isOpen);
    }
  );
  const hidden = isOpen ? false : !mounted;
  return {
    present: !hidden,
    onComplete() {
      var _a8;
      const win = getOwnerWindow2(ref.current);
      const evt = new win.CustomEvent("animationend", { bubbles: true });
      (_a8 = ref.current) == null ? void 0 : _a8.dispatchEvent(evt);
    }
  };
}

// node_modules/@chakra-ui/lazy-utils/dist/index.mjs
function lazyDisclosure(options) {
  const { wasSelected, enabled, isSelected, mode: mode2 = "unmount" } = options;
  if (!enabled)
    return true;
  if (isSelected)
    return true;
  if (mode2 === "keepMounted" && wasSelected)
    return true;
  return false;
}

// node_modules/@chakra-ui/menu/dist/chunk-SANI5SUM.mjs
var import_react112 = __toESM(require_react(), 1);
var [
  MenuDescendantsProvider,
  useMenuDescendantsContext,
  useMenuDescendants,
  useMenuDescendant
] = createDescendantContext();
var [MenuProvider, useMenuContext] = createContext2({
  strict: false,
  name: "MenuContext"
});
function useIds2(idProp, ...prefixes) {
  const reactId = (0, import_react112.useId)();
  const id = idProp || reactId;
  return (0, import_react112.useMemo)(() => {
    return prefixes.map((prefix4) => `${prefix4}-${id}`);
  }, [id, prefixes]);
}
function getOwnerDocument4(node3) {
  var _a8;
  return (_a8 = node3 == null ? void 0 : node3.ownerDocument) != null ? _a8 : document;
}
function isActiveElement3(element) {
  const doc = getOwnerDocument4(element);
  return doc.activeElement === element;
}
function useMenu(props = {}) {
  const {
    id,
    closeOnSelect = true,
    closeOnBlur = true,
    initialFocusRef,
    autoSelect = true,
    isLazy,
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    placement = "bottom-start",
    lazyBehavior = "unmount",
    direction: direction2,
    computePositionOnMount = false,
    ...popperProps
  } = props;
  const menuRef = (0, import_react112.useRef)(null);
  const buttonRef = (0, import_react112.useRef)(null);
  const descendants = useMenuDescendants();
  const focusMenu = (0, import_react112.useCallback)(() => {
    requestAnimationFrame(() => {
      var _a8;
      (_a8 = menuRef.current) == null ? void 0 : _a8.focus({ preventScroll: false });
    });
  }, []);
  const focusFirstItem = (0, import_react112.useCallback)(() => {
    const id2 = setTimeout(() => {
      var _a8;
      if (initialFocusRef) {
        (_a8 = initialFocusRef.current) == null ? void 0 : _a8.focus();
      } else {
        const first = descendants.firstEnabled();
        if (first)
          setFocusedIndex(first.index);
      }
    });
    timeoutIds.current.add(id2);
  }, [descendants, initialFocusRef]);
  const focusLastItem = (0, import_react112.useCallback)(() => {
    const id2 = setTimeout(() => {
      const last = descendants.lastEnabled();
      if (last)
        setFocusedIndex(last.index);
    });
    timeoutIds.current.add(id2);
  }, [descendants]);
  const onOpenInternal = (0, import_react112.useCallback)(() => {
    onOpenProp == null ? void 0 : onOpenProp();
    if (autoSelect) {
      focusFirstItem();
    } else {
      focusMenu();
    }
  }, [autoSelect, focusFirstItem, focusMenu, onOpenProp]);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure2({
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenInternal
  });
  useOutsideClick2({
    enabled: isOpen && closeOnBlur,
    ref: menuRef,
    handler: (event) => {
      var _a8;
      if (!((_a8 = buttonRef.current) == null ? void 0 : _a8.contains(event.target))) {
        onClose();
      }
    }
  });
  const popper2 = usePopper({
    ...popperProps,
    enabled: isOpen || computePositionOnMount,
    placement,
    direction: direction2
  });
  const [focusedIndex, setFocusedIndex] = (0, import_react112.useState)(-1);
  useUpdateEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);
  useFocusOnHide2(menuRef, {
    focusRef: buttonRef,
    visible: isOpen,
    shouldFocus: true
  });
  const animationState = useAnimationState2({ isOpen, ref: menuRef });
  const [buttonId, menuId] = useIds2(id, `menu-button`, `menu-list`);
  const openAndFocusMenu = (0, import_react112.useCallback)(() => {
    onOpen();
    focusMenu();
  }, [onOpen, focusMenu]);
  const timeoutIds = (0, import_react112.useRef)(/* @__PURE__ */ new Set([]));
  (0, import_react112.useEffect)(() => {
    const ids = timeoutIds.current;
    return () => {
      ids.forEach((id2) => clearTimeout(id2));
      ids.clear();
    };
  }, []);
  const openAndFocusFirstItem = (0, import_react112.useCallback)(() => {
    onOpen();
    focusFirstItem();
  }, [focusFirstItem, onOpen]);
  const openAndFocusLastItem = (0, import_react112.useCallback)(() => {
    onOpen();
    focusLastItem();
  }, [onOpen, focusLastItem]);
  const refocus = (0, import_react112.useCallback)(() => {
    var _a8, _b5;
    const doc = getOwnerDocument4(menuRef.current);
    const hasFocusWithin3 = (_a8 = menuRef.current) == null ? void 0 : _a8.contains(doc.activeElement);
    const shouldRefocus = isOpen && !hasFocusWithin3;
    if (!shouldRefocus)
      return;
    const node3 = (_b5 = descendants.item(focusedIndex)) == null ? void 0 : _b5.node;
    node3 == null ? void 0 : node3.focus({ preventScroll: true });
  }, [isOpen, focusedIndex, descendants]);
  const rafId = (0, import_react112.useRef)(null);
  return {
    openAndFocusMenu,
    openAndFocusFirstItem,
    openAndFocusLastItem,
    onTransitionEnd: refocus,
    unstable__animationState: animationState,
    descendants,
    popper: popper2,
    buttonId,
    menuId,
    forceUpdate: popper2.forceUpdate,
    orientation: "vertical",
    isOpen,
    onToggle,
    onOpen,
    onClose,
    menuRef,
    buttonRef,
    focusedIndex,
    closeOnSelect,
    closeOnBlur,
    autoSelect,
    setFocusedIndex,
    isLazy,
    lazyBehavior,
    initialFocusRef,
    rafId
  };
}
function useMenuButton(props = {}, externalRef = null) {
  const menu = useMenuContext();
  const { onToggle, popper: popper2, openAndFocusFirstItem, openAndFocusLastItem } = menu;
  const onKeyDown = (0, import_react112.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        Enter: openAndFocusFirstItem,
        ArrowDown: openAndFocusFirstItem,
        ArrowUp: openAndFocusLastItem
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
      }
    },
    [openAndFocusFirstItem, openAndFocusLastItem]
  );
  return {
    ...props,
    ref: mergeRefs2(menu.buttonRef, externalRef, popper2.referenceRef),
    id: menu.buttonId,
    "data-active": dataAttr(menu.isOpen),
    "aria-expanded": menu.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": menu.menuId,
    onClick: callAllHandlers(props.onClick, onToggle),
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function isTargetMenuItem(target) {
  var _a8;
  return isHTMLElement4(target) && !!((_a8 = target == null ? void 0 : target.getAttribute("role")) == null ? void 0 : _a8.startsWith("menuitem"));
}
function useMenuList(props = {}, ref = null) {
  const menu = useMenuContext();
  if (!menu) {
    throw new Error(
      `useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>`
    );
  }
  const {
    focusedIndex,
    setFocusedIndex,
    menuRef,
    isOpen,
    onClose,
    menuId,
    isLazy,
    lazyBehavior,
    unstable__animationState: animated
  } = menu;
  const descendants = useMenuDescendantsContext();
  const createTypeaheadHandler = useShortcut2({
    preventDefault: (event) => event.key !== " " && isTargetMenuItem(event.target)
  });
  const onKeyDown = (0, import_react112.useCallback)(
    (event) => {
      if (!event.currentTarget.contains(event.target))
        return;
      const eventKey = event.key;
      const keyMap = {
        Tab: (event2) => event2.preventDefault(),
        Escape: onClose,
        ArrowDown: () => {
          const next2 = descendants.nextEnabled(focusedIndex);
          if (next2)
            setFocusedIndex(next2.index);
        },
        ArrowUp: () => {
          const prev2 = descendants.prevEnabled(focusedIndex);
          if (prev2)
            setFocusedIndex(prev2.index);
        }
      };
      const fn2 = keyMap[eventKey];
      if (fn2) {
        event.preventDefault();
        fn2(event);
        return;
      }
      const onTypeahead = createTypeaheadHandler((character2) => {
        const nextItem = getNextItemFromSearch2(
          descendants.values(),
          character2,
          (item) => {
            var _a8, _b5;
            return (_b5 = (_a8 = item == null ? void 0 : item.node) == null ? void 0 : _a8.textContent) != null ? _b5 : "";
          },
          descendants.item(focusedIndex)
        );
        if (nextItem) {
          const index = descendants.indexOf(nextItem.node);
          setFocusedIndex(index);
        }
      });
      if (isTargetMenuItem(event.target)) {
        onTypeahead(event);
      }
    },
    [
      descendants,
      focusedIndex,
      createTypeaheadHandler,
      onClose,
      setFocusedIndex
    ]
  );
  const hasBeenOpened = (0, import_react112.useRef)(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  return {
    ...props,
    ref: mergeRefs2(menuRef, ref),
    children: shouldRenderChildren ? props.children : null,
    tabIndex: -1,
    role: "menu",
    id: menuId,
    style: {
      ...props.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function useMenuPositioner(props = {}) {
  const { popper: popper2, isOpen } = useMenuContext();
  return popper2.getPopperProps({
    ...props,
    style: {
      visibility: isOpen ? "visible" : "hidden",
      ...props.style
    }
  });
}
function useMenuItem(props = {}, externalRef = null) {
  const {
    onMouseEnter: onMouseEnterProp,
    onMouseMove: onMouseMoveProp,
    onMouseLeave: onMouseLeaveProp,
    onClick: onClickProp,
    onFocus: onFocusProp,
    isDisabled: isDisabled3,
    isFocusable: isFocusable3,
    closeOnSelect,
    type: typeProp,
    ...htmlProps
  } = props;
  const menu = useMenuContext();
  const {
    setFocusedIndex,
    focusedIndex,
    closeOnSelect: menuCloseOnSelect,
    onClose,
    menuRef,
    isOpen,
    menuId,
    rafId
  } = menu;
  const ref = (0, import_react112.useRef)(null);
  const id = `${menuId}-menuitem-${(0, import_react112.useId)()}`;
  const { index, register } = useMenuDescendant({
    disabled: isDisabled3 && !isFocusable3
  });
  const onMouseEnter = (0, import_react112.useCallback)(
    (event) => {
      onMouseEnterProp == null ? void 0 : onMouseEnterProp(event);
      if (isDisabled3)
        return;
      setFocusedIndex(index);
    },
    [setFocusedIndex, index, isDisabled3, onMouseEnterProp]
  );
  const onMouseMove = (0, import_react112.useCallback)(
    (event) => {
      onMouseMoveProp == null ? void 0 : onMouseMoveProp(event);
      if (ref.current && !isActiveElement3(ref.current)) {
        onMouseEnter(event);
      }
    },
    [onMouseEnter, onMouseMoveProp]
  );
  const onMouseLeave = (0, import_react112.useCallback)(
    (event) => {
      onMouseLeaveProp == null ? void 0 : onMouseLeaveProp(event);
      if (isDisabled3)
        return;
      setFocusedIndex(-1);
    },
    [setFocusedIndex, isDisabled3, onMouseLeaveProp]
  );
  const onClick = (0, import_react112.useCallback)(
    (event) => {
      onClickProp == null ? void 0 : onClickProp(event);
      if (!isTargetMenuItem(event.currentTarget))
        return;
      if (closeOnSelect != null ? closeOnSelect : menuCloseOnSelect) {
        onClose();
      }
    },
    [onClose, onClickProp, menuCloseOnSelect, closeOnSelect]
  );
  const onFocus3 = (0, import_react112.useCallback)(
    (event) => {
      onFocusProp == null ? void 0 : onFocusProp(event);
      setFocusedIndex(index);
    },
    [setFocusedIndex, onFocusProp, index]
  );
  const isFocused = index === focusedIndex;
  const trulyDisabled = isDisabled3 && !isFocusable3;
  useUpdateEffect(() => {
    if (!isOpen)
      return;
    if (isFocused && !trulyDisabled && ref.current) {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => {
        var _a8;
        (_a8 = ref.current) == null ? void 0 : _a8.focus({ preventScroll: true });
        rafId.current = null;
      });
    } else if (menuRef.current && !isActiveElement3(menuRef.current)) {
      menuRef.current.focus({ preventScroll: true });
    }
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isFocused, trulyDisabled, menuRef, isOpen]);
  const clickableProps = useClickable({
    onClick,
    onFocus: onFocus3,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    ref: mergeRefs2(register, ref, externalRef),
    isDisabled: isDisabled3,
    isFocusable: isFocusable3
  });
  return {
    ...htmlProps,
    ...clickableProps,
    type: typeProp != null ? typeProp : clickableProps.type,
    id,
    role: "menuitem",
    tabIndex: isFocused ? 0 : -1
  };
}
function useMenuOption(props = {}, ref = null) {
  const { type = "radio", isChecked, ...rest } = props;
  const ownProps = useMenuItem(rest, ref);
  return {
    ...ownProps,
    role: `menuitem${type}`,
    "aria-checked": isChecked
  };
}
function useMenuOptionGroup(props = {}) {
  const {
    children,
    type = "radio",
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
    ...htmlProps
  } = props;
  const isRadio = type === "radio";
  const fallback = isRadio ? "" : [];
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue != null ? defaultValue : fallback,
    value: valueProp,
    onChange: onChangeProp
  });
  const onChange = (0, import_react112.useCallback)(
    (selectedValue) => {
      if (type === "radio" && typeof value === "string") {
        setValue(selectedValue);
      }
      if (type === "checkbox" && Array.isArray(value)) {
        const nextValue = value.includes(selectedValue) ? value.filter((item) => item !== selectedValue) : value.concat(selectedValue);
        setValue(nextValue);
      }
    },
    [value, setValue, type]
  );
  const validChildren = getValidChildren2(children);
  const clones = validChildren.map((child) => {
    if (child.type.id !== "MenuItemOption")
      return child;
    const onClick = (event) => {
      var _a8, _b5;
      onChange(child.props.value);
      (_b5 = (_a8 = child.props).onClick) == null ? void 0 : _b5.call(_a8, event);
    };
    const isChecked = type === "radio" ? child.props.value === value : value.includes(child.props.value);
    return (0, import_react112.cloneElement)(child, {
      type,
      onClick,
      isChecked
    });
  });
  return {
    ...htmlProps,
    children: clones
  };
}
function useMenuState() {
  const { isOpen, onClose } = useMenuContext();
  return { isOpen, onClose };
}
function isHTMLElement4(el) {
  var _a8;
  if (!isElement5(el))
    return false;
  const win = (_a8 = el.ownerDocument.defaultView) != null ? _a8 : window;
  return el instanceof win.HTMLElement;
}
function isElement5(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}

// node_modules/@chakra-ui/menu/dist/chunk-UZJ3TPNQ.mjs
var import_react113 = __toESM(require_react(), 1);
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
var [MenuStylesProvider, useMenuStyles] = createContext2({
  name: `MenuStylesContext`,
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
});
var Menu = (props) => {
  const { children } = props;
  const styles2 = useMultiStyleConfig("Menu", props);
  const ownProps = omitThemingProps(props);
  const { direction: direction2 } = useTheme2();
  const { descendants, ...ctx } = useMenu({ ...ownProps, direction: direction2 });
  const context = (0, import_react113.useMemo)(() => ctx, [ctx]);
  const { isOpen, onClose, forceUpdate } = context;
  return (0, import_jsx_runtime98.jsx)(MenuDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime98.jsx)(MenuProvider, { value: context, children: (0, import_jsx_runtime98.jsx)(MenuStylesProvider, { value: styles2, children: runIfFn(children, { isOpen, onClose, forceUpdate }) }) }) });
};
Menu.displayName = "Menu";

// node_modules/@chakra-ui/menu/dist/chunk-4CNGLKYX.mjs
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var MenuCommand = forwardRef3(
  (props, ref) => {
    const styles2 = useMenuStyles();
    return (0, import_jsx_runtime99.jsx)(
      chakra.span,
      {
        ref,
        ...props,
        __css: styles2.command,
        className: "chakra-menu__command"
      }
    );
  }
);
MenuCommand.displayName = "MenuCommand";

// node_modules/@chakra-ui/menu/dist/chunk-M565QO7N.mjs
var import_react114 = __toESM(require_react(), 1);
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var StyledMenuItem = forwardRef3(
  (props, ref) => {
    const { type, ...rest } = props;
    const styles2 = useMenuStyles();
    const btnType = rest.as || type ? type != null ? type : void 0 : "button";
    const buttonStyles = (0, import_react114.useMemo)(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...styles2.item
      }),
      [styles2.item]
    );
    return (0, import_jsx_runtime100.jsx)(chakra.button, { ref, type: btnType, ...rest, __css: buttonStyles });
  }
);

// node_modules/@chakra-ui/menu/dist/chunk-HB6KBUMZ.mjs
var import_react115 = __toESM(require_react(), 1);
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);
var MenuIcon = (props) => {
  const { className, children, ...rest } = props;
  const styles2 = useMenuStyles();
  const child = import_react115.Children.only(children);
  const clone = (0, import_react115.isValidElement)(child) ? (0, import_react115.cloneElement)(child, {
    focusable: "false",
    "aria-hidden": true,
    className: cx("chakra-menu__icon", child.props.className)
  }) : null;
  const _className = cx("chakra-menu__icon-wrapper", className);
  return (0, import_jsx_runtime101.jsx)(chakra.span, { className: _className, ...rest, __css: styles2.icon, children: clone });
};
MenuIcon.displayName = "MenuIcon";

// node_modules/@chakra-ui/menu/dist/chunk-5TWLKMYI.mjs
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);
var MenuItem = forwardRef3((props, ref) => {
  const {
    icon,
    iconSpacing: iconSpacing2 = "0.75rem",
    command,
    commandSpacing = "0.75rem",
    children,
    ...rest
  } = props;
  const menuitemProps = useMenuItem(rest, ref);
  const shouldWrap = icon || command;
  const _children = shouldWrap ? (0, import_jsx_runtime102.jsx)("span", { style: { pointerEvents: "none", flex: 1 }, children }) : children;
  return (0, import_jsx_runtime102.jsxs)(
    StyledMenuItem,
    {
      ...menuitemProps,
      className: cx("chakra-menu__menuitem", menuitemProps.className),
      children: [
        icon && (0, import_jsx_runtime102.jsx)(MenuIcon, { fontSize: "0.8em", marginEnd: iconSpacing2, children: icon }),
        _children,
        command && (0, import_jsx_runtime102.jsx)(MenuCommand, { marginStart: commandSpacing, children: command })
      ]
    }
  );
});
MenuItem.displayName = "MenuItem";

// node_modules/@chakra-ui/menu/dist/chunk-6MF6NSK4.mjs
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);
var motionVariants = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
};
var MenuTransition = chakra(motion.div);
var MenuList = forwardRef3(function MenuList2(props, ref) {
  var _a8, _b5;
  const { rootProps, motionProps, ...rest } = props;
  const {
    isOpen,
    onTransitionEnd,
    unstable__animationState: animated
  } = useMenuContext();
  const listProps = useMenuList(rest, ref);
  const positionerProps = useMenuPositioner(rootProps);
  const styles2 = useMenuStyles();
  return (0, import_jsx_runtime103.jsx)(
    chakra.div,
    {
      ...positionerProps,
      __css: { zIndex: (_b5 = props.zIndex) != null ? _b5 : (_a8 = styles2.list) == null ? void 0 : _a8.zIndex },
      children: (0, import_jsx_runtime103.jsx)(
        MenuTransition,
        {
          variants: motionVariants,
          initial: false,
          animate: isOpen ? "enter" : "exit",
          __css: { outline: 0, ...styles2.list },
          ...motionProps,
          className: cx("chakra-menu__menu-list", listProps.className),
          ...listProps,
          onUpdate: onTransitionEnd,
          onAnimationComplete: callAll(
            animated.onComplete,
            listProps.onAnimationComplete
          )
        }
      )
    }
  );
});
MenuList.displayName = "MenuList";

// node_modules/@chakra-ui/menu/dist/chunk-PTXXWAJU.mjs
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
var MenuGroup = forwardRef3((props, ref) => {
  const { title, children, className, ...rest } = props;
  const _className = cx("chakra-menu__group__title", className);
  const styles2 = useMenuStyles();
  return (0, import_jsx_runtime104.jsxs)("div", { ref, className: "chakra-menu__group", role: "group", children: [
    title && (0, import_jsx_runtime104.jsx)(chakra.p, { className: _className, ...rest, __css: styles2.groupTitle, children: title }),
    children
  ] });
});
MenuGroup.displayName = "MenuGroup";

// node_modules/@chakra-ui/menu/dist/chunk-IOKLOFVX.mjs
var import_jsx_runtime105 = __toESM(require_jsx_runtime(), 1);
var MenuOptionGroup = (props) => {
  const { className, title, ...rest } = props;
  const ownProps = useMenuOptionGroup(rest);
  return (0, import_jsx_runtime105.jsx)(
    MenuGroup,
    {
      title,
      className: cx("chakra-menu__option-group", className),
      ...ownProps
    }
  );
};
MenuOptionGroup.displayName = "MenuOptionGroup";

// node_modules/@chakra-ui/menu/dist/chunk-Z3VR2BFQ.mjs
var import_jsx_runtime106 = __toESM(require_jsx_runtime(), 1);
var StyledMenuButton = forwardRef3((props, ref) => {
  const styles2 = useMenuStyles();
  return (0, import_jsx_runtime106.jsx)(
    chakra.button,
    {
      ref,
      ...props,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...styles2.button
      }
    }
  );
});
var MenuButton = forwardRef3(
  (props, ref) => {
    const { children, as: As, ...rest } = props;
    const buttonProps = useMenuButton(rest, ref);
    const Element2 = As || StyledMenuButton;
    return (0, import_jsx_runtime106.jsx)(
      Element2,
      {
        ...buttonProps,
        className: cx("chakra-menu__menu-button", props.className),
        children: (0, import_jsx_runtime106.jsx)(
          chakra.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: props.children
          }
        )
      }
    );
  }
);
MenuButton.displayName = "MenuButton";

// node_modules/@chakra-ui/menu/dist/chunk-H43S3DLB.mjs
var import_jsx_runtime107 = __toESM(require_jsx_runtime(), 1);
var MenuDivider = (props) => {
  const { className, ...rest } = props;
  const styles2 = useMenuStyles();
  return (0, import_jsx_runtime107.jsx)(
    chakra.hr,
    {
      "aria-orientation": "horizontal",
      className: cx("chakra-menu__divider", className),
      ...rest,
      __css: styles2.divider
    }
  );
};
MenuDivider.displayName = "MenuDivider";

// node_modules/@chakra-ui/menu/dist/chunk-B3RAGXFV.mjs
var import_jsx_runtime108 = __toESM(require_jsx_runtime(), 1);
var CheckIcon3 = (props) => (0, import_jsx_runtime108.jsx)("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...props, children: (0, import_jsx_runtime108.jsx)(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) });
var MenuItemOption = forwardRef3(
  (props, ref) => {
    const { icon, iconSpacing: iconSpacing2 = "0.75rem", ...rest } = props;
    const optionProps = useMenuOption(rest, ref);
    return (0, import_jsx_runtime108.jsxs)(
      StyledMenuItem,
      {
        ...optionProps,
        className: cx("chakra-menu__menuitem-option", rest.className),
        children: [
          icon !== null && (0, import_jsx_runtime108.jsx)(
            MenuIcon,
            {
              fontSize: "0.8em",
              marginEnd: iconSpacing2,
              opacity: props.isChecked ? 1 : 0,
              children: icon || (0, import_jsx_runtime108.jsx)(CheckIcon3, {})
            }
          ),
          (0, import_jsx_runtime108.jsx)("span", { style: { flex: 1 }, children: optionProps.children })
        ]
      }
    );
  }
);
MenuItemOption.id = "MenuItemOption";
MenuItemOption.displayName = "MenuItemOption";

// node_modules/@chakra-ui/modal/dist/chunk-7NUJBCEL.mjs
var import_react116 = __toESM(require_react(), 1);
var import_jsx_runtime109 = __toESM(require_jsx_runtime(), 1);
var transitions = {
  slideInBottom: {
    ...slideFadeConfig,
    custom: { offsetY: 16, reverse: true }
  },
  slideInRight: {
    ...slideFadeConfig,
    custom: { offsetX: 16, reverse: true }
  },
  slideInTop: {
    ...slideFadeConfig,
    custom: { offsetY: -16, reverse: true }
  },
  slideInLeft: {
    ...slideFadeConfig,
    custom: { offsetX: -16, reverse: true }
  },
  scale: {
    ...scaleFadeConfig,
    custom: { initialScale: 0.95, reverse: true }
  },
  none: {}
};
var MotionSection = chakra(motion.section);
var getMotionProps = (preset) => {
  return transitions[preset || "none"];
};
var ModalTransition = (0, import_react116.forwardRef)(
  (props, ref) => {
    const { preset, motionProps = getMotionProps(preset), ...rest } = props;
    return (0, import_jsx_runtime109.jsx)(MotionSection, { ref, ...motionProps, ...rest });
  }
);
ModalTransition.displayName = "ModalTransition";

// node_modules/@chakra-ui/modal/dist/chunk-5WQ4PXEV.mjs
var __defProp3 = Object.defineProperty;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField3 = (obj, key, value) => {
  __defNormalProp3(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/@chakra-ui/modal/dist/chunk-CYRBRIA2.mjs
var import_react117 = __toESM(require_react(), 1);
var ModalManager = class {
  constructor() {
    __publicField3(this, "modals");
    this.modals = /* @__PURE__ */ new Map();
  }
  add(modal) {
    this.modals.set(modal, this.modals.size + 1);
    return this.modals.size;
  }
  remove(modal) {
    this.modals.delete(modal);
  }
  isTopModal(modal) {
    if (!modal)
      return false;
    return this.modals.get(modal) === this.modals.size;
  }
};
var modalManager = new ModalManager();
function useModalManager(ref, isOpen) {
  const [index, setIndex] = (0, import_react117.useState)(0);
  (0, import_react117.useEffect)(() => {
    const node3 = ref.current;
    if (!node3)
      return;
    if (isOpen) {
      const index2 = modalManager.add(node3);
      setIndex(index2);
    }
    return () => {
      modalManager.remove(node3);
      setIndex(0);
    };
  }, [isOpen, ref]);
  return index;
}

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node3) {
  return node3 && (node3.host || unwrapHost(node3.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node3) {
      if (elementsToKeep.has(node3)) {
        deep(node3);
      } else {
        try {
          var attr = node3.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node3) || 0) + 1;
          var markerValue = (markerCounter.get(node3) || 0) + 1;
          counterMap.set(node3, counterValue);
          markerCounter.set(node3, markerValue);
          hiddenNodes.push(node3);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node3, true);
          }
          if (markerValue === 1) {
            node3.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node3.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node3, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node3) {
      var counterValue = counterMap.get(node3) - 1;
      var markerValue = markerCounter.get(node3) - 1;
      counterMap.set(node3, counterValue);
      markerCounter.set(node3, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node3)) {
          node3.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node3);
      }
      if (!markerValue) {
        node3.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@chakra-ui/modal/dist/chunk-TJ2Q5ITW.mjs
var import_react118 = __toESM(require_react(), 1);
function useModal(props) {
  const {
    isOpen,
    onClose,
    id,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    useInert = true,
    onOverlayClick: onOverlayClickProp,
    onEsc
  } = props;
  const dialogRef = (0, import_react118.useRef)(null);
  const overlayRef = (0, import_react118.useRef)(null);
  const [dialogId, headerId, bodyId] = useIds3(
    id,
    `chakra-modal`,
    `chakra-modal--header`,
    `chakra-modal--body`
  );
  useAriaHidden(dialogRef, isOpen && useInert);
  const index = useModalManager(dialogRef, isOpen);
  const mouseDownTarget = (0, import_react118.useRef)(null);
  const onMouseDown = (0, import_react118.useCallback)((event) => {
    mouseDownTarget.current = event.target;
  }, []);
  const onKeyDown = (0, import_react118.useCallback)(
    (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (closeOnEsc) {
          onClose == null ? void 0 : onClose();
        }
        onEsc == null ? void 0 : onEsc();
      }
    },
    [closeOnEsc, onClose, onEsc]
  );
  const [headerMounted, setHeaderMounted] = (0, import_react118.useState)(false);
  const [bodyMounted, setBodyMounted] = (0, import_react118.useState)(false);
  const getDialogProps = (0, import_react118.useCallback)(
    (props2 = {}, ref = null) => ({
      role: "dialog",
      ...props2,
      ref: mergeRefs2(ref, dialogRef),
      id: dialogId,
      tabIndex: -1,
      "aria-modal": true,
      "aria-labelledby": headerMounted ? headerId : void 0,
      "aria-describedby": bodyMounted ? bodyId : void 0,
      onClick: callAllHandlers(
        props2.onClick,
        (event) => event.stopPropagation()
      )
    }),
    [bodyId, bodyMounted, dialogId, headerId, headerMounted]
  );
  const onOverlayClick = (0, import_react118.useCallback)(
    (event) => {
      event.stopPropagation();
      if (mouseDownTarget.current !== event.target)
        return;
      if (!modalManager.isTopModal(dialogRef.current))
        return;
      if (closeOnOverlayClick) {
        onClose == null ? void 0 : onClose();
      }
      onOverlayClickProp == null ? void 0 : onOverlayClickProp();
    },
    [onClose, closeOnOverlayClick, onOverlayClickProp]
  );
  const getDialogContainerProps = (0, import_react118.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref: mergeRefs2(ref, overlayRef),
      onClick: callAllHandlers(props2.onClick, onOverlayClick),
      onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
      onMouseDown: callAllHandlers(props2.onMouseDown, onMouseDown)
    }),
    [onKeyDown, onMouseDown, onOverlayClick]
  );
  return {
    isOpen,
    onClose,
    headerId,
    bodyId,
    setBodyMounted,
    setHeaderMounted,
    dialogRef,
    overlayRef,
    getDialogProps,
    getDialogContainerProps,
    index
  };
}
function useAriaHidden(ref, shouldHide) {
  const currentElement = ref.current;
  (0, import_react118.useEffect)(() => {
    if (!ref.current || !shouldHide)
      return void 0;
    return hideOthers(ref.current);
  }, [shouldHide, ref, currentElement]);
}
function useIds3(idProp, ...prefixes) {
  const reactId = (0, import_react118.useId)();
  const id = idProp || reactId;
  return (0, import_react118.useMemo)(() => {
    return prefixes.map((prefix4) => `${prefix4}-${id}`);
  }, [id, prefixes]);
}

// node_modules/@chakra-ui/modal/dist/chunk-MSA2NPQT.mjs
var import_jsx_runtime110 = __toESM(require_jsx_runtime(), 1);
var [ModalStylesProvider, useModalStyles] = createContext2({
  name: `ModalStylesContext`,
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
});
var [ModalContextProvider, useModalContext] = createContext2({
  strict: true,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
});
var Modal = (props) => {
  const modalProps = {
    scrollBehavior: "outside",
    autoFocus: true,
    trapFocus: true,
    returnFocusOnClose: true,
    blockScrollOnMount: true,
    allowPinchZoom: false,
    motionPreset: "scale",
    lockFocusAcrossFrames: true,
    ...props
  };
  const {
    portalProps,
    children,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames,
    onCloseComplete
  } = modalProps;
  const styles2 = useMultiStyleConfig("Modal", modalProps);
  const modal = useModal(modalProps);
  const context = {
    ...modal,
    autoFocus,
    trapFocus,
    initialFocusRef,
    finalFocusRef,
    returnFocusOnClose,
    blockScrollOnMount,
    allowPinchZoom,
    preserveScrollBarGap,
    motionPreset,
    lockFocusAcrossFrames
  };
  return (0, import_jsx_runtime110.jsx)(ModalContextProvider, { value: context, children: (0, import_jsx_runtime110.jsx)(ModalStylesProvider, { value: styles2, children: (0, import_jsx_runtime110.jsx)(AnimatePresence, { onExitComplete: onCloseComplete, children: context.isOpen && (0, import_jsx_runtime110.jsx)(Portal, { ...portalProps, children }) }) }) });
};
Modal.displayName = "Modal";

// node_modules/@chakra-ui/modal/dist/chunk-NABYTFTG.mjs
var import_react119 = __toESM(require_react(), 1);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React22 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React18 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React18.forwardRef(function(props, parentRef) {
  var ref = React18.useRef(null);
  var _a8 = React18.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a8[0], setCallbacks = _a8[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar2 = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b5 = props.as, Container3 = _b5 === void 0 ? "div" : _b5, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar2;
  var containerRef = useMergeRefs2([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React18.createElement(
    React18.Fragment,
    null,
    enabled && React18.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React18.cloneElement(React18.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React18.createElement(Container3, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React21 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React20 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React19 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css4) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css4;
  } else {
    tag.appendChild(document.createTextNode(css4));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter2 = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter2 == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter2++;
    },
    remove: function() {
      counter2--;
      if (!counter2 && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles2, isDynamic) {
    React19.useEffect(function() {
      sheet.add(styles2);
      return function() {
        sheet.remove();
      };
    }, [styles2 && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a8) {
    var styles2 = _a8.styles, dynamic = _a8.dynamic;
    useStyle(styles2, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse5 = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left2 = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top2 = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right2 = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse5(left2), parse5(top2), parse5(right2)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a8, allowRelative, gapMode, important) {
  var left2 = _a8.left, top2 = _a8.top, right2 = _a8.right, gap = _a8.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left2, "px;\n    padding-top: ").concat(top2, "px;\n    padding-right: ").concat(right2, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter2 = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter2) ? counter2 : 0;
};
var useLockAttribute = function() {
  React20.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a8) {
  var noRelative = _a8.noRelative, noImportant = _a8.noImportant, _b5 = _a8.gapMode, gapMode = _b5 === void 0 ? "margin" : _b5;
  useLockAttribute();
  var gap = React20.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React20.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node3) {
  return node3.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node3, overflow) {
  var styles2 = window.getComputedStyle(node3);
  return (
    // not-not-scrollable
    styles2[overflow] !== "hidden" && // contains scroll inside self
    !(styles2.overflowY === styles2.overflowX && !alwaysContainsScroll(node3) && styles2[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node3) {
  return elementCanBeScrolled(node3, "overflowY");
};
var elementCouldBeHScrolled = function(node3) {
  return elementCanBeScrolled(node3, "overflowX");
};
var locationCouldBeScrolled = function(axis, node3) {
  var ownerDocument = node3.ownerDocument;
  var current = node3;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a8 = getScrollVariables(axis, current), s = _a8[1], d = _a8[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a8) {
  var scrollTop = _a8.scrollTop, scrollHeight = _a8.scrollHeight, clientHeight = _a8.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a8) {
  var scrollLeft = _a8.scrollLeft, scrollWidth = _a8.scrollWidth, clientWidth = _a8.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node3) {
  return axis === "v" ? elementCouldBeVScrolled(node3) : elementCouldBeHScrolled(node3);
};
var getScrollVariables = function(axis, node3) {
  return axis === "v" ? getVScrollVariables(node3) : getHScrollVariables(node3);
};
var getDirectionFactor = function(axis, direction2) {
  return axis === "h" && direction2 === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a8 = getScrollVariables(axis, target), position3 = _a8[0], scroll_1 = _a8[1], capacity = _a8[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position3;
    if (position3 || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position3;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef3 = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React21.useRef([]);
  var touchStartRef = React21.useRef([0, 0]);
  var activeAxis = React21.useRef();
  var id = React21.useState(idCounter++)[0];
  var Style2 = React21.useState(styleSingleton)[0];
  var lastProps = React21.useRef(props);
  React21.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React21.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef3), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React21.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React21.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef3).filter(Boolean).filter(function(node3) {
        return node3.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React21.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React21.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React21.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React21.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React21.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React21.createElement(
    React21.Fragment,
    null,
    inert ? React21.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React21.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node3) {
  var shadowParent = null;
  while (node3 !== null) {
    if (node3 instanceof ShadowRoot) {
      shadowParent = node3.host;
      node3 = node3.host;
    }
    node3 = node3.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React22.forwardRef(function(props, ref) {
  return React22.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default2 = ReactRemoveScroll;

// node_modules/@chakra-ui/modal/dist/chunk-NABYTFTG.mjs
var import_jsx_runtime111 = __toESM(require_jsx_runtime(), 1);
function ModalFocusScope(props) {
  const {
    autoFocus,
    trapFocus,
    dialogRef,
    initialFocusRef,
    blockScrollOnMount,
    allowPinchZoom,
    finalFocusRef,
    returnFocusOnClose,
    preserveScrollBarGap,
    lockFocusAcrossFrames,
    isOpen
  } = useModalContext();
  const [isPresent, safeToRemove] = usePresence();
  (0, import_react119.useEffect)(() => {
    if (!isPresent && safeToRemove) {
      setTimeout(safeToRemove);
    }
  }, [isPresent, safeToRemove]);
  const index = useModalManager(dialogRef, isOpen);
  return (0, import_jsx_runtime111.jsx)(
    FocusLock2,
    {
      autoFocus,
      isDisabled: !trapFocus,
      initialFocusRef,
      finalFocusRef,
      restoreFocus: returnFocusOnClose,
      contentRef: dialogRef,
      lockFocusAcrossFrames,
      children: (0, import_jsx_runtime111.jsx)(
        Combination_default2,
        {
          removeScrollBar: !preserveScrollBarGap,
          allowPinchZoom,
          enabled: index === 1 && blockScrollOnMount,
          forwardProps: true,
          children: props.children
        }
      )
    }
  );
}

// node_modules/@chakra-ui/modal/dist/chunk-EL2VKIZQ.mjs
var import_jsx_runtime112 = __toESM(require_jsx_runtime(), 1);
var ModalContent = forwardRef3(
  (props, ref) => {
    const {
      className,
      children,
      containerProps: rootProps,
      motionProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles2 = useModalStyles();
    const dialogStyles = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles2.dialog
    };
    const dialogContainerStyles = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles2.dialogContainer
    };
    const { motionPreset } = useModalContext();
    return (0, import_jsx_runtime112.jsx)(ModalFocusScope, { children: (0, import_jsx_runtime112.jsx)(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: dialogContainerStyles,
        children: (0, import_jsx_runtime112.jsx)(
          ModalTransition,
          {
            preset: motionPreset,
            motionProps,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
ModalContent.displayName = "ModalContent";

// node_modules/@chakra-ui/modal/dist/chunk-FQDHE43W.mjs
var import_jsx_runtime113 = __toESM(require_jsx_runtime(), 1);
function AlertDialog(props) {
  const { leastDestructiveRef, ...rest } = props;
  return (0, import_jsx_runtime113.jsx)(Modal, { ...rest, initialFocusRef: leastDestructiveRef });
}
var AlertDialogContent = forwardRef3(
  (props, ref) => (0, import_jsx_runtime113.jsx)(ModalContent, { ref, role: "alertdialog", ...props })
);

// node_modules/@chakra-ui/modal/dist/chunk-MCHDHFCQ.mjs
var import_jsx_runtime114 = __toESM(require_jsx_runtime(), 1);
var [DrawerContextProvider, useDrawerContext] = createContext2();
var placementMap2 = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function getDrawerPlacement(placement, dir) {
  var _a8, _b5;
  if (!placement)
    return;
  return (_b5 = (_a8 = placementMap2[placement]) == null ? void 0 : _a8[dir]) != null ? _b5 : placement;
}
function Drawer(props) {
  var _a8;
  const {
    isOpen,
    onClose,
    placement: placementProp = "right",
    children,
    ...rest
  } = props;
  const theme2 = useTheme2();
  const drawerStyleConfig = (_a8 = theme2.components) == null ? void 0 : _a8.Drawer;
  const placement = getDrawerPlacement(placementProp, theme2.direction);
  return (0, import_jsx_runtime114.jsx)(DrawerContextProvider, { value: { placement }, children: (0, import_jsx_runtime114.jsx)(
    Modal,
    {
      isOpen,
      onClose,
      styleConfig: drawerStyleConfig,
      ...rest,
      children
    }
  ) });
}

// node_modules/@chakra-ui/modal/dist/chunk-65IR7CTH.mjs
var import_jsx_runtime115 = __toESM(require_jsx_runtime(), 1);
var MotionDiv = chakra(Slide);
var DrawerContent = forwardRef3(
  (props, ref) => {
    const {
      className,
      children,
      motionProps,
      containerProps: rootProps,
      ...rest
    } = props;
    const { getDialogProps, getDialogContainerProps, isOpen } = useModalContext();
    const dialogProps = getDialogProps(rest, ref);
    const containerProps = getDialogContainerProps(rootProps);
    const _className = cx("chakra-modal__content", className);
    const styles2 = useModalStyles();
    const dialogStyles = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...styles2.dialog
    };
    const dialogContainerStyles = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...styles2.dialogContainer
    };
    const { placement } = useDrawerContext();
    return (0, import_jsx_runtime115.jsx)(ModalFocusScope, { children: (0, import_jsx_runtime115.jsx)(
      chakra.div,
      {
        ...containerProps,
        className: "chakra-modal__content-container",
        __css: dialogContainerStyles,
        children: (0, import_jsx_runtime115.jsx)(
          MotionDiv,
          {
            motionProps,
            direction: placement,
            in: isOpen,
            className: _className,
            ...dialogProps,
            __css: dialogStyles,
            children
          }
        )
      }
    ) });
  }
);
DrawerContent.displayName = "DrawerContent";

// node_modules/@chakra-ui/modal/dist/chunk-RAWN7VJ3.mjs
var import_jsx_runtime116 = __toESM(require_jsx_runtime(), 1);
var ModalFooter = forwardRef3(
  (props, ref) => {
    const { className, ...rest } = props;
    const _className = cx("chakra-modal__footer", className);
    const styles2 = useModalStyles();
    const footerStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...styles2.footer
    };
    return (0, import_jsx_runtime116.jsx)(
      chakra.footer,
      {
        ref,
        ...rest,
        __css: footerStyles,
        className: _className
      }
    );
  }
);
ModalFooter.displayName = "ModalFooter";

// node_modules/@chakra-ui/modal/dist/chunk-5FG5SY5K.mjs
var import_react120 = __toESM(require_react(), 1);
var import_jsx_runtime117 = __toESM(require_jsx_runtime(), 1);
var ModalHeader = forwardRef3(
  (props, ref) => {
    const { className, ...rest } = props;
    const { headerId, setHeaderMounted } = useModalContext();
    (0, import_react120.useEffect)(() => {
      setHeaderMounted(true);
      return () => setHeaderMounted(false);
    }, [setHeaderMounted]);
    const _className = cx("chakra-modal__header", className);
    const styles2 = useModalStyles();
    const headerStyles = {
      flex: 0,
      ...styles2.header
    };
    return (0, import_jsx_runtime117.jsx)(
      chakra.header,
      {
        ref,
        className: _className,
        id: headerId,
        ...rest,
        __css: headerStyles
      }
    );
  }
);
ModalHeader.displayName = "ModalHeader";

// node_modules/@chakra-ui/modal/dist/chunk-JQMJHPZH.mjs
var import_jsx_runtime118 = __toESM(require_jsx_runtime(), 1);
var MotionDiv2 = chakra(motion.div);
var ModalOverlay = forwardRef3(
  (props, ref) => {
    const { className, transition: transition3, motionProps: _motionProps, ...rest } = props;
    const _className = cx("chakra-modal__overlay", className);
    const styles2 = useModalStyles();
    const overlayStyle = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...styles2.overlay
    };
    const { motionPreset } = useModalContext();
    const defaultMotionProps = motionPreset === "none" ? {} : fadeConfig;
    const motionProps = _motionProps || defaultMotionProps;
    return (0, import_jsx_runtime118.jsx)(
      MotionDiv2,
      {
        ...motionProps,
        __css: overlayStyle,
        ref,
        className: _className,
        ...rest
      }
    );
  }
);
ModalOverlay.displayName = "ModalOverlay";

// node_modules/@chakra-ui/modal/dist/chunk-OFOVX77R.mjs
var import_react121 = __toESM(require_react(), 1);
var import_jsx_runtime119 = __toESM(require_jsx_runtime(), 1);
var ModalBody = forwardRef3((props, ref) => {
  const { className, ...rest } = props;
  const { bodyId, setBodyMounted } = useModalContext();
  (0, import_react121.useEffect)(() => {
    setBodyMounted(true);
    return () => setBodyMounted(false);
  }, [setBodyMounted]);
  const _className = cx("chakra-modal__body", className);
  const styles2 = useModalStyles();
  return (0, import_jsx_runtime119.jsx)(
    chakra.div,
    {
      ref,
      className: _className,
      id: bodyId,
      ...rest,
      __css: styles2.body
    }
  );
});
ModalBody.displayName = "ModalBody";

// node_modules/@chakra-ui/modal/dist/chunk-4FCEGNGT.mjs
var import_jsx_runtime120 = __toESM(require_jsx_runtime(), 1);
var ModalCloseButton = forwardRef3(
  (props, ref) => {
    const { onClick, className, ...rest } = props;
    const { onClose } = useModalContext();
    const _className = cx("chakra-modal__close-btn", className);
    const styles2 = useModalStyles();
    return (0, import_jsx_runtime120.jsx)(
      CloseButton,
      {
        ref,
        __css: styles2.closeButton,
        className: _className,
        onClick: callAllHandlers(onClick, (event) => {
          event.stopPropagation();
          onClose();
        }),
        ...rest
      }
    );
  }
);
ModalCloseButton.displayName = "ModalCloseButton";

// node_modules/@chakra-ui/number-input/dist/chunk-KWODBCCW.mjs
var import_jsx_runtime121 = __toESM(require_jsx_runtime(), 1);
var TriangleDownIcon = (props) => (0, import_jsx_runtime121.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime121.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
var TriangleUpIcon = (props) => (0, import_jsx_runtime121.jsx)(Icon, { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime121.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
  }
) });

// node_modules/@chakra-ui/number-input/dist/chunk-2PMVP26D.mjs
var import_react122 = __toESM(require_react(), 1);
function useAttributeObserver(ref, attributes, fn2, enabled) {
  (0, import_react122.useEffect)(() => {
    var _a8;
    if (!ref.current || !enabled)
      return;
    const win = (_a8 = ref.current.ownerDocument.defaultView) != null ? _a8 : window;
    const attrs = Array.isArray(attributes) ? attributes : [attributes];
    const obs = new win.MutationObserver((changes) => {
      for (const change of changes) {
        if (change.type === "attributes" && change.attributeName && attrs.includes(change.attributeName)) {
          fn2(change);
        }
      }
    });
    obs.observe(ref.current, { attributes: true, attributeFilter: attrs });
    return () => obs.disconnect();
  });
}

// node_modules/@chakra-ui/react-use-interval/dist/index.mjs
var import_react123 = __toESM(require_react(), 1);
function useInterval2(callback, delay) {
  const fn2 = useCallbackRef(callback);
  (0, import_react123.useEffect)(() => {
    let intervalId = null;
    const tick = () => fn2();
    if (delay !== null) {
      intervalId = window.setInterval(tick, delay);
    }
    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, fn2]);
}

// node_modules/@chakra-ui/number-input/dist/chunk-366L2ZDN.mjs
var import_react124 = __toESM(require_react(), 1);
var CONTINUOUS_CHANGE_INTERVAL = 50;
var CONTINUOUS_CHANGE_DELAY = 300;
function useSpinner(increment, decrement) {
  const [isSpinning, setIsSpinning] = (0, import_react124.useState)(false);
  const [action, setAction] = (0, import_react124.useState)(null);
  const [runOnce, setRunOnce] = (0, import_react124.useState)(true);
  const timeoutRef = (0, import_react124.useRef)(null);
  const removeTimeout = () => clearTimeout(timeoutRef.current);
  useInterval2(
    () => {
      if (action === "increment") {
        increment();
      }
      if (action === "decrement") {
        decrement();
      }
    },
    isSpinning ? CONTINUOUS_CHANGE_INTERVAL : null
  );
  const up = (0, import_react124.useCallback)(() => {
    if (runOnce) {
      increment();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("increment");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [increment, runOnce]);
  const down = (0, import_react124.useCallback)(() => {
    if (runOnce) {
      decrement();
    }
    timeoutRef.current = setTimeout(() => {
      setRunOnce(false);
      setIsSpinning(true);
      setAction("decrement");
    }, CONTINUOUS_CHANGE_DELAY);
  }, [decrement, runOnce]);
  const stop = (0, import_react124.useCallback)(() => {
    setRunOnce(true);
    setIsSpinning(false);
    removeTimeout();
  }, []);
  (0, import_react124.useEffect)(() => {
    return () => removeTimeout();
  }, []);
  return { up, down, stop, isSpinning };
}

// node_modules/@chakra-ui/number-input/dist/chunk-4ZJMWFQT.mjs
var import_react125 = __toESM(require_react(), 1);
var FLOATING_POINT_REGEX = /^[Ee0-9+\-.]$/;
function isFloatingPointNumericCharacter(character2) {
  return FLOATING_POINT_REGEX.test(character2);
}
function isValidNumericKeyboardEvent(event, isValid) {
  if (event.key == null)
    return true;
  const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
  const isSingleCharacterKey = event.key.length === 1;
  if (!isSingleCharacterKey || isModifierKey)
    return true;
  return isValid(event.key);
}
function useNumberInput(props = {}) {
  const {
    focusInputOnChange = true,
    clampValueOnBlur = true,
    keepWithinRange = true,
    min: min2 = Number.MIN_SAFE_INTEGER,
    max: max2 = Number.MAX_SAFE_INTEGER,
    step: stepProp = 1,
    isReadOnly,
    isDisabled: isDisabled3,
    isRequired,
    isInvalid,
    pattern = "[0-9]*(.[0-9]+)?",
    inputMode = "decimal",
    allowMouseWheel,
    id,
    onChange: _,
    precision,
    name,
    "aria-describedby": ariaDescBy,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onInvalid: onInvalidProp,
    getAriaValueText: getAriaValueTextProp,
    isValidCharacter: isValidCharacterProp,
    format: formatValue,
    parse: parseValue,
    ...htmlProps
  } = props;
  const onFocus3 = useCallbackRef(onFocusProp);
  const onBlur3 = useCallbackRef(onBlurProp);
  const onInvalid = useCallbackRef(onInvalidProp);
  const isValidCharacter = useCallbackRef(
    isValidCharacterProp != null ? isValidCharacterProp : isFloatingPointNumericCharacter
  );
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const counter2 = useCounter(props);
  const {
    update: updateFn,
    increment: incrementFn,
    decrement: decrementFn
  } = counter2;
  const [isFocused, setFocused] = (0, import_react125.useState)(false);
  const isInteractive = !(isReadOnly || isDisabled3);
  const inputRef = (0, import_react125.useRef)(null);
  const inputSelectionRef = (0, import_react125.useRef)(null);
  const incrementButtonRef = (0, import_react125.useRef)(null);
  const decrementButtonRef = (0, import_react125.useRef)(null);
  const sanitize = (0, import_react125.useCallback)(
    (value) => value.split("").filter(isValidCharacter).join(""),
    [isValidCharacter]
  );
  const parse6 = (0, import_react125.useCallback)(
    (value) => {
      var _a8;
      return (_a8 = parseValue == null ? void 0 : parseValue(value)) != null ? _a8 : value;
    },
    [parseValue]
  );
  const format = (0, import_react125.useCallback)(
    (value) => {
      var _a8;
      return ((_a8 = formatValue == null ? void 0 : formatValue(value)) != null ? _a8 : value).toString();
    },
    [formatValue]
  );
  useUpdateEffect(() => {
    if (counter2.valueAsNumber > max2) {
      onInvalid == null ? void 0 : onInvalid("rangeOverflow", format(counter2.value), counter2.valueAsNumber);
    } else if (counter2.valueAsNumber < min2) {
      onInvalid == null ? void 0 : onInvalid("rangeOverflow", format(counter2.value), counter2.valueAsNumber);
    }
  }, [counter2.valueAsNumber, counter2.value, format, onInvalid]);
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const notInSync = inputRef.current.value != counter2.value;
    if (notInSync) {
      const parsedInput = parse6(inputRef.current.value);
      counter2.setValue(sanitize(parsedInput));
    }
  }, [parse6, sanitize]);
  const increment = (0, import_react125.useCallback)(
    (step = stepProp) => {
      if (isInteractive) {
        incrementFn(step);
      }
    },
    [incrementFn, isInteractive, stepProp]
  );
  const decrement = (0, import_react125.useCallback)(
    (step = stepProp) => {
      if (isInteractive) {
        decrementFn(step);
      }
    },
    [decrementFn, isInteractive, stepProp]
  );
  const spinner = useSpinner(increment, decrement);
  useAttributeObserver(
    incrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  useAttributeObserver(
    decrementButtonRef,
    "disabled",
    spinner.stop,
    spinner.isSpinning
  );
  const onChange = (0, import_react125.useCallback)(
    (event) => {
      const evt = event.nativeEvent;
      if (evt.isComposing)
        return;
      const parsedInput = parse6(event.currentTarget.value);
      updateFn(sanitize(parsedInput));
      inputSelectionRef.current = {
        start: event.currentTarget.selectionStart,
        end: event.currentTarget.selectionEnd
      };
    },
    [updateFn, sanitize, parse6]
  );
  const _onFocus = (0, import_react125.useCallback)(
    (event) => {
      var _a8, _b5, _c3;
      onFocus3 == null ? void 0 : onFocus3(event);
      if (!inputSelectionRef.current)
        return;
      event.target.selectionStart = (_b5 = inputSelectionRef.current.start) != null ? _b5 : (_a8 = event.currentTarget.value) == null ? void 0 : _a8.length;
      event.currentTarget.selectionEnd = (_c3 = inputSelectionRef.current.end) != null ? _c3 : event.currentTarget.selectionStart;
    },
    [onFocus3]
  );
  const onKeyDown = (0, import_react125.useCallback)(
    (event) => {
      if (event.nativeEvent.isComposing)
        return;
      if (!isValidNumericKeyboardEvent(event, isValidCharacter)) {
        event.preventDefault();
      }
      const stepFactor = getStepFactor(event) * stepProp;
      const eventKey = event.key;
      const keyMap = {
        ArrowUp: () => increment(stepFactor),
        ArrowDown: () => decrement(stepFactor),
        Home: () => updateFn(min2),
        End: () => updateFn(max2)
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [isValidCharacter, stepProp, increment, decrement, updateFn, min2, max2]
  );
  const getStepFactor = (event) => {
    let ratio = 1;
    if (event.metaKey || event.ctrlKey) {
      ratio = 0.1;
    }
    if (event.shiftKey) {
      ratio = 10;
    }
    return ratio;
  };
  const ariaValueText = (0, import_react125.useMemo)(() => {
    const text = getAriaValueText == null ? void 0 : getAriaValueText(counter2.value);
    if (text != null)
      return text;
    const defaultText = counter2.value.toString();
    return !defaultText ? void 0 : defaultText;
  }, [counter2.value, getAriaValueText]);
  const validateAndClamp = (0, import_react125.useCallback)(() => {
    let next2 = counter2.value;
    if (counter2.value === "")
      return;
    const valueStartsWithE = /^[eE]/.test(counter2.value.toString());
    if (valueStartsWithE) {
      counter2.setValue("");
    } else {
      if (counter2.valueAsNumber < min2) {
        next2 = min2;
      }
      if (counter2.valueAsNumber > max2) {
        next2 = max2;
      }
      counter2.cast(next2);
    }
  }, [counter2, max2, min2]);
  const onInputBlur = (0, import_react125.useCallback)(() => {
    setFocused(false);
    if (clampValueOnBlur) {
      validateAndClamp();
    }
  }, [clampValueOnBlur, setFocused, validateAndClamp]);
  const focusInput = (0, import_react125.useCallback)(() => {
    if (focusInputOnChange) {
      requestAnimationFrame(() => {
        var _a8;
        (_a8 = inputRef.current) == null ? void 0 : _a8.focus();
      });
    }
  }, [focusInputOnChange]);
  const spinUp = (0, import_react125.useCallback)(
    (event) => {
      event.preventDefault();
      spinner.up();
      focusInput();
    },
    [focusInput, spinner]
  );
  const spinDown = (0, import_react125.useCallback)(
    (event) => {
      event.preventDefault();
      spinner.down();
      focusInput();
    },
    [focusInput, spinner]
  );
  useEventListener(
    () => inputRef.current,
    "wheel",
    (event) => {
      var _a8, _b5;
      const doc = (_b5 = (_a8 = inputRef.current) == null ? void 0 : _a8.ownerDocument) != null ? _b5 : document;
      const isInputFocused = doc.activeElement === inputRef.current;
      if (!allowMouseWheel || !isInputFocused)
        return;
      event.preventDefault();
      const stepFactor = getStepFactor(event) * stepProp;
      const direction2 = Math.sign(event.deltaY);
      if (direction2 === -1) {
        increment(stepFactor);
      } else if (direction2 === 1) {
        decrement(stepFactor);
      }
    },
    { passive: false }
  );
  const getIncrementButtonProps = (0, import_react125.useCallback)(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled3 || keepWithinRange && counter2.isAtMax;
      return {
        ...props2,
        ref: mergeRefs2(ref, incrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinUp(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter2.isAtMax, keepWithinRange, spinUp, spinner.stop, isDisabled3]
  );
  const getDecrementButtonProps = (0, import_react125.useCallback)(
    (props2 = {}, ref = null) => {
      const disabled = isDisabled3 || keepWithinRange && counter2.isAtMin;
      return {
        ...props2,
        ref: mergeRefs2(ref, decrementButtonRef),
        role: "button",
        tabIndex: -1,
        onPointerDown: callAllHandlers(props2.onPointerDown, (event) => {
          if (event.button !== 0 || disabled)
            return;
          spinDown(event);
        }),
        onPointerLeave: callAllHandlers(props2.onPointerLeave, spinner.stop),
        onPointerUp: callAllHandlers(props2.onPointerUp, spinner.stop),
        disabled,
        "aria-disabled": ariaAttr(disabled)
      };
    },
    [counter2.isAtMin, keepWithinRange, spinDown, spinner.stop, isDisabled3]
  );
  const getInputProps = (0, import_react125.useCallback)(
    (props2 = {}, ref = null) => {
      var _a8, _b5, _c3, _d3;
      return {
        name,
        inputMode,
        type: "text",
        pattern,
        "aria-labelledby": ariaLabelledBy,
        "aria-label": ariaLabel,
        "aria-describedby": ariaDescBy,
        id,
        disabled: isDisabled3,
        ...props2,
        readOnly: (_a8 = props2.readOnly) != null ? _a8 : isReadOnly,
        "aria-readonly": (_b5 = props2.readOnly) != null ? _b5 : isReadOnly,
        "aria-required": (_c3 = props2.required) != null ? _c3 : isRequired,
        required: (_d3 = props2.required) != null ? _d3 : isRequired,
        ref: mergeRefs2(inputRef, ref),
        value: format(counter2.value),
        role: "spinbutton",
        "aria-valuemin": min2,
        "aria-valuemax": max2,
        "aria-valuenow": Number.isNaN(counter2.valueAsNumber) ? void 0 : counter2.valueAsNumber,
        "aria-invalid": ariaAttr(isInvalid != null ? isInvalid : counter2.isOutOfRange),
        "aria-valuetext": ariaValueText,
        autoComplete: "off",
        autoCorrect: "off",
        onChange: callAllHandlers(props2.onChange, onChange),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(
          props2.onFocus,
          _onFocus,
          () => setFocused(true)
        ),
        onBlur: callAllHandlers(props2.onBlur, onBlur3, onInputBlur)
      };
    },
    [
      name,
      inputMode,
      pattern,
      ariaLabelledBy,
      ariaLabel,
      format,
      ariaDescBy,
      id,
      isDisabled3,
      isRequired,
      isReadOnly,
      isInvalid,
      counter2.value,
      counter2.valueAsNumber,
      counter2.isOutOfRange,
      min2,
      max2,
      ariaValueText,
      onChange,
      onKeyDown,
      _onFocus,
      onBlur3,
      onInputBlur
    ]
  );
  return {
    value: format(counter2.value),
    valueAsNumber: counter2.valueAsNumber,
    isFocused,
    isDisabled: isDisabled3,
    isReadOnly,
    getIncrementButtonProps,
    getDecrementButtonProps,
    getInputProps,
    htmlProps
  };
}

// node_modules/@chakra-ui/number-input/dist/chunk-2JJX6TVY.mjs
var import_react126 = __toESM(require_react(), 1);
var import_jsx_runtime122 = __toESM(require_jsx_runtime(), 1);
var [NumberInputStylesProvider, useNumberInputStyles] = createContext2({
  name: `NumberInputStylesContext`,
  errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `
});
var [NumberInputProvider, useNumberInputContext] = createContext2({
  name: "NumberInputContext",
  errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
});
var NumberInput = forwardRef3(
  function NumberInput2(props, ref) {
    const styles2 = useMultiStyleConfig("NumberInput", props);
    const ownProps = omitThemingProps(props);
    const controlProps = useFormControlProps(ownProps);
    const { htmlProps, ...context } = useNumberInput(controlProps);
    const ctx = (0, import_react126.useMemo)(() => context, [context]);
    return (0, import_jsx_runtime122.jsx)(NumberInputProvider, { value: ctx, children: (0, import_jsx_runtime122.jsx)(NumberInputStylesProvider, { value: styles2, children: (0, import_jsx_runtime122.jsx)(
      chakra.div,
      {
        ...htmlProps,
        ref,
        className: cx("chakra-numberinput", props.className),
        __css: {
          position: "relative",
          zIndex: 0,
          ...styles2.root
        }
      }
    ) }) });
  }
);
NumberInput.displayName = "NumberInput";
var NumberInputStepper = forwardRef3(
  function NumberInputStepper2(props, ref) {
    const styles2 = useNumberInputStyles();
    return (0, import_jsx_runtime122.jsx)(
      chakra.div,
      {
        "aria-hidden": true,
        ref,
        ...props,
        __css: {
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "0",
          insetEnd: "0px",
          margin: "1px",
          height: "calc(100% - 2px)",
          zIndex: 1,
          ...styles2.stepperGroup
        }
      }
    );
  }
);
NumberInputStepper.displayName = "NumberInputStepper";
var NumberInputField = forwardRef3(
  function NumberInputField2(props, ref) {
    const { getInputProps } = useNumberInputContext();
    const input = getInputProps(props, ref);
    const styles2 = useNumberInputStyles();
    return (0, import_jsx_runtime122.jsx)(
      chakra.input,
      {
        ...input,
        className: cx("chakra-numberinput__field", props.className),
        __css: {
          width: "100%",
          ...styles2.field
        }
      }
    );
  }
);
NumberInputField.displayName = "NumberInputField";
var StyledStepper = chakra("div", {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    transitionProperty: "common",
    transitionDuration: "normal",
    userSelect: "none",
    cursor: "pointer",
    lineHeight: "normal"
  }
});
var NumberDecrementStepper = forwardRef3(function NumberDecrementStepper2(props, ref) {
  var _a8;
  const styles2 = useNumberInputStyles();
  const { getDecrementButtonProps } = useNumberInputContext();
  const decrement = getDecrementButtonProps(props, ref);
  return (0, import_jsx_runtime122.jsx)(StyledStepper, { ...decrement, __css: styles2.stepper, children: (_a8 = props.children) != null ? _a8 : (0, import_jsx_runtime122.jsx)(TriangleDownIcon, {}) });
});
NumberDecrementStepper.displayName = "NumberDecrementStepper";
var NumberIncrementStepper = forwardRef3(function NumberIncrementStepper2(props, ref) {
  var _a8;
  const { getIncrementButtonProps } = useNumberInputContext();
  const increment = getIncrementButtonProps(props, ref);
  const styles2 = useNumberInputStyles();
  return (0, import_jsx_runtime122.jsx)(StyledStepper, { ...increment, __css: styles2.stepper, children: (_a8 = props.children) != null ? _a8 : (0, import_jsx_runtime122.jsx)(TriangleUpIcon, {}) });
});
NumberIncrementStepper.displayName = "NumberIncrementStepper";

// node_modules/@chakra-ui/pin-input/dist/chunk-7FMJRAMH.mjs
var import_react127 = __toESM(require_react(), 1);
var [
  PinInputDescendantsProvider,
  usePinInputDescendantsContext,
  usePinInputDescendants,
  usePinInputDescendant
] = createDescendantContext();
var [PinInputProvider, usePinInputContext] = createContext2({
  name: "PinInputContext",
  errorMessage: "usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"
});
var toArray2 = (value) => value == null ? void 0 : value.split("");
function validate(value, type) {
  const NUMERIC_REGEX = /^[0-9]+$/;
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
  const regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
  return regex.test(value);
}
function usePinInput(props = {}) {
  const {
    autoFocus,
    value,
    defaultValue,
    onChange,
    onComplete,
    placeholder = "○",
    manageFocus = true,
    otp = false,
    id: idProp,
    isDisabled: isDisabled3,
    isInvalid,
    type = "number",
    mask
  } = props;
  const uuid = (0, import_react127.useId)();
  const id = idProp != null ? idProp : `pin-input-${uuid}`;
  const descendants = usePinInputDescendants();
  const [moveFocus2, setMoveFocus] = (0, import_react127.useState)(true);
  const [focusedIndex, setFocusedIndex] = (0, import_react127.useState)(-1);
  const [values, setValues] = useControllableState({
    defaultValue: toArray2(defaultValue) || [],
    value: toArray2(value),
    onChange: (values2) => onChange == null ? void 0 : onChange(values2.join(""))
  });
  (0, import_react127.useEffect)(() => {
    if (autoFocus) {
      const first = descendants.first();
      if (first) {
        requestAnimationFrame(() => {
          first.node.focus();
        });
      }
    }
  }, [descendants]);
  const focusNext = (0, import_react127.useCallback)(
    (index) => {
      if (!moveFocus2 || !manageFocus)
        return;
      const next2 = descendants.next(index, false);
      if (next2) {
        requestAnimationFrame(() => {
          next2.node.focus();
        });
      }
    },
    [descendants, moveFocus2, manageFocus]
  );
  const setValue = (0, import_react127.useCallback)(
    (value2, index, handleFocus = true) => {
      const nextValues = [...values];
      nextValues[index] = value2;
      setValues(nextValues);
      const isComplete = value2 !== "" && nextValues.length === descendants.count() && nextValues.every(
        (inputValue) => inputValue != null && inputValue !== ""
      );
      if (isComplete) {
        onComplete == null ? void 0 : onComplete(nextValues.join(""));
      } else {
        if (handleFocus)
          focusNext(index);
      }
    },
    [values, setValues, focusNext, onComplete, descendants]
  );
  const clear = (0, import_react127.useCallback)(() => {
    var _a8;
    const values2 = Array(descendants.count()).fill("");
    setValues(values2);
    const first = descendants.first();
    (_a8 = first == null ? void 0 : first.node) == null ? void 0 : _a8.focus();
  }, [descendants, setValues]);
  const getNextValue = (0, import_react127.useCallback)((value2, eventValue) => {
    let nextValue = eventValue;
    if ((value2 == null ? void 0 : value2.length) > 0) {
      if (value2[0] === eventValue.charAt(0)) {
        nextValue = eventValue.charAt(1);
      } else if (value2[0] === eventValue.charAt(1)) {
        nextValue = eventValue.charAt(0);
      }
    }
    return nextValue;
  }, []);
  const getInputProps = (0, import_react127.useCallback)(
    (props2) => {
      const { index, ...rest } = props2;
      const onChange2 = (event) => {
        const eventValue = event.target.value;
        const currentValue = values[index];
        const nextValue = getNextValue(currentValue, eventValue);
        if (nextValue === "") {
          setValue("", index);
          return;
        }
        if (eventValue.length > 2) {
          if (validate(eventValue, type)) {
            const nextValue2 = eventValue.split("").filter((_, index2) => index2 < descendants.count());
            setValues(nextValue2);
            if (nextValue2.length === descendants.count()) {
              onComplete == null ? void 0 : onComplete(nextValue2.join(""));
            }
          }
        } else {
          if (validate(nextValue, type)) {
            setValue(nextValue, index);
          }
          setMoveFocus(true);
        }
      };
      const onKeyDown = (event) => {
        var _a8;
        if (event.key === "Backspace" && manageFocus) {
          if (event.target.value === "") {
            const prevInput = descendants.prev(index, false);
            if (prevInput) {
              setValue("", index - 1, false);
              (_a8 = prevInput.node) == null ? void 0 : _a8.focus();
              setMoveFocus(true);
            }
          } else {
            setMoveFocus(false);
          }
        }
      };
      const onFocus3 = () => {
        setFocusedIndex(index);
      };
      const onBlur3 = () => {
        setFocusedIndex(-1);
      };
      const hasFocus = focusedIndex === index;
      const inputType = type === "number" ? "tel" : "text";
      return {
        "aria-label": "Please enter your pin code",
        inputMode: type === "number" ? "numeric" : "text",
        type: mask ? "password" : inputType,
        ...rest,
        id: `${id}-${index}`,
        disabled: isDisabled3,
        "aria-invalid": ariaAttr(isInvalid),
        onChange: callAllHandlers(rest.onChange, onChange2),
        onKeyDown: callAllHandlers(rest.onKeyDown, onKeyDown),
        onFocus: callAllHandlers(rest.onFocus, onFocus3),
        onBlur: callAllHandlers(rest.onBlur, onBlur3),
        value: values[index] || "",
        autoComplete: otp ? "one-time-code" : "off",
        placeholder: hasFocus ? "" : placeholder
      };
    },
    [
      descendants,
      focusedIndex,
      getNextValue,
      id,
      isDisabled3,
      mask,
      isInvalid,
      manageFocus,
      onComplete,
      otp,
      placeholder,
      setValue,
      setValues,
      type,
      values
    ]
  );
  return {
    // prop getter
    getInputProps,
    // state
    id,
    descendants,
    values,
    // actions
    setValue,
    setValues,
    clear
  };
}
function usePinInputField(props = {}, ref = null) {
  const { getInputProps } = usePinInputContext();
  const { index, register } = usePinInputDescendant();
  return getInputProps({
    ...props,
    ref: mergeRefs2(register, ref),
    index
  });
}

// node_modules/@chakra-ui/pin-input/dist/chunk-I5V4ORUK.mjs
var import_react128 = __toESM(require_react(), 1);
var import_jsx_runtime123 = __toESM(require_jsx_runtime(), 1);
function PinInput(props) {
  const styles2 = useStyleConfig("PinInput", props);
  const { children, ...rest } = omitThemingProps(props);
  const { descendants, ...context } = usePinInput(rest);
  const clones = getValidChildren2(children).map(
    (child) => (0, import_react128.cloneElement)(child, { __css: styles2 })
  );
  return (0, import_jsx_runtime123.jsx)(PinInputDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime123.jsx)(PinInputProvider, { value: context, children: clones }) });
}
PinInput.displayName = "PinInput";
var PinInputField = forwardRef3(
  function PinInputField2(props, ref) {
    const inputProps = usePinInputField(props, ref);
    return (0, import_jsx_runtime123.jsx)(
      chakra.input,
      {
        ...inputProps,
        className: cx("chakra-pin-input", props.className)
      }
    );
  }
);
PinInputField.displayName = "PinInputField";

// node_modules/@chakra-ui/popover/dist/chunk-Z3POGKNI.mjs
var [PopoverProvider, usePopoverContext] = createContext2({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});
var [PopoverStylesProvider, usePopoverStyles] = createContext2({
  name: `PopoverStylesContext`,
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});

// node_modules/@chakra-ui/popover/dist/chunk-DHS7LAGW.mjs
var import_jsx_runtime124 = __toESM(require_jsx_runtime(), 1);
var PopoverHeader = forwardRef3(
  function PopoverHeader2(props, ref) {
    const { getHeaderProps } = usePopoverContext();
    const styles2 = usePopoverStyles();
    return (0, import_jsx_runtime124.jsx)(
      chakra.header,
      {
        ...getHeaderProps(props, ref),
        className: cx("chakra-popover__header", props.className),
        __css: styles2.header
      }
    );
  }
);
PopoverHeader.displayName = "PopoverHeader";

// node_modules/@chakra-ui/popover/dist/chunk-OFUG2FGD.mjs
var import_react129 = __toESM(require_react(), 1);
function PopoverTrigger(props) {
  const child = import_react129.Children.only(props.children);
  const { getTriggerProps } = usePopoverContext();
  return (0, import_react129.cloneElement)(child, getTriggerProps(child.props, child.ref));
}
PopoverTrigger.displayName = "PopoverTrigger";

// node_modules/@chakra-ui/popover/dist/chunk-A566ERKI.mjs
var import_react130 = __toESM(require_react(), 1);
var TRIGGER = {
  click: "click",
  hover: "hover"
};
function usePopover(props = {}) {
  const {
    closeOnBlur = true,
    closeOnEsc = true,
    initialFocusRef,
    id,
    returnFocusOnClose = true,
    autoFocus = true,
    arrowSize,
    arrowShadowColor,
    trigger: trigger2 = TRIGGER.click,
    openDelay = 200,
    closeDelay = 200,
    isLazy,
    lazyBehavior = "unmount",
    computePositionOnMount,
    ...popperProps
  } = props;
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure2(props);
  const anchorRef = (0, import_react130.useRef)(null);
  const triggerRef = (0, import_react130.useRef)(null);
  const popoverRef = (0, import_react130.useRef)(null);
  const isHoveringRef = (0, import_react130.useRef)(false);
  const hasBeenOpened = (0, import_react130.useRef)(false);
  if (isOpen) {
    hasBeenOpened.current = true;
  }
  const [hasHeader, setHasHeader] = (0, import_react130.useState)(false);
  const [hasBody, setHasBody] = (0, import_react130.useState)(false);
  const uuid = (0, import_react130.useId)();
  const uid = id != null ? id : uuid;
  const [triggerId, popoverId, headerId, bodyId] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((id2) => `${id2}-${uid}`);
  const {
    referenceRef,
    getArrowProps,
    getPopperProps,
    getArrowInnerProps,
    forceUpdate
  } = usePopper({
    ...popperProps,
    enabled: isOpen || !!computePositionOnMount
  });
  const animated = useAnimationState2({ isOpen, ref: popoverRef });
  useFocusOnPointerDown({
    enabled: isOpen,
    ref: triggerRef
  });
  useFocusOnHide2(popoverRef, {
    focusRef: triggerRef,
    visible: isOpen,
    shouldFocus: returnFocusOnClose && trigger2 === TRIGGER.click
  });
  useFocusOnShow2(popoverRef, {
    focusRef: initialFocusRef,
    visible: isOpen,
    shouldFocus: autoFocus && trigger2 === TRIGGER.click
  });
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenOpened.current,
    enabled: isLazy,
    mode: lazyBehavior,
    isSelected: animated.present
  });
  const getPopoverProps = (0, import_react130.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const popoverProps = {
        ...props2,
        style: {
          ...props2.style,
          transformOrigin: cssVars.transformOrigin.varRef,
          [cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [cssVars.arrowShadowColor.var]: arrowShadowColor
        },
        ref: mergeRefs2(popoverRef, _ref2),
        children: shouldRenderChildren ? props2.children : null,
        id: popoverId,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: callAllHandlers(props2.onKeyDown, (event) => {
          if (closeOnEsc && event.key === "Escape") {
            onClose();
          }
        }),
        onBlur: callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget2(event);
          const targetIsPopover = contains6(popoverRef.current, relatedTarget);
          const targetIsTrigger = contains6(triggerRef.current, relatedTarget);
          const isValidBlur = !targetIsPopover && !targetIsTrigger;
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        }),
        "aria-labelledby": hasHeader ? headerId : void 0,
        "aria-describedby": hasBody ? bodyId : void 0
      };
      if (trigger2 === TRIGGER.hover) {
        popoverProps.role = "tooltip";
        popoverProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
        });
        popoverProps.onMouseLeave = callAllHandlers(
          props2.onMouseLeave,
          (event) => {
            if (event.nativeEvent.relatedTarget === null) {
              return;
            }
            isHoveringRef.current = false;
            setTimeout(() => onClose(), closeDelay);
          }
        );
      }
      return popoverProps;
    },
    [
      shouldRenderChildren,
      popoverId,
      hasHeader,
      headerId,
      hasBody,
      bodyId,
      trigger2,
      closeOnEsc,
      onClose,
      isOpen,
      closeOnBlur,
      closeDelay,
      arrowShadowColor,
      arrowSize
    ]
  );
  const getPopoverPositionerProps = (0, import_react130.useCallback)(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          visibility: isOpen ? "visible" : "hidden",
          ...props2.style
        }
      },
      forwardedRef
    ),
    [isOpen, getPopperProps]
  );
  const getAnchorProps = (0, import_react130.useCallback)(
    (props2, _ref2 = null) => {
      return {
        ...props2,
        // If anchor is rendered, it is used as reference.
        ref: mergeRefs2(_ref2, anchorRef, referenceRef)
      };
    },
    [anchorRef, referenceRef]
  );
  const openTimeout = (0, import_react130.useRef)();
  const closeTimeout = (0, import_react130.useRef)();
  const maybeReferenceRef = (0, import_react130.useCallback)(
    (node3) => {
      if (anchorRef.current == null) {
        referenceRef(node3);
      }
    },
    [referenceRef]
  );
  const getTriggerProps = (0, import_react130.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const triggerProps = {
        ...props2,
        ref: mergeRefs2(triggerRef, _ref2, maybeReferenceRef),
        id: triggerId,
        "aria-haspopup": "dialog",
        "aria-expanded": isOpen,
        "aria-controls": popoverId
      };
      if (trigger2 === TRIGGER.click) {
        triggerProps.onClick = callAllHandlers(props2.onClick, onToggle);
      }
      if (trigger2 === TRIGGER.hover) {
        triggerProps.onFocus = callAllHandlers(props2.onFocus, () => {
          if (openTimeout.current === void 0) {
            onOpen();
          }
        });
        triggerProps.onBlur = callAllHandlers(props2.onBlur, (event) => {
          const relatedTarget = getRelatedTarget2(event);
          const isValidBlur = !contains6(popoverRef.current, relatedTarget);
          if (isOpen && closeOnBlur && isValidBlur) {
            onClose();
          }
        });
        triggerProps.onKeyDown = callAllHandlers(props2.onKeyDown, (event) => {
          if (event.key === "Escape") {
            onClose();
          }
        });
        triggerProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
          isHoveringRef.current = true;
          openTimeout.current = window.setTimeout(() => onOpen(), openDelay);
        });
        triggerProps.onMouseLeave = callAllHandlers(props2.onMouseLeave, () => {
          isHoveringRef.current = false;
          if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = void 0;
          }
          closeTimeout.current = window.setTimeout(() => {
            if (isHoveringRef.current === false) {
              onClose();
            }
          }, closeDelay);
        });
      }
      return triggerProps;
    },
    [
      triggerId,
      isOpen,
      popoverId,
      trigger2,
      maybeReferenceRef,
      onToggle,
      onOpen,
      closeOnBlur,
      onClose,
      openDelay,
      closeDelay
    ]
  );
  (0, import_react130.useEffect)(() => {
    return () => {
      if (openTimeout.current) {
        clearTimeout(openTimeout.current);
      }
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);
  const getHeaderProps = (0, import_react130.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: headerId,
      ref: mergeRefs2(ref, (node3) => {
        setHasHeader(!!node3);
      })
    }),
    [headerId]
  );
  const getBodyProps = (0, import_react130.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      id: bodyId,
      ref: mergeRefs2(ref, (node3) => {
        setHasBody(!!node3);
      })
    }),
    [bodyId]
  );
  return {
    forceUpdate,
    isOpen,
    onAnimationComplete: animated.onComplete,
    onClose,
    getAnchorProps,
    getArrowProps,
    getArrowInnerProps,
    getPopoverPositionerProps,
    getPopoverProps,
    getTriggerProps,
    getHeaderProps,
    getBodyProps
  };
}
function contains6(parent, child) {
  return parent === child || (parent == null ? void 0 : parent.contains(child));
}
function getRelatedTarget2(event) {
  var _a8;
  const activeEl = event.currentTarget.ownerDocument.activeElement;
  return (_a8 = event.relatedTarget) != null ? _a8 : activeEl;
}

// node_modules/@chakra-ui/popover/dist/chunk-3WRTUQ76.mjs
var import_jsx_runtime125 = __toESM(require_jsx_runtime(), 1);
function Popover(props) {
  const styles2 = useMultiStyleConfig("Popover", props);
  const { children, ...rest } = omitThemingProps(props);
  const theme2 = useTheme2();
  const context = usePopover({ ...rest, direction: theme2.direction });
  return (0, import_jsx_runtime125.jsx)(PopoverProvider, { value: context, children: (0, import_jsx_runtime125.jsx)(PopoverStylesProvider, { value: styles2, children: runIfFn(children, {
    isOpen: context.isOpen,
    onClose: context.onClose,
    forceUpdate: context.forceUpdate
  }) }) });
}
Popover.displayName = "Popover";

// node_modules/@chakra-ui/popover/dist/chunk-DY5QRMBO.mjs
var import_react131 = __toESM(require_react(), 1);
function PopoverAnchor(props) {
  const child = import_react131.Children.only(props.children);
  const { getAnchorProps } = usePopoverContext();
  return (0, import_react131.cloneElement)(child, getAnchorProps(child.props, child.ref));
}
PopoverAnchor.displayName = "PopoverAnchor";

// node_modules/@chakra-ui/popover/dist/chunk-TL4BBA7T.mjs
var import_jsx_runtime126 = __toESM(require_jsx_runtime(), 1);
var resolveVar = (scale2, value) => value ? `${scale2}.${value}, ${value}` : void 0;
function PopoverArrow(props) {
  var _a8;
  const { bg, bgColor, backgroundColor, shadow, boxShadow, shadowColor } = props;
  const { getArrowProps, getArrowInnerProps } = usePopoverContext();
  const styles2 = usePopoverStyles();
  const arrowBg = (_a8 = bg != null ? bg : bgColor) != null ? _a8 : backgroundColor;
  const arrowShadow = shadow != null ? shadow : boxShadow;
  return (0, import_jsx_runtime126.jsx)(
    chakra.div,
    {
      ...getArrowProps(),
      className: "chakra-popover__arrow-positioner",
      children: (0, import_jsx_runtime126.jsx)(
        chakra.div,
        {
          className: cx("chakra-popover__arrow", props.className),
          ...getArrowInnerProps(props),
          __css: {
            "--popper-arrow-shadow-color": resolveVar("colors", shadowColor),
            "--popper-arrow-bg": resolveVar("colors", arrowBg),
            "--popper-arrow-shadow": resolveVar("shadows", arrowShadow),
            ...styles2.arrow
          }
        }
      )
    }
  );
}
PopoverArrow.displayName = "PopoverArrow";

// node_modules/@chakra-ui/popover/dist/chunk-RLMGYZLY.mjs
var import_jsx_runtime127 = __toESM(require_jsx_runtime(), 1);
var PopoverBody = forwardRef3(
  function PopoverBody2(props, ref) {
    const { getBodyProps } = usePopoverContext();
    const styles2 = usePopoverStyles();
    return (0, import_jsx_runtime127.jsx)(
      chakra.div,
      {
        ...getBodyProps(props, ref),
        className: cx("chakra-popover__body", props.className),
        __css: styles2.body
      }
    );
  }
);
PopoverBody.displayName = "PopoverBody";

// node_modules/@chakra-ui/popover/dist/chunk-JKY3EM6P.mjs
var import_jsx_runtime128 = __toESM(require_jsx_runtime(), 1);
var PopoverCloseButton = forwardRef3(
  function PopoverCloseButton2(props, ref) {
    const { onClose } = usePopoverContext();
    const styles2 = usePopoverStyles();
    return (0, import_jsx_runtime128.jsx)(
      CloseButton,
      {
        size: "sm",
        onClick: onClose,
        className: cx("chakra-popover__close-btn", props.className),
        __css: styles2.closeButton,
        ref,
        ...props
      }
    );
  }
);
PopoverCloseButton.displayName = "PopoverCloseButton";

// node_modules/@chakra-ui/popover/dist/chunk-F4GPNG57.mjs
var import_jsx_runtime129 = __toESM(require_jsx_runtime(), 1);
function mergeVariants(variants18) {
  if (!variants18)
    return;
  return {
    enter: {
      ...variants18.enter,
      visibility: "visible"
    },
    exit: {
      ...variants18.exit,
      transitionEnd: {
        visibility: "hidden"
      }
    }
  };
}
var scaleFade = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
};
var MotionSection2 = chakra(motion.section);
var PopoverTransition = forwardRef3(function PopoverTransition2(props, ref) {
  const { variants: variants18 = scaleFade, ...rest } = props;
  const { isOpen } = usePopoverContext();
  return (0, import_jsx_runtime129.jsx)(
    MotionSection2,
    {
      ref,
      variants: mergeVariants(variants18),
      initial: false,
      animate: isOpen ? "enter" : "exit",
      ...rest
    }
  );
});
PopoverTransition.displayName = "PopoverTransition";

// node_modules/@chakra-ui/popover/dist/chunk-24I2HV4N.mjs
var import_jsx_runtime130 = __toESM(require_jsx_runtime(), 1);
var PopoverContent = forwardRef3(
  function PopoverContent2(props, ref) {
    const { rootProps, motionProps, ...contentProps } = props;
    const { getPopoverProps, getPopoverPositionerProps, onAnimationComplete } = usePopoverContext();
    const styles2 = usePopoverStyles();
    const contentStyles = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...styles2.content
    };
    return (0, import_jsx_runtime130.jsx)(
      chakra.div,
      {
        ...getPopoverPositionerProps(rootProps),
        __css: styles2.popper,
        className: "chakra-popover__popper",
        children: (0, import_jsx_runtime130.jsx)(
          PopoverTransition,
          {
            ...motionProps,
            ...getPopoverProps(contentProps, ref),
            onAnimationComplete: callAll(
              onAnimationComplete,
              contentProps.onAnimationComplete
            ),
            className: cx("chakra-popover__content", props.className),
            __css: contentStyles
          }
        )
      }
    );
  }
);
PopoverContent.displayName = "PopoverContent";

// node_modules/@chakra-ui/popover/dist/chunk-R6BA5JLS.mjs
var import_jsx_runtime131 = __toESM(require_jsx_runtime(), 1);
function PopoverFooter(props) {
  const styles2 = usePopoverStyles();
  return (0, import_jsx_runtime131.jsx)(
    chakra.footer,
    {
      ...props,
      className: cx("chakra-popover__footer", props.className),
      __css: styles2.footer
    }
  );
}
PopoverFooter.displayName = "PopoverFooter";

// node_modules/@chakra-ui/progress/dist/chunk-QQ2FLD7A.mjs
var CircularProgressLabel = chakra("div", {
  baseStyle: {
    fontSize: "0.24em",
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  }
});
CircularProgressLabel.displayName = "CircularProgressLabel";

// node_modules/@chakra-ui/progress/dist/chunk-7CG3L4JY.mjs
var import_jsx_runtime132 = __toESM(require_jsx_runtime(), 1);
var Circle3 = (props) => (0, import_jsx_runtime132.jsx)(chakra.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...props });
Circle3.displayName = "Circle";

// node_modules/@chakra-ui/progress/dist/chunk-TXZFUZNG.mjs
function valueToPercent3(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
var spin2 = keyframes({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
});
var rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var progress = keyframes({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
});
var stripe = keyframes({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function getProgressProps(options) {
  const {
    value = 0,
    min: min2,
    max: max2,
    valueText,
    getValueText: getValueText2,
    isIndeterminate,
    role = "progressbar"
  } = options;
  const percent = valueToPercent3(value, min2, max2);
  const getAriaValueText = () => {
    if (value == null)
      return void 0;
    return typeof getValueText2 === "function" ? getValueText2(value, percent) : valueText;
  };
  return {
    bind: {
      "data-indeterminate": isIndeterminate ? "" : void 0,
      "aria-valuemax": max2,
      "aria-valuemin": min2,
      "aria-valuenow": isIndeterminate ? void 0 : value,
      "aria-valuetext": getAriaValueText(),
      role
    },
    percent,
    value
  };
}

// node_modules/@chakra-ui/progress/dist/chunk-EMKK5VRD.mjs
var import_jsx_runtime133 = __toESM(require_jsx_runtime(), 1);
var Shape = (props) => {
  const { size: size2, isIndeterminate, ...rest } = props;
  return (0, import_jsx_runtime133.jsx)(
    chakra.svg,
    {
      viewBox: "0 0 100 100",
      __css: {
        width: size2,
        height: size2,
        animation: isIndeterminate ? `${rotate} 2s linear infinite` : void 0
      },
      ...rest
    }
  );
};
Shape.displayName = "Shape";

// node_modules/@chakra-ui/progress/dist/chunk-Q6Q7I7E5.mjs
var import_jsx_runtime134 = __toESM(require_jsx_runtime(), 1);
var CircularProgress = forwardRef3(
  (props, ref) => {
    var _a8;
    const {
      size: size2 = "48px",
      max: max2 = 100,
      min: min2 = 0,
      valueText,
      getValueText: getValueText2,
      value,
      capIsRound,
      children,
      thickness = "10px",
      color: color2 = "#0078d4",
      trackColor = "#edebe9",
      isIndeterminate,
      ...rest
    } = props;
    const progress2 = getProgressProps({
      min: min2,
      max: max2,
      value,
      valueText,
      getValueText: getValueText2,
      isIndeterminate
    });
    const determinant = isIndeterminate ? void 0 : ((_a8 = progress2.percent) != null ? _a8 : 0) * 2.64;
    const strokeDasharray = determinant == null ? void 0 : `${determinant} ${264 - determinant}`;
    const indicatorProps = isIndeterminate ? {
      css: { animation: `${spin2} 1.5s linear infinite` }
    } : {
      strokeDashoffset: 66,
      strokeDasharray,
      transitionProperty: "stroke-dasharray, stroke",
      transitionDuration: "0.6s",
      transitionTimingFunction: "ease"
    };
    const rootStyles2 = {
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      fontSize: size2
    };
    return (0, import_jsx_runtime134.jsxs)(
      chakra.div,
      {
        ref,
        className: "chakra-progress",
        ...progress2.bind,
        ...rest,
        __css: rootStyles2,
        children: [
          (0, import_jsx_runtime134.jsxs)(Shape, { size: size2, isIndeterminate, children: [
            (0, import_jsx_runtime134.jsx)(
              Circle3,
              {
                stroke: trackColor,
                strokeWidth: thickness,
                className: "chakra-progress__track"
              }
            ),
            (0, import_jsx_runtime134.jsx)(
              Circle3,
              {
                stroke: color2,
                strokeWidth: thickness,
                className: "chakra-progress__indicator",
                strokeLinecap: capIsRound ? "round" : void 0,
                opacity: progress2.value === 0 && !isIndeterminate ? 0 : void 0,
                ...indicatorProps
              }
            )
          ] }),
          children
        ]
      }
    );
  }
);
CircularProgress.displayName = "CircularProgress";

// node_modules/@chakra-ui/progress/dist/chunk-BZDCPGYF.mjs
var import_jsx_runtime135 = __toESM(require_jsx_runtime(), 1);
var [ProgressStylesProvider, useProgressStyles] = createContext2({
  name: `ProgressStylesContext`,
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
});
var ProgressFilledTrack = forwardRef3(
  (props, ref) => {
    const { min: min2, max: max2, value, isIndeterminate, role, ...rest } = props;
    const progress2 = getProgressProps({
      value,
      min: min2,
      max: max2,
      isIndeterminate,
      role
    });
    const styles2 = useProgressStyles();
    const trackStyles = {
      height: "100%",
      ...styles2.filledTrack
    };
    return (0, import_jsx_runtime135.jsx)(
      chakra.div,
      {
        ref,
        style: { width: `${progress2.percent}%`, ...rest.style },
        ...progress2.bind,
        ...rest,
        __css: trackStyles
      }
    );
  }
);
var Progress = forwardRef3((props, ref) => {
  var _a8;
  const {
    value,
    min: min2 = 0,
    max: max2 = 100,
    hasStripe,
    isAnimated,
    children,
    borderRadius: propBorderRadius,
    isIndeterminate,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
    title,
    role,
    ...rest
  } = omitThemingProps(props);
  const styles2 = useMultiStyleConfig("Progress", props);
  const borderRadius = propBorderRadius != null ? propBorderRadius : (_a8 = styles2.track) == null ? void 0 : _a8.borderRadius;
  const stripeAnimation = { animation: `${stripe} 1s linear infinite` };
  const shouldAddStripe = !isIndeterminate && hasStripe;
  const shouldAnimateStripe = shouldAddStripe && isAnimated;
  const css4 = {
    ...shouldAnimateStripe && stripeAnimation,
    ...isIndeterminate && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${progress} 1s ease infinite normal none running`
    }
  };
  const trackStyles = {
    overflow: "hidden",
    position: "relative",
    ...styles2.track
  };
  return (0, import_jsx_runtime135.jsx)(
    chakra.div,
    {
      ref,
      borderRadius,
      __css: trackStyles,
      ...rest,
      children: (0, import_jsx_runtime135.jsxs)(ProgressStylesProvider, { value: styles2, children: [
        (0, import_jsx_runtime135.jsx)(
          ProgressFilledTrack,
          {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-valuetext": ariaValueText,
            min: min2,
            max: max2,
            value,
            isIndeterminate,
            css: css4,
            borderRadius,
            title,
            role
          }
        ),
        children
      ] })
    }
  );
});
Progress.displayName = "Progress";

// node_modules/@chakra-ui/progress/dist/chunk-TDPOTVYR.mjs
var import_jsx_runtime136 = __toESM(require_jsx_runtime(), 1);
var ProgressLabel = (props) => {
  const styles2 = useProgressStyles();
  const labelStyles = {
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...styles2.label
  };
  return (0, import_jsx_runtime136.jsx)(chakra.div, { ...props, __css: labelStyles });
};
ProgressLabel.displayName = "ProgressLabel";

// node_modules/@chakra-ui/radio/dist/chunk-Q56JAA3U.mjs
var import_react132 = __toESM(require_react(), 1);
function isInputEvent3(value) {
  return value && isObject(value) && isObject(value.target);
}
function useRadioGroup(props = {}) {
  const {
    onChange: onChangeProp,
    value: valueProp,
    defaultValue,
    name: nameProp,
    isDisabled: isDisabled3,
    isFocusable: isFocusable3,
    isNative,
    ...htmlProps
  } = props;
  const [valueState, setValue] = (0, import_react132.useState)(defaultValue || "");
  const isControlled = typeof valueProp !== "undefined";
  const value = isControlled ? valueProp : valueState;
  const ref = (0, import_react132.useRef)(null);
  const focus2 = (0, import_react132.useCallback)(() => {
    const rootNode = ref.current;
    if (!rootNode)
      return;
    let query = `input:not(:disabled):checked`;
    const firstEnabledAndCheckedInput = rootNode.querySelector(
      query
    );
    if (firstEnabledAndCheckedInput) {
      firstEnabledAndCheckedInput.focus();
      return;
    }
    query = `input:not(:disabled)`;
    const firstEnabledInput = rootNode.querySelector(query);
    firstEnabledInput == null ? void 0 : firstEnabledInput.focus();
  }, []);
  const uuid = (0, import_react132.useId)();
  const fallbackName = `radio-${uuid}`;
  const name = nameProp || fallbackName;
  const onChange = (0, import_react132.useCallback)(
    (eventOrValue) => {
      const nextValue = isInputEvent3(eventOrValue) ? eventOrValue.target.value : eventOrValue;
      if (!isControlled) {
        setValue(nextValue);
      }
      onChangeProp == null ? void 0 : onChangeProp(String(nextValue));
    },
    [onChangeProp, isControlled]
  );
  const getRootProps = (0, import_react132.useCallback)(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: mergeRefs2(forwardedRef, ref),
      role: "radiogroup"
    }),
    []
  );
  const getRadioProps = (0, import_react132.useCallback)(
    (props2 = {}, ref2 = null) => {
      const checkedKey = isNative ? "checked" : "isChecked";
      return {
        ...props2,
        ref: ref2,
        name,
        [checkedKey]: value != null ? props2.value === value : void 0,
        onChange(event) {
          onChange(event);
        },
        "data-radiogroup": true
      };
    },
    [isNative, name, onChange, value]
  );
  return {
    getRootProps,
    getRadioProps,
    name,
    ref,
    focus: focus2,
    setValue,
    value,
    onChange,
    isDisabled: isDisabled3,
    isFocusable: isFocusable3,
    htmlProps
  };
}

// node_modules/@chakra-ui/radio/dist/chunk-FESYGSQT.mjs
var import_react133 = __toESM(require_react(), 1);
var import_jsx_runtime137 = __toESM(require_jsx_runtime(), 1);
var [RadioGroupProvider, useRadioGroupContext] = createContext2({
  name: "RadioGroupContext",
  strict: false
});
var RadioGroup = forwardRef3((props, ref) => {
  const {
    colorScheme,
    size: size2,
    variant,
    children,
    className,
    isDisabled: isDisabled3,
    isFocusable: isFocusable3,
    ...rest
  } = props;
  const { value, onChange, getRootProps, name, htmlProps } = useRadioGroup(rest);
  const group = (0, import_react133.useMemo)(
    () => ({
      name,
      size: size2,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled: isDisabled3,
      isFocusable: isFocusable3
    }),
    [
      name,
      size2,
      onChange,
      colorScheme,
      value,
      variant,
      isDisabled3,
      isFocusable3
    ]
  );
  return (0, import_jsx_runtime137.jsx)(RadioGroupProvider, { value: group, children: (0, import_jsx_runtime137.jsx)(
    chakra.div,
    {
      ...getRootProps(htmlProps, ref),
      className: cx("chakra-radio-group", className),
      children
    }
  ) });
});
RadioGroup.displayName = "RadioGroup";

// node_modules/@chakra-ui/radio/dist/chunk-2WQJ2JCV.mjs
var import_react134 = __toESM(require_react(), 1);
var visuallyHiddenStyle2 = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
function useRadio(props = {}) {
  const {
    defaultChecked,
    isChecked: isCheckedProp,
    isFocusable: isFocusable3,
    isDisabled: isDisabledProp,
    isReadOnly: isReadOnlyProp,
    isRequired: isRequiredProp,
    onChange,
    isInvalid: isInvalidProp,
    name,
    value,
    id: idProp,
    "data-radiogroup": dataRadioGroup,
    "aria-describedby": ariaDescribedBy,
    ...htmlProps
  } = props;
  const uuid = `radio-${(0, import_react134.useId)()}`;
  const formControl = useFormControlContext();
  const group = useRadioGroupContext();
  const isWithinRadioGroup = !!group || !!dataRadioGroup;
  const isWithinFormControl = !!formControl;
  let id = isWithinFormControl && !isWithinRadioGroup ? formControl.id : uuid;
  id = idProp != null ? idProp : id;
  const isDisabled3 = isDisabledProp != null ? isDisabledProp : formControl == null ? void 0 : formControl.isDisabled;
  const isReadOnly = isReadOnlyProp != null ? isReadOnlyProp : formControl == null ? void 0 : formControl.isReadOnly;
  const isRequired = isRequiredProp != null ? isRequiredProp : formControl == null ? void 0 : formControl.isRequired;
  const isInvalid = isInvalidProp != null ? isInvalidProp : formControl == null ? void 0 : formControl.isInvalid;
  const [isFocusVisible2, setIsFocusVisible] = (0, import_react134.useState)(false);
  const [isFocused, setFocused] = (0, import_react134.useState)(false);
  const [isHovered, setHovering] = (0, import_react134.useState)(false);
  const [isActive, setActive] = (0, import_react134.useState)(false);
  const [isCheckedState, setChecked] = (0, import_react134.useState)(Boolean(defaultChecked));
  const isControlled = typeof isCheckedProp !== "undefined";
  const isChecked = isControlled ? isCheckedProp : isCheckedState;
  (0, import_react134.useEffect)(() => {
    return trackFocusVisible(setIsFocusVisible);
  }, []);
  const handleChange = (0, import_react134.useCallback)(
    (event) => {
      if (isReadOnly || isDisabled3) {
        event.preventDefault();
        return;
      }
      if (!isControlled) {
        setChecked(event.target.checked);
      }
      onChange == null ? void 0 : onChange(event);
    },
    [isControlled, isDisabled3, isReadOnly, onChange]
  );
  const onKeyDown = (0, import_react134.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(true);
      }
    },
    [setActive]
  );
  const onKeyUp = (0, import_react134.useCallback)(
    (event) => {
      if (event.key === " ") {
        setActive(false);
      }
    },
    [setActive]
  );
  const getRadioProps = (0, import_react134.useCallback)(
    (props2 = {}, ref = null) => ({
      ...props2,
      ref,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled3),
      "data-invalid": dataAttr(isInvalid),
      "data-checked": dataAttr(isChecked),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocused && isFocusVisible2),
      "data-readonly": dataAttr(isReadOnly),
      "aria-hidden": true,
      onMouseDown: callAllHandlers(props2.onMouseDown, () => setActive(true)),
      onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
      onMouseEnter: callAllHandlers(
        props2.onMouseEnter,
        () => setHovering(true)
      ),
      onMouseLeave: callAllHandlers(
        props2.onMouseLeave,
        () => setHovering(false)
      )
    }),
    [
      isActive,
      isHovered,
      isDisabled3,
      isInvalid,
      isChecked,
      isFocused,
      isReadOnly,
      isFocusVisible2
    ]
  );
  const { onFocus: onFocus3, onBlur: onBlur3 } = formControl != null ? formControl : {};
  const getInputProps = (0, import_react134.useCallback)(
    (props2 = {}, ref = null) => {
      const trulyDisabled = isDisabled3 && !isFocusable3;
      return {
        ...props2,
        id,
        ref,
        type: "radio",
        name,
        value,
        onChange: callAllHandlers(props2.onChange, handleChange),
        onBlur: callAllHandlers(
          onBlur3,
          props2.onBlur,
          () => setFocused(false)
        ),
        onFocus: callAllHandlers(
          onFocus3,
          props2.onFocus,
          () => setFocused(true)
        ),
        onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
        onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
        checked: isChecked,
        disabled: trulyDisabled,
        readOnly: isReadOnly,
        required: isRequired,
        "aria-invalid": ariaAttr(isInvalid),
        "aria-disabled": ariaAttr(trulyDisabled),
        "aria-required": ariaAttr(isRequired),
        "data-readonly": dataAttr(isReadOnly),
        "aria-describedby": ariaDescribedBy,
        style: visuallyHiddenStyle2
      };
    },
    [
      isDisabled3,
      isFocusable3,
      id,
      name,
      value,
      handleChange,
      onBlur3,
      onFocus3,
      onKeyDown,
      onKeyUp,
      isChecked,
      isReadOnly,
      isRequired,
      isInvalid,
      ariaDescribedBy
    ]
  );
  const getLabelProps = (props2 = {}, ref = null) => ({
    ...props2,
    ref,
    onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent2),
    "data-disabled": dataAttr(isDisabled3),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
  });
  const getRootProps = (props2, ref = null) => ({
    ...props2,
    ref,
    "data-disabled": dataAttr(isDisabled3),
    "data-checked": dataAttr(isChecked),
    "data-invalid": dataAttr(isInvalid)
  });
  const state2 = {
    isInvalid,
    isFocused,
    isChecked,
    isActive,
    isHovered,
    isDisabled: isDisabled3,
    isReadOnly,
    isRequired
  };
  return {
    state: state2,
    /**
     * @deprecated - use `getRadioProps` instead
     */
    getCheckboxProps: getRadioProps,
    getRadioProps,
    getInputProps,
    getLabelProps,
    getRootProps,
    htmlProps
  };
}
function stopEvent2(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@chakra-ui/radio/dist/chunk-RDF2AYID.mjs
var import_jsx_runtime138 = __toESM(require_jsx_runtime(), 1);
function split3(object2, keys2) {
  const picked = {};
  const omitted2 = {};
  for (const [key, value] of Object.entries(object2)) {
    if (keys2.includes(key))
      picked[key] = value;
    else
      omitted2[key] = value;
  }
  return [picked, omitted2];
}
var Radio = forwardRef3((props, ref) => {
  var _a8;
  const group = useRadioGroupContext();
  const { onChange: onChangeProp, value: valueProp } = props;
  const styles2 = useMultiStyleConfig("Radio", { ...group, ...props });
  const ownProps = omitThemingProps(props);
  const {
    spacing: spacing2 = "0.5rem",
    children,
    isDisabled: isDisabled3 = group == null ? void 0 : group.isDisabled,
    isFocusable: isFocusable3 = group == null ? void 0 : group.isFocusable,
    inputProps: htmlInputProps,
    ...rest
  } = ownProps;
  let isChecked = props.isChecked;
  if ((group == null ? void 0 : group.value) != null && valueProp != null) {
    isChecked = group.value === valueProp;
  }
  let onChange = onChangeProp;
  if ((group == null ? void 0 : group.onChange) && valueProp != null) {
    onChange = callAll(group.onChange, onChangeProp);
  }
  const name = (_a8 = props == null ? void 0 : props.name) != null ? _a8 : group == null ? void 0 : group.name;
  const {
    getInputProps,
    getCheckboxProps,
    getLabelProps,
    getRootProps,
    htmlProps
  } = useRadio({
    ...rest,
    isChecked,
    isFocusable: isFocusable3,
    isDisabled: isDisabled3,
    onChange,
    name
  });
  const [layoutProps, otherProps] = split3(htmlProps, layoutPropNames);
  const checkboxProps = getCheckboxProps(otherProps);
  const inputProps = getInputProps(htmlInputProps, ref);
  const labelProps = getLabelProps();
  const rootProps = Object.assign({}, layoutProps, getRootProps());
  const rootStyles2 = {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    cursor: "pointer",
    position: "relative",
    ...styles2.container
  };
  const checkboxStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...styles2.control
  };
  const labelStyles = {
    userSelect: "none",
    marginStart: spacing2,
    ...styles2.label
  };
  return (0, import_jsx_runtime138.jsxs)(chakra.label, { className: "chakra-radio", ...rootProps, __css: rootStyles2, children: [
    (0, import_jsx_runtime138.jsx)("input", { className: "chakra-radio__input", ...inputProps }),
    (0, import_jsx_runtime138.jsx)(
      chakra.span,
      {
        className: "chakra-radio__control",
        ...checkboxProps,
        __css: checkboxStyles
      }
    ),
    children && (0, import_jsx_runtime138.jsx)(
      chakra.span,
      {
        className: "chakra-radio__label",
        ...labelProps,
        __css: labelStyles,
        children
      }
    )
  ] });
});
Radio.displayName = "Radio";

// node_modules/@chakra-ui/select/dist/chunk-C6OUXMED.mjs
var import_jsx_runtime139 = __toESM(require_jsx_runtime(), 1);
var SelectField = forwardRef3(
  function SelectField2(props, ref) {
    const { children, placeholder, className, ...rest } = props;
    return (0, import_jsx_runtime139.jsxs)(
      chakra.select,
      {
        ...rest,
        ref,
        className: cx("chakra-select", className),
        children: [
          placeholder && (0, import_jsx_runtime139.jsx)("option", { value: "", children: placeholder }),
          children
        ]
      }
    );
  }
);
SelectField.displayName = "SelectField";

// node_modules/@chakra-ui/select/dist/chunk-3RSXBRAN.mjs
var import_react135 = __toESM(require_react(), 1);
var import_jsx_runtime140 = __toESM(require_jsx_runtime(), 1);
function split4(object2, keys2) {
  const picked = {};
  const omitted2 = {};
  for (const [key, value] of Object.entries(object2)) {
    if (keys2.includes(key))
      picked[key] = value;
    else
      omitted2[key] = value;
  }
  return [picked, omitted2];
}
var Select = forwardRef3((props, ref) => {
  var _a8;
  const styles2 = useMultiStyleConfig("Select", props);
  const {
    rootProps,
    placeholder,
    icon,
    color: color2,
    height,
    h,
    minH,
    minHeight,
    iconColor,
    iconSize,
    ...rest
  } = omitThemingProps(props);
  const [layoutProps, otherProps] = split4(rest, layoutPropNames);
  const ownProps = useFormControl(otherProps);
  const rootStyles2 = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color: color2
  };
  const fieldStyles = {
    paddingEnd: "2rem",
    ...styles2.field,
    _focus: {
      zIndex: "unset",
      ...(_a8 = styles2.field) == null ? void 0 : _a8["_focus"]
    }
  };
  return (0, import_jsx_runtime140.jsxs)(
    chakra.div,
    {
      className: "chakra-select__wrapper",
      __css: rootStyles2,
      ...layoutProps,
      ...rootProps,
      children: [
        (0, import_jsx_runtime140.jsx)(
          SelectField,
          {
            ref,
            height: h != null ? h : height,
            minH: minH != null ? minH : minHeight,
            placeholder,
            ...ownProps,
            __css: fieldStyles,
            children: props.children
          }
        ),
        (0, import_jsx_runtime140.jsx)(
          SelectIcon,
          {
            "data-disabled": dataAttr(ownProps.disabled),
            ...(iconColor || color2) && { color: iconColor || color2 },
            __css: styles2.icon,
            ...iconSize && { fontSize: iconSize },
            children: icon
          }
        )
      ]
    }
  );
});
Select.displayName = "Select";
var DefaultIcon = (props) => (0, import_jsx_runtime140.jsx)("svg", { viewBox: "0 0 24 24", ...props, children: (0, import_jsx_runtime140.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }
) });
var IconWrapper = chakra("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
});
var SelectIcon = (props) => {
  const { children = (0, import_jsx_runtime140.jsx)(DefaultIcon, {}), ...rest } = props;
  const clone = (0, import_react135.cloneElement)(children, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: false,
    "aria-hidden": true,
    // force icon to adhere to `IconWrapper` styles
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return (0, import_jsx_runtime140.jsx)(IconWrapper, { ...rest, className: "chakra-select__icon-wrapper", children: (0, import_react135.isValidElement)(children) ? clone : null });
};
SelectIcon.displayName = "SelectIcon";

// node_modules/@chakra-ui/skeleton/dist/chunk-AASO4CLC.mjs
var import_react136 = __toESM(require_react(), 1);
function useIsFirstRender() {
  const isFirstRender = (0, import_react136.useRef)(true);
  (0, import_react136.useEffect)(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
}

// node_modules/@chakra-ui/react-use-previous/dist/index.mjs
var import_react137 = __toESM(require_react(), 1);
function usePrevious2(value) {
  const ref = (0, import_react137.useRef)();
  (0, import_react137.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// node_modules/@chakra-ui/skeleton/dist/chunk-GOJLRND4.mjs
var import_jsx_runtime141 = __toESM(require_jsx_runtime(), 1);
var StyledSkeleton = chakra("div", {
  baseStyle: {
    boxShadow: "none",
    backgroundClip: "padding-box",
    cursor: "default",
    color: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    "&::before, &::after, *": {
      visibility: "hidden"
    }
  }
});
var $startColor2 = cssVar("skeleton-start-color");
var $endColor2 = cssVar("skeleton-end-color");
var fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
var bgFade = keyframes({
  from: {
    borderColor: $startColor2.reference,
    background: $startColor2.reference
  },
  to: {
    borderColor: $endColor2.reference,
    background: $endColor2.reference
  }
});
var Skeleton = forwardRef3((props, ref) => {
  const skeletonProps = {
    ...props,
    fadeDuration: typeof props.fadeDuration === "number" ? props.fadeDuration : 0.4,
    speed: typeof props.speed === "number" ? props.speed : 0.8
  };
  const styles2 = useStyleConfig("Skeleton", skeletonProps);
  const isFirstRender = useIsFirstRender();
  const {
    startColor = "",
    endColor = "",
    isLoaded,
    fadeDuration,
    speed,
    className,
    fitContent,
    ...rest
  } = omitThemingProps(skeletonProps);
  const [startColorVar, endColorVar] = useToken("colors", [
    startColor,
    endColor
  ]);
  const wasPreviouslyLoaded = usePrevious2(isLoaded);
  const _className = cx("chakra-skeleton", className);
  const cssVarStyles = {
    ...startColorVar && { [$startColor2.variable]: startColorVar },
    ...endColorVar && { [$endColor2.variable]: endColorVar }
  };
  if (isLoaded) {
    const animation = isFirstRender || wasPreviouslyLoaded ? "none" : `${fade} ${fadeDuration}s`;
    return (0, import_jsx_runtime141.jsx)(
      chakra.div,
      {
        ref,
        className: _className,
        __css: { animation },
        ...rest
      }
    );
  }
  return (0, import_jsx_runtime141.jsx)(
    StyledSkeleton,
    {
      ref,
      className: _className,
      ...rest,
      __css: {
        width: fitContent ? "fit-content" : void 0,
        ...styles2,
        ...cssVarStyles,
        _dark: { ...styles2["_dark"], ...cssVarStyles },
        animation: `${speed}s linear infinite alternate ${bgFade}`
      }
    }
  );
});
Skeleton.displayName = "Skeleton";

// node_modules/@chakra-ui/skeleton/dist/chunk-W7A7QDAK.mjs
var import_jsx_runtime142 = __toESM(require_jsx_runtime(), 1);
var SkeletonCircle = ({
  size: size2 = "2rem",
  ...rest
}) => (0, import_jsx_runtime142.jsx)(Skeleton, { borderRadius: "full", boxSize: size2, ...rest });
SkeletonCircle.displayName = "SkeletonCircle";

// node_modules/@chakra-ui/skeleton/dist/chunk-IYS4KVU2.mjs
var import_jsx_runtime143 = __toESM(require_jsx_runtime(), 1);
function range(count) {
  return Array(count).fill(1).map((_, index) => index + 1);
}
var defaultNoOfLines = 3;
var SkeletonText = (props) => {
  const {
    noOfLines = defaultNoOfLines,
    spacing: spacing2 = "0.5rem",
    skeletonHeight = "0.5rem",
    className,
    startColor,
    endColor,
    isLoaded,
    fadeDuration,
    speed,
    variant,
    size: size2,
    colorScheme,
    children,
    ...rest
  } = props;
  const noOfLinesValue = useBreakpointValue(
    typeof noOfLines === "number" ? [noOfLines] : noOfLines
  ) || defaultNoOfLines;
  const numbers = range(noOfLinesValue);
  const getWidth = (index) => {
    if (noOfLinesValue > 1) {
      return index === numbers.length ? "80%" : "100%";
    }
    return "100%";
  };
  const _className = cx("chakra-skeleton__group", className);
  return (0, import_jsx_runtime143.jsx)(chakra.div, { className: _className, ...rest, children: numbers.map((number, index) => {
    if (isLoaded && index > 0) {
      return null;
    }
    const sizeProps = isLoaded ? null : {
      mb: number === numbers.length ? "0" : spacing2,
      width: getWidth(number),
      height: skeletonHeight
    };
    return (0, import_jsx_runtime143.jsx)(
      Skeleton,
      {
        startColor,
        endColor,
        isLoaded,
        fadeDuration,
        speed,
        variant,
        size: size2,
        colorScheme,
        ...sizeProps,
        // allows animating the children
        children: index === 0 ? children : void 0
      },
      numbers.length.toString() + number
    );
  }) });
};
SkeletonText.displayName = "SkeletonText";

// node_modules/@chakra-ui/skip-nav/dist/chunk-IZODFAGU.mjs
var import_jsx_runtime144 = __toESM(require_jsx_runtime(), 1);
var fallbackId = "chakra-skip-nav";
function getStyles2(styles2) {
  return {
    userSelect: "none",
    border: "0",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    outline: "0",
    overflow: "hidden",
    position: "absolute",
    clip: "rect(0 0 0 0)",
    ...styles2,
    _focus: {
      clip: "auto",
      width: "auto",
      height: "auto",
      ...styles2["_focus"]
    }
  };
}
var SkipNavLink = forwardRef3(
  function SkipNavLink2(props, ref) {
    const styles2 = useStyleConfig("SkipLink", props);
    const { id = fallbackId, ...rest } = omitThemingProps(props);
    return (0, import_jsx_runtime144.jsx)(chakra.a, { ...rest, ref, href: `#${id}`, __css: getStyles2(styles2) });
  }
);
SkipNavLink.displayName = "SkipNavLink";
var SkipNavContent = forwardRef3(
  function SkipNavContent2(props, ref) {
    const { id = fallbackId, ...rest } = props;
    return (0, import_jsx_runtime144.jsx)(
      chakra.div,
      {
        ref,
        id,
        tabIndex: -1,
        style: { outline: 0 },
        ...rest
      }
    );
  }
);
SkipNavContent.displayName = "SkipNavContent";

// node_modules/@chakra-ui/slider/dist/chunk-DX64QB22.mjs
var dataAttr3 = (condition) => condition ? "" : void 0;
var ariaAttr3 = (condition) => condition ? true : void 0;
var cx3 = (...classNames2) => classNames2.filter(Boolean).join(" ");
function callAllHandlers3(...fns) {
  return function func2(event) {
    fns.some((fn2) => {
      fn2 == null ? void 0 : fn2(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}

// node_modules/@chakra-ui/slider/dist/chunk-E23N4XEN.mjs
function getIds(id) {
  return {
    root: `slider-root-${id}`,
    getThumb: (i) => `slider-thumb-${id}-${i}`,
    getInput: (i) => `slider-input-${id}-${i}`,
    track: `slider-track-${id}`,
    innerTrack: `slider-filled-track-${id}`,
    getMarker: (i) => `slider-marker-${id}-${i}`,
    output: `slider-output-${id}`
  };
}
function orient2(options) {
  const { orientation, vertical, horizontal } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
var zeroSize = { width: 0, height: 0 };
var normalize3 = (a) => a || zeroSize;
function getStyles3(options) {
  const { orientation, thumbPercents, thumbRects, isReversed } = options;
  const getThumbStyle = (i) => {
    var _a8;
    const rect = (_a8 = thumbRects[i]) != null ? _a8 : zeroSize;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...orient2({
        orientation,
        vertical: {
          bottom: `calc(${thumbPercents[i]}% - ${rect.height / 2}px)`
        },
        horizontal: {
          left: `calc(${thumbPercents[i]}% - ${rect.width / 2}px)`
        }
      })
    };
  };
  const size2 = orientation === "vertical" ? thumbRects.reduce(
    (a, b) => normalize3(a).height > normalize3(b).height ? a : b,
    zeroSize
  ) : thumbRects.reduce(
    (a, b) => normalize3(a).width > normalize3(b).width ? a : b,
    zeroSize
  );
  const rootStyle = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...orient2({
      orientation,
      vertical: size2 ? {
        paddingLeft: size2.width / 2,
        paddingRight: size2.width / 2
      } : {},
      horizontal: size2 ? {
        paddingTop: size2.height / 2,
        paddingBottom: size2.height / 2
      } : {}
    })
  };
  const trackStyle = {
    position: "absolute",
    ...orient2({
      orientation,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        height: "100%"
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%"
      }
    })
  };
  const isSingleThumb = thumbPercents.length === 1;
  const fallback = [0, isReversed ? 100 - thumbPercents[0] : thumbPercents[0]];
  const range2 = isSingleThumb ? fallback : thumbPercents;
  let start2 = range2[0];
  if (!isSingleThumb && isReversed) {
    start2 = 100 - start2;
  }
  const percent = Math.abs(range2[range2.length - 1] - range2[0]);
  const innerTrackStyle = {
    ...trackStyle,
    ...orient2({
      orientation,
      vertical: isReversed ? { height: `${percent}%`, top: `${start2}%` } : { height: `${percent}%`, bottom: `${start2}%` },
      horizontal: isReversed ? { width: `${percent}%`, right: `${start2}%` } : { width: `${percent}%`, left: `${start2}%` }
    })
  };
  return { trackStyle, innerTrackStyle, rootStyle, getThumbStyle };
}
function getIsReversed(options) {
  const { isReversed, direction: direction2, orientation } = options;
  if (direction2 === "ltr" || orientation === "vertical") {
    return isReversed;
  }
  return !isReversed;
}

// node_modules/@chakra-ui/event-utils/dist/chunk-6K7SS4J6.mjs
function addDomEvent2(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return () => {
    target.removeEventListener(eventName, handler, options);
  };
}

// node_modules/@chakra-ui/event-utils/dist/chunk-B7KYFEHM.mjs
function isMouseEvent2(event) {
  const win = getEventWindow3(event);
  if (typeof win.PointerEvent !== "undefined" && event instanceof win.PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof win.MouseEvent;
}
function isTouchEvent2(event) {
  const hasTouches = !!event.touches;
  return hasTouches;
}
function isMultiTouchEvent2(event) {
  return isTouchEvent2(event) && event.touches.length > 1;
}
function getEventWindow3(event) {
  var _a8;
  return (_a8 = event.view) != null ? _a8 : window;
}

// node_modules/@chakra-ui/event-utils/dist/chunk-6FBKF3LK.mjs
function pointFromTouch2(e, type = "page") {
  const point = e.touches[0] || e.changedTouches[0];
  return { x: point[`${type}X`], y: point[`${type}Y`] };
}
function pointFromMouse2(point, type = "page") {
  return {
    x: point[`${type}X`],
    y: point[`${type}Y`]
  };
}
function getEventPoint(event, type = "page") {
  return isTouchEvent2(event) ? pointFromTouch2(event, type) : pointFromMouse2(event, type);
}

// node_modules/@chakra-ui/event-utils/dist/chunk-KDLSVIYE.mjs
function filter2(cb) {
  return (event) => {
    const isMouse = isMouseEvent2(event);
    if (!isMouse || isMouse && event.button === 0) {
      cb(event);
    }
  };
}
function wrap3(cb, filterPrimary = false) {
  function listener(event) {
    cb(event, { point: getEventPoint(event) });
  }
  const fn2 = filterPrimary ? filter2(listener) : listener;
  return fn2;
}
function addPointerEvent2(target, type, cb, options) {
  return addDomEvent2(target, type, wrap3(cb, type === "pointerdown"), options);
}

// node_modules/@chakra-ui/react-use-pan-event/dist/chunk-Z2LY7B4S.mjs
var __defProp4 = Object.defineProperty;
var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField4 = (obj, key, value) => {
  __defNormalProp4(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var PanEvent = class {
  constructor(event, handlers2, threshold) {
    __publicField4(this, "history", []);
    __publicField4(this, "startEvent", null);
    __publicField4(this, "lastEvent", null);
    __publicField4(this, "lastEventInfo", null);
    __publicField4(this, "handlers", {});
    __publicField4(this, "removeListeners", () => {
    });
    __publicField4(this, "threshold", 3);
    __publicField4(this, "win");
    __publicField4(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const info2 = getPanInfo2(this.lastEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2(info2.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { timestamp: timestamp2 } = getFrameData();
      this.history.push({ ...info2.point, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart == null ? void 0 : onStart(this.lastEvent, info2);
        this.startEvent = this.lastEvent;
      }
      onMove == null ? void 0 : onMove(this.lastEvent, info2);
    });
    __publicField4(this, "onPointerMove", (event2, info2) => {
      this.lastEvent = event2;
      this.lastEventInfo = info2;
      es_default.update(this.updatePoint, true);
    });
    __publicField4(this, "onPointerUp", (event2, info2) => {
      const panInfo = getPanInfo2(info2, this.history);
      const { onEnd, onSessionEnd } = this.handlers;
      onSessionEnd == null ? void 0 : onSessionEnd(event2, panInfo);
      this.end();
      if (!onEnd || !this.startEvent)
        return;
      onEnd == null ? void 0 : onEnd(event2, panInfo);
    });
    var _a8;
    this.win = (_a8 = event.view) != null ? _a8 : window;
    if (isMultiTouchEvent2(event))
      return;
    this.handlers = handlers2;
    if (threshold) {
      this.threshold = threshold;
    }
    event.stopPropagation();
    event.preventDefault();
    const info = { point: getEventPoint(event) };
    const { timestamp } = getFrameData();
    this.history = [{ ...info.point, timestamp }];
    const { onSessionStart } = handlers2;
    onSessionStart == null ? void 0 : onSessionStart(event, getPanInfo2(info, this.history));
    this.removeListeners = pipe5(
      addPointerEvent2(this.win, "pointermove", this.onPointerMove),
      addPointerEvent2(this.win, "pointerup", this.onPointerUp),
      addPointerEvent2(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(handlers2) {
    this.handlers = handlers2;
  }
  end() {
    var _a8;
    (_a8 = this.removeListeners) == null ? void 0 : _a8.call(this);
    cancelSync.update(this.updatePoint);
  }
};
function subtract4(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo2(info, history) {
  return {
    point: info.point,
    delta: subtract4(info.point, history[history.length - 1]),
    offset: subtract4(info.point, history[0]),
    velocity: getVelocity2(history, 0.1)
  };
}
var toMilliseconds2 = (v) => v * 1e3;
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = history[history.length - 1];
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > toMilliseconds2(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function pipe5(...fns) {
  return (v) => fns.reduce((a, b) => b(a), v);
}
function distance1D2(a, b) {
  return Math.abs(a - b);
}
function isPoint2(point) {
  return "x" in point && "y" in point;
}
function distance2(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return distance1D2(a, b);
  }
  if (isPoint2(a) && isPoint2(b)) {
    const xDelta = distance1D2(a.x, b.x);
    const yDelta = distance1D2(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
  }
  return 0;
}

// node_modules/@chakra-ui/react-use-latest-ref/dist/index.mjs
var import_react138 = __toESM(require_react(), 1);
function useLatestRef2(value) {
  const ref = (0, import_react138.useRef)(null);
  ref.current = value;
  return ref;
}

// node_modules/@chakra-ui/react-use-pan-event/dist/chunk-AQIKOOGA.mjs
var import_react139 = __toESM(require_react(), 1);
function usePanEvent(ref, options) {
  const {
    onPan,
    onPanStart,
    onPanEnd,
    onPanSessionStart,
    onPanSessionEnd,
    threshold
  } = options;
  const hasPanEvents = Boolean(
    onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd
  );
  const panSession = (0, import_react139.useRef)(null);
  const handlersRef = useLatestRef2({
    onSessionStart: onPanSessionStart,
    onSessionEnd: onPanSessionEnd,
    onStart: onPanStart,
    onMove: onPan,
    onEnd(event, info) {
      panSession.current = null;
      onPanEnd == null ? void 0 : onPanEnd(event, info);
    }
  });
  (0, import_react139.useEffect)(() => {
    var _a8;
    (_a8 = panSession.current) == null ? void 0 : _a8.updateHandlers(handlersRef.current);
  });
  (0, import_react139.useEffect)(() => {
    const node3 = ref.current;
    if (!node3 || !hasPanEvents)
      return;
    function onPointerDown(event) {
      panSession.current = new PanEvent(event, handlersRef.current, threshold);
    }
    return addPointerEvent2(node3, "pointerdown", onPointerDown);
  }, [ref, hasPanEvents, handlersRef, threshold]);
  (0, import_react139.useEffect)(() => {
    return () => {
      var _a8;
      (_a8 = panSession.current) == null ? void 0 : _a8.end();
      panSession.current = null;
    };
  }, []);
}

// node_modules/@chakra-ui/slider/dist/chunk-K3MZ7A5P.mjs
var import_react141 = __toESM(require_react(), 1);

// node_modules/@zag-js/element-size/dist/track-size.mjs
function trackElementSize(element, callback) {
  if (!element) {
    callback(void 0);
    return;
  }
  callback({ width: element.offsetWidth, height: element.offsetHeight });
  const win = element.ownerDocument.defaultView ?? window;
  const observer = new win.ResizeObserver((entries) => {
    if (!Array.isArray(entries) || !entries.length)
      return;
    const [entry] = entries;
    let width;
    let height;
    if ("borderBoxSize" in entry) {
      const borderSizeEntry = entry["borderBoxSize"];
      const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
      width = borderSize["inlineSize"];
      height = borderSize["blockSize"];
    } else {
      width = element.offsetWidth;
      height = element.offsetHeight;
    }
    callback({ width, height });
  });
  observer.observe(element, { box: "border-box" });
  return () => observer.unobserve(element);
}

// node_modules/@chakra-ui/react-use-size/dist/index.mjs
var import_react140 = __toESM(require_react(), 1);
var useSafeLayoutEffect4 = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react140.useLayoutEffect : import_react140.useEffect;
function trackMutation(el, cb) {
  var _a8, _b5;
  if (!el || !el.parentElement)
    return;
  const win = (_b5 = (_a8 = el.ownerDocument) == null ? void 0 : _a8.defaultView) != null ? _b5 : window;
  const observer = new win.MutationObserver(() => {
    cb();
  });
  observer.observe(el.parentElement, { childList: true });
  return () => {
    observer.disconnect();
  };
}
function useSizes({
  getNodes,
  observeMutation = true
}) {
  const [sizes24, setSizes] = (0, import_react140.useState)([]);
  const [count, setCount] = (0, import_react140.useState)(0);
  useSafeLayoutEffect4(() => {
    const elements = getNodes();
    const cleanups = elements.map(
      (element, index) => trackElementSize(element, (size2) => {
        setSizes((sizes25) => {
          return [
            ...sizes25.slice(0, index),
            size2,
            ...sizes25.slice(index + 1)
          ];
        });
      })
    );
    if (observeMutation) {
      const firstNode = elements[0];
      cleanups.push(
        trackMutation(firstNode, () => {
          setCount((count2) => count2 + 1);
        })
      );
    }
    return () => {
      cleanups.forEach((cleanup) => {
        cleanup == null ? void 0 : cleanup();
      });
    };
  }, [count]);
  return sizes24;
}
function isRef(ref) {
  return typeof ref === "object" && ref !== null && "current" in ref;
}
function useSize(subject) {
  const [size2] = useSizes({
    observeMutation: false,
    getNodes() {
      const node3 = isRef(subject) ? subject.current : subject;
      return [node3];
    }
  });
  return size2;
}

// node_modules/@chakra-ui/slider/dist/chunk-K3MZ7A5P.mjs
function useRangeSlider(props) {
  const {
    min: min2 = 0,
    max: max2 = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction: direction2 = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled: isDisabled3,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    minStepsBetweenThumbs = 0,
    ...htmlProps
  } = props;
  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction: direction2,
    orientation
  });
  const [valueState, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue != null ? defaultValue : [25, 75],
    onChange
  });
  if (!Array.isArray(valueState)) {
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof valueState}\``
    );
  }
  const [isDragging, setDragging] = (0, import_react141.useState)(false);
  const [isFocused, setFocused] = (0, import_react141.useState)(false);
  const [activeIndex, setActiveIndex] = (0, import_react141.useState)(-1);
  const isInteractive = !(isDisabled3 || isReadOnly);
  const initialValue = (0, import_react141.useRef)(valueState);
  const value = valueState.map((val) => clampValue2(val, min2, max2));
  const spacing2 = minStepsBetweenThumbs * step;
  const valueBounds = getValueBounds(value, min2, max2, spacing2);
  const stateRef = (0, import_react141.useRef)({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  stateRef.current.value = value;
  stateRef.current.valueBounds = valueBounds;
  const reversedValue = value.map((val) => max2 - val + min2);
  const thumbValues = isReversed ? reversedValue : value;
  const thumbPercents = thumbValues.map((val) => valueToPercent2(val, min2, max2));
  const isVertical = orientation === "vertical";
  const trackRef = (0, import_react141.useRef)(null);
  const rootRef = (0, import_react141.useRef)(null);
  const thumbRects = useSizes({
    getNodes() {
      const rootNode = rootRef.current;
      const thumbNodes = rootNode == null ? void 0 : rootNode.querySelectorAll("[role=slider]");
      return thumbNodes ? Array.from(thumbNodes) : [];
    }
  });
  const reactId = (0, import_react141.useId)();
  const uuid = idProp != null ? idProp : reactId;
  const ids = getIds(uuid);
  const getValueFromPointer = (0, import_react141.useCallback)(
    (event) => {
      var _a8, _b5;
      if (!trackRef.current)
        return;
      stateRef.current.eventSource = "pointer";
      const rect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = (_b5 = (_a8 = event.touches) == null ? void 0 : _a8[0]) != null ? _b5 : event;
      const diff = isVertical ? rect.bottom - clientY : clientX - rect.left;
      const length2 = isVertical ? rect.height : rect.width;
      let percent = diff / length2;
      if (isReversed)
        percent = 1 - percent;
      return percentToValue2(percent, min2, max2);
    },
    [isVertical, isReversed, max2, min2]
  );
  const tenSteps = (max2 - min2) / 10;
  const oneStep = step || (max2 - min2) / 100;
  const actions = (0, import_react141.useMemo)(
    () => ({
      setValueAtIndex(index, val) {
        if (!isInteractive)
          return;
        const bounds = stateRef.current.valueBounds[index];
        val = parseFloat(roundValueToStep2(val, bounds.min, oneStep));
        val = clampValue2(val, bounds.min, bounds.max);
        const next2 = [...stateRef.current.value];
        next2[index] = val;
        setValue(next2);
      },
      setActiveIndex,
      stepUp(index, step2 = oneStep) {
        const valueAtIndex = stateRef.current.value[index];
        const next2 = isReversed ? valueAtIndex - step2 : valueAtIndex + step2;
        actions.setValueAtIndex(index, next2);
      },
      stepDown(index, step2 = oneStep) {
        const valueAtIndex = stateRef.current.value[index];
        const next2 = isReversed ? valueAtIndex + step2 : valueAtIndex - step2;
        actions.setValueAtIndex(index, next2);
      },
      reset() {
        setValue(initialValue.current);
      }
    }),
    [oneStep, isReversed, setValue, isInteractive]
  );
  const onKeyDown = (0, import_react141.useCallback)(
    (event) => {
      const eventKey = event.key;
      const keyMap = {
        ArrowRight: () => actions.stepUp(activeIndex),
        ArrowUp: () => actions.stepUp(activeIndex),
        ArrowLeft: () => actions.stepDown(activeIndex),
        ArrowDown: () => actions.stepDown(activeIndex),
        PageUp: () => actions.stepUp(activeIndex, tenSteps),
        PageDown: () => actions.stepDown(activeIndex, tenSteps),
        Home: () => {
          const { min: value2 } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value2);
        },
        End: () => {
          const { max: value2 } = valueBounds[activeIndex];
          actions.setValueAtIndex(activeIndex, value2);
        }
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        stateRef.current.eventSource = "keyboard";
      }
    },
    [actions, activeIndex, tenSteps, valueBounds]
  );
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = (0, import_react141.useMemo)(
    () => getStyles3({
      isReversed,
      orientation,
      thumbRects,
      thumbPercents
    }),
    [isReversed, orientation, thumbPercents, thumbRects]
  );
  const focusThumb = (0, import_react141.useCallback)(
    (index) => {
      var _a8;
      const idx = index != null ? index : activeIndex;
      if (idx !== -1 && focusThumbOnChange) {
        const id = ids.getThumb(idx);
        const thumb = (_a8 = rootRef.current) == null ? void 0 : _a8.ownerDocument.getElementById(id);
        if (thumb) {
          setTimeout(() => thumb.focus());
        }
      }
    },
    [focusThumbOnChange, activeIndex, ids]
  );
  useUpdateEffect(() => {
    if (stateRef.current.eventSource === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(stateRef.current.value);
    }
  }, [value, onChangeEnd]);
  const onPanSessionStart = (event) => {
    const pointValue = getValueFromPointer(event) || 0;
    const distances = stateRef.current.value.map(
      (val) => Math.abs(val - pointValue)
    );
    const closest2 = Math.min(...distances);
    let index = distances.indexOf(closest2);
    const thumbsAtPosition = distances.filter(
      (distance3) => distance3 === closest2
    );
    const isThumbStacked = thumbsAtPosition.length > 1;
    if (isThumbStacked && pointValue > stateRef.current.value[index]) {
      index = index + thumbsAtPosition.length - 1;
    }
    setActiveIndex(index);
    actions.setValueAtIndex(index, pointValue);
    focusThumb(index);
  };
  const onPan = (event) => {
    if (activeIndex == -1)
      return;
    const pointValue = getValueFromPointer(event) || 0;
    setActiveIndex(activeIndex);
    actions.setValueAtIndex(activeIndex, pointValue);
    focusThumb(activeIndex);
  };
  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      if (!isInteractive)
        return;
      setDragging(true);
      onPanSessionStart(event);
      onChangeStart == null ? void 0 : onChangeStart(stateRef.current.value);
    },
    onPanSessionEnd() {
      if (!isInteractive)
        return;
      setDragging(false);
      onChangeEnd == null ? void 0 : onChangeEnd(stateRef.current.value);
    },
    onPan(event) {
      if (!isInteractive)
        return;
      onPan(event);
    }
  });
  const getRootProps = (0, import_react141.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        id: ids.root,
        ref: mergeRefs2(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": ariaAttr3(isDisabled3),
        "data-focused": dataAttr3(isFocused),
        style: { ...props2.style, ...rootStyle }
      };
    },
    [htmlProps, isDisabled3, isFocused, rootStyle, ids]
  );
  const getTrackProps = (0, import_react141.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs2(ref, trackRef),
        id: ids.track,
        "data-disabled": dataAttr3(isDisabled3),
        style: { ...props2.style, ...trackStyle }
      };
    },
    [isDisabled3, trackStyle, ids]
  );
  const getInnerTrackProps = (0, import_react141.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        id: ids.innerTrack,
        style: {
          ...props2.style,
          ...innerTrackStyle
        }
      };
    },
    [innerTrackStyle, ids]
  );
  const getThumbProps = (0, import_react141.useCallback)(
    (props2, ref = null) => {
      var _a8;
      const { index, ...rest } = props2;
      const valueAtIndex = value[index];
      if (valueAtIndex == null) {
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${index}\`. The \`value\` or \`defaultValue\` length is : ${value.length}`
        );
      }
      const bounds = valueBounds[index];
      return {
        ...rest,
        ref,
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: ids.getThumb(index),
        "data-active": dataAttr3(isDragging && activeIndex === index),
        "aria-valuetext": (_a8 = getAriaValueText == null ? void 0 : getAriaValueText(valueAtIndex)) != null ? _a8 : ariaValueText == null ? void 0 : ariaValueText[index],
        "aria-valuemin": bounds.min,
        "aria-valuemax": bounds.max,
        "aria-valuenow": valueAtIndex,
        "aria-orientation": orientation,
        "aria-disabled": ariaAttr3(isDisabled3),
        "aria-readonly": ariaAttr3(isReadOnly),
        "aria-label": ariaLabel == null ? void 0 : ariaLabel[index],
        "aria-labelledby": (ariaLabel == null ? void 0 : ariaLabel[index]) ? void 0 : ariaLabelledBy == null ? void 0 : ariaLabelledBy[index],
        style: { ...props2.style, ...getThumbStyle(index) },
        onKeyDown: callAllHandlers3(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers3(props2.onFocus, () => {
          setFocused(true);
          setActiveIndex(index);
        }),
        onBlur: callAllHandlers3(props2.onBlur, () => {
          setFocused(false);
          setActiveIndex(-1);
        })
      };
    },
    [
      ids,
      value,
      valueBounds,
      isInteractive,
      isDragging,
      activeIndex,
      getAriaValueText,
      ariaValueText,
      orientation,
      isDisabled3,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      onKeyDown,
      setFocused
    ]
  );
  const getOutputProps = (0, import_react141.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        id: ids.output,
        htmlFor: value.map((v, i) => ids.getThumb(i)).join(" "),
        "aria-live": "off"
      };
    },
    [ids, value]
  );
  const getMarkerProps = (0, import_react141.useCallback)(
    (props2, ref = null) => {
      const { value: v, ...rest } = props2;
      const isInRange = !(v < min2 || v > max2);
      const isHighlighted = v >= value[0] && v <= value[value.length - 1];
      let percent = valueToPercent2(v, min2, max2);
      percent = isReversed ? 100 - percent : percent;
      const markerStyle = {
        position: "absolute",
        pointerEvents: "none",
        ...orient2({
          orientation,
          vertical: { bottom: `${percent}%` },
          horizontal: { left: `${percent}%` }
        })
      };
      return {
        ...rest,
        ref,
        id: ids.getMarker(props2.value),
        role: "presentation",
        "aria-hidden": true,
        "data-disabled": dataAttr3(isDisabled3),
        "data-invalid": dataAttr3(!isInRange),
        "data-highlighted": dataAttr3(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled3, isReversed, max2, min2, orientation, value, ids]
  );
  const getInputProps = (0, import_react141.useCallback)(
    (props2, ref = null) => {
      const { index, ...rest } = props2;
      return {
        ...rest,
        ref,
        id: ids.getInput(index),
        type: "hidden",
        value: value[index],
        name: Array.isArray(name) ? name[index] : `${name}-${index}`
      };
    },
    [name, value, ids]
  );
  const state2 = {
    value,
    isFocused,
    isDragging,
    getThumbPercent: (index) => thumbPercents[index],
    getThumbMinValue: (index) => valueBounds[index].min,
    getThumbMaxValue: (index) => valueBounds[index].max
  };
  return {
    state: state2,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps,
    getOutputProps
  };
}
function getValueBounds(arr, min2, max2, spacing2) {
  return arr.map((v, i) => {
    const _min = i === 0 ? min2 : arr[i - 1] + spacing2;
    const _max = i === arr.length - 1 ? max2 : arr[i + 1] - spacing2;
    return { min: _min, max: _max };
  });
}

// node_modules/@chakra-ui/slider/dist/chunk-RD3HQFPG.mjs
var import_react142 = __toESM(require_react(), 1);
var import_jsx_runtime145 = __toESM(require_jsx_runtime(), 1);
var [RangeSliderProvider, useRangeSliderContext] = createContext2({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
});
var [RangeSliderStylesProvider, useRangeSliderStyles] = createContext2({
  name: `RangeSliderStylesContext`,
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
});
var RangeSlider = forwardRef3(
  function RangeSlider2(props, ref) {
    const sliderProps = {
      orientation: "horizontal",
      ...props
    };
    const styles2 = useMultiStyleConfig("Slider", sliderProps);
    const ownProps = omitThemingProps(sliderProps);
    const { direction: direction2 } = useTheme2();
    ownProps.direction = direction2;
    const { getRootProps, ...context } = useRangeSlider(ownProps);
    const ctx = (0, import_react142.useMemo)(
      () => ({ ...context, name: sliderProps.name }),
      [context, sliderProps.name]
    );
    return (0, import_jsx_runtime145.jsx)(RangeSliderProvider, { value: ctx, children: (0, import_jsx_runtime145.jsx)(RangeSliderStylesProvider, { value: styles2, children: (0, import_jsx_runtime145.jsx)(
      chakra.div,
      {
        ...getRootProps({}, ref),
        className: "chakra-slider",
        __css: styles2.container,
        children: sliderProps.children
      }
    ) }) });
  }
);
RangeSlider.displayName = "RangeSlider";
var RangeSliderThumb = forwardRef3(
  function RangeSliderThumb2(props, ref) {
    const { getThumbProps, getInputProps, name } = useRangeSliderContext();
    const styles2 = useRangeSliderStyles();
    const thumbProps = getThumbProps(props, ref);
    return (0, import_jsx_runtime145.jsxs)(
      chakra.div,
      {
        ...thumbProps,
        className: cx3("chakra-slider__thumb", props.className),
        __css: styles2.thumb,
        children: [
          thumbProps.children,
          name && (0, import_jsx_runtime145.jsx)("input", { ...getInputProps({ index: props.index }) })
        ]
      }
    );
  }
);
RangeSliderThumb.displayName = "RangeSliderThumb";
var RangeSliderTrack = forwardRef3(
  function RangeSliderTrack2(props, ref) {
    const { getTrackProps } = useRangeSliderContext();
    const styles2 = useRangeSliderStyles();
    const trackProps = getTrackProps(props, ref);
    return (0, import_jsx_runtime145.jsx)(
      chakra.div,
      {
        ...trackProps,
        className: cx3("chakra-slider__track", props.className),
        __css: styles2.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
RangeSliderTrack.displayName = "RangeSliderTrack";
var RangeSliderFilledTrack = forwardRef3(function RangeSliderFilledTrack2(props, ref) {
  const { getInnerTrackProps } = useRangeSliderContext();
  const styles2 = useRangeSliderStyles();
  const trackProps = getInnerTrackProps(props, ref);
  return (0, import_jsx_runtime145.jsx)(
    chakra.div,
    {
      ...trackProps,
      className: "chakra-slider__filled-track",
      __css: styles2.filledTrack
    }
  );
});
RangeSliderFilledTrack.displayName = "RangeSliderFilledTrack";
var RangeSliderMark = forwardRef3(
  function RangeSliderMark2(props, ref) {
    const { getMarkerProps } = useRangeSliderContext();
    const styles2 = useRangeSliderStyles();
    const markProps = getMarkerProps(props, ref);
    return (0, import_jsx_runtime145.jsx)(
      chakra.div,
      {
        ...markProps,
        className: cx3("chakra-slider__marker", props.className),
        __css: styles2.mark
      }
    );
  }
);
RangeSliderMark.displayName = "RangeSliderMark";

// node_modules/@chakra-ui/slider/dist/chunk-45OCWRAV.mjs
var import_react143 = __toESM(require_react(), 1);
function useSlider(props) {
  var _a8;
  const {
    min: min2 = 0,
    max: max2 = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction: direction2 = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled: isDisabled3,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    ...htmlProps
  } = props;
  const onChangeStart = useCallbackRef(onChangeStartProp);
  const onChangeEnd = useCallbackRef(onChangeEndProp);
  const getAriaValueText = useCallbackRef(getAriaValueTextProp);
  const isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction: direction2,
    orientation
  });
  const [computedValue, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue != null ? defaultValue : getDefaultValue(min2, max2),
    onChange
  });
  const [isDragging, setDragging] = (0, import_react143.useState)(false);
  const [isFocused, setFocused] = (0, import_react143.useState)(false);
  const isInteractive = !(isDisabled3 || isReadOnly);
  const tenSteps = (max2 - min2) / 10;
  const oneStep = step || (max2 - min2) / 100;
  const value = clampValue2(computedValue, min2, max2);
  const reversedValue = max2 - value + min2;
  const trackValue = isReversed ? reversedValue : value;
  const thumbPercent = valueToPercent2(trackValue, min2, max2);
  const isVertical = orientation === "vertical";
  const stateRef = useLatestRef2({
    min: min2,
    max: max2,
    step,
    isDisabled: isDisabled3,
    value,
    isInteractive,
    isReversed,
    isVertical,
    eventSource: null,
    focusThumbOnChange,
    orientation
  });
  const trackRef = (0, import_react143.useRef)(null);
  const thumbRef = (0, import_react143.useRef)(null);
  const rootRef = (0, import_react143.useRef)(null);
  const reactId = (0, import_react143.useId)();
  const uuid = idProp != null ? idProp : reactId;
  const [thumbId, trackId] = [`slider-thumb-${uuid}`, `slider-track-${uuid}`];
  const getValueFromPointer = (0, import_react143.useCallback)(
    (event) => {
      var _a24, _b5;
      if (!trackRef.current)
        return;
      const state22 = stateRef.current;
      state22.eventSource = "pointer";
      const trackRect = trackRef.current.getBoundingClientRect();
      const { clientX, clientY } = (_b5 = (_a24 = event.touches) == null ? void 0 : _a24[0]) != null ? _b5 : event;
      const diff = isVertical ? trackRect.bottom - clientY : clientX - trackRect.left;
      const length2 = isVertical ? trackRect.height : trackRect.width;
      let percent = diff / length2;
      if (isReversed) {
        percent = 1 - percent;
      }
      let nextValue = percentToValue2(percent, state22.min, state22.max);
      if (state22.step) {
        nextValue = parseFloat(
          roundValueToStep2(nextValue, state22.min, state22.step)
        );
      }
      nextValue = clampValue2(nextValue, state22.min, state22.max);
      return nextValue;
    },
    [isVertical, isReversed, stateRef]
  );
  const constrain = (0, import_react143.useCallback)(
    (value2) => {
      const state22 = stateRef.current;
      if (!state22.isInteractive)
        return;
      value2 = parseFloat(roundValueToStep2(value2, state22.min, oneStep));
      value2 = clampValue2(value2, state22.min, state22.max);
      setValue(value2);
    },
    [oneStep, setValue, stateRef]
  );
  const actions = (0, import_react143.useMemo)(
    () => ({
      stepUp(step2 = oneStep) {
        const next2 = isReversed ? value - step2 : value + step2;
        constrain(next2);
      },
      stepDown(step2 = oneStep) {
        const next2 = isReversed ? value + step2 : value - step2;
        constrain(next2);
      },
      reset() {
        constrain(defaultValue || 0);
      },
      stepTo(value2) {
        constrain(value2);
      }
    }),
    [constrain, isReversed, value, oneStep, defaultValue]
  );
  const onKeyDown = (0, import_react143.useCallback)(
    (event) => {
      const state22 = stateRef.current;
      const keyMap = {
        ArrowRight: () => actions.stepUp(),
        ArrowUp: () => actions.stepUp(),
        ArrowLeft: () => actions.stepDown(),
        ArrowDown: () => actions.stepDown(),
        PageUp: () => actions.stepUp(tenSteps),
        PageDown: () => actions.stepDown(tenSteps),
        Home: () => constrain(state22.min),
        End: () => constrain(state22.max)
      };
      const action = keyMap[event.key];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
        state22.eventSource = "keyboard";
      }
    },
    [actions, constrain, tenSteps, stateRef]
  );
  const valueText = (_a8 = getAriaValueText == null ? void 0 : getAriaValueText(value)) != null ? _a8 : ariaValueText;
  const thumbSize = useSize(thumbRef);
  const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = (0, import_react143.useMemo)(() => {
    const state22 = stateRef.current;
    const thumbRect = thumbSize != null ? thumbSize : { width: 0, height: 0 };
    return getStyles3({
      isReversed,
      orientation: state22.orientation,
      thumbRects: [thumbRect],
      thumbPercents: [thumbPercent]
    });
  }, [isReversed, thumbSize, thumbPercent, stateRef]);
  const focusThumb = (0, import_react143.useCallback)(() => {
    const state22 = stateRef.current;
    if (state22.focusThumbOnChange) {
      setTimeout(() => {
        var _a24;
        return (_a24 = thumbRef.current) == null ? void 0 : _a24.focus();
      });
    }
  }, [stateRef]);
  useUpdateEffect(() => {
    const state22 = stateRef.current;
    focusThumb();
    if (state22.eventSource === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(state22.value);
    }
  }, [value, onChangeEnd]);
  function setValueFromPointer(event) {
    const nextValue = getValueFromPointer(event);
    if (nextValue != null && nextValue !== stateRef.current.value) {
      setValue(nextValue);
    }
  }
  usePanEvent(rootRef, {
    onPanSessionStart(event) {
      const state22 = stateRef.current;
      if (!state22.isInteractive)
        return;
      setDragging(true);
      focusThumb();
      setValueFromPointer(event);
      onChangeStart == null ? void 0 : onChangeStart(state22.value);
    },
    onPanSessionEnd() {
      const state22 = stateRef.current;
      if (!state22.isInteractive)
        return;
      setDragging(false);
      onChangeEnd == null ? void 0 : onChangeEnd(state22.value);
    },
    onPan(event) {
      const state22 = stateRef.current;
      if (!state22.isInteractive)
        return;
      setValueFromPointer(event);
    }
  });
  const getRootProps = (0, import_react143.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ...htmlProps,
        ref: mergeRefs2(ref, rootRef),
        tabIndex: -1,
        "aria-disabled": ariaAttr3(isDisabled3),
        "data-focused": dataAttr3(isFocused),
        style: {
          ...props2.style,
          ...rootStyle
        }
      };
    },
    [htmlProps, isDisabled3, isFocused, rootStyle]
  );
  const getTrackProps = (0, import_react143.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs2(ref, trackRef),
        id: trackId,
        "data-disabled": dataAttr3(isDisabled3),
        style: {
          ...props2.style,
          ...trackStyle
        }
      };
    },
    [isDisabled3, trackId, trackStyle]
  );
  const getInnerTrackProps = (0, import_react143.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        style: {
          ...props2.style,
          ...innerTrackStyle
        }
      };
    },
    [innerTrackStyle]
  );
  const getThumbProps = (0, import_react143.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref: mergeRefs2(ref, thumbRef),
        role: "slider",
        tabIndex: isInteractive ? 0 : void 0,
        id: thumbId,
        "data-active": dataAttr3(isDragging),
        "aria-valuetext": valueText,
        "aria-valuemin": min2,
        "aria-valuemax": max2,
        "aria-valuenow": value,
        "aria-orientation": orientation,
        "aria-disabled": ariaAttr3(isDisabled3),
        "aria-readonly": ariaAttr3(isReadOnly),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabel ? void 0 : ariaLabelledBy,
        style: {
          ...props2.style,
          ...getThumbStyle(0)
        },
        onKeyDown: callAllHandlers3(props2.onKeyDown, onKeyDown),
        onFocus: callAllHandlers3(props2.onFocus, () => setFocused(true)),
        onBlur: callAllHandlers3(props2.onBlur, () => setFocused(false))
      };
    },
    [
      isInteractive,
      thumbId,
      isDragging,
      valueText,
      min2,
      max2,
      value,
      orientation,
      isDisabled3,
      isReadOnly,
      ariaLabel,
      ariaLabelledBy,
      getThumbStyle,
      onKeyDown
    ]
  );
  const getMarkerProps = (0, import_react143.useCallback)(
    (props2, ref = null) => {
      const isInRange = !(props2.value < min2 || props2.value > max2);
      const isHighlighted = value >= props2.value;
      const markerPercent = valueToPercent2(props2.value, min2, max2);
      const markerStyle = {
        position: "absolute",
        pointerEvents: "none",
        ...orient3({
          orientation,
          vertical: {
            bottom: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          },
          horizontal: {
            left: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`
          }
        })
      };
      return {
        ...props2,
        ref,
        role: "presentation",
        "aria-hidden": true,
        "data-disabled": dataAttr3(isDisabled3),
        "data-invalid": dataAttr3(!isInRange),
        "data-highlighted": dataAttr3(isHighlighted),
        style: {
          ...props2.style,
          ...markerStyle
        }
      };
    },
    [isDisabled3, isReversed, max2, min2, orientation, value]
  );
  const getInputProps = (0, import_react143.useCallback)(
    (props2 = {}, ref = null) => {
      return {
        ...props2,
        ref,
        type: "hidden",
        value,
        name
      };
    },
    [name, value]
  );
  const state2 = { value, isFocused, isDragging };
  return {
    state: state2,
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps
  };
}
function orient3(options) {
  const { orientation, vertical, horizontal } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
function getDefaultValue(min2, max2) {
  return max2 < min2 ? min2 : min2 + (max2 - min2) / 2;
}

// node_modules/@chakra-ui/slider/dist/chunk-6KSEUUNN.mjs
var import_jsx_runtime146 = __toESM(require_jsx_runtime(), 1);
var [SliderProvider, useSliderContext] = createContext2({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
});
var [SliderStylesProvider, useSliderStyles] = createContext2({
  name: `SliderStylesContext`,
  hookName: `useSliderStyles`,
  providerName: "<Slider />"
});
var Slider = forwardRef3((props, ref) => {
  var _a8;
  const sliderProps = {
    ...props,
    orientation: (_a8 = props == null ? void 0 : props.orientation) != null ? _a8 : "horizontal"
  };
  const styles2 = useMultiStyleConfig("Slider", sliderProps);
  const ownProps = omitThemingProps(sliderProps);
  const { direction: direction2 } = useTheme2();
  ownProps.direction = direction2;
  const { getInputProps, getRootProps, ...context } = useSlider(ownProps);
  const rootProps = getRootProps();
  const inputProps = getInputProps({}, ref);
  return (0, import_jsx_runtime146.jsx)(SliderProvider, { value: context, children: (0, import_jsx_runtime146.jsx)(SliderStylesProvider, { value: styles2, children: (0, import_jsx_runtime146.jsxs)(
    chakra.div,
    {
      ...rootProps,
      className: cx3("chakra-slider", sliderProps.className),
      __css: styles2.container,
      children: [
        sliderProps.children,
        (0, import_jsx_runtime146.jsx)("input", { ...inputProps })
      ]
    }
  ) }) });
});
Slider.displayName = "Slider";
var SliderThumb = forwardRef3((props, ref) => {
  const { getThumbProps } = useSliderContext();
  const styles2 = useSliderStyles();
  const thumbProps = getThumbProps(props, ref);
  return (0, import_jsx_runtime146.jsx)(
    chakra.div,
    {
      ...thumbProps,
      className: cx3("chakra-slider__thumb", props.className),
      __css: styles2.thumb
    }
  );
});
SliderThumb.displayName = "SliderThumb";
var SliderTrack = forwardRef3((props, ref) => {
  const { getTrackProps } = useSliderContext();
  const styles2 = useSliderStyles();
  const trackProps = getTrackProps(props, ref);
  return (0, import_jsx_runtime146.jsx)(
    chakra.div,
    {
      ...trackProps,
      className: cx3("chakra-slider__track", props.className),
      __css: styles2.track
    }
  );
});
SliderTrack.displayName = "SliderTrack";
var SliderFilledTrack = forwardRef3(
  (props, ref) => {
    const { getInnerTrackProps } = useSliderContext();
    const styles2 = useSliderStyles();
    const trackProps = getInnerTrackProps(props, ref);
    return (0, import_jsx_runtime146.jsx)(
      chakra.div,
      {
        ...trackProps,
        className: cx3("chakra-slider__filled-track", props.className),
        __css: styles2.filledTrack
      }
    );
  }
);
SliderFilledTrack.displayName = "SliderFilledTrack";
var SliderMark = forwardRef3((props, ref) => {
  const { getMarkerProps } = useSliderContext();
  const styles2 = useSliderStyles();
  const markProps = getMarkerProps(props, ref);
  return (0, import_jsx_runtime146.jsx)(
    chakra.div,
    {
      ...markProps,
      className: cx3("chakra-slider__marker", props.className),
      __css: styles2.mark
    }
  );
});
SliderMark.displayName = "SliderMark";

// node_modules/@chakra-ui/stat/dist/chunk-W64KV3Y7.mjs
var import_jsx_runtime147 = __toESM(require_jsx_runtime(), 1);
var [StatStylesProvider, useStatStyles] = createContext2({
  name: `StatStylesContext`,
  errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `
});
var Stat = forwardRef3(function Stat2(props, ref) {
  const styles2 = useMultiStyleConfig("Stat", props);
  const statStyles = {
    position: "relative",
    flex: "1 1 0%",
    ...styles2.container
  };
  const { className, children, ...rest } = omitThemingProps(props);
  return (0, import_jsx_runtime147.jsx)(StatStylesProvider, { value: styles2, children: (0, import_jsx_runtime147.jsx)(
    chakra.div,
    {
      ref,
      ...rest,
      className: cx("chakra-stat", className),
      __css: statStyles,
      children: (0, import_jsx_runtime147.jsx)("dl", { children })
    }
  ) });
});
Stat.displayName = "Stat";

// node_modules/@chakra-ui/stat/dist/chunk-ZKKHYQWO.mjs
var import_jsx_runtime148 = __toESM(require_jsx_runtime(), 1);
var StatDownArrow = (props) => (0, import_jsx_runtime148.jsx)(Icon, { color: "red.400", ...props, children: (0, import_jsx_runtime148.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
StatDownArrow.displayName = "StatDownArrow";
function StatUpArrow(props) {
  return (0, import_jsx_runtime148.jsx)(Icon, { color: "green.400", ...props, children: (0, import_jsx_runtime148.jsx)(
    "path",
    {
      fill: "currentColor",
      d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
    }
  ) });
}
StatUpArrow.displayName = "StatUpArrow";
function StatArrow(props) {
  const { type, "aria-label": ariaLabel, ...rest } = props;
  const styles2 = useStatStyles();
  const BaseIcon = type === "increase" ? StatUpArrow : StatDownArrow;
  const defaultAriaLabel = type === "increase" ? "increased by" : "decreased by";
  const label = ariaLabel || defaultAriaLabel;
  return (0, import_jsx_runtime148.jsxs)(import_jsx_runtime148.Fragment, { children: [
    (0, import_jsx_runtime148.jsx)(chakra.span, { srOnly: true, children: label }),
    (0, import_jsx_runtime148.jsx)(BaseIcon, { "aria-hidden": true, ...rest, __css: styles2.icon })
  ] });
}
StatArrow.displayName = "StatArrow";

// node_modules/@chakra-ui/stat/dist/chunk-BSQ2CXML.mjs
var import_jsx_runtime149 = __toESM(require_jsx_runtime(), 1);
var StatGroup = forwardRef3(function StatGroup2(props, ref) {
  return (0, import_jsx_runtime149.jsx)(
    chakra.div,
    {
      ...props,
      ref,
      role: "group",
      className: cx("chakra-stat__group", props.className),
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start"
      }
    }
  );
});
StatGroup.displayName = "StatGroup";

// node_modules/@chakra-ui/stat/dist/chunk-RMNGYPBK.mjs
var import_jsx_runtime150 = __toESM(require_jsx_runtime(), 1);
var StatHelpText = forwardRef3(
  function StatHelpText2(props, ref) {
    const styles2 = useStatStyles();
    return (0, import_jsx_runtime150.jsx)(
      chakra.dd,
      {
        ref,
        ...props,
        className: cx("chakra-stat__help-text", props.className),
        __css: styles2.helpText
      }
    );
  }
);
StatHelpText.displayName = "StatHelpText";

// node_modules/@chakra-ui/stat/dist/chunk-Z457NQVE.mjs
var import_jsx_runtime151 = __toESM(require_jsx_runtime(), 1);
var StatLabel = forwardRef3(function StatLabel2(props, ref) {
  const styles2 = useStatStyles();
  return (0, import_jsx_runtime151.jsx)(
    chakra.dt,
    {
      ref,
      ...props,
      className: cx("chakra-stat__label", props.className),
      __css: styles2.label
    }
  );
});
StatLabel.displayName = "StatLabel";

// node_modules/@chakra-ui/stat/dist/chunk-GF2QC326.mjs
var import_jsx_runtime152 = __toESM(require_jsx_runtime(), 1);
var StatNumber = forwardRef3(function StatNumber2(props, ref) {
  const styles2 = useStatStyles();
  return (0, import_jsx_runtime152.jsx)(
    chakra.dd,
    {
      ref,
      ...props,
      className: cx("chakra-stat__number", props.className),
      __css: {
        ...styles2.number,
        fontFeatureSettings: "pnum",
        fontVariantNumeric: "proportional-nums"
      }
    }
  );
});
StatNumber.displayName = "StatNumber";

// node_modules/@chakra-ui/stepper/dist/chunk-5JULEEQD.mjs
var [StepContextProvider, useStepContext] = createContext2(
  { name: "StepContext" }
);
var [StepperStylesProvider, useStepperStyles] = createStylesContext("Stepper");

// node_modules/@chakra-ui/stepper/dist/chunk-D2YOVTOT.mjs
var import_jsx_runtime153 = __toESM(require_jsx_runtime(), 1);
var StepTitle = forwardRef3(function StepTitle2(props, ref) {
  const { status } = useStepContext();
  const styles2 = useStepperStyles();
  return (0, import_jsx_runtime153.jsx)(
    chakra.h3,
    {
      ref,
      "data-status": status,
      ...props,
      __css: styles2.title,
      className: cx("chakra-step__title", props.className)
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-V5KO42CT.mjs
var import_jsx_runtime154 = __toESM(require_jsx_runtime(), 1);
var Step = forwardRef3(function Step2(props, ref) {
  const { orientation, status, showLastSeparator } = useStepContext();
  const styles2 = useStepperStyles();
  return (0, import_jsx_runtime154.jsx)(
    chakra.div,
    {
      ref,
      "data-status": status,
      "data-orientation": orientation,
      "data-stretch": dataAttr(showLastSeparator),
      __css: styles2.step,
      ...props,
      className: cx("chakra-step", props.className)
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-3CJ44H2L.mjs
var import_react144 = __toESM(require_react(), 1);
var import_jsx_runtime155 = __toESM(require_jsx_runtime(), 1);
var Stepper = forwardRef3(function Stepper2(props, ref) {
  const styles2 = useMultiStyleConfig("Stepper", props);
  const {
    children,
    index,
    orientation = "horizontal",
    showLastSeparator = false,
    ...restProps
  } = omitThemingProps(props);
  const stepElements = import_react144.Children.toArray(children);
  const stepCount = stepElements.length;
  function getStatus(step) {
    if (step < index)
      return "complete";
    if (step > index)
      return "incomplete";
    return "active";
  }
  return (0, import_jsx_runtime155.jsx)(
    chakra.div,
    {
      ref,
      "aria-label": "Progress",
      "data-orientation": orientation,
      ...restProps,
      __css: styles2.stepper,
      className: cx("chakra-stepper", props.className),
      children: (0, import_jsx_runtime155.jsx)(StepperStylesProvider, { value: styles2, children: stepElements.map((child, index2) => (0, import_jsx_runtime155.jsx)(
        StepContextProvider,
        {
          value: {
            index: index2,
            status: getStatus(index2),
            orientation,
            showLastSeparator,
            count: stepCount,
            isFirst: index2 === 0,
            isLast: index2 === stepCount - 1
          },
          children: child
        },
        index2
      )) })
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-YK2WH7TU.mjs
var import_react145 = __toESM(require_react(), 1);
function useSteps(props = {}) {
  const { index = 0, count } = props;
  const [activeStep, setActiveStep] = (0, import_react145.useState)(index);
  const maxStep = typeof count === "number" ? count - 1 : 0;
  const activeStepPercent = activeStep / maxStep;
  return {
    activeStep,
    setActiveStep,
    activeStepPercent,
    isActiveStep(step) {
      return step === activeStep;
    },
    isCompleteStep(step) {
      return step < activeStep;
    },
    isIncompleteStep(step) {
      return step > activeStep;
    },
    getStatus(step) {
      if (step < activeStep)
        return "complete";
      if (step > activeStep)
        return "incomplete";
      return "active";
    },
    goToNext() {
      setActiveStep((step) => {
        return typeof count === "number" ? Math.min(count, step + 1) : step + 1;
      });
    },
    goToPrevious() {
      setActiveStep((step) => Math.max(0, step - 1));
    }
  };
}

// node_modules/@chakra-ui/stepper/dist/chunk-TT4IEOBJ.mjs
var import_jsx_runtime156 = __toESM(require_jsx_runtime(), 1);
var StepDescription = forwardRef3(function StepDescription2(props, ref) {
  const { status } = useStepContext();
  const styles2 = useStepperStyles();
  return (0, import_jsx_runtime156.jsx)(
    chakra.p,
    {
      ref,
      "data-status": status,
      ...props,
      className: cx("chakra-step__description", props.className),
      __css: styles2.description
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-ZVCNMXD3.mjs
var import_jsx_runtime157 = __toESM(require_jsx_runtime(), 1);
function StepStatus(props) {
  const { complete, incomplete, active } = props;
  const context = useStepContext();
  let render = null;
  switch (context.status) {
    case "complete":
      render = runIfFn(complete, context);
      break;
    case "incomplete":
      render = runIfFn(incomplete, context);
      break;
    case "active":
      render = runIfFn(active, context);
      break;
  }
  return render ? (0, import_jsx_runtime157.jsx)(import_jsx_runtime157.Fragment, { children: render }) : null;
}

// node_modules/@chakra-ui/stepper/dist/chunk-BHFVWI2H.mjs
var import_jsx_runtime158 = __toESM(require_jsx_runtime(), 1);
function CheckIcon4(props) {
  return (0, import_jsx_runtime158.jsx)(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      height: "1em",
      width: "1em",
      ...props,
      children: (0, import_jsx_runtime158.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
          clipRule: "evenodd"
        }
      )
    }
  );
}

// node_modules/@chakra-ui/stepper/dist/chunk-2EGA5JYM.mjs
var import_jsx_runtime159 = __toESM(require_jsx_runtime(), 1);
function StepIcon(props) {
  const { status } = useStepContext();
  const styles2 = useStepperStyles();
  const icon = status === "complete" ? CheckIcon4 : void 0;
  return (0, import_jsx_runtime159.jsx)(
    Icon,
    {
      as: icon,
      __css: styles2.icon,
      ...props,
      className: cx("chakra-step__icon", props.className)
    }
  );
}

// node_modules/@chakra-ui/stepper/dist/chunk-D3AI6OO6.mjs
var import_jsx_runtime160 = __toESM(require_jsx_runtime(), 1);
var StepNumber = forwardRef3(function StepNumber2(props, ref) {
  const { children, ...restProps } = props;
  const { status, index } = useStepContext();
  const styles2 = useStepperStyles();
  return (0, import_jsx_runtime160.jsx)(
    chakra.div,
    {
      ref,
      "data-status": status,
      __css: styles2.number,
      ...restProps,
      className: cx("chakra-step__number", props.className),
      children: children || index + 1
    }
  );
});

// node_modules/@chakra-ui/stepper/dist/chunk-4LPX3T3V.mjs
var import_jsx_runtime161 = __toESM(require_jsx_runtime(), 1);
function StepIndicator(props) {
  const { status } = useStepContext();
  const styles2 = useStepperStyles();
  return (0, import_jsx_runtime161.jsx)(
    chakra.div,
    {
      "data-status": status,
      ...props,
      __css: styles2.indicator,
      className: cx("chakra-step__indicator", props.className)
    }
  );
}
function StepIndicatorContent() {
  return (0, import_jsx_runtime161.jsx)(
    StepStatus,
    {
      complete: (0, import_jsx_runtime161.jsx)(StepIcon, {}),
      incomplete: (0, import_jsx_runtime161.jsx)(StepNumber, {}),
      active: (0, import_jsx_runtime161.jsx)(StepNumber, {})
    }
  );
}

// node_modules/@chakra-ui/stepper/dist/chunk-ZAW7TYJD.mjs
var import_jsx_runtime162 = __toESM(require_jsx_runtime(), 1);
var StepSeparator = forwardRef3(function StepSeparator2(props, ref) {
  const { orientation, status, isLast, showLastSeparator } = useStepContext();
  const styles2 = useStepperStyles();
  if (isLast && !showLastSeparator)
    return null;
  return (0, import_jsx_runtime162.jsx)(
    chakra.div,
    {
      ref,
      role: "separator",
      "data-orientation": orientation,
      "data-status": status,
      __css: styles2.separator,
      ...props,
      className: cx("chakra-step__separator", props.className)
    }
  );
});

// node_modules/@chakra-ui/switch/dist/chunk-VTV6N5LE.mjs
var import_react146 = __toESM(require_react(), 1);
var import_jsx_runtime163 = __toESM(require_jsx_runtime(), 1);
var Switch = forwardRef3(function Switch2(props, ref) {
  const styles2 = useMultiStyleConfig("Switch", props);
  const { spacing: spacing2 = "0.5rem", children, ...ownProps } = omitThemingProps(props);
  const {
    getIndicatorProps,
    getInputProps,
    getCheckboxProps,
    getRootProps,
    getLabelProps
  } = useCheckbox(ownProps);
  const containerStyles = (0, import_react146.useMemo)(
    () => ({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      lineHeight: 0,
      ...styles2.container
    }),
    [styles2.container]
  );
  const trackStyles = (0, import_react146.useMemo)(
    () => ({
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      boxSizing: "content-box",
      cursor: "pointer",
      ...styles2.track
    }),
    [styles2.track]
  );
  const labelStyles = (0, import_react146.useMemo)(
    () => ({
      userSelect: "none",
      marginStart: spacing2,
      ...styles2.label
    }),
    [spacing2, styles2.label]
  );
  return (0, import_jsx_runtime163.jsxs)(
    chakra.label,
    {
      ...getRootProps(),
      className: cx("chakra-switch", props.className),
      __css: containerStyles,
      children: [
        (0, import_jsx_runtime163.jsx)("input", { className: "chakra-switch__input", ...getInputProps({}, ref) }),
        (0, import_jsx_runtime163.jsx)(
          chakra.span,
          {
            ...getCheckboxProps(),
            className: "chakra-switch__track",
            __css: trackStyles,
            children: (0, import_jsx_runtime163.jsx)(
              chakra.span,
              {
                __css: styles2.thumb,
                className: "chakra-switch__thumb",
                ...getIndicatorProps()
              }
            )
          }
        ),
        children && (0, import_jsx_runtime163.jsx)(
          chakra.span,
          {
            className: "chakra-switch__label",
            ...getLabelProps(),
            __css: labelStyles,
            children
          }
        )
      ]
    }
  );
});
Switch.displayName = "Switch";

// node_modules/@chakra-ui/table/dist/chunk-GEJVU65N.mjs
var import_jsx_runtime164 = __toESM(require_jsx_runtime(), 1);
var [TableStylesProvider, useTableStyles] = createContext2({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
var Table = forwardRef3((props, ref) => {
  const styles2 = useMultiStyleConfig("Table", props);
  const { className, layout: layout2, ...tableProps } = omitThemingProps(props);
  return (0, import_jsx_runtime164.jsx)(TableStylesProvider, { value: styles2, children: (0, import_jsx_runtime164.jsx)(
    chakra.table,
    {
      ref,
      __css: { tableLayout: layout2, ...styles2.table },
      className: cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";

// node_modules/@chakra-ui/table/dist/chunk-DRZNIHMG.mjs
var import_jsx_runtime165 = __toESM(require_jsx_runtime(), 1);
var Thead = forwardRef3((props, ref) => {
  const styles2 = useTableStyles();
  return (0, import_jsx_runtime165.jsx)(chakra.thead, { ...props, ref, __css: styles2.thead });
});

// node_modules/@chakra-ui/table/dist/chunk-GIQFRSD6.mjs
var import_jsx_runtime166 = __toESM(require_jsx_runtime(), 1);
var Tr = forwardRef3((props, ref) => {
  const styles2 = useTableStyles();
  return (0, import_jsx_runtime166.jsx)(chakra.tr, { ...props, ref, __css: styles2.tr });
});

// node_modules/@chakra-ui/table/dist/chunk-V3K6UINC.mjs
var import_jsx_runtime167 = __toESM(require_jsx_runtime(), 1);
var TableCaption = forwardRef3(
  (props, ref) => {
    const { placement = "bottom", ...rest } = props;
    const styles2 = useTableStyles();
    return (0, import_jsx_runtime167.jsx)(
      chakra.caption,
      {
        ...rest,
        ref,
        __css: {
          ...styles2.caption,
          captionSide: placement
        }
      }
    );
  }
);
TableCaption.displayName = "TableCaption";

// node_modules/@chakra-ui/table/dist/chunk-OA6OURRG.mjs
var import_jsx_runtime168 = __toESM(require_jsx_runtime(), 1);
var TableContainer = forwardRef3(
  (props, ref) => {
    var _a8;
    const { overflow, overflowX, className, ...rest } = props;
    return (0, import_jsx_runtime168.jsx)(
      chakra.div,
      {
        ref,
        className: cx("chakra-table__container", className),
        ...rest,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: (_a8 = overflow != null ? overflow : overflowX) != null ? _a8 : "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
);

// node_modules/@chakra-ui/table/dist/chunk-J4QO5GAJ.mjs
var import_jsx_runtime169 = __toESM(require_jsx_runtime(), 1);
var Tbody = forwardRef3((props, ref) => {
  const styles2 = useTableStyles();
  return (0, import_jsx_runtime169.jsx)(chakra.tbody, { ...props, ref, __css: styles2.tbody });
});

// node_modules/@chakra-ui/table/dist/chunk-T2WCTPDH.mjs
var import_jsx_runtime170 = __toESM(require_jsx_runtime(), 1);
var Td = forwardRef3(
  ({ isNumeric: isNumeric3, ...rest }, ref) => {
    const styles2 = useTableStyles();
    return (0, import_jsx_runtime170.jsx)(
      chakra.td,
      {
        ...rest,
        ref,
        __css: styles2.td,
        "data-is-numeric": isNumeric3
      }
    );
  }
);

// node_modules/@chakra-ui/table/dist/chunk-B5H2YLEF.mjs
var import_jsx_runtime171 = __toESM(require_jsx_runtime(), 1);
var Tfoot = forwardRef3((props, ref) => {
  const styles2 = useTableStyles();
  return (0, import_jsx_runtime171.jsx)(chakra.tfoot, { ...props, ref, __css: styles2.tfoot });
});

// node_modules/@chakra-ui/table/dist/chunk-MGVPL3OH.mjs
var import_jsx_runtime172 = __toESM(require_jsx_runtime(), 1);
var Th = forwardRef3(
  ({ isNumeric: isNumeric3, ...rest }, ref) => {
    const styles2 = useTableStyles();
    return (0, import_jsx_runtime172.jsx)(
      chakra.th,
      {
        ...rest,
        ref,
        __css: styles2.th,
        "data-is-numeric": isNumeric3
      }
    );
  }
);

// node_modules/@chakra-ui/tabs/dist/chunk-NXSBASJ3.mjs
var import_react147 = __toESM(require_react(), 1);
var [
  TabsDescendantsProvider,
  useTabsDescendantsContext,
  useTabsDescendants,
  useTabsDescendant
] = createDescendantContext();
function useTabs(props) {
  var _a8;
  const {
    defaultIndex,
    onChange,
    index,
    isManual,
    isLazy,
    lazyBehavior = "unmount",
    orientation = "horizontal",
    direction: direction2 = "ltr",
    ...htmlProps
  } = props;
  const [focusedIndex, setFocusedIndex] = (0, import_react147.useState)(defaultIndex != null ? defaultIndex : 0);
  const [selectedIndex, setSelectedIndex] = useControllableState({
    defaultValue: defaultIndex != null ? defaultIndex : 0,
    value: index,
    onChange
  });
  (0, import_react147.useEffect)(() => {
    if (index != null) {
      setFocusedIndex(index);
    }
  }, [index]);
  const descendants = useTabsDescendants();
  const uuid = (0, import_react147.useId)();
  const uid = (_a8 = props.id) != null ? _a8 : uuid;
  const id = `tabs-${uid}`;
  return {
    id,
    selectedIndex,
    focusedIndex,
    setSelectedIndex,
    setFocusedIndex,
    isManual,
    isLazy,
    lazyBehavior,
    orientation,
    descendants,
    direction: direction2,
    htmlProps
  };
}
var [TabsProvider, useTabsContext] = createContext2({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function useTabList(props) {
  const { focusedIndex, orientation, direction: direction2 } = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const onKeyDown = (0, import_react147.useCallback)(
    (event) => {
      const nextTab = () => {
        var _a8;
        const next2 = descendants.nextEnabled(focusedIndex);
        if (next2)
          (_a8 = next2.node) == null ? void 0 : _a8.focus();
      };
      const prevTab = () => {
        var _a8;
        const prev2 = descendants.prevEnabled(focusedIndex);
        if (prev2)
          (_a8 = prev2.node) == null ? void 0 : _a8.focus();
      };
      const firstTab = () => {
        var _a8;
        const first = descendants.firstEnabled();
        if (first)
          (_a8 = first.node) == null ? void 0 : _a8.focus();
      };
      const lastTab = () => {
        var _a8;
        const last = descendants.lastEnabled();
        if (last)
          (_a8 = last.node) == null ? void 0 : _a8.focus();
      };
      const isHorizontal = orientation === "horizontal";
      const isVertical = orientation === "vertical";
      const eventKey = event.key;
      const ArrowStart = direction2 === "ltr" ? "ArrowLeft" : "ArrowRight";
      const ArrowEnd = direction2 === "ltr" ? "ArrowRight" : "ArrowLeft";
      const keyMap = {
        [ArrowStart]: () => isHorizontal && prevTab(),
        [ArrowEnd]: () => isHorizontal && nextTab(),
        ArrowDown: () => isVertical && nextTab(),
        ArrowUp: () => isVertical && prevTab(),
        Home: firstTab,
        End: lastTab
      };
      const action = keyMap[eventKey];
      if (action) {
        event.preventDefault();
        action(event);
      }
    },
    [descendants, focusedIndex, orientation, direction2]
  );
  return {
    ...props,
    role: "tablist",
    "aria-orientation": orientation,
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
  };
}
function useTab(props) {
  const { isDisabled: isDisabled3 = false, isFocusable: isFocusable3 = false, ...htmlProps } = props;
  const { setSelectedIndex, isManual, id, setFocusedIndex, selectedIndex } = useTabsContext();
  const { index, register } = useTabsDescendant({
    disabled: isDisabled3 && !isFocusable3
  });
  const isSelected = index === selectedIndex;
  const onClick = () => {
    setSelectedIndex(index);
  };
  const onFocus3 = () => {
    setFocusedIndex(index);
    const isDisabledButFocusable = isDisabled3 && isFocusable3;
    const shouldSelect = !isManual && !isDisabledButFocusable;
    if (shouldSelect) {
      setSelectedIndex(index);
    }
  };
  const clickableProps = useClickable({
    ...htmlProps,
    ref: mergeRefs2(register, props.ref),
    isDisabled: isDisabled3,
    isFocusable: isFocusable3,
    onClick: callAllHandlers(props.onClick, onClick)
  });
  const type = "button";
  return {
    ...clickableProps,
    id: makeTabId(id, index),
    role: "tab",
    tabIndex: isSelected ? 0 : -1,
    type,
    "aria-selected": isSelected,
    "aria-controls": makeTabPanelId(id, index),
    onFocus: isDisabled3 ? void 0 : callAllHandlers(props.onFocus, onFocus3)
  };
}
var [TabPanelProvider, useTabPanelContext] = createContext2({});
function useTabPanels(props) {
  const context = useTabsContext();
  const { id, selectedIndex } = context;
  const validChildren = getValidChildren2(props.children);
  const children = validChildren.map(
    (child, index) => (0, import_react147.createElement)(
      TabPanelProvider,
      {
        key: index,
        value: {
          isSelected: index === selectedIndex,
          id: makeTabPanelId(id, index),
          tabId: makeTabId(id, index),
          selectedIndex
        }
      },
      child
    )
  );
  return { ...props, children };
}
function useTabPanel(props) {
  const { children, ...htmlProps } = props;
  const { isLazy, lazyBehavior } = useTabsContext();
  const { isSelected, id, tabId } = useTabPanelContext();
  const hasBeenSelected = (0, import_react147.useRef)(false);
  if (isSelected) {
    hasBeenSelected.current = true;
  }
  const shouldRenderChildren = lazyDisclosure({
    wasSelected: hasBeenSelected.current,
    isSelected,
    enabled: isLazy,
    mode: lazyBehavior
  });
  return {
    // Puts the tabpanel in the page `Tab` sequence.
    tabIndex: 0,
    ...htmlProps,
    children: shouldRenderChildren ? children : null,
    role: "tabpanel",
    "aria-labelledby": tabId,
    hidden: !isSelected,
    id
  };
}
function useTabIndicator() {
  const context = useTabsContext();
  const descendants = useTabsDescendantsContext();
  const { selectedIndex, orientation } = context;
  const isHorizontal = orientation === "horizontal";
  const isVertical = orientation === "vertical";
  const [rect, setRect] = (0, import_react147.useState)(() => {
    if (isHorizontal)
      return { left: 0, width: 0 };
    if (isVertical)
      return { top: 0, height: 0 };
    return void 0;
  });
  const [hasMeasured, setHasMeasured] = (0, import_react147.useState)(false);
  useSafeLayoutEffect(() => {
    if (selectedIndex == null)
      return;
    const tab = descendants.item(selectedIndex);
    if (tab == null)
      return;
    if (isHorizontal) {
      setRect({ left: tab.node.offsetLeft, width: tab.node.offsetWidth });
    }
    if (isVertical) {
      setRect({ top: tab.node.offsetTop, height: tab.node.offsetHeight });
    }
    const id = requestAnimationFrame(() => {
      setHasMeasured(true);
    });
    return () => {
      if (id) {
        cancelAnimationFrame(id);
      }
    };
  }, [selectedIndex, isHorizontal, isVertical, descendants]);
  return {
    position: "absolute",
    transitionProperty: "left, right, top, bottom, height, width",
    transitionDuration: hasMeasured ? "200ms" : "0ms",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    ...rect
  };
}
function makeTabId(id, index) {
  return `${id}--tab-${index}`;
}
function makeTabPanelId(id, index) {
  return `${id}--tabpanel-${index}`;
}

// node_modules/@chakra-ui/tabs/dist/chunk-GTRZJDIL.mjs
var import_react148 = __toESM(require_react(), 1);
var import_jsx_runtime173 = __toESM(require_jsx_runtime(), 1);
var [TabsStylesProvider, useTabsStyles] = createContext2({
  name: `TabsStylesContext`,
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
});
var Tabs = forwardRef3(function Tabs2(props, ref) {
  const styles2 = useMultiStyleConfig("Tabs", props);
  const { children, className, ...rest } = omitThemingProps(props);
  const { htmlProps, descendants, ...ctx } = useTabs(rest);
  const context = (0, import_react148.useMemo)(() => ctx, [ctx]);
  const { isFitted: _, ...rootProps } = htmlProps;
  const tabsStyles = {
    position: "relative",
    ...styles2.root
  };
  return (0, import_jsx_runtime173.jsx)(TabsDescendantsProvider, { value: descendants, children: (0, import_jsx_runtime173.jsx)(TabsProvider, { value: context, children: (0, import_jsx_runtime173.jsx)(TabsStylesProvider, { value: styles2, children: (0, import_jsx_runtime173.jsx)(
    chakra.div,
    {
      className: cx("chakra-tabs", className),
      ref,
      ...rootProps,
      __css: tabsStyles,
      children
    }
  ) }) }) });
});
Tabs.displayName = "Tabs";

// node_modules/@chakra-ui/tabs/dist/chunk-XYXC6MAF.mjs
var import_jsx_runtime174 = __toESM(require_jsx_runtime(), 1);
var TabIndicator = forwardRef3(
  function TabIndicator2(props, ref) {
    const indicatorStyle = useTabIndicator();
    const style = {
      ...props.style,
      ...indicatorStyle
    };
    const styles2 = useTabsStyles();
    return (0, import_jsx_runtime174.jsx)(
      chakra.div,
      {
        ref,
        ...props,
        className: cx("chakra-tabs__tab-indicator", props.className),
        style,
        __css: styles2.indicator
      }
    );
  }
);
TabIndicator.displayName = "TabIndicator";

// node_modules/@chakra-ui/tabs/dist/chunk-BXDFYXZJ.mjs
var import_jsx_runtime175 = __toESM(require_jsx_runtime(), 1);
var TabList = forwardRef3(function TabList2(props, ref) {
  const tablistProps = useTabList({ ...props, ref });
  const styles2 = useTabsStyles();
  const tablistStyles = {
    display: "flex",
    ...styles2.tablist
  };
  return (0, import_jsx_runtime175.jsx)(
    chakra.div,
    {
      ...tablistProps,
      className: cx("chakra-tabs__tablist", props.className),
      __css: tablistStyles
    }
  );
});
TabList.displayName = "TabList";

// node_modules/@chakra-ui/tabs/dist/chunk-KGTDXOFZ.mjs
var import_jsx_runtime176 = __toESM(require_jsx_runtime(), 1);
var TabPanel = forwardRef3(function TabPanel2(props, ref) {
  const panelProps = useTabPanel({ ...props, ref });
  const styles2 = useTabsStyles();
  return (0, import_jsx_runtime176.jsx)(
    chakra.div,
    {
      outline: "0",
      ...panelProps,
      className: cx("chakra-tabs__tab-panel", props.className),
      __css: styles2.tabpanel
    }
  );
});
TabPanel.displayName = "TabPanel";

// node_modules/@chakra-ui/tabs/dist/chunk-4YMKQ5D4.mjs
var import_jsx_runtime177 = __toESM(require_jsx_runtime(), 1);
var TabPanels = forwardRef3(function TabPanels2(props, ref) {
  const panelsProps = useTabPanels(props);
  const styles2 = useTabsStyles();
  return (0, import_jsx_runtime177.jsx)(
    chakra.div,
    {
      ...panelsProps,
      width: "100%",
      ref,
      className: cx("chakra-tabs__tab-panels", props.className),
      __css: styles2.tabpanels
    }
  );
});
TabPanels.displayName = "TabPanels";

// node_modules/@chakra-ui/tabs/dist/chunk-IAXSQ4X2.mjs
var import_jsx_runtime178 = __toESM(require_jsx_runtime(), 1);
var Tab = forwardRef3(function Tab2(props, ref) {
  const styles2 = useTabsStyles();
  const tabProps = useTab({ ...props, ref });
  const tabStyles = {
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...styles2.tab
  };
  return (0, import_jsx_runtime178.jsx)(
    chakra.button,
    {
      ...tabProps,
      className: cx("chakra-tabs__tab", props.className),
      __css: tabStyles
    }
  );
});
Tab.displayName = "Tab";

// node_modules/@chakra-ui/tag/dist/chunk-RPO2WXNL.mjs
var import_jsx_runtime179 = __toESM(require_jsx_runtime(), 1);
var [TagStylesProvider, useTagStyles] = createContext2({
  name: `TagStylesContext`,
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
});
var Tag = forwardRef3((props, ref) => {
  const styles2 = useMultiStyleConfig("Tag", props);
  const ownProps = omitThemingProps(props);
  const containerStyles = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...styles2.container
  };
  return (0, import_jsx_runtime179.jsx)(TagStylesProvider, { value: styles2, children: (0, import_jsx_runtime179.jsx)(chakra.span, { ref, ...ownProps, __css: containerStyles }) });
});
Tag.displayName = "Tag";
var TagLabel = forwardRef3((props, ref) => {
  const styles2 = useTagStyles();
  return (0, import_jsx_runtime179.jsx)(chakra.span, { ref, noOfLines: 1, ...props, __css: styles2.label });
});
TagLabel.displayName = "TagLabel";
var TagLeftIcon = forwardRef3((props, ref) => (0, import_jsx_runtime179.jsx)(Icon, { ref, verticalAlign: "top", marginEnd: "0.5rem", ...props }));
TagLeftIcon.displayName = "TagLeftIcon";
var TagRightIcon = forwardRef3((props, ref) => (0, import_jsx_runtime179.jsx)(Icon, { ref, verticalAlign: "top", marginStart: "0.5rem", ...props }));
TagRightIcon.displayName = "TagRightIcon";
var TagCloseIcon = (props) => (0, import_jsx_runtime179.jsx)(Icon, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...props, children: (0, import_jsx_runtime179.jsx)(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
TagCloseIcon.displayName = "TagCloseIcon";
var TagCloseButton = forwardRef3(
  (props, ref) => {
    const { isDisabled: isDisabled3, children, ...rest } = props;
    const styles2 = useTagStyles();
    const btnStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...styles2.closeButton
    };
    return (0, import_jsx_runtime179.jsx)(
      chakra.button,
      {
        ref,
        "aria-label": "close",
        ...rest,
        type: "button",
        disabled: isDisabled3,
        __css: btnStyles,
        children: children || (0, import_jsx_runtime179.jsx)(TagCloseIcon, {})
      }
    );
  }
);
TagCloseButton.displayName = "TagCloseButton";

// node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs
var import_jsx_runtime180 = __toESM(require_jsx_runtime(), 1);
function omit6(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
var omitted = ["h", "minH", "height", "minHeight"];
var Textarea = forwardRef3((props, ref) => {
  const styles2 = useStyleConfig("Textarea", props);
  const { className, rows, ...rest } = omitThemingProps(props);
  const textareaProps = useFormControl(rest);
  const textareaStyles = rows ? omit6(styles2, omitted) : styles2;
  return (0, import_jsx_runtime180.jsx)(
    chakra.textarea,
    {
      ref,
      rows,
      ...textareaProps,
      className: cx("chakra-textarea", className),
      __css: textareaStyles
    }
  );
});
Textarea.displayName = "Textarea";

// node_modules/@chakra-ui/tooltip/dist/chunk-XRZH7COS.mjs
var scale = {
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15, easings: "easeInOut" },
      scale: { duration: 0.2, easings: "easeInOut" }
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { easings: "easeOut", duration: 0.2 },
      scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] }
    }
  }
};

// node_modules/@chakra-ui/tooltip/dist/chunk-P7BNLW77.mjs
var import_react149 = __toESM(require_react(), 1);
var getDoc = (ref) => {
  var _a8;
  return ((_a8 = ref.current) == null ? void 0 : _a8.ownerDocument) || document;
};
var getWin = (ref) => {
  var _a8, _b5;
  return ((_b5 = (_a8 = ref.current) == null ? void 0 : _a8.ownerDocument) == null ? void 0 : _b5.defaultView) || window;
};
function useTooltip(props = {}) {
  const {
    openDelay = 0,
    closeDelay = 0,
    closeOnClick = true,
    closeOnMouseDown,
    closeOnScroll,
    closeOnPointerDown = closeOnMouseDown,
    closeOnEsc = true,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    placement,
    id,
    isOpen: isOpenProp,
    defaultIsOpen,
    arrowSize = 10,
    arrowShadowColor,
    arrowPadding,
    modifiers,
    isDisabled: isDisabled3,
    gutter,
    offset: offset2,
    direction: direction2,
    ...htmlProps
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure2({
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp
  });
  const { referenceRef, getPopperProps, getArrowInnerProps, getArrowProps } = usePopper({
    enabled: isOpen,
    placement,
    arrowPadding,
    modifiers,
    gutter,
    offset: offset2,
    direction: direction2
  });
  const uuid = (0, import_react149.useId)();
  const uid = id != null ? id : uuid;
  const tooltipId = `tooltip-${uid}`;
  const ref = (0, import_react149.useRef)(null);
  const enterTimeout = (0, import_react149.useRef)();
  const clearEnterTimeout = (0, import_react149.useCallback)(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
      enterTimeout.current = void 0;
    }
  }, []);
  const exitTimeout = (0, import_react149.useRef)();
  const clearExitTimeout = (0, import_react149.useCallback)(() => {
    if (exitTimeout.current) {
      clearTimeout(exitTimeout.current);
      exitTimeout.current = void 0;
    }
  }, []);
  const closeNow = (0, import_react149.useCallback)(() => {
    clearExitTimeout();
    onClose();
  }, [onClose, clearExitTimeout]);
  const dispatchCloseEvent = useCloseEvent(ref, closeNow);
  const openWithDelay = (0, import_react149.useCallback)(() => {
    if (!isDisabled3 && !enterTimeout.current) {
      if (isOpen)
        dispatchCloseEvent();
      const win = getWin(ref);
      enterTimeout.current = win.setTimeout(onOpen, openDelay);
    }
  }, [dispatchCloseEvent, isDisabled3, isOpen, onOpen, openDelay]);
  const closeWithDelay = (0, import_react149.useCallback)(() => {
    clearEnterTimeout();
    const win = getWin(ref);
    exitTimeout.current = win.setTimeout(closeNow, closeDelay);
  }, [closeDelay, closeNow, clearEnterTimeout]);
  const onClick = (0, import_react149.useCallback)(() => {
    if (isOpen && closeOnClick) {
      closeWithDelay();
    }
  }, [closeOnClick, closeWithDelay, isOpen]);
  const onPointerDown = (0, import_react149.useCallback)(() => {
    if (isOpen && closeOnPointerDown) {
      closeWithDelay();
    }
  }, [closeOnPointerDown, closeWithDelay, isOpen]);
  const onKeyDown = (0, import_react149.useCallback)(
    (event) => {
      if (isOpen && event.key === "Escape") {
        closeWithDelay();
      }
    },
    [isOpen, closeWithDelay]
  );
  useEventListener(
    () => getDoc(ref),
    "keydown",
    closeOnEsc ? onKeyDown : void 0
  );
  useEventListener(
    () => {
      if (!closeOnScroll)
        return null;
      const node3 = ref.current;
      if (!node3)
        return null;
      const scrollParent = getScrollParent(node3);
      return scrollParent.localName === "body" ? getWin(ref) : scrollParent;
    },
    "scroll",
    () => {
      if (isOpen && closeOnScroll) {
        closeNow();
      }
    },
    { passive: true, capture: true }
  );
  (0, import_react149.useEffect)(() => {
    if (!isDisabled3)
      return;
    clearEnterTimeout();
    if (isOpen)
      onClose();
  }, [isDisabled3, isOpen, onClose, clearEnterTimeout]);
  (0, import_react149.useEffect)(() => {
    return () => {
      clearEnterTimeout();
      clearExitTimeout();
    };
  }, [clearEnterTimeout, clearExitTimeout]);
  useEventListener(() => ref.current, "pointerleave", closeWithDelay);
  const getTriggerProps = (0, import_react149.useCallback)(
    (props2 = {}, _ref2 = null) => {
      const triggerProps = {
        ...props2,
        ref: mergeRefs2(ref, _ref2, referenceRef),
        onPointerEnter: callAllHandlers(props2.onPointerEnter, (e) => {
          if (e.pointerType === "touch")
            return;
          openWithDelay();
        }),
        onClick: callAllHandlers(props2.onClick, onClick),
        onPointerDown: callAllHandlers(props2.onPointerDown, onPointerDown),
        onFocus: callAllHandlers(props2.onFocus, openWithDelay),
        onBlur: callAllHandlers(props2.onBlur, closeWithDelay),
        "aria-describedby": isOpen ? tooltipId : void 0
      };
      return triggerProps;
    },
    [
      openWithDelay,
      closeWithDelay,
      onPointerDown,
      isOpen,
      tooltipId,
      onClick,
      referenceRef
    ]
  );
  const getTooltipPositionerProps = (0, import_react149.useCallback)(
    (props2 = {}, forwardedRef = null) => getPopperProps(
      {
        ...props2,
        style: {
          ...props2.style,
          [cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
          [cssVars.arrowShadowColor.var]: arrowShadowColor
        }
      },
      forwardedRef
    ),
    [getPopperProps, arrowSize, arrowShadowColor]
  );
  const getTooltipProps = (0, import_react149.useCallback)(
    (props2 = {}, ref2 = null) => {
      const styles2 = {
        ...props2.style,
        position: "relative",
        transformOrigin: cssVars.transformOrigin.varRef
      };
      return {
        ref: ref2,
        ...htmlProps,
        ...props2,
        id: tooltipId,
        role: "tooltip",
        style: styles2
      };
    },
    [htmlProps, tooltipId]
  );
  return {
    isOpen,
    show: openWithDelay,
    hide: closeWithDelay,
    getTriggerProps,
    getTooltipProps,
    getTooltipPositionerProps,
    getArrowProps,
    getArrowInnerProps
  };
}
var closeEventName = "chakra-ui:close-tooltip";
function useCloseEvent(ref, close) {
  (0, import_react149.useEffect)(() => {
    const doc = getDoc(ref);
    doc.addEventListener(closeEventName, close);
    return () => doc.removeEventListener(closeEventName, close);
  }, [close, ref]);
  return () => {
    const doc = getDoc(ref);
    const win = getWin(ref);
    doc.dispatchEvent(new win.CustomEvent(closeEventName));
  };
}

// node_modules/@chakra-ui/tooltip/dist/chunk-TK6VMDNP.mjs
var import_react150 = __toESM(require_react(), 1);
var import_jsx_runtime181 = __toESM(require_jsx_runtime(), 1);
function omit7(object2, keysToOmit = []) {
  const clone = Object.assign({}, object2);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
function pick4(object2, keysToPick) {
  const result = {};
  for (const key of keysToPick) {
    if (key in object2) {
      result[key] = object2[key];
    }
  }
  return result;
}
var MotionDiv3 = chakra(motion.div);
var Tooltip = forwardRef3((props, ref) => {
  var _a8, _b5;
  const styles2 = useStyleConfig("Tooltip", props);
  const ownProps = omitThemingProps(props);
  const theme2 = useTheme2();
  const {
    children,
    label,
    shouldWrapChildren,
    "aria-label": ariaLabel,
    hasArrow,
    bg,
    portalProps,
    background: background2,
    backgroundColor,
    bgColor,
    motionProps,
    ...rest
  } = ownProps;
  const userDefinedBg = (_b5 = (_a8 = background2 != null ? background2 : backgroundColor) != null ? _a8 : bg) != null ? _b5 : bgColor;
  if (userDefinedBg) {
    styles2.bg = userDefinedBg;
    const bgVar = getCSSVar(theme2, "colors", userDefinedBg);
    styles2[cssVars.arrowBg.var] = bgVar;
  }
  const tooltip = useTooltip({ ...rest, direction: theme2.direction });
  const shouldWrap = typeof children === "string" || shouldWrapChildren;
  let trigger2;
  if (shouldWrap) {
    trigger2 = (0, import_jsx_runtime181.jsx)(
      chakra.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...tooltip.getTriggerProps(),
        children
      }
    );
  } else {
    const child = import_react150.Children.only(children);
    trigger2 = (0, import_react150.cloneElement)(
      child,
      tooltip.getTriggerProps(child.props, child.ref)
    );
  }
  const hasAriaLabel = !!ariaLabel;
  const _tooltipProps = tooltip.getTooltipProps({}, ref);
  const tooltipProps = hasAriaLabel ? omit7(_tooltipProps, ["role", "id"]) : _tooltipProps;
  const srOnlyProps = pick4(_tooltipProps, ["role", "id"]);
  if (!label) {
    return (0, import_jsx_runtime181.jsx)(import_jsx_runtime181.Fragment, { children });
  }
  return (0, import_jsx_runtime181.jsxs)(import_jsx_runtime181.Fragment, { children: [
    trigger2,
    (0, import_jsx_runtime181.jsx)(AnimatePresence, { children: tooltip.isOpen && (0, import_jsx_runtime181.jsx)(Portal, { ...portalProps, children: (0, import_jsx_runtime181.jsx)(
      chakra.div,
      {
        ...tooltip.getTooltipPositionerProps(),
        __css: {
          zIndex: styles2.zIndex,
          pointerEvents: "none"
        },
        children: (0, import_jsx_runtime181.jsxs)(
          MotionDiv3,
          {
            variants: scale,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...motionProps,
            ...tooltipProps,
            __css: styles2,
            children: [
              label,
              hasAriaLabel && (0, import_jsx_runtime181.jsx)(chakra.span, { srOnly: true, ...srOnlyProps, children: ariaLabel }),
              hasArrow && (0, import_jsx_runtime181.jsx)(
                chakra.div,
                {
                  "data-popper-arrow": true,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: (0, import_jsx_runtime181.jsx)(
                    chakra.div,
                    {
                      "data-popper-arrow-inner": true,
                      className: "chakra-tooltip__arrow",
                      __css: { bg: styles2.bg }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ) }) })
  ] });
});
Tooltip.displayName = "Tooltip";
export {
  AbsoluteCenter,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProvider,
  Alert,
  AlertDescription,
  AlertDialog,
  ModalBody as AlertDialogBody,
  ModalCloseButton as AlertDialogCloseButton,
  AlertDialogContent,
  ModalFooter as AlertDialogFooter,
  ModalHeader as AlertDialogHeader,
  ModalOverlay as AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  ButtonSpinner,
  CSSPolyfill,
  CSSReset,
  CSSVars,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  ChakraBaseProvider,
  ChakraProvider2 as ChakraProvider,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  Circle,
  CircularProgress,
  CircularProgressLabel,
  CloseButton,
  Code,
  Collapse,
  ColorModeContext,
  ColorModeProvider,
  ColorModeScript,
  Container2 as Container,
  ControlBox,
  DarkMode,
  Divider,
  Drawer,
  ModalBody as DrawerBody,
  ModalCloseButton as DrawerCloseButton,
  DrawerContent,
  ModalFooter as DrawerFooter,
  ModalHeader as DrawerHeader,
  ModalOverlay as DrawerOverlay,
  TRANSITION_EASINGS as EASINGS,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  EnvironmentProvider,
  Fade,
  Flex,
  FocusLock2 as FocusLock,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  GenericAvatarIcon,
  GlobalStyle,
  Grid,
  GridItem,
  HStack,
  Heading,
  Hide,
  Highlight,
  Icon,
  IconButton,
  Image2 as Image,
  Img,
  Indicator,
  Input,
  InputAddon,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Kbd,
  LightMode,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
  Mark,
  Menu,
  MenuButton,
  MenuCommand,
  MenuDescendantsProvider,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  MenuProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContextProvider,
  ModalFocusScope,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  OrderedList,
  PinInput,
  PinInputDescendantsProvider,
  PinInputField,
  PinInputProvider,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  PortalManager,
  Progress,
  ProgressLabel,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderProvider,
  RangeSliderThumb,
  RangeSliderTrack,
  RequiredIndicator,
  ScaleFade,
  Select,
  SelectField,
  Show,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  SkipNavContent,
  SkipNavLink,
  Slide,
  SlideFade,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderProvider,
  SliderThumb,
  SliderTrack,
  Spacer,
  Spinner,
  Square,
  Stack,
  StackDivider,
  StackItem,
  Stat,
  StatArrow,
  StatDownArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatUpArrow,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepIndicatorContent,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  StylesProvider,
  Switch,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  TabsDescendantsProvider,
  TabsProvider,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Tbody,
  Td,
  Text,
  Textarea,
  Tfoot,
  Th,
  Thead,
  ThemeProvider3 as ThemeProvider,
  Toast,
  ToastOptionProvider,
  ToastProvider,
  Tooltip,
  Tr,
  UnorderedList,
  VStack,
  VisuallyHidden,
  VisuallyHiddenInput,
  Wrap,
  WrapItem,
  addPrefix,
  assignRef4 as assignRef,
  background,
  baseTheme,
  border,
  calc,
  chakra,
  color,
  cookieStorageManager,
  cookieStorageManagerSSR,
  createCookieStorageManager,
  createIcon,
  createLocalStorageManager,
  createMultiStyleConfigHelpers,
  createRenderToast,
  createStandaloneToast,
  createStylesContext,
  createToastFn,
  css3 as css,
  cssVar,
  defineCssVars,
  defineStyle,
  defineStyleConfig,
  effect,
  extendBaseTheme,
  extendTheme,
  fadeConfig,
  filter,
  flattenTokens,
  flexbox,
  forwardRef3 as forwardRef,
  getCSSVar,
  getCss,
  getScriptSrc,
  getSlideTransition,
  getToastPlacement,
  getToken,
  grid,
  interactivity,
  isChakraTheme,
  isStyleProp,
  keyframes,
  layout,
  layoutPropNames,
  list,
  localStorageManager,
  mergeThemeOverride,
  omitThemingProps,
  others,
  cssVars as popperCSSVars,
  position2 as position,
  propNames,
  pseudoPropNames,
  pseudoSelectors,
  requiredChakraThemeKeys,
  resolveStyleConfig,
  ring,
  scaleFadeConfig,
  scroll,
  shouldForwardProp,
  slideFadeConfig,
  space,
  styled,
  systemProps,
  textDecoration,
  theme,
  toCSSObject,
  toCSSVar,
  toVarDefinition,
  toVarReference,
  tokenToCSSVar,
  transform,
  transition,
  typography,
  useAccordion,
  useAccordionContext,
  useAccordionItem,
  useAccordionItemState,
  useAccordionStyles,
  useAlertStyles,
  useAnimationState,
  useAvatarStyles,
  useBoolean,
  useBreadcrumbStyles,
  useBreakpoint,
  useBreakpointValue,
  useButtonGroup,
  useCallbackRef3 as useCallbackRef,
  useCardStyles,
  useChakra,
  useCheckbox,
  useCheckboxGroup,
  useClipboard,
  useColorMode,
  useColorModePreference,
  useColorModeValue,
  useComponentStyles__unstable,
  useConst,
  useControllableProp,
  useControllableState2 as useControllableState,
  useCounter,
  useDimensions,
  useDisclosure,
  useDrawerContext,
  useEditable,
  useEditableContext,
  useEditableControls,
  useEditableState,
  useEditableStyles,
  useEnvironment,
  useEventListener2 as useEventListener,
  useEventListenerMap,
  useFocusEffect,
  useFocusOnHide,
  useFocusOnPointerDown2 as useFocusOnPointerDown,
  useFocusOnShow,
  useForceUpdate,
  useFormControl,
  useFormControlContext,
  useFormControlProps,
  useFormControlStyles,
  useFormErrorStyles,
  useHighlight,
  useId3 as useId,
  useIds,
  useImage,
  useInputGroupStyles,
  useInterval,
  useLatestRef,
  useListStyles,
  useMediaQuery,
  useMenu,
  useMenuButton,
  useMenuContext,
  useMenuDescendant,
  useMenuDescendants,
  useMenuDescendantsContext,
  useMenuItem,
  useMenuList,
  useMenuOption,
  useMenuOptionGroup,
  useMenuPositioner,
  useMenuState,
  useMenuStyles,
  useMergeRefs3 as useMergeRefs,
  useModal,
  useModalContext,
  useModalManager,
  useModalStyles,
  useMouseDownRef,
  useMultiStyleConfig,
  useNumberInput,
  useNumberInputStyles,
  useOptionalPart,
  useOutsideClick,
  usePanGesture,
  usePinInput,
  usePinInputContext,
  usePinInputField,
  usePointerEvent,
  usePopover,
  usePopoverContext,
  usePopoverStyles,
  usePopper,
  usePortalManager,
  usePrefersReducedMotion,
  usePrevious,
  useProgressStyles,
  useQuery,
  useRadio,
  useRadioGroup,
  useRadioGroupContext,
  useRangeSlider,
  useRangeSliderContext,
  useRangeSliderStyles,
  useSafeLayoutEffect3 as useSafeLayoutEffect,
  useShortcut,
  useSlider,
  useSliderContext,
  useSliderStyles,
  useStatStyles,
  useStepContext,
  useStepperStyles,
  useSteps,
  useStyleConfig,
  useStyles,
  useTab,
  useTabIndicator,
  useTabList,
  useTabPanel,
  useTabPanels,
  useTableStyles,
  useTabs,
  useTabsContext,
  useTabsDescendant,
  useTabsDescendants,
  useTabsDescendantsContext,
  useTabsStyles,
  useTagStyles,
  useTheme2 as useTheme,
  useTimeout2 as useTimeout,
  useToast,
  useToken,
  useTooltip,
  useUnmountEffect,
  useUpdateEffect2 as useUpdateEffect,
  useWhyDidYouUpdate,
  visuallyHiddenStyle,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultSize,
  withDefaultVariant,
  withDelay
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=@chakra-ui_react.js.map
