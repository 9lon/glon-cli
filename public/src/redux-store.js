/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(10);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = commonAction;
/* harmony export (immutable) */ __webpack_exports__["a"] = dispatchActionBehavior;
function commonAction(){
    return {
        listeners:{
            'method':'handleCall'
        },
        handleCall:function(e){
            var detail = e.detail;
            var args = detail.args;
            var callback = detail.callback;

            var methodName = args[0];
            var args = Array.prototype.slice.call(args);
            if(args.length>1)
            args = args.slice(1,args.length);

            var argsText = "";
            var params = [];
            args.map((row,i)=>{
                params.push(row);
                if(i!=0) argsText+=',';
                argsText += `params[${i}]`
            });
        
            callback(eval(`
                if(this.${methodName})
                this.${methodName}(${argsText})
            `));

        }
    }
}

function dispatchActionBehavior(){
    return {
        dispatchAction:function(){
            return new Promise((reslove,reject)=>{
                this.fire('method',{
                    args:arguments,
                    callback:(promise)=>{
                        if(typeof promise == "undefined"){
                            reslove('Action no promise.');
                        }else{
                            promise.then((res)=>{
                                reslove(promise);
                            }).catch((err)=>{
                                reject(err);
                            })
                        }
                    }
                });
            })
            
        }
    }
}

const baseURL = `https://${window.location.hostname}:${location.port}`;
/* harmony export (immutable) */ __webpack_exports__["c"] = baseURL;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_cookie__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_cookie__);




/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_axios__["create"])({
    baseURL:__WEBPACK_IMPORTED_MODULE_1__config__["c" /* baseURL */]+'/api',
    headers: {
       // 'Authorization': 'JWT '+ Cookies.get('jwt'),
        'x-app-id':__WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.get('x_app_id'),
        'x-app-key':__WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.get('x_app_key')
    }
}));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(35);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(27);
var buildURL = __webpack_require__(30);
var parseHeaders = __webpack_require__(36);
var isURLSameOrigin = __webpack_require__(34);
var createError = __webpack_require__(9);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(29);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(32);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(26);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(48);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(49);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_async__);
/* harmony export (immutable) */ __webpack_exports__["a"] = appReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = appAction;




const initialState = {
    list:[],
    select:{},
    providerList:[]
}

function appReducer(state = initialState,action){

    switch (action.type) {
        case 'APP_LIST':
            return Object.assign({},state,{list:action.payload});
        case 'APP_SELECT':
            return Object.assign({},state,{select:action.payload});
        case 'APP_CLEAR_SELECT':
            return Object.assign({},state,{select:{}});
        case 'APP_PROVIDER_LIST':
            return Object.assign({},state,{providerList:action.payload});
        default:
            return state
    }

}

function appAction(store){

    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* commonAction */])(),
        {

            APP_PROVIDER_LIST:function(){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get('/providers')
                .then(res=>{
                    store.dispatch({type:'APP_PROVIDER_LIST',payload:res.data})
                })
                .catch(err=>{

                })
            },
            APP_LIST:function(){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get('/apps')
                .then(res=>{
                    store.dispatch({type:'APP_LIST',payload:res.data})
                    this.nylonVisible(true);
                })
                .catch(err=>{

                })
            },
            APP_SELECT:function(id){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get(`/apps/app/${id}`)
                .then(res=>{
                    store.dispatch({type:'APP_SELECT',payload:res.data})
                    this.$$('panel-right').open();
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            APP_CLEAR_SELECT:function(){
                // var providerList = store.getState().app.providerList;
                // async.map(providerList ,function(row, callback){
                //     callback(null, {id:row.id,provider_name:row.provider_name,checked:false});
                // } ,function (err, result) {
                //     store.dispatch({type:'APP_CLEAR_SELECT',payload:{provider:result}})
                // });
                store.dispatch({type:'APP_CLEAR_SELECT'})
            },
            APP_INSERT:function(data){

                this.fire('toast',{status:'load'});

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].post(`/apps/app`,data)
                .then(res=>{
                    this.APP_LIST();
                    this.fire('toast',{status:'success',text:'บันทึกสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })

            },
            APP_DELETE:function(id){
                
                this.fire('toast',{status:'load'});
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].delete(`/apps/app/${id}`)
                .then(res=>{
                    this.APP_LIST();
                    this.fire('toast',{status:'success',text:'ลบข้อมูลสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            APP_UPDATE:function(data){
                //console.log(data);
                this.fire('toast',{status:'load'});

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].put(`/apps/app`,data)
                .then(res=>{
                    this.APP_LIST();
                    this.fire('toast',{status:'success',text:'บันทึกสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    ]

}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polymer_redux__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polymer_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_polymer_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer_commonSystem__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer_auth__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer_provider__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducer_app__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducer_appConnect__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducer_appRole__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reducer_myApp__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducer_appUser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducer_user__ = __webpack_require__(67);


















const rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* combineReducers */])({
    commonSystem: __WEBPACK_IMPORTED_MODULE_3__reducer_commonSystem__["a" /* commonSystemReducer */],
    auth: __WEBPACK_IMPORTED_MODULE_4__reducer_auth__["a" /* authReducer */],
    provider: __WEBPACK_IMPORTED_MODULE_5__reducer_provider__["a" /* providerReducer */],
    app: __WEBPACK_IMPORTED_MODULE_6__reducer_app__["a" /* appReducer */],
    appConnect: __WEBPACK_IMPORTED_MODULE_7__reducer_appConnect__["a" /* appConnectReducer */],
    appRole: __WEBPACK_IMPORTED_MODULE_8__reducer_appRole__["a" /* appRoleReducer */],
    appUser: __WEBPACK_IMPORTED_MODULE_10__reducer_appUser__["a" /* appUserReducer */],
    myApp:__WEBPACK_IMPORTED_MODULE_9__reducer_myApp__["a" /* myAppReducer */],
    user: __WEBPACK_IMPORTED_MODULE_11__reducer_user__["a" /* userReducer */],

});
const storeApp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* createStore */])(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.ReduxBehavior = [__WEBPACK_IMPORTED_MODULE_1_polymer_redux___default()(storeApp), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* dispatchActionBehavior */])()];
window.dispatchActionBehavior = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* dispatchActionBehavior */])();

window.commonSystemAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducer_commonSystem__["b" /* commonSystemAction */])(storeApp);
window.authAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducer_auth__["b" /* authAction */])(storeApp);
window.providerAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducer_provider__["b" /* providerAction */])(storeApp);
window.appAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer_app__["b" /* appAction */])(storeApp);
window.appRoleAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__reducer_appRole__["b" /* appRoleAction */])(storeApp);
window.appConnectAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__reducer_appConnect__["b" /* appConnectAction */])(storeApp);
window.appUserAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__reducer_appUser__["b" /* appUserAction */])(storeApp);
window.myAppAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__reducer_myApp__["b" /* myAppAction */])(storeApp);
window.userAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__reducer_user__["b" /* userAction */])(storeApp);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module, setImmediate, process) {(function (global, factory) {
     true ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.async = global.async || {})));
}(this, (function (exports) { 'use strict';

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

// Lodash rest function without function.toString()
// remappings
function rest(func, start) {
    return overRest$1(func, start, identity);
}

var initialParams = function (fn) {
    return rest(function (args /*..., callback*/) {
        var callback = args.pop();
        fn.call(this, args, callback);
    });
};

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous funuction, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */
function asyncify(func) {
    return initialParams(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if (isObject(result) && typeof result.then === 'function') {
            result.then(function (value) {
                callback(null, value);
            }, function (err) {
                callback(err.message ? err : new Error(err));
            });
        } else {
            callback(null, result);
        }
    });
}

var supportsSymbol = typeof Symbol === 'function';

function supportsAsync() {
    var supported;
    try {
        /* eslint no-eval: 0 */
        supported = isAsync(eval('(async function () {})'));
    } catch (e) {
        supported = false;
    }
    return supported;
}

function isAsync(fn) {
    return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
}

function wrapAsync(asyncFn) {
    return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
}

var wrapAsync$1 = supportsAsync() ? wrapAsync : identity;

function applyEach$1(eachfn) {
    return rest(function (fns, args) {
        var go = initialParams(function (args, callback) {
            var that = this;
            return eachfn(fns, function (fn, cb) {
                wrapAsync$1(fn).apply(that, args.concat(cb));
            }, callback);
        });
        if (args.length) {
            return go.apply(this, args);
        } else {
            return go;
        }
    });
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  value = Object(value);
  return (symToStringTag && symToStringTag in value)
    ? getRawTag(value)
    : objectToString(value);
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
var breakLoop = {};

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

function once(fn) {
    return function () {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

var getIterator = function (coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
};

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? { value: coll[i], key: i } : null;
    };
}

function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done) return null;
        i++;
        return { value: item.value, key: i };
    };
}

function createObjectIterator(obj) {
    var okeys = keys(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        return i < len ? { value: obj[key], key: key } : null;
    };
}

function iterator(coll) {
    if (isArrayLike(coll)) {
        return createArrayIterator(coll);
    }

    var iterator = getIterator(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}

function onlyOnce(fn) {
    return function () {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
        callback = once(callback || noop);
        if (limit <= 0 || !obj) {
            return callback(null);
        }
        var nextElem = iterator(obj);
        var done = false;
        var running = 0;

        function iterateeCallback(err, value) {
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            } else if (value === breakLoop || done && running <= 0) {
                done = true;
                return callback(null);
            } else {
                replenish();
            }
        }

        function replenish() {
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
            }
        }

        replenish();
    };
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachOfLimit(coll, limit, iteratee, callback) {
  _eachOfLimit(limit)(coll, wrapAsync$1(iteratee), callback);
}

function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
    };
}

// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback) {
    callback = once(callback || noop);
    var index = 0,
        completed = 0,
        length = coll.length;
    if (length === 0) {
        callback(null);
    }

    function iteratorCallback(err, value) {
        if (err) {
            callback(err);
        } else if (++completed === length || value === breakLoop) {
            callback(null);
        }
    }

    for (; index < length; index++) {
        iteratee(coll[index], index, onlyOnce(iteratorCallback));
    }
}

// a generic version of eachOf which can handle array, object, and iterator cases.
var eachOfGeneric = doLimit(eachOfLimit, Infinity);

/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
 * var configs = {};
 *
 * async.forEachOf(obj, function (value, key, callback) {
 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
 *         if (err) return callback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }, function (err) {
 *     if (err) console.error(err.message);
 *     // configs is now a map of JSON data
 *     doSomethingWith(configs);
 * });
 */
var eachOf = function (coll, iteratee, callback) {
    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
    eachOfImplementation(coll, wrapAsync$1(iteratee), callback);
};

function doParallel(fn) {
    return function (obj, iteratee, callback) {
        return fn(eachOf, obj, wrapAsync$1(iteratee), callback);
    };
}

function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || noop;
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = wrapAsync$1(iteratee);

    eachfn(arr, function (value, _, callback) {
        var index = counter++;
        _iteratee(value, function (err, v) {
            results[index] = v;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}

/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */
var map = doParallel(_asyncMap);

/**
 * Applies the provided arguments to each function in the array, calling
 * `callback` after all functions have completed. If you only provide the first
 * argument, `fns`, then it will return a function which lets you pass in the
 * arguments as if it were a single function call. If more arguments are
 * provided, `callback` is required while `args` is still optional.
 *
 * @name applyEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
 * to all call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument, `fns`, is provided, it will
 * return a function which lets you pass in the arguments as if it were a single
 * function call. The signature is `(..args, callback)`. If invoked with any
 * arguments, `callback` is required.
 * @example
 *
 * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
 *
 * // partial application example:
 * async.each(
 *     buckets,
 *     async.applyEach([enableSearch, updateSchema]),
 *     callback
 * );
 */
var applyEach = applyEach$1(map);

function doParallelLimit(fn) {
    return function (obj, limit, iteratee, callback) {
        return fn(_eachOfLimit(limit), obj, wrapAsync$1(iteratee), callback);
    };
}

/**
 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
 *
 * @name mapLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
var mapLimit = doParallelLimit(_asyncMap);

/**
 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
 *
 * @name mapSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
var mapSeries = doLimit(mapLimit, 1);

/**
 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
 *
 * @name applyEachSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
 * call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument is provided, it will return
 * a function which lets you pass in the arguments as if it were a single
 * function call.
 */
var applyEachSeries = applyEach$1(mapSeries);

/**
 * Creates a continuation function with some arguments already applied.
 *
 * Useful as a shorthand when combined with other control flow functions. Any
 * arguments passed to the returned function are added to the arguments
 * originally passed to apply.
 *
 * @name apply
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {Function} function - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
 * @example
 *
 * // using apply
 * async.parallel([
 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
 *     async.apply(fs.writeFile, 'testfile2', 'test2')
 * ]);
 *
 *
 * // the same process without using apply
 * async.parallel([
 *     function(callback) {
 *         fs.writeFile('testfile1', 'test1', callback);
 *     },
 *     function(callback) {
 *         fs.writeFile('testfile2', 'test2', callback);
 *     }
 * ]);
 *
 * // It's possible to pass any number of additional arguments when calling the
 * // continuation:
 *
 * node> var fn = async.apply(sys.puts, 'one');
 * node> fn('two', 'three');
 * one
 * two
 * three
 */
var apply$2 = rest(function (fn, args) {
    return rest(function (callArgs) {
        return fn.apply(null, args.concat(callArgs));
    });
});

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
 * their requirements. Each function can optionally depend on other functions
 * being completed first, and each function is run as soon as its requirements
 * are satisfied.
 *
 * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
 * will stop. Further tasks will not execute (so any other functions depending
 * on it will not run), and the main `callback` is immediately called with the
 * error.
 *
 * {@link AsyncFunction}s also receive an object containing the results of functions which
 * have completed so far as the first argument, if they have dependencies. If a
 * task function has no dependencies, it will only be passed a callback.
 *
 * @name auto
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Object} tasks - An object. Each of its properties is either a
 * function or an array of requirements, with the {@link AsyncFunction} itself the last item
 * in the array. The object's key of a property serves as the name of the task
 * defined by that property, i.e. can be used when specifying requirements for
 * other tasks. The function receives one or two arguments:
 * * a `results` object, containing the results of the previously executed
 *   functions, only passed if the task has any dependencies,
 * * a `callback(err, result)` function, which must be called when finished,
 *   passing an `error` (which can be `null`) and the result of the function's
 *   execution.
 * @param {number} [concurrency=Infinity] - An optional `integer` for
 * determining the maximum number of tasks that can be run in parallel. By
 * default, as many as possible.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback. Results are always returned; however, if an
 * error occurs, no further `tasks` will be performed, and the results object
 * will only contain partial results. Invoked with (err, results).
 * @returns undefined
 * @example
 *
 * async.auto({
 *     // this function will just be passed a callback
 *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
 *     showData: ['readData', function(results, cb) {
 *         // results.readData is the file's contents
 *         // ...
 *     }]
 * }, callback);
 *
 * async.auto({
 *     get_data: function(callback) {
 *         console.log('in get_data');
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         console.log('in make_folder');
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: ['get_data', 'make_folder', function(results, callback) {
 *         console.log('in write_file', JSON.stringify(results));
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(results, callback) {
 *         console.log('in email_link', JSON.stringify(results));
 *         // once the file is written let's email a link to it...
 *         // results.write_file contains the filename returned by write_file.
 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *     }]
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('results = ', results);
 * });
 */
var auto = function (tasks, concurrency, callback) {
    if (typeof concurrency === 'function') {
        // concurrency is optional, shift the args.
        callback = concurrency;
        concurrency = null;
    }
    callback = once(callback || noop);
    var keys$$1 = keys(tasks);
    var numTasks = keys$$1.length;
    if (!numTasks) {
        return callback(null);
    }
    if (!concurrency) {
        concurrency = numTasks;
    }

    var results = {};
    var runningTasks = 0;
    var hasError = false;

    var listeners = Object.create(null);

    var readyTasks = [];

    // for cycle detection:
    var readyToCheck = []; // tasks that have been identified as reachable
    // without the possibility of returning to an ancestor task
    var uncheckedDependencies = {};

    baseForOwn(tasks, function (task, key) {
        if (!isArray(task)) {
            // no dependencies
            enqueueTask(key, [task]);
            readyToCheck.push(key);
            return;
        }

        var dependencies = task.slice(0, task.length - 1);
        var remainingDependencies = dependencies.length;
        if (remainingDependencies === 0) {
            enqueueTask(key, task);
            readyToCheck.push(key);
            return;
        }
        uncheckedDependencies[key] = remainingDependencies;

        arrayEach(dependencies, function (dependencyName) {
            if (!tasks[dependencyName]) {
                throw new Error('async.auto task `' + key + '` has a non-existent dependency `' + dependencyName + '` in ' + dependencies.join(', '));
            }
            addListener(dependencyName, function () {
                remainingDependencies--;
                if (remainingDependencies === 0) {
                    enqueueTask(key, task);
                }
            });
        });
    });

    checkForDeadlocks();
    processQueue();

    function enqueueTask(key, task) {
        readyTasks.push(function () {
            runTask(key, task);
        });
    }

    function processQueue() {
        if (readyTasks.length === 0 && runningTasks === 0) {
            return callback(null, results);
        }
        while (readyTasks.length && runningTasks < concurrency) {
            var run = readyTasks.shift();
            run();
        }
    }

    function addListener(taskName, fn) {
        var taskListeners = listeners[taskName];
        if (!taskListeners) {
            taskListeners = listeners[taskName] = [];
        }

        taskListeners.push(fn);
    }

    function taskComplete(taskName) {
        var taskListeners = listeners[taskName] || [];
        arrayEach(taskListeners, function (fn) {
            fn();
        });
        processQueue();
    }

    function runTask(key, task) {
        if (hasError) return;

        var taskCallback = onlyOnce(rest(function (err, args) {
            runningTasks--;
            if (args.length <= 1) {
                args = args[0];
            }
            if (err) {
                var safeResults = {};
                baseForOwn(results, function (val, rkey) {
                    safeResults[rkey] = val;
                });
                safeResults[key] = args;
                hasError = true;
                listeners = Object.create(null);

                callback(err, safeResults);
            } else {
                results[key] = args;
                taskComplete(key);
            }
        }));

        runningTasks++;
        var taskFn = wrapAsync$1(task[task.length - 1]);
        if (task.length > 1) {
            taskFn(results, taskCallback);
        } else {
            taskFn(taskCallback);
        }
    }

    function checkForDeadlocks() {
        // Kahn's algorithm
        // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
        // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
        var currentTask;
        var counter = 0;
        while (readyToCheck.length) {
            currentTask = readyToCheck.pop();
            counter++;
            arrayEach(getDependents(currentTask), function (dependent) {
                if (--uncheckedDependencies[dependent] === 0) {
                    readyToCheck.push(dependent);
                }
            });
        }

        if (counter !== numTasks) {
            throw new Error('async.auto cannot execute tasks due to a recursive dependency');
        }
    }

    function getDependents(taskName) {
        var result = [];
        baseForOwn(tasks, function (task, key) {
            if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
                result.push(key);
            }
        });
        return result;
    }
};

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23';
var rsComboSymbolsRange = '\\u20d0-\\u20f0';
var rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff';
var rsComboMarksRange$1 = '\\u0300-\\u036f\\ufe20-\\ufe23';
var rsComboSymbolsRange$1 = '\\u20d0-\\u20f0';
var rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']';
var rsCombo = '[' + rsComboMarksRange$1 + rsComboSymbolsRange$1 + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange$1 + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange$1 + ']?';
var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

var FN_ARGS = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /(=.+)?(\s*)$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

function parseParams(func) {
    func = func.toString().replace(STRIP_COMMENTS, '');
    func = func.match(FN_ARGS)[2].replace(' ', '');
    func = func ? func.split(FN_ARG_SPLIT) : [];
    func = func.map(function (arg) {
        return trim(arg.replace(FN_ARG, ''));
    });
    return func;
}

/**
 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
 * tasks are specified as parameters to the function, after the usual callback
 * parameter, with the parameter names matching the names of the tasks it
 * depends on. This can provide even more readable task graphs which can be
 * easier to maintain.
 *
 * If a final callback is specified, the task results are similarly injected,
 * specified as named parameters after the initial error parameter.
 *
 * The autoInject function is purely syntactic sugar and its semantics are
 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
 *
 * @name autoInject
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.auto]{@link module:ControlFlow.auto}
 * @category Control Flow
 * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
 * the form 'func([dependencies...], callback). The object's key of a property
 * serves as the name of the task defined by that property, i.e. can be used
 * when specifying requirements for other tasks.
 * * The `callback` parameter is a `callback(err, result)` which must be called
 *   when finished, passing an `error` (which can be `null`) and the result of
 *   the function's execution. The remaining parameters name other tasks on
 *   which the task is dependent, and the results from those tasks are the
 *   arguments of those parameters.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback, and a `results` object with any completed
 * task results, similar to `auto`.
 * @example
 *
 * //  The example from `auto` can be rewritten as follows:
 * async.autoInject({
 *     get_data: function(callback) {
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: function(get_data, make_folder, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     },
 *     email_link: function(write_file, callback) {
 *         // once the file is written let's email a link to it...
 *         // write_file contains the filename returned by write_file.
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 *
 * // If you are using a JS minifier that mangles parameter names, `autoInject`
 * // will not work with plain functions, since the parameter names will be
 * // collapsed to a single letter identifier.  To work around this, you can
 * // explicitly specify the names of the parameters your task function needs
 * // in an array, similar to Angular.js dependency injection.
 *
 * // This still has an advantage over plain `auto`, since the results a task
 * // depends on are still spread into arguments.
 * async.autoInject({
 *     //...
 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(write_file, callback) {
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }]
 *     //...
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 */
function autoInject(tasks, callback) {
    var newTasks = {};

    baseForOwn(tasks, function (taskFn, key) {
        var params;
        var fnIsAsync = isAsync(taskFn);
        var hasNoDeps = !fnIsAsync && taskFn.length === 1 || fnIsAsync && taskFn.length === 0;

        if (isArray(taskFn)) {
            params = taskFn.slice(0, -1);
            taskFn = taskFn[taskFn.length - 1];

            newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
        } else if (hasNoDeps) {
            // no dependencies, use the function as-is
            newTasks[key] = taskFn;
        } else {
            params = parseParams(taskFn);
            if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
                throw new Error("autoInject task functions require explicit parameters.");
            }

            // remove callback param
            if (!fnIsAsync) params.pop();

            newTasks[key] = params.concat(newTask);
        }

        function newTask(results, taskCb) {
            var newArgs = arrayMap(params, function (name) {
                return results[name];
            });
            newArgs.push(taskCb);
            wrapAsync$1(taskFn).apply(null, newArgs);
        }
    });

    auto(newTasks, callback);
}

var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
    setTimeout(fn, 0);
}

function wrap(defer) {
    return rest(function (fn, args) {
        defer(function () {
            fn.apply(null, args);
        });
    });
}

var _defer;

if (hasSetImmediate) {
    _defer = setImmediate;
} else if (hasNextTick) {
    _defer = process.nextTick;
} else {
    _defer = fallback;
}

var setImmediate$1 = wrap(_defer);

// Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
// used for queues. This implementation assumes that the node provided by the user can be modified
// to adjust the next and last properties. We implement only the minimal functionality
// for queue support.
function DLL() {
    this.head = this.tail = null;
    this.length = 0;
}

function setInitial(dll, node) {
    dll.length = 1;
    dll.head = dll.tail = node;
}

DLL.prototype.removeLink = function (node) {
    if (node.prev) node.prev.next = node.next;else this.head = node.next;
    if (node.next) node.next.prev = node.prev;else this.tail = node.prev;

    node.prev = node.next = null;
    this.length -= 1;
    return node;
};

DLL.prototype.empty = DLL;

DLL.prototype.insertAfter = function (node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;else this.tail = newNode;
    node.next = newNode;
    this.length += 1;
};

DLL.prototype.insertBefore = function (node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev) node.prev.next = newNode;else this.head = newNode;
    node.prev = newNode;
    this.length += 1;
};

DLL.prototype.unshift = function (node) {
    if (this.head) this.insertBefore(this.head, node);else setInitial(this, node);
};

DLL.prototype.push = function (node) {
    if (this.tail) this.insertAfter(this.tail, node);else setInitial(this, node);
};

DLL.prototype.shift = function () {
    return this.head && this.removeLink(this.head);
};

DLL.prototype.pop = function () {
    return this.tail && this.removeLink(this.tail);
};

function queue(worker, concurrency, payload) {
    if (concurrency == null) {
        concurrency = 1;
    } else if (concurrency === 0) {
        throw new Error('Concurrency must not be zero');
    }

    var _worker = wrapAsync$1(worker);
    var numRunning = 0;
    var workersList = [];

    function _insert(data, insertAtFront, callback) {
        if (callback != null && typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0 && q.idle()) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function () {
                q.drain();
            });
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                callback: callback || noop
            };

            if (insertAtFront) {
                q._tasks.unshift(item);
            } else {
                q._tasks.push(item);
            }
        }
        setImmediate$1(q.process);
    }

    function _next(tasks) {
        return rest(function (args) {
            numRunning -= 1;

            for (var i = 0, l = tasks.length; i < l; i++) {
                var task = tasks[i];
                var index = baseIndexOf(workersList, task, 0);
                if (index >= 0) {
                    workersList.splice(index);
                }

                task.callback.apply(task, args);

                if (args[0] != null) {
                    q.error(args[0], task.data);
                }
            }

            if (numRunning <= q.concurrency - q.buffer) {
                q.unsaturated();
            }

            if (q.idle()) {
                q.drain();
            }
            q.process();
        });
    }

    var isProcessing = false;
    var q = {
        _tasks: new DLL(),
        concurrency: concurrency,
        payload: payload,
        saturated: noop,
        unsaturated: noop,
        buffer: concurrency / 4,
        empty: noop,
        drain: noop,
        error: noop,
        started: false,
        paused: false,
        push: function (data, callback) {
            _insert(data, false, callback);
        },
        kill: function () {
            q.drain = noop;
            q._tasks.empty();
        },
        unshift: function (data, callback) {
            _insert(data, true, callback);
        },
        process: function () {
            // Avoid trying to start too many processing operations. This can occur
            // when callbacks resolve synchronously (#1267).
            if (isProcessing) {
                return;
            }
            isProcessing = true;
            while (!q.paused && numRunning < q.concurrency && q._tasks.length) {
                var tasks = [],
                    data = [];
                var l = q._tasks.length;
                if (q.payload) l = Math.min(l, q.payload);
                for (var i = 0; i < l; i++) {
                    var node = q._tasks.shift();
                    tasks.push(node);
                    data.push(node.data);
                }

                if (q._tasks.length === 0) {
                    q.empty();
                }
                numRunning += 1;
                workersList.push(tasks[0]);

                if (numRunning === q.concurrency) {
                    q.saturated();
                }

                var cb = onlyOnce(_next(tasks));
                _worker(data, cb);
            }
            isProcessing = false;
        },
        length: function () {
            return q._tasks.length;
        },
        running: function () {
            return numRunning;
        },
        workersList: function () {
            return workersList;
        },
        idle: function () {
            return q._tasks.length + numRunning === 0;
        },
        pause: function () {
            q.paused = true;
        },
        resume: function () {
            if (q.paused === false) {
                return;
            }
            q.paused = false;
            setImmediate$1(q.process);
        }
    };
    return q;
}

/**
 * A cargo of tasks for the worker function to complete. Cargo inherits all of
 * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
 * @typedef {Object} CargoObject
 * @memberOf module:ControlFlow
 * @property {Function} length - A function returning the number of items
 * waiting to be processed. Invoke like `cargo.length()`.
 * @property {number} payload - An `integer` for determining how many tasks
 * should be process per round. This property can be changed after a `cargo` is
 * created to alter the payload on-the-fly.
 * @property {Function} push - Adds `task` to the `queue`. The callback is
 * called once the `worker` has finished processing the task. Instead of a
 * single task, an array of `tasks` can be submitted. The respective callback is
 * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
 * @property {Function} saturated - A callback that is called when the
 * `queue.length()` hits the concurrency and further tasks will be queued.
 * @property {Function} empty - A callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - A callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke like `cargo.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
 */

/**
 * Creates a `cargo` object with the specified payload. Tasks added to the
 * cargo will be processed altogether (up to the `payload` limit). If the
 * `worker` is in progress, the task is queued until it becomes available. Once
 * the `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, cargo passes an array of tasks to a single worker, repeating
 * when the worker is finished.
 *
 * @name cargo
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargo and inner queue.
 * @example
 *
 * // create a cargo object with payload 2
 * var cargo = async.cargo(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2);
 *
 * // add some items
 * cargo.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargo.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * cargo.push({name: 'baz'}, function(err) {
 *     console.log('finished processing baz');
 * });
 */
function cargo(worker, payload) {
  return queue(worker, 1, payload);
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
 *
 * @name eachOfSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Invoked with (err).
 */
var eachOfSeries = doLimit(eachOfLimit, 1);

/**
 * Reduces `coll` into a single value using an async `iteratee` to return each
 * successive step. `memo` is the initial state of the reduction. This function
 * only operates in series.
 *
 * For performance reasons, it may make sense to split a call to this function
 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
 * results. This function is for situations where each step in the reduction
 * needs to be async; if you can get the data before reducing it, then it's
 * probably a good idea to do so.
 *
 * @name reduce
 * @static
 * @memberOf module:Collections
 * @method
 * @alias inject
 * @alias foldl
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @example
 *
 * async.reduce([1,2,3], 0, function(memo, item, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         callback(null, memo + item)
 *     });
 * }, function(err, result) {
 *     // result is now equal to the last value of memo, which is 6
 * });
 */
function reduce(coll, memo, iteratee, callback) {
    callback = once(callback || noop);
    var _iteratee = wrapAsync$1(iteratee);
    eachOfSeries(coll, function (x, i, callback) {
        _iteratee(memo, x, function (err, v) {
            memo = v;
            callback(err);
        });
    }, function (err) {
        callback(err, memo);
    });
}

/**
 * Version of the compose function that is more natural to read. Each function
 * consumes the return value of the previous function. It is the equivalent of
 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name seq
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.compose]{@link module:ControlFlow.compose}
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} a function that composes the `functions` in order
 * @example
 *
 * // Requires lodash (or underscore), express3 and dresende's orm2.
 * // Part of an app, that fetches cats of the logged user.
 * // This example uses `seq` function to avoid overnesting and error
 * // handling clutter.
 * app.get('/cats', function(request, response) {
 *     var User = request.models.User;
 *     async.seq(
 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
 *         function(user, fn) {
 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
 *         }
 *     )(req.session.user_id, function (err, cats) {
 *         if (err) {
 *             console.error(err);
 *             response.json({ status: 'error', message: err.message });
 *         } else {
 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
 *         }
 *     });
 * });
 */
var seq$1 = rest(function seq(functions) {
    var _functions = arrayMap(functions, wrapAsync$1);
    return rest(function (args) {
        var that = this;

        var cb = args[args.length - 1];
        if (typeof cb == 'function') {
            args.pop();
        } else {
            cb = noop;
        }

        reduce(_functions, args, function (newargs, fn, cb) {
            fn.apply(that, newargs.concat(rest(function (err, nextargs) {
                cb(err, nextargs);
            })));
        }, function (err, results) {
            cb.apply(that, [err].concat(results));
        });
    });
});

/**
 * Creates a function which is a composition of the passed asynchronous
 * functions. Each function consumes the return value of the function that
 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name compose
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} an asynchronous function that is the composed
 * asynchronous `functions`
 * @example
 *
 * function add1(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n + 1);
 *     }, 10);
 * }
 *
 * function mul3(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n * 3);
 *     }, 10);
 * }
 *
 * var add1mul3 = async.compose(mul3, add1);
 * add1mul3(4, function (err, result) {
 *     // result now equals 15
 * });
 */
var compose = rest(function (args) {
  return seq$1.apply(null, args.reverse());
});

function concat$1(eachfn, arr, fn, callback) {
    var result = [];
    eachfn(arr, function (x, index, cb) {
        fn(x, function (err, y) {
            result = result.concat(y || []);
            cb(err);
        });
    }, function (err) {
        callback(err, result);
    });
}

/**
 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
 * the concatenated list. The `iteratee`s are called in parallel, and the
 * results are concatenated as they return. There is no guarantee that the
 * results array will be returned in the original order of `coll` passed to the
 * `iteratee` function.
 *
 * @name concat
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @example
 *
 * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
 *     // files is now a list of filenames that exist in the 3 directories
 * });
 */
var concat = doParallel(concat$1);

function doSeries(fn) {
    return function (obj, iteratee, callback) {
        return fn(eachOfSeries, obj, wrapAsync$1(iteratee), callback);
    };
}

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
 *
 * @name concatSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
 * The iteratee should complete with an array an array of results.
 * Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
var concatSeries = doSeries(concat$1);

/**
 * Returns a function that when called, calls-back with the values provided.
 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
 * [`auto`]{@link module:ControlFlow.auto}.
 *
 * @name constant
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {...*} arguments... - Any number of arguments to automatically invoke
 * callback with.
 * @returns {AsyncFunction} Returns a function that when invoked, automatically
 * invokes the callback with the previous given arguments.
 * @example
 *
 * async.waterfall([
 *     async.constant(42),
 *     function (value, next) {
 *         // value === 42
 *     },
 *     //...
 * ], callback);
 *
 * async.waterfall([
 *     async.constant(filename, "utf8"),
 *     fs.readFile,
 *     function (fileData, next) {
 *         //...
 *     }
 *     //...
 * ], callback);
 *
 * async.auto({
 *     hostname: async.constant("https://server.net/"),
 *     port: findFreePort,
 *     launchServer: ["hostname", "port", function (options, cb) {
 *         startServer(options, cb);
 *     }],
 *     //...
 * }, callback);
 */
var constant = rest(function (values) {
    var args = [null].concat(values);
    return initialParams(function (ignoredArgs, callback) {
        return callback.apply(this, args);
    });
});

function _createTester(check, getResult) {
    return function (eachfn, arr, iteratee, cb) {
        cb = cb || noop;
        var testPassed = false;
        var testResult;
        eachfn(arr, function (value, _, callback) {
            iteratee(value, function (err, result) {
                if (err) {
                    callback(err);
                } else if (check(result) && !testResult) {
                    testPassed = true;
                    testResult = getResult(true, value);
                    callback(null, breakLoop);
                } else {
                    callback();
                }
            });
        }, function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, testPassed ? testResult : getResult(false));
            }
        });
    };
}

function _findGetResult(v, x) {
    return x;
}

/**
 * Returns the first value in `coll` that passes an async truth test. The
 * `iteratee` is applied in parallel, meaning the first iteratee to return
 * `true` will fire the detect `callback` with that result. That means the
 * result might not be the first item in the original `coll` (in terms of order)
 * that passes the test.

 * If order within the original `coll` is important, then look at
 * [`detectSeries`]{@link module:Collections.detectSeries}.
 *
 * @name detect
 * @static
 * @memberOf module:Collections
 * @method
 * @alias find
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @example
 *
 * async.detect(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // result now equals the first file in the list that exists
 * });
 */
var detect = doParallel(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name detectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findLimit
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
 *
 * @name detectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findSeries
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectSeries = doLimit(detectLimit, 1);

function consoleFunc(name) {
    return rest(function (fn, args) {
        wrapAsync$1(fn).apply(null, args.concat(rest(function (err, args) {
            if (typeof console === 'object') {
                if (err) {
                    if (console.error) {
                        console.error(err);
                    }
                } else if (console[name]) {
                    arrayEach(args, function (x) {
                        console[name](x);
                    });
                }
            }
        })));
    });
}

/**
 * Logs the result of an [`async` function]{@link AsyncFunction} to the
 * `console` using `console.dir` to display the properties of the resulting object.
 * Only works in Node.js or in browsers that support `console.dir` and
 * `console.error` (such as FF and Chrome).
 * If multiple arguments are returned from the async function,
 * `console.dir` is called on each argument in order.
 *
 * @name dir
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, {hello: name});
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.dir(hello, 'world');
 * {hello: 'world'}
 */
var dir = consoleFunc('dir');

/**
 * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
 * the order of operations, the arguments `test` and `fn` are switched.
 *
 * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
 * @name doDuring
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.during]{@link module:ControlFlow.during}
 * @category Control Flow
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `fn`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error if one occurred, otherwise `null`.
 */
function doDuring(fn, test, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync$1(fn);
    var _test = wrapAsync$1(test);

    var next = rest(function (err, args) {
        if (err) return callback(err);
        args.push(check);
        _test.apply(this, args);
    });

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    check(null, true);
}

/**
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 */
function doWhilst(iteratee, test, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync$1(iteratee);
    var next = rest(function (err, args) {
        if (err) return callback(err);
        if (test.apply(this, args)) return _iteratee(next);
        callback.apply(null, [null].concat(args));
    });
    _iteratee(next);
}

/**
 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
 * argument ordering differs from `until`.
 *
 * @name doUntil
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function doUntil(iteratee, test, callback) {
    doWhilst(iteratee, function () {
        return !test.apply(this, arguments);
    }, callback);
}

/**
 * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
 * is passed a callback in the form of `function (err, truth)`. If error is
 * passed to `test` or `fn`, the main callback is immediately called with the
 * value of the error.
 *
 * @name during
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (callback).
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error, if one occurred, otherwise `null`.
 * @example
 *
 * var count = 0;
 *
 * async.during(
 *     function (callback) {
 *         return callback(null, count < 5);
 *     },
 *     function (callback) {
 *         count++;
 *         setTimeout(callback, 1000);
 *     },
 *     function (err) {
 *         // 5 seconds have passed
 *     }
 * );
 */
function during(test, fn, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync$1(fn);
    var _test = wrapAsync$1(test);

    function next(err) {
        if (err) return callback(err);
        _test(check);
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    _test(check);
}

function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}

/**
 * Applies the function `iteratee` to each item in `coll`, in parallel.
 * The `iteratee` is called with an item from the list, and a callback for when
 * it has finished. If the `iteratee` passes an error to its `callback`, the
 * main `callback` (for the `each` function) is immediately called with the
 * error.
 *
 * Note, that since this function applies `iteratee` to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
 *
 * @name each
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEach
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to
 * each item in `coll`. Invoked with (item, callback).
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOf`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * // assuming openFiles is an array of file names and saveFile is a function
 * // to save the modified contents of that file:
 *
 * async.each(openFiles, saveFile, function(err){
 *   // if any of the saves produced an error, err would equal that error
 * });
 *
 * // assuming openFiles is an array of file names
 * async.each(openFiles, function(file, callback) {
 *
 *     // Perform operation on file here.
 *     console.log('Processing file ' + file);
 *
 *     if( file.length > 32 ) {
 *       console.log('This file name is too long');
 *       callback('File name too long');
 *     } else {
 *       // Do work to process file here
 *       console.log('File processed');
 *       callback();
 *     }
 * }, function(err) {
 *     // if any of the file processing produced an error, err would equal that error
 *     if( err ) {
 *       // One of the iterations produced an error.
 *       // All processing will now stop.
 *       console.log('A file failed to process');
 *     } else {
 *       console.log('All files have been processed successfully');
 *     }
 * });
 */
function eachLimit(coll, iteratee, callback) {
  eachOf(coll, _withoutIndex(wrapAsync$1(iteratee)), callback);
}

/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachLimit$1(coll, limit, iteratee, callback) {
  _eachOfLimit(limit)(coll, _withoutIndex(wrapAsync$1(iteratee)), callback);
}

/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
var eachSeries = doLimit(eachLimit$1, 1);

/**
 * Wrap an async function and ensure it calls its callback on a later tick of
 * the event loop.  If the function already calls its callback on a next tick,
 * no extra deferral is added. This is useful for preventing stack overflows
 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
 * contained. ES2017 `async` functions are returned as-is -- they are immune
 * to Zalgo's corrupting influences, as they always resolve on a later tick.
 *
 * @name ensureAsync
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - an async function, one that expects a node-style
 * callback as its last argument.
 * @returns {AsyncFunction} Returns a wrapped function with the exact same call
 * signature as the function passed in.
 * @example
 *
 * function sometimesAsync(arg, callback) {
 *     if (cache[arg]) {
 *         return callback(null, cache[arg]); // this would be synchronous!!
 *     } else {
 *         doSomeIO(arg, callback); // this IO would be asynchronous
 *     }
 * }
 *
 * // this has a risk of stack overflows if many results are cached in a row
 * async.mapSeries(args, sometimesAsync, done);
 *
 * // this will defer sometimesAsync's callback if necessary,
 * // preventing stack overflows
 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
 */
function ensureAsync(fn) {
    if (isAsync(fn)) return fn;
    return initialParams(function (args, callback) {
        var sync = true;
        args.push(function () {
            var innerArgs = arguments;
            if (sync) {
                setImmediate$1(function () {
                    callback.apply(null, innerArgs);
                });
            } else {
                callback.apply(null, innerArgs);
            }
        });
        fn.apply(this, args);
        sync = false;
    });
}

function notId(v) {
    return !v;
}

/**
 * Returns `true` if every element in `coll` satisfies an async test. If any
 * iteratee call returns `false`, the main `callback` is immediately called.
 *
 * @name every
 * @static
 * @memberOf module:Collections
 * @method
 * @alias all
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @example
 *
 * async.every(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then every file exists
 * });
 */
var every = doParallel(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everyLimit = doParallelLimit(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
 *
 * @name everySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in series.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everySeries = doLimit(everyLimit, 1);

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, function (x, index, callback) {
        iteratee(x, function (err, v) {
            truthValues[index] = !!v;
            callback(err);
        });
    }, function (err) {
        if (err) return callback(err);
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            if (truthValues[i]) results.push(arr[i]);
        }
        callback(null, results);
    });
}

function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, function (x, index, callback) {
        iteratee(x, function (err, v) {
            if (err) {
                callback(err);
            } else {
                if (v) {
                    results.push({ index: index, value: x });
                }
                callback();
            }
        });
    }, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, arrayMap(results.sort(function (a, b) {
                return a.index - b.index;
            }), baseProperty('value')));
        }
    });
}

function _filter(eachfn, coll, iteratee, callback) {
    var filter = isArrayLike(coll) ? filterArray : filterGeneric;
    filter(eachfn, coll, wrapAsync$1(iteratee), callback || noop);
}

/**
 * Returns a new array of all the values in `coll` which pass an async truth
 * test. This operation is performed in parallel, but the results array will be
 * in the same order as the original.
 *
 * @name filter
 * @static
 * @memberOf module:Collections
 * @method
 * @alias select
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.filter(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of the existing files
 * });
 */
var filter = doParallel(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name filterLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var filterLimit = doParallelLimit(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
 *
 * @name filterSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results)
 */
var filterSeries = doLimit(filterLimit, 1);

/**
 * Calls the asynchronous function `fn` with a callback parameter that allows it
 * to call itself again, in series, indefinitely.

 * If an error is passed to the callback then `errback` is called with the
 * error, and execution stops, otherwise it will never be called.
 *
 * @name forever
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} fn - an async function to call repeatedly.
 * Invoked with (next).
 * @param {Function} [errback] - when `fn` passes an error to it's callback,
 * this function will be called, and execution stops. Invoked with (err).
 * @example
 *
 * async.forever(
 *     function(next) {
 *         // next is suitable for passing to things that need a callback(err [, whatever]);
 *         // it will result in this function being called again.
 *     },
 *     function(err) {
 *         // if next is called with a value in its first parameter, it will appear
 *         // in here as 'err', and execution will stop.
 *     }
 * );
 */
function forever(fn, errback) {
    var done = onlyOnce(errback || noop);
    var task = wrapAsync$1(ensureAsync(fn));

    function next(err) {
        if (err) return done(err);
        task(next);
    }
    next();
}

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
 *
 * @name groupByLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupByLimit = function (coll, limit, iteratee, callback) {
    callback = callback || noop;
    var _iteratee = wrapAsync$1(iteratee);
    mapLimit(coll, limit, function (val, callback) {
        _iteratee(val, function (err, key) {
            if (err) return callback(err);
            return callback(null, { key: key, val: val });
        });
    }, function (err, mapResults) {
        var result = {};
        // from MDN, handle object having an `hasOwnProperty` prop
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                var key = mapResults[i].key;
                var val = mapResults[i].val;

                if (hasOwnProperty.call(result, key)) {
                    result[key].push(val);
                } else {
                    result[key] = [val];
                }
            }
        }

        return callback(err, result);
    });
};

/**
 * Returns a new object, where each value corresponds to an array of items, from
 * `coll`, that returned the corresponding key. That is, the keys of the object
 * correspond to the values passed to the `iteratee` callback.
 *
 * Note: Since this function applies the `iteratee` to each item in parallel,
 * there is no guarantee that the `iteratee` functions will complete in order.
 * However, the values for each key in the `result` will be in the same order as
 * the original `coll`. For Objects, the values will roughly be in the order of
 * the original Objects' keys (but this can vary across JavaScript engines).
 *
 * @name groupBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @example
 *
 * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
 *     db.findById(userId, function(err, user) {
 *         if (err) return callback(err);
 *         return callback(null, user.age);
 *     });
 * }, function(err, result) {
 *     // result is object containing the userIds grouped by age
 *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
 * });
 */
var groupBy = doLimit(groupByLimit, Infinity);

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
 *
 * @name groupBySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupBySeries = doLimit(groupByLimit, 1);

/**
 * Logs the result of an `async` function to the `console`. Only works in
 * Node.js or in browsers that support `console.log` and `console.error` (such
 * as FF and Chrome). If multiple arguments are returned from the async
 * function, `console.log` is called on each argument in order.
 *
 * @name log
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, 'hello ' + name);
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.log(hello, 'world');
 * 'hello world'
 */
var log = consoleFunc('log');

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name mapValuesLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
function mapValuesLimit(obj, limit, iteratee, callback) {
    callback = once(callback || noop);
    var newObj = {};
    var _iteratee = wrapAsync$1(iteratee);
    eachOfLimit(obj, limit, function (val, key, next) {
        _iteratee(val, key, function (err, result) {
            if (err) return next(err);
            newObj[key] = result;
            next();
        });
    }, function (err) {
        callback(err, newObj);
    });
}

/**
 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
 *
 * Produces a new Object by mapping each value of `obj` through the `iteratee`
 * function. The `iteratee` is called each `value` and `key` from `obj` and a
 * callback for when it has finished processing. Each of these callbacks takes
 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
 * passes an error to its callback, the main `callback` (for the `mapValues`
 * function) is immediately called with the error.
 *
 * Note, the order of the keys in the result is not guaranteed.  The keys will
 * be roughly in the order they complete, (but this is very engine-specific)
 *
 * @name mapValues
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @example
 *
 * async.mapValues({
 *     f1: 'file1',
 *     f2: 'file2',
 *     f3: 'file3'
 * }, function (file, key, callback) {
 *   fs.stat(file, callback);
 * }, function(err, result) {
 *     // result is now a map of stats for each file, e.g.
 *     // {
 *     //     f1: [stats for file1],
 *     //     f2: [stats for file2],
 *     //     f3: [stats for file3]
 *     // }
 * });
 */

var mapValues = doLimit(mapValuesLimit, Infinity);

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
 *
 * @name mapValuesSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
var mapValuesSeries = doLimit(mapValuesLimit, 1);

function has(obj, key) {
    return key in obj;
}

/**
 * Caches the results of an async function. When creating a hash to store
 * function results against, the callback is omitted from the hash and an
 * optional hash function can be used.
 *
 * If no hash function is specified, the first argument is used as a hash key,
 * which may work reasonably if it is a string or a data type that converts to a
 * distinct string. Note that objects and arrays will not behave reasonably.
 * Neither will cases where the other arguments are significant. In such cases,
 * specify your own hash function.
 *
 * The cache of results is exposed as the `memo` property of the function
 * returned by `memoize`.
 *
 * @name memoize
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function to proxy and cache results from.
 * @param {Function} hasher - An optional function for generating a custom hash
 * for storing results. It has all the arguments applied to it apart from the
 * callback, and must be synchronous.
 * @returns {AsyncFunction} a memoized version of `fn`
 * @example
 *
 * var slow_fn = function(name, callback) {
 *     // do something
 *     callback(null, result);
 * };
 * var fn = async.memoize(slow_fn);
 *
 * // fn can now be used as if it were slow_fn
 * fn('some name', function() {
 *     // callback
 * });
 */
function memoize(fn, hasher) {
    var memo = Object.create(null);
    var queues = Object.create(null);
    hasher = hasher || identity;
    var _fn = wrapAsync$1(fn);
    var memoized = initialParams(function memoized(args, callback) {
        var key = hasher.apply(null, args);
        if (has(memo, key)) {
            setImmediate$1(function () {
                callback.apply(null, memo[key]);
            });
        } else if (has(queues, key)) {
            queues[key].push(callback);
        } else {
            queues[key] = [callback];
            _fn.apply(null, args.concat(rest(function (args) {
                memo[key] = args;
                var q = queues[key];
                delete queues[key];
                for (var i = 0, l = q.length; i < l; i++) {
                    q[i].apply(null, args);
                }
            })));
        }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
}

/**
 * Calls `callback` on a later loop around the event loop. In Node.js this just
 * calls `setImmediate`.  In the browser it will use `setImmediate` if
 * available, otherwise `setTimeout(callback, 0)`, which means other higher
 * priority events may precede the execution of `callback`.
 *
 * This is used internally for browser-compatibility purposes.
 *
 * @name nextTick
 * @static
 * @memberOf module:Utils
 * @method
 * @alias setImmediate
 * @category Util
 * @param {Function} callback - The function to call on a later loop around
 * the event loop. Invoked with (args...).
 * @param {...*} args... - any number of additional arguments to pass to the
 * callback on the next tick.
 * @example
 *
 * var call_order = [];
 * async.nextTick(function() {
 *     call_order.push('two');
 *     // call_order now equals ['one','two']
 * });
 * call_order.push('one');
 *
 * async.setImmediate(function (a, b, c) {
 *     // a, b, and c equal 1, 2, and 3
 * }, 1, 2, 3);
 */
var _defer$1;

if (hasNextTick) {
    _defer$1 = process.nextTick;
} else if (hasSetImmediate) {
    _defer$1 = setImmediate;
} else {
    _defer$1 = fallback;
}

var nextTick = wrap(_defer$1);

function _parallel(eachfn, tasks, callback) {
    callback = callback || noop;
    var results = isArrayLike(tasks) ? [] : {};

    eachfn(tasks, function (task, key, callback) {
        wrapAsync$1(task)(rest(function (err, args) {
            if (args.length <= 1) {
                args = args[0];
            }
            results[key] = args;
            callback(err);
        }));
    }, function (err) {
        callback(err, results);
    });
}

/**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 *
 * @example
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // the results array will equal ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equals to: {one: 1, two: 2}
 * });
 */
function parallelLimit(tasks, callback) {
  _parallel(eachOf, tasks, callback);
}

/**
 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name parallelLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.parallel]{@link module:ControlFlow.parallel}
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 */
function parallelLimit$1(tasks, limit, callback) {
  _parallel(_eachOfLimit(limit), tasks, callback);
}

/**
 * A queue of tasks for the worker function to complete.
 * @typedef {Object} QueueObject
 * @memberOf module:ControlFlow
 * @property {Function} length - a function returning the number of items
 * waiting to be processed. Invoke with `queue.length()`.
 * @property {boolean} started - a boolean indicating whether or not any
 * items have been pushed and processed by the queue.
 * @property {Function} running - a function returning the number of items
 * currently being processed. Invoke with `queue.running()`.
 * @property {Function} workersList - a function returning the array of items
 * currently being processed. Invoke with `queue.workersList()`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
 * @property {number} concurrency - an integer for determining how many `worker`
 * functions should be run in parallel. This property can be changed after a
 * `queue` is created to alter the concurrency on-the-fly.
 * @property {Function} push - add a new task to the `queue`. Calls `callback`
 * once the `worker` has finished processing the task. Instead of a single task,
 * a `tasks` array can be submitted. The respective callback is used for every
 * task in the list. Invoke with `queue.push(task, [callback])`,
 * @property {Function} unshift - add a new task to the front of the `queue`.
 * Invoke with `queue.unshift(task, [callback])`.
 * @property {Function} saturated - a callback that is called when the number of
 * running workers hits the `concurrency` limit, and further tasks will be
 * queued.
 * @property {Function} unsaturated - a callback that is called when the number
 * of running workers is less than the `concurrency` & `buffer` limits, and
 * further tasks will not be queued.
 * @property {number} buffer - A minimum threshold buffer in order to say that
 * the `queue` is `unsaturated`.
 * @property {Function} empty - a callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - a callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} error - a callback that is called when a task errors.
 * Has the signature `function(error, task)`.
 * @property {boolean} paused - a boolean for determining whether the queue is
 * in a paused state.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke with `queue.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. Invoke with `queue.kill()`.
 */

/**
 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
 * `queue` are processed in parallel (up to the `concurrency` limit). If all
 * `worker`s are in progress, the task is queued until one becomes available.
 * Once a `worker` completes a `task`, that `task`'s callback is called.
 *
 * @name queue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`. Invoked with (task, callback).
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the queue.
 * @example
 *
 * // create a queue object with concurrency 2
 * var q = async.queue(function(task, callback) {
 *     console.log('hello ' + task.name);
 *     callback();
 * }, 2);
 *
 * // assign a callback
 * q.drain = function() {
 *     console.log('all items have been processed');
 * };
 *
 * // add some items to the queue
 * q.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * q.push({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 *
 * // add some items to the queue (batch-wise)
 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
 *     console.log('finished processing item');
 * });
 *
 * // add some items to the front of the queue
 * q.unshift({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 */
var queue$1 = function (worker, concurrency) {
  var _worker = wrapAsync$1(worker);
  return queue(function (items, cb) {
    _worker(items[0], cb);
  }, concurrency, 1);
};

/**
 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
 * completed in ascending priority order.
 *
 * @name priorityQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`.
 * Invoked with (task, callback).
 * @param {number} concurrency - An `integer` for determining how many `worker`
 * functions should be run in parallel.  If omitted, the concurrency defaults to
 * `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
 * differences between `queue` and `priorityQueue` objects:
 * * `push(task, priority, [callback])` - `priority` should be a number. If an
 *   array of `tasks` is given, all tasks will be assigned the same priority.
 * * The `unshift` method was removed.
 */
var priorityQueue = function (worker, concurrency) {
    // Start with a normal queue
    var q = queue$1(worker, concurrency);

    // Override push to accept second parameter representing priority
    q.push = function (data, priority, callback) {
        if (callback == null) callback = noop;
        if (typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function () {
                q.drain();
            });
        }

        priority = priority || 0;
        var nextNode = q._tasks.head;
        while (nextNode && priority >= nextNode.priority) {
            nextNode = nextNode.next;
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                priority: priority,
                callback: callback
            };

            if (nextNode) {
                q._tasks.insertBefore(nextNode, item);
            } else {
                q._tasks.push(item);
            }
        }
        setImmediate$1(q.process);
    };

    // Remove unshift function
    delete q.unshift;

    return q;
};

/**
 * Runs the `tasks` array of functions in parallel, without waiting until the
 * previous function has completed. Once any of the `tasks` complete or pass an
 * error to its callback, the main `callback` is immediately called. It's
 * equivalent to `Promise.race()`.
 *
 * @name race
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
 * to run. Each function can complete with an optional `result` value.
 * @param {Function} callback - A callback to run once any of the functions have
 * completed. This function gets an error or result from the first function that
 * completed. Invoked with (err, result).
 * @returns undefined
 * @example
 *
 * async.race([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // main callback
 * function(err, result) {
 *     // the result will be equal to 'two' as it finishes earlier
 * });
 */
function race(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
    if (!tasks.length) return callback();
    for (var i = 0, l = tasks.length; i < l; i++) {
        wrapAsync$1(tasks[i])(callback);
    }
}

var slice = Array.prototype.slice;

/**
 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
 *
 * @name reduceRight
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reduce]{@link module:Collections.reduce}
 * @alias foldr
 * @category Collection
 * @param {Array} array - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 */
function reduceRight(array, memo, iteratee, callback) {
  var reversed = slice.call(array).reverse();
  reduce(reversed, memo, iteratee, callback);
}

/**
 * Wraps the async function in another function that always completes with a
 * result object, even when it errors.
 *
 * The result object has either the property `error` or `value`.
 *
 * @name reflect
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function you want to wrap
 * @returns {Function} - A function that always passes null to it's callback as
 * the error. The second argument to the callback will be an `object` with
 * either an `error` or a `value` property.
 * @example
 *
 * async.parallel([
 *     async.reflect(function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff but error ...
 *         callback('bad stuff happened');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     })
 * ],
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = 'bad stuff happened'
 *     // results[2].value = 'two'
 * });
 */
function reflect(fn) {
    var _fn = wrapAsync$1(fn);
    return initialParams(function reflectOn(args, reflectCallback) {
        args.push(rest(function callback(err, cbArgs) {
            if (err) {
                reflectCallback(null, {
                    error: err
                });
            } else {
                var value = null;
                if (cbArgs.length === 1) {
                    value = cbArgs[0];
                } else if (cbArgs.length > 1) {
                    value = cbArgs;
                }
                reflectCallback(null, {
                    value: value
                });
            }
        }));

        return _fn.apply(this, args);
    });
}

function reject$1(eachfn, arr, iteratee, callback) {
    _filter(eachfn, arr, function (value, cb) {
        iteratee(value, function (err, v) {
            cb(err, !v);
        });
    }, callback);
}

/**
 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
 *
 * @name reject
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.reject(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of missing files
 *     createFiles(results);
 * });
 */
var reject = doParallel(reject$1);

/**
 * A helper function that wraps an array or an object of functions with `reflect`.
 *
 * @name reflectAll
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.reflect]{@link module:Utils.reflect}
 * @category Util
 * @param {Array|Object|Iterable} tasks - The collection of
 * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
 * @returns {Array} Returns an array of async functions, each wrapped in
 * `async.reflect`
 * @example
 *
 * let tasks = [
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         // do some more stuff but error ...
 *         callback(new Error('bad stuff happened'));
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ];
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = Error('bad stuff happened')
 *     // results[2].value = 'two'
 * });
 *
 * // an example using an object instead of an array
 * let tasks = {
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         callback('two');
 *     },
 *     three: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'three');
 *         }, 100);
 *     }
 * };
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results.one.value = 'one'
 *     // results.two.error = 'two'
 *     // results.three.value = 'three'
 * });
 */
function reflectAll(tasks) {
    var results;
    if (isArray(tasks)) {
        results = arrayMap(tasks, reflect);
    } else {
        results = {};
        baseForOwn(tasks, function (task, key) {
            results[key] = reflect.call(this, task);
        });
    }
    return results;
}

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name rejectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectLimit = doParallelLimit(reject$1);

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
 *
 * @name rejectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectSeries = doLimit(rejectLimit, 1);

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

/**
 * Attempts to get a successful response from `task` no more than `times` times
 * before returning an error. If the task is successful, the `callback` will be
 * passed the result of the successful task. If all attempts fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name retry
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @see [async.retryable]{@link module:ControlFlow.retryable}
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
 * object with `times` and `interval` or a number.
 * * `times` - The number of attempts to make before giving up.  The default
 *   is `5`.
 * * `interval` - The time to wait between retries, in milliseconds.  The
 *   default is `0`. The interval may also be specified as a function of the
 *   retry count (see example).
 * * `errorFilter` - An optional synchronous function that is invoked on
 *   erroneous result. If it returns `true` the retry attempts will continue;
 *   if the function returns `false` the retry flow is aborted with the current
 *   attempt's error and result being returned to the final callback.
 *   Invoked with (err).
 * * If `opts` is a number, the number specifies the number of times to retry,
 *   with the default interval of `0`.
 * @param {AsyncFunction} task - An async function to retry.
 * Invoked with (callback).
 * @param {Function} [callback] - An optional callback which is called when the
 * task has succeeded, or after the final failed attempt. It receives the `err`
 * and `result` arguments of the last attempt at completing the `task`. Invoked
 * with (err, results).
 *
 * @example
 *
 * // The `retry` function can be used as a stand-alone control flow by passing
 * // a callback, as shown below:
 *
 * // try calling apiMethod 3 times
 * async.retry(3, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 3 times, waiting 200 ms between each retry
 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 10 times with exponential backoff
 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
 * async.retry({
 *   times: 10,
 *   interval: function(retryCount) {
 *     return 50 * Math.pow(2, retryCount);
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod the default 5 times no delay between each retry
 * async.retry(apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod only when error condition satisfies, all other
 * // errors will abort the retry control flow and return to final callback
 * async.retry({
 *   errorFilter: function(err) {
 *     return err.message === 'Temporary error'; // only retry on a specific error
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // It can also be embedded within other control flow functions to retry
 * // individual methods that are not as reliable, like this:
 * async.auto({
 *     users: api.getUsers.bind(api),
 *     payments: async.retryable(3, api.getPayments.bind(api))
 * }, function(err, results) {
 *     // do something with the results
 * });
 *
 */
function retry(opts, task, callback) {
    var DEFAULT_TIMES = 5;
    var DEFAULT_INTERVAL = 0;

    var options = {
        times: DEFAULT_TIMES,
        intervalFunc: constant$1(DEFAULT_INTERVAL)
    };

    function parseTimes(acc, t) {
        if (typeof t === 'object') {
            acc.times = +t.times || DEFAULT_TIMES;

            acc.intervalFunc = typeof t.interval === 'function' ? t.interval : constant$1(+t.interval || DEFAULT_INTERVAL);

            acc.errorFilter = t.errorFilter;
        } else if (typeof t === 'number' || typeof t === 'string') {
            acc.times = +t || DEFAULT_TIMES;
        } else {
            throw new Error("Invalid arguments for async.retry");
        }
    }

    if (arguments.length < 3 && typeof opts === 'function') {
        callback = task || noop;
        task = opts;
    } else {
        parseTimes(options, opts);
        callback = callback || noop;
    }

    if (typeof task !== 'function') {
        throw new Error("Invalid arguments for async.retry");
    }

    var _task = wrapAsync$1(task);

    var attempt = 1;
    function retryAttempt() {
        _task(function (err) {
            if (err && attempt++ < options.times && (typeof options.errorFilter != 'function' || options.errorFilter(err))) {
                setTimeout(retryAttempt, options.intervalFunc(attempt));
            } else {
                callback.apply(null, arguments);
            }
        });
    }

    retryAttempt();
}

/**
 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
 * wraps a task and makes it retryable, rather than immediately calling it
 * with retries.
 *
 * @name retryable
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.retry]{@link module:ControlFlow.retry}
 * @category Control Flow
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
 * options, exactly the same as from `retry`
 * @param {AsyncFunction} task - the asynchronous function to wrap.
 * This function will be passed any arguments passed to the returned wrapper.
 * Invoked with (...args, callback).
 * @returns {AsyncFunction} The wrapped function, which when invoked, will
 * retry on an error, based on the parameters specified in `opts`.
 * This function will accept the same parameters as `task`.
 * @example
 *
 * async.auto({
 *     dep1: async.retryable(3, getFromFlakyService),
 *     process: ["dep1", async.retryable(3, function (results, cb) {
 *         maybeProcessData(results.dep1, cb);
 *     })]
 * }, callback);
 */
var retryable = function (opts, task) {
    if (!task) {
        task = opts;
        opts = null;
    }
    var _task = wrapAsync$1(task);
    return initialParams(function (args, callback) {
        function taskFn(cb) {
            _task.apply(null, args.concat(cb));
        }

        if (opts) retry(opts, taskFn, callback);else retry(taskFn, callback);
    });
};

/**
 * Run the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function, and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 *  results from {@link async.series}.
 *
 * **Note** that while many implementations preserve the order of object
 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
 * explicitly states that
 *
 * > The mechanics and order of enumerating the properties is not specified.
 *
 * So if you rely on the order in which your series of functions are executed,
 * and want this to work on all platforms, consider using an array.
 *
 * @name series
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing
 * [async functions]{@link AsyncFunction} to run in series.
 * Each function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array (or object)
 * containing all the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 * @example
 * async.series([
 *     function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     },
 *     function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // results is now equal to ['one', 'two']
 * });
 *
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback){
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equal to: {one: 1, two: 2}
 * });
 */
function series(tasks, callback) {
  _parallel(eachOfSeries, tasks, callback);
}

/**
 * Returns `true` if at least one element in the `coll` satisfies an async test.
 * If any iteratee call returns `true`, the main `callback` is immediately
 * called.
 *
 * @name some
 * @static
 * @memberOf module:Collections
 * @method
 * @alias any
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @example
 *
 * async.some(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then at least one of the files exists
 * });
 */
var some = doParallel(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
 *
 * @name someLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anyLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someLimit = doParallelLimit(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
 *
 * @name someSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anySeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in series.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someSeries = doLimit(someLimit, 1);

/**
 * Sorts a list by the results of running each `coll` value through an async
 * `iteratee`.
 *
 * @name sortBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a value to use as the sort criteria as
 * its `result`.
 * Invoked with (item, callback).
 * @param {Function} callback - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is the items
 * from the original `coll` sorted by the values returned by the `iteratee`
 * calls. Invoked with (err, results).
 * @example
 *
 * async.sortBy(['file1','file2','file3'], function(file, callback) {
 *     fs.stat(file, function(err, stats) {
 *         callback(err, stats.mtime);
 *     });
 * }, function(err, results) {
 *     // results is now the original array of files sorted by
 *     // modified date
 * });
 *
 * // By modifying the callback parameter the
 * // sorting order can be influenced:
 *
 * // ascending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x);
 * }, function(err,result) {
 *     // result callback
 * });
 *
 * // descending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
 * }, function(err,result) {
 *     // result callback
 * });
 */
function sortBy(coll, iteratee, callback) {
    var _iteratee = wrapAsync$1(iteratee);
    map(coll, function (x, callback) {
        _iteratee(x, function (err, criteria) {
            if (err) return callback(err);
            callback(null, { value: x, criteria: criteria });
        });
    }, function (err, results) {
        if (err) return callback(err);
        callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
    });

    function comparator(left, right) {
        var a = left.criteria,
            b = right.criteria;
        return a < b ? -1 : a > b ? 1 : 0;
    }
}

/**
 * Sets a time limit on an asynchronous function. If the function does not call
 * its callback within the specified milliseconds, it will be called with a
 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
 *
 * @name timeout
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} asyncFn - The async function to limit in time.
 * @param {number} milliseconds - The specified time limit.
 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
 * to timeout Error for more information..
 * @returns {AsyncFunction} Returns a wrapped function that can be used with any
 * of the control flow functions.
 * Invoke this function with the same parameters as you would `asyncFunc`.
 * @example
 *
 * function myFunction(foo, callback) {
 *     doAsyncTask(foo, function(err, data) {
 *         // handle errors
 *         if (err) return callback(err);
 *
 *         // do some stuff ...
 *
 *         // return processed data
 *         return callback(null, data);
 *     });
 * }
 *
 * var wrapped = async.timeout(myFunction, 1000);
 *
 * // call `wrapped` as you would `myFunction`
 * wrapped({ bar: 'bar' }, function(err, data) {
 *     // if `myFunction` takes < 1000 ms to execute, `err`
 *     // and `data` will have their expected values
 *
 *     // else `err` will be an Error with the code 'ETIMEDOUT'
 * });
 */
function timeout(asyncFn, milliseconds, info) {
    var originalCallback, timer;
    var timedOut = false;

    function injectedCallback() {
        if (!timedOut) {
            originalCallback.apply(null, arguments);
            clearTimeout(timer);
        }
    }

    function timeoutCallback() {
        var name = asyncFn.name || 'anonymous';
        var error = new Error('Callback function "' + name + '" timed out.');
        error.code = 'ETIMEDOUT';
        if (info) {
            error.info = info;
        }
        timedOut = true;
        originalCallback(error);
    }

    var fn = wrapAsync$1(asyncFn);

    return initialParams(function (args, origCallback) {
        originalCallback = origCallback;
        // setup timer and call original function
        timer = setTimeout(timeoutCallback, milliseconds);
        fn.apply(null, args.concat(injectedCallback));
    });
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;
var nativeMax$1 = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax$1(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/**
 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name timesLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} count - The number of times to run the function.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
 */
function timeLimit(count, limit, iteratee, callback) {
  var _iteratee = wrapAsync$1(iteratee);
  mapLimit(baseRange(0, count, 1), limit, _iteratee, callback);
}

/**
 * Calls the `iteratee` function `n` times, and accumulates results in the same
 * manner you would use with [map]{@link module:Collections.map}.
 *
 * @name times
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @example
 *
 * // Pretend this is some complicated async factory
 * var createUser = function(id, callback) {
 *     callback(null, {
 *         id: 'user' + id
 *     });
 * };
 *
 * // generate 5 users
 * async.times(5, function(n, next) {
 *     createUser(n, function(err, user) {
 *         next(err, user);
 *     });
 * }, function(err, users) {
 *     // we should now have 5 users
 * });
 */
var times = doLimit(timeLimit, Infinity);

/**
 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
 *
 * @name timesSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 */
var timesSeries = doLimit(timeLimit, 1);

/**
 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
 * element in series, each step potentially mutating an `accumulator` value.
 * The type of the accumulator defaults to the type of collection passed in.
 *
 * @name transform
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
 * it will default to an empty Object or Array, depending on the type of `coll`
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator.
 * Invoked with (accumulator, item, key, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the transformed accumulator.
 * Invoked with (err, result).
 * @example
 *
 * async.transform([1,2,3], function(acc, item, index, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         acc.push(item * 2)
 *         callback(null)
 *     });
 * }, function(err, result) {
 *     // result is now equal to [2, 4, 6]
 * });
 *
 * @example
 *
 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
 *     setImmediate(function () {
 *         obj[key] = val * 2;
 *         callback();
 *     })
 * }, function (err, result) {
 *     // result is equal to {a: 2, b: 4, c: 6}
 * })
 */
function transform(coll, accumulator, iteratee, callback) {
    if (arguments.length <= 3) {
        callback = iteratee;
        iteratee = accumulator;
        accumulator = isArray(coll) ? [] : {};
    }
    callback = once(callback || noop);
    var _iteratee = wrapAsync$1(iteratee);

    eachOf(coll, function (v, k, cb) {
        _iteratee(accumulator, v, k, cb);
    }, function (err) {
        callback(err, accumulator);
    });
}

/**
 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
 * unmemoized form. Handy for testing.
 *
 * @name unmemoize
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.memoize]{@link module:Utils.memoize}
 * @category Util
 * @param {AsyncFunction} fn - the memoized function
 * @returns {AsyncFunction} a function that calls the original unmemoized function
 */
function unmemoize(fn) {
    return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
    };
}

/**
 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs.
 *
 * @name whilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns undefined
 * @example
 *
 * var count = 0;
 * async.whilst(
 *     function() { return count < 5; },
 *     function(callback) {
 *         count++;
 *         setTimeout(function() {
 *             callback(null, count);
 *         }, 1000);
 *     },
 *     function (err, n) {
 *         // 5 seconds have passed, n = 5
 *     }
 * );
 */
function whilst(test, iteratee, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync$1(iteratee);
    if (!test()) return callback(null);
    var next = rest(function (err, args) {
        if (err) return callback(err);
        if (test()) return _iteratee(next);
        callback.apply(null, [null].concat(args));
    });
    _iteratee(next);
}

/**
 * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs. `callback` will be passed an error and any
 * arguments passed to the final `iteratee`'s callback.
 *
 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
 *
 * @name until
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function until(test, iteratee, callback) {
    whilst(function () {
        return !test.apply(this, arguments);
    }, iteratee, callback);
}

/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */
var waterfall = function (tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
        if (taskIndex === tasks.length) {
            return callback.apply(null, [null].concat(args));
        }

        var taskCallback = onlyOnce(rest(function (err, args) {
            if (err) {
                return callback.apply(null, [err].concat(args));
            }
            nextTask(args);
        }));

        args.push(taskCallback);

        var task = wrapAsync$1(tasks[taskIndex++]);
        task.apply(null, args);
    }

    nextTask([]);
};

/**
 * An "async function" in the context of Async is an asynchronous function with
 * a variable number of parameters, with the final parameter being a callback.
 * (`function (arg1, arg2, ..., callback) {}`)
 * The final callback is of the form `callback(err, results...)`, which must be
 * called once the function is completed.  The callback should be called with a
 * Error as its first argument to signal that an error occurred.
 * Otherwise, if no error occurred, it should be called with `null` as the first
 * argument, and any additional `result` arguments that may apply, to signal
 * successful completion.
 * The callback must be called exactly once, ideally on a later tick of the
 * JavaScript event loop.
 *
 * This type of function is also referred to as a "Node-style async function",
 * or a "continuation passing-style function" (CPS). Most of the methods of this
 * library are themselves CPS/Node-style async functions, or functions that
 * return CPS/Node-style async functions.
 *
 * Wherever we accept a Node-style async function, we also directly accept an
 * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
 * In this case, the `async` function will not be passed a final callback
 * argument, and any thrown error will be used as the `err` argument of the
 * implicit callback, and the return value will be used as the `result` value.
 * (i.e. a `rejected` of the returned Promise becomes the `err` callback
 * argument, and a `resolved` value becomes the `result`.)
 *
 * Note, due to JavaScript limitations, we can only detect native `async`
 * functions and not transpilied implementations.
 * Your environment must have `async`/`await` support for this to work.
 * (e.g. Node > v7.6, or a recent version of a modern browser).
 * If you are using `async` functions through a transpiler (e.g. Babel), you
 * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
 * because the `async function` will be compiled to an ordinary function that
 * returns a promise.
 *
 * @typedef {Function} AsyncFunction
 * @static
 */

/**
 * Async is a utility module which provides straight-forward, powerful functions
 * for working with asynchronous JavaScript. Although originally designed for
 * use with [Node.js](http://nodejs.org) and installable via
 * `npm install --save async`, it can also be used directly in the browser.
 * @module async
 * @see AsyncFunction
 */

/**
 * A collection of `async` functions for manipulating collections, such as
 * arrays and objects.
 * @module Collections
 */

/**
 * A collection of `async` functions for controlling the flow through a script.
 * @module ControlFlow
 */

/**
 * A collection of `async` utility functions.
 * @module Utils
 */

var index = {
  applyEach: applyEach,
  applyEachSeries: applyEachSeries,
  apply: apply$2,
  asyncify: asyncify,
  auto: auto,
  autoInject: autoInject,
  cargo: cargo,
  compose: compose,
  concat: concat,
  concatSeries: concatSeries,
  constant: constant,
  detect: detect,
  detectLimit: detectLimit,
  detectSeries: detectSeries,
  dir: dir,
  doDuring: doDuring,
  doUntil: doUntil,
  doWhilst: doWhilst,
  during: during,
  each: eachLimit,
  eachLimit: eachLimit$1,
  eachOf: eachOf,
  eachOfLimit: eachOfLimit,
  eachOfSeries: eachOfSeries,
  eachSeries: eachSeries,
  ensureAsync: ensureAsync,
  every: every,
  everyLimit: everyLimit,
  everySeries: everySeries,
  filter: filter,
  filterLimit: filterLimit,
  filterSeries: filterSeries,
  forever: forever,
  groupBy: groupBy,
  groupByLimit: groupByLimit,
  groupBySeries: groupBySeries,
  log: log,
  map: map,
  mapLimit: mapLimit,
  mapSeries: mapSeries,
  mapValues: mapValues,
  mapValuesLimit: mapValuesLimit,
  mapValuesSeries: mapValuesSeries,
  memoize: memoize,
  nextTick: nextTick,
  parallel: parallelLimit,
  parallelLimit: parallelLimit$1,
  priorityQueue: priorityQueue,
  queue: queue$1,
  race: race,
  reduce: reduce,
  reduceRight: reduceRight,
  reflect: reflect,
  reflectAll: reflectAll,
  reject: reject,
  rejectLimit: rejectLimit,
  rejectSeries: rejectSeries,
  retry: retry,
  retryable: retryable,
  seq: seq$1,
  series: series,
  setImmediate: setImmediate$1,
  some: some,
  someLimit: someLimit,
  someSeries: someSeries,
  sortBy: sortBy,
  timeout: timeout,
  times: times,
  timesLimit: timeLimit,
  timesSeries: timesSeries,
  transform: transform,
  unmemoize: unmemoize,
  until: until,
  waterfall: waterfall,
  whilst: whilst,

  // aliases
  all: every,
  any: some,
  forEach: eachLimit,
  forEachSeries: eachSeries,
  forEachLimit: eachLimit$1,
  forEachOf: eachOf,
  forEachOfSeries: eachOfSeries,
  forEachOfLimit: eachOfLimit,
  inject: reduce,
  foldl: reduce,
  foldr: reduceRight,
  select: filter,
  selectLimit: filterLimit,
  selectSeries: filterSeries,
  wrapSync: asyncify
};

exports['default'] = index;
exports.applyEach = applyEach;
exports.applyEachSeries = applyEachSeries;
exports.apply = apply$2;
exports.asyncify = asyncify;
exports.auto = auto;
exports.autoInject = autoInject;
exports.cargo = cargo;
exports.compose = compose;
exports.concat = concat;
exports.concatSeries = concatSeries;
exports.constant = constant;
exports.detect = detect;
exports.detectLimit = detectLimit;
exports.detectSeries = detectSeries;
exports.dir = dir;
exports.doDuring = doDuring;
exports.doUntil = doUntil;
exports.doWhilst = doWhilst;
exports.during = during;
exports.each = eachLimit;
exports.eachLimit = eachLimit$1;
exports.eachOf = eachOf;
exports.eachOfLimit = eachOfLimit;
exports.eachOfSeries = eachOfSeries;
exports.eachSeries = eachSeries;
exports.ensureAsync = ensureAsync;
exports.every = every;
exports.everyLimit = everyLimit;
exports.everySeries = everySeries;
exports.filter = filter;
exports.filterLimit = filterLimit;
exports.filterSeries = filterSeries;
exports.forever = forever;
exports.groupBy = groupBy;
exports.groupByLimit = groupByLimit;
exports.groupBySeries = groupBySeries;
exports.log = log;
exports.map = map;
exports.mapLimit = mapLimit;
exports.mapSeries = mapSeries;
exports.mapValues = mapValues;
exports.mapValuesLimit = mapValuesLimit;
exports.mapValuesSeries = mapValuesSeries;
exports.memoize = memoize;
exports.nextTick = nextTick;
exports.parallel = parallelLimit;
exports.parallelLimit = parallelLimit$1;
exports.priorityQueue = priorityQueue;
exports.queue = queue$1;
exports.race = race;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reflect = reflect;
exports.reflectAll = reflectAll;
exports.reject = reject;
exports.rejectLimit = rejectLimit;
exports.rejectSeries = rejectSeries;
exports.retry = retry;
exports.retryable = retryable;
exports.seq = seq$1;
exports.series = series;
exports.setImmediate = setImmediate$1;
exports.some = some;
exports.someLimit = someLimit;
exports.someSeries = someSeries;
exports.sortBy = sortBy;
exports.timeout = timeout;
exports.times = times;
exports.timesLimit = timeLimit;
exports.timesSeries = timesSeries;
exports.transform = transform;
exports.unmemoize = unmemoize;
exports.until = until;
exports.waterfall = waterfall;
exports.whilst = whilst;
exports.all = every;
exports.allLimit = everyLimit;
exports.allSeries = everySeries;
exports.any = some;
exports.anyLimit = someLimit;
exports.anySeries = someSeries;
exports.find = detect;
exports.findLimit = detectLimit;
exports.findSeries = detectSeries;
exports.forEach = eachLimit;
exports.forEachSeries = eachSeries;
exports.forEachLimit = eachLimit$1;
exports.forEachOf = eachOf;
exports.forEachOfSeries = eachOfSeries;
exports.forEachOfLimit = eachOfLimit;
exports.inject = reduce;
exports.foldl = reduce;
exports.foldr = reduceRight;
exports.select = filter;
exports.selectLimit = filterLimit;
exports.selectSeries = filterSeries;
exports.wrapSync = asyncify;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(16)(module), __webpack_require__(59).setImmediate, __webpack_require__(3)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(10);
var Axios = __webpack_require__(23);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(7);
axios.CancelToken = __webpack_require__(22);
axios.isCancel = __webpack_require__(8);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(37);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(7);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(5);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(24);
var dispatchRequest = __webpack_require__(25);
var isAbsoluteURL = __webpack_require__(33);
var combineURLs = __webpack_require__(31);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(28);
var isCancel = __webpack_require__(8);
var defaults = __webpack_require__(5);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(9);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(39);

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(40);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(46);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(47);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(11);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

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

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(43);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

(function(global, factory) {
    /* istanbul ignore next */
    if (true) {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        global['PolymerRedux'] = factory();
    }
})(this, function() {
    var warning = 'Polymer Redux: <%s>.%s has "notify" enabled, two-way bindings goes against Redux\'s paradigm';

    /**
     * Returns property bindings found on a given Element/Behavior.
     *
     * @private
     * @param {HTMLElement|Object} obj Element or Behavior.
     * @param {HTMLElement} element Polymer element.
     * @param {Object} store Redux store.
     * @return {Array}
     */
    function getStatePathProperties(obj, element, store) {
        var props = [];

        if (obj.properties != null) {
            Object.keys(obj.properties).forEach(function(name) {
                var prop = obj.properties[name];
                if (prop.hasOwnProperty('statePath')) {
                    // notify flag, warn against two-way bindings
                    if (prop.notify && !prop.readOnly) {
                        console.warn(warning, element.is, name);
                    }
                    props.push({
                        name: name,
                        // Empty statePath return state
                        path: prop.statePath || store.getState,
                        readOnly: prop.readOnly,
                        type: prop.type
                    });
                }
            });
        }

        return props;
    }

    /**
     * Factory function for creating a listener for a give Polymer element. The
     * returning listener should be passed to `store.subscribe`.
     *
     * @private
     * @param {HTMLElement} element Polymer element.
     * @return {Function} Redux subcribe listener.
     */
    function createListener(element, store) {
        var props = getStatePathProperties(element, element, store);

        // behavior property bindings
        if (Array.isArray(element.behaviors)) {
            element.behaviors.forEach(function(behavior) {
                var extras = getStatePathProperties(behavior, element, store);
                if (extras.length) {
                    Array.prototype.push.apply(props, extras);
                }
            });

            // de-dupe behavior props
            var names = props.map(function(prop) {
                return prop.name; // grab the prop names
            });
            props = props.filter(function(prop, i) {
                return names.indexOf(prop.name) === i; // indices must match
            });
        }

        // redux listener
        return function() {
            var state = store.getState();
            props.forEach(function(property) {
                var propName = property.name;
                var splices = [];
                var value, previous;

                // statePath, a path or function.
                var path = property.path;
                if (typeof path == 'function') {
                    value = path.call(element, state);
                } else {
                    value = Polymer.Base.get(path, state);
                }

                // prevent unnecesary polymer notifications
                previous = element.get(property.name);
                if (value === previous) {
                    return;
                }

                // type of array, work out splices before setting the value
                if (property.type === Array) {
                    value = value || /* istanbul ignore next */ [];
                    previous = previous || /* istanbul ignore next */ [];

                    // check the value type
                    if (!Array.isArray(value)) {
                        throw new TypeError(
                            '<'+ element.is +'>.'+ propName +' type is Array but given: ' + (typeof value)
                        );
                    }

                    splices = Polymer.ArraySplice.calculateSplices(value, previous);
                }

                // set
                if (property.readOnly) {
                    element.notifyPath(propName, value);
                } else {
                    element.set(propName, value);
                }

                // notify element of splices
                if (splices.length) {
                    element.notifySplices(propName, splices);
                }
            });
            element.fire('state-changed', state);
        }
    }

    /**
     * Binds an given Polymer element to a Redux store.
     *
     * @private
     * @param {HTMLElement} element Polymer element.
     * @param {Object} store Redux store.
     */
    function bindReduxListener(element, store) {
        var listener;

        if (element._reduxUnsubscribe) return;

        listener = createListener(element, store);
        listener(); // start bindings

        element._reduxUnsubscribe = store.subscribe(listener);
    }

    /**
     * Unbinds a Polymer element from a Redux store.
     *
     * @private
     * @param {HTMLElement} element
     */
    function unbindReduxListener(element) {
        if (typeof element._reduxUnsubscribe === 'function') {
            element._reduxUnsubscribe();
            delete element._reduxUnsubscribe;
        }
    }

    /**
     * Builds list of action creators from a given element and it's inherited
     * behaviors setting the list onto the element.
     *
     * @private
     * @param {HTMLElement} element Polymer element instance.
     */
    function compileActionCreators(element) {
        var actions = {};
        var behaviors = element.behaviors;

        if (element._reduxActions) return;

        // add behavior actions first, in reverse order so we keep priority
        if (Array.isArray(behaviors)) {
            for (var i = behaviors.length - 1; i >= 0; i--) {
                objectAssign(actions, behaviors[i].actions);
            }
        }

        // element actions have priority
        element._reduxActions = objectAssign(actions, element.actions);
    }

    /**
     * Dispatches a Redux action via a Polymer element. This gives the element
     * a polymorphic dispatch function. See the readme for the various ways to
     * dispatch.
     *
     * @private
     * @param {HTMLElement} element Polymer element.
     * @param {Object} store Redux store.
     * @param {Arguments} args The arguments passed to `element.dispatch`.
     * @return {Object} The computed Redux action.
     */
    function dispatchReduxAction(element, store, args) {
        var action = args[0];
        var actions = element._reduxActions;

        args = castArgumentsToArray(args);

        // action name
        if (actions && typeof action === 'string') {
            if (typeof actions[action] !== 'function') {
                throw new TypeError('Polymer Redux: <' + element.is + '> has no action "' + action + '"');
            }
            action = actions[action].apply(element, args.slice(1));
        }

        // !!! DEPRECIATED !!!
        // This will be removed as of 1.0.

        // action creator
        if (typeof action === 'function' && action.length === 0) {
            return store.dispatch(action());
        }

        // ---

        // middleware, make sure we pass the polymer-redux dispatch
        // so we have access to the elements action creators
        if (typeof action === 'function') {
            return store.dispatch(function() {
                var argv = castArgumentsToArray(arguments);
                // replace redux dispatch
                argv.splice(0, 1, function() {
                    return dispatchReduxAction(element, store, arguments);
                });
                return action.apply(element, argv);
            });
        }

        // action
        return store.dispatch(action);
    }

    /**
     * Turns arguments into an Array.
     *
     * @param {Arguments} args
     * @return {Array}
     */
    function castArgumentsToArray(args) {
        return Array.prototype.slice.call(args, 0);
    }

    /**
     * Object.assign()
     *
     * @param {Object} target
     * @param {Object} [...obj]
     * @return {Object} The target.
     */
    function objectAssign(target) {
        // use browser
        if (typeof Object.assign === 'function') {
            return Object.assign.apply(Object, arguments);
        }

        var hasOwn = Object.prototype.hasOwnProperty;
        var argc = arguments.length;
        var obj;

        for (var i = 1; i < argc; ++i) {
            obj = arguments[i];
            if (obj != null) {
                for (var k in obj) {
                    if (hasOwn.call(obj, k)) {
                        target[k] = obj[k];
                    }
                }
            }
        }

        return target;
    }

    /**
     * Creates PolymerRedux behaviors from a given Redux store.
     *
     * @param {Object} store Redux store.
     * @return {PolymerRedux}
     */
    return function(store) {
        var PolymerRedux;

        // check for store
        if (!store) {
            throw new TypeError('missing redux store');
        }

        /**
         * `PolymerRedux` binds a given Redux store's state to implementing Elements.
         *
         * Full documentation available, https://github.com/tur-nr/polymer-redux.
         *
         * @polymerBehavior PolymerRedux
         * @demo demo/index.html
         */
        return PolymerRedux = {
            /**
             * Fired when the Redux store state changes.
             * @event state-changed
             * @param {*} state
             */

            ready: function() {
                bindReduxListener(this, store);
                compileActionCreators(this);
            },

            attached: function() {
                bindReduxListener(this, store);
                compileActionCreators(this);
            },

            detached: function() {
                unbindReduxListener(this);
            },

            /**
             * Dispatches an action to the Redux store.
             *
             * @param {String|Object|Function} action
             * @return {Object} The action that was dispatched.
             */
            dispatch: function(action /*, [...args] */) {
                return dispatchReduxAction(this, store, arguments);
            },

            /**
             * Gets the current state in the Redux store.
             * @return {*}
             */
            getState: function() {
                return store.getState();
            },
        };
    };
});


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(13);
/* unused harmony export default */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(15);
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* unused harmony reexport bindActionCreators */
/* unused harmony reexport applyMiddleware */
/* unused harmony reexport compose */







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(3)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(58);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(16)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(55);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = appConnectReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = appConnectAction;



const initialState = {
    list: []
}

function appConnectReducer(state = initialState, action) {

    switch (action.type) {
        case 'APP_CONNECT_LIST':
            return Object.assign({}, state, { list: action.payload });
        default:
            return state
    }

}

function appConnectAction(store) {

    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* commonAction */])(),
    {
        APP_CONNECT_LIST: function (id) {
            __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get(`/apps/connects/${id}`)
                .then(res => {
                    store.dispatch({ type: 'APP_CONNECT_LIST', payload: res.data })
                    this.nylonVisible(true);
                })
                .catch(err => {

                })
        },
        APP_CONNECT_UPDATE: function (data) {
            this.fire('toast', { status: 'load' });
            var conns=[]
            data.connections.forEach(function (conn) {
                   if (conn.status == true) {
                      conns.push(conn.id);
                   }
            });
            data.connections=conns;
            __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].put(`/apps/app`, data)
                .then(res => {
                    this.APP_CONNECT_LIST(data.id);
                    this.fire('toast', {
                        status: 'success', text: 'บันทึกสำเร็จ',
                        callback: () => {
                            //this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    ]

}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = appRoleReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = appRoleAction;



const initialState = {
    list:[]
}


function appRoleReducer(state = initialState,action){

    switch (action.type) {
        case 'APP_ROLE_LIST':
            return Object.assign({},state,{list:action.payload});
        default:
            return state
    }

}

function appRoleAction(store){

    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* commonAction */])(),
        {
            APP_ROLE_LIST:function(id){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get(`/apps/roles/${id}`)
                .then(res=>{
                    
                    res.data.role.push("");
                    store.dispatch({type:'APP_ROLE_LIST',payload:res.data})
                    this.nylonVisible(true);
                })
                .catch(err=>{

                })
            },
            APP_ROLE_UPDATE:function(data){
                this.fire('toast',{status:'load'});
               // data.scope = data.scope.split(",");
               // /apps/app
                var len=data.role.length;
                if(data.role[len-1]==""){
                  //  data.role.pop(len);
                   data.role.splice(len-1,1);
                }
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].put(`/apps/app`,data)
                .then(res=>{
                    this.APP_ROLE_LIST(data.id);
                    this.fire('toast',{status:'success',text:'บันทึกสำเร็จ',
                        callback:()=>{
                          //  this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    ]

}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = appUserReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = appUserAction;



const initialState = {
    list: [],
    updates: [],
    deletes: []
}


function appUserReducer(state = initialState, action) {

    switch (action.type) {
        case 'APP_USER_LIST':
            return Object.assign({}, state, { list: action.payload });
        case 'APP_USER_DELETE':
            state.deletes.push(action.payload)
            return Object.assign({}, state, { deletes: state.deletes });
        case 'APP_USER_UPDATE':
            state.updates.push(action.payload)
            return Object.assign({}, state, { updates: state.updates });
        case 'APP_USER_CLEAR':
            return Object.assign({}, state, { deletes: [], updates: [] });
        default:
            return state
    }

}

function appUserAction(store) {

    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* commonAction */])(),
    {
        APP_USER_LIST: function (id) {
            // console.log('APP_USER_LIST');
            __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get(`/apps/users/${id}`)
                .then(res => {
                    console.log(res.data);
                    // res.data.role.push("");
                    store.dispatch({ type: 'APP_USER_LIST', payload: res.data })
                    store.dispatch({ type: 'APP_USER_CLEAR' });
                    this.nylonVisible(true);
                })
                .catch(err => {

                })
        },

        APP_USER_UPDATE: function (data) {
            store.dispatch({ type: 'APP_USER_UPDATE', payload: data });
        },

        APP_USER_DELETE: function (data) {
            store.dispatch({ type: 'APP_USER_DELETE', payload: data });
        },


        APP_USER_SAVE: function (data, updates, deletes) {
            this.fire('toast', { status: 'load' });
            // var user_dels=[];
            var updates_ = [];
            updates.forEach(function (user) {
                var u = {
                    id: user.id,
                    app_id: user.app_id,
                    role: user.role,
                    status: user.status,
                    uid: user.uid
                }
                updates_.push(u);
            });
            var user_apps = {
                updates: updates_,
                deletes: deletes
            }
            console.log(user_apps);

            __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].put(`/apps/users`, user_apps)
                .then(res => {
                    this.APP_USER_LIST(data.id);
                    this.fire('toast', {
                        status: 'success', text: 'บันทึกสำเร็จ',
                        callback: () => {
                            //  this.$$('panel-right').close();
                            //store.dispatch({ type: 'APP_USER_CLEAR' });
                        }
                    });
                })
                .catch(err => {
                    console.log({err});
                })
        }
    }

    ]

}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jwt_decode__);
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = authAction;




const initialState = {
    user:{role:'none'}
}

function authReducer(state = initialState,action){

    switch (action.type) {
        case 'AUTH_SET_USER':
            var userInfo;
            if(action.payload.token){
                userInfo = __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default()(action.payload.token)
            }else{
                userInfo = action.payload;
            }
            return Object.assign({},state,{user:userInfo});
        case 'AUTH_INFO':
            return Object.assign({},state,{user:action.payload});
        default:
            return state
    }

}

function authAction(store){

    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* commonAction */])(),
        {
            AUTH_LOGIN:function(formLogin){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].post('./auth/login',{username:formLogin.user,password:formLogin.pass})
                .then((response)=>{


                    localStorage.setItem("token",response.data.token);
                    store.dispatch({type:'AUTH_SET_USER',payload:response.data})

                    let userInfo;
                    if(response.data.token){
                        userInfo = __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default()(response.data.token)
                    }else{
                        userInfo = response.data;
                    }

                    if(userInfo.role=="teacher"){
                        this.fire('nylon-change-page',{path:'/examRoom'})
                    }else{
                        this.fire('nylon-change-page',{path:'/examHistory'})
                    }

                })
                .catch((error)=>{
                    //console.log('error');
                    console.log({error});
                    alert('error')
                });
            }
        }
    ]

}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = commonSystemReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = commonSystemAction;



const initialState = {
    module:[]
}

function commonSystemReducer(state = initialState,action){
    switch (action.type) {
        case 'COMMON_MODULE':
            return Object.assign({},state,{module:action.payload});
        default:
            return state;
    }
}

function commonSystemAction(store){
    return [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* commonAction */])(),{
            COMMON_MODULE:function(data){
                // var user = store.getState().auth.user;
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get('/common/module/')
                .then(res=>{
                    store.dispatch({type:'COMMON_MODULE',payload:res.data})
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    ]
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = myAppReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = myAppAction;



const initialState = {
    list:[],
    balanceList:[],
    select:{}
}

function myAppReducer(state = initialState,action){

    switch (action.type) {
        case 'MY_APP_LIST':
            return Object.assign({},state,{list:action.payload});
        case 'MY_APP_BALANCE_LIST':
            return Object.assign({},state,{balanceList:action.payload});
        case 'MY_APP_SELECT':
            return Object.assign({},state,{select:action.payload});
        default:
            return state
    }

}

function myAppAction(store){

    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* commonAction */])(),
        {

            MY_APP_LIST:function(id){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get(`/apps/appList`)
                .then(res=>{
                    store.dispatch({type:'MY_APP_LIST',payload:res.data})
                    this.nylonVisible(true);
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            MY_APP_BALANCE_LIST:function(){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get(`/apps/balanceList`)
                .then(res=>{
                    store.dispatch({type:'MY_APP_BALANCE_LIST',payload:res.data})
                })
                .catch(err=>{
                    console.log(err);
                })

            },
            MY_APP_REQUEST:function(app_id,status){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].post(`/apps/request`,{app_id:app_id,status:status})
                .then(res=>{    
                    //console.log(res.data)
                    this.MY_APP_LIST(this.getParam.id);
                    this.MY_APP_BALANCE_LIST(this.getParam.id);
                    this.$$('panel-right').close();
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            MY_APP_SELECT:function(id){
                var panelRight = this.$$('panel-right');
                this.selected = 1;
                panelRight.title = "จัดการแอป"
                panelRight.open();

                //console.log(id)

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get(`/apps/app/${id}`)
                .then(res=>{
                    store.dispatch({type:'MY_APP_SELECT',payload:res.data})
                    this.$$('panel-right').open();
                })
                .catch(err=>{
                    console.log(err);
                })

            },
            MY_APP_INSERT:function(data){

                this.fire('toast',{status:'load'});

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].post(`/apps/app`,data)
                .then(res=>{
                    this.MY_APP_LIST(this.getParam.id);
                    this.fire('toast',{status:'success',text:'บันทึกสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })

            },
            MY_APP_DELETE:function(id){
                
                this.fire('toast',{status:'load'});
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].delete(`/apps/app/${id}`)
                .then(res=>{
                    this.MY_APP_LIST(this.getParam.id);
                    this.fire('toast',{status:'success',text:'ลบข้อมูลสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            MY_APP_UPDATE:function(data){
                this.fire('toast',{status:'load'});

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].put(`/apps/app`,data)
                .then(res=>{
                    this.MY_APP_LIST(this.getParam.id);
                    this.fire('toast',{status:'success',text:'บันทึกสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    ]

}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = providerReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = providerAction;



const initialState = {
    list:[],
    select:{}
}

function providerReducer(state = initialState,action){

    switch (action.type) {
        case 'PROVIDER_LIST':
            return Object.assign({},state,{list:action.payload});
        case 'PROVIDER_SELECT':
            return Object.assign({},state,{select:action.payload});
        case 'PROVIDER_CLEAR_SELECT':
            return Object.assign({},state,{select:{}});
        default:
            return state
    }

}

function providerAction(store){

    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* commonAction */])(),
        {
            PROVIDER_TEST:function(id){
                console.log(id);
            },
            PROVIDER_LIST:function(){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get('/providers')
                .then(res=>{
                    store.dispatch({type:'PROVIDER_LIST',payload:res.data})
                    this.nylonVisible(true);
                })
                .catch(err=>{

                })
            },
            PROVIDER_SELECT:function(id){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get(`/providers/provider/${id}`)
                .then(res=>{
                    store.dispatch({type:'PROVIDER_SELECT',payload:res.data})
                    this.$$('panel-right').open();
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            PROVIDER_CLEAR_SELECT:function(){
                store.dispatch({type:'PROVIDER_CLEAR_SELECT'})
            },
            PROVIDER_INSERT:function(data){

                this.fire('toast',{status:'load'});
                data.scope = data.scope.split(",");

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].post(`/providers/provider`,data)
                .then(res=>{
                    this.PROVIDER_LIST();
                    this.fire('toast',{status:'success',text:'บันทึกสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })

            },
            PROVIDER_DELETE:function(id){
                
                this.fire('toast',{status:'load'});

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].delete(`/providers/provider/${id}`)
                .then(res=>{
                    this.PROVIDER_LIST();
                    this.fire('toast',{status:'success',text:'ลบข้อมูลสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            PROVIDER_UPDATE:function(data){
                this.fire('toast',{status:'load'});
                data.scope = data.scope.split(",");

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].put(`/providers/provider`,data)
                .then(res=>{
                    this.PROVIDER_LIST();
                    this.fire('toast',{status:'success',text:'บันทึกสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    ]

}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = userReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = userAction;



const initialState = {
    list:[],
    select:{}
}

function userReducer(state = initialState,action){

    switch (action.type) {
        case 'USER_LIST':
            return Object.assign({},state,{list:action.payload});
        case 'USER_SELECT':
            return Object.assign({},state,{select:action.payload});
        case 'USER_CLEAR_SELECT':
            return Object.assign({},state,{select:{}});
        default:
            return state
    }

}

function userAction(store){

    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* commonAction */])(),
        {
            USER_TEST:function(id){
                console.log(id);
            },
            USER_LIST:function(){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get('/users/info')
                .then(res=>{
                    store.dispatch({type:'USER_LIST',payload:res.data})

                      this.nylonVisible(true);

                })
                .catch(err=>{

                })
            },
            USER_SELECT:function(id){
                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].get(`/users/info/${id}`)
                .then(res=>{
                    store.dispatch({type:'USER_SELECT',payload:res.data})
                    this.$$('panel-right').open();
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            USER_CLEAR_SELECT:function(){
                store.dispatch({type:'USER_CLEAR_SELECT'})
            },
            USER_INSERT:function(data){

                this.fire('toast',{status:'load'});
               // data.scope = data.scope.split(",");

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].post(`/users/user`,data)
                .then(res=>{
                    this.USER_LIST();
                    this.fire('toast',{status:'success',text:'บันทึกสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })

            },
            USER_DELETE:function(id){
                
                this.fire('toast',{status:'load'});

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].delete(`/users/user/${id}`)
                .then(res=>{
                    this.USER_LIST();
                    this.fire('toast',{status:'success',text:'ลบข้อมูลสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })
            },
            USER_UPDATE:function(data){
                this.fire('toast',{status:'load'});
                //data.scope = data.scope.split(",");

                __WEBPACK_IMPORTED_MODULE_0__axios__["a" /* default */].put(`/users/user`,data)
                .then(res=>{
                    this.USER_LIST();
                    this.fire('toast',{status:'success',text:'บันทึกสำเร็จ',
                        callback:()=>{
                            this.$$('panel-right').close();
                        }
                    });
                })
                .catch(err=>{
                    console.log(err);
                })
            }
        }
    ]

}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmM1NjY0OTRjODZiZTFkMjdiZWIiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9yZWR1eC1zdG9yZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9yZWR1eC1zdG9yZS9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9jb21wb3NlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9yZWR1eC1zdG9yZS9yZWR1Y2VyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3JlZHV4LXN0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXN5bmMvZGlzdC9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL34vYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL34vanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qd3QtZGVjb2RlL2xpYi9hdG9iLmpzIiwid2VicGFjazovLy8uL34vand0LWRlY29kZS9saWIvYmFzZTY0X3VybF9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qd3QtZGVjb2RlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3BvbHltZXItcmVkdXgvcG9seW1lci1yZWR1eC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2VzL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3JlZHV4LXN0b3JlL3JlZHVjZXIvYXBwQ29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3JlZHV4LXN0b3JlL3JlZHVjZXIvYXBwUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3JlZHV4LXN0b3JlL3JlZHVjZXIvYXBwVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3JlZHV4LXN0b3JlL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3JlZHV4LXN0b3JlL3JlZHVjZXIvY29tbW9uU3lzdGVtLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvcmVkdXgtc3RvcmUvcmVkdWNlci9teUFwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL3JlZHV4LXN0b3JlL3JlZHVjZXIvcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9yZWR1eC1zdG9yZS9yZWR1Y2VyL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7OzsrQ0M1RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxrQkFBa0IsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0QkFBNEI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLE9BQU87QUFDbEIsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0Isd0JBQXdCLG9CQUFvQjtBQUM3RTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixtQ0FBbUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFdBQVcsc0JBQXNCLHdCQUF3QixvQkFBb0I7QUFDN0U7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLG9CQUFvQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9CQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLG1EQUFtRCxvQkFBb0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQXNEO0FBQ2pGLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxFQUFFO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EscURBQXFELDhCQUE4QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsOEJBQThCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxXQUFXLE9BQU8sb0RBQW9ELG9CQUFvQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekUsUUFBUTtBQUNSO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QztBQUM5Qyw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0NBQWtDOztBQUV0RTs7QUFFQSxpQkFBaUI7QUFDakI7O0FBRUEsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLDJGQUF5QyxHQUFHO0FBQzVDO0FBQ0Esb0NBQW9DLG9DQUFvQztBQUN4RTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLGdDQUFnQyx5QkFBeUI7QUFDekQsYUFBYTtBQUNiOztBQUVBLG1DQUFtQyxjQUFjO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCLGFBQWE7QUFDYjs7QUFFQSxtQ0FBbUMsY0FBYzs7QUFFakQsOEZBQTRDLEdBQUc7QUFDL0M7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsbUNBQW1DLGNBQWM7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUEsQyIsImZpbGUiOiIuL3B1YmxpYy9zcmMvcmVkdXgtc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2OCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmM1NjY0OTRjODZiZTFkMjdiZWIiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAtPiB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmICFpc0FycmF5KG9iaikpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbW1vbkFjdGlvbigpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaXN0ZW5lcnM6e1xyXG4gICAgICAgICAgICAnbWV0aG9kJzonaGFuZGxlQ2FsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUNhbGw6ZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHZhciBkZXRhaWwgPSBlLmRldGFpbDtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBkZXRhaWwuYXJncztcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZGV0YWlsLmNhbGxiYWNrO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSBhcmdzWzBdO1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xyXG4gICAgICAgICAgICBpZihhcmdzLmxlbmd0aD4xKVxyXG4gICAgICAgICAgICBhcmdzID0gYXJncy5zbGljZSgxLGFyZ3MubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcmdzVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBbXTtcclxuICAgICAgICAgICAgYXJncy5tYXAoKHJvdyxpKT0+e1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2gocm93KTtcclxuICAgICAgICAgICAgICAgIGlmKGkhPTApIGFyZ3NUZXh0Kz0nLCc7XHJcbiAgICAgICAgICAgICAgICBhcmdzVGV4dCArPSBgcGFyYW1zWyR7aX1dYFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FsbGJhY2soZXZhbChgXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLiR7bWV0aG9kTmFtZX0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLiR7bWV0aG9kTmFtZX0oJHthcmdzVGV4dH0pXHJcbiAgICAgICAgICAgIGApKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hBY3Rpb25CZWhhdmlvcigpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwYXRjaEFjdGlvbjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc2xvdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlKCdtZXRob2QnLHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzOmFyZ3VtZW50cyxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazoocHJvbWlzZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHByb21pc2UgPT0gXCJ1bmRlZmluZWRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNsb3ZlKCdBY3Rpb24gbm8gcHJvbWlzZS4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNsb3ZlKHByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYmFzZVVSTCA9IGBodHRwczovLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfToke2xvY2F0aW9uLnBvcnR9YDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9zcmMvcmVkdXgtc3RvcmUvY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Y3JlYXRlfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHtiYXNlVVJMfSBmcm9tICcuL2NvbmZpZydcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6YmFzZVVSTCsnL2FwaScsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAvLyAnQXV0aG9yaXphdGlvbic6ICdKV1QgJysgQ29va2llcy5nZXQoJ2p3dCcpLFxyXG4gICAgICAgICd4LWFwcC1pZCc6Q29va2llcy5nZXQoJ3hfYXBwX2lkJyksXHJcbiAgICAgICAgJ3gtYXBwLWtleSc6Q29va2llcy5nZXQoJ3hfYXBwX2tleScpXHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3NyYy9yZWR1eC1zdG9yZS9heGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBQUk9URUNUSU9OX1BSRUZJWCA9IC9eXFwpXFxdXFx9Jyw/XFxuLztcbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShQUk9URUNUSU9OX1BSRUZJWCwgJycpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWVodG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvZGVmYXVsdHMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuIEAgQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gtZXMvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1BsYWluT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgdmFyIGxhc3QgPSBmdW5jc1tmdW5jcy5sZW5ndGggLSAxXTtcbiAgdmFyIHJlc3QgPSBmdW5jcy5zbGljZSgwLCAtMSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc3QucmVkdWNlUmlnaHQoZnVuY3Rpb24gKGNvbXBvc2VkLCBmKSB7XG4gICAgICByZXR1cm4gZihjb21wb3NlZCk7XG4gICAgfSwgbGFzdC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9lcy9jb21wb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbmV4cG9ydCB2YXIgQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6ICdAQHJlZHV4L0lOSVQnXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVuaGFuY2VyIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9lcy9jcmVhdGVTdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vYXhpb3MnXHJcbmltcG9ydCB7Y29tbW9uQWN0aW9ufSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBhc3luYyBmcm9tICdhc3luYydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxpc3Q6W10sXHJcbiAgICBzZWxlY3Q6e30sXHJcbiAgICBwcm92aWRlckxpc3Q6W11cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKXtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnQVBQX0xJU1QnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSx7bGlzdDphY3Rpb24ucGF5bG9hZH0pO1xyXG4gICAgICAgIGNhc2UgJ0FQUF9TRUxFQ1QnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSx7c2VsZWN0OmFjdGlvbi5wYXlsb2FkfSk7XHJcbiAgICAgICAgY2FzZSAnQVBQX0NMRUFSX1NFTEVDVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtzZWxlY3Q6e319KTtcclxuICAgICAgICBjYXNlICdBUFBfUFJPVklERVJfTElTVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtwcm92aWRlckxpc3Q6YWN0aW9uLnBheWxvYWR9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBBY3Rpb24oc3RvcmUpe1xyXG5cclxuICAgIHJldHVybiBbY29tbW9uQWN0aW9uKCksXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgQVBQX1BST1ZJREVSX0xJU1Q6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL3Byb3ZpZGVycycpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonQVBQX1BST1ZJREVSX0xJU1QnLHBheWxvYWQ6cmVzLmRhdGF9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBBUFBfTElTVDpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBwcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonQVBQX0xJU1QnLHBheWxvYWQ6cmVzLmRhdGF9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnlsb25WaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBBUFBfU0VMRUNUOmZ1bmN0aW9uKGlkKXtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChgL2FwcHMvYXBwLyR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOidBUFBfU0VMRUNUJyxwYXlsb2FkOnJlcy5kYXRhfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiQkKCdwYW5lbC1yaWdodCcpLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEFQUF9DTEVBUl9TRUxFQ1Q6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vIHZhciBwcm92aWRlckxpc3QgPSBzdG9yZS5nZXRTdGF0ZSgpLmFwcC5wcm92aWRlckxpc3Q7XHJcbiAgICAgICAgICAgICAgICAvLyBhc3luYy5tYXAocHJvdmlkZXJMaXN0ICxmdW5jdGlvbihyb3csIGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYWxsYmFjayhudWxsLCB7aWQ6cm93LmlkLHByb3ZpZGVyX25hbWU6cm93LnByb3ZpZGVyX25hbWUsY2hlY2tlZDpmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgLy8gfSAsZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6J0FQUF9DTEVBUl9TRUxFQ1QnLHBheWxvYWQ6e3Byb3ZpZGVyOnJlc3VsdH19KVxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonQVBQX0NMRUFSX1NFTEVDVCd9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBBUFBfSU5TRVJUOmZ1bmN0aW9uKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLHtzdGF0dXM6J2xvYWQnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwcHMvYXBwYCxkYXRhKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BUFBfTElTVCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLHtzdGF0dXM6J3N1Y2Nlc3MnLHRleHQ6J+C4muC4seC4meC4l+C4tuC4geC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOigpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQkKCdwYW5lbC1yaWdodCcpLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBBUFBfREVMRVRFOmZ1bmN0aW9uKGlkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcse3N0YXR1czonbG9hZCd9KTtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgL2FwcHMvYXBwLyR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQVBQX0xJU1QoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmUoJ3RvYXN0Jyx7c3RhdHVzOidzdWNjZXNzJyx0ZXh0OifguKXguJrguILguYnguK3guKHguLnguKXguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazooKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kJCgncGFuZWwtcmlnaHQnKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBBUFBfVVBEQVRFOmZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLHtzdGF0dXM6J2xvYWQnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MucHV0KGAvYXBwcy9hcHBgLGRhdGEpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFQUF9MSVNUKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcse3N0YXR1czonc3VjY2VzcycsdGV4dDon4Lia4Lix4LiZ4LiX4Li24LiB4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCQoJ3BhbmVsLXJpZ2h0JykuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9zcmMvcmVkdXgtc3RvcmUvcmVkdWNlci9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IFBvbHltZXJSZWR1eCBmcm9tICdwb2x5bWVyLXJlZHV4J1xyXG5pbXBvcnQgeyBkaXNwYXRjaEFjdGlvbkJlaGF2aW9yIH0gZnJvbSAnLi9jb25maWcnXHJcblxyXG5cclxuaW1wb3J0IHsgY29tbW9uU3lzdGVtUmVkdWNlciwgY29tbW9uU3lzdGVtQWN0aW9uIH0gZnJvbSAnLi9yZWR1Y2VyL2NvbW1vblN5c3RlbSdcclxuaW1wb3J0IHsgYXV0aFJlZHVjZXIsIGF1dGhBY3Rpb24gfSBmcm9tICcuL3JlZHVjZXIvYXV0aCdcclxuaW1wb3J0IHsgcHJvdmlkZXJSZWR1Y2VyLCBwcm92aWRlckFjdGlvbiB9IGZyb20gJy4vcmVkdWNlci9wcm92aWRlcidcclxuaW1wb3J0IHsgYXBwUmVkdWNlciwgYXBwQWN0aW9uIH0gZnJvbSAnLi9yZWR1Y2VyL2FwcCdcclxuaW1wb3J0IHsgYXBwQ29ubmVjdFJlZHVjZXIsIGFwcENvbm5lY3RBY3Rpb24gfSBmcm9tICcuL3JlZHVjZXIvYXBwQ29ubmVjdCdcclxuaW1wb3J0IHsgYXBwUm9sZVJlZHVjZXIsIGFwcFJvbGVBY3Rpb24gfSBmcm9tICcuL3JlZHVjZXIvYXBwUm9sZSdcclxuXHJcbmltcG9ydCB7YXBwUmVkdWNlcixhcHBBY3Rpb259IGZyb20gJy4vcmVkdWNlci9hcHAnXHJcbmltcG9ydCB7ICBteUFwcFJlZHVjZXIsIG15QXBwQWN0aW9uIH0gZnJvbSAnLi9yZWR1Y2VyL215QXBwJ1xyXG5pbXBvcnQgeyBhcHBVc2VyUmVkdWNlciwgYXBwVXNlckFjdGlvbiB9IGZyb20gJy4vcmVkdWNlci9hcHBVc2VyJ1xyXG5pbXBvcnQgeyB1c2VyUmVkdWNlciwgdXNlckFjdGlvbiB9IGZyb20gJy4vcmVkdWNlci91c2VyJ1xyXG5cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvbW1vblN5c3RlbTogY29tbW9uU3lzdGVtUmVkdWNlcixcclxuICAgIGF1dGg6IGF1dGhSZWR1Y2VyLFxyXG4gICAgcHJvdmlkZXI6IHByb3ZpZGVyUmVkdWNlcixcclxuICAgIGFwcDogYXBwUmVkdWNlcixcclxuICAgIGFwcENvbm5lY3Q6IGFwcENvbm5lY3RSZWR1Y2VyLFxyXG4gICAgYXBwUm9sZTogYXBwUm9sZVJlZHVjZXIsXHJcbiAgICBhcHBVc2VyOiBhcHBVc2VyUmVkdWNlcixcclxuICAgIG15QXBwOm15QXBwUmVkdWNlcixcclxuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG5cclxufSk7XHJcbmNvbnN0IHN0b3JlQXBwID0gY3JlYXRlU3RvcmUoXHJcbiAgICByb290UmVkdWNlcixcclxuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcclxuKTtcclxuXHJcbndpbmRvdy5SZWR1eEJlaGF2aW9yID0gW1BvbHltZXJSZWR1eChzdG9yZUFwcCksIGRpc3BhdGNoQWN0aW9uQmVoYXZpb3IoKV07XHJcbndpbmRvdy5kaXNwYXRjaEFjdGlvbkJlaGF2aW9yID0gZGlzcGF0Y2hBY3Rpb25CZWhhdmlvcigpO1xyXG5cclxud2luZG93LmNvbW1vblN5c3RlbUFjdGlvbiA9IGNvbW1vblN5c3RlbUFjdGlvbihzdG9yZUFwcCk7XHJcbndpbmRvdy5hdXRoQWN0aW9uID0gYXV0aEFjdGlvbihzdG9yZUFwcCk7XHJcbndpbmRvdy5wcm92aWRlckFjdGlvbiA9IHByb3ZpZGVyQWN0aW9uKHN0b3JlQXBwKTtcclxud2luZG93LmFwcEFjdGlvbiA9IGFwcEFjdGlvbihzdG9yZUFwcCk7XHJcbndpbmRvdy5hcHBSb2xlQWN0aW9uID0gYXBwUm9sZUFjdGlvbihzdG9yZUFwcCk7XHJcbndpbmRvdy5hcHBDb25uZWN0QWN0aW9uID0gYXBwQ29ubmVjdEFjdGlvbihzdG9yZUFwcCk7XHJcbndpbmRvdy5hcHBVc2VyQWN0aW9uID0gYXBwVXNlckFjdGlvbihzdG9yZUFwcCk7XHJcbndpbmRvdy5teUFwcEFjdGlvbiA9IG15QXBwQWN0aW9uKHN0b3JlQXBwKTtcclxud2luZG93LnVzZXJBY3Rpb24gPSB1c2VyQWN0aW9uKHN0b3JlQXBwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9zcmMvcmVkdXgtc3RvcmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gICAgKGZhY3RvcnkoKGdsb2JhbC5hc3luYyA9IGdsb2JhbC5hc3luYyB8fCB7fSkpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QkMShmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8vIExvZGFzaCByZXN0IGZ1bmN0aW9uIHdpdGhvdXQgZnVuY3Rpb24udG9TdHJpbmcoKVxuLy8gcmVtYXBwaW5nc1xuZnVuY3Rpb24gcmVzdChmdW5jLCBzdGFydCkge1xuICAgIHJldHVybiBvdmVyUmVzdCQxKGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSk7XG59XG5cbnZhciBpbml0aWFsUGFyYW1zID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIHJlc3QoZnVuY3Rpb24gKGFyZ3MgLyouLi4sIGNhbGxiYWNrKi8pIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCBhcmdzLCBjYWxsYmFjayk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBUYWtlIGEgc3luYyBmdW5jdGlvbiBhbmQgbWFrZSBpdCBhc3luYywgcGFzc2luZyBpdHMgcmV0dXJuIHZhbHVlIHRvIGFcbiAqIGNhbGxiYWNrLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcGx1Z2dpbmcgc3luYyBmdW5jdGlvbnMgaW50byBhIHdhdGVyZmFsbCxcbiAqIHNlcmllcywgb3Igb3RoZXIgYXN5bmMgZnVuY3Rpb25zLiBBbnkgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgZ2VuZXJhdGVkXG4gKiBmdW5jdGlvbiB3aWxsIGJlIHBhc3NlZCB0byB0aGUgd3JhcHBlZCBmdW5jdGlvbiAoZXhjZXB0IGZvciB0aGUgZmluYWxcbiAqIGNhbGxiYWNrIGFyZ3VtZW50KS4gRXJyb3JzIHRocm93biB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXG4gKlxuICogSWYgdGhlIGZ1bmN0aW9uIHBhc3NlZCB0byBgYXN5bmNpZnlgIHJldHVybnMgYSBQcm9taXNlLCB0aGF0IHByb21pc2VzJ3NcbiAqIHJlc29sdmVkL3JlamVjdGVkIHN0YXRlIHdpbGwgYmUgdXNlZCB0byBjYWxsIHRoZSBjYWxsYmFjaywgcmF0aGVyIHRoYW4gc2ltcGx5XG4gKiB0aGUgc3luY2hyb25vdXMgcmV0dXJuIHZhbHVlLlxuICpcbiAqIFRoaXMgYWxzbyBtZWFucyB5b3UgY2FuIGFzeW5jaWZ5IEVTMjAxNyBgYXN5bmNgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAbmFtZSBhc3luY2lmeVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpVdGlsc1xuICogQG1ldGhvZFxuICogQGFsaWFzIHdyYXBTeW5jXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIFRoZSBzeW5jaHJvbm91cyBmdW51Y3Rpb24sIG9yIFByb21pc2UtcmV0dXJuaW5nXG4gKiBmdW5jdGlvbiB0byBjb252ZXJ0IHRvIGFuIHtAbGluayBBc3luY0Z1bmN0aW9ufS5cbiAqIEByZXR1cm5zIHtBc3luY0Z1bmN0aW9ufSBBbiBhc3luY2hyb25vdXMgd3JhcHBlciBvZiB0aGUgYGZ1bmNgLiBUbyBiZVxuICogaW52b2tlZCB3aXRoIGAoYXJncy4uLiwgY2FsbGJhY2spYC5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gcGFzc2luZyBhIHJlZ3VsYXIgc3luY2hyb25vdXMgZnVuY3Rpb25cbiAqIGFzeW5jLndhdGVyZmFsbChbXG4gKiAgICAgYXN5bmMuYXBwbHkoZnMucmVhZEZpbGUsIGZpbGVuYW1lLCBcInV0ZjhcIiksXG4gKiAgICAgYXN5bmMuYXN5bmNpZnkoSlNPTi5wYXJzZSksXG4gKiAgICAgZnVuY3Rpb24gKGRhdGEsIG5leHQpIHtcbiAqICAgICAgICAgLy8gZGF0YSBpcyB0aGUgcmVzdWx0IG9mIHBhcnNpbmcgdGhlIHRleHQuXG4gKiAgICAgICAgIC8vIElmIHRoZXJlIHdhcyBhIHBhcnNpbmcgZXJyb3IsIGl0IHdvdWxkIGhhdmUgYmVlbiBjYXVnaHQuXG4gKiAgICAgfVxuICogXSwgY2FsbGJhY2spO1xuICpcbiAqIC8vIHBhc3NpbmcgYSBmdW5jdGlvbiByZXR1cm5pbmcgYSBwcm9taXNlXG4gKiBhc3luYy53YXRlcmZhbGwoW1xuICogICAgIGFzeW5jLmFwcGx5KGZzLnJlYWRGaWxlLCBmaWxlbmFtZSwgXCJ1dGY4XCIpLFxuICogICAgIGFzeW5jLmFzeW5jaWZ5KGZ1bmN0aW9uIChjb250ZW50cykge1xuICogICAgICAgICByZXR1cm4gZGIubW9kZWwuY3JlYXRlKGNvbnRlbnRzKTtcbiAqICAgICB9KSxcbiAqICAgICBmdW5jdGlvbiAobW9kZWwsIG5leHQpIHtcbiAqICAgICAgICAgLy8gYG1vZGVsYCBpcyB0aGUgaW5zdGFudGlhdGVkIG1vZGVsIG9iamVjdC5cbiAqICAgICAgICAgLy8gSWYgdGhlcmUgd2FzIGFuIGVycm9yLCB0aGlzIGZ1bmN0aW9uIHdvdWxkIGJlIHNraXBwZWQuXG4gKiAgICAgfVxuICogXSwgY2FsbGJhY2spO1xuICpcbiAqIC8vIGVzMjAxNyBleGFtcGxlLCB0aG91Z2ggYGFzeW5jaWZ5YCBpcyBub3QgbmVlZGVkIGlmIHlvdXIgSlMgZW52aXJvbm1lbnRcbiAqIC8vIHN1cHBvcnRzIGFzeW5jIGZ1bmN0aW9ucyBvdXQgb2YgdGhlIGJveFxuICogdmFyIHEgPSBhc3luYy5xdWV1ZShhc3luYy5hc3luY2lmeShhc3luYyBmdW5jdGlvbihmaWxlKSB7XG4gKiAgICAgdmFyIGludGVybWVkaWF0ZVN0ZXAgPSBhd2FpdCBwcm9jZXNzRmlsZShmaWxlKTtcbiAqICAgICByZXR1cm4gYXdhaXQgc29tZVByb21pc2UoaW50ZXJtZWRpYXRlU3RlcClcbiAqIH0pKTtcbiAqXG4gKiBxLnB1c2goZmlsZXMpO1xuICovXG5mdW5jdGlvbiBhc3luY2lmeShmdW5jKSB7XG4gICAgcmV0dXJuIGluaXRpYWxQYXJhbXMoZnVuY3Rpb24gKGFyZ3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgcmVzdWx0IGlzIFByb21pc2Ugb2JqZWN0XG4gICAgICAgIGlmIChpc09iamVjdChyZXN1bHQpICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVzdWx0LnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyci5tZXNzYWdlID8gZXJyIDogbmV3IEVycm9yKGVycikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnZhciBzdXBwb3J0c1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQXN5bmMoKSB7XG4gICAgdmFyIHN1cHBvcnRlZDtcbiAgICB0cnkge1xuICAgICAgICAvKiBlc2xpbnQgbm8tZXZhbDogMCAqL1xuICAgICAgICBzdXBwb3J0ZWQgPSBpc0FzeW5jKGV2YWwoJyhhc3luYyBmdW5jdGlvbiAoKSB7fSknKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZDtcbn1cblxuZnVuY3Rpb24gaXNBc3luYyhmbikge1xuICAgIHJldHVybiBzdXBwb3J0c1N5bWJvbCAmJiBmbltTeW1ib2wudG9TdHJpbmdUYWddID09PSAnQXN5bmNGdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIHdyYXBBc3luYyhhc3luY0ZuKSB7XG4gICAgcmV0dXJuIGlzQXN5bmMoYXN5bmNGbikgPyBhc3luY2lmeShhc3luY0ZuKSA6IGFzeW5jRm47XG59XG5cbnZhciB3cmFwQXN5bmMkMSA9IHN1cHBvcnRzQXN5bmMoKSA/IHdyYXBBc3luYyA6IGlkZW50aXR5O1xuXG5mdW5jdGlvbiBhcHBseUVhY2gkMShlYWNoZm4pIHtcbiAgICByZXR1cm4gcmVzdChmdW5jdGlvbiAoZm5zLCBhcmdzKSB7XG4gICAgICAgIHZhciBnbyA9IGluaXRpYWxQYXJhbXMoZnVuY3Rpb24gKGFyZ3MsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gZWFjaGZuKGZucywgZnVuY3Rpb24gKGZuLCBjYikge1xuICAgICAgICAgICAgICAgIHdyYXBBc3luYyQxKGZuKS5hcHBseSh0aGF0LCBhcmdzLmNvbmNhdChjYikpO1xuICAgICAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ28uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ287XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wkMSA9IHJvb3QuU3ltYm9sO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWckMSA9IFN5bWJvbCQxID8gU3ltYm9sJDEudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnJDEpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWckMV07XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZyQxXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZyQxXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8kMSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyQxID0gb2JqZWN0UHJvdG8kMS50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZyQxLmNhbGwodmFsdWUpO1xufVxuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJztcbnZhciB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wkMSA/IFN5bWJvbCQxLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICB2YWx1ZSA9IE9iamVjdCh2YWx1ZSk7XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gdmFsdWUpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJztcbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8vIEEgdGVtcG9yYXJ5IHZhbHVlIHVzZWQgdG8gaWRlbnRpZnkgaWYgdGhlIGxvb3Agc2hvdWxkIGJlIGJyb2tlbi5cbi8vIFNlZSAjMTA2NCwgIzEyOTNcbnZhciBicmVha0xvb3AgPSB7fTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmbiA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB2YXIgY2FsbEZuID0gZm47XG4gICAgICAgIGZuID0gbnVsbDtcbiAgICAgICAgY2FsbEZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxudmFyIGl0ZXJhdG9yU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG5cbnZhciBnZXRJdGVyYXRvciA9IGZ1bmN0aW9uIChjb2xsKSB7XG4gICAgcmV0dXJuIGl0ZXJhdG9yU3ltYm9sICYmIGNvbGxbaXRlcmF0b3JTeW1ib2xdICYmIGNvbGxbaXRlcmF0b3JTeW1ib2xdKCk7XG59O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvJDMgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSQyID0gb2JqZWN0UHJvdG8kMy5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90byQzLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eSQyLmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIkMSA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiQxIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWckMSA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xudmFyIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJztcbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nO1xudmFyIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXSc7XG52YXIgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nO1xudmFyIGZ1bmNUYWckMSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXSc7XG52YXIgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXSc7XG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG52YXIgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG52YXIgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG52YXIgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nO1xudmFyIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJztcbnZhciBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XSc7XG52YXIgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XSc7XG52YXIgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XSc7XG52YXIgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XSc7XG52YXIgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJztcbnZhciB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nO1xudmFyIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnJDFdID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWckMV0gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyQxID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSQxID0gZnJlZUV4cG9ydHMkMSAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzJDEgPSBmcmVlTW9kdWxlJDEgJiYgZnJlZU1vZHVsZSQxLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzJDE7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyQxICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8kMiA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5JDEgPSBvYmplY3RQcm90byQyLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5JDEuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvJDUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvJDU7XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvJDQgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSQzID0gb2JqZWN0UHJvdG8kNC5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5JDMuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcnJheUl0ZXJhdG9yKGNvbGwpIHtcbiAgICB2YXIgaSA9IC0xO1xuICAgIHZhciBsZW4gPSBjb2xsLmxlbmd0aDtcbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgcmV0dXJuICsraSA8IGxlbiA/IHsgdmFsdWU6IGNvbGxbaV0sIGtleTogaSB9IDogbnVsbDtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFUzIwMTVJdGVyYXRvcihpdGVyYXRvcikge1xuICAgIHZhciBpID0gLTE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciBpdGVtID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAoaXRlbS5kb25lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaSsrO1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogaXRlbS52YWx1ZSwga2V5OiBpIH07XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JqZWN0SXRlcmF0b3Iob2JqKSB7XG4gICAgdmFyIG9rZXlzID0ga2V5cyhvYmopO1xuICAgIHZhciBpID0gLTE7XG4gICAgdmFyIGxlbiA9IG9rZXlzLmxlbmd0aDtcbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgdmFyIGtleSA9IG9rZXlzWysraV07XG4gICAgICAgIHJldHVybiBpIDwgbGVuID8geyB2YWx1ZTogb2JqW2tleV0sIGtleToga2V5IH0gOiBudWxsO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGl0ZXJhdG9yKGNvbGwpIHtcbiAgICBpZiAoaXNBcnJheUxpa2UoY29sbCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUFycmF5SXRlcmF0b3IoY29sbCk7XG4gICAgfVxuXG4gICAgdmFyIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoY29sbCk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yID8gY3JlYXRlRVMyMDE1SXRlcmF0b3IoaXRlcmF0b3IpIDogY3JlYXRlT2JqZWN0SXRlcmF0b3IoY29sbCk7XG59XG5cbmZ1bmN0aW9uIG9ubHlPbmNlKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGZuID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJDYWxsYmFjayB3YXMgYWxyZWFkeSBjYWxsZWQuXCIpO1xuICAgICAgICB2YXIgY2FsbEZuID0gZm47XG4gICAgICAgIGZuID0gbnVsbDtcbiAgICAgICAgY2FsbEZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gX2VhY2hPZkxpbWl0KGxpbWl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIGlmIChsaW1pdCA8PSAwIHx8ICFvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV4dEVsZW0gPSBpdGVyYXRvcihvYmopO1xuICAgICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgICB2YXIgcnVubmluZyA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZWVDYWxsYmFjayhlcnIsIHZhbHVlKSB7XG4gICAgICAgICAgICBydW5uaW5nIC09IDE7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGJyZWFrTG9vcCB8fCBkb25lICYmIHJ1bm5pbmcgPD0gMCkge1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGVuaXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXBsZW5pc2goKSB7XG4gICAgICAgICAgICB3aGlsZSAocnVubmluZyA8IGxpbWl0ICYmICFkb25lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBuZXh0RWxlbSgpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1bm5pbmcgKz0gMTtcbiAgICAgICAgICAgICAgICBpdGVyYXRlZShlbGVtLnZhbHVlLCBlbGVtLmtleSwgb25seU9uY2UoaXRlcmF0ZWVDYWxsYmFjaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVwbGVuaXNoKCk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGVhY2hPZmBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNoT2Z9IGJ1dCBydW5zIGEgbWF4aW11bSBvZiBgbGltaXRgIGFzeW5jIG9wZXJhdGlvbnMgYXQgYVxuICogdGltZS5cbiAqXG4gKiBAbmFtZSBlYWNoT2ZMaW1pdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuZWFjaE9mXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZWFjaE9mfVxuICogQGFsaWFzIGZvckVhY2hPZkxpbWl0XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0IC0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGFzeW5jIG9wZXJhdGlvbnMgYXQgYSB0aW1lLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2hcbiAqIGl0ZW0gaW4gYGNvbGxgLiBUaGUgYGtleWAgaXMgdGhlIGl0ZW0ncyBrZXksIG9yIGluZGV4IGluIHRoZSBjYXNlIG9mIGFuXG4gKiBhcnJheS5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwga2V5LCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGxcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gSW52b2tlZCB3aXRoIChlcnIpLlxuICovXG5mdW5jdGlvbiBlYWNoT2ZMaW1pdChjb2xsLCBsaW1pdCwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gIF9lYWNoT2ZMaW1pdChsaW1pdCkoY29sbCwgd3JhcEFzeW5jJDEoaXRlcmF0ZWUpLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGRvTGltaXQoZm4sIGxpbWl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpdGVyYWJsZSwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBmbihpdGVyYWJsZSwgbGltaXQsIGl0ZXJhdGVlLCBjYWxsYmFjayk7XG4gICAgfTtcbn1cblxuLy8gZWFjaE9mIGltcGxlbWVudGF0aW9uIG9wdGltaXplZCBmb3IgYXJyYXktbGlrZXNcbmZ1bmN0aW9uIGVhY2hPZkFycmF5TGlrZShjb2xsLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgY29tcGxldGVkID0gMCxcbiAgICAgICAgbGVuZ3RoID0gY29sbC5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpdGVyYXRvckNhbGxiYWNrKGVyciwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSBlbHNlIGlmICgrK2NvbXBsZXRlZCA9PT0gbGVuZ3RoIHx8IHZhbHVlID09PSBicmVha0xvb3ApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGl0ZXJhdGVlKGNvbGxbaW5kZXhdLCBpbmRleCwgb25seU9uY2UoaXRlcmF0b3JDYWxsYmFjaykpO1xuICAgIH1cbn1cblxuLy8gYSBnZW5lcmljIHZlcnNpb24gb2YgZWFjaE9mIHdoaWNoIGNhbiBoYW5kbGUgYXJyYXksIG9iamVjdCwgYW5kIGl0ZXJhdG9yIGNhc2VzLlxudmFyIGVhY2hPZkdlbmVyaWMgPSBkb0xpbWl0KGVhY2hPZkxpbWl0LCBJbmZpbml0eSk7XG5cbi8qKlxuICogTGlrZSBbYGVhY2hgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZWFjaH0sIGV4Y2VwdCB0aGF0IGl0IHBhc3NlcyB0aGUga2V5IChvciBpbmRleCkgYXMgdGhlIHNlY29uZCBhcmd1bWVudFxuICogdG8gdGhlIGl0ZXJhdGVlLlxuICpcbiAqIEBuYW1lIGVhY2hPZlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGFsaWFzIGZvckVhY2hPZlxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBzZWUgW2FzeW5jLmVhY2hde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNofVxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEEgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaFxuICogaXRlbSBpbiBgY29sbGAuXG4gKiBUaGUgYGtleWAgaXMgdGhlIGl0ZW0ncyBrZXksIG9yIGluZGV4IGluIHRoZSBjYXNlIG9mIGFuIGFycmF5LlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBrZXksIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbFxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBJbnZva2VkIHdpdGggKGVycikuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmogPSB7ZGV2OiBcIi9kZXYuanNvblwiLCB0ZXN0OiBcIi90ZXN0Lmpzb25cIiwgcHJvZDogXCIvcHJvZC5qc29uXCJ9O1xuICogdmFyIGNvbmZpZ3MgPSB7fTtcbiAqXG4gKiBhc3luYy5mb3JFYWNoT2Yob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSwgY2FsbGJhY2spIHtcbiAqICAgICBmcy5yZWFkRmlsZShfX2Rpcm5hbWUgKyB2YWx1ZSwgXCJ1dGY4XCIsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAqICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gKiAgICAgICAgIHRyeSB7XG4gKiAgICAgICAgICAgICBjb25maWdzW2tleV0gPSBKU09OLnBhcnNlKGRhdGEpO1xuICogICAgICAgICB9IGNhdGNoIChlKSB7XG4gKiAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZSk7XG4gKiAgICAgICAgIH1cbiAqICAgICAgICAgY2FsbGJhY2soKTtcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAqICAgICBpZiAoZXJyKSBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAqICAgICAvLyBjb25maWdzIGlzIG5vdyBhIG1hcCBvZiBKU09OIGRhdGFcbiAqICAgICBkb1NvbWV0aGluZ1dpdGgoY29uZmlncyk7XG4gKiB9KTtcbiAqL1xudmFyIGVhY2hPZiA9IGZ1bmN0aW9uIChjb2xsLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZWFjaE9mSW1wbGVtZW50YXRpb24gPSBpc0FycmF5TGlrZShjb2xsKSA/IGVhY2hPZkFycmF5TGlrZSA6IGVhY2hPZkdlbmVyaWM7XG4gICAgZWFjaE9mSW1wbGVtZW50YXRpb24oY29sbCwgd3JhcEFzeW5jJDEoaXRlcmF0ZWUpLCBjYWxsYmFjayk7XG59O1xuXG5mdW5jdGlvbiBkb1BhcmFsbGVsKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gZm4oZWFjaE9mLCBvYmosIHdyYXBBc3luYyQxKGl0ZXJhdGVlKSwgY2FsbGJhY2spO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9hc3luY01hcChlYWNoZm4sIGFyciwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICAgIGFyciA9IGFyciB8fCBbXTtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgX2l0ZXJhdGVlID0gd3JhcEFzeW5jJDEoaXRlcmF0ZWUpO1xuXG4gICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHZhbHVlLCBfLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaW5kZXggPSBjb3VudGVyKys7XG4gICAgICAgIF9pdGVyYXRlZSh2YWx1ZSwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2O1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IGNvbGxlY3Rpb24gb2YgdmFsdWVzIGJ5IG1hcHBpbmcgZWFjaCB2YWx1ZSBpbiBgY29sbGAgdGhyb3VnaFxuICogdGhlIGBpdGVyYXRlZWAgZnVuY3Rpb24uIFRoZSBgaXRlcmF0ZWVgIGlzIGNhbGxlZCB3aXRoIGFuIGl0ZW0gZnJvbSBgY29sbGBcbiAqIGFuZCBhIGNhbGxiYWNrIGZvciB3aGVuIGl0IGhhcyBmaW5pc2hlZCBwcm9jZXNzaW5nLiBFYWNoIG9mIHRoZXNlIGNhbGxiYWNrXG4gKiB0YWtlcyAyIGFyZ3VtZW50czogYW4gYGVycm9yYCwgYW5kIHRoZSB0cmFuc2Zvcm1lZCBpdGVtIGZyb20gYGNvbGxgLiBJZlxuICogYGl0ZXJhdGVlYCBwYXNzZXMgYW4gZXJyb3IgdG8gaXRzIGNhbGxiYWNrLCB0aGUgbWFpbiBgY2FsbGJhY2tgIChmb3IgdGhlXG4gKiBgbWFwYCBmdW5jdGlvbikgaXMgaW1tZWRpYXRlbHkgY2FsbGVkIHdpdGggdGhlIGVycm9yLlxuICpcbiAqIE5vdGUsIHRoYXQgc2luY2UgdGhpcyBmdW5jdGlvbiBhcHBsaWVzIHRoZSBgaXRlcmF0ZWVgIHRvIGVhY2ggaXRlbSBpblxuICogcGFyYWxsZWwsIHRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IHRoZSBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyB3aWxsIGNvbXBsZXRlXG4gKiBpbiBvcmRlci4gSG93ZXZlciwgdGhlIHJlc3VsdHMgYXJyYXkgd2lsbCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbiAqIG9yaWdpbmFsIGBjb2xsYC5cbiAqXG4gKiBJZiBgbWFwYCBpcyBwYXNzZWQgYW4gT2JqZWN0LCB0aGUgcmVzdWx0cyB3aWxsIGJlIGFuIEFycmF5LiAgVGhlIHJlc3VsdHNcbiAqIHdpbGwgcm91Z2hseSBiZSBpbiB0aGUgb3JkZXIgb2YgdGhlIG9yaWdpbmFsIE9iamVjdHMnIGtleXMgKGJ1dCB0aGlzIGNhblxuICogdmFyeSBhY3Jvc3MgSmF2YVNjcmlwdCBlbmdpbmVzKS5cbiAqXG4gKiBAbmFtZSBtYXBcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggdGhlIHRyYW5zZm9ybWVkIGl0ZW0uXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbCBgaXRlcmF0ZWVgXG4gKiBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBSZXN1bHRzIGlzIGFuIEFycmF5IG9mIHRoZVxuICogdHJhbnNmb3JtZWQgaXRlbXMgZnJvbSB0aGUgYGNvbGxgLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLm1hcChbJ2ZpbGUxJywnZmlsZTInLCdmaWxlMyddLCBmcy5zdGF0LCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyByZXN1bHRzIGlzIG5vdyBhbiBhcnJheSBvZiBzdGF0cyBmb3IgZWFjaCBmaWxlXG4gKiB9KTtcbiAqL1xudmFyIG1hcCA9IGRvUGFyYWxsZWwoX2FzeW5jTWFwKTtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBwcm92aWRlZCBhcmd1bWVudHMgdG8gZWFjaCBmdW5jdGlvbiBpbiB0aGUgYXJyYXksIGNhbGxpbmdcbiAqIGBjYWxsYmFja2AgYWZ0ZXIgYWxsIGZ1bmN0aW9ucyBoYXZlIGNvbXBsZXRlZC4gSWYgeW91IG9ubHkgcHJvdmlkZSB0aGUgZmlyc3RcbiAqIGFyZ3VtZW50LCBgZm5zYCwgdGhlbiBpdCB3aWxsIHJldHVybiBhIGZ1bmN0aW9uIHdoaWNoIGxldHMgeW91IHBhc3MgaW4gdGhlXG4gKiBhcmd1bWVudHMgYXMgaWYgaXQgd2VyZSBhIHNpbmdsZSBmdW5jdGlvbiBjYWxsLiBJZiBtb3JlIGFyZ3VtZW50cyBhcmVcbiAqIHByb3ZpZGVkLCBgY2FsbGJhY2tgIGlzIHJlcXVpcmVkIHdoaWxlIGBhcmdzYCBpcyBzdGlsbCBvcHRpb25hbC5cbiAqXG4gKiBAbmFtZSBhcHBseUVhY2hcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBmbnMgLSBBIGNvbGxlY3Rpb24gb2Yge0BsaW5rIEFzeW5jRnVuY3Rpb259c1xuICogdG8gYWxsIGNhbGwgd2l0aCB0aGUgc2FtZSBhcmd1bWVudHNcbiAqIEBwYXJhbSB7Li4uKn0gW2FyZ3NdIC0gYW55IG51bWJlciBvZiBzZXBhcmF0ZSBhcmd1bWVudHMgdG8gcGFzcyB0byB0aGVcbiAqIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIHRoZSBmaW5hbCBhcmd1bWVudCBzaG91bGQgYmUgdGhlIGNhbGxiYWNrLFxuICogY2FsbGVkIHdoZW4gYWxsIGZ1bmN0aW9ucyBoYXZlIGNvbXBsZXRlZCBwcm9jZXNzaW5nLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSAtIElmIG9ubHkgdGhlIGZpcnN0IGFyZ3VtZW50LCBgZm5zYCwgaXMgcHJvdmlkZWQsIGl0IHdpbGxcbiAqIHJldHVybiBhIGZ1bmN0aW9uIHdoaWNoIGxldHMgeW91IHBhc3MgaW4gdGhlIGFyZ3VtZW50cyBhcyBpZiBpdCB3ZXJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbiBjYWxsLiBUaGUgc2lnbmF0dXJlIGlzIGAoLi5hcmdzLCBjYWxsYmFjaylgLiBJZiBpbnZva2VkIHdpdGggYW55XG4gKiBhcmd1bWVudHMsIGBjYWxsYmFja2AgaXMgcmVxdWlyZWQuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLmFwcGx5RWFjaChbZW5hYmxlU2VhcmNoLCB1cGRhdGVTY2hlbWFdLCAnYnVja2V0JywgY2FsbGJhY2spO1xuICpcbiAqIC8vIHBhcnRpYWwgYXBwbGljYXRpb24gZXhhbXBsZTpcbiAqIGFzeW5jLmVhY2goXG4gKiAgICAgYnVja2V0cyxcbiAqICAgICBhc3luYy5hcHBseUVhY2goW2VuYWJsZVNlYXJjaCwgdXBkYXRlU2NoZW1hXSksXG4gKiAgICAgY2FsbGJhY2tcbiAqICk7XG4gKi9cbnZhciBhcHBseUVhY2ggPSBhcHBseUVhY2gkMShtYXApO1xuXG5mdW5jdGlvbiBkb1BhcmFsbGVsTGltaXQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgbGltaXQsIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gZm4oX2VhY2hPZkxpbWl0KGxpbWl0KSwgb2JqLCB3cmFwQXN5bmMkMShpdGVyYXRlZSksIGNhbGxiYWNrKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgbWFwYF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcH0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgbWFwTGltaXRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLm1hcF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcH1cbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggdGhlIHRyYW5zZm9ybWVkIGl0ZW0uXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbCBgaXRlcmF0ZWVgXG4gKiBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBSZXN1bHRzIGlzIGFuIGFycmF5IG9mIHRoZVxuICogdHJhbnNmb3JtZWQgaXRlbXMgZnJvbSB0aGUgYGNvbGxgLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKi9cbnZhciBtYXBMaW1pdCA9IGRvUGFyYWxsZWxMaW1pdChfYXN5bmNNYXApO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgbWFwYF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcH0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIG1hcFNlcmllc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMubWFwXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwfVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW5cbiAqIGBjb2xsYC5cbiAqIFRoZSBpdGVyYXRlZSBzaG91bGQgY29tcGxldGUgd2l0aCB0aGUgdHJhbnNmb3JtZWQgaXRlbS5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsIGBpdGVyYXRlZWBcbiAqIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIFJlc3VsdHMgaXMgYW4gYXJyYXkgb2YgdGhlXG4gKiB0cmFuc2Zvcm1lZCBpdGVtcyBmcm9tIHRoZSBgY29sbGAuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqL1xudmFyIG1hcFNlcmllcyA9IGRvTGltaXQobWFwTGltaXQsIDEpO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgYXBwbHlFYWNoYF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LmFwcGx5RWFjaH0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIGFwcGx5RWFjaFNlcmllc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuYXBwbHlFYWNoXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuYXBwbHlFYWNofVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGZucyAtIEEgY29sbGVjdGlvbiBvZiB7QGxpbmsgQXN5bmNGdW5jdGlvbn1zIHRvIGFsbFxuICogY2FsbCB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50c1xuICogQHBhcmFtIHsuLi4qfSBbYXJnc10gLSBhbnkgbnVtYmVyIG9mIHNlcGFyYXRlIGFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZVxuICogZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gdGhlIGZpbmFsIGFyZ3VtZW50IHNob3VsZCBiZSB0aGUgY2FsbGJhY2ssXG4gKiBjYWxsZWQgd2hlbiBhbGwgZnVuY3Rpb25zIGhhdmUgY29tcGxldGVkIHByb2Nlc3NpbmcuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IC0gSWYgb25seSB0aGUgZmlyc3QgYXJndW1lbnQgaXMgcHJvdmlkZWQsIGl0IHdpbGwgcmV0dXJuXG4gKiBhIGZ1bmN0aW9uIHdoaWNoIGxldHMgeW91IHBhc3MgaW4gdGhlIGFyZ3VtZW50cyBhcyBpZiBpdCB3ZXJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbiBjYWxsLlxuICovXG52YXIgYXBwbHlFYWNoU2VyaWVzID0gYXBwbHlFYWNoJDEobWFwU2VyaWVzKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY29udGludWF0aW9uIGZ1bmN0aW9uIHdpdGggc29tZSBhcmd1bWVudHMgYWxyZWFkeSBhcHBsaWVkLlxuICpcbiAqIFVzZWZ1bCBhcyBhIHNob3J0aGFuZCB3aGVuIGNvbWJpbmVkIHdpdGggb3RoZXIgY29udHJvbCBmbG93IGZ1bmN0aW9ucy4gQW55XG4gKiBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBhcmUgYWRkZWQgdG8gdGhlIGFyZ3VtZW50c1xuICogb3JpZ2luYWxseSBwYXNzZWQgdG8gYXBwbHkuXG4gKlxuICogQG5hbWUgYXBwbHlcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6VXRpbHNcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdGlvbiAtIFRoZSBmdW5jdGlvbiB5b3Ugd2FudCB0byBldmVudHVhbGx5IGFwcGx5IGFsbFxuICogYXJndW1lbnRzIHRvLiBJbnZva2VzIHdpdGggKGFyZ3VtZW50cy4uLikuXG4gKiBAcGFyYW0gey4uLip9IGFyZ3VtZW50cy4uLiAtIEFueSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIGF1dG9tYXRpY2FsbHkgYXBwbHlcbiAqIHdoZW4gdGhlIGNvbnRpbnVhdGlvbiBpcyBjYWxsZWQuXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIHVzaW5nIGFwcGx5XG4gKiBhc3luYy5wYXJhbGxlbChbXG4gKiAgICAgYXN5bmMuYXBwbHkoZnMud3JpdGVGaWxlLCAndGVzdGZpbGUxJywgJ3Rlc3QxJyksXG4gKiAgICAgYXN5bmMuYXBwbHkoZnMud3JpdGVGaWxlLCAndGVzdGZpbGUyJywgJ3Rlc3QyJylcbiAqIF0pO1xuICpcbiAqXG4gKiAvLyB0aGUgc2FtZSBwcm9jZXNzIHdpdGhvdXQgdXNpbmcgYXBwbHlcbiAqIGFzeW5jLnBhcmFsbGVsKFtcbiAqICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBmcy53cml0ZUZpbGUoJ3Rlc3RmaWxlMScsICd0ZXN0MScsIGNhbGxiYWNrKTtcbiAqICAgICB9LFxuICogICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIGZzLndyaXRlRmlsZSgndGVzdGZpbGUyJywgJ3Rlc3QyJywgY2FsbGJhY2spO1xuICogICAgIH1cbiAqIF0pO1xuICpcbiAqIC8vIEl0J3MgcG9zc2libGUgdG8gcGFzcyBhbnkgbnVtYmVyIG9mIGFkZGl0aW9uYWwgYXJndW1lbnRzIHdoZW4gY2FsbGluZyB0aGVcbiAqIC8vIGNvbnRpbnVhdGlvbjpcbiAqXG4gKiBub2RlPiB2YXIgZm4gPSBhc3luYy5hcHBseShzeXMucHV0cywgJ29uZScpO1xuICogbm9kZT4gZm4oJ3R3bycsICd0aHJlZScpO1xuICogb25lXG4gKiB0d29cbiAqIHRocmVlXG4gKi9cbnZhciBhcHBseSQyID0gcmVzdChmdW5jdGlvbiAoZm4sIGFyZ3MpIHtcbiAgICByZXR1cm4gcmVzdChmdW5jdGlvbiAoY2FsbEFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KGNhbGxBcmdzKSk7XG4gICAgfSk7XG59KTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBtZXRob2RzIGxpa2UgYF8uZm9ySW5gIGFuZCBgXy5mb3JPd25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgYmVzdCBvcmRlciBmb3IgcnVubmluZyB0aGUge0BsaW5rIEFzeW5jRnVuY3Rpb259cyBpbiBgdGFza3NgLCBiYXNlZCBvblxuICogdGhlaXIgcmVxdWlyZW1lbnRzLiBFYWNoIGZ1bmN0aW9uIGNhbiBvcHRpb25hbGx5IGRlcGVuZCBvbiBvdGhlciBmdW5jdGlvbnNcbiAqIGJlaW5nIGNvbXBsZXRlZCBmaXJzdCwgYW5kIGVhY2ggZnVuY3Rpb24gaXMgcnVuIGFzIHNvb24gYXMgaXRzIHJlcXVpcmVtZW50c1xuICogYXJlIHNhdGlzZmllZC5cbiAqXG4gKiBJZiBhbnkgb2YgdGhlIHtAbGluayBBc3luY0Z1bmN0aW9ufXMgcGFzcyBhbiBlcnJvciB0byB0aGVpciBjYWxsYmFjaywgdGhlIGBhdXRvYCBzZXF1ZW5jZVxuICogd2lsbCBzdG9wLiBGdXJ0aGVyIHRhc2tzIHdpbGwgbm90IGV4ZWN1dGUgKHNvIGFueSBvdGhlciBmdW5jdGlvbnMgZGVwZW5kaW5nXG4gKiBvbiBpdCB3aWxsIG5vdCBydW4pLCBhbmQgdGhlIG1haW4gYGNhbGxiYWNrYCBpcyBpbW1lZGlhdGVseSBjYWxsZWQgd2l0aCB0aGVcbiAqIGVycm9yLlxuICpcbiAqIHtAbGluayBBc3luY0Z1bmN0aW9ufXMgYWxzbyByZWNlaXZlIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXN1bHRzIG9mIGZ1bmN0aW9ucyB3aGljaFxuICogaGF2ZSBjb21wbGV0ZWQgc28gZmFyIGFzIHRoZSBmaXJzdCBhcmd1bWVudCwgaWYgdGhleSBoYXZlIGRlcGVuZGVuY2llcy4gSWYgYVxuICogdGFzayBmdW5jdGlvbiBoYXMgbm8gZGVwZW5kZW5jaWVzLCBpdCB3aWxsIG9ubHkgYmUgcGFzc2VkIGEgY2FsbGJhY2suXG4gKlxuICogQG5hbWUgYXV0b1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtPYmplY3R9IHRhc2tzIC0gQW4gb2JqZWN0LiBFYWNoIG9mIGl0cyBwcm9wZXJ0aWVzIGlzIGVpdGhlciBhXG4gKiBmdW5jdGlvbiBvciBhbiBhcnJheSBvZiByZXF1aXJlbWVudHMsIHdpdGggdGhlIHtAbGluayBBc3luY0Z1bmN0aW9ufSBpdHNlbGYgdGhlIGxhc3QgaXRlbVxuICogaW4gdGhlIGFycmF5LiBUaGUgb2JqZWN0J3Mga2V5IG9mIGEgcHJvcGVydHkgc2VydmVzIGFzIHRoZSBuYW1lIG9mIHRoZSB0YXNrXG4gKiBkZWZpbmVkIGJ5IHRoYXQgcHJvcGVydHksIGkuZS4gY2FuIGJlIHVzZWQgd2hlbiBzcGVjaWZ5aW5nIHJlcXVpcmVtZW50cyBmb3JcbiAqIG90aGVyIHRhc2tzLiBUaGUgZnVuY3Rpb24gcmVjZWl2ZXMgb25lIG9yIHR3byBhcmd1bWVudHM6XG4gKiAqIGEgYHJlc3VsdHNgIG9iamVjdCwgY29udGFpbmluZyB0aGUgcmVzdWx0cyBvZiB0aGUgcHJldmlvdXNseSBleGVjdXRlZFxuICogICBmdW5jdGlvbnMsIG9ubHkgcGFzc2VkIGlmIHRoZSB0YXNrIGhhcyBhbnkgZGVwZW5kZW5jaWVzLFxuICogKiBhIGBjYWxsYmFjayhlcnIsIHJlc3VsdClgIGZ1bmN0aW9uLCB3aGljaCBtdXN0IGJlIGNhbGxlZCB3aGVuIGZpbmlzaGVkLFxuICogICBwYXNzaW5nIGFuIGBlcnJvcmAgKHdoaWNoIGNhbiBiZSBgbnVsbGApIGFuZCB0aGUgcmVzdWx0IG9mIHRoZSBmdW5jdGlvbidzXG4gKiAgIGV4ZWN1dGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uY3VycmVuY3k9SW5maW5pdHldIC0gQW4gb3B0aW9uYWwgYGludGVnZXJgIGZvclxuICogZGV0ZXJtaW5pbmcgdGhlIG1heGltdW0gbnVtYmVyIG9mIHRhc2tzIHRoYXQgY2FuIGJlIHJ1biBpbiBwYXJhbGxlbC4gQnlcbiAqIGRlZmF1bHQsIGFzIG1hbnkgYXMgcG9zc2libGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsXG4gKiB0aGUgdGFza3MgaGF2ZSBiZWVuIGNvbXBsZXRlZC4gSXQgcmVjZWl2ZXMgdGhlIGBlcnJgIGFyZ3VtZW50IGlmIGFueSBgdGFza3NgXG4gKiBwYXNzIGFuIGVycm9yIHRvIHRoZWlyIGNhbGxiYWNrLiBSZXN1bHRzIGFyZSBhbHdheXMgcmV0dXJuZWQ7IGhvd2V2ZXIsIGlmIGFuXG4gKiBlcnJvciBvY2N1cnMsIG5vIGZ1cnRoZXIgYHRhc2tzYCB3aWxsIGJlIHBlcmZvcm1lZCwgYW5kIHRoZSByZXN1bHRzIG9iamVjdFxuICogd2lsbCBvbmx5IGNvbnRhaW4gcGFydGlhbCByZXN1bHRzLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKiBAcmV0dXJucyB1bmRlZmluZWRcbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMuYXV0byh7XG4gKiAgICAgLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGp1c3QgYmUgcGFzc2VkIGEgY2FsbGJhY2tcbiAqICAgICByZWFkRGF0YTogYXN5bmMuYXBwbHkoZnMucmVhZEZpbGUsICdkYXRhLnR4dCcsICd1dGYtOCcpLFxuICogICAgIHNob3dEYXRhOiBbJ3JlYWREYXRhJywgZnVuY3Rpb24ocmVzdWx0cywgY2IpIHtcbiAqICAgICAgICAgLy8gcmVzdWx0cy5yZWFkRGF0YSBpcyB0aGUgZmlsZSdzIGNvbnRlbnRzXG4gKiAgICAgICAgIC8vIC4uLlxuICogICAgIH1dXG4gKiB9LCBjYWxsYmFjayk7XG4gKlxuICogYXN5bmMuYXV0byh7XG4gKiAgICAgZ2V0X2RhdGE6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIGNvbnNvbGUubG9nKCdpbiBnZXRfZGF0YScpO1xuICogICAgICAgICAvLyBhc3luYyBjb2RlIHRvIGdldCBzb21lIGRhdGFcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ2RhdGEnLCAnY29udmVydGVkIHRvIGFycmF5Jyk7XG4gKiAgICAgfSxcbiAqICAgICBtYWtlX2ZvbGRlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgY29uc29sZS5sb2coJ2luIG1ha2VfZm9sZGVyJyk7XG4gKiAgICAgICAgIC8vIGFzeW5jIGNvZGUgdG8gY3JlYXRlIGEgZGlyZWN0b3J5IHRvIHN0b3JlIGEgZmlsZSBpblxuICogICAgICAgICAvLyB0aGlzIGlzIHJ1biBhdCB0aGUgc2FtZSB0aW1lIGFzIGdldHRpbmcgdGhlIGRhdGFcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ2ZvbGRlcicpO1xuICogICAgIH0sXG4gKiAgICAgd3JpdGVfZmlsZTogWydnZXRfZGF0YScsICdtYWtlX2ZvbGRlcicsIGZ1bmN0aW9uKHJlc3VsdHMsIGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIGNvbnNvbGUubG9nKCdpbiB3cml0ZV9maWxlJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpO1xuICogICAgICAgICAvLyBvbmNlIHRoZXJlIGlzIHNvbWUgZGF0YSBhbmQgdGhlIGRpcmVjdG9yeSBleGlzdHMsXG4gKiAgICAgICAgIC8vIHdyaXRlIHRoZSBkYXRhIHRvIGEgZmlsZSBpbiB0aGUgZGlyZWN0b3J5XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdmaWxlbmFtZScpO1xuICogICAgIH1dLFxuICogICAgIGVtYWlsX2xpbms6IFsnd3JpdGVfZmlsZScsIGZ1bmN0aW9uKHJlc3VsdHMsIGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIGNvbnNvbGUubG9nKCdpbiBlbWFpbF9saW5rJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpO1xuICogICAgICAgICAvLyBvbmNlIHRoZSBmaWxlIGlzIHdyaXR0ZW4gbGV0J3MgZW1haWwgYSBsaW5rIHRvIGl0Li4uXG4gKiAgICAgICAgIC8vIHJlc3VsdHMud3JpdGVfZmlsZSBjb250YWlucyB0aGUgZmlsZW5hbWUgcmV0dXJuZWQgYnkgd3JpdGVfZmlsZS5cbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgeydmaWxlJzpyZXN1bHRzLndyaXRlX2ZpbGUsICdlbWFpbCc6J3VzZXJAZXhhbXBsZS5jb20nfSk7XG4gKiAgICAgfV1cbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICogICAgIGNvbnNvbGUubG9nKCdlcnIgPSAnLCBlcnIpO1xuICogICAgIGNvbnNvbGUubG9nKCdyZXN1bHRzID0gJywgcmVzdWx0cyk7XG4gKiB9KTtcbiAqL1xudmFyIGF1dG8gPSBmdW5jdGlvbiAodGFza3MsIGNvbmN1cnJlbmN5LCBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgY29uY3VycmVuY3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gY29uY3VycmVuY3kgaXMgb3B0aW9uYWwsIHNoaWZ0IHRoZSBhcmdzLlxuICAgICAgICBjYWxsYmFjayA9IGNvbmN1cnJlbmN5O1xuICAgICAgICBjb25jdXJyZW5jeSA9IG51bGw7XG4gICAgfVxuICAgIGNhbGxiYWNrID0gb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICB2YXIga2V5cyQkMSA9IGtleXModGFza3MpO1xuICAgIHZhciBudW1UYXNrcyA9IGtleXMkJDEubGVuZ3RoO1xuICAgIGlmICghbnVtVGFza3MpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgIH1cbiAgICBpZiAoIWNvbmN1cnJlbmN5KSB7XG4gICAgICAgIGNvbmN1cnJlbmN5ID0gbnVtVGFza3M7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgICB2YXIgcnVubmluZ1Rhc2tzID0gMDtcbiAgICB2YXIgaGFzRXJyb3IgPSBmYWxzZTtcblxuICAgIHZhciBsaXN0ZW5lcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgdmFyIHJlYWR5VGFza3MgPSBbXTtcblxuICAgIC8vIGZvciBjeWNsZSBkZXRlY3Rpb246XG4gICAgdmFyIHJlYWR5VG9DaGVjayA9IFtdOyAvLyB0YXNrcyB0aGF0IGhhdmUgYmVlbiBpZGVudGlmaWVkIGFzIHJlYWNoYWJsZVxuICAgIC8vIHdpdGhvdXQgdGhlIHBvc3NpYmlsaXR5IG9mIHJldHVybmluZyB0byBhbiBhbmNlc3RvciB0YXNrXG4gICAgdmFyIHVuY2hlY2tlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gICAgYmFzZUZvck93bih0YXNrcywgZnVuY3Rpb24gKHRhc2ssIGtleSkge1xuICAgICAgICBpZiAoIWlzQXJyYXkodGFzaykpIHtcbiAgICAgICAgICAgIC8vIG5vIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgZW5xdWV1ZVRhc2soa2V5LCBbdGFza10pO1xuICAgICAgICAgICAgcmVhZHlUb0NoZWNrLnB1c2goa2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZXBlbmRlbmNpZXMgPSB0YXNrLnNsaWNlKDAsIHRhc2subGVuZ3RoIC0gMSk7XG4gICAgICAgIHZhciByZW1haW5pbmdEZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXMubGVuZ3RoO1xuICAgICAgICBpZiAocmVtYWluaW5nRGVwZW5kZW5jaWVzID09PSAwKSB7XG4gICAgICAgICAgICBlbnF1ZXVlVGFzayhrZXksIHRhc2spO1xuICAgICAgICAgICAgcmVhZHlUb0NoZWNrLnB1c2goa2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1bmNoZWNrZWREZXBlbmRlbmNpZXNba2V5XSA9IHJlbWFpbmluZ0RlcGVuZGVuY2llcztcblxuICAgICAgICBhcnJheUVhY2goZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZGVwZW5kZW5jeU5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGFza3NbZGVwZW5kZW5jeU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhc3luYy5hdXRvIHRhc2sgYCcgKyBrZXkgKyAnYCBoYXMgYSBub24tZXhpc3RlbnQgZGVwZW5kZW5jeSBgJyArIGRlcGVuZGVuY3lOYW1lICsgJ2AgaW4gJyArIGRlcGVuZGVuY2llcy5qb2luKCcsICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZExpc3RlbmVyKGRlcGVuZGVuY3lOYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVtYWluaW5nRGVwZW5kZW5jaWVzLS07XG4gICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0RlcGVuZGVuY2llcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbnF1ZXVlVGFzayhrZXksIHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNoZWNrRm9yRGVhZGxvY2tzKCk7XG4gICAgcHJvY2Vzc1F1ZXVlKCk7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlVGFzayhrZXksIHRhc2spIHtcbiAgICAgICAgcmVhZHlUYXNrcy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1blRhc2soa2V5LCB0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1F1ZXVlKCkge1xuICAgICAgICBpZiAocmVhZHlUYXNrcy5sZW5ndGggPT09IDAgJiYgcnVubmluZ1Rhc2tzID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHJlYWR5VGFza3MubGVuZ3RoICYmIHJ1bm5pbmdUYXNrcyA8IGNvbmN1cnJlbmN5KSB7XG4gICAgICAgICAgICB2YXIgcnVuID0gcmVhZHlUYXNrcy5zaGlmdCgpO1xuICAgICAgICAgICAgcnVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0YXNrTmFtZSwgZm4pIHtcbiAgICAgICAgdmFyIHRhc2tMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdGFza05hbWVdO1xuICAgICAgICBpZiAoIXRhc2tMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRhc2tMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdGFza05hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrTGlzdGVuZXJzLnB1c2goZm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRhc2tDb21wbGV0ZSh0YXNrTmFtZSkge1xuICAgICAgICB2YXIgdGFza0xpc3RlbmVycyA9IGxpc3RlbmVyc1t0YXNrTmFtZV0gfHwgW107XG4gICAgICAgIGFycmF5RWFjaCh0YXNrTGlzdGVuZXJzLCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9jZXNzUXVldWUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5UYXNrKGtleSwgdGFzaykge1xuICAgICAgICBpZiAoaGFzRXJyb3IpIHJldHVybjtcblxuICAgICAgICB2YXIgdGFza0NhbGxiYWNrID0gb25seU9uY2UocmVzdChmdW5jdGlvbiAoZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICBydW5uaW5nVGFza3MtLTtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNhZmVSZXN1bHRzID0ge307XG4gICAgICAgICAgICAgICAgYmFzZUZvck93bihyZXN1bHRzLCBmdW5jdGlvbiAodmFsLCBya2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNhZmVSZXN1bHRzW3JrZXldID0gdmFsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNhZmVSZXN1bHRzW2tleV0gPSBhcmdzO1xuICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBzYWZlUmVzdWx0cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNba2V5XSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgdGFza0NvbXBsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICBydW5uaW5nVGFza3MrKztcbiAgICAgICAgdmFyIHRhc2tGbiA9IHdyYXBBc3luYyQxKHRhc2tbdGFzay5sZW5ndGggLSAxXSk7XG4gICAgICAgIGlmICh0YXNrLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRhc2tGbihyZXN1bHRzLCB0YXNrQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFza0ZuKHRhc2tDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0ZvckRlYWRsb2NrcygpIHtcbiAgICAgICAgLy8gS2FobidzIGFsZ29yaXRobVxuICAgICAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ub3BvbG9naWNhbF9zb3J0aW5nI0thaG4uMjdzX2FsZ29yaXRobVxuICAgICAgICAvLyBodHRwOi8vY29ubmFsbGUuYmxvZ3Nwb3QuY29tLzIwMTMvMTAvdG9wb2xvZ2ljYWwtc29ydGluZ2thaG4tYWxnb3JpdGhtLmh0bWxcbiAgICAgICAgdmFyIGN1cnJlbnRUYXNrO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHdoaWxlIChyZWFkeVRvQ2hlY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyZW50VGFzayA9IHJlYWR5VG9DaGVjay5wb3AoKTtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIGFycmF5RWFjaChnZXREZXBlbmRlbnRzKGN1cnJlbnRUYXNrKSwgZnVuY3Rpb24gKGRlcGVuZGVudCkge1xuICAgICAgICAgICAgICAgIGlmICgtLXVuY2hlY2tlZERlcGVuZGVuY2llc1tkZXBlbmRlbnRdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5VG9DaGVjay5wdXNoKGRlcGVuZGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRlciAhPT0gbnVtVGFza3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXN5bmMuYXV0byBjYW5ub3QgZXhlY3V0ZSB0YXNrcyBkdWUgdG8gYSByZWN1cnNpdmUgZGVwZW5kZW5jeScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVwZW5kZW50cyh0YXNrTmFtZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGJhc2VGb3JPd24odGFza3MsIGZ1bmN0aW9uICh0YXNrLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KHRhc2spICYmIGJhc2VJbmRleE9mKHRhc2ssIHRhc2tOYW1lLCAwKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCQxID8gU3ltYm9sJDEucHJvdG90eXBlIDogdW5kZWZpbmVkO1xudmFyIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgc3RyaW5nIHN5bWJvbFxuICogdGhhdCBpcyBub3QgZm91bmQgaW4gdGhlIGNoYXJhY3RlciBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzdHJTeW1ib2xzIFRoZSBzdHJpbmcgc3ltYm9scyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gY2hyU3ltYm9scyBUaGUgY2hhcmFjdGVyIHN5bWJvbHMgdG8gZmluZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IHVubWF0Y2hlZCBzdHJpbmcgc3ltYm9sLlxuICovXG5mdW5jdGlvbiBjaGFyc0VuZEluZGV4KHN0clN5bWJvbHMsIGNoclN5bWJvbHMpIHtcbiAgdmFyIGluZGV4ID0gc3RyU3ltYm9scy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgYmFzZUluZGV4T2YoY2hyU3ltYm9scywgc3RyU3ltYm9sc1tpbmRleF0sIDApID4gLTEpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltU3RhcnRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHN0cmluZyBzeW1ib2xcbiAqIHRoYXQgaXMgbm90IGZvdW5kIGluIHRoZSBjaGFyYWN0ZXIgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc3RyU3ltYm9scyBUaGUgc3RyaW5nIHN5bWJvbHMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGNoclN5bWJvbHMgVGhlIGNoYXJhY3RlciBzeW1ib2xzIHRvIGZpbmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgdW5tYXRjaGVkIHN0cmluZyBzeW1ib2wuXG4gKi9cbmZ1bmN0aW9uIGNoYXJzU3RhcnRJbmRleChzdHJTeW1ib2xzLCBjaHJTeW1ib2xzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc3RyU3ltYm9scy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgYmFzZUluZGV4T2YoY2hyU3ltYm9scywgc3RyU3ltYm9sc1tpbmRleF0sIDApID4gLTEpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBBU0NJSSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXNjaWlUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKTtcbn1cblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZic7XG52YXIgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjMnO1xudmFyIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmMCc7XG52YXIgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UkMSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJztcbnZhciByc0NvbWJvTWFya3NSYW5nZSQxID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzJztcbnZhciByc0NvbWJvU3ltYm9sc1JhbmdlJDEgPSAnXFxcXHUyMGQwLVxcXFx1MjBmMCc7XG52YXIgcnNWYXJSYW5nZSQxID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UkMSArICddJztcbnZhciByc0NvbWJvID0gJ1snICsgcnNDb21ib01hcmtzUmFuZ2UkMSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UkMSArICddJztcbnZhciByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJztcbnZhciByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknO1xudmFyIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UkMSArICddJztcbnZhciByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nO1xudmFyIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJztcbnZhciByc1pXSiQxID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JztcbnZhciByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UkMSArICddPyc7XG52YXIgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiQxICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonO1xudmFyIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbjtcbnZhciByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVuaWNvZGUgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZSkgfHwgW107XG59XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVUb0FycmF5KHN0cmluZylcbiAgICA6IGFzY2lpVG9BcnJheShzdHJpbmcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlIG9yIHNwZWNpZmllZCBjaGFyYWN0ZXJzIGZyb20gYHN0cmluZ2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY2hhcnM9d2hpdGVzcGFjZV0gVGhlIGNoYXJhY3RlcnMgdG8gdHJpbS5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50cmltKCcgIGFiYyAgJyk7XG4gKiAvLyA9PiAnYWJjJ1xuICpcbiAqIF8udHJpbSgnLV8tYWJjLV8tJywgJ18tJyk7XG4gKiAvLyA9PiAnYWJjJ1xuICpcbiAqIF8ubWFwKFsnICBmb28gICcsICcgIGJhciAgJ10sIF8udHJpbSk7XG4gKiAvLyA9PiBbJ2ZvbycsICdiYXInXVxuICovXG5mdW5jdGlvbiB0cmltKHN0cmluZywgY2hhcnMsIGd1YXJkKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIGlmIChzdHJpbmcgJiYgKGd1YXJkIHx8IGNoYXJzID09PSB1bmRlZmluZWQpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB9XG4gIGlmICghc3RyaW5nIHx8ICEoY2hhcnMgPSBiYXNlVG9TdHJpbmcoY2hhcnMpKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgdmFyIHN0clN5bWJvbHMgPSBzdHJpbmdUb0FycmF5KHN0cmluZyksXG4gICAgICBjaHJTeW1ib2xzID0gc3RyaW5nVG9BcnJheShjaGFycyksXG4gICAgICBzdGFydCA9IGNoYXJzU3RhcnRJbmRleChzdHJTeW1ib2xzLCBjaHJTeW1ib2xzKSxcbiAgICAgIGVuZCA9IGNoYXJzRW5kSW5kZXgoc3RyU3ltYm9scywgY2hyU3ltYm9scykgKyAxO1xuXG4gIHJldHVybiBjYXN0U2xpY2Uoc3RyU3ltYm9scywgc3RhcnQsIGVuZCkuam9pbignJyk7XG59XG5cbnZhciBGTl9BUkdTID0gL14oPzphc3luY1xccyspPyhmdW5jdGlvbik/XFxzKlteXFwoXSpcXChcXHMqKFteXFwpXSopXFwpL207XG52YXIgRk5fQVJHX1NQTElUID0gLywvO1xudmFyIEZOX0FSRyA9IC8oPS4rKT8oXFxzKikkLztcbnZhciBTVFJJUF9DT01NRU5UUyA9IC8oKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pKS9tZztcblxuZnVuY3Rpb24gcGFyc2VQYXJhbXMoZnVuYykge1xuICAgIGZ1bmMgPSBmdW5jLnRvU3RyaW5nKCkucmVwbGFjZShTVFJJUF9DT01NRU5UUywgJycpO1xuICAgIGZ1bmMgPSBmdW5jLm1hdGNoKEZOX0FSR1MpWzJdLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgZnVuYyA9IGZ1bmMgPyBmdW5jLnNwbGl0KEZOX0FSR19TUExJVCkgOiBbXTtcbiAgICBmdW5jID0gZnVuYy5tYXAoZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdHJpbShhcmcucmVwbGFjZShGTl9BUkcsICcnKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmM7XG59XG5cbi8qKlxuICogQSBkZXBlbmRlbmN5LWluamVjdGVkIHZlcnNpb24gb2YgdGhlIFthc3luYy5hdXRvXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuYXV0b30gZnVuY3Rpb24uIERlcGVuZGVudFxuICogdGFza3MgYXJlIHNwZWNpZmllZCBhcyBwYXJhbWV0ZXJzIHRvIHRoZSBmdW5jdGlvbiwgYWZ0ZXIgdGhlIHVzdWFsIGNhbGxiYWNrXG4gKiBwYXJhbWV0ZXIsIHdpdGggdGhlIHBhcmFtZXRlciBuYW1lcyBtYXRjaGluZyB0aGUgbmFtZXMgb2YgdGhlIHRhc2tzIGl0XG4gKiBkZXBlbmRzIG9uLiBUaGlzIGNhbiBwcm92aWRlIGV2ZW4gbW9yZSByZWFkYWJsZSB0YXNrIGdyYXBocyB3aGljaCBjYW4gYmVcbiAqIGVhc2llciB0byBtYWludGFpbi5cbiAqXG4gKiBJZiBhIGZpbmFsIGNhbGxiYWNrIGlzIHNwZWNpZmllZCwgdGhlIHRhc2sgcmVzdWx0cyBhcmUgc2ltaWxhcmx5IGluamVjdGVkLFxuICogc3BlY2lmaWVkIGFzIG5hbWVkIHBhcmFtZXRlcnMgYWZ0ZXIgdGhlIGluaXRpYWwgZXJyb3IgcGFyYW1ldGVyLlxuICpcbiAqIFRoZSBhdXRvSW5qZWN0IGZ1bmN0aW9uIGlzIHB1cmVseSBzeW50YWN0aWMgc3VnYXIgYW5kIGl0cyBzZW1hbnRpY3MgYXJlXG4gKiBvdGhlcndpc2UgZXF1aXZhbGVudCB0byBbYXN5bmMuYXV0b117QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LmF1dG99LlxuICpcbiAqIEBuYW1lIGF1dG9JbmplY3RcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmF1dG9de0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5hdXRvfVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtPYmplY3R9IHRhc2tzIC0gQW4gb2JqZWN0LCBlYWNoIG9mIHdob3NlIHByb3BlcnRpZXMgaXMgYW4ge0BsaW5rIEFzeW5jRnVuY3Rpb259IG9mXG4gKiB0aGUgZm9ybSAnZnVuYyhbZGVwZW5kZW5jaWVzLi4uXSwgY2FsbGJhY2spLiBUaGUgb2JqZWN0J3Mga2V5IG9mIGEgcHJvcGVydHlcbiAqIHNlcnZlcyBhcyB0aGUgbmFtZSBvZiB0aGUgdGFzayBkZWZpbmVkIGJ5IHRoYXQgcHJvcGVydHksIGkuZS4gY2FuIGJlIHVzZWRcbiAqIHdoZW4gc3BlY2lmeWluZyByZXF1aXJlbWVudHMgZm9yIG90aGVyIHRhc2tzLlxuICogKiBUaGUgYGNhbGxiYWNrYCBwYXJhbWV0ZXIgaXMgYSBgY2FsbGJhY2soZXJyLCByZXN1bHQpYCB3aGljaCBtdXN0IGJlIGNhbGxlZFxuICogICB3aGVuIGZpbmlzaGVkLCBwYXNzaW5nIGFuIGBlcnJvcmAgKHdoaWNoIGNhbiBiZSBgbnVsbGApIGFuZCB0aGUgcmVzdWx0IG9mXG4gKiAgIHRoZSBmdW5jdGlvbidzIGV4ZWN1dGlvbi4gVGhlIHJlbWFpbmluZyBwYXJhbWV0ZXJzIG5hbWUgb3RoZXIgdGFza3Mgb25cbiAqICAgd2hpY2ggdGhlIHRhc2sgaXMgZGVwZW5kZW50LCBhbmQgdGhlIHJlc3VsdHMgZnJvbSB0aG9zZSB0YXNrcyBhcmUgdGhlXG4gKiAgIGFyZ3VtZW50cyBvZiB0aG9zZSBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbFxuICogdGhlIHRhc2tzIGhhdmUgYmVlbiBjb21wbGV0ZWQuIEl0IHJlY2VpdmVzIHRoZSBgZXJyYCBhcmd1bWVudCBpZiBhbnkgYHRhc2tzYFxuICogcGFzcyBhbiBlcnJvciB0byB0aGVpciBjYWxsYmFjaywgYW5kIGEgYHJlc3VsdHNgIG9iamVjdCB3aXRoIGFueSBjb21wbGV0ZWRcbiAqIHRhc2sgcmVzdWx0cywgc2ltaWxhciB0byBgYXV0b2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vICBUaGUgZXhhbXBsZSBmcm9tIGBhdXRvYCBjYW4gYmUgcmV3cml0dGVuIGFzIGZvbGxvd3M6XG4gKiBhc3luYy5hdXRvSW5qZWN0KHtcbiAqICAgICBnZXRfZGF0YTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgLy8gYXN5bmMgY29kZSB0byBnZXQgc29tZSBkYXRhXG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdkYXRhJywgJ2NvbnZlcnRlZCB0byBhcnJheScpO1xuICogICAgIH0sXG4gKiAgICAgbWFrZV9mb2xkZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGFzeW5jIGNvZGUgdG8gY3JlYXRlIGEgZGlyZWN0b3J5IHRvIHN0b3JlIGEgZmlsZSBpblxuICogICAgICAgICAvLyB0aGlzIGlzIHJ1biBhdCB0aGUgc2FtZSB0aW1lIGFzIGdldHRpbmcgdGhlIGRhdGFcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ2ZvbGRlcicpO1xuICogICAgIH0sXG4gKiAgICAgd3JpdGVfZmlsZTogZnVuY3Rpb24oZ2V0X2RhdGEsIG1ha2VfZm9sZGVyLCBjYWxsYmFjaykge1xuICogICAgICAgICAvLyBvbmNlIHRoZXJlIGlzIHNvbWUgZGF0YSBhbmQgdGhlIGRpcmVjdG9yeSBleGlzdHMsXG4gKiAgICAgICAgIC8vIHdyaXRlIHRoZSBkYXRhIHRvIGEgZmlsZSBpbiB0aGUgZGlyZWN0b3J5XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdmaWxlbmFtZScpO1xuICogICAgIH0sXG4gKiAgICAgZW1haWxfbGluazogZnVuY3Rpb24od3JpdGVfZmlsZSwgY2FsbGJhY2spIHtcbiAqICAgICAgICAgLy8gb25jZSB0aGUgZmlsZSBpcyB3cml0dGVuIGxldCdzIGVtYWlsIGEgbGluayB0byBpdC4uLlxuICogICAgICAgICAvLyB3cml0ZV9maWxlIGNvbnRhaW5zIHRoZSBmaWxlbmFtZSByZXR1cm5lZCBieSB3cml0ZV9maWxlLlxuICogICAgICAgICBjYWxsYmFjayhudWxsLCB7J2ZpbGUnOndyaXRlX2ZpbGUsICdlbWFpbCc6J3VzZXJAZXhhbXBsZS5jb20nfSk7XG4gKiAgICAgfVxuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gKiAgICAgY29uc29sZS5sb2coJ2VtYWlsX2xpbmsgPSAnLCByZXN1bHRzLmVtYWlsX2xpbmspO1xuICogfSk7XG4gKlxuICogLy8gSWYgeW91IGFyZSB1c2luZyBhIEpTIG1pbmlmaWVyIHRoYXQgbWFuZ2xlcyBwYXJhbWV0ZXIgbmFtZXMsIGBhdXRvSW5qZWN0YFxuICogLy8gd2lsbCBub3Qgd29yayB3aXRoIHBsYWluIGZ1bmN0aW9ucywgc2luY2UgdGhlIHBhcmFtZXRlciBuYW1lcyB3aWxsIGJlXG4gKiAvLyBjb2xsYXBzZWQgdG8gYSBzaW5nbGUgbGV0dGVyIGlkZW50aWZpZXIuICBUbyB3b3JrIGFyb3VuZCB0aGlzLCB5b3UgY2FuXG4gKiAvLyBleHBsaWNpdGx5IHNwZWNpZnkgdGhlIG5hbWVzIG9mIHRoZSBwYXJhbWV0ZXJzIHlvdXIgdGFzayBmdW5jdGlvbiBuZWVkc1xuICogLy8gaW4gYW4gYXJyYXksIHNpbWlsYXIgdG8gQW5ndWxhci5qcyBkZXBlbmRlbmN5IGluamVjdGlvbi5cbiAqXG4gKiAvLyBUaGlzIHN0aWxsIGhhcyBhbiBhZHZhbnRhZ2Ugb3ZlciBwbGFpbiBgYXV0b2AsIHNpbmNlIHRoZSByZXN1bHRzIGEgdGFza1xuICogLy8gZGVwZW5kcyBvbiBhcmUgc3RpbGwgc3ByZWFkIGludG8gYXJndW1lbnRzLlxuICogYXN5bmMuYXV0b0luamVjdCh7XG4gKiAgICAgLy8uLi5cbiAqICAgICB3cml0ZV9maWxlOiBbJ2dldF9kYXRhJywgJ21ha2VfZm9sZGVyJywgZnVuY3Rpb24oZ2V0X2RhdGEsIG1ha2VfZm9sZGVyLCBjYWxsYmFjaykge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCAnZmlsZW5hbWUnKTtcbiAqICAgICB9XSxcbiAqICAgICBlbWFpbF9saW5rOiBbJ3dyaXRlX2ZpbGUnLCBmdW5jdGlvbih3cml0ZV9maWxlLCBjYWxsYmFjaykge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCB7J2ZpbGUnOndyaXRlX2ZpbGUsICdlbWFpbCc6J3VzZXJAZXhhbXBsZS5jb20nfSk7XG4gKiAgICAgfV1cbiAqICAgICAvLy4uLlxuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gKiAgICAgY29uc29sZS5sb2coJ2VtYWlsX2xpbmsgPSAnLCByZXN1bHRzLmVtYWlsX2xpbmspO1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGF1dG9JbmplY3QodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG5ld1Rhc2tzID0ge307XG5cbiAgICBiYXNlRm9yT3duKHRhc2tzLCBmdW5jdGlvbiAodGFza0ZuLCBrZXkpIHtcbiAgICAgICAgdmFyIHBhcmFtcztcbiAgICAgICAgdmFyIGZuSXNBc3luYyA9IGlzQXN5bmModGFza0ZuKTtcbiAgICAgICAgdmFyIGhhc05vRGVwcyA9ICFmbklzQXN5bmMgJiYgdGFza0ZuLmxlbmd0aCA9PT0gMSB8fCBmbklzQXN5bmMgJiYgdGFza0ZuLmxlbmd0aCA9PT0gMDtcblxuICAgICAgICBpZiAoaXNBcnJheSh0YXNrRm4pKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB0YXNrRm4uc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgdGFza0ZuID0gdGFza0ZuW3Rhc2tGbi5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgbmV3VGFza3Nba2V5XSA9IHBhcmFtcy5jb25jYXQocGFyYW1zLmxlbmd0aCA+IDAgPyBuZXdUYXNrIDogdGFza0ZuKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNOb0RlcHMpIHtcbiAgICAgICAgICAgIC8vIG5vIGRlcGVuZGVuY2llcywgdXNlIHRoZSBmdW5jdGlvbiBhcy1pc1xuICAgICAgICAgICAgbmV3VGFza3Nba2V5XSA9IHRhc2tGbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcnNlUGFyYW1zKHRhc2tGbik7XG4gICAgICAgICAgICBpZiAodGFza0ZuLmxlbmd0aCA9PT0gMCAmJiAhZm5Jc0FzeW5jICYmIHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRvSW5qZWN0IHRhc2sgZnVuY3Rpb25zIHJlcXVpcmUgZXhwbGljaXQgcGFyYW1ldGVycy5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBjYWxsYmFjayBwYXJhbVxuICAgICAgICAgICAgaWYgKCFmbklzQXN5bmMpIHBhcmFtcy5wb3AoKTtcblxuICAgICAgICAgICAgbmV3VGFza3Nba2V5XSA9IHBhcmFtcy5jb25jYXQobmV3VGFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBuZXdUYXNrKHJlc3VsdHMsIHRhc2tDYikge1xuICAgICAgICAgICAgdmFyIG5ld0FyZ3MgPSBhcnJheU1hcChwYXJhbXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld0FyZ3MucHVzaCh0YXNrQ2IpO1xuICAgICAgICAgICAgd3JhcEFzeW5jJDEodGFza0ZuKS5hcHBseShudWxsLCBuZXdBcmdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXV0byhuZXdUYXNrcywgY2FsbGJhY2spO1xufVxuXG52YXIgaGFzU2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBzZXRJbW1lZGlhdGU7XG52YXIgaGFzTmV4dFRpY2sgPSB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHByb2Nlc3MubmV4dFRpY2sgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIGZhbGxiYWNrKGZuKSB7XG4gICAgc2V0VGltZW91dChmbiwgMCk7XG59XG5cbmZ1bmN0aW9uIHdyYXAoZGVmZXIpIHtcbiAgICByZXR1cm4gcmVzdChmdW5jdGlvbiAoZm4sIGFyZ3MpIHtcbiAgICAgICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG52YXIgX2RlZmVyO1xuXG5pZiAoaGFzU2V0SW1tZWRpYXRlKSB7XG4gICAgX2RlZmVyID0gc2V0SW1tZWRpYXRlO1xufSBlbHNlIGlmIChoYXNOZXh0VGljaykge1xuICAgIF9kZWZlciA9IHByb2Nlc3MubmV4dFRpY2s7XG59IGVsc2Uge1xuICAgIF9kZWZlciA9IGZhbGxiYWNrO1xufVxuXG52YXIgc2V0SW1tZWRpYXRlJDEgPSB3cmFwKF9kZWZlcik7XG5cbi8vIFNpbXBsZSBkb3VibHkgbGlua2VkIGxpc3QgKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RvdWJseV9saW5rZWRfbGlzdCkgaW1wbGVtZW50YXRpb25cbi8vIHVzZWQgZm9yIHF1ZXVlcy4gVGhpcyBpbXBsZW1lbnRhdGlvbiBhc3N1bWVzIHRoYXQgdGhlIG5vZGUgcHJvdmlkZWQgYnkgdGhlIHVzZXIgY2FuIGJlIG1vZGlmaWVkXG4vLyB0byBhZGp1c3QgdGhlIG5leHQgYW5kIGxhc3QgcHJvcGVydGllcy4gV2UgaW1wbGVtZW50IG9ubHkgdGhlIG1pbmltYWwgZnVuY3Rpb25hbGl0eVxuLy8gZm9yIHF1ZXVlIHN1cHBvcnQuXG5mdW5jdGlvbiBETEwoKSB7XG4gICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG59XG5cbmZ1bmN0aW9uIHNldEluaXRpYWwoZGxsLCBub2RlKSB7XG4gICAgZGxsLmxlbmd0aCA9IDE7XG4gICAgZGxsLmhlYWQgPSBkbGwudGFpbCA9IG5vZGU7XG59XG5cbkRMTC5wcm90b3R5cGUucmVtb3ZlTGluayA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUucHJldikgbm9kZS5wcmV2Lm5leHQgPSBub2RlLm5leHQ7ZWxzZSB0aGlzLmhlYWQgPSBub2RlLm5leHQ7XG4gICAgaWYgKG5vZGUubmV4dCkgbm9kZS5uZXh0LnByZXYgPSBub2RlLnByZXY7ZWxzZSB0aGlzLnRhaWwgPSBub2RlLnByZXY7XG5cbiAgICBub2RlLnByZXYgPSBub2RlLm5leHQgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoIC09IDE7XG4gICAgcmV0dXJuIG5vZGU7XG59O1xuXG5ETEwucHJvdG90eXBlLmVtcHR5ID0gRExMO1xuXG5ETEwucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKG5vZGUsIG5ld05vZGUpIHtcbiAgICBuZXdOb2RlLnByZXYgPSBub2RlO1xuICAgIG5ld05vZGUubmV4dCA9IG5vZGUubmV4dDtcbiAgICBpZiAobm9kZS5uZXh0KSBub2RlLm5leHQucHJldiA9IG5ld05vZGU7ZWxzZSB0aGlzLnRhaWwgPSBuZXdOb2RlO1xuICAgIG5vZGUubmV4dCA9IG5ld05vZGU7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcbn07XG5cbkRMTC5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24gKG5vZGUsIG5ld05vZGUpIHtcbiAgICBuZXdOb2RlLnByZXYgPSBub2RlLnByZXY7XG4gICAgbmV3Tm9kZS5uZXh0ID0gbm9kZTtcbiAgICBpZiAobm9kZS5wcmV2KSBub2RlLnByZXYubmV4dCA9IG5ld05vZGU7ZWxzZSB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIG5vZGUucHJldiA9IG5ld05vZGU7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcbn07XG5cbkRMTC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKHRoaXMuaGVhZCkgdGhpcy5pbnNlcnRCZWZvcmUodGhpcy5oZWFkLCBub2RlKTtlbHNlIHNldEluaXRpYWwodGhpcywgbm9kZSk7XG59O1xuXG5ETEwucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmICh0aGlzLnRhaWwpIHRoaXMuaW5zZXJ0QWZ0ZXIodGhpcy50YWlsLCBub2RlKTtlbHNlIHNldEluaXRpYWwodGhpcywgbm9kZSk7XG59O1xuXG5ETEwucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWQgJiYgdGhpcy5yZW1vdmVMaW5rKHRoaXMuaGVhZCk7XG59O1xuXG5ETEwucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy50YWlsICYmIHRoaXMucmVtb3ZlTGluayh0aGlzLnRhaWwpO1xufTtcblxuZnVuY3Rpb24gcXVldWUod29ya2VyLCBjb25jdXJyZW5jeSwgcGF5bG9hZCkge1xuICAgIGlmIChjb25jdXJyZW5jeSA9PSBudWxsKSB7XG4gICAgICAgIGNvbmN1cnJlbmN5ID0gMTtcbiAgICB9IGVsc2UgaWYgKGNvbmN1cnJlbmN5ID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uY3VycmVuY3kgbXVzdCBub3QgYmUgemVybycpO1xuICAgIH1cblxuICAgIHZhciBfd29ya2VyID0gd3JhcEFzeW5jJDEod29ya2VyKTtcbiAgICB2YXIgbnVtUnVubmluZyA9IDA7XG4gICAgdmFyIHdvcmtlcnNMaXN0ID0gW107XG5cbiAgICBmdW5jdGlvbiBfaW5zZXJ0KGRhdGEsIGluc2VydEF0RnJvbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayAhPSBudWxsICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0YXNrIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHEuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgcS5pZGxlKCkpIHtcbiAgICAgICAgICAgIC8vIGNhbGwgZHJhaW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIHRhc2tzXG4gICAgICAgICAgICByZXR1cm4gc2V0SW1tZWRpYXRlJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVtpXSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2sgfHwgbm9vcFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGluc2VydEF0RnJvbnQpIHtcbiAgICAgICAgICAgICAgICBxLl90YXNrcy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxLl90YXNrcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldEltbWVkaWF0ZSQxKHEucHJvY2Vzcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX25leHQodGFza3MpIHtcbiAgICAgICAgcmV0dXJuIHJlc3QoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIG51bVJ1bm5pbmcgLT0gMTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YXNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGJhc2VJbmRleE9mKHdvcmtlcnNMaXN0LCB0YXNrLCAwKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB3b3JrZXJzTGlzdC5zcGxpY2UoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkodGFzaywgYXJncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJnc1swXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHEuZXJyb3IoYXJnc1swXSwgdGFzay5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChudW1SdW5uaW5nIDw9IHEuY29uY3VycmVuY3kgLSBxLmJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIHEudW5zYXR1cmF0ZWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHEuaWRsZSgpKSB7XG4gICAgICAgICAgICAgICAgcS5kcmFpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcS5wcm9jZXNzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICB2YXIgcSA9IHtcbiAgICAgICAgX3Rhc2tzOiBuZXcgRExMKCksXG4gICAgICAgIGNvbmN1cnJlbmN5OiBjb25jdXJyZW5jeSxcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgc2F0dXJhdGVkOiBub29wLFxuICAgICAgICB1bnNhdHVyYXRlZDogbm9vcCxcbiAgICAgICAgYnVmZmVyOiBjb25jdXJyZW5jeSAvIDQsXG4gICAgICAgIGVtcHR5OiBub29wLFxuICAgICAgICBkcmFpbjogbm9vcCxcbiAgICAgICAgZXJyb3I6IG5vb3AsXG4gICAgICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICBwdXNoOiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIF9pbnNlcnQoZGF0YSwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAga2lsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcS5kcmFpbiA9IG5vb3A7XG4gICAgICAgICAgICBxLl90YXNrcy5lbXB0eSgpO1xuICAgICAgICB9LFxuICAgICAgICB1bnNoaWZ0OiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIF9pbnNlcnQoZGF0YSwgdHJ1ZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBBdm9pZCB0cnlpbmcgdG8gc3RhcnQgdG9vIG1hbnkgcHJvY2Vzc2luZyBvcGVyYXRpb25zLiBUaGlzIGNhbiBvY2N1clxuICAgICAgICAgICAgLy8gd2hlbiBjYWxsYmFja3MgcmVzb2x2ZSBzeW5jaHJvbm91c2x5ICgjMTI2NykuXG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHdoaWxlICghcS5wYXVzZWQgJiYgbnVtUnVubmluZyA8IHEuY29uY3VycmVuY3kgJiYgcS5fdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhc2tzID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHEuX3Rhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAocS5wYXlsb2FkKSBsID0gTWF0aC5taW4obCwgcS5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHEuX3Rhc2tzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChxLl90YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBudW1SdW5uaW5nICs9IDE7XG4gICAgICAgICAgICAgICAgd29ya2Vyc0xpc3QucHVzaCh0YXNrc1swXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobnVtUnVubmluZyA9PT0gcS5jb25jdXJyZW5jeSkge1xuICAgICAgICAgICAgICAgICAgICBxLnNhdHVyYXRlZCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBjYiA9IG9ubHlPbmNlKF9uZXh0KHRhc2tzKSk7XG4gICAgICAgICAgICAgICAgX3dvcmtlcihkYXRhLCBjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcS5fdGFza3MubGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBydW5uaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtUnVubmluZztcbiAgICAgICAgfSxcbiAgICAgICAgd29ya2Vyc0xpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB3b3JrZXJzTGlzdDtcbiAgICAgICAgfSxcbiAgICAgICAgaWRsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHEuX3Rhc2tzLmxlbmd0aCArIG51bVJ1bm5pbmcgPT09IDA7XG4gICAgICAgIH0sXG4gICAgICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBxLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHEucGF1c2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHEucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRJbW1lZGlhdGUkMShxLnByb2Nlc3MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gcTtcbn1cblxuLyoqXG4gKiBBIGNhcmdvIG9mIHRhc2tzIGZvciB0aGUgd29ya2VyIGZ1bmN0aW9uIHRvIGNvbXBsZXRlLiBDYXJnbyBpbmhlcml0cyBhbGwgb2ZcbiAqIHRoZSBzYW1lIG1ldGhvZHMgYW5kIGV2ZW50IGNhbGxiYWNrcyBhcyBbYHF1ZXVlYF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnF1ZXVlfS5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IENhcmdvT2JqZWN0XG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBsZW5ndGggLSBBIGZ1bmN0aW9uIHJldHVybmluZyB0aGUgbnVtYmVyIG9mIGl0ZW1zXG4gKiB3YWl0aW5nIHRvIGJlIHByb2Nlc3NlZC4gSW52b2tlIGxpa2UgYGNhcmdvLmxlbmd0aCgpYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwYXlsb2FkIC0gQW4gYGludGVnZXJgIGZvciBkZXRlcm1pbmluZyBob3cgbWFueSB0YXNrc1xuICogc2hvdWxkIGJlIHByb2Nlc3MgcGVyIHJvdW5kLiBUaGlzIHByb3BlcnR5IGNhbiBiZSBjaGFuZ2VkIGFmdGVyIGEgYGNhcmdvYCBpc1xuICogY3JlYXRlZCB0byBhbHRlciB0aGUgcGF5bG9hZCBvbi10aGUtZmx5LlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcHVzaCAtIEFkZHMgYHRhc2tgIHRvIHRoZSBgcXVldWVgLiBUaGUgY2FsbGJhY2sgaXNcbiAqIGNhbGxlZCBvbmNlIHRoZSBgd29ya2VyYCBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZyB0aGUgdGFzay4gSW5zdGVhZCBvZiBhXG4gKiBzaW5nbGUgdGFzaywgYW4gYXJyYXkgb2YgYHRhc2tzYCBjYW4gYmUgc3VibWl0dGVkLiBUaGUgcmVzcGVjdGl2ZSBjYWxsYmFjayBpc1xuICogdXNlZCBmb3IgZXZlcnkgdGFzayBpbiB0aGUgbGlzdC4gSW52b2tlIGxpa2UgYGNhcmdvLnB1c2godGFzaywgW2NhbGxiYWNrXSlgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc2F0dXJhdGVkIC0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZVxuICogYHF1ZXVlLmxlbmd0aCgpYCBoaXRzIHRoZSBjb25jdXJyZW5jeSBhbmQgZnVydGhlciB0YXNrcyB3aWxsIGJlIHF1ZXVlZC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGVtcHR5IC0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBsYXN0IGl0ZW1cbiAqIGZyb20gdGhlIGBxdWV1ZWAgaXMgZ2l2ZW4gdG8gYSBgd29ya2VyYC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGRyYWluIC0gQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBsYXN0IGl0ZW1cbiAqIGZyb20gdGhlIGBxdWV1ZWAgaGFzIHJldHVybmVkIGZyb20gdGhlIGB3b3JrZXJgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaWRsZSAtIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGZhbHNlIGlmIHRoZXJlIGFyZSBpdGVtc1xuICogd2FpdGluZyBvciBiZWluZyBwcm9jZXNzZWQsIG9yIHRydWUgaWYgbm90LiBJbnZva2UgbGlrZSBgY2FyZ28uaWRsZSgpYC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHBhdXNlIC0gYSBmdW5jdGlvbiB0aGF0IHBhdXNlcyB0aGUgcHJvY2Vzc2luZyBvZiB0YXNrc1xuICogdW50aWwgYHJlc3VtZSgpYCBpcyBjYWxsZWQuIEludm9rZSBsaWtlIGBjYXJnby5wYXVzZSgpYC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHJlc3VtZSAtIGEgZnVuY3Rpb24gdGhhdCByZXN1bWVzIHRoZSBwcm9jZXNzaW5nIG9mXG4gKiBxdWV1ZWQgdGFza3Mgd2hlbiB0aGUgcXVldWUgaXMgcGF1c2VkLiBJbnZva2UgbGlrZSBgY2FyZ28ucmVzdW1lKClgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0ga2lsbCAtIGEgZnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBgZHJhaW5gIGNhbGxiYWNrIGFuZFxuICogZW1wdGllcyByZW1haW5pbmcgdGFza3MgZnJvbSB0aGUgcXVldWUgZm9yY2luZyBpdCB0byBnbyBpZGxlLiBJbnZva2UgbGlrZSBgY2FyZ28ua2lsbCgpYC5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgY2FyZ29gIG9iamVjdCB3aXRoIHRoZSBzcGVjaWZpZWQgcGF5bG9hZC4gVGFza3MgYWRkZWQgdG8gdGhlXG4gKiBjYXJnbyB3aWxsIGJlIHByb2Nlc3NlZCBhbHRvZ2V0aGVyICh1cCB0byB0aGUgYHBheWxvYWRgIGxpbWl0KS4gSWYgdGhlXG4gKiBgd29ya2VyYCBpcyBpbiBwcm9ncmVzcywgdGhlIHRhc2sgaXMgcXVldWVkIHVudGlsIGl0IGJlY29tZXMgYXZhaWxhYmxlLiBPbmNlXG4gKiB0aGUgYHdvcmtlcmAgaGFzIGNvbXBsZXRlZCBzb21lIHRhc2tzLCBlYWNoIGNhbGxiYWNrIG9mIHRob3NlIHRhc2tzIGlzXG4gKiBjYWxsZWQuIENoZWNrIG91dCBbdGhlc2VdKGh0dHBzOi8vY2Ftby5naXRodWJ1c2VyY29udGVudC5jb20vNmJiZDM2ZjRjZjViMzVhMGYxMWE5NmRjZDJlOTc3MTFmZmMyZmIzNy82ODc0NzQ3MDczM2EyZjJmNjYyZTYzNmM2Zjc1NjQyZTY3Njk3NDY4NzU2MjJlNjM2ZjZkMmY2MTczNzM2NTc0NzMyZjMxMzYzNzM2MzgzNzMxMmYzNjM4MzEzMDM4MmY2MjYyNjMzMDYzNjY2MjMwMmQzNTY2MzIzOTJkMzEzMTY1MzIyZDM5MzczNDY2MmQzMzMzMzkzNzYzMzYzNDY0NjMzODM1MzgyZTY3Njk2NikgW2FuaW1hdGlvbnNdKGh0dHBzOi8vY2Ftby5naXRodWJ1c2VyY29udGVudC5jb20vZjQ4MTBlMDBlMWM1ZjVmOGFkZGJlM2U5ZjQ5MDY0ZmQ1ZDEwMjY5OS82ODc0NzQ3MDczM2EyZjJmNjYyZTYzNmM2Zjc1NjQyZTY3Njk3NDY4NzU2MjJlNjM2ZjZkMmY2MTczNzM2NTc0NzMyZjMxMzYzNzM2MzgzNzMxMmYzNjM4MzEzMDMxMmYzODM0NjMzOTMyMzAzNjM2MmQzNTY2MzIzOTJkMzEzMTY1MzIyZDM4MzEzNDY2MmQzOTY0MzM2NDMwMzIzNDMxMzM2MjY2NjQyZTY3Njk2NilcbiAqIGZvciBob3cgYGNhcmdvYCBhbmQgYHF1ZXVlYCB3b3JrLlxuICpcbiAqIFdoaWxlIFtgcXVldWVgXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cucXVldWV9IHBhc3NlcyBvbmx5IG9uZSB0YXNrIHRvIG9uZSBvZiBhIGdyb3VwIG9mIHdvcmtlcnNcbiAqIGF0IGEgdGltZSwgY2FyZ28gcGFzc2VzIGFuIGFycmF5IG9mIHRhc2tzIHRvIGEgc2luZ2xlIHdvcmtlciwgcmVwZWF0aW5nXG4gKiB3aGVuIHRoZSB3b3JrZXIgaXMgZmluaXNoZWQuXG4gKlxuICogQG5hbWUgY2FyZ29cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLnF1ZXVlXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cucXVldWV9XG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IHdvcmtlciAtIEFuIGFzeW5jaHJvbm91cyBmdW5jdGlvbiBmb3IgcHJvY2Vzc2luZyBhbiBhcnJheVxuICogb2YgcXVldWVkIHRhc2tzLiBJbnZva2VkIHdpdGggYCh0YXNrcywgY2FsbGJhY2spYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcGF5bG9hZD1JbmZpbml0eV0gLSBBbiBvcHRpb25hbCBgaW50ZWdlcmAgZm9yIGRldGVybWluaW5nXG4gKiBob3cgbWFueSB0YXNrcyBzaG91bGQgYmUgcHJvY2Vzc2VkIHBlciByb3VuZDsgaWYgb21pdHRlZCwgdGhlIGRlZmF1bHQgaXNcbiAqIHVubGltaXRlZC5cbiAqIEByZXR1cm5zIHttb2R1bGU6Q29udHJvbEZsb3cuQ2FyZ29PYmplY3R9IEEgY2FyZ28gb2JqZWN0IHRvIG1hbmFnZSB0aGUgdGFza3MuIENhbGxiYWNrcyBjYW5cbiAqIGF0dGFjaGVkIGFzIGNlcnRhaW4gcHJvcGVydGllcyB0byBsaXN0ZW4gZm9yIHNwZWNpZmljIGV2ZW50cyBkdXJpbmcgdGhlXG4gKiBsaWZlY3ljbGUgb2YgdGhlIGNhcmdvIGFuZCBpbm5lciBxdWV1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gY3JlYXRlIGEgY2FyZ28gb2JqZWN0IHdpdGggcGF5bG9hZCAyXG4gKiB2YXIgY2FyZ28gPSBhc3luYy5jYXJnbyhmdW5jdGlvbih0YXNrcywgY2FsbGJhY2spIHtcbiAqICAgICBmb3IgKHZhciBpPTA7IGk8dGFza3MubGVuZ3RoOyBpKyspIHtcbiAqICAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvICcgKyB0YXNrc1tpXS5uYW1lKTtcbiAqICAgICB9XG4gKiAgICAgY2FsbGJhY2soKTtcbiAqIH0sIDIpO1xuICpcbiAqIC8vIGFkZCBzb21lIGl0ZW1zXG4gKiBjYXJnby5wdXNoKHtuYW1lOiAnZm9vJ30sIGZ1bmN0aW9uKGVycikge1xuICogICAgIGNvbnNvbGUubG9nKCdmaW5pc2hlZCBwcm9jZXNzaW5nIGZvbycpO1xuICogfSk7XG4gKiBjYXJnby5wdXNoKHtuYW1lOiAnYmFyJ30sIGZ1bmN0aW9uKGVycikge1xuICogICAgIGNvbnNvbGUubG9nKCdmaW5pc2hlZCBwcm9jZXNzaW5nIGJhcicpO1xuICogfSk7XG4gKiBjYXJnby5wdXNoKHtuYW1lOiAnYmF6J30sIGZ1bmN0aW9uKGVycikge1xuICogICAgIGNvbnNvbGUubG9nKCdmaW5pc2hlZCBwcm9jZXNzaW5nIGJheicpO1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGNhcmdvKHdvcmtlciwgcGF5bG9hZCkge1xuICByZXR1cm4gcXVldWUod29ya2VyLCAxLCBwYXlsb2FkKTtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGVhY2hPZmBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNoT2Z9IGJ1dCBydW5zIG9ubHkgYSBzaW5nbGUgYXN5bmMgb3BlcmF0aW9uIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBlYWNoT2ZTZXJpZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmVhY2hPZl17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmVhY2hPZn1cbiAqIEBhbGlhcyBmb3JFYWNoT2ZTZXJpZXNcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGtleSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsIGBpdGVyYXRlZWBcbiAqIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIEludm9rZWQgd2l0aCAoZXJyKS5cbiAqL1xudmFyIGVhY2hPZlNlcmllcyA9IGRvTGltaXQoZWFjaE9mTGltaXQsIDEpO1xuXG4vKipcbiAqIFJlZHVjZXMgYGNvbGxgIGludG8gYSBzaW5nbGUgdmFsdWUgdXNpbmcgYW4gYXN5bmMgYGl0ZXJhdGVlYCB0byByZXR1cm4gZWFjaFxuICogc3VjY2Vzc2l2ZSBzdGVwLiBgbWVtb2AgaXMgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHJlZHVjdGlvbi4gVGhpcyBmdW5jdGlvblxuICogb25seSBvcGVyYXRlcyBpbiBzZXJpZXMuXG4gKlxuICogRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIGl0IG1heSBtYWtlIHNlbnNlIHRvIHNwbGl0IGEgY2FsbCB0byB0aGlzIGZ1bmN0aW9uXG4gKiBpbnRvIGEgcGFyYWxsZWwgbWFwLCBhbmQgdGhlbiB1c2UgdGhlIG5vcm1hbCBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgb24gdGhlXG4gKiByZXN1bHRzLiBUaGlzIGZ1bmN0aW9uIGlzIGZvciBzaXR1YXRpb25zIHdoZXJlIGVhY2ggc3RlcCBpbiB0aGUgcmVkdWN0aW9uXG4gKiBuZWVkcyB0byBiZSBhc3luYzsgaWYgeW91IGNhbiBnZXQgdGhlIGRhdGEgYmVmb3JlIHJlZHVjaW5nIGl0LCB0aGVuIGl0J3NcbiAqIHByb2JhYmx5IGEgZ29vZCBpZGVhIHRvIGRvIHNvLlxuICpcbiAqIEBuYW1lIHJlZHVjZVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGFsaWFzIGluamVjdFxuICogQGFsaWFzIGZvbGRsXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHsqfSBtZW1vIC0gVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHJlZHVjdGlvbi5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIGFwcGxpZWQgdG8gZWFjaCBpdGVtIGluIHRoZVxuICogYXJyYXkgdG8gcHJvZHVjZSB0aGUgbmV4dCBzdGVwIGluIHRoZSByZWR1Y3Rpb24uXG4gKiBUaGUgYGl0ZXJhdGVlYCBzaG91bGQgY29tcGxldGUgd2l0aCB0aGUgbmV4dCBzdGF0ZSBvZiB0aGUgcmVkdWN0aW9uLlxuICogSWYgdGhlIGl0ZXJhdGVlIGNvbXBsZXRlIHdpdGggYW4gZXJyb3IsIHRoZSByZWR1Y3Rpb24gaXMgc3RvcHBlZCBhbmQgdGhlXG4gKiBtYWluIGBjYWxsYmFja2AgaXMgaW1tZWRpYXRlbHkgY2FsbGVkIHdpdGggdGhlIGVycm9yLlxuICogSW52b2tlZCB3aXRoIChtZW1vLCBpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIHRoZVxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC4gUmVzdWx0IGlzIHRoZSByZWR1Y2VkIHZhbHVlLiBJbnZva2VkIHdpdGhcbiAqIChlcnIsIHJlc3VsdCkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLnJlZHVjZShbMSwyLDNdLCAwLCBmdW5jdGlvbihtZW1vLCBpdGVtLCBjYWxsYmFjaykge1xuICogICAgIC8vIHBvaW50bGVzcyBhc3luYzpcbiAqICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCBtZW1vICsgaXRlbSlcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IGlzIG5vdyBlcXVhbCB0byB0aGUgbGFzdCB2YWx1ZSBvZiBtZW1vLCB3aGljaCBpcyA2XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGNvbGwsIG1lbW8sIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICB2YXIgX2l0ZXJhdGVlID0gd3JhcEFzeW5jJDEoaXRlcmF0ZWUpO1xuICAgIGVhY2hPZlNlcmllcyhjb2xsLCBmdW5jdGlvbiAoeCwgaSwgY2FsbGJhY2spIHtcbiAgICAgICAgX2l0ZXJhdGVlKG1lbW8sIHgsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgIG1lbW8gPSB2O1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIsIG1lbW8pO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFZlcnNpb24gb2YgdGhlIGNvbXBvc2UgZnVuY3Rpb24gdGhhdCBpcyBtb3JlIG5hdHVyYWwgdG8gcmVhZC4gRWFjaCBmdW5jdGlvblxuICogY29uc3VtZXMgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgZnVuY3Rpb24uIEl0IGlzIHRoZSBlcXVpdmFsZW50IG9mXG4gKiBbY29tcG9zZV17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LmNvbXBvc2V9IHdpdGggdGhlIGFyZ3VtZW50cyByZXZlcnNlZC5cbiAqXG4gKiBFYWNoIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBjb21wb3NlZCBmdW5jdGlvbi5cbiAqXG4gKiBAbmFtZSBzZXFcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmNvbXBvc2Vde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5jb21wb3NlfVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHsuLi5Bc3luY0Z1bmN0aW9ufSBmdW5jdGlvbnMgLSB0aGUgYXN5bmNocm9ub3VzIGZ1bmN0aW9ucyB0byBjb21wb3NlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGEgZnVuY3Rpb24gdGhhdCBjb21wb3NlcyB0aGUgYGZ1bmN0aW9uc2AgaW4gb3JkZXJcbiAqIEBleGFtcGxlXG4gKlxuICogLy8gUmVxdWlyZXMgbG9kYXNoIChvciB1bmRlcnNjb3JlKSwgZXhwcmVzczMgYW5kIGRyZXNlbmRlJ3Mgb3JtMi5cbiAqIC8vIFBhcnQgb2YgYW4gYXBwLCB0aGF0IGZldGNoZXMgY2F0cyBvZiB0aGUgbG9nZ2VkIHVzZXIuXG4gKiAvLyBUaGlzIGV4YW1wbGUgdXNlcyBgc2VxYCBmdW5jdGlvbiB0byBhdm9pZCBvdmVybmVzdGluZyBhbmQgZXJyb3JcbiAqIC8vIGhhbmRsaW5nIGNsdXR0ZXIuXG4gKiBhcHAuZ2V0KCcvY2F0cycsIGZ1bmN0aW9uKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gKiAgICAgdmFyIFVzZXIgPSByZXF1ZXN0Lm1vZGVscy5Vc2VyO1xuICogICAgIGFzeW5jLnNlcShcbiAqICAgICAgICAgXy5iaW5kKFVzZXIuZ2V0LCBVc2VyKSwgIC8vICdVc2VyLmdldCcgaGFzIHNpZ25hdHVyZSAoaWQsIGNhbGxiYWNrKGVyciwgZGF0YSkpXG4gKiAgICAgICAgIGZ1bmN0aW9uKHVzZXIsIGZuKSB7XG4gKiAgICAgICAgICAgICB1c2VyLmdldENhdHMoZm4pOyAgICAgIC8vICdnZXRDYXRzJyBoYXMgc2lnbmF0dXJlIChjYWxsYmFjayhlcnIsIGRhdGEpKVxuICogICAgICAgICB9XG4gKiAgICAgKShyZXEuc2Vzc2lvbi51c2VyX2lkLCBmdW5jdGlvbiAoZXJyLCBjYXRzKSB7XG4gKiAgICAgICAgIGlmIChlcnIpIHtcbiAqICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAqICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oeyBzdGF0dXM6ICdlcnJvcicsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICogICAgICAgICB9IGVsc2Uge1xuICogICAgICAgICAgICAgcmVzcG9uc2UuanNvbih7IHN0YXR1czogJ29rJywgbWVzc2FnZTogJ0NhdHMgZm91bmQnLCBkYXRhOiBjYXRzIH0pO1xuICogICAgICAgICB9XG4gKiAgICAgfSk7XG4gKiB9KTtcbiAqL1xudmFyIHNlcSQxID0gcmVzdChmdW5jdGlvbiBzZXEoZnVuY3Rpb25zKSB7XG4gICAgdmFyIF9mdW5jdGlvbnMgPSBhcnJheU1hcChmdW5jdGlvbnMsIHdyYXBBc3luYyQxKTtcbiAgICByZXR1cm4gcmVzdChmdW5jdGlvbiAoYXJncykge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGNiID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAodHlwZW9mIGNiID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyZ3MucG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYiA9IG5vb3A7XG4gICAgICAgIH1cblxuICAgICAgICByZWR1Y2UoX2Z1bmN0aW9ucywgYXJncywgZnVuY3Rpb24gKG5ld2FyZ3MsIGZuLCBjYikge1xuICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgbmV3YXJncy5jb25jYXQocmVzdChmdW5jdGlvbiAoZXJyLCBuZXh0YXJncykge1xuICAgICAgICAgICAgICAgIGNiKGVyciwgbmV4dGFyZ3MpO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgY2IuYXBwbHkodGhhdCwgW2Vycl0uY29uY2F0KHJlc3VsdHMpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gd2hpY2ggaXMgYSBjb21wb3NpdGlvbiBvZiB0aGUgcGFzc2VkIGFzeW5jaHJvbm91c1xuICogZnVuY3Rpb25zLiBFYWNoIGZ1bmN0aW9uIGNvbnN1bWVzIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHRoYXRcbiAqIGZvbGxvd3MuIENvbXBvc2luZyBmdW5jdGlvbnMgYGYoKWAsIGBnKClgLCBhbmQgYGgoKWAgd291bGQgcHJvZHVjZSB0aGUgcmVzdWx0XG4gKiBvZiBgZihnKGgoKSkpYCwgb25seSB0aGlzIHZlcnNpb24gdXNlcyBjYWxsYmFja3MgdG8gb2J0YWluIHRoZSByZXR1cm4gdmFsdWVzLlxuICpcbiAqIEVhY2ggZnVuY3Rpb24gaXMgZXhlY3V0ZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIGNvbXBvc2VkIGZ1bmN0aW9uLlxuICpcbiAqIEBuYW1lIGNvbXBvc2VcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7Li4uQXN5bmNGdW5jdGlvbn0gZnVuY3Rpb25zIC0gdGhlIGFzeW5jaHJvbm91cyBmdW5jdGlvbnMgdG8gY29tcG9zZVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBhbiBhc3luY2hyb25vdXMgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zZWRcbiAqIGFzeW5jaHJvbm91cyBgZnVuY3Rpb25zYFxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBhZGQxKG4sIGNhbGxiYWNrKSB7XG4gKiAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsIG4gKyAxKTtcbiAqICAgICB9LCAxMCk7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gbXVsMyhuLCBjYWxsYmFjaykge1xuICogICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCBuICogMyk7XG4gKiAgICAgfSwgMTApO1xuICogfVxuICpcbiAqIHZhciBhZGQxbXVsMyA9IGFzeW5jLmNvbXBvc2UobXVsMywgYWRkMSk7XG4gKiBhZGQxbXVsMyg0LCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyByZXN1bHQgbm93IGVxdWFscyAxNVxuICogfSk7XG4gKi9cbnZhciBjb21wb3NlID0gcmVzdChmdW5jdGlvbiAoYXJncykge1xuICByZXR1cm4gc2VxJDEuYXBwbHkobnVsbCwgYXJncy5yZXZlcnNlKCkpO1xufSk7XG5cbmZ1bmN0aW9uIGNvbmNhdCQxKGVhY2hmbiwgYXJyLCBmbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGluZGV4LCBjYikge1xuICAgICAgICBmbih4LCBmdW5jdGlvbiAoZXJyLCB5KSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHkgfHwgW10pO1xuICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQXBwbGllcyBgaXRlcmF0ZWVgIHRvIGVhY2ggaXRlbSBpbiBgY29sbGAsIGNvbmNhdGVuYXRpbmcgdGhlIHJlc3VsdHMuIFJldHVybnNcbiAqIHRoZSBjb25jYXRlbmF0ZWQgbGlzdC4gVGhlIGBpdGVyYXRlZWBzIGFyZSBjYWxsZWQgaW4gcGFyYWxsZWwsIGFuZCB0aGVcbiAqIHJlc3VsdHMgYXJlIGNvbmNhdGVuYXRlZCBhcyB0aGV5IHJldHVybi4gVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgdGhlXG4gKiByZXN1bHRzIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQgaW4gdGhlIG9yaWdpbmFsIG9yZGVyIG9mIGBjb2xsYCBwYXNzZWQgdG8gdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9uLlxuICpcbiAqIEBuYW1lIGNvbmNhdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpbiBgY29sbGAsXG4gKiB3aGljaCBzaG91bGQgdXNlIGFuIGFycmF5IGFzIGl0cyByZXN1bHQuIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrKGVycildIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIHRoZVxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBSZXN1bHRzIGlzIGFuIGFycmF5XG4gKiBjb250YWluaW5nIHRoZSBjb25jYXRlbmF0ZWQgcmVzdWx0cyBvZiB0aGUgYGl0ZXJhdGVlYCBmdW5jdGlvbi4gSW52b2tlZCB3aXRoXG4gKiAoZXJyLCByZXN1bHRzKS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMuY29uY2F0KFsnZGlyMScsJ2RpcjInLCdkaXIzJ10sIGZzLnJlYWRkaXIsIGZ1bmN0aW9uKGVyciwgZmlsZXMpIHtcbiAqICAgICAvLyBmaWxlcyBpcyBub3cgYSBsaXN0IG9mIGZpbGVuYW1lcyB0aGF0IGV4aXN0IGluIHRoZSAzIGRpcmVjdG9yaWVzXG4gKiB9KTtcbiAqL1xudmFyIGNvbmNhdCA9IGRvUGFyYWxsZWwoY29uY2F0JDEpO1xuXG5mdW5jdGlvbiBkb1Nlcmllcyhmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAob2JqLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGZuKGVhY2hPZlNlcmllcywgb2JqLCB3cmFwQXN5bmMkMShpdGVyYXRlZSksIGNhbGxiYWNrKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgY29uY2F0YF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmNvbmNhdH0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIGNvbmNhdFNlcmllc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuY29uY2F0XXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuY29uY2F0fVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpbiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggYW4gYXJyYXkgYW4gYXJyYXkgb2YgcmVzdWx0cy5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrKGVycildIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIHRoZVxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBSZXN1bHRzIGlzIGFuIGFycmF5XG4gKiBjb250YWluaW5nIHRoZSBjb25jYXRlbmF0ZWQgcmVzdWx0cyBvZiB0aGUgYGl0ZXJhdGVlYCBmdW5jdGlvbi4gSW52b2tlZCB3aXRoXG4gKiAoZXJyLCByZXN1bHRzKS5cbiAqL1xudmFyIGNvbmNhdFNlcmllcyA9IGRvU2VyaWVzKGNvbmNhdCQxKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aGVuIGNhbGxlZCwgY2FsbHMtYmFjayB3aXRoIHRoZSB2YWx1ZXMgcHJvdmlkZWQuXG4gKiBVc2VmdWwgYXMgdGhlIGZpcnN0IGZ1bmN0aW9uIGluIGEgW2B3YXRlcmZhbGxgXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cud2F0ZXJmYWxsfSwgb3IgZm9yIHBsdWdnaW5nIHZhbHVlcyBpbiB0b1xuICogW2BhdXRvYF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LmF1dG99LlxuICpcbiAqIEBuYW1lIGNvbnN0YW50XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsuLi4qfSBhcmd1bWVudHMuLi4gLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBhdXRvbWF0aWNhbGx5IGludm9rZVxuICogY2FsbGJhY2sgd2l0aC5cbiAqIEByZXR1cm5zIHtBc3luY0Z1bmN0aW9ufSBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aGVuIGludm9rZWQsIGF1dG9tYXRpY2FsbHlcbiAqIGludm9rZXMgdGhlIGNhbGxiYWNrIHdpdGggdGhlIHByZXZpb3VzIGdpdmVuIGFyZ3VtZW50cy5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMud2F0ZXJmYWxsKFtcbiAqICAgICBhc3luYy5jb25zdGFudCg0MiksXG4gKiAgICAgZnVuY3Rpb24gKHZhbHVlLCBuZXh0KSB7XG4gKiAgICAgICAgIC8vIHZhbHVlID09PSA0MlxuICogICAgIH0sXG4gKiAgICAgLy8uLi5cbiAqIF0sIGNhbGxiYWNrKTtcbiAqXG4gKiBhc3luYy53YXRlcmZhbGwoW1xuICogICAgIGFzeW5jLmNvbnN0YW50KGZpbGVuYW1lLCBcInV0ZjhcIiksXG4gKiAgICAgZnMucmVhZEZpbGUsXG4gKiAgICAgZnVuY3Rpb24gKGZpbGVEYXRhLCBuZXh0KSB7XG4gKiAgICAgICAgIC8vLi4uXG4gKiAgICAgfVxuICogICAgIC8vLi4uXG4gKiBdLCBjYWxsYmFjayk7XG4gKlxuICogYXN5bmMuYXV0byh7XG4gKiAgICAgaG9zdG5hbWU6IGFzeW5jLmNvbnN0YW50KFwiaHR0cHM6Ly9zZXJ2ZXIubmV0L1wiKSxcbiAqICAgICBwb3J0OiBmaW5kRnJlZVBvcnQsXG4gKiAgICAgbGF1bmNoU2VydmVyOiBbXCJob3N0bmFtZVwiLCBcInBvcnRcIiwgZnVuY3Rpb24gKG9wdGlvbnMsIGNiKSB7XG4gKiAgICAgICAgIHN0YXJ0U2VydmVyKG9wdGlvbnMsIGNiKTtcbiAqICAgICB9XSxcbiAqICAgICAvLy4uLlxuICogfSwgY2FsbGJhY2spO1xuICovXG52YXIgY29uc3RhbnQgPSByZXN0KGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICB2YXIgYXJncyA9IFtudWxsXS5jb25jYXQodmFsdWVzKTtcbiAgICByZXR1cm4gaW5pdGlhbFBhcmFtcyhmdW5jdGlvbiAoaWdub3JlZEFyZ3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBfY3JlYXRlVGVzdGVyKGNoZWNrLCBnZXRSZXN1bHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVhY2hmbiwgYXJyLCBpdGVyYXRlZSwgY2IpIHtcbiAgICAgICAgY2IgPSBjYiB8fCBub29wO1xuICAgICAgICB2YXIgdGVzdFBhc3NlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdGVzdFJlc3VsdDtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHZhbHVlLCBfLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0ZWUodmFsdWUsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoZWNrKHJlc3VsdCkgJiYgIXRlc3RSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdFBhc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRlc3RSZXN1bHQgPSBnZXRSZXN1bHQodHJ1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBicmVha0xvb3ApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYihudWxsLCB0ZXN0UGFzc2VkID8gdGVzdFJlc3VsdCA6IGdldFJlc3VsdChmYWxzZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfZmluZEdldFJlc3VsdCh2LCB4KSB7XG4gICAgcmV0dXJuIHg7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgdmFsdWUgaW4gYGNvbGxgIHRoYXQgcGFzc2VzIGFuIGFzeW5jIHRydXRoIHRlc3QuIFRoZVxuICogYGl0ZXJhdGVlYCBpcyBhcHBsaWVkIGluIHBhcmFsbGVsLCBtZWFuaW5nIHRoZSBmaXJzdCBpdGVyYXRlZSB0byByZXR1cm5cbiAqIGB0cnVlYCB3aWxsIGZpcmUgdGhlIGRldGVjdCBgY2FsbGJhY2tgIHdpdGggdGhhdCByZXN1bHQuIFRoYXQgbWVhbnMgdGhlXG4gKiByZXN1bHQgbWlnaHQgbm90IGJlIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBvcmlnaW5hbCBgY29sbGAgKGluIHRlcm1zIG9mIG9yZGVyKVxuICogdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG5cbiAqIElmIG9yZGVyIHdpdGhpbiB0aGUgb3JpZ2luYWwgYGNvbGxgIGlzIGltcG9ydGFudCwgdGhlbiBsb29rIGF0XG4gKiBbYGRldGVjdFNlcmllc2Bde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5kZXRlY3RTZXJpZXN9LlxuICpcbiAqIEBuYW1lIGRldGVjdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGFsaWFzIGZpbmRcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uc1xuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEEgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW4gYGNvbGxgLlxuICogVGhlIGl0ZXJhdGVlIG11c3QgY29tcGxldGUgd2l0aCBhIGJvb2xlYW4gdmFsdWUgYXMgaXRzIHJlc3VsdC5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFzIHNvb24gYXMgYW55XG4gKiBpdGVyYXRlZSByZXR1cm5zIGB0cnVlYCwgb3IgYWZ0ZXIgYWxsIHRoZSBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLlxuICogUmVzdWx0IHdpbGwgYmUgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGFycmF5IHRoYXQgcGFzc2VzIHRoZSB0cnV0aCB0ZXN0XG4gKiAoaXRlcmF0ZWUpIG9yIHRoZSB2YWx1ZSBgdW5kZWZpbmVkYCBpZiBub25lIHBhc3NlZC4gSW52b2tlZCB3aXRoXG4gKiAoZXJyLCByZXN1bHQpLlxuICogQGV4YW1wbGVcbiAqXG4gKiBhc3luYy5kZXRlY3QoWydmaWxlMScsJ2ZpbGUyJywnZmlsZTMnXSwgZnVuY3Rpb24oZmlsZVBhdGgsIGNhbGxiYWNrKSB7XG4gKiAgICAgZnMuYWNjZXNzKGZpbGVQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgIWVycilcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IG5vdyBlcXVhbHMgdGhlIGZpcnN0IGZpbGUgaW4gdGhlIGxpc3QgdGhhdCBleGlzdHNcbiAqIH0pO1xuICovXG52YXIgZGV0ZWN0ID0gZG9QYXJhbGxlbChfY3JlYXRlVGVzdGVyKGlkZW50aXR5LCBfZmluZEdldFJlc3VsdCkpO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgZGV0ZWN0YF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmRldGVjdH0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhXG4gKiB0aW1lLlxuICpcbiAqIEBuYW1lIGRldGVjdExpbWl0XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5kZXRlY3Rde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5kZXRlY3R9XG4gKiBAYWxpYXMgZmluZExpbWl0XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvbnNcbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIHRydXRoIHRlc3QgdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluIGBjb2xsYC5cbiAqIFRoZSBpdGVyYXRlZSBtdXN0IGNvbXBsZXRlIHdpdGggYSBib29sZWFuIHZhbHVlIGFzIGl0cyByZXN1bHQuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhcyBzb29uIGFzIGFueVxuICogaXRlcmF0ZWUgcmV0dXJucyBgdHJ1ZWAsIG9yIGFmdGVyIGFsbCB0aGUgYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAqIFJlc3VsdCB3aWxsIGJlIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBhcnJheSB0aGF0IHBhc3NlcyB0aGUgdHJ1dGggdGVzdFxuICogKGl0ZXJhdGVlKSBvciB0aGUgdmFsdWUgYHVuZGVmaW5lZGAgaWYgbm9uZSBwYXNzZWQuIEludm9rZWQgd2l0aFxuICogKGVyciwgcmVzdWx0KS5cbiAqL1xudmFyIGRldGVjdExpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9jcmVhdGVUZXN0ZXIoaWRlbnRpdHksIF9maW5kR2V0UmVzdWx0KSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BkZXRlY3RgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZGV0ZWN0fSBidXQgcnVucyBvbmx5IGEgc2luZ2xlIGFzeW5jIG9wZXJhdGlvbiBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgZGV0ZWN0U2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5kZXRlY3Rde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5kZXRlY3R9XG4gKiBAYWxpYXMgZmluZFNlcmllc1xuICogQGNhdGVnb3J5IENvbGxlY3Rpb25zXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQSB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpbiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgbXVzdCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYXMgc29vbiBhcyBhbnlcbiAqIGl0ZXJhdGVlIHJldHVybnMgYHRydWVgLCBvciBhZnRlciBhbGwgdGhlIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuXG4gKiBSZXN1bHQgd2lsbCBiZSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgYXJyYXkgdGhhdCBwYXNzZXMgdGhlIHRydXRoIHRlc3RcbiAqIChpdGVyYXRlZSkgb3IgdGhlIHZhbHVlIGB1bmRlZmluZWRgIGlmIG5vbmUgcGFzc2VkLiBJbnZva2VkIHdpdGhcbiAqIChlcnIsIHJlc3VsdCkuXG4gKi9cbnZhciBkZXRlY3RTZXJpZXMgPSBkb0xpbWl0KGRldGVjdExpbWl0LCAxKTtcblxuZnVuY3Rpb24gY29uc29sZUZ1bmMobmFtZSkge1xuICAgIHJldHVybiByZXN0KGZ1bmN0aW9uIChmbiwgYXJncykge1xuICAgICAgICB3cmFwQXN5bmMkMShmbikuYXBwbHkobnVsbCwgYXJncy5jb25jYXQocmVzdChmdW5jdGlvbiAoZXJyLCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5RWFjaChhcmdzLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZVtuYW1lXSh4KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIExvZ3MgdGhlIHJlc3VsdCBvZiBhbiBbYGFzeW5jYCBmdW5jdGlvbl17QGxpbmsgQXN5bmNGdW5jdGlvbn0gdG8gdGhlXG4gKiBgY29uc29sZWAgdXNpbmcgYGNvbnNvbGUuZGlyYCB0byBkaXNwbGF5IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSByZXN1bHRpbmcgb2JqZWN0LlxuICogT25seSB3b3JrcyBpbiBOb2RlLmpzIG9yIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBgY29uc29sZS5kaXJgIGFuZFxuICogYGNvbnNvbGUuZXJyb3JgIChzdWNoIGFzIEZGIGFuZCBDaHJvbWUpLlxuICogSWYgbXVsdGlwbGUgYXJndW1lbnRzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBhc3luYyBmdW5jdGlvbixcbiAqIGBjb25zb2xlLmRpcmAgaXMgY2FsbGVkIG9uIGVhY2ggYXJndW1lbnQgaW4gb3JkZXIuXG4gKlxuICogQG5hbWUgZGlyXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmdW5jdGlvbiAtIFRoZSBmdW5jdGlvbiB5b3Ugd2FudCB0byBldmVudHVhbGx5IGFwcGx5XG4gKiBhbGwgYXJndW1lbnRzIHRvLlxuICogQHBhcmFtIHsuLi4qfSBhcmd1bWVudHMuLi4gLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBhcHBseSB0byB0aGUgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGluIGEgbW9kdWxlXG4gKiB2YXIgaGVsbG8gPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICogICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsIHtoZWxsbzogbmFtZX0pO1xuICogICAgIH0sIDEwMDApO1xuICogfTtcbiAqXG4gKiAvLyBpbiB0aGUgbm9kZSByZXBsXG4gKiBub2RlPiBhc3luYy5kaXIoaGVsbG8sICd3b3JsZCcpO1xuICoge2hlbGxvOiAnd29ybGQnfVxuICovXG52YXIgZGlyID0gY29uc29sZUZ1bmMoJ2RpcicpO1xuXG4vKipcbiAqIFRoZSBwb3N0LWNoZWNrIHZlcnNpb24gb2YgW2BkdXJpbmdgXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuZHVyaW5nfS4gVG8gcmVmbGVjdCB0aGUgZGlmZmVyZW5jZSBpblxuICogdGhlIG9yZGVyIG9mIG9wZXJhdGlvbnMsIHRoZSBhcmd1bWVudHMgYHRlc3RgIGFuZCBgZm5gIGFyZSBzd2l0Y2hlZC5cbiAqXG4gKiBBbHNvIGEgdmVyc2lvbiBvZiBbYGRvV2hpbHN0YF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LmRvV2hpbHN0fSB3aXRoIGFzeW5jaHJvbm91cyBgdGVzdGAgZnVuY3Rpb24uXG4gKiBAbmFtZSBkb0R1cmluZ1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuZHVyaW5nXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuZHVyaW5nfVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmbiAtIEFuIGFzeW5jIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBlYWNoIHRpbWVcbiAqIGB0ZXN0YCBwYXNzZXMuIEludm9rZWQgd2l0aCAoY2FsbGJhY2spLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSB0ZXN0IC0gYXN5bmNocm9ub3VzIHRydXRoIHRlc3QgdG8gcGVyZm9ybSBiZWZvcmUgZWFjaFxuICogZXhlY3V0aW9uIG9mIGBmbmAuIEludm9rZWQgd2l0aCAoLi4uYXJncywgY2FsbGJhY2spLCB3aGVyZSBgLi4uYXJnc2AgYXJlIHRoZVxuICogbm9uLWVycm9yIGFyZ3MgZnJvbSB0aGUgcHJldmlvdXMgY2FsbGJhY2sgb2YgYGZuYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciB0aGUgdGVzdFxuICogZnVuY3Rpb24gaGFzIGZhaWxlZCBhbmQgcmVwZWF0ZWQgZXhlY3V0aW9uIG9mIGBmbmAgaGFzIHN0b3BwZWQuIGBjYWxsYmFja2BcbiAqIHdpbGwgYmUgcGFzc2VkIGFuIGVycm9yIGlmIG9uZSBvY2N1cnJlZCwgb3RoZXJ3aXNlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gZG9EdXJpbmcoZm4sIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBvbmx5T25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICB2YXIgX2ZuID0gd3JhcEFzeW5jJDEoZm4pO1xuICAgIHZhciBfdGVzdCA9IHdyYXBBc3luYyQxKHRlc3QpO1xuXG4gICAgdmFyIG5leHQgPSByZXN0KGZ1bmN0aW9uIChlcnIsIGFyZ3MpIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIGFyZ3MucHVzaChjaGVjayk7XG4gICAgICAgIF90ZXN0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY2hlY2soZXJyLCB0cnV0aCkge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgaWYgKCF0cnV0aCkgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICBfZm4obmV4dCk7XG4gICAgfVxuXG4gICAgY2hlY2sobnVsbCwgdHJ1ZSk7XG59XG5cbi8qKlxuICogVGhlIHBvc3QtY2hlY2sgdmVyc2lvbiBvZiBbYHdoaWxzdGBde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy53aGlsc3R9LiBUbyByZWZsZWN0IHRoZSBkaWZmZXJlbmNlIGluXG4gKiB0aGUgb3JkZXIgb2Ygb3BlcmF0aW9ucywgdGhlIGFyZ3VtZW50cyBgdGVzdGAgYW5kIGBpdGVyYXRlZWAgYXJlIHN3aXRjaGVkLlxuICpcbiAqIGBkb1doaWxzdGAgaXMgdG8gYHdoaWxzdGAgYXMgYGRvIHdoaWxlYCBpcyB0byBgd2hpbGVgIGluIHBsYWluIEphdmFTY3JpcHQuXG4gKlxuICogQG5hbWUgZG9XaGlsc3RcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLndoaWxzdF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LndoaWxzdH1cbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBlYWNoIHRpbWUgYHRlc3RgXG4gKiBwYXNzZXMuIEludm9rZWQgd2l0aCAoY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdGVzdCAtIHN5bmNocm9ub3VzIHRydXRoIHRlc3QgdG8gcGVyZm9ybSBhZnRlciBlYWNoXG4gKiBleGVjdXRpb24gb2YgYGl0ZXJhdGVlYC4gSW52b2tlZCB3aXRoIGFueSBub24tZXJyb3IgY2FsbGJhY2sgcmVzdWx0cyBvZlxuICogYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciB0aGUgdGVzdFxuICogZnVuY3Rpb24gaGFzIGZhaWxlZCBhbmQgcmVwZWF0ZWQgZXhlY3V0aW9uIG9mIGBpdGVyYXRlZWAgaGFzIHN0b3BwZWQuXG4gKiBgY2FsbGJhY2tgIHdpbGwgYmUgcGFzc2VkIGFuIGVycm9yIGFuZCBhbnkgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgZmluYWxcbiAqIGBpdGVyYXRlZWAncyBjYWxsYmFjay4gSW52b2tlZCB3aXRoIChlcnIsIFtyZXN1bHRzXSk7XG4gKi9cbmZ1bmN0aW9uIGRvV2hpbHN0KGl0ZXJhdGVlLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gb25seU9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgdmFyIF9pdGVyYXRlZSA9IHdyYXBBc3luYyQxKGl0ZXJhdGVlKTtcbiAgICB2YXIgbmV4dCA9IHJlc3QoZnVuY3Rpb24gKGVyciwgYXJncykge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgaWYgKHRlc3QuYXBwbHkodGhpcywgYXJncykpIHJldHVybiBfaXRlcmF0ZWUobmV4dCk7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoYXJncykpO1xuICAgIH0pO1xuICAgIF9pdGVyYXRlZShuZXh0KTtcbn1cblxuLyoqXG4gKiBMaWtlIFsnZG9XaGlsc3QnXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuZG9XaGlsc3R9LCBleGNlcHQgdGhlIGB0ZXN0YCBpcyBpbnZlcnRlZC4gTm90ZSB0aGVcbiAqIGFyZ3VtZW50IG9yZGVyaW5nIGRpZmZlcnMgZnJvbSBgdW50aWxgLlxuICpcbiAqIEBuYW1lIGRvVW50aWxcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmRvV2hpbHN0XXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuZG9XaGlsc3R9XG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGVhY2ggdGltZVxuICogYHRlc3RgIGZhaWxzLiBJbnZva2VkIHdpdGggKGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRlc3QgLSBzeW5jaHJvbm91cyB0cnV0aCB0ZXN0IHRvIHBlcmZvcm0gYWZ0ZXIgZWFjaFxuICogZXhlY3V0aW9uIG9mIGBpdGVyYXRlZWAuIEludm9rZWQgd2l0aCBhbnkgbm9uLWVycm9yIGNhbGxiYWNrIHJlc3VsdHMgb2ZcbiAqIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHRlc3RcbiAqIGZ1bmN0aW9uIGhhcyBwYXNzZWQgYW5kIHJlcGVhdGVkIGV4ZWN1dGlvbiBvZiBgaXRlcmF0ZWVgIGhhcyBzdG9wcGVkLiBgY2FsbGJhY2tgXG4gKiB3aWxsIGJlIHBhc3NlZCBhbiBlcnJvciBhbmQgYW55IGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIGZpbmFsIGBpdGVyYXRlZWAnc1xuICogY2FsbGJhY2suIEludm9rZWQgd2l0aCAoZXJyLCBbcmVzdWx0c10pO1xuICovXG5mdW5jdGlvbiBkb1VudGlsKGl0ZXJhdGVlLCB0ZXN0LCBjYWxsYmFjaykge1xuICAgIGRvV2hpbHN0KGl0ZXJhdGVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhdGVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBMaWtlIFtgd2hpbHN0YF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LndoaWxzdH0sIGV4Y2VwdCB0aGUgYHRlc3RgIGlzIGFuIGFzeW5jaHJvbm91cyBmdW5jdGlvbiB0aGF0XG4gKiBpcyBwYXNzZWQgYSBjYWxsYmFjayBpbiB0aGUgZm9ybSBvZiBgZnVuY3Rpb24gKGVyciwgdHJ1dGgpYC4gSWYgZXJyb3IgaXNcbiAqIHBhc3NlZCB0byBgdGVzdGAgb3IgYGZuYCwgdGhlIG1haW4gY2FsbGJhY2sgaXMgaW1tZWRpYXRlbHkgY2FsbGVkIHdpdGggdGhlXG4gKiB2YWx1ZSBvZiB0aGUgZXJyb3IuXG4gKlxuICogQG5hbWUgZHVyaW5nXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy53aGlsc3Rde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy53aGlsc3R9XG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IHRlc3QgLSBhc3luY2hyb25vdXMgdHJ1dGggdGVzdCB0byBwZXJmb3JtIGJlZm9yZSBlYWNoXG4gKiBleGVjdXRpb24gb2YgYGZuYC4gSW52b2tlZCB3aXRoIChjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGZuIC0gQW4gYXN5bmMgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGVhY2ggdGltZVxuICogYHRlc3RgIHBhc3Nlcy4gSW52b2tlZCB3aXRoIChjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHRlc3RcbiAqIGZ1bmN0aW9uIGhhcyBmYWlsZWQgYW5kIHJlcGVhdGVkIGV4ZWN1dGlvbiBvZiBgZm5gIGhhcyBzdG9wcGVkLiBgY2FsbGJhY2tgXG4gKiB3aWxsIGJlIHBhc3NlZCBhbiBlcnJvciwgaWYgb25lIG9jY3VycmVkLCBvdGhlcndpc2UgYG51bGxgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgY291bnQgPSAwO1xuICpcbiAqIGFzeW5jLmR1cmluZyhcbiAqICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAqICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGNvdW50IDwgNSk7XG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAqICAgICAgICAgY291bnQrKztcbiAqICAgICAgICAgc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCk7XG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbiAoZXJyKSB7XG4gKiAgICAgICAgIC8vIDUgc2Vjb25kcyBoYXZlIHBhc3NlZFxuICogICAgIH1cbiAqICk7XG4gKi9cbmZ1bmN0aW9uIGR1cmluZyh0ZXN0LCBmbiwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IG9ubHlPbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgIHZhciBfZm4gPSB3cmFwQXN5bmMkMShmbik7XG4gICAgdmFyIF90ZXN0ID0gd3JhcEFzeW5jJDEodGVzdCk7XG5cbiAgICBmdW5jdGlvbiBuZXh0KGVycikge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgX3Rlc3QoY2hlY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrKGVyciwgdHJ1dGgpIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIGlmICghdHJ1dGgpIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgX2ZuKG5leHQpO1xuICAgIH1cblxuICAgIF90ZXN0KGNoZWNrKTtcbn1cblxuZnVuY3Rpb24gX3dpdGhvdXRJbmRleChpdGVyYXRlZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gaXRlcmF0ZWUodmFsdWUsIGNhbGxiYWNrKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEFwcGxpZXMgdGhlIGZ1bmN0aW9uIGBpdGVyYXRlZWAgdG8gZWFjaCBpdGVtIGluIGBjb2xsYCwgaW4gcGFyYWxsZWwuXG4gKiBUaGUgYGl0ZXJhdGVlYCBpcyBjYWxsZWQgd2l0aCBhbiBpdGVtIGZyb20gdGhlIGxpc3QsIGFuZCBhIGNhbGxiYWNrIGZvciB3aGVuXG4gKiBpdCBoYXMgZmluaXNoZWQuIElmIHRoZSBgaXRlcmF0ZWVgIHBhc3NlcyBhbiBlcnJvciB0byBpdHMgYGNhbGxiYWNrYCwgdGhlXG4gKiBtYWluIGBjYWxsYmFja2AgKGZvciB0aGUgYGVhY2hgIGZ1bmN0aW9uKSBpcyBpbW1lZGlhdGVseSBjYWxsZWQgd2l0aCB0aGVcbiAqIGVycm9yLlxuICpcbiAqIE5vdGUsIHRoYXQgc2luY2UgdGhpcyBmdW5jdGlvbiBhcHBsaWVzIGBpdGVyYXRlZWAgdG8gZWFjaCBpdGVtIGluIHBhcmFsbGVsLFxuICogdGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgdGhlIGl0ZXJhdGVlIGZ1bmN0aW9ucyB3aWxsIGNvbXBsZXRlIGluIG9yZGVyLlxuICpcbiAqIEBuYW1lIGVhY2hcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBhbGlhcyBmb3JFYWNoXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIGZ1bmN0aW9uIHRvIGFwcGx5IHRvXG4gKiBlYWNoIGl0ZW0gaW4gYGNvbGxgLiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIFRoZSBhcnJheSBpbmRleCBpcyBub3QgcGFzc2VkIHRvIHRoZSBpdGVyYXRlZS5cbiAqIElmIHlvdSBuZWVkIHRoZSBpbmRleCwgdXNlIGBlYWNoT2ZgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIEludm9rZWQgd2l0aCAoZXJyKS5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gYXNzdW1pbmcgb3BlbkZpbGVzIGlzIGFuIGFycmF5IG9mIGZpbGUgbmFtZXMgYW5kIHNhdmVGaWxlIGlzIGEgZnVuY3Rpb25cbiAqIC8vIHRvIHNhdmUgdGhlIG1vZGlmaWVkIGNvbnRlbnRzIG9mIHRoYXQgZmlsZTpcbiAqXG4gKiBhc3luYy5lYWNoKG9wZW5GaWxlcywgc2F2ZUZpbGUsIGZ1bmN0aW9uKGVycil7XG4gKiAgIC8vIGlmIGFueSBvZiB0aGUgc2F2ZXMgcHJvZHVjZWQgYW4gZXJyb3IsIGVyciB3b3VsZCBlcXVhbCB0aGF0IGVycm9yXG4gKiB9KTtcbiAqXG4gKiAvLyBhc3N1bWluZyBvcGVuRmlsZXMgaXMgYW4gYXJyYXkgb2YgZmlsZSBuYW1lc1xuICogYXN5bmMuZWFjaChvcGVuRmlsZXMsIGZ1bmN0aW9uKGZpbGUsIGNhbGxiYWNrKSB7XG4gKlxuICogICAgIC8vIFBlcmZvcm0gb3BlcmF0aW9uIG9uIGZpbGUgaGVyZS5cbiAqICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyBmaWxlICcgKyBmaWxlKTtcbiAqXG4gKiAgICAgaWYoIGZpbGUubGVuZ3RoID4gMzIgKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnVGhpcyBmaWxlIG5hbWUgaXMgdG9vIGxvbmcnKTtcbiAqICAgICAgIGNhbGxiYWNrKCdGaWxlIG5hbWUgdG9vIGxvbmcnKTtcbiAqICAgICB9IGVsc2Uge1xuICogICAgICAgLy8gRG8gd29yayB0byBwcm9jZXNzIGZpbGUgaGVyZVxuICogICAgICAgY29uc29sZS5sb2coJ0ZpbGUgcHJvY2Vzc2VkJyk7XG4gKiAgICAgICBjYWxsYmFjaygpO1xuICogICAgIH1cbiAqIH0sIGZ1bmN0aW9uKGVycikge1xuICogICAgIC8vIGlmIGFueSBvZiB0aGUgZmlsZSBwcm9jZXNzaW5nIHByb2R1Y2VkIGFuIGVycm9yLCBlcnIgd291bGQgZXF1YWwgdGhhdCBlcnJvclxuICogICAgIGlmKCBlcnIgKSB7XG4gKiAgICAgICAvLyBPbmUgb2YgdGhlIGl0ZXJhdGlvbnMgcHJvZHVjZWQgYW4gZXJyb3IuXG4gKiAgICAgICAvLyBBbGwgcHJvY2Vzc2luZyB3aWxsIG5vdyBzdG9wLlxuICogICAgICAgY29uc29sZS5sb2coJ0EgZmlsZSBmYWlsZWQgdG8gcHJvY2VzcycpO1xuICogICAgIH0gZWxzZSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnQWxsIGZpbGVzIGhhdmUgYmVlbiBwcm9jZXNzZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gKiAgICAgfVxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGVhY2hMaW1pdChjb2xsLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgZWFjaE9mKGNvbGwsIF93aXRob3V0SW5kZXgod3JhcEFzeW5jJDEoaXRlcmF0ZWUpKSwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgZWFjaGBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNofSBidXQgcnVucyBhIG1heGltdW0gb2YgYGxpbWl0YCBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBlYWNoTGltaXRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmVhY2hde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNofVxuICogQGFsaWFzIGZvckVhY2hMaW1pdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW5cbiAqIGBjb2xsYC5cbiAqIFRoZSBhcnJheSBpbmRleCBpcyBub3QgcGFzc2VkIHRvIHRoZSBpdGVyYXRlZS5cbiAqIElmIHlvdSBuZWVkIHRoZSBpbmRleCwgdXNlIGBlYWNoT2ZMaW1pdGAuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbFxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBJbnZva2VkIHdpdGggKGVycikuXG4gKi9cbmZ1bmN0aW9uIGVhY2hMaW1pdCQxKGNvbGwsIGxpbWl0LCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgX2VhY2hPZkxpbWl0KGxpbWl0KShjb2xsLCBfd2l0aG91dEluZGV4KHdyYXBBc3luYyQxKGl0ZXJhdGVlKSksIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGVhY2hgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZWFjaH0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIGVhY2hTZXJpZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmVhY2hde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNofVxuICogQGFsaWFzIGZvckVhY2hTZXJpZXNcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaFxuICogaXRlbSBpbiBgY29sbGAuXG4gKiBUaGUgYXJyYXkgaW5kZXggaXMgbm90IHBhc3NlZCB0byB0aGUgaXRlcmF0ZWUuXG4gKiBJZiB5b3UgbmVlZCB0aGUgaW5kZXgsIHVzZSBgZWFjaE9mU2VyaWVzYC5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIEludm9rZWQgd2l0aCAoZXJyKS5cbiAqL1xudmFyIGVhY2hTZXJpZXMgPSBkb0xpbWl0KGVhY2hMaW1pdCQxLCAxKTtcblxuLyoqXG4gKiBXcmFwIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBlbnN1cmUgaXQgY2FsbHMgaXRzIGNhbGxiYWNrIG9uIGEgbGF0ZXIgdGljayBvZlxuICogdGhlIGV2ZW50IGxvb3AuICBJZiB0aGUgZnVuY3Rpb24gYWxyZWFkeSBjYWxscyBpdHMgY2FsbGJhY2sgb24gYSBuZXh0IHRpY2ssXG4gKiBubyBleHRyYSBkZWZlcnJhbCBpcyBhZGRlZC4gVGhpcyBpcyB1c2VmdWwgZm9yIHByZXZlbnRpbmcgc3RhY2sgb3ZlcmZsb3dzXG4gKiAoYFJhbmdlRXJyb3I6IE1heGltdW0gY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkYCkgYW5kIGdlbmVyYWxseSBrZWVwaW5nXG4gKiBbWmFsZ29dKGh0dHA6Ly9ibG9nLml6cy5tZS9wb3N0LzU5MTQyNzQyMTQzL2Rlc2lnbmluZy1hcGlzLWZvci1hc3luY2hyb255KVxuICogY29udGFpbmVkLiBFUzIwMTcgYGFzeW5jYCBmdW5jdGlvbnMgYXJlIHJldHVybmVkIGFzLWlzIC0tIHRoZXkgYXJlIGltbXVuZVxuICogdG8gWmFsZ28ncyBjb3JydXB0aW5nIGluZmx1ZW5jZXMsIGFzIHRoZXkgYWx3YXlzIHJlc29sdmUgb24gYSBsYXRlciB0aWNrLlxuICpcbiAqIEBuYW1lIGVuc3VyZUFzeW5jXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmbiAtIGFuIGFzeW5jIGZ1bmN0aW9uLCBvbmUgdGhhdCBleHBlY3RzIGEgbm9kZS1zdHlsZVxuICogY2FsbGJhY2sgYXMgaXRzIGxhc3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7QXN5bmNGdW5jdGlvbn0gUmV0dXJucyBhIHdyYXBwZWQgZnVuY3Rpb24gd2l0aCB0aGUgZXhhY3Qgc2FtZSBjYWxsXG4gKiBzaWduYXR1cmUgYXMgdGhlIGZ1bmN0aW9uIHBhc3NlZCBpbi5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gc29tZXRpbWVzQXN5bmMoYXJnLCBjYWxsYmFjaykge1xuICogICAgIGlmIChjYWNoZVthcmddKSB7XG4gKiAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBjYWNoZVthcmddKTsgLy8gdGhpcyB3b3VsZCBiZSBzeW5jaHJvbm91cyEhXG4gKiAgICAgfSBlbHNlIHtcbiAqICAgICAgICAgZG9Tb21lSU8oYXJnLCBjYWxsYmFjayk7IC8vIHRoaXMgSU8gd291bGQgYmUgYXN5bmNocm9ub3VzXG4gKiAgICAgfVxuICogfVxuICpcbiAqIC8vIHRoaXMgaGFzIGEgcmlzayBvZiBzdGFjayBvdmVyZmxvd3MgaWYgbWFueSByZXN1bHRzIGFyZSBjYWNoZWQgaW4gYSByb3dcbiAqIGFzeW5jLm1hcFNlcmllcyhhcmdzLCBzb21ldGltZXNBc3luYywgZG9uZSk7XG4gKlxuICogLy8gdGhpcyB3aWxsIGRlZmVyIHNvbWV0aW1lc0FzeW5jJ3MgY2FsbGJhY2sgaWYgbmVjZXNzYXJ5LFxuICogLy8gcHJldmVudGluZyBzdGFjayBvdmVyZmxvd3NcbiAqIGFzeW5jLm1hcFNlcmllcyhhcmdzLCBhc3luYy5lbnN1cmVBc3luYyhzb21ldGltZXNBc3luYyksIGRvbmUpO1xuICovXG5mdW5jdGlvbiBlbnN1cmVBc3luYyhmbikge1xuICAgIGlmIChpc0FzeW5jKGZuKSkgcmV0dXJuIGZuO1xuICAgIHJldHVybiBpbml0aWFsUGFyYW1zKGZ1bmN0aW9uIChhcmdzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICBzZXRJbW1lZGlhdGUkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGlubmVyQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBub3RJZCh2KSB7XG4gICAgcmV0dXJuICF2O1xufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGV2ZXJ5IGVsZW1lbnQgaW4gYGNvbGxgIHNhdGlzZmllcyBhbiBhc3luYyB0ZXN0LiBJZiBhbnlcbiAqIGl0ZXJhdGVlIGNhbGwgcmV0dXJucyBgZmFsc2VgLCB0aGUgbWFpbiBgY2FsbGJhY2tgIGlzIGltbWVkaWF0ZWx5IGNhbGxlZC5cbiAqXG4gKiBAbmFtZSBldmVyeVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGFsaWFzIGFsbFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbVxuICogaW4gdGhlIGNvbGxlY3Rpb24gaW4gcGFyYWxsZWwuXG4gKiBUaGUgaXRlcmF0ZWUgbXVzdCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiByZXN1bHQgdmFsdWUuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBSZXN1bHQgd2lsbCBiZSBlaXRoZXIgYHRydWVgIG9yIGBmYWxzZWBcbiAqIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZSBhc3luYyB0ZXN0cy4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLmV2ZXJ5KFsnZmlsZTEnLCdmaWxlMicsJ2ZpbGUzJ10sIGZ1bmN0aW9uKGZpbGVQYXRoLCBjYWxsYmFjaykge1xuICogICAgIGZzLmFjY2VzcyhmaWxlUGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICFlcnIpXG4gKiAgICAgfSk7XG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIGlmIHJlc3VsdCBpcyB0cnVlIHRoZW4gZXZlcnkgZmlsZSBleGlzdHNcbiAqIH0pO1xuICovXG52YXIgZXZlcnkgPSBkb1BhcmFsbGVsKF9jcmVhdGVUZXN0ZXIobm90SWQsIG5vdElkKSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BldmVyeWBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5ldmVyeX0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgZXZlcnlMaW1pdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuZXZlcnlde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5ldmVyeX1cbiAqIEBhbGlhcyBhbGxMaW1pdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbVxuICogaW4gdGhlIGNvbGxlY3Rpb24gaW4gcGFyYWxsZWwuXG4gKiBUaGUgaXRlcmF0ZWUgbXVzdCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiByZXN1bHQgdmFsdWUuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBSZXN1bHQgd2lsbCBiZSBlaXRoZXIgYHRydWVgIG9yIGBmYWxzZWBcbiAqIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZSBhc3luYyB0ZXN0cy4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKi9cbnZhciBldmVyeUxpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9jcmVhdGVUZXN0ZXIobm90SWQsIG5vdElkKSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BldmVyeWBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5ldmVyeX0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIGV2ZXJ5U2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5ldmVyeV17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmV2ZXJ5fVxuICogQGFsaWFzIGFsbFNlcmllc1xuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbVxuICogaW4gdGhlIGNvbGxlY3Rpb24gaW4gc2VyaWVzLlxuICogVGhlIGl0ZXJhdGVlIG11c3QgY29tcGxldGUgd2l0aCBhIGJvb2xlYW4gcmVzdWx0IHZhbHVlLlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIHRoZVxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC4gUmVzdWx0IHdpbGwgYmUgZWl0aGVyIGB0cnVlYCBvciBgZmFsc2VgXG4gKiBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGUgYXN5bmMgdGVzdHMuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHQpLlxuICovXG52YXIgZXZlcnlTZXJpZXMgPSBkb0xpbWl0KGV2ZXJ5TGltaXQsIDEpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShlYWNoZm4sIGFyciwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRydXRoVmFsdWVzID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgICAgaXRlcmF0ZWUoeCwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgdHJ1dGhWYWx1ZXNbaW5kZXhdID0gISF2O1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0cnV0aFZhbHVlc1tpXSkgcmVzdWx0cy5wdXNoKGFycltpXSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckdlbmVyaWMoZWFjaGZuLCBjb2xsLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGVhY2hmbihjb2xsLCBmdW5jdGlvbiAoeCwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGl0ZXJhdGVlKHgsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBpbmRleDogaW5kZXgsIHZhbHVlOiB4IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBhcnJheU1hcChyZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICB9KSwgYmFzZVByb3BlcnR5KCd2YWx1ZScpKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2ZpbHRlcihlYWNoZm4sIGNvbGwsIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgIHZhciBmaWx0ZXIgPSBpc0FycmF5TGlrZShjb2xsKSA/IGZpbHRlckFycmF5IDogZmlsdGVyR2VuZXJpYztcbiAgICBmaWx0ZXIoZWFjaGZuLCBjb2xsLCB3cmFwQXN5bmMkMShpdGVyYXRlZSksIGNhbGxiYWNrIHx8IG5vb3ApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgYXJyYXkgb2YgYWxsIHRoZSB2YWx1ZXMgaW4gYGNvbGxgIHdoaWNoIHBhc3MgYW4gYXN5bmMgdHJ1dGhcbiAqIHRlc3QuIFRoaXMgb3BlcmF0aW9uIGlzIHBlcmZvcm1lZCBpbiBwYXJhbGxlbCwgYnV0IHRoZSByZXN1bHRzIGFycmF5IHdpbGwgYmVcbiAqIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBvcmlnaW5hbC5cbiAqXG4gKiBAbmFtZSBmaWx0ZXJcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBhbGlhcyBzZWxlY3RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEEgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW4gYGNvbGxgLlxuICogVGhlIGBpdGVyYXRlZWAgaXMgcGFzc2VkIGEgYGNhbGxiYWNrKGVyciwgdHJ1dGhWYWx1ZSlgLCB3aGljaCBtdXN0IGJlIGNhbGxlZFxuICogd2l0aCBhIGJvb2xlYW4gYXJndW1lbnQgb25jZSBpdCBoYXMgY29tcGxldGVkLiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLmZpbHRlcihbJ2ZpbGUxJywnZmlsZTInLCdmaWxlMyddLCBmdW5jdGlvbihmaWxlUGF0aCwgY2FsbGJhY2spIHtcbiAqICAgICBmcy5hY2Nlc3MoZmlsZVBhdGgsIGZ1bmN0aW9uKGVycikge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCAhZXJyKVxuICogICAgIH0pO1xuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgLy8gcmVzdWx0cyBub3cgZXF1YWxzIGFuIGFycmF5IG9mIHRoZSBleGlzdGluZyBmaWxlc1xuICogfSk7XG4gKi9cbnZhciBmaWx0ZXIgPSBkb1BhcmFsbGVsKF9maWx0ZXIpO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgZmlsdGVyYF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmZpbHRlcn0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhXG4gKiB0aW1lLlxuICpcbiAqIEBuYW1lIGZpbHRlckxpbWl0XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5maWx0ZXJde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5maWx0ZXJ9XG4gKiBAYWxpYXMgc2VsZWN0TGltaXRcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEEgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW4gYGNvbGxgLlxuICogVGhlIGBpdGVyYXRlZWAgaXMgcGFzc2VkIGEgYGNhbGxiYWNrKGVyciwgdHJ1dGhWYWx1ZSlgLCB3aGljaCBtdXN0IGJlIGNhbGxlZFxuICogd2l0aCBhIGJvb2xlYW4gYXJndW1lbnQgb25jZSBpdCBoYXMgY29tcGxldGVkLiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKi9cbnZhciBmaWx0ZXJMaW1pdCA9IGRvUGFyYWxsZWxMaW1pdChfZmlsdGVyKTtcblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGZpbHRlcmBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5maWx0ZXJ9IGJ1dCBydW5zIG9ubHkgYSBzaW5nbGUgYXN5bmMgb3BlcmF0aW9uIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBmaWx0ZXJTZXJpZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmZpbHRlcl17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmZpbHRlcn1cbiAqIEBhbGlhcyBzZWxlY3RTZXJpZXNcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEEgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW4gYGNvbGxgLlxuICogVGhlIGBpdGVyYXRlZWAgaXMgcGFzc2VkIGEgYGNhbGxiYWNrKGVyciwgdHJ1dGhWYWx1ZSlgLCB3aGljaCBtdXN0IGJlIGNhbGxlZFxuICogd2l0aCBhIGJvb2xlYW4gYXJndW1lbnQgb25jZSBpdCBoYXMgY29tcGxldGVkLiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cylcbiAqL1xudmFyIGZpbHRlclNlcmllcyA9IGRvTGltaXQoZmlsdGVyTGltaXQsIDEpO1xuXG4vKipcbiAqIENhbGxzIHRoZSBhc3luY2hyb25vdXMgZnVuY3Rpb24gYGZuYCB3aXRoIGEgY2FsbGJhY2sgcGFyYW1ldGVyIHRoYXQgYWxsb3dzIGl0XG4gKiB0byBjYWxsIGl0c2VsZiBhZ2FpbiwgaW4gc2VyaWVzLCBpbmRlZmluaXRlbHkuXG5cbiAqIElmIGFuIGVycm9yIGlzIHBhc3NlZCB0byB0aGUgY2FsbGJhY2sgdGhlbiBgZXJyYmFja2AgaXMgY2FsbGVkIHdpdGggdGhlXG4gKiBlcnJvciwgYW5kIGV4ZWN1dGlvbiBzdG9wcywgb3RoZXJ3aXNlIGl0IHdpbGwgbmV2ZXIgYmUgY2FsbGVkLlxuICpcbiAqIEBuYW1lIGZvcmV2ZXJcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gZm4gLSBhbiBhc3luYyBmdW5jdGlvbiB0byBjYWxsIHJlcGVhdGVkbHkuXG4gKiBJbnZva2VkIHdpdGggKG5leHQpLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VycmJhY2tdIC0gd2hlbiBgZm5gIHBhc3NlcyBhbiBlcnJvciB0byBpdCdzIGNhbGxiYWNrLFxuICogdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCwgYW5kIGV4ZWN1dGlvbiBzdG9wcy4gSW52b2tlZCB3aXRoIChlcnIpLlxuICogQGV4YW1wbGVcbiAqXG4gKiBhc3luYy5mb3JldmVyKFxuICogICAgIGZ1bmN0aW9uKG5leHQpIHtcbiAqICAgICAgICAgLy8gbmV4dCBpcyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byB0aGluZ3MgdGhhdCBuZWVkIGEgY2FsbGJhY2soZXJyIFssIHdoYXRldmVyXSk7XG4gKiAgICAgICAgIC8vIGl0IHdpbGwgcmVzdWx0IGluIHRoaXMgZnVuY3Rpb24gYmVpbmcgY2FsbGVkIGFnYWluLlxuICogICAgIH0sXG4gKiAgICAgZnVuY3Rpb24oZXJyKSB7XG4gKiAgICAgICAgIC8vIGlmIG5leHQgaXMgY2FsbGVkIHdpdGggYSB2YWx1ZSBpbiBpdHMgZmlyc3QgcGFyYW1ldGVyLCBpdCB3aWxsIGFwcGVhclxuICogICAgICAgICAvLyBpbiBoZXJlIGFzICdlcnInLCBhbmQgZXhlY3V0aW9uIHdpbGwgc3RvcC5cbiAqICAgICB9XG4gKiApO1xuICovXG5mdW5jdGlvbiBmb3JldmVyKGZuLCBlcnJiYWNrKSB7XG4gICAgdmFyIGRvbmUgPSBvbmx5T25jZShlcnJiYWNrIHx8IG5vb3ApO1xuICAgIHZhciB0YXNrID0gd3JhcEFzeW5jJDEoZW5zdXJlQXN5bmMoZm4pKTtcblxuICAgIGZ1bmN0aW9uIG5leHQoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgIHRhc2sobmV4dCk7XG4gICAgfVxuICAgIG5leHQoKTtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGdyb3VwQnlgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZ3JvdXBCeX0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgZ3JvdXBCeUxpbWl0XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5ncm91cEJ5XXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZ3JvdXBCeX1cbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggYSBga2V5YCB0byBncm91cCB0aGUgdmFsdWUgdW5kZXIuXG4gKiBJbnZva2VkIHdpdGggKHZhbHVlLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGwgYGl0ZXJhdGVlYFxuICogZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gUmVzdWx0IGlzIGFuIGBPYmplY3RgIHdob3Nlc1xuICogcHJvcGVydGllcyBhcmUgYXJyYXlzIG9mIHZhbHVlcyB3aGljaCByZXR1cm5lZCB0aGUgY29ycmVzcG9uZGluZyBrZXkuXG4gKi9cbnZhciBncm91cEJ5TGltaXQgPSBmdW5jdGlvbiAoY29sbCwgbGltaXQsIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgICB2YXIgX2l0ZXJhdGVlID0gd3JhcEFzeW5jJDEoaXRlcmF0ZWUpO1xuICAgIG1hcExpbWl0KGNvbGwsIGxpbWl0LCBmdW5jdGlvbiAodmFsLCBjYWxsYmFjaykge1xuICAgICAgICBfaXRlcmF0ZWUodmFsLCBmdW5jdGlvbiAoZXJyLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHsga2V5OiBrZXksIHZhbDogdmFsIH0pO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyLCBtYXBSZXN1bHRzKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgLy8gZnJvbSBNRE4sIGhhbmRsZSBvYmplY3QgaGF2aW5nIGFuIGBoYXNPd25Qcm9wZXJ0eWAgcHJvcFxuICAgICAgICB2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFwUmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG1hcFJlc3VsdHNbaV0pIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gbWFwUmVzdWx0c1tpXS5rZXk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IG1hcFJlc3VsdHNbaV0udmFsO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocmVzdWx0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IFt2YWxdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgb2JqZWN0LCB3aGVyZSBlYWNoIHZhbHVlIGNvcnJlc3BvbmRzIHRvIGFuIGFycmF5IG9mIGl0ZW1zLCBmcm9tXG4gKiBgY29sbGAsIHRoYXQgcmV0dXJuZWQgdGhlIGNvcnJlc3BvbmRpbmcga2V5LiBUaGF0IGlzLCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0XG4gKiBjb3JyZXNwb25kIHRvIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIHRoZSBgaXRlcmF0ZWVgIGNhbGxiYWNrLlxuICpcbiAqIE5vdGU6IFNpbmNlIHRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgYGl0ZXJhdGVlYCB0byBlYWNoIGl0ZW0gaW4gcGFyYWxsZWwsXG4gKiB0aGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCB0aGUgYGl0ZXJhdGVlYCBmdW5jdGlvbnMgd2lsbCBjb21wbGV0ZSBpbiBvcmRlci5cbiAqIEhvd2V2ZXIsIHRoZSB2YWx1ZXMgZm9yIGVhY2gga2V5IGluIHRoZSBgcmVzdWx0YCB3aWxsIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzXG4gKiB0aGUgb3JpZ2luYWwgYGNvbGxgLiBGb3IgT2JqZWN0cywgdGhlIHZhbHVlcyB3aWxsIHJvdWdobHkgYmUgaW4gdGhlIG9yZGVyIG9mXG4gKiB0aGUgb3JpZ2luYWwgT2JqZWN0cycga2V5cyAoYnV0IHRoaXMgY2FuIHZhcnkgYWNyb3NzIEphdmFTY3JpcHQgZW5naW5lcykuXG4gKlxuICogQG5hbWUgZ3JvdXBCeVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW5cbiAqIGBjb2xsYC5cbiAqIFRoZSBpdGVyYXRlZSBzaG91bGQgY29tcGxldGUgd2l0aCBhIGBrZXlgIHRvIGdyb3VwIHRoZSB2YWx1ZSB1bmRlci5cbiAqIEludm9rZWQgd2l0aCAodmFsdWUsIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbCBgaXRlcmF0ZWVgXG4gKiBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBSZXN1bHQgaXMgYW4gYE9iamVjdGAgd2hvc2VzXG4gKiBwcm9wZXJ0aWVzIGFyZSBhcnJheXMgb2YgdmFsdWVzIHdoaWNoIHJldHVybmVkIHRoZSBjb3JyZXNwb25kaW5nIGtleS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMuZ3JvdXBCeShbJ3VzZXJJZDEnLCAndXNlcklkMicsICd1c2VySWQzJ10sIGZ1bmN0aW9uKHVzZXJJZCwgY2FsbGJhY2spIHtcbiAqICAgICBkYi5maW5kQnlJZCh1c2VySWQsIGZ1bmN0aW9uKGVyciwgdXNlcikge1xuICogICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAqICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHVzZXIuYWdlKTtcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IGlzIG9iamVjdCBjb250YWluaW5nIHRoZSB1c2VySWRzIGdyb3VwZWQgYnkgYWdlXG4gKiAgICAgLy8gZS5nLiB7IDMwOiBbJ3VzZXJJZDEnLCAndXNlcklkMyddLCA0MjogWyd1c2VySWQyJ119O1xuICogfSk7XG4gKi9cbnZhciBncm91cEJ5ID0gZG9MaW1pdChncm91cEJ5TGltaXQsIEluZmluaXR5KTtcblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGdyb3VwQnlgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZ3JvdXBCeX0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIGdyb3VwQnlTZXJpZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmdyb3VwQnlde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5ncm91cEJ5fVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW5cbiAqIGBjb2xsYC5cbiAqIFRoZSBpdGVyYXRlZSBzaG91bGQgY29tcGxldGUgd2l0aCBhIGBrZXlgIHRvIGdyb3VwIHRoZSB2YWx1ZSB1bmRlci5cbiAqIEludm9rZWQgd2l0aCAodmFsdWUsIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbCBgaXRlcmF0ZWVgXG4gKiBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBSZXN1bHQgaXMgYW4gYE9iamVjdGAgd2hvc2VzXG4gKiBwcm9wZXJ0aWVzIGFyZSBhcnJheXMgb2YgdmFsdWVzIHdoaWNoIHJldHVybmVkIHRoZSBjb3JyZXNwb25kaW5nIGtleS5cbiAqL1xudmFyIGdyb3VwQnlTZXJpZXMgPSBkb0xpbWl0KGdyb3VwQnlMaW1pdCwgMSk7XG5cbi8qKlxuICogTG9ncyB0aGUgcmVzdWx0IG9mIGFuIGBhc3luY2AgZnVuY3Rpb24gdG8gdGhlIGBjb25zb2xlYC4gT25seSB3b3JrcyBpblxuICogTm9kZS5qcyBvciBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgYGNvbnNvbGUubG9nYCBhbmQgYGNvbnNvbGUuZXJyb3JgIChzdWNoXG4gKiBhcyBGRiBhbmQgQ2hyb21lKS4gSWYgbXVsdGlwbGUgYXJndW1lbnRzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBhc3luY1xuICogZnVuY3Rpb24sIGBjb25zb2xlLmxvZ2AgaXMgY2FsbGVkIG9uIGVhY2ggYXJndW1lbnQgaW4gb3JkZXIuXG4gKlxuICogQG5hbWUgbG9nXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmdW5jdGlvbiAtIFRoZSBmdW5jdGlvbiB5b3Ugd2FudCB0byBldmVudHVhbGx5IGFwcGx5XG4gKiBhbGwgYXJndW1lbnRzIHRvLlxuICogQHBhcmFtIHsuLi4qfSBhcmd1bWVudHMuLi4gLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBhcHBseSB0byB0aGUgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGluIGEgbW9kdWxlXG4gKiB2YXIgaGVsbG8gPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICogICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdoZWxsbyAnICsgbmFtZSk7XG4gKiAgICAgfSwgMTAwMCk7XG4gKiB9O1xuICpcbiAqIC8vIGluIHRoZSBub2RlIHJlcGxcbiAqIG5vZGU+IGFzeW5jLmxvZyhoZWxsbywgJ3dvcmxkJyk7XG4gKiAnaGVsbG8gd29ybGQnXG4gKi9cbnZhciBsb2cgPSBjb25zb2xlRnVuYygnbG9nJyk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BtYXBWYWx1ZXNgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwVmFsdWVzfSBidXQgcnVucyBhIG1heGltdW0gb2YgYGxpbWl0YCBhc3luYyBvcGVyYXRpb25zIGF0IGFcbiAqIHRpbWUuXG4gKlxuICogQG5hbWUgbWFwVmFsdWVzTGltaXRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLm1hcFZhbHVlc117QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcFZhbHVlc31cbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdmFsdWUgYW5kIGtleVxuICogaW4gYGNvbGxgLlxuICogVGhlIGl0ZXJhdGVlIHNob3VsZCBjb21wbGV0ZSB3aXRoIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICogSW52b2tlZCB3aXRoICh2YWx1ZSwga2V5LCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGwgYGl0ZXJhdGVlYFxuICogZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gYHJlc3VsdGAgaXMgYSBuZXcgb2JqZWN0IGNvbnNpc3RpbmdcbiAqIG9mIGVhY2gga2V5IGZyb20gYG9iamAsIHdpdGggZWFjaCB0cmFuc2Zvcm1lZCB2YWx1ZSBvbiB0aGUgcmlnaHQtaGFuZCBzaWRlLlxuICogSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKi9cbmZ1bmN0aW9uIG1hcFZhbHVlc0xpbWl0KG9iaiwgbGltaXQsIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICB2YXIgbmV3T2JqID0ge307XG4gICAgdmFyIF9pdGVyYXRlZSA9IHdyYXBBc3luYyQxKGl0ZXJhdGVlKTtcbiAgICBlYWNoT2ZMaW1pdChvYmosIGxpbWl0LCBmdW5jdGlvbiAodmFsLCBrZXksIG5leHQpIHtcbiAgICAgICAgX2l0ZXJhdGVlKHZhbCwga2V5LCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIsIG5ld09iaik7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQSByZWxhdGl2ZSBvZiBbYG1hcGBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5tYXB9LCBkZXNpZ25lZCBmb3IgdXNlIHdpdGggb2JqZWN0cy5cbiAqXG4gKiBQcm9kdWNlcyBhIG5ldyBPYmplY3QgYnkgbWFwcGluZyBlYWNoIHZhbHVlIG9mIGBvYmpgIHRocm91Z2ggdGhlIGBpdGVyYXRlZWBcbiAqIGZ1bmN0aW9uLiBUaGUgYGl0ZXJhdGVlYCBpcyBjYWxsZWQgZWFjaCBgdmFsdWVgIGFuZCBga2V5YCBmcm9tIGBvYmpgIGFuZCBhXG4gKiBjYWxsYmFjayBmb3Igd2hlbiBpdCBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZy4gRWFjaCBvZiB0aGVzZSBjYWxsYmFja3MgdGFrZXNcbiAqIHR3byBhcmd1bWVudHM6IGFuIGBlcnJvcmAsIGFuZCB0aGUgdHJhbnNmb3JtZWQgaXRlbSBmcm9tIGBvYmpgLiBJZiBgaXRlcmF0ZWVgXG4gKiBwYXNzZXMgYW4gZXJyb3IgdG8gaXRzIGNhbGxiYWNrLCB0aGUgbWFpbiBgY2FsbGJhY2tgIChmb3IgdGhlIGBtYXBWYWx1ZXNgXG4gKiBmdW5jdGlvbikgaXMgaW1tZWRpYXRlbHkgY2FsbGVkIHdpdGggdGhlIGVycm9yLlxuICpcbiAqIE5vdGUsIHRoZSBvcmRlciBvZiB0aGUga2V5cyBpbiB0aGUgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWVkLiAgVGhlIGtleXMgd2lsbFxuICogYmUgcm91Z2hseSBpbiB0aGUgb3JkZXIgdGhleSBjb21wbGV0ZSwgKGJ1dCB0aGlzIGlzIHZlcnkgZW5naW5lLXNwZWNpZmljKVxuICpcbiAqIEBuYW1lIG1hcFZhbHVlc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEEgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCB2YWx1ZSBhbmQga2V5XG4gKiBpbiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggdGhlIHRyYW5zZm9ybWVkIHZhbHVlIGFzIGl0cyByZXN1bHQuXG4gKiBJbnZva2VkIHdpdGggKHZhbHVlLCBrZXksIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbCBgaXRlcmF0ZWVgXG4gKiBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBgcmVzdWx0YCBpcyBhIG5ldyBvYmplY3QgY29uc2lzdGluZ1xuICogb2YgZWFjaCBrZXkgZnJvbSBgb2JqYCwgd2l0aCBlYWNoIHRyYW5zZm9ybWVkIHZhbHVlIG9uIHRoZSByaWdodC1oYW5kIHNpZGUuXG4gKiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0KS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMubWFwVmFsdWVzKHtcbiAqICAgICBmMTogJ2ZpbGUxJyxcbiAqICAgICBmMjogJ2ZpbGUyJyxcbiAqICAgICBmMzogJ2ZpbGUzJ1xuICogfSwgZnVuY3Rpb24gKGZpbGUsIGtleSwgY2FsbGJhY2spIHtcbiAqICAgZnMuc3RhdChmaWxlLCBjYWxsYmFjayk7XG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIHJlc3VsdCBpcyBub3cgYSBtYXAgb2Ygc3RhdHMgZm9yIGVhY2ggZmlsZSwgZS5nLlxuICogICAgIC8vIHtcbiAqICAgICAvLyAgICAgZjE6IFtzdGF0cyBmb3IgZmlsZTFdLFxuICogICAgIC8vICAgICBmMjogW3N0YXRzIGZvciBmaWxlMl0sXG4gKiAgICAgLy8gICAgIGYzOiBbc3RhdHMgZm9yIGZpbGUzXVxuICogICAgIC8vIH1cbiAqIH0pO1xuICovXG5cbnZhciBtYXBWYWx1ZXMgPSBkb0xpbWl0KG1hcFZhbHVlc0xpbWl0LCBJbmZpbml0eSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BtYXBWYWx1ZXNgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwVmFsdWVzfSBidXQgcnVucyBvbmx5IGEgc2luZ2xlIGFzeW5jIG9wZXJhdGlvbiBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgbWFwVmFsdWVzU2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5tYXBWYWx1ZXNde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5tYXBWYWx1ZXN9XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIHZhbHVlIGFuZCBrZXlcbiAqIGluIGBjb2xsYC5cbiAqIFRoZSBpdGVyYXRlZSBzaG91bGQgY29tcGxldGUgd2l0aCB0aGUgdHJhbnNmb3JtZWQgdmFsdWUgYXMgaXRzIHJlc3VsdC5cbiAqIEludm9rZWQgd2l0aCAodmFsdWUsIGtleSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsIGBpdGVyYXRlZWBcbiAqIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIGByZXN1bHRgIGlzIGEgbmV3IG9iamVjdCBjb25zaXN0aW5nXG4gKiBvZiBlYWNoIGtleSBmcm9tIGBvYmpgLCB3aXRoIGVhY2ggdHJhbnNmb3JtZWQgdmFsdWUgb24gdGhlIHJpZ2h0LWhhbmQgc2lkZS5cbiAqIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHQpLlxuICovXG52YXIgbWFwVmFsdWVzU2VyaWVzID0gZG9MaW1pdChtYXBWYWx1ZXNMaW1pdCwgMSk7XG5cbmZ1bmN0aW9uIGhhcyhvYmosIGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gb2JqO1xufVxuXG4vKipcbiAqIENhY2hlcyB0aGUgcmVzdWx0cyBvZiBhbiBhc3luYyBmdW5jdGlvbi4gV2hlbiBjcmVhdGluZyBhIGhhc2ggdG8gc3RvcmVcbiAqIGZ1bmN0aW9uIHJlc3VsdHMgYWdhaW5zdCwgdGhlIGNhbGxiYWNrIGlzIG9taXR0ZWQgZnJvbSB0aGUgaGFzaCBhbmQgYW5cbiAqIG9wdGlvbmFsIGhhc2ggZnVuY3Rpb24gY2FuIGJlIHVzZWQuXG4gKlxuICogSWYgbm8gaGFzaCBmdW5jdGlvbiBpcyBzcGVjaWZpZWQsIHRoZSBmaXJzdCBhcmd1bWVudCBpcyB1c2VkIGFzIGEgaGFzaCBrZXksXG4gKiB3aGljaCBtYXkgd29yayByZWFzb25hYmx5IGlmIGl0IGlzIGEgc3RyaW5nIG9yIGEgZGF0YSB0eXBlIHRoYXQgY29udmVydHMgdG8gYVxuICogZGlzdGluY3Qgc3RyaW5nLiBOb3RlIHRoYXQgb2JqZWN0cyBhbmQgYXJyYXlzIHdpbGwgbm90IGJlaGF2ZSByZWFzb25hYmx5LlxuICogTmVpdGhlciB3aWxsIGNhc2VzIHdoZXJlIHRoZSBvdGhlciBhcmd1bWVudHMgYXJlIHNpZ25pZmljYW50LiBJbiBzdWNoIGNhc2VzLFxuICogc3BlY2lmeSB5b3VyIG93biBoYXNoIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBjYWNoZSBvZiByZXN1bHRzIGlzIGV4cG9zZWQgYXMgdGhlIGBtZW1vYCBwcm9wZXJ0eSBvZiB0aGUgZnVuY3Rpb25cbiAqIHJldHVybmVkIGJ5IGBtZW1vaXplYC5cbiAqXG4gKiBAbmFtZSBtZW1vaXplXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmbiAtIFRoZSBhc3luYyBmdW5jdGlvbiB0byBwcm94eSBhbmQgY2FjaGUgcmVzdWx0cyBmcm9tLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzaGVyIC0gQW4gb3B0aW9uYWwgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYSBjdXN0b20gaGFzaFxuICogZm9yIHN0b3JpbmcgcmVzdWx0cy4gSXQgaGFzIGFsbCB0aGUgYXJndW1lbnRzIGFwcGxpZWQgdG8gaXQgYXBhcnQgZnJvbSB0aGVcbiAqIGNhbGxiYWNrLCBhbmQgbXVzdCBiZSBzeW5jaHJvbm91cy5cbiAqIEByZXR1cm5zIHtBc3luY0Z1bmN0aW9ufSBhIG1lbW9pemVkIHZlcnNpb24gb2YgYGZuYFxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgc2xvd19mbiA9IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrKSB7XG4gKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gKiAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAqIH07XG4gKiB2YXIgZm4gPSBhc3luYy5tZW1vaXplKHNsb3dfZm4pO1xuICpcbiAqIC8vIGZuIGNhbiBub3cgYmUgdXNlZCBhcyBpZiBpdCB3ZXJlIHNsb3dfZm5cbiAqIGZuKCdzb21lIG5hbWUnLCBmdW5jdGlvbigpIHtcbiAqICAgICAvLyBjYWxsYmFja1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZm4sIGhhc2hlcikge1xuICAgIHZhciBtZW1vID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgcXVldWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBoYXNoZXIgPSBoYXNoZXIgfHwgaWRlbnRpdHk7XG4gICAgdmFyIF9mbiA9IHdyYXBBc3luYyQxKGZuKTtcbiAgICB2YXIgbWVtb2l6ZWQgPSBpbml0aWFsUGFyYW1zKGZ1bmN0aW9uIG1lbW9pemVkKGFyZ3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBrZXkgPSBoYXNoZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIGlmIChoYXMobWVtbywga2V5KSkge1xuICAgICAgICAgICAgc2V0SW1tZWRpYXRlJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIG1lbW9ba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXMocXVldWVzLCBrZXkpKSB7XG4gICAgICAgICAgICBxdWV1ZXNba2V5XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXVlc1trZXldID0gW2NhbGxiYWNrXTtcbiAgICAgICAgICAgIF9mbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChyZXN0KGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgbWVtb1trZXldID0gYXJncztcbiAgICAgICAgICAgICAgICB2YXIgcSA9IHF1ZXVlc1trZXldO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBxdWV1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHFbaV0uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIG1lbW9pemVkLm1lbW8gPSBtZW1vO1xuICAgIG1lbW9pemVkLnVubWVtb2l6ZWQgPSBmbjtcbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8qKlxuICogQ2FsbHMgYGNhbGxiYWNrYCBvbiBhIGxhdGVyIGxvb3AgYXJvdW5kIHRoZSBldmVudCBsb29wLiBJbiBOb2RlLmpzIHRoaXMganVzdFxuICogY2FsbHMgYHNldEltbWVkaWF0ZWAuICBJbiB0aGUgYnJvd3NlciBpdCB3aWxsIHVzZSBgc2V0SW1tZWRpYXRlYCBpZlxuICogYXZhaWxhYmxlLCBvdGhlcndpc2UgYHNldFRpbWVvdXQoY2FsbGJhY2ssIDApYCwgd2hpY2ggbWVhbnMgb3RoZXIgaGlnaGVyXG4gKiBwcmlvcml0eSBldmVudHMgbWF5IHByZWNlZGUgdGhlIGV4ZWN1dGlvbiBvZiBgY2FsbGJhY2tgLlxuICpcbiAqIFRoaXMgaXMgdXNlZCBpbnRlcm5hbGx5IGZvciBicm93c2VyLWNvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gKlxuICogQG5hbWUgbmV4dFRpY2tcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6VXRpbHNcbiAqIEBtZXRob2RcbiAqIEBhbGlhcyBzZXRJbW1lZGlhdGVcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGEgbGF0ZXIgbG9vcCBhcm91bmRcbiAqIHRoZSBldmVudCBsb29wLiBJbnZva2VkIHdpdGggKGFyZ3MuLi4pLlxuICogQHBhcmFtIHsuLi4qfSBhcmdzLi4uIC0gYW55IG51bWJlciBvZiBhZGRpdGlvbmFsIGFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZVxuICogY2FsbGJhY2sgb24gdGhlIG5leHQgdGljay5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGNhbGxfb3JkZXIgPSBbXTtcbiAqIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICogICAgIGNhbGxfb3JkZXIucHVzaCgndHdvJyk7XG4gKiAgICAgLy8gY2FsbF9vcmRlciBub3cgZXF1YWxzIFsnb25lJywndHdvJ11cbiAqIH0pO1xuICogY2FsbF9vcmRlci5wdXNoKCdvbmUnKTtcbiAqXG4gKiBhc3luYy5zZXRJbW1lZGlhdGUoZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAqICAgICAvLyBhLCBiLCBhbmQgYyBlcXVhbCAxLCAyLCBhbmQgM1xuICogfSwgMSwgMiwgMyk7XG4gKi9cbnZhciBfZGVmZXIkMTtcblxuaWYgKGhhc05leHRUaWNrKSB7XG4gICAgX2RlZmVyJDEgPSBwcm9jZXNzLm5leHRUaWNrO1xufSBlbHNlIGlmIChoYXNTZXRJbW1lZGlhdGUpIHtcbiAgICBfZGVmZXIkMSA9IHNldEltbWVkaWF0ZTtcbn0gZWxzZSB7XG4gICAgX2RlZmVyJDEgPSBmYWxsYmFjaztcbn1cblxudmFyIG5leHRUaWNrID0gd3JhcChfZGVmZXIkMSk7XG5cbmZ1bmN0aW9uIF9wYXJhbGxlbChlYWNoZm4sIHRhc2tzLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgICB2YXIgcmVzdWx0cyA9IGlzQXJyYXlMaWtlKHRhc2tzKSA/IFtdIDoge307XG5cbiAgICBlYWNoZm4odGFza3MsIGZ1bmN0aW9uICh0YXNrLCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHdyYXBBc3luYyQxKHRhc2spKHJlc3QoZnVuY3Rpb24gKGVyciwgYXJncykge1xuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdHNba2V5XSA9IGFyZ3M7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9KSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFJ1biB0aGUgYHRhc2tzYCBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyBpbiBwYXJhbGxlbCwgd2l0aG91dCB3YWl0aW5nIHVudGlsXG4gKiB0aGUgcHJldmlvdXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZC4gSWYgYW55IG9mIHRoZSBmdW5jdGlvbnMgcGFzcyBhbiBlcnJvciB0b1xuICogaXRzIGNhbGxiYWNrLCB0aGUgbWFpbiBgY2FsbGJhY2tgIGlzIGltbWVkaWF0ZWx5IGNhbGxlZCB3aXRoIHRoZSB2YWx1ZSBvZiB0aGVcbiAqIGVycm9yLiBPbmNlIHRoZSBgdGFza3NgIGhhdmUgY29tcGxldGVkLCB0aGUgcmVzdWx0cyBhcmUgcGFzc2VkIHRvIHRoZSBmaW5hbFxuICogYGNhbGxiYWNrYCBhcyBhbiBhcnJheS5cbiAqXG4gKiAqKk5vdGU6KiogYHBhcmFsbGVsYCBpcyBhYm91dCBraWNraW5nLW9mZiBJL08gdGFza3MgaW4gcGFyYWxsZWwsIG5vdCBhYm91dFxuICogcGFyYWxsZWwgZXhlY3V0aW9uIG9mIGNvZGUuICBJZiB5b3VyIHRhc2tzIGRvIG5vdCB1c2UgYW55IHRpbWVycyBvciBwZXJmb3JtXG4gKiBhbnkgSS9PLCB0aGV5IHdpbGwgYWN0dWFsbHkgYmUgZXhlY3V0ZWQgaW4gc2VyaWVzLiAgQW55IHN5bmNocm9ub3VzIHNldHVwXG4gKiBzZWN0aW9ucyBmb3IgZWFjaCB0YXNrIHdpbGwgaGFwcGVuIG9uZSBhZnRlciB0aGUgb3RoZXIuICBKYXZhU2NyaXB0IHJlbWFpbnNcbiAqIHNpbmdsZS10aHJlYWRlZC5cbiAqXG4gKiAqKkhpbnQ6KiogVXNlIFtgcmVmbGVjdGBde0BsaW5rIG1vZHVsZTpVdGlscy5yZWZsZWN0fSB0byBjb250aW51ZSB0aGVcbiAqIGV4ZWN1dGlvbiBvZiBvdGhlciB0YXNrcyB3aGVuIGEgdGFzayBmYWlscy5cbiAqXG4gKiBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHVzZSBhbiBvYmplY3QgaW5zdGVhZCBvZiBhbiBhcnJheS4gRWFjaCBwcm9wZXJ0eSB3aWxsXG4gKiBiZSBydW4gYXMgYSBmdW5jdGlvbiBhbmQgdGhlIHJlc3VsdHMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGZpbmFsIGBjYWxsYmFja2BcbiAqIGFzIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFuIGFycmF5LiBUaGlzIGNhbiBiZSBhIG1vcmUgcmVhZGFibGUgd2F5IG9mIGhhbmRsaW5nXG4gKiByZXN1bHRzIGZyb20ge0BsaW5rIGFzeW5jLnBhcmFsbGVsfS5cbiAqXG4gKiBAbmFtZSBwYXJhbGxlbFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IHRhc2tzIC0gQSBjb2xsZWN0aW9uIG9mXG4gKiBbYXN5bmMgZnVuY3Rpb25zXXtAbGluayBBc3luY0Z1bmN0aW9ufSB0byBydW4uXG4gKiBFYWNoIGFzeW5jIGZ1bmN0aW9uIGNhbiBjb21wbGV0ZSB3aXRoIGFueSBudW1iZXIgb2Ygb3B0aW9uYWwgYHJlc3VsdGAgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIHJ1biBvbmNlIGFsbCB0aGVcbiAqIGZ1bmN0aW9ucyBoYXZlIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuIFRoaXMgZnVuY3Rpb24gZ2V0cyBhIHJlc3VsdHMgYXJyYXlcbiAqIChvciBvYmplY3QpIGNvbnRhaW5pbmcgYWxsIHRoZSByZXN1bHQgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgdGFzayBjYWxsYmFja3MuXG4gKiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKlxuICogQGV4YW1wbGVcbiAqIGFzeW5jLnBhcmFsbGVsKFtcbiAqICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ29uZScpO1xuICogICAgICAgICB9LCAyMDApO1xuICogICAgIH0sXG4gKiAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICd0d28nKTtcbiAqICAgICAgICAgfSwgMTAwKTtcbiAqICAgICB9XG4gKiBdLFxuICogLy8gb3B0aW9uYWwgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICogICAgIC8vIHRoZSByZXN1bHRzIGFycmF5IHdpbGwgZXF1YWwgWydvbmUnLCd0d28nXSBldmVuIHRob3VnaFxuICogICAgIC8vIHRoZSBzZWNvbmQgZnVuY3Rpb24gaGFkIGEgc2hvcnRlciB0aW1lb3V0LlxuICogfSk7XG4gKlxuICogLy8gYW4gZXhhbXBsZSB1c2luZyBhbiBvYmplY3QgaW5zdGVhZCBvZiBhbiBhcnJheVxuICogYXN5bmMucGFyYWxsZWwoe1xuICogICAgIG9uZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIDEpO1xuICogICAgICAgICB9LCAyMDApO1xuICogICAgIH0sXG4gKiAgICAgdHdvOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgMik7XG4gKiAgICAgICAgIH0sIDEwMCk7XG4gKiAgICAgfVxuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgLy8gcmVzdWx0cyBpcyBub3cgZXF1YWxzIHRvOiB7b25lOiAxLCB0d286IDJ9XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gcGFyYWxsZWxMaW1pdCh0YXNrcywgY2FsbGJhY2spIHtcbiAgX3BhcmFsbGVsKGVhY2hPZiwgdGFza3MsIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYHBhcmFsbGVsYF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnBhcmFsbGVsfSBidXQgcnVucyBhIG1heGltdW0gb2YgYGxpbWl0YCBhc3luYyBvcGVyYXRpb25zIGF0IGFcbiAqIHRpbWUuXG4gKlxuICogQG5hbWUgcGFyYWxsZWxMaW1pdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMucGFyYWxsZWxde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5wYXJhbGxlbH1cbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSB0YXNrcyAtIEEgY29sbGVjdGlvbiBvZlxuICogW2FzeW5jIGZ1bmN0aW9uc117QGxpbmsgQXN5bmNGdW5jdGlvbn0gdG8gcnVuLlxuICogRWFjaCBhc3luYyBmdW5jdGlvbiBjYW4gY29tcGxldGUgd2l0aCBhbnkgbnVtYmVyIG9mIG9wdGlvbmFsIGByZXN1bHRgIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBydW4gb25jZSBhbGwgdGhlXG4gKiBmdW5jdGlvbnMgaGF2ZSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LiBUaGlzIGZ1bmN0aW9uIGdldHMgYSByZXN1bHRzIGFycmF5XG4gKiAob3Igb2JqZWN0KSBjb250YWluaW5nIGFsbCB0aGUgcmVzdWx0IGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIHRhc2sgY2FsbGJhY2tzLlxuICogSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdHMpLlxuICovXG5mdW5jdGlvbiBwYXJhbGxlbExpbWl0JDEodGFza3MsIGxpbWl0LCBjYWxsYmFjaykge1xuICBfcGFyYWxsZWwoX2VhY2hPZkxpbWl0KGxpbWl0KSwgdGFza3MsIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBBIHF1ZXVlIG9mIHRhc2tzIGZvciB0aGUgd29ya2VyIGZ1bmN0aW9uIHRvIGNvbXBsZXRlLlxuICogQHR5cGVkZWYge09iamVjdH0gUXVldWVPYmplY3RcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGxlbmd0aCAtIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBudW1iZXIgb2YgaXRlbXNcbiAqIHdhaXRpbmcgdG8gYmUgcHJvY2Vzc2VkLiBJbnZva2Ugd2l0aCBgcXVldWUubGVuZ3RoKClgLlxuICogQHByb3BlcnR5IHtib29sZWFufSBzdGFydGVkIC0gYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgYW55XG4gKiBpdGVtcyBoYXZlIGJlZW4gcHVzaGVkIGFuZCBwcm9jZXNzZWQgYnkgdGhlIHF1ZXVlLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcnVubmluZyAtIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBudW1iZXIgb2YgaXRlbXNcbiAqIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIEludm9rZSB3aXRoIGBxdWV1ZS5ydW5uaW5nKClgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gd29ya2Vyc0xpc3QgLSBhIGZ1bmN0aW9uIHJldHVybmluZyB0aGUgYXJyYXkgb2YgaXRlbXNcbiAqIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIEludm9rZSB3aXRoIGBxdWV1ZS53b3JrZXJzTGlzdCgpYC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGlkbGUgLSBhIGZ1bmN0aW9uIHJldHVybmluZyBmYWxzZSBpZiB0aGVyZSBhcmUgaXRlbXNcbiAqIHdhaXRpbmcgb3IgYmVpbmcgcHJvY2Vzc2VkLCBvciB0cnVlIGlmIG5vdC4gSW52b2tlIHdpdGggYHF1ZXVlLmlkbGUoKWAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29uY3VycmVuY3kgLSBhbiBpbnRlZ2VyIGZvciBkZXRlcm1pbmluZyBob3cgbWFueSBgd29ya2VyYFxuICogZnVuY3Rpb25zIHNob3VsZCBiZSBydW4gaW4gcGFyYWxsZWwuIFRoaXMgcHJvcGVydHkgY2FuIGJlIGNoYW5nZWQgYWZ0ZXIgYVxuICogYHF1ZXVlYCBpcyBjcmVhdGVkIHRvIGFsdGVyIHRoZSBjb25jdXJyZW5jeSBvbi10aGUtZmx5LlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcHVzaCAtIGFkZCBhIG5ldyB0YXNrIHRvIHRoZSBgcXVldWVgLiBDYWxscyBgY2FsbGJhY2tgXG4gKiBvbmNlIHRoZSBgd29ya2VyYCBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZyB0aGUgdGFzay4gSW5zdGVhZCBvZiBhIHNpbmdsZSB0YXNrLFxuICogYSBgdGFza3NgIGFycmF5IGNhbiBiZSBzdWJtaXR0ZWQuIFRoZSByZXNwZWN0aXZlIGNhbGxiYWNrIGlzIHVzZWQgZm9yIGV2ZXJ5XG4gKiB0YXNrIGluIHRoZSBsaXN0LiBJbnZva2Ugd2l0aCBgcXVldWUucHVzaCh0YXNrLCBbY2FsbGJhY2tdKWAsXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB1bnNoaWZ0IC0gYWRkIGEgbmV3IHRhc2sgdG8gdGhlIGZyb250IG9mIHRoZSBgcXVldWVgLlxuICogSW52b2tlIHdpdGggYHF1ZXVlLnVuc2hpZnQodGFzaywgW2NhbGxiYWNrXSlgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc2F0dXJhdGVkIC0gYSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBudW1iZXIgb2ZcbiAqIHJ1bm5pbmcgd29ya2VycyBoaXRzIHRoZSBgY29uY3VycmVuY3lgIGxpbWl0LCBhbmQgZnVydGhlciB0YXNrcyB3aWxsIGJlXG4gKiBxdWV1ZWQuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB1bnNhdHVyYXRlZCAtIGEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgbnVtYmVyXG4gKiBvZiBydW5uaW5nIHdvcmtlcnMgaXMgbGVzcyB0aGFuIHRoZSBgY29uY3VycmVuY3lgICYgYGJ1ZmZlcmAgbGltaXRzLCBhbmRcbiAqIGZ1cnRoZXIgdGFza3Mgd2lsbCBub3QgYmUgcXVldWVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGJ1ZmZlciAtIEEgbWluaW11bSB0aHJlc2hvbGQgYnVmZmVyIGluIG9yZGVyIHRvIHNheSB0aGF0XG4gKiB0aGUgYHF1ZXVlYCBpcyBgdW5zYXR1cmF0ZWRgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZW1wdHkgLSBhIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGxhc3QgaXRlbVxuICogZnJvbSB0aGUgYHF1ZXVlYCBpcyBnaXZlbiB0byBhIGB3b3JrZXJgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZHJhaW4gLSBhIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGxhc3QgaXRlbVxuICogZnJvbSB0aGUgYHF1ZXVlYCBoYXMgcmV0dXJuZWQgZnJvbSB0aGUgYHdvcmtlcmAuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBlcnJvciAtIGEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIHRhc2sgZXJyb3JzLlxuICogSGFzIHRoZSBzaWduYXR1cmUgYGZ1bmN0aW9uKGVycm9yLCB0YXNrKWAuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHBhdXNlZCAtIGEgYm9vbGVhbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGUgcXVldWUgaXNcbiAqIGluIGEgcGF1c2VkIHN0YXRlLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcGF1c2UgLSBhIGZ1bmN0aW9uIHRoYXQgcGF1c2VzIHRoZSBwcm9jZXNzaW5nIG9mIHRhc2tzXG4gKiB1bnRpbCBgcmVzdW1lKClgIGlzIGNhbGxlZC4gSW52b2tlIHdpdGggYHF1ZXVlLnBhdXNlKClgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcmVzdW1lIC0gYSBmdW5jdGlvbiB0aGF0IHJlc3VtZXMgdGhlIHByb2Nlc3Npbmcgb2ZcbiAqIHF1ZXVlZCB0YXNrcyB3aGVuIHRoZSBxdWV1ZSBpcyBwYXVzZWQuIEludm9rZSB3aXRoIGBxdWV1ZS5yZXN1bWUoKWAuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBraWxsIC0gYSBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGBkcmFpbmAgY2FsbGJhY2sgYW5kXG4gKiBlbXB0aWVzIHJlbWFpbmluZyB0YXNrcyBmcm9tIHRoZSBxdWV1ZSBmb3JjaW5nIGl0IHRvIGdvIGlkbGUuIEludm9rZSB3aXRoIGBxdWV1ZS5raWxsKClgLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGBxdWV1ZWAgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBgY29uY3VycmVuY3lgLiBUYXNrcyBhZGRlZCB0byB0aGVcbiAqIGBxdWV1ZWAgYXJlIHByb2Nlc3NlZCBpbiBwYXJhbGxlbCAodXAgdG8gdGhlIGBjb25jdXJyZW5jeWAgbGltaXQpLiBJZiBhbGxcbiAqIGB3b3JrZXJgcyBhcmUgaW4gcHJvZ3Jlc3MsIHRoZSB0YXNrIGlzIHF1ZXVlZCB1bnRpbCBvbmUgYmVjb21lcyBhdmFpbGFibGUuXG4gKiBPbmNlIGEgYHdvcmtlcmAgY29tcGxldGVzIGEgYHRhc2tgLCB0aGF0IGB0YXNrYCdzIGNhbGxiYWNrIGlzIGNhbGxlZC5cbiAqXG4gKiBAbmFtZSBxdWV1ZVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSB3b3JrZXIgLSBBbiBhc3luYyBmdW5jdGlvbiBmb3IgcHJvY2Vzc2luZyBhIHF1ZXVlZCB0YXNrLlxuICogSWYgeW91IHdhbnQgdG8gaGFuZGxlIGVycm9ycyBmcm9tIGFuIGluZGl2aWR1YWwgdGFzaywgcGFzcyBhIGNhbGxiYWNrIHRvXG4gKiBgcS5wdXNoKClgLiBJbnZva2VkIHdpdGggKHRhc2ssIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY29uY3VycmVuY3k9MV0gLSBBbiBgaW50ZWdlcmAgZm9yIGRldGVybWluaW5nIGhvdyBtYW55XG4gKiBgd29ya2VyYCBmdW5jdGlvbnMgc2hvdWxkIGJlIHJ1biBpbiBwYXJhbGxlbC4gIElmIG9taXR0ZWQsIHRoZSBjb25jdXJyZW5jeVxuICogZGVmYXVsdHMgdG8gYDFgLiAgSWYgdGhlIGNvbmN1cnJlbmN5IGlzIGAwYCwgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHJldHVybnMge21vZHVsZTpDb250cm9sRmxvdy5RdWV1ZU9iamVjdH0gQSBxdWV1ZSBvYmplY3QgdG8gbWFuYWdlIHRoZSB0YXNrcy4gQ2FsbGJhY2tzIGNhblxuICogYXR0YWNoZWQgYXMgY2VydGFpbiBwcm9wZXJ0aWVzIHRvIGxpc3RlbiBmb3Igc3BlY2lmaWMgZXZlbnRzIGR1cmluZyB0aGVcbiAqIGxpZmVjeWNsZSBvZiB0aGUgcXVldWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGNyZWF0ZSBhIHF1ZXVlIG9iamVjdCB3aXRoIGNvbmN1cnJlbmN5IDJcbiAqIHZhciBxID0gYXN5bmMucXVldWUoZnVuY3Rpb24odGFzaywgY2FsbGJhY2spIHtcbiAqICAgICBjb25zb2xlLmxvZygnaGVsbG8gJyArIHRhc2submFtZSk7XG4gKiAgICAgY2FsbGJhY2soKTtcbiAqIH0sIDIpO1xuICpcbiAqIC8vIGFzc2lnbiBhIGNhbGxiYWNrXG4gKiBxLmRyYWluID0gZnVuY3Rpb24oKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2FsbCBpdGVtcyBoYXZlIGJlZW4gcHJvY2Vzc2VkJyk7XG4gKiB9O1xuICpcbiAqIC8vIGFkZCBzb21lIGl0ZW1zIHRvIHRoZSBxdWV1ZVxuICogcS5wdXNoKHtuYW1lOiAnZm9vJ30sIGZ1bmN0aW9uKGVycikge1xuICogICAgIGNvbnNvbGUubG9nKCdmaW5pc2hlZCBwcm9jZXNzaW5nIGZvbycpO1xuICogfSk7XG4gKiBxLnB1c2goe25hbWU6ICdiYXInfSwgZnVuY3Rpb24gKGVycikge1xuICogICAgIGNvbnNvbGUubG9nKCdmaW5pc2hlZCBwcm9jZXNzaW5nIGJhcicpO1xuICogfSk7XG4gKlxuICogLy8gYWRkIHNvbWUgaXRlbXMgdG8gdGhlIHF1ZXVlIChiYXRjaC13aXNlKVxuICogcS5wdXNoKFt7bmFtZTogJ2Jheid9LHtuYW1lOiAnYmF5J30se25hbWU6ICdiYXgnfV0sIGZ1bmN0aW9uKGVycikge1xuICogICAgIGNvbnNvbGUubG9nKCdmaW5pc2hlZCBwcm9jZXNzaW5nIGl0ZW0nKTtcbiAqIH0pO1xuICpcbiAqIC8vIGFkZCBzb21lIGl0ZW1zIHRvIHRoZSBmcm9udCBvZiB0aGUgcXVldWVcbiAqIHEudW5zaGlmdCh7bmFtZTogJ2Jhcid9LCBmdW5jdGlvbiAoZXJyKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2ZpbmlzaGVkIHByb2Nlc3NpbmcgYmFyJyk7XG4gKiB9KTtcbiAqL1xudmFyIHF1ZXVlJDEgPSBmdW5jdGlvbiAod29ya2VyLCBjb25jdXJyZW5jeSkge1xuICB2YXIgX3dvcmtlciA9IHdyYXBBc3luYyQxKHdvcmtlcik7XG4gIHJldHVybiBxdWV1ZShmdW5jdGlvbiAoaXRlbXMsIGNiKSB7XG4gICAgX3dvcmtlcihpdGVtc1swXSwgY2IpO1xuICB9LCBjb25jdXJyZW5jeSwgMSk7XG59O1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFthc3luYy5xdWV1ZV17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnF1ZXVlfSBvbmx5IHRhc2tzIGFyZSBhc3NpZ25lZCBhIHByaW9yaXR5IGFuZFxuICogY29tcGxldGVkIGluIGFzY2VuZGluZyBwcmlvcml0eSBvcmRlci5cbiAqXG4gKiBAbmFtZSBwcmlvcml0eVF1ZXVlXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5xdWV1ZV17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnF1ZXVlfVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSB3b3JrZXIgLSBBbiBhc3luYyBmdW5jdGlvbiBmb3IgcHJvY2Vzc2luZyBhIHF1ZXVlZCB0YXNrLlxuICogSWYgeW91IHdhbnQgdG8gaGFuZGxlIGVycm9ycyBmcm9tIGFuIGluZGl2aWR1YWwgdGFzaywgcGFzcyBhIGNhbGxiYWNrIHRvXG4gKiBgcS5wdXNoKClgLlxuICogSW52b2tlZCB3aXRoICh0YXNrLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge251bWJlcn0gY29uY3VycmVuY3kgLSBBbiBgaW50ZWdlcmAgZm9yIGRldGVybWluaW5nIGhvdyBtYW55IGB3b3JrZXJgXG4gKiBmdW5jdGlvbnMgc2hvdWxkIGJlIHJ1biBpbiBwYXJhbGxlbC4gIElmIG9taXR0ZWQsIHRoZSBjb25jdXJyZW5jeSBkZWZhdWx0cyB0b1xuICogYDFgLiAgSWYgdGhlIGNvbmN1cnJlbmN5IGlzIGAwYCwgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHJldHVybnMge21vZHVsZTpDb250cm9sRmxvdy5RdWV1ZU9iamVjdH0gQSBwcmlvcml0eVF1ZXVlIG9iamVjdCB0byBtYW5hZ2UgdGhlIHRhc2tzLiBUaGVyZSBhcmUgdHdvXG4gKiBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBxdWV1ZWAgYW5kIGBwcmlvcml0eVF1ZXVlYCBvYmplY3RzOlxuICogKiBgcHVzaCh0YXNrLCBwcmlvcml0eSwgW2NhbGxiYWNrXSlgIC0gYHByaW9yaXR5YCBzaG91bGQgYmUgYSBudW1iZXIuIElmIGFuXG4gKiAgIGFycmF5IG9mIGB0YXNrc2AgaXMgZ2l2ZW4sIGFsbCB0YXNrcyB3aWxsIGJlIGFzc2lnbmVkIHRoZSBzYW1lIHByaW9yaXR5LlxuICogKiBUaGUgYHVuc2hpZnRgIG1ldGhvZCB3YXMgcmVtb3ZlZC5cbiAqL1xudmFyIHByaW9yaXR5UXVldWUgPSBmdW5jdGlvbiAod29ya2VyLCBjb25jdXJyZW5jeSkge1xuICAgIC8vIFN0YXJ0IHdpdGggYSBub3JtYWwgcXVldWVcbiAgICB2YXIgcSA9IHF1ZXVlJDEod29ya2VyLCBjb25jdXJyZW5jeSk7XG5cbiAgICAvLyBPdmVycmlkZSBwdXNoIHRvIGFjY2VwdCBzZWNvbmQgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBwcmlvcml0eVxuICAgIHEucHVzaCA9IGZ1bmN0aW9uIChkYXRhLCBwcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrID09IG51bGwpIGNhbGxiYWNrID0gbm9vcDtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0YXNrIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHEuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGNhbGwgZHJhaW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUgYXJlIG5vIHRhc2tzXG4gICAgICAgICAgICByZXR1cm4gc2V0SW1tZWRpYXRlJDEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuICAgICAgICB2YXIgbmV4dE5vZGUgPSBxLl90YXNrcy5oZWFkO1xuICAgICAgICB3aGlsZSAobmV4dE5vZGUgJiYgcHJpb3JpdHkgPj0gbmV4dE5vZGUucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dE5vZGUubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFbaV0sXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG5leHROb2RlKSB7XG4gICAgICAgICAgICAgICAgcS5fdGFza3MuaW5zZXJ0QmVmb3JlKG5leHROb2RlLCBpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcS5fdGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRJbW1lZGlhdGUkMShxLnByb2Nlc3MpO1xuICAgIH07XG5cbiAgICAvLyBSZW1vdmUgdW5zaGlmdCBmdW5jdGlvblxuICAgIGRlbGV0ZSBxLnVuc2hpZnQ7XG5cbiAgICByZXR1cm4gcTtcbn07XG5cbi8qKlxuICogUnVucyB0aGUgYHRhc2tzYCBhcnJheSBvZiBmdW5jdGlvbnMgaW4gcGFyYWxsZWwsIHdpdGhvdXQgd2FpdGluZyB1bnRpbCB0aGVcbiAqIHByZXZpb3VzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQuIE9uY2UgYW55IG9mIHRoZSBgdGFza3NgIGNvbXBsZXRlIG9yIHBhc3MgYW5cbiAqIGVycm9yIHRvIGl0cyBjYWxsYmFjaywgdGhlIG1haW4gYGNhbGxiYWNrYCBpcyBpbW1lZGlhdGVseSBjYWxsZWQuIEl0J3NcbiAqIGVxdWl2YWxlbnQgdG8gYFByb21pc2UucmFjZSgpYC5cbiAqXG4gKiBAbmFtZSByYWNlXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FycmF5fSB0YXNrcyAtIEFuIGFycmF5IGNvbnRhaW5pbmcgW2FzeW5jIGZ1bmN0aW9uc117QGxpbmsgQXN5bmNGdW5jdGlvbn1cbiAqIHRvIHJ1bi4gRWFjaCBmdW5jdGlvbiBjYW4gY29tcGxldGUgd2l0aCBhbiBvcHRpb25hbCBgcmVzdWx0YCB2YWx1ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayB0byBydW4gb25jZSBhbnkgb2YgdGhlIGZ1bmN0aW9ucyBoYXZlXG4gKiBjb21wbGV0ZWQuIFRoaXMgZnVuY3Rpb24gZ2V0cyBhbiBlcnJvciBvciByZXN1bHQgZnJvbSB0aGUgZmlyc3QgZnVuY3Rpb24gdGhhdFxuICogY29tcGxldGVkLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0KS5cbiAqIEByZXR1cm5zIHVuZGVmaW5lZFxuICogQGV4YW1wbGVcbiAqXG4gKiBhc3luYy5yYWNlKFtcbiAqICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ29uZScpO1xuICogICAgICAgICB9LCAyMDApO1xuICogICAgIH0sXG4gKiAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICd0d28nKTtcbiAqICAgICAgICAgfSwgMTAwKTtcbiAqICAgICB9XG4gKiBdLFxuICogLy8gbWFpbiBjYWxsYmFja1xuICogZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyB0aGUgcmVzdWx0IHdpbGwgYmUgZXF1YWwgdG8gJ3R3bycgYXMgaXQgZmluaXNoZXMgZWFybGllclxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHJhY2UodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgIGlmICghaXNBcnJheSh0YXNrcykpIHJldHVybiBjYWxsYmFjayhuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCB0byByYWNlIG11c3QgYmUgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJykpO1xuICAgIGlmICghdGFza3MubGVuZ3RoKSByZXR1cm4gY2FsbGJhY2soKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRhc2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB3cmFwQXN5bmMkMSh0YXNrc1tpXSkoY2FsbGJhY2spO1xuICAgIH1cbn1cblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4vKipcbiAqIFNhbWUgYXMgW2ByZWR1Y2VgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMucmVkdWNlfSwgb25seSBvcGVyYXRlcyBvbiBgYXJyYXlgIGluIHJldmVyc2Ugb3JkZXIuXG4gKlxuICogQG5hbWUgcmVkdWNlUmlnaHRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLnJlZHVjZV17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLnJlZHVjZX1cbiAqIEBhbGlhcyBmb2xkclxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7Kn0gbWVtbyAtIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSByZWR1Y3Rpb24uXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQSBmdW5jdGlvbiBhcHBsaWVkIHRvIGVhY2ggaXRlbSBpbiB0aGVcbiAqIGFycmF5IHRvIHByb2R1Y2UgdGhlIG5leHQgc3RlcCBpbiB0aGUgcmVkdWN0aW9uLlxuICogVGhlIGBpdGVyYXRlZWAgc2hvdWxkIGNvbXBsZXRlIHdpdGggdGhlIG5leHQgc3RhdGUgb2YgdGhlIHJlZHVjdGlvbi5cbiAqIElmIHRoZSBpdGVyYXRlZSBjb21wbGV0ZSB3aXRoIGFuIGVycm9yLCB0aGUgcmVkdWN0aW9uIGlzIHN0b3BwZWQgYW5kIHRoZVxuICogbWFpbiBgY2FsbGJhY2tgIGlzIGltbWVkaWF0ZWx5IGNhbGxlZCB3aXRoIHRoZSBlcnJvci5cbiAqIEludm9rZWQgd2l0aCAobWVtbywgaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuIFJlc3VsdCBpcyB0aGUgcmVkdWNlZCB2YWx1ZS4gSW52b2tlZCB3aXRoXG4gKiAoZXJyLCByZXN1bHQpLlxuICovXG5mdW5jdGlvbiByZWR1Y2VSaWdodChhcnJheSwgbWVtbywgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gIHZhciByZXZlcnNlZCA9IHNsaWNlLmNhbGwoYXJyYXkpLnJldmVyc2UoKTtcbiAgcmVkdWNlKHJldmVyc2VkLCBtZW1vLCBpdGVyYXRlZSwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIFdyYXBzIHRoZSBhc3luYyBmdW5jdGlvbiBpbiBhbm90aGVyIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIGNvbXBsZXRlcyB3aXRoIGFcbiAqIHJlc3VsdCBvYmplY3QsIGV2ZW4gd2hlbiBpdCBlcnJvcnMuXG4gKlxuICogVGhlIHJlc3VsdCBvYmplY3QgaGFzIGVpdGhlciB0aGUgcHJvcGVydHkgYGVycm9yYCBvciBgdmFsdWVgLlxuICpcbiAqIEBuYW1lIHJlZmxlY3RcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6VXRpbHNcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGZuIC0gVGhlIGFzeW5jIGZ1bmN0aW9uIHlvdSB3YW50IHRvIHdyYXBcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHBhc3NlcyBudWxsIHRvIGl0J3MgY2FsbGJhY2sgYXNcbiAqIHRoZSBlcnJvci4gVGhlIHNlY29uZCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgd2lsbCBiZSBhbiBgb2JqZWN0YCB3aXRoXG4gKiBlaXRoZXIgYW4gYGVycm9yYCBvciBhIGB2YWx1ZWAgcHJvcGVydHkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLnBhcmFsbGVsKFtcbiAqICAgICBhc3luYy5yZWZsZWN0KGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGRvIHNvbWUgc3R1ZmYgLi4uXG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdvbmUnKTtcbiAqICAgICB9KSxcbiAqICAgICBhc3luYy5yZWZsZWN0KGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGRvIHNvbWUgbW9yZSBzdHVmZiBidXQgZXJyb3IgLi4uXG4gKiAgICAgICAgIGNhbGxiYWNrKCdiYWQgc3R1ZmYgaGFwcGVuZWQnKTtcbiAqICAgICB9KSxcbiAqICAgICBhc3luYy5yZWZsZWN0KGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGRvIHNvbWUgbW9yZSBzdHVmZiAuLi5cbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ3R3bycpO1xuICogICAgIH0pXG4gKiBdLFxuICogLy8gb3B0aW9uYWwgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICogICAgIC8vIHZhbHVlc1xuICogICAgIC8vIHJlc3VsdHNbMF0udmFsdWUgPSAnb25lJ1xuICogICAgIC8vIHJlc3VsdHNbMV0uZXJyb3IgPSAnYmFkIHN0dWZmIGhhcHBlbmVkJ1xuICogICAgIC8vIHJlc3VsdHNbMl0udmFsdWUgPSAndHdvJ1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHJlZmxlY3QoZm4pIHtcbiAgICB2YXIgX2ZuID0gd3JhcEFzeW5jJDEoZm4pO1xuICAgIHJldHVybiBpbml0aWFsUGFyYW1zKGZ1bmN0aW9uIHJlZmxlY3RPbihhcmdzLCByZWZsZWN0Q2FsbGJhY2spIHtcbiAgICAgICAgYXJncy5wdXNoKHJlc3QoZnVuY3Rpb24gY2FsbGJhY2soZXJyLCBjYkFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWZsZWN0Q2FsbGJhY2sobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGNiQXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjYkFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYkFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNiQXJncztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVmbGVjdENhbGxiYWNrKG51bGwsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gX2ZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZWplY3QkMShlYWNoZm4sIGFyciwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgX2ZpbHRlcihlYWNoZm4sIGFyciwgZnVuY3Rpb24gKHZhbHVlLCBjYikge1xuICAgICAgICBpdGVyYXRlZSh2YWx1ZSwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgY2IoZXJyLCAhdik7XG4gICAgICAgIH0pO1xuICAgIH0sIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBUaGUgb3Bwb3NpdGUgb2YgW2BmaWx0ZXJgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZmlsdGVyfS4gUmVtb3ZlcyB2YWx1ZXMgdGhhdCBwYXNzIGFuIGBhc3luY2AgdHJ1dGggdGVzdC5cbiAqXG4gKiBAbmFtZSByZWplY3RcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmZpbHRlcl17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmZpbHRlcn1cbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIHRydXRoIHRlc3QgdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBUaGUgc2hvdWxkIGNvbXBsZXRlIHdpdGggYSBib29sZWFuIHZhbHVlIGFzIGl0cyBgcmVzdWx0YC5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMucmVqZWN0KFsnZmlsZTEnLCdmaWxlMicsJ2ZpbGUzJ10sIGZ1bmN0aW9uKGZpbGVQYXRoLCBjYWxsYmFjaykge1xuICogICAgIGZzLmFjY2VzcyhmaWxlUGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICFlcnIpXG4gKiAgICAgfSk7XG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyByZXN1bHRzIG5vdyBlcXVhbHMgYW4gYXJyYXkgb2YgbWlzc2luZyBmaWxlc1xuICogICAgIGNyZWF0ZUZpbGVzKHJlc3VsdHMpO1xuICogfSk7XG4gKi9cbnZhciByZWplY3QgPSBkb1BhcmFsbGVsKHJlamVjdCQxKTtcblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdyYXBzIGFuIGFycmF5IG9yIGFuIG9iamVjdCBvZiBmdW5jdGlvbnMgd2l0aCBgcmVmbGVjdGAuXG4gKlxuICogQG5hbWUgcmVmbGVjdEFsbFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpVdGlsc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMucmVmbGVjdF17QGxpbmsgbW9kdWxlOlV0aWxzLnJlZmxlY3R9XG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8SXRlcmFibGV9IHRhc2tzIC0gVGhlIGNvbGxlY3Rpb24gb2ZcbiAqIFthc3luYyBmdW5jdGlvbnNde0BsaW5rIEFzeW5jRnVuY3Rpb259IHRvIHdyYXAgaW4gYGFzeW5jLnJlZmxlY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGFycmF5IG9mIGFzeW5jIGZ1bmN0aW9ucywgZWFjaCB3cmFwcGVkIGluXG4gKiBgYXN5bmMucmVmbGVjdGBcbiAqIEBleGFtcGxlXG4gKlxuICogbGV0IHRhc2tzID0gW1xuICogICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAnb25lJyk7XG4gKiAgICAgICAgIH0sIDIwMCk7XG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICAvLyBkbyBzb21lIG1vcmUgc3R1ZmYgYnV0IGVycm9yIC4uLlxuICogICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ2JhZCBzdHVmZiBoYXBwZW5lZCcpKTtcbiAqICAgICB9LFxuICogICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAndHdvJyk7XG4gKiAgICAgICAgIH0sIDEwMCk7XG4gKiAgICAgfVxuICogXTtcbiAqXG4gKiBhc3luYy5wYXJhbGxlbChhc3luYy5yZWZsZWN0QWxsKHRhc2tzKSxcbiAqIC8vIG9wdGlvbmFsIGNhbGxiYWNrXG4gKiBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyB2YWx1ZXNcbiAqICAgICAvLyByZXN1bHRzWzBdLnZhbHVlID0gJ29uZSdcbiAqICAgICAvLyByZXN1bHRzWzFdLmVycm9yID0gRXJyb3IoJ2JhZCBzdHVmZiBoYXBwZW5lZCcpXG4gKiAgICAgLy8gcmVzdWx0c1syXS52YWx1ZSA9ICd0d28nXG4gKiB9KTtcbiAqXG4gKiAvLyBhbiBleGFtcGxlIHVzaW5nIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFuIGFycmF5XG4gKiBsZXQgdGFza3MgPSB7XG4gKiAgICAgb25lOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ29uZScpO1xuICogICAgICAgICB9LCAyMDApO1xuICogICAgIH0sXG4gKiAgICAgdHdvOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBjYWxsYmFjaygndHdvJyk7XG4gKiAgICAgfSxcbiAqICAgICB0aHJlZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICd0aHJlZScpO1xuICogICAgICAgICB9LCAxMDApO1xuICogICAgIH1cbiAqIH07XG4gKlxuICogYXN5bmMucGFyYWxsZWwoYXN5bmMucmVmbGVjdEFsbCh0YXNrcyksXG4gKiAvLyBvcHRpb25hbCBjYWxsYmFja1xuICogZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgLy8gdmFsdWVzXG4gKiAgICAgLy8gcmVzdWx0cy5vbmUudmFsdWUgPSAnb25lJ1xuICogICAgIC8vIHJlc3VsdHMudHdvLmVycm9yID0gJ3R3bydcbiAqICAgICAvLyByZXN1bHRzLnRocmVlLnZhbHVlID0gJ3RocmVlJ1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHJlZmxlY3RBbGwodGFza3MpIHtcbiAgICB2YXIgcmVzdWx0cztcbiAgICBpZiAoaXNBcnJheSh0YXNrcykpIHtcbiAgICAgICAgcmVzdWx0cyA9IGFycmF5TWFwKHRhc2tzLCByZWZsZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzID0ge307XG4gICAgICAgIGJhc2VGb3JPd24odGFza3MsIGZ1bmN0aW9uICh0YXNrLCBrZXkpIHtcbiAgICAgICAgICAgIHJlc3VsdHNba2V5XSA9IHJlZmxlY3QuY2FsbCh0aGlzLCB0YXNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xufVxuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgcmVqZWN0YF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLnJlamVjdH0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhXG4gKiB0aW1lLlxuICpcbiAqIEBuYW1lIHJlamVjdExpbWl0XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5yZWplY3Rde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5yZWplY3R9XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0IC0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGFzeW5jIG9wZXJhdGlvbnMgYXQgYSB0aW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpblxuICogYGNvbGxgLlxuICogVGhlIHNob3VsZCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiB2YWx1ZSBhcyBpdHMgYHJlc3VsdGAuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKi9cbnZhciByZWplY3RMaW1pdCA9IGRvUGFyYWxsZWxMaW1pdChyZWplY3QkMSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2ByZWplY3RgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMucmVqZWN0fSBidXQgcnVucyBvbmx5IGEgc2luZ2xlIGFzeW5jIG9wZXJhdGlvbiBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgcmVqZWN0U2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5yZWplY3Rde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5yZWplY3R9XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpblxuICogYGNvbGxgLlxuICogVGhlIHNob3VsZCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiB2YWx1ZSBhcyBpdHMgYHJlc3VsdGAuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKi9cbnZhciByZWplY3RTZXJpZXMgPSBkb0xpbWl0KHJlamVjdExpbWl0LCAxKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50JDEodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBnZXQgYSBzdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gYHRhc2tgIG5vIG1vcmUgdGhhbiBgdGltZXNgIHRpbWVzXG4gKiBiZWZvcmUgcmV0dXJuaW5nIGFuIGVycm9yLiBJZiB0aGUgdGFzayBpcyBzdWNjZXNzZnVsLCB0aGUgYGNhbGxiYWNrYCB3aWxsIGJlXG4gKiBwYXNzZWQgdGhlIHJlc3VsdCBvZiB0aGUgc3VjY2Vzc2Z1bCB0YXNrLiBJZiBhbGwgYXR0ZW1wdHMgZmFpbCwgdGhlIGNhbGxiYWNrXG4gKiB3aWxsIGJlIHBhc3NlZCB0aGUgZXJyb3IgYW5kIHJlc3VsdCAoaWYgYW55KSBvZiB0aGUgZmluYWwgYXR0ZW1wdC5cbiAqXG4gKiBAbmFtZSByZXRyeVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHNlZSBbYXN5bmMucmV0cnlhYmxlXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cucmV0cnlhYmxlfVxuICogQHBhcmFtIHtPYmplY3R8bnVtYmVyfSBbb3B0cyA9IHt0aW1lczogNSwgaW50ZXJ2YWw6IDB9fCA1XSAtIENhbiBiZSBlaXRoZXIgYW5cbiAqIG9iamVjdCB3aXRoIGB0aW1lc2AgYW5kIGBpbnRlcnZhbGAgb3IgYSBudW1iZXIuXG4gKiAqIGB0aW1lc2AgLSBUaGUgbnVtYmVyIG9mIGF0dGVtcHRzIHRvIG1ha2UgYmVmb3JlIGdpdmluZyB1cC4gIFRoZSBkZWZhdWx0XG4gKiAgIGlzIGA1YC5cbiAqICogYGludGVydmFsYCAtIFRoZSB0aW1lIHRvIHdhaXQgYmV0d2VlbiByZXRyaWVzLCBpbiBtaWxsaXNlY29uZHMuICBUaGVcbiAqICAgZGVmYXVsdCBpcyBgMGAuIFRoZSBpbnRlcnZhbCBtYXkgYWxzbyBiZSBzcGVjaWZpZWQgYXMgYSBmdW5jdGlvbiBvZiB0aGVcbiAqICAgcmV0cnkgY291bnQgKHNlZSBleGFtcGxlKS5cbiAqICogYGVycm9yRmlsdGVyYCAtIEFuIG9wdGlvbmFsIHN5bmNocm9ub3VzIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBvblxuICogICBlcnJvbmVvdXMgcmVzdWx0LiBJZiBpdCByZXR1cm5zIGB0cnVlYCB0aGUgcmV0cnkgYXR0ZW1wdHMgd2lsbCBjb250aW51ZTtcbiAqICAgaWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCB0aGUgcmV0cnkgZmxvdyBpcyBhYm9ydGVkIHdpdGggdGhlIGN1cnJlbnRcbiAqICAgYXR0ZW1wdCdzIGVycm9yIGFuZCByZXN1bHQgYmVpbmcgcmV0dXJuZWQgdG8gdGhlIGZpbmFsIGNhbGxiYWNrLlxuICogICBJbnZva2VkIHdpdGggKGVycikuXG4gKiAqIElmIGBvcHRzYCBpcyBhIG51bWJlciwgdGhlIG51bWJlciBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aW1lcyB0byByZXRyeSxcbiAqICAgd2l0aCB0aGUgZGVmYXVsdCBpbnRlcnZhbCBvZiBgMGAuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IHRhc2sgLSBBbiBhc3luYyBmdW5jdGlvbiB0byByZXRyeS5cbiAqIEludm9rZWQgd2l0aCAoY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZVxuICogdGFzayBoYXMgc3VjY2VlZGVkLCBvciBhZnRlciB0aGUgZmluYWwgZmFpbGVkIGF0dGVtcHQuIEl0IHJlY2VpdmVzIHRoZSBgZXJyYFxuICogYW5kIGByZXN1bHRgIGFyZ3VtZW50cyBvZiB0aGUgbGFzdCBhdHRlbXB0IGF0IGNvbXBsZXRpbmcgdGhlIGB0YXNrYC4gSW52b2tlZFxuICogd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIFRoZSBgcmV0cnlgIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIGFzIGEgc3RhbmQtYWxvbmUgY29udHJvbCBmbG93IGJ5IHBhc3NpbmdcbiAqIC8vIGEgY2FsbGJhY2ssIGFzIHNob3duIGJlbG93OlxuICpcbiAqIC8vIHRyeSBjYWxsaW5nIGFwaU1ldGhvZCAzIHRpbWVzXG4gKiBhc3luYy5yZXRyeSgzLCBhcGlNZXRob2QsIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3VsdFxuICogfSk7XG4gKlxuICogLy8gdHJ5IGNhbGxpbmcgYXBpTWV0aG9kIDMgdGltZXMsIHdhaXRpbmcgMjAwIG1zIGJldHdlZW4gZWFjaCByZXRyeVxuICogYXN5bmMucmV0cnkoe3RpbWVzOiAzLCBpbnRlcnZhbDogMjAwfSwgYXBpTWV0aG9kLCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSByZXN1bHRcbiAqIH0pO1xuICpcbiAqIC8vIHRyeSBjYWxsaW5nIGFwaU1ldGhvZCAxMCB0aW1lcyB3aXRoIGV4cG9uZW50aWFsIGJhY2tvZmZcbiAqIC8vIChpLmUuIGludGVydmFscyBvZiAxMDAsIDIwMCwgNDAwLCA4MDAsIDE2MDAsIC4uLiBtaWxsaXNlY29uZHMpXG4gKiBhc3luYy5yZXRyeSh7XG4gKiAgIHRpbWVzOiAxMCxcbiAqICAgaW50ZXJ2YWw6IGZ1bmN0aW9uKHJldHJ5Q291bnQpIHtcbiAqICAgICByZXR1cm4gNTAgKiBNYXRoLnBvdygyLCByZXRyeUNvdW50KTtcbiAqICAgfVxuICogfSwgYXBpTWV0aG9kLCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSByZXN1bHRcbiAqIH0pO1xuICpcbiAqIC8vIHRyeSBjYWxsaW5nIGFwaU1ldGhvZCB0aGUgZGVmYXVsdCA1IHRpbWVzIG5vIGRlbGF5IGJldHdlZW4gZWFjaCByZXRyeVxuICogYXN5bmMucmV0cnkoYXBpTWV0aG9kLCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSByZXN1bHRcbiAqIH0pO1xuICpcbiAqIC8vIHRyeSBjYWxsaW5nIGFwaU1ldGhvZCBvbmx5IHdoZW4gZXJyb3IgY29uZGl0aW9uIHNhdGlzZmllcywgYWxsIG90aGVyXG4gKiAvLyBlcnJvcnMgd2lsbCBhYm9ydCB0aGUgcmV0cnkgY29udHJvbCBmbG93IGFuZCByZXR1cm4gdG8gZmluYWwgY2FsbGJhY2tcbiAqIGFzeW5jLnJldHJ5KHtcbiAqICAgZXJyb3JGaWx0ZXI6IGZ1bmN0aW9uKGVycikge1xuICogICAgIHJldHVybiBlcnIubWVzc2FnZSA9PT0gJ1RlbXBvcmFyeSBlcnJvcic7IC8vIG9ubHkgcmV0cnkgb24gYSBzcGVjaWZpYyBlcnJvclxuICogICB9XG4gKiB9LCBhcGlNZXRob2QsIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3VsdFxuICogfSk7XG4gKlxuICogLy8gSXQgY2FuIGFsc28gYmUgZW1iZWRkZWQgd2l0aGluIG90aGVyIGNvbnRyb2wgZmxvdyBmdW5jdGlvbnMgdG8gcmV0cnlcbiAqIC8vIGluZGl2aWR1YWwgbWV0aG9kcyB0aGF0IGFyZSBub3QgYXMgcmVsaWFibGUsIGxpa2UgdGhpczpcbiAqIGFzeW5jLmF1dG8oe1xuICogICAgIHVzZXJzOiBhcGkuZ2V0VXNlcnMuYmluZChhcGkpLFxuICogICAgIHBheW1lbnRzOiBhc3luYy5yZXRyeWFibGUoMywgYXBpLmdldFBheW1lbnRzLmJpbmQoYXBpKSlcbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICogICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSByZXN1bHRzXG4gKiB9KTtcbiAqXG4gKi9cbmZ1bmN0aW9uIHJldHJ5KG9wdHMsIHRhc2ssIGNhbGxiYWNrKSB7XG4gICAgdmFyIERFRkFVTFRfVElNRVMgPSA1O1xuICAgIHZhciBERUZBVUxUX0lOVEVSVkFMID0gMDtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICB0aW1lczogREVGQVVMVF9USU1FUyxcbiAgICAgICAgaW50ZXJ2YWxGdW5jOiBjb25zdGFudCQxKERFRkFVTFRfSU5URVJWQUwpXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBhcnNlVGltZXMoYWNjLCB0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGFjYy50aW1lcyA9ICt0LnRpbWVzIHx8IERFRkFVTFRfVElNRVM7XG5cbiAgICAgICAgICAgIGFjYy5pbnRlcnZhbEZ1bmMgPSB0eXBlb2YgdC5pbnRlcnZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHQuaW50ZXJ2YWwgOiBjb25zdGFudCQxKCt0LmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwpO1xuXG4gICAgICAgICAgICBhY2MuZXJyb3JGaWx0ZXIgPSB0LmVycm9yRmlsdGVyO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGFjYy50aW1lcyA9ICt0IHx8IERFRkFVTFRfVElNRVM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50cyBmb3IgYXN5bmMucmV0cnlcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMgJiYgdHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSB0YXNrIHx8IG5vb3A7XG4gICAgICAgIHRhc2sgPSBvcHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlVGltZXMob3B0aW9ucywgb3B0cyk7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRhc2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudHMgZm9yIGFzeW5jLnJldHJ5XCIpO1xuICAgIH1cblxuICAgIHZhciBfdGFzayA9IHdyYXBBc3luYyQxKHRhc2spO1xuXG4gICAgdmFyIGF0dGVtcHQgPSAxO1xuICAgIGZ1bmN0aW9uIHJldHJ5QXR0ZW1wdCgpIHtcbiAgICAgICAgX3Rhc2soZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVyciAmJiBhdHRlbXB0KysgPCBvcHRpb25zLnRpbWVzICYmICh0eXBlb2Ygb3B0aW9ucy5lcnJvckZpbHRlciAhPSAnZnVuY3Rpb24nIHx8IG9wdGlvbnMuZXJyb3JGaWx0ZXIoZXJyKSkpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJldHJ5QXR0ZW1wdCwgb3B0aW9ucy5pbnRlcnZhbEZ1bmMoYXR0ZW1wdCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXRyeUF0dGVtcHQoKTtcbn1cblxuLyoqXG4gKiBBIGNsb3NlIHJlbGF0aXZlIG9mIFtgcmV0cnlgXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cucmV0cnl9LiAgVGhpcyBtZXRob2RcbiAqIHdyYXBzIGEgdGFzayBhbmQgbWFrZXMgaXQgcmV0cnlhYmxlLCByYXRoZXIgdGhhbiBpbW1lZGlhdGVseSBjYWxsaW5nIGl0XG4gKiB3aXRoIHJldHJpZXMuXG4gKlxuICogQG5hbWUgcmV0cnlhYmxlXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5yZXRyeV17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnJldHJ5fVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtPYmplY3R8bnVtYmVyfSBbb3B0cyA9IHt0aW1lczogNSwgaW50ZXJ2YWw6IDB9fCA1XSAtIG9wdGlvbmFsXG4gKiBvcHRpb25zLCBleGFjdGx5IHRoZSBzYW1lIGFzIGZyb20gYHJldHJ5YFxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSB0YXNrIC0gdGhlIGFzeW5jaHJvbm91cyBmdW5jdGlvbiB0byB3cmFwLlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIHBhc3NlZCBhbnkgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgcmV0dXJuZWQgd3JhcHBlci5cbiAqIEludm9rZWQgd2l0aCAoLi4uYXJncywgY2FsbGJhY2spLlxuICogQHJldHVybnMge0FzeW5jRnVuY3Rpb259IFRoZSB3cmFwcGVkIGZ1bmN0aW9uLCB3aGljaCB3aGVuIGludm9rZWQsIHdpbGxcbiAqIHJldHJ5IG9uIGFuIGVycm9yLCBiYXNlZCBvbiB0aGUgcGFyYW1ldGVycyBzcGVjaWZpZWQgaW4gYG9wdHNgLlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGFjY2VwdCB0aGUgc2FtZSBwYXJhbWV0ZXJzIGFzIGB0YXNrYC5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMuYXV0byh7XG4gKiAgICAgZGVwMTogYXN5bmMucmV0cnlhYmxlKDMsIGdldEZyb21GbGFreVNlcnZpY2UpLFxuICogICAgIHByb2Nlc3M6IFtcImRlcDFcIiwgYXN5bmMucmV0cnlhYmxlKDMsIGZ1bmN0aW9uIChyZXN1bHRzLCBjYikge1xuICogICAgICAgICBtYXliZVByb2Nlc3NEYXRhKHJlc3VsdHMuZGVwMSwgY2IpO1xuICogICAgIH0pXVxuICogfSwgY2FsbGJhY2spO1xuICovXG52YXIgcmV0cnlhYmxlID0gZnVuY3Rpb24gKG9wdHMsIHRhc2spIHtcbiAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgdGFzayA9IG9wdHM7XG4gICAgICAgIG9wdHMgPSBudWxsO1xuICAgIH1cbiAgICB2YXIgX3Rhc2sgPSB3cmFwQXN5bmMkMSh0YXNrKTtcbiAgICByZXR1cm4gaW5pdGlhbFBhcmFtcyhmdW5jdGlvbiAoYXJncywgY2FsbGJhY2spIHtcbiAgICAgICAgZnVuY3Rpb24gdGFza0ZuKGNiKSB7XG4gICAgICAgICAgICBfdGFzay5hcHBseShudWxsLCBhcmdzLmNvbmNhdChjYikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdHMpIHJldHJ5KG9wdHMsIHRhc2tGbiwgY2FsbGJhY2spO2Vsc2UgcmV0cnkodGFza0ZuLCBjYWxsYmFjayk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJ1biB0aGUgZnVuY3Rpb25zIGluIHRoZSBgdGFza3NgIGNvbGxlY3Rpb24gaW4gc2VyaWVzLCBlYWNoIG9uZSBydW5uaW5nIG9uY2VcbiAqIHRoZSBwcmV2aW91cyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLiBJZiBhbnkgZnVuY3Rpb25zIGluIHRoZSBzZXJpZXMgcGFzcyBhblxuICogZXJyb3IgdG8gaXRzIGNhbGxiYWNrLCBubyBtb3JlIGZ1bmN0aW9ucyBhcmUgcnVuLCBhbmQgYGNhbGxiYWNrYCBpc1xuICogaW1tZWRpYXRlbHkgY2FsbGVkIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBlcnJvci4gT3RoZXJ3aXNlLCBgY2FsbGJhY2tgXG4gKiByZWNlaXZlcyBhbiBhcnJheSBvZiByZXN1bHRzIHdoZW4gYHRhc2tzYCBoYXZlIGNvbXBsZXRlZC5cbiAqXG4gKiBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHVzZSBhbiBvYmplY3QgaW5zdGVhZCBvZiBhbiBhcnJheS4gRWFjaCBwcm9wZXJ0eSB3aWxsXG4gKiBiZSBydW4gYXMgYSBmdW5jdGlvbiwgYW5kIHRoZSByZXN1bHRzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBmaW5hbCBgY2FsbGJhY2tgXG4gKiBhcyBhbiBvYmplY3QgaW5zdGVhZCBvZiBhbiBhcnJheS4gVGhpcyBjYW4gYmUgYSBtb3JlIHJlYWRhYmxlIHdheSBvZiBoYW5kbGluZ1xuICogIHJlc3VsdHMgZnJvbSB7QGxpbmsgYXN5bmMuc2VyaWVzfS5cbiAqXG4gKiAqKk5vdGUqKiB0aGF0IHdoaWxlIG1hbnkgaW1wbGVtZW50YXRpb25zIHByZXNlcnZlIHRoZSBvcmRlciBvZiBvYmplY3RcbiAqIHByb3BlcnRpZXMsIHRoZSBbRUNNQVNjcmlwdCBMYW5ndWFnZSBTcGVjaWZpY2F0aW9uXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNS4xLyNzZWMtOC42KVxuICogZXhwbGljaXRseSBzdGF0ZXMgdGhhdFxuICpcbiAqID4gVGhlIG1lY2hhbmljcyBhbmQgb3JkZXIgb2YgZW51bWVyYXRpbmcgdGhlIHByb3BlcnRpZXMgaXMgbm90IHNwZWNpZmllZC5cbiAqXG4gKiBTbyBpZiB5b3UgcmVseSBvbiB0aGUgb3JkZXIgaW4gd2hpY2ggeW91ciBzZXJpZXMgb2YgZnVuY3Rpb25zIGFyZSBleGVjdXRlZCxcbiAqIGFuZCB3YW50IHRoaXMgdG8gd29yayBvbiBhbGwgcGxhdGZvcm1zLCBjb25zaWRlciB1c2luZyBhbiBhcnJheS5cbiAqXG4gKiBAbmFtZSBzZXJpZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSB0YXNrcyAtIEEgY29sbGVjdGlvbiBjb250YWluaW5nXG4gKiBbYXN5bmMgZnVuY3Rpb25zXXtAbGluayBBc3luY0Z1bmN0aW9ufSB0byBydW4gaW4gc2VyaWVzLlxuICogRWFjaCBmdW5jdGlvbiBjYW4gY29tcGxldGUgd2l0aCBhbnkgbnVtYmVyIG9mIG9wdGlvbmFsIGByZXN1bHRgIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBydW4gb25jZSBhbGwgdGhlXG4gKiBmdW5jdGlvbnMgaGF2ZSBjb21wbGV0ZWQuIFRoaXMgZnVuY3Rpb24gZ2V0cyBhIHJlc3VsdHMgYXJyYXkgKG9yIG9iamVjdClcbiAqIGNvbnRhaW5pbmcgYWxsIHRoZSByZXN1bHQgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgYHRhc2tgIGNhbGxiYWNrcy4gSW52b2tlZFxuICogd2l0aCAoZXJyLCByZXN1bHQpLlxuICogQGV4YW1wbGVcbiAqIGFzeW5jLnNlcmllcyhbXG4gKiAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgLy8gZG8gc29tZSBzdHVmZiAuLi5cbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ29uZScpO1xuICogICAgIH0sXG4gKiAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgLy8gZG8gc29tZSBtb3JlIHN0dWZmIC4uLlxuICogICAgICAgICBjYWxsYmFjayhudWxsLCAndHdvJyk7XG4gKiAgICAgfVxuICogXSxcbiAqIC8vIG9wdGlvbmFsIGNhbGxiYWNrXG4gKiBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyByZXN1bHRzIGlzIG5vdyBlcXVhbCB0byBbJ29uZScsICd0d28nXVxuICogfSk7XG4gKlxuICogYXN5bmMuc2VyaWVzKHtcbiAqICAgICBvbmU6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAxKTtcbiAqICAgICAgICAgfSwgMjAwKTtcbiAqICAgICB9LFxuICogICAgIHR3bzogZnVuY3Rpb24oY2FsbGJhY2spe1xuICogICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgMik7XG4gKiAgICAgICAgIH0sIDEwMCk7XG4gKiAgICAgfVxuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgLy8gcmVzdWx0cyBpcyBub3cgZXF1YWwgdG86IHtvbmU6IDEsIHR3bzogMn1cbiAqIH0pO1xuICovXG5mdW5jdGlvbiBzZXJpZXModGFza3MsIGNhbGxiYWNrKSB7XG4gIF9wYXJhbGxlbChlYWNoT2ZTZXJpZXMsIHRhc2tzLCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYXQgbGVhc3Qgb25lIGVsZW1lbnQgaW4gdGhlIGBjb2xsYCBzYXRpc2ZpZXMgYW4gYXN5bmMgdGVzdC5cbiAqIElmIGFueSBpdGVyYXRlZSBjYWxsIHJldHVybnMgYHRydWVgLCB0aGUgbWFpbiBgY2FsbGJhY2tgIGlzIGltbWVkaWF0ZWx5XG4gKiBjYWxsZWQuXG4gKlxuICogQG5hbWUgc29tZVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGFsaWFzIGFueVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbVxuICogaW4gdGhlIGNvbGxlY3Rpb25zIGluIHBhcmFsbGVsLlxuICogVGhlIGl0ZXJhdGVlIHNob3VsZCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiBgcmVzdWx0YCB2YWx1ZS5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFzIHNvb24gYXMgYW55XG4gKiBpdGVyYXRlZSByZXR1cm5zIGB0cnVlYCwgb3IgYWZ0ZXIgYWxsIHRoZSBpdGVyYXRlZSBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAqIFJlc3VsdCB3aWxsIGJlIGVpdGhlciBgdHJ1ZWAgb3IgYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGUgYXN5bmNcbiAqIHRlc3RzLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0KS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMuc29tZShbJ2ZpbGUxJywnZmlsZTInLCdmaWxlMyddLCBmdW5jdGlvbihmaWxlUGF0aCwgY2FsbGJhY2spIHtcbiAqICAgICBmcy5hY2Nlc3MoZmlsZVBhdGgsIGZ1bmN0aW9uKGVycikge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCAhZXJyKVxuICogICAgIH0pO1xuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyBpZiByZXN1bHQgaXMgdHJ1ZSB0aGVuIGF0IGxlYXN0IG9uZSBvZiB0aGUgZmlsZXMgZXhpc3RzXG4gKiB9KTtcbiAqL1xudmFyIHNvbWUgPSBkb1BhcmFsbGVsKF9jcmVhdGVUZXN0ZXIoQm9vbGVhbiwgaWRlbnRpdHkpKTtcblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYHNvbWVgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuc29tZX0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgc29tZUxpbWl0XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5zb21lXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuc29tZX1cbiAqIEBhbGlhcyBhbnlMaW1pdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbVxuICogaW4gdGhlIGNvbGxlY3Rpb25zIGluIHBhcmFsbGVsLlxuICogVGhlIGl0ZXJhdGVlIHNob3VsZCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiBgcmVzdWx0YCB2YWx1ZS5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFzIHNvb24gYXMgYW55XG4gKiBpdGVyYXRlZSByZXR1cm5zIGB0cnVlYCwgb3IgYWZ0ZXIgYWxsIHRoZSBpdGVyYXRlZSBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAqIFJlc3VsdCB3aWxsIGJlIGVpdGhlciBgdHJ1ZWAgb3IgYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGUgYXN5bmNcbiAqIHRlc3RzLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0KS5cbiAqL1xudmFyIHNvbWVMaW1pdCA9IGRvUGFyYWxsZWxMaW1pdChfY3JlYXRlVGVzdGVyKEJvb2xlYW4sIGlkZW50aXR5KSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2Bzb21lYF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLnNvbWV9IGJ1dCBydW5zIG9ubHkgYSBzaW5nbGUgYXN5bmMgb3BlcmF0aW9uIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBzb21lU2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5zb21lXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuc29tZX1cbiAqIEBhbGlhcyBhbnlTZXJpZXNcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW1cbiAqIGluIHRoZSBjb2xsZWN0aW9ucyBpbiBzZXJpZXMuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggYSBib29sZWFuIGByZXN1bHRgIHZhbHVlLlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYXMgc29vbiBhcyBhbnlcbiAqIGl0ZXJhdGVlIHJldHVybnMgYHRydWVgLCBvciBhZnRlciBhbGwgdGhlIGl0ZXJhdGVlIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLlxuICogUmVzdWx0IHdpbGwgYmUgZWl0aGVyIGB0cnVlYCBvciBgZmFsc2VgIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZSBhc3luY1xuICogdGVzdHMuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHQpLlxuICovXG52YXIgc29tZVNlcmllcyA9IGRvTGltaXQoc29tZUxpbWl0LCAxKTtcblxuLyoqXG4gKiBTb3J0cyBhIGxpc3QgYnkgdGhlIHJlc3VsdHMgb2YgcnVubmluZyBlYWNoIGBjb2xsYCB2YWx1ZSB0aHJvdWdoIGFuIGFzeW5jXG4gKiBgaXRlcmF0ZWVgLlxuICpcbiAqIEBuYW1lIHNvcnRCeVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW5cbiAqIGBjb2xsYC5cbiAqIFRoZSBpdGVyYXRlZSBzaG91bGQgY29tcGxldGUgd2l0aCBhIHZhbHVlIHRvIHVzZSBhcyB0aGUgc29ydCBjcml0ZXJpYSBhc1xuICogaXRzIGByZXN1bHRgLlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gUmVzdWx0cyBpcyB0aGUgaXRlbXNcbiAqIGZyb20gdGhlIG9yaWdpbmFsIGBjb2xsYCBzb3J0ZWQgYnkgdGhlIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgYGl0ZXJhdGVlYFxuICogY2FsbHMuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMuc29ydEJ5KFsnZmlsZTEnLCdmaWxlMicsJ2ZpbGUzJ10sIGZ1bmN0aW9uKGZpbGUsIGNhbGxiYWNrKSB7XG4gKiAgICAgZnMuc3RhdChmaWxlLCBmdW5jdGlvbihlcnIsIHN0YXRzKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKGVyciwgc3RhdHMubXRpbWUpO1xuICogICAgIH0pO1xuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgLy8gcmVzdWx0cyBpcyBub3cgdGhlIG9yaWdpbmFsIGFycmF5IG9mIGZpbGVzIHNvcnRlZCBieVxuICogICAgIC8vIG1vZGlmaWVkIGRhdGVcbiAqIH0pO1xuICpcbiAqIC8vIEJ5IG1vZGlmeWluZyB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyIHRoZVxuICogLy8gc29ydGluZyBvcmRlciBjYW4gYmUgaW5mbHVlbmNlZDpcbiAqXG4gKiAvLyBhc2NlbmRpbmcgb3JkZXJcbiAqIGFzeW5jLnNvcnRCeShbMSw5LDMsNV0sIGZ1bmN0aW9uKHgsIGNhbGxiYWNrKSB7XG4gKiAgICAgY2FsbGJhY2sobnVsbCwgeCk7XG4gKiB9LCBmdW5jdGlvbihlcnIscmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IGNhbGxiYWNrXG4gKiB9KTtcbiAqXG4gKiAvLyBkZXNjZW5kaW5nIG9yZGVyXG4gKiBhc3luYy5zb3J0QnkoWzEsOSwzLDVdLCBmdW5jdGlvbih4LCBjYWxsYmFjaykge1xuICogICAgIGNhbGxiYWNrKG51bGwsIHgqLTEpOyAgICAvLzwtIHgqLTEgaW5zdGVhZCBvZiB4LCB0dXJucyB0aGUgb3JkZXIgYXJvdW5kXG4gKiB9LCBmdW5jdGlvbihlcnIscmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IGNhbGxiYWNrXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gc29ydEJ5KGNvbGwsIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgIHZhciBfaXRlcmF0ZWUgPSB3cmFwQXN5bmMkMShpdGVyYXRlZSk7XG4gICAgbWFwKGNvbGwsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICBfaXRlcmF0ZWUoeCwgZnVuY3Rpb24gKGVyciwgY3JpdGVyaWEpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgeyB2YWx1ZTogeCwgY3JpdGVyaWE6IGNyaXRlcmlhIH0pO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICBjYWxsYmFjayhudWxsLCBhcnJheU1hcChyZXN1bHRzLnNvcnQoY29tcGFyYXRvciksIGJhc2VQcm9wZXJ0eSgndmFsdWUnKSkpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY29tcGFyYXRvcihsZWZ0LCByaWdodCkge1xuICAgICAgICB2YXIgYSA9IGxlZnQuY3JpdGVyaWEsXG4gICAgICAgICAgICBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgICB9XG59XG5cbi8qKlxuICogU2V0cyBhIHRpbWUgbGltaXQgb24gYW4gYXN5bmNocm9ub3VzIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gZG9lcyBub3QgY2FsbFxuICogaXRzIGNhbGxiYWNrIHdpdGhpbiB0aGUgc3BlY2lmaWVkIG1pbGxpc2Vjb25kcywgaXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhXG4gKiB0aW1lb3V0IGVycm9yLiBUaGUgY29kZSBwcm9wZXJ0eSBmb3IgdGhlIGVycm9yIG9iamVjdCB3aWxsIGJlIGAnRVRJTUVET1VUJ2AuXG4gKlxuICogQG5hbWUgdGltZW91dFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpVdGlsc1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gYXN5bmNGbiAtIFRoZSBhc3luYyBmdW5jdGlvbiB0byBsaW1pdCBpbiB0aW1lLlxuICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIFRoZSBzcGVjaWZpZWQgdGltZSBsaW1pdC5cbiAqIEBwYXJhbSB7Kn0gW2luZm9dIC0gQW55IHZhcmlhYmxlIHlvdSB3YW50IGF0dGFjaGVkIChgc3RyaW5nYCwgYG9iamVjdGAsIGV0YylcbiAqIHRvIHRpbWVvdXQgRXJyb3IgZm9yIG1vcmUgaW5mb3JtYXRpb24uLlxuICogQHJldHVybnMge0FzeW5jRnVuY3Rpb259IFJldHVybnMgYSB3cmFwcGVkIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBhbnlcbiAqIG9mIHRoZSBjb250cm9sIGZsb3cgZnVuY3Rpb25zLlxuICogSW52b2tlIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzIGFzIHlvdSB3b3VsZCBgYXN5bmNGdW5jYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gbXlGdW5jdGlvbihmb28sIGNhbGxiYWNrKSB7XG4gKiAgICAgZG9Bc3luY1Rhc2soZm9vLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAqICAgICAgICAgLy8gaGFuZGxlIGVycm9yc1xuICogICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAqXG4gKiAgICAgICAgIC8vIGRvIHNvbWUgc3R1ZmYgLi4uXG4gKlxuICogICAgICAgICAvLyByZXR1cm4gcHJvY2Vzc2VkIGRhdGFcbiAqICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICogICAgIH0pO1xuICogfVxuICpcbiAqIHZhciB3cmFwcGVkID0gYXN5bmMudGltZW91dChteUZ1bmN0aW9uLCAxMDAwKTtcbiAqXG4gKiAvLyBjYWxsIGB3cmFwcGVkYCBhcyB5b3Ugd291bGQgYG15RnVuY3Rpb25gXG4gKiB3cmFwcGVkKHsgYmFyOiAnYmFyJyB9LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAqICAgICAvLyBpZiBgbXlGdW5jdGlvbmAgdGFrZXMgPCAxMDAwIG1zIHRvIGV4ZWN1dGUsIGBlcnJgXG4gKiAgICAgLy8gYW5kIGBkYXRhYCB3aWxsIGhhdmUgdGhlaXIgZXhwZWN0ZWQgdmFsdWVzXG4gKlxuICogICAgIC8vIGVsc2UgYGVycmAgd2lsbCBiZSBhbiBFcnJvciB3aXRoIHRoZSBjb2RlICdFVElNRURPVVQnXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gdGltZW91dChhc3luY0ZuLCBtaWxsaXNlY29uZHMsIGluZm8pIHtcbiAgICB2YXIgb3JpZ2luYWxDYWxsYmFjaywgdGltZXI7XG4gICAgdmFyIHRpbWVkT3V0ID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBpbmplY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAoIXRpbWVkT3V0KSB7XG4gICAgICAgICAgICBvcmlnaW5hbENhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgbmFtZSA9IGFzeW5jRm4ubmFtZSB8fCAnYW5vbnltb3VzJztcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdDYWxsYmFjayBmdW5jdGlvbiBcIicgKyBuYW1lICsgJ1wiIHRpbWVkIG91dC4nKTtcbiAgICAgICAgZXJyb3IuY29kZSA9ICdFVElNRURPVVQnO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgZXJyb3IuaW5mbyA9IGluZm87XG4gICAgICAgIH1cbiAgICAgICAgdGltZWRPdXQgPSB0cnVlO1xuICAgICAgICBvcmlnaW5hbENhbGxiYWNrKGVycm9yKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSB3cmFwQXN5bmMkMShhc3luY0ZuKTtcblxuICAgIHJldHVybiBpbml0aWFsUGFyYW1zKGZ1bmN0aW9uIChhcmdzLCBvcmlnQ2FsbGJhY2spIHtcbiAgICAgICAgb3JpZ2luYWxDYWxsYmFjayA9IG9yaWdDYWxsYmFjaztcbiAgICAgICAgLy8gc2V0dXAgdGltZXIgYW5kIGNhbGwgb3JpZ2luYWwgZnVuY3Rpb25cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHRpbWVvdXRDYWxsYmFjaywgbWlsbGlzZWNvbmRzKTtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoaW5qZWN0ZWRDYWxsYmFjaykpO1xuICAgIH0pO1xufVxuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlQ2VpbCA9IE1hdGguY2VpbDtcbnZhciBuYXRpdmVNYXgkMSA9IE1hdGgubWF4O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJhbmdlYCBhbmQgYF8ucmFuZ2VSaWdodGAgd2hpY2ggZG9lc24ndFxuICogY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBlbmQgb2YgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0ZXAgVGhlIHZhbHVlIHRvIGluY3JlbWVudCBvciBkZWNyZW1lbnQgYnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcmFuZ2Ugb2YgbnVtYmVycy5cbiAqL1xuZnVuY3Rpb24gYmFzZVJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXAsIGZyb21SaWdodCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heCQxKG5hdGl2ZUNlaWwoKGVuZCAtIHN0YXJ0KSAvIChzdGVwIHx8IDEpKSwgMCksXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHJlc3VsdFtmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XSA9IHN0YXJ0O1xuICAgIHN0YXJ0ICs9IHN0ZXA7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbdGltZXNde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy50aW1lc30gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhXG4gKiB0aW1lLlxuICpcbiAqIEBuYW1lIHRpbWVzTGltaXRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLnRpbWVzXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cudGltZXN9XG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJ1biB0aGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gVGhlIGFzeW5jIGZ1bmN0aW9uIHRvIGNhbGwgYG5gIHRpbWVzLlxuICogSW52b2tlZCB3aXRoIHRoZSBpdGVyYXRpb24gaW5kZXggYW5kIGEgY2FsbGJhY2s6IChuLCBuZXh0KS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gc2VlIFthc3luYy5tYXBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5tYXB9LlxuICovXG5mdW5jdGlvbiB0aW1lTGltaXQoY291bnQsIGxpbWl0LCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgdmFyIF9pdGVyYXRlZSA9IHdyYXBBc3luYyQxKGl0ZXJhdGVlKTtcbiAgbWFwTGltaXQoYmFzZVJhbmdlKDAsIGNvdW50LCAxKSwgbGltaXQsIF9pdGVyYXRlZSwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIENhbGxzIHRoZSBgaXRlcmF0ZWVgIGZ1bmN0aW9uIGBuYCB0aW1lcywgYW5kIGFjY3VtdWxhdGVzIHJlc3VsdHMgaW4gdGhlIHNhbWVcbiAqIG1hbm5lciB5b3Ugd291bGQgdXNlIHdpdGggW21hcF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcH0uXG4gKlxuICogQG5hbWUgdGltZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLm1hcF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcH1cbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0byBydW4gdGhlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIFRoZSBhc3luYyBmdW5jdGlvbiB0byBjYWxsIGBuYCB0aW1lcy5cbiAqIEludm9rZWQgd2l0aCB0aGUgaXRlcmF0aW9uIGluZGV4IGFuZCBhIGNhbGxiYWNrOiAobiwgbmV4dCkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIHNlZSB7QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcH0uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIFByZXRlbmQgdGhpcyBpcyBzb21lIGNvbXBsaWNhdGVkIGFzeW5jIGZhY3RvcnlcbiAqIHZhciBjcmVhdGVVc2VyID0gZnVuY3Rpb24oaWQsIGNhbGxiYWNrKSB7XG4gKiAgICAgY2FsbGJhY2sobnVsbCwge1xuICogICAgICAgICBpZDogJ3VzZXInICsgaWRcbiAqICAgICB9KTtcbiAqIH07XG4gKlxuICogLy8gZ2VuZXJhdGUgNSB1c2Vyc1xuICogYXN5bmMudGltZXMoNSwgZnVuY3Rpb24obiwgbmV4dCkge1xuICogICAgIGNyZWF0ZVVzZXIobiwgZnVuY3Rpb24oZXJyLCB1c2VyKSB7XG4gKiAgICAgICAgIG5leHQoZXJyLCB1c2VyKTtcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uKGVyciwgdXNlcnMpIHtcbiAqICAgICAvLyB3ZSBzaG91bGQgbm93IGhhdmUgNSB1c2Vyc1xuICogfSk7XG4gKi9cbnZhciB0aW1lcyA9IGRvTGltaXQodGltZUxpbWl0LCBJbmZpbml0eSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW3RpbWVzXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cudGltZXN9IGJ1dCBydW5zIG9ubHkgYSBzaW5nbGUgYXN5bmMgb3BlcmF0aW9uIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSB0aW1lc1Nlcmllc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMudGltZXNde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy50aW1lc31cbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0byBydW4gdGhlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIFRoZSBhc3luYyBmdW5jdGlvbiB0byBjYWxsIGBuYCB0aW1lcy5cbiAqIEludm9rZWQgd2l0aCB0aGUgaXRlcmF0aW9uIGluZGV4IGFuZCBhIGNhbGxiYWNrOiAobiwgbmV4dCkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIHNlZSB7QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcH0uXG4gKi9cbnZhciB0aW1lc1NlcmllcyA9IGRvTGltaXQodGltZUxpbWl0LCAxKTtcblxuLyoqXG4gKiBBIHJlbGF0aXZlIG9mIGByZWR1Y2VgLiAgVGFrZXMgYW4gT2JqZWN0IG9yIEFycmF5LCBhbmQgaXRlcmF0ZXMgb3ZlciBlYWNoXG4gKiBlbGVtZW50IGluIHNlcmllcywgZWFjaCBzdGVwIHBvdGVudGlhbGx5IG11dGF0aW5nIGFuIGBhY2N1bXVsYXRvcmAgdmFsdWUuXG4gKiBUaGUgdHlwZSBvZiB0aGUgYWNjdW11bGF0b3IgZGVmYXVsdHMgdG8gdGhlIHR5cGUgb2YgY29sbGVjdGlvbiBwYXNzZWQgaW4uXG4gKlxuICogQG5hbWUgdHJhbnNmb3JtXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIC0gVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHRyYW5zZm9ybS4gIElmIG9taXR0ZWQsXG4gKiBpdCB3aWxsIGRlZmF1bHQgdG8gYW4gZW1wdHkgT2JqZWN0IG9yIEFycmF5LCBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgYGNvbGxgXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQSBmdW5jdGlvbiBhcHBsaWVkIHRvIGVhY2ggaXRlbSBpbiB0aGVcbiAqIGNvbGxlY3Rpb24gdGhhdCBwb3RlbnRpYWxseSBtb2RpZmllcyB0aGUgYWNjdW11bGF0b3IuXG4gKiBJbnZva2VkIHdpdGggKGFjY3VtdWxhdG9yLCBpdGVtLCBrZXksIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBSZXN1bHQgaXMgdGhlIHRyYW5zZm9ybWVkIGFjY3VtdWxhdG9yLlxuICogSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLnRyYW5zZm9ybShbMSwyLDNdLCBmdW5jdGlvbihhY2MsIGl0ZW0sIGluZGV4LCBjYWxsYmFjaykge1xuICogICAgIC8vIHBvaW50bGVzcyBhc3luYzpcbiAqICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICogICAgICAgICBhY2MucHVzaChpdGVtICogMilcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbClcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IGlzIG5vdyBlcXVhbCB0byBbMiwgNCwgNl1cbiAqIH0pO1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMudHJhbnNmb3JtKHthOiAxLCBiOiAyLCBjOiAzfSwgZnVuY3Rpb24gKG9iaiwgdmFsLCBrZXksIGNhbGxiYWNrKSB7XG4gKiAgICAgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAqICAgICAgICAgb2JqW2tleV0gPSB2YWwgKiAyO1xuICogICAgICAgICBjYWxsYmFjaygpO1xuICogICAgIH0pXG4gKiB9LCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyByZXN1bHQgaXMgZXF1YWwgdG8ge2E6IDIsIGI6IDQsIGM6IDZ9XG4gKiB9KVxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm0oY29sbCwgYWNjdW11bGF0b3IsIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDMpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBpdGVyYXRlZTtcbiAgICAgICAgaXRlcmF0ZWUgPSBhY2N1bXVsYXRvcjtcbiAgICAgICAgYWNjdW11bGF0b3IgPSBpc0FycmF5KGNvbGwpID8gW10gOiB7fTtcbiAgICB9XG4gICAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgIHZhciBfaXRlcmF0ZWUgPSB3cmFwQXN5bmMkMShpdGVyYXRlZSk7XG5cbiAgICBlYWNoT2YoY29sbCwgZnVuY3Rpb24gKHYsIGssIGNiKSB7XG4gICAgICAgIF9pdGVyYXRlZShhY2N1bXVsYXRvciwgdiwgaywgY2IpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyLCBhY2N1bXVsYXRvcik7XG4gICAgfSk7XG59XG5cbi8qKlxuICogVW5kb2VzIGEgW21lbW9pemVde0BsaW5rIG1vZHVsZTpVdGlscy5tZW1vaXplfWQgZnVuY3Rpb24sIHJldmVydGluZyBpdCB0byB0aGUgb3JpZ2luYWwsXG4gKiB1bm1lbW9pemVkIGZvcm0uIEhhbmR5IGZvciB0ZXN0aW5nLlxuICpcbiAqIEBuYW1lIHVubWVtb2l6ZVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpVdGlsc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMubWVtb2l6ZV17QGxpbmsgbW9kdWxlOlV0aWxzLm1lbW9pemV9XG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmbiAtIHRoZSBtZW1vaXplZCBmdW5jdGlvblxuICogQHJldHVybnMge0FzeW5jRnVuY3Rpb259IGEgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgb3JpZ2luYWwgdW5tZW1vaXplZCBmdW5jdGlvblxuICovXG5mdW5jdGlvbiB1bm1lbW9pemUoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGZuLnVubWVtb2l6ZWQgfHwgZm4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBSZXBlYXRlZGx5IGNhbGwgYGl0ZXJhdGVlYCwgd2hpbGUgYHRlc3RgIHJldHVybnMgYHRydWVgLiBDYWxscyBgY2FsbGJhY2tgIHdoZW5cbiAqIHN0b3BwZWQsIG9yIGFuIGVycm9yIG9jY3Vycy5cbiAqXG4gKiBAbmFtZSB3aGlsc3RcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRlc3QgLSBzeW5jaHJvbm91cyB0cnV0aCB0ZXN0IHRvIHBlcmZvcm0gYmVmb3JlIGVhY2hcbiAqIGV4ZWN1dGlvbiBvZiBgaXRlcmF0ZWVgLiBJbnZva2VkIHdpdGggKCkuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGVhY2ggdGltZVxuICogYHRlc3RgIHBhc3Nlcy4gSW52b2tlZCB3aXRoIChjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHRlc3RcbiAqIGZ1bmN0aW9uIGhhcyBmYWlsZWQgYW5kIHJlcGVhdGVkIGV4ZWN1dGlvbiBvZiBgaXRlcmF0ZWVgIGhhcyBzdG9wcGVkLiBgY2FsbGJhY2tgXG4gKiB3aWxsIGJlIHBhc3NlZCBhbiBlcnJvciBhbmQgYW55IGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIGZpbmFsIGBpdGVyYXRlZWAnc1xuICogY2FsbGJhY2suIEludm9rZWQgd2l0aCAoZXJyLCBbcmVzdWx0c10pO1xuICogQHJldHVybnMgdW5kZWZpbmVkXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBjb3VudCA9IDA7XG4gKiBhc3luYy53aGlsc3QoXG4gKiAgICAgZnVuY3Rpb24oKSB7IHJldHVybiBjb3VudCA8IDU7IH0sXG4gKiAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgY291bnQrKztcbiAqICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGNvdW50KTtcbiAqICAgICAgICAgfSwgMTAwMCk7XG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbiAoZXJyLCBuKSB7XG4gKiAgICAgICAgIC8vIDUgc2Vjb25kcyBoYXZlIHBhc3NlZCwgbiA9IDVcbiAqICAgICB9XG4gKiApO1xuICovXG5mdW5jdGlvbiB3aGlsc3QodGVzdCwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBvbmx5T25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICB2YXIgX2l0ZXJhdGVlID0gd3JhcEFzeW5jJDEoaXRlcmF0ZWUpO1xuICAgIGlmICghdGVzdCgpKSByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgdmFyIG5leHQgPSByZXN0KGZ1bmN0aW9uIChlcnIsIGFyZ3MpIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIGlmICh0ZXN0KCkpIHJldHVybiBfaXRlcmF0ZWUobmV4dCk7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoYXJncykpO1xuICAgIH0pO1xuICAgIF9pdGVyYXRlZShuZXh0KTtcbn1cblxuLyoqXG4gKiBSZXBlYXRlZGx5IGNhbGwgYGl0ZXJhdGVlYCB1bnRpbCBgdGVzdGAgcmV0dXJucyBgdHJ1ZWAuIENhbGxzIGBjYWxsYmFja2Agd2hlblxuICogc3RvcHBlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBgY2FsbGJhY2tgIHdpbGwgYmUgcGFzc2VkIGFuIGVycm9yIGFuZCBhbnlcbiAqIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIGZpbmFsIGBpdGVyYXRlZWAncyBjYWxsYmFjay5cbiAqXG4gKiBUaGUgaW52ZXJzZSBvZiBbd2hpbHN0XXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cud2hpbHN0fS5cbiAqXG4gKiBAbmFtZSB1bnRpbFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMud2hpbHN0XXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cud2hpbHN0fVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtGdW5jdGlvbn0gdGVzdCAtIHN5bmNocm9ub3VzIHRydXRoIHRlc3QgdG8gcGVyZm9ybSBiZWZvcmUgZWFjaFxuICogZXhlY3V0aW9uIG9mIGBpdGVyYXRlZWAuIEludm9rZWQgd2l0aCAoKS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZWFjaCB0aW1lXG4gKiBgdGVzdGAgZmFpbHMuIEludm9rZWQgd2l0aCAoY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHRoZSB0ZXN0XG4gKiBmdW5jdGlvbiBoYXMgcGFzc2VkIGFuZCByZXBlYXRlZCBleGVjdXRpb24gb2YgYGl0ZXJhdGVlYCBoYXMgc3RvcHBlZC4gYGNhbGxiYWNrYFxuICogd2lsbCBiZSBwYXNzZWQgYW4gZXJyb3IgYW5kIGFueSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBmaW5hbCBgaXRlcmF0ZWVgJ3NcbiAqIGNhbGxiYWNrLiBJbnZva2VkIHdpdGggKGVyciwgW3Jlc3VsdHNdKTtcbiAqL1xuZnVuY3Rpb24gdW50aWwodGVzdCwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgd2hpbHN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICF0ZXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSwgaXRlcmF0ZWUsIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBSdW5zIHRoZSBgdGFza3NgIGFycmF5IG9mIGZ1bmN0aW9ucyBpbiBzZXJpZXMsIGVhY2ggcGFzc2luZyB0aGVpciByZXN1bHRzIHRvXG4gKiB0aGUgbmV4dCBpbiB0aGUgYXJyYXkuIEhvd2V2ZXIsIGlmIGFueSBvZiB0aGUgYHRhc2tzYCBwYXNzIGFuIGVycm9yIHRvIHRoZWlyXG4gKiBvd24gY2FsbGJhY2ssIHRoZSBuZXh0IGZ1bmN0aW9uIGlzIG5vdCBleGVjdXRlZCwgYW5kIHRoZSBtYWluIGBjYWxsYmFja2AgaXNcbiAqIGltbWVkaWF0ZWx5IGNhbGxlZCB3aXRoIHRoZSBlcnJvci5cbiAqXG4gKiBAbmFtZSB3YXRlcmZhbGxcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7QXJyYXl9IHRhc2tzIC0gQW4gYXJyYXkgb2YgW2FzeW5jIGZ1bmN0aW9uc117QGxpbmsgQXN5bmNGdW5jdGlvbn1cbiAqIHRvIHJ1bi5cbiAqIEVhY2ggZnVuY3Rpb24gc2hvdWxkIGNvbXBsZXRlIHdpdGggYW55IG51bWJlciBvZiBgcmVzdWx0YCB2YWx1ZXMuXG4gKiBUaGUgYHJlc3VsdGAgdmFsdWVzIHdpbGwgYmUgcGFzc2VkIGFzIGFyZ3VtZW50cywgaW4gb3JkZXIsIHRvIHRoZSBuZXh0IHRhc2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gcnVuIG9uY2UgYWxsIHRoZVxuICogZnVuY3Rpb25zIGhhdmUgY29tcGxldGVkLiBUaGlzIHdpbGwgYmUgcGFzc2VkIHRoZSByZXN1bHRzIG9mIHRoZSBsYXN0IHRhc2snc1xuICogY2FsbGJhY2suIEludm9rZWQgd2l0aCAoZXJyLCBbcmVzdWx0c10pLlxuICogQHJldHVybnMgdW5kZWZpbmVkXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLndhdGVyZmFsbChbXG4gKiAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ29uZScsICd0d28nKTtcbiAqICAgICB9LFxuICogICAgIGZ1bmN0aW9uKGFyZzEsIGFyZzIsIGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGFyZzEgbm93IGVxdWFscyAnb25lJyBhbmQgYXJnMiBub3cgZXF1YWxzICd0d28nXG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICd0aHJlZScpO1xuICogICAgIH0sXG4gKiAgICAgZnVuY3Rpb24oYXJnMSwgY2FsbGJhY2spIHtcbiAqICAgICAgICAgLy8gYXJnMSBub3cgZXF1YWxzICd0aHJlZSdcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ2RvbmUnKTtcbiAqICAgICB9XG4gKiBdLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyByZXN1bHQgbm93IGVxdWFscyAnZG9uZSdcbiAqIH0pO1xuICpcbiAqIC8vIE9yLCB3aXRoIG5hbWVkIGZ1bmN0aW9uczpcbiAqIGFzeW5jLndhdGVyZmFsbChbXG4gKiAgICAgbXlGaXJzdEZ1bmN0aW9uLFxuICogICAgIG15U2Vjb25kRnVuY3Rpb24sXG4gKiAgICAgbXlMYXN0RnVuY3Rpb24sXG4gKiBdLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyByZXN1bHQgbm93IGVxdWFscyAnZG9uZSdcbiAqIH0pO1xuICogZnVuY3Rpb24gbXlGaXJzdEZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgY2FsbGJhY2sobnVsbCwgJ29uZScsICd0d28nKTtcbiAqIH1cbiAqIGZ1bmN0aW9uIG15U2Vjb25kRnVuY3Rpb24oYXJnMSwgYXJnMiwgY2FsbGJhY2spIHtcbiAqICAgICAvLyBhcmcxIG5vdyBlcXVhbHMgJ29uZScgYW5kIGFyZzIgbm93IGVxdWFscyAndHdvJ1xuICogICAgIGNhbGxiYWNrKG51bGwsICd0aHJlZScpO1xuICogfVxuICogZnVuY3Rpb24gbXlMYXN0RnVuY3Rpb24oYXJnMSwgY2FsbGJhY2spIHtcbiAqICAgICAvLyBhcmcxIG5vdyBlcXVhbHMgJ3RocmVlJ1xuICogICAgIGNhbGxiYWNrKG51bGwsICdkb25lJyk7XG4gKiB9XG4gKi9cbnZhciB3YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgIGlmICghaXNBcnJheSh0YXNrcykpIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIHdhdGVyZmFsbCBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpKTtcbiAgICBpZiAoIXRhc2tzLmxlbmd0aCkgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgdmFyIHRhc2tJbmRleCA9IDA7XG5cbiAgICBmdW5jdGlvbiBuZXh0VGFzayhhcmdzKSB7XG4gICAgICAgIGlmICh0YXNrSW5kZXggPT09IHRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhc2tDYWxsYmFjayA9IG9ubHlPbmNlKHJlc3QoZnVuY3Rpb24gKGVyciwgYXJncykge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBbZXJyXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dFRhc2soYXJncyk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBhcmdzLnB1c2godGFza0NhbGxiYWNrKTtcblxuICAgICAgICB2YXIgdGFzayA9IHdyYXBBc3luYyQxKHRhc2tzW3Rhc2tJbmRleCsrXSk7XG4gICAgICAgIHRhc2suYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuXG4gICAgbmV4dFRhc2soW10pO1xufTtcblxuLyoqXG4gKiBBbiBcImFzeW5jIGZ1bmN0aW9uXCIgaW4gdGhlIGNvbnRleHQgb2YgQXN5bmMgaXMgYW4gYXN5bmNocm9ub3VzIGZ1bmN0aW9uIHdpdGhcbiAqIGEgdmFyaWFibGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMsIHdpdGggdGhlIGZpbmFsIHBhcmFtZXRlciBiZWluZyBhIGNhbGxiYWNrLlxuICogKGBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgLi4uLCBjYWxsYmFjaykge31gKVxuICogVGhlIGZpbmFsIGNhbGxiYWNrIGlzIG9mIHRoZSBmb3JtIGBjYWxsYmFjayhlcnIsIHJlc3VsdHMuLi4pYCwgd2hpY2ggbXVzdCBiZVxuICogY2FsbGVkIG9uY2UgdGhlIGZ1bmN0aW9uIGlzIGNvbXBsZXRlZC4gIFRoZSBjYWxsYmFjayBzaG91bGQgYmUgY2FsbGVkIHdpdGggYVxuICogRXJyb3IgYXMgaXRzIGZpcnN0IGFyZ3VtZW50IHRvIHNpZ25hbCB0aGF0IGFuIGVycm9yIG9jY3VycmVkLlxuICogT3RoZXJ3aXNlLCBpZiBubyBlcnJvciBvY2N1cnJlZCwgaXQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIGBudWxsYCBhcyB0aGUgZmlyc3RcbiAqIGFyZ3VtZW50LCBhbmQgYW55IGFkZGl0aW9uYWwgYHJlc3VsdGAgYXJndW1lbnRzIHRoYXQgbWF5IGFwcGx5LCB0byBzaWduYWxcbiAqIHN1Y2Nlc3NmdWwgY29tcGxldGlvbi5cbiAqIFRoZSBjYWxsYmFjayBtdXN0IGJlIGNhbGxlZCBleGFjdGx5IG9uY2UsIGlkZWFsbHkgb24gYSBsYXRlciB0aWNrIG9mIHRoZVxuICogSmF2YVNjcmlwdCBldmVudCBsb29wLlxuICpcbiAqIFRoaXMgdHlwZSBvZiBmdW5jdGlvbiBpcyBhbHNvIHJlZmVycmVkIHRvIGFzIGEgXCJOb2RlLXN0eWxlIGFzeW5jIGZ1bmN0aW9uXCIsXG4gKiBvciBhIFwiY29udGludWF0aW9uIHBhc3Npbmctc3R5bGUgZnVuY3Rpb25cIiAoQ1BTKS4gTW9zdCBvZiB0aGUgbWV0aG9kcyBvZiB0aGlzXG4gKiBsaWJyYXJ5IGFyZSB0aGVtc2VsdmVzIENQUy9Ob2RlLXN0eWxlIGFzeW5jIGZ1bmN0aW9ucywgb3IgZnVuY3Rpb25zIHRoYXRcbiAqIHJldHVybiBDUFMvTm9kZS1zdHlsZSBhc3luYyBmdW5jdGlvbnMuXG4gKlxuICogV2hlcmV2ZXIgd2UgYWNjZXB0IGEgTm9kZS1zdHlsZSBhc3luYyBmdW5jdGlvbiwgd2UgYWxzbyBkaXJlY3RseSBhY2NlcHQgYW5cbiAqIFtFUzIwMTcgYGFzeW5jYCBmdW5jdGlvbl17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvU3RhdGVtZW50cy9hc3luY19mdW5jdGlvbn0uXG4gKiBJbiB0aGlzIGNhc2UsIHRoZSBgYXN5bmNgIGZ1bmN0aW9uIHdpbGwgbm90IGJlIHBhc3NlZCBhIGZpbmFsIGNhbGxiYWNrXG4gKiBhcmd1bWVudCwgYW5kIGFueSB0aHJvd24gZXJyb3Igd2lsbCBiZSB1c2VkIGFzIHRoZSBgZXJyYCBhcmd1bWVudCBvZiB0aGVcbiAqIGltcGxpY2l0IGNhbGxiYWNrLCBhbmQgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgdGhlIGByZXN1bHRgIHZhbHVlLlxuICogKGkuZS4gYSBgcmVqZWN0ZWRgIG9mIHRoZSByZXR1cm5lZCBQcm9taXNlIGJlY29tZXMgdGhlIGBlcnJgIGNhbGxiYWNrXG4gKiBhcmd1bWVudCwgYW5kIGEgYHJlc29sdmVkYCB2YWx1ZSBiZWNvbWVzIHRoZSBgcmVzdWx0YC4pXG4gKlxuICogTm90ZSwgZHVlIHRvIEphdmFTY3JpcHQgbGltaXRhdGlvbnMsIHdlIGNhbiBvbmx5IGRldGVjdCBuYXRpdmUgYGFzeW5jYFxuICogZnVuY3Rpb25zIGFuZCBub3QgdHJhbnNwaWxpZWQgaW1wbGVtZW50YXRpb25zLlxuICogWW91ciBlbnZpcm9ubWVudCBtdXN0IGhhdmUgYGFzeW5jYC9gYXdhaXRgIHN1cHBvcnQgZm9yIHRoaXMgdG8gd29yay5cbiAqIChlLmcuIE5vZGUgPiB2Ny42LCBvciBhIHJlY2VudCB2ZXJzaW9uIG9mIGEgbW9kZXJuIGJyb3dzZXIpLlxuICogSWYgeW91IGFyZSB1c2luZyBgYXN5bmNgIGZ1bmN0aW9ucyB0aHJvdWdoIGEgdHJhbnNwaWxlciAoZS5nLiBCYWJlbCksIHlvdVxuICogbXVzdCBzdGlsbCB3cmFwIHRoZSBmdW5jdGlvbiB3aXRoIFthc3luY2lmeV17QGxpbmsgbW9kdWxlOlV0aWxzLmFzeW5jaWZ5fSxcbiAqIGJlY2F1c2UgdGhlIGBhc3luYyBmdW5jdGlvbmAgd2lsbCBiZSBjb21waWxlZCB0byBhbiBvcmRpbmFyeSBmdW5jdGlvbiB0aGF0XG4gKiByZXR1cm5zIGEgcHJvbWlzZS5cbiAqXG4gKiBAdHlwZWRlZiB7RnVuY3Rpb259IEFzeW5jRnVuY3Rpb25cbiAqIEBzdGF0aWNcbiAqL1xuXG4vKipcbiAqIEFzeW5jIGlzIGEgdXRpbGl0eSBtb2R1bGUgd2hpY2ggcHJvdmlkZXMgc3RyYWlnaHQtZm9yd2FyZCwgcG93ZXJmdWwgZnVuY3Rpb25zXG4gKiBmb3Igd29ya2luZyB3aXRoIGFzeW5jaHJvbm91cyBKYXZhU2NyaXB0LiBBbHRob3VnaCBvcmlnaW5hbGx5IGRlc2lnbmVkIGZvclxuICogdXNlIHdpdGggW05vZGUuanNdKGh0dHA6Ly9ub2RlanMub3JnKSBhbmQgaW5zdGFsbGFibGUgdmlhXG4gKiBgbnBtIGluc3RhbGwgLS1zYXZlIGFzeW5jYCwgaXQgY2FuIGFsc28gYmUgdXNlZCBkaXJlY3RseSBpbiB0aGUgYnJvd3Nlci5cbiAqIEBtb2R1bGUgYXN5bmNcbiAqIEBzZWUgQXN5bmNGdW5jdGlvblxuICovXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGBhc3luY2AgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgY29sbGVjdGlvbnMsIHN1Y2ggYXNcbiAqIGFycmF5cyBhbmQgb2JqZWN0cy5cbiAqIEBtb2R1bGUgQ29sbGVjdGlvbnNcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBgYXN5bmNgIGZ1bmN0aW9ucyBmb3IgY29udHJvbGxpbmcgdGhlIGZsb3cgdGhyb3VnaCBhIHNjcmlwdC5cbiAqIEBtb2R1bGUgQ29udHJvbEZsb3dcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBgYXN5bmNgIHV0aWxpdHkgZnVuY3Rpb25zLlxuICogQG1vZHVsZSBVdGlsc1xuICovXG5cbnZhciBpbmRleCA9IHtcbiAgYXBwbHlFYWNoOiBhcHBseUVhY2gsXG4gIGFwcGx5RWFjaFNlcmllczogYXBwbHlFYWNoU2VyaWVzLFxuICBhcHBseTogYXBwbHkkMixcbiAgYXN5bmNpZnk6IGFzeW5jaWZ5LFxuICBhdXRvOiBhdXRvLFxuICBhdXRvSW5qZWN0OiBhdXRvSW5qZWN0LFxuICBjYXJnbzogY2FyZ28sXG4gIGNvbXBvc2U6IGNvbXBvc2UsXG4gIGNvbmNhdDogY29uY2F0LFxuICBjb25jYXRTZXJpZXM6IGNvbmNhdFNlcmllcyxcbiAgY29uc3RhbnQ6IGNvbnN0YW50LFxuICBkZXRlY3Q6IGRldGVjdCxcbiAgZGV0ZWN0TGltaXQ6IGRldGVjdExpbWl0LFxuICBkZXRlY3RTZXJpZXM6IGRldGVjdFNlcmllcyxcbiAgZGlyOiBkaXIsXG4gIGRvRHVyaW5nOiBkb0R1cmluZyxcbiAgZG9VbnRpbDogZG9VbnRpbCxcbiAgZG9XaGlsc3Q6IGRvV2hpbHN0LFxuICBkdXJpbmc6IGR1cmluZyxcbiAgZWFjaDogZWFjaExpbWl0LFxuICBlYWNoTGltaXQ6IGVhY2hMaW1pdCQxLFxuICBlYWNoT2Y6IGVhY2hPZixcbiAgZWFjaE9mTGltaXQ6IGVhY2hPZkxpbWl0LFxuICBlYWNoT2ZTZXJpZXM6IGVhY2hPZlNlcmllcyxcbiAgZWFjaFNlcmllczogZWFjaFNlcmllcyxcbiAgZW5zdXJlQXN5bmM6IGVuc3VyZUFzeW5jLFxuICBldmVyeTogZXZlcnksXG4gIGV2ZXJ5TGltaXQ6IGV2ZXJ5TGltaXQsXG4gIGV2ZXJ5U2VyaWVzOiBldmVyeVNlcmllcyxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGZpbHRlckxpbWl0OiBmaWx0ZXJMaW1pdCxcbiAgZmlsdGVyU2VyaWVzOiBmaWx0ZXJTZXJpZXMsXG4gIGZvcmV2ZXI6IGZvcmV2ZXIsXG4gIGdyb3VwQnk6IGdyb3VwQnksXG4gIGdyb3VwQnlMaW1pdDogZ3JvdXBCeUxpbWl0LFxuICBncm91cEJ5U2VyaWVzOiBncm91cEJ5U2VyaWVzLFxuICBsb2c6IGxvZyxcbiAgbWFwOiBtYXAsXG4gIG1hcExpbWl0OiBtYXBMaW1pdCxcbiAgbWFwU2VyaWVzOiBtYXBTZXJpZXMsXG4gIG1hcFZhbHVlczogbWFwVmFsdWVzLFxuICBtYXBWYWx1ZXNMaW1pdDogbWFwVmFsdWVzTGltaXQsXG4gIG1hcFZhbHVlc1NlcmllczogbWFwVmFsdWVzU2VyaWVzLFxuICBtZW1vaXplOiBtZW1vaXplLFxuICBuZXh0VGljazogbmV4dFRpY2ssXG4gIHBhcmFsbGVsOiBwYXJhbGxlbExpbWl0LFxuICBwYXJhbGxlbExpbWl0OiBwYXJhbGxlbExpbWl0JDEsXG4gIHByaW9yaXR5UXVldWU6IHByaW9yaXR5UXVldWUsXG4gIHF1ZXVlOiBxdWV1ZSQxLFxuICByYWNlOiByYWNlLFxuICByZWR1Y2U6IHJlZHVjZSxcbiAgcmVkdWNlUmlnaHQ6IHJlZHVjZVJpZ2h0LFxuICByZWZsZWN0OiByZWZsZWN0LFxuICByZWZsZWN0QWxsOiByZWZsZWN0QWxsLFxuICByZWplY3Q6IHJlamVjdCxcbiAgcmVqZWN0TGltaXQ6IHJlamVjdExpbWl0LFxuICByZWplY3RTZXJpZXM6IHJlamVjdFNlcmllcyxcbiAgcmV0cnk6IHJldHJ5LFxuICByZXRyeWFibGU6IHJldHJ5YWJsZSxcbiAgc2VxOiBzZXEkMSxcbiAgc2VyaWVzOiBzZXJpZXMsXG4gIHNldEltbWVkaWF0ZTogc2V0SW1tZWRpYXRlJDEsXG4gIHNvbWU6IHNvbWUsXG4gIHNvbWVMaW1pdDogc29tZUxpbWl0LFxuICBzb21lU2VyaWVzOiBzb21lU2VyaWVzLFxuICBzb3J0Qnk6IHNvcnRCeSxcbiAgdGltZW91dDogdGltZW91dCxcbiAgdGltZXM6IHRpbWVzLFxuICB0aW1lc0xpbWl0OiB0aW1lTGltaXQsXG4gIHRpbWVzU2VyaWVzOiB0aW1lc1NlcmllcyxcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIHVubWVtb2l6ZTogdW5tZW1vaXplLFxuICB1bnRpbDogdW50aWwsXG4gIHdhdGVyZmFsbDogd2F0ZXJmYWxsLFxuICB3aGlsc3Q6IHdoaWxzdCxcblxuICAvLyBhbGlhc2VzXG4gIGFsbDogZXZlcnksXG4gIGFueTogc29tZSxcbiAgZm9yRWFjaDogZWFjaExpbWl0LFxuICBmb3JFYWNoU2VyaWVzOiBlYWNoU2VyaWVzLFxuICBmb3JFYWNoTGltaXQ6IGVhY2hMaW1pdCQxLFxuICBmb3JFYWNoT2Y6IGVhY2hPZixcbiAgZm9yRWFjaE9mU2VyaWVzOiBlYWNoT2ZTZXJpZXMsXG4gIGZvckVhY2hPZkxpbWl0OiBlYWNoT2ZMaW1pdCxcbiAgaW5qZWN0OiByZWR1Y2UsXG4gIGZvbGRsOiByZWR1Y2UsXG4gIGZvbGRyOiByZWR1Y2VSaWdodCxcbiAgc2VsZWN0OiBmaWx0ZXIsXG4gIHNlbGVjdExpbWl0OiBmaWx0ZXJMaW1pdCxcbiAgc2VsZWN0U2VyaWVzOiBmaWx0ZXJTZXJpZXMsXG4gIHdyYXBTeW5jOiBhc3luY2lmeVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gaW5kZXg7XG5leHBvcnRzLmFwcGx5RWFjaCA9IGFwcGx5RWFjaDtcbmV4cG9ydHMuYXBwbHlFYWNoU2VyaWVzID0gYXBwbHlFYWNoU2VyaWVzO1xuZXhwb3J0cy5hcHBseSA9IGFwcGx5JDI7XG5leHBvcnRzLmFzeW5jaWZ5ID0gYXN5bmNpZnk7XG5leHBvcnRzLmF1dG8gPSBhdXRvO1xuZXhwb3J0cy5hdXRvSW5qZWN0ID0gYXV0b0luamVjdDtcbmV4cG9ydHMuY2FyZ28gPSBjYXJnbztcbmV4cG9ydHMuY29tcG9zZSA9IGNvbXBvc2U7XG5leHBvcnRzLmNvbmNhdCA9IGNvbmNhdDtcbmV4cG9ydHMuY29uY2F0U2VyaWVzID0gY29uY2F0U2VyaWVzO1xuZXhwb3J0cy5jb25zdGFudCA9IGNvbnN0YW50O1xuZXhwb3J0cy5kZXRlY3QgPSBkZXRlY3Q7XG5leHBvcnRzLmRldGVjdExpbWl0ID0gZGV0ZWN0TGltaXQ7XG5leHBvcnRzLmRldGVjdFNlcmllcyA9IGRldGVjdFNlcmllcztcbmV4cG9ydHMuZGlyID0gZGlyO1xuZXhwb3J0cy5kb0R1cmluZyA9IGRvRHVyaW5nO1xuZXhwb3J0cy5kb1VudGlsID0gZG9VbnRpbDtcbmV4cG9ydHMuZG9XaGlsc3QgPSBkb1doaWxzdDtcbmV4cG9ydHMuZHVyaW5nID0gZHVyaW5nO1xuZXhwb3J0cy5lYWNoID0gZWFjaExpbWl0O1xuZXhwb3J0cy5lYWNoTGltaXQgPSBlYWNoTGltaXQkMTtcbmV4cG9ydHMuZWFjaE9mID0gZWFjaE9mO1xuZXhwb3J0cy5lYWNoT2ZMaW1pdCA9IGVhY2hPZkxpbWl0O1xuZXhwb3J0cy5lYWNoT2ZTZXJpZXMgPSBlYWNoT2ZTZXJpZXM7XG5leHBvcnRzLmVhY2hTZXJpZXMgPSBlYWNoU2VyaWVzO1xuZXhwb3J0cy5lbnN1cmVBc3luYyA9IGVuc3VyZUFzeW5jO1xuZXhwb3J0cy5ldmVyeSA9IGV2ZXJ5O1xuZXhwb3J0cy5ldmVyeUxpbWl0ID0gZXZlcnlMaW1pdDtcbmV4cG9ydHMuZXZlcnlTZXJpZXMgPSBldmVyeVNlcmllcztcbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xuZXhwb3J0cy5maWx0ZXJMaW1pdCA9IGZpbHRlckxpbWl0O1xuZXhwb3J0cy5maWx0ZXJTZXJpZXMgPSBmaWx0ZXJTZXJpZXM7XG5leHBvcnRzLmZvcmV2ZXIgPSBmb3JldmVyO1xuZXhwb3J0cy5ncm91cEJ5ID0gZ3JvdXBCeTtcbmV4cG9ydHMuZ3JvdXBCeUxpbWl0ID0gZ3JvdXBCeUxpbWl0O1xuZXhwb3J0cy5ncm91cEJ5U2VyaWVzID0gZ3JvdXBCeVNlcmllcztcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5tYXAgPSBtYXA7XG5leHBvcnRzLm1hcExpbWl0ID0gbWFwTGltaXQ7XG5leHBvcnRzLm1hcFNlcmllcyA9IG1hcFNlcmllcztcbmV4cG9ydHMubWFwVmFsdWVzID0gbWFwVmFsdWVzO1xuZXhwb3J0cy5tYXBWYWx1ZXNMaW1pdCA9IG1hcFZhbHVlc0xpbWl0O1xuZXhwb3J0cy5tYXBWYWx1ZXNTZXJpZXMgPSBtYXBWYWx1ZXNTZXJpZXM7XG5leHBvcnRzLm1lbW9pemUgPSBtZW1vaXplO1xuZXhwb3J0cy5uZXh0VGljayA9IG5leHRUaWNrO1xuZXhwb3J0cy5wYXJhbGxlbCA9IHBhcmFsbGVsTGltaXQ7XG5leHBvcnRzLnBhcmFsbGVsTGltaXQgPSBwYXJhbGxlbExpbWl0JDE7XG5leHBvcnRzLnByaW9yaXR5UXVldWUgPSBwcmlvcml0eVF1ZXVlO1xuZXhwb3J0cy5xdWV1ZSA9IHF1ZXVlJDE7XG5leHBvcnRzLnJhY2UgPSByYWNlO1xuZXhwb3J0cy5yZWR1Y2UgPSByZWR1Y2U7XG5leHBvcnRzLnJlZHVjZVJpZ2h0ID0gcmVkdWNlUmlnaHQ7XG5leHBvcnRzLnJlZmxlY3QgPSByZWZsZWN0O1xuZXhwb3J0cy5yZWZsZWN0QWxsID0gcmVmbGVjdEFsbDtcbmV4cG9ydHMucmVqZWN0ID0gcmVqZWN0O1xuZXhwb3J0cy5yZWplY3RMaW1pdCA9IHJlamVjdExpbWl0O1xuZXhwb3J0cy5yZWplY3RTZXJpZXMgPSByZWplY3RTZXJpZXM7XG5leHBvcnRzLnJldHJ5ID0gcmV0cnk7XG5leHBvcnRzLnJldHJ5YWJsZSA9IHJldHJ5YWJsZTtcbmV4cG9ydHMuc2VxID0gc2VxJDE7XG5leHBvcnRzLnNlcmllcyA9IHNlcmllcztcbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlJDE7XG5leHBvcnRzLnNvbWUgPSBzb21lO1xuZXhwb3J0cy5zb21lTGltaXQgPSBzb21lTGltaXQ7XG5leHBvcnRzLnNvbWVTZXJpZXMgPSBzb21lU2VyaWVzO1xuZXhwb3J0cy5zb3J0QnkgPSBzb3J0Qnk7XG5leHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0O1xuZXhwb3J0cy50aW1lcyA9IHRpbWVzO1xuZXhwb3J0cy50aW1lc0xpbWl0ID0gdGltZUxpbWl0O1xuZXhwb3J0cy50aW1lc1NlcmllcyA9IHRpbWVzU2VyaWVzO1xuZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5leHBvcnRzLnVubWVtb2l6ZSA9IHVubWVtb2l6ZTtcbmV4cG9ydHMudW50aWwgPSB1bnRpbDtcbmV4cG9ydHMud2F0ZXJmYWxsID0gd2F0ZXJmYWxsO1xuZXhwb3J0cy53aGlsc3QgPSB3aGlsc3Q7XG5leHBvcnRzLmFsbCA9IGV2ZXJ5O1xuZXhwb3J0cy5hbGxMaW1pdCA9IGV2ZXJ5TGltaXQ7XG5leHBvcnRzLmFsbFNlcmllcyA9IGV2ZXJ5U2VyaWVzO1xuZXhwb3J0cy5hbnkgPSBzb21lO1xuZXhwb3J0cy5hbnlMaW1pdCA9IHNvbWVMaW1pdDtcbmV4cG9ydHMuYW55U2VyaWVzID0gc29tZVNlcmllcztcbmV4cG9ydHMuZmluZCA9IGRldGVjdDtcbmV4cG9ydHMuZmluZExpbWl0ID0gZGV0ZWN0TGltaXQ7XG5leHBvcnRzLmZpbmRTZXJpZXMgPSBkZXRlY3RTZXJpZXM7XG5leHBvcnRzLmZvckVhY2ggPSBlYWNoTGltaXQ7XG5leHBvcnRzLmZvckVhY2hTZXJpZXMgPSBlYWNoU2VyaWVzO1xuZXhwb3J0cy5mb3JFYWNoTGltaXQgPSBlYWNoTGltaXQkMTtcbmV4cG9ydHMuZm9yRWFjaE9mID0gZWFjaE9mO1xuZXhwb3J0cy5mb3JFYWNoT2ZTZXJpZXMgPSBlYWNoT2ZTZXJpZXM7XG5leHBvcnRzLmZvckVhY2hPZkxpbWl0ID0gZWFjaE9mTGltaXQ7XG5leHBvcnRzLmluamVjdCA9IHJlZHVjZTtcbmV4cG9ydHMuZm9sZGwgPSByZWR1Y2U7XG5leHBvcnRzLmZvbGRyID0gcmVkdWNlUmlnaHQ7XG5leHBvcnRzLnNlbGVjdCA9IGZpbHRlcjtcbmV4cG9ydHMuc2VsZWN0TGltaXQgPSBmaWx0ZXJMaW1pdDtcbmV4cG9ydHMuc2VsZWN0U2VyaWVzID0gZmlsdGVyU2VyaWVzO1xuZXhwb3J0cy53cmFwU3luYyA9IGFzeW5jaWZ5O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FzeW5jL2Rpc3QvYXN5bmMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2F4aW9zLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHRoaXMuZGVmYXVsdHMsIHsgbWV0aG9kOiAnZ2V0JyB9LCBjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvY29yZS9BeGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuIEAgQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjEuNFxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0dmFyIHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IGZhbHNlO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCAoY29udmVydGVyKSB7XG5cdFx0ZnVuY3Rpb24gYXBpIChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXcml0ZVxuXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0YXR0cmlidXRlcyA9IGV4dGVuZCh7XG5cdFx0XHRcdFx0cGF0aDogJy8nXG5cdFx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdGV4cGlyZXMuc2V0TWlsbGlzZWNvbmRzKGV4cGlyZXMuZ2V0TWlsbGlzZWNvbmRzKCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGV4cGlyZXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSdyZSB1c2luZyBcImV4cGlyZXNcIiBiZWNhdXNlIFwibWF4LWFnZVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0XHRpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdFx0aWYgKCFjb252ZXJ0ZXIud3JpdGUpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cblx0XHRcdFx0dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xuXG5cdFx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblx0XHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZWFkXG5cblx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC4gQWxzbyBwcmV2ZW50cyBvZGQgcmVzdWx0IHdoZW5cblx0XHRcdC8vIGNhbGxpbmcgXCJnZXQoKVwiXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIHJkZWNvZGUgPSAvKCVbMC05QS1aXXsyfSkrL2c7XG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cblx0XHRcdFx0aWYgKGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IHBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0XHRjb29raWUgPSBjb252ZXJ0ZXIucmVhZCA/XG5cdFx0XHRcdFx0XHRjb252ZXJ0ZXIucmVhZChjb29raWUsIG5hbWUpIDogY29udmVydGVyKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5qc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IGNvb2tpZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBjb29raWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBhcGk7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBhcGkuY2FsbChhcGksIGtleSk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBhcGkuYXBwbHkoe1xuXHRcdFx0XHRqc29uOiB0cnVlXG5cdFx0XHR9LCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXHRcdH07XG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0YXBpKGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS53aXRoQ29udmVydGVyID0gaW5pdDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vanMtY29va2llL3NyYy9qcy5jb29raWUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGNvZGUgd2FzIGV4dHJhY3RlZCBmcm9tOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG4gKi9cblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gSW52YWxpZENoYXJhY3RlckVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuSW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuSW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsIChpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KS5yZXBsYWNlKC89KyQvLCAnJyk7XG4gIGlmIChzdHIubGVuZ3RoICUgNCA9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRDaGFyYWN0ZXJFcnJvcihcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xuICB9XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXG4gICAgdmFyIGJjID0gMCwgYnMsIGJ1ZmZlciwgaWR4ID0gMCwgb3V0cHV0ID0gJyc7XG4gICAgLy8gZ2V0IG5leHQgY2hhcmFjdGVyXG4gICAgYnVmZmVyID0gc3RyLmNoYXJBdChpZHgrKyk7XG4gICAgLy8gY2hhcmFjdGVyIGZvdW5kIGluIHRhYmxlPyBpbml0aWFsaXplIGJpdCBzdG9yYWdlIGFuZCBhZGQgaXRzIGFzY2lpIHZhbHVlO1xuICAgIH5idWZmZXIgJiYgKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlcixcbiAgICAgIC8vIGFuZCBpZiBub3QgZmlyc3Qgb2YgZWFjaCA0IGNoYXJhY3RlcnMsXG4gICAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxuICAgICAgYmMrKyAlIDQpID8gb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgYnMgPj4gKC0yICogYmMgJiA2KSkgOiAwXG4gICkge1xuICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxuICAgIGJ1ZmZlciA9IGNoYXJzLmluZGV4T2YoYnVmZmVyKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmF0b2IgJiYgd2luZG93LmF0b2IuYmluZCh3aW5kb3cpIHx8IHBvbHlmaWxsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2p3dC1kZWNvZGUvbGliL2F0b2IuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhdG9iID0gcmVxdWlyZSgnLi9hdG9iJyk7XG5cbmZ1bmN0aW9uIGI2NERlY29kZVVuaWNvZGUoc3RyKSB7XG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoYXRvYihzdHIpLnJlcGxhY2UoLyguKS9nLCBmdW5jdGlvbiAobSwgcCkge1xuICAgIHZhciBjb2RlID0gcC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChjb2RlLmxlbmd0aCA8IDIpIHtcbiAgICAgIGNvZGUgPSAnMCcgKyBjb2RlO1xuICAgIH1cbiAgICByZXR1cm4gJyUnICsgY29kZTtcbiAgfSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgb3V0cHV0ID0gc3RyLnJlcGxhY2UoLy0vZywgXCIrXCIpLnJlcGxhY2UoL18vZywgXCIvXCIpO1xuICBzd2l0Y2ggKG91dHB1dC5sZW5ndGggJSA0KSB7XG4gICAgY2FzZSAwOlxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgb3V0cHV0ICs9IFwiPT1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG91dHB1dCArPSBcIj1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBcIklsbGVnYWwgYmFzZTY0dXJsIHN0cmluZyFcIjtcbiAgfVxuXG4gIHRyeXtcbiAgICByZXR1cm4gYjY0RGVjb2RlVW5pY29kZShvdXRwdXQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gYXRvYihvdXRwdXQpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2p3dC1kZWNvZGUvbGliL2Jhc2U2NF91cmxfZGVjb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYXNlNjRfdXJsX2RlY29kZSA9IHJlcXVpcmUoJy4vYmFzZTY0X3VybF9kZWNvZGUnKTtcblxuZnVuY3Rpb24gSW52YWxpZFRva2VuRXJyb3IobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5JbnZhbGlkVG9rZW5FcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbkludmFsaWRUb2tlbkVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRUb2tlbkVycm9yJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodG9rZW4sb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHRva2VuICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBJbnZhbGlkVG9rZW5FcnJvcignSW52YWxpZCB0b2tlbiBzcGVjaWZpZWQnKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcG9zID0gb3B0aW9ucy5oZWFkZXIgPT09IHRydWUgPyAwIDogMTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShiYXNlNjRfdXJsX2RlY29kZSh0b2tlbi5zcGxpdCgnLicpW3Bvc10pKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBJbnZhbGlkVG9rZW5FcnJvcignSW52YWxpZCB0b2tlbiBzcGVjaWZpZWQ6ICcgKyBlLm1lc3NhZ2UpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5JbnZhbGlkVG9rZW5FcnJvciA9IEludmFsaWRUb2tlbkVycm9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2p3dC1kZWNvZGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgb3ZlckFyZyBmcm9tICcuL19vdmVyQXJnLmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFByb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC1lcy9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gtZXMvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2xvYmFsWydQb2x5bWVyUmVkdXgnXSA9IGZhY3RvcnkoKTtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2FybmluZyA9ICdQb2x5bWVyIFJlZHV4OiA8JXM+LiVzIGhhcyBcIm5vdGlmeVwiIGVuYWJsZWQsIHR3by13YXkgYmluZGluZ3MgZ29lcyBhZ2FpbnN0IFJlZHV4XFwncyBwYXJhZGlnbSc7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHByb3BlcnR5IGJpbmRpbmdzIGZvdW5kIG9uIGEgZ2l2ZW4gRWxlbWVudC9CZWhhdmlvci5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxPYmplY3R9IG9iaiBFbGVtZW50IG9yIEJlaGF2aW9yLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgUG9seW1lciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdG9yZSBSZWR1eCBzdG9yZS5cbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZVBhdGhQcm9wZXJ0aWVzKG9iaiwgZWxlbWVudCwgc3RvcmUpIHtcbiAgICAgICAgdmFyIHByb3BzID0gW107XG5cbiAgICAgICAgaWYgKG9iai5wcm9wZXJ0aWVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iai5wcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IG9iai5wcm9wZXJ0aWVzW25hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wLmhhc093blByb3BlcnR5KCdzdGF0ZVBhdGgnKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgZmxhZywgd2FybiBhZ2FpbnN0IHR3by13YXkgYmluZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3Aubm90aWZ5ICYmICFwcm9wLnJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZywgZWxlbWVudC5pcywgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW1wdHkgc3RhdGVQYXRoIHJldHVybiBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogcHJvcC5zdGF0ZVBhdGggfHwgc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seTogcHJvcC5yZWFkT25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHByb3AudHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIGxpc3RlbmVyIGZvciBhIGdpdmUgUG9seW1lciBlbGVtZW50LiBUaGVcbiAgICAgKiByZXR1cm5pbmcgbGlzdGVuZXIgc2hvdWxkIGJlIHBhc3NlZCB0byBgc3RvcmUuc3Vic2NyaWJlYC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBQb2x5bWVyIGVsZW1lbnQuXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IFJlZHV4IHN1YmNyaWJlIGxpc3RlbmVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyKGVsZW1lbnQsIHN0b3JlKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGdldFN0YXRlUGF0aFByb3BlcnRpZXMoZWxlbWVudCwgZWxlbWVudCwgc3RvcmUpO1xuXG4gICAgICAgIC8vIGJlaGF2aW9yIHByb3BlcnR5IGJpbmRpbmdzXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQuYmVoYXZpb3JzKSkge1xuICAgICAgICAgICAgZWxlbWVudC5iZWhhdmlvcnMuZm9yRWFjaChmdW5jdGlvbihiZWhhdmlvcikge1xuICAgICAgICAgICAgICAgIHZhciBleHRyYXMgPSBnZXRTdGF0ZVBhdGhQcm9wZXJ0aWVzKGJlaGF2aW9yLCBlbGVtZW50LCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocHJvcHMsIGV4dHJhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGRlLWR1cGUgYmVoYXZpb3IgcHJvcHNcbiAgICAgICAgICAgIHZhciBuYW1lcyA9IHByb3BzLm1hcChmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3AubmFtZTsgLy8gZ3JhYiB0aGUgcHJvcCBuYW1lc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9wcyA9IHByb3BzLmZpbHRlcihmdW5jdGlvbihwcm9wLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVzLmluZGV4T2YocHJvcC5uYW1lKSA9PT0gaTsgLy8gaW5kaWNlcyBtdXN0IG1hdGNoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlZHV4IGxpc3RlbmVyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICBwcm9wcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHkubmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgc3BsaWNlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSwgcHJldmlvdXM7XG5cbiAgICAgICAgICAgICAgICAvLyBzdGF0ZVBhdGgsIGEgcGF0aCBvciBmdW5jdGlvbi5cbiAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IHByb3BlcnR5LnBhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXRoID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXRoLmNhbGwoZWxlbWVudCwgc3RhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gUG9seW1lci5CYXNlLmdldChwYXRoLCBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcHJldmVudCB1bm5lY2VzYXJ5IHBvbHltZXIgbm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgICAgIHByZXZpb3VzID0gZWxlbWVudC5nZXQocHJvcGVydHkubmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBwcmV2aW91cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdHlwZSBvZiBhcnJheSwgd29yayBvdXQgc3BsaWNlcyBiZWZvcmUgc2V0dGluZyB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkudHlwZSA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBbXTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMgPSBwcmV2aW91cyB8fCAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBbXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgdmFsdWUgdHlwZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8JysgZWxlbWVudC5pcyArJz4uJysgcHJvcE5hbWUgKycgdHlwZSBpcyBBcnJheSBidXQgZ2l2ZW46ICcgKyAodHlwZW9mIHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNwbGljZXMgPSBQb2x5bWVyLkFycmF5U3BsaWNlLmNhbGN1bGF0ZVNwbGljZXModmFsdWUsIHByZXZpb3VzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBzZXRcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkucmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5ub3RpZnlQYXRoKHByb3BOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXQocHJvcE5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBub3RpZnkgZWxlbWVudCBvZiBzcGxpY2VzXG4gICAgICAgICAgICAgICAgaWYgKHNwbGljZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubm90aWZ5U3BsaWNlcyhwcm9wTmFtZSwgc3BsaWNlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmZpcmUoJ3N0YXRlLWNoYW5nZWQnLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhbiBnaXZlbiBQb2x5bWVyIGVsZW1lbnQgdG8gYSBSZWR1eCBzdG9yZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBQb2x5bWVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0b3JlIFJlZHV4IHN0b3JlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGJpbmRSZWR1eExpc3RlbmVyKGVsZW1lbnQsIHN0b3JlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcjtcblxuICAgICAgICBpZiAoZWxlbWVudC5fcmVkdXhVbnN1YnNjcmliZSkgcmV0dXJuO1xuXG4gICAgICAgIGxpc3RlbmVyID0gY3JlYXRlTGlzdGVuZXIoZWxlbWVudCwgc3RvcmUpO1xuICAgICAgICBsaXN0ZW5lcigpOyAvLyBzdGFydCBiaW5kaW5nc1xuXG4gICAgICAgIGVsZW1lbnQuX3JlZHV4VW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgYSBQb2x5bWVyIGVsZW1lbnQgZnJvbSBhIFJlZHV4IHN0b3JlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gdW5iaW5kUmVkdXhMaXN0ZW5lcihlbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5fcmVkdXhVbnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZWxlbWVudC5fcmVkdXhVbnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuX3JlZHV4VW5zdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgbGlzdCBvZiBhY3Rpb24gY3JlYXRvcnMgZnJvbSBhIGdpdmVuIGVsZW1lbnQgYW5kIGl0J3MgaW5oZXJpdGVkXG4gICAgICogYmVoYXZpb3JzIHNldHRpbmcgdGhlIGxpc3Qgb250byB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBQb2x5bWVyIGVsZW1lbnQgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY29tcGlsZUFjdGlvbkNyZWF0b3JzKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSB7fTtcbiAgICAgICAgdmFyIGJlaGF2aW9ycyA9IGVsZW1lbnQuYmVoYXZpb3JzO1xuXG4gICAgICAgIGlmIChlbGVtZW50Ll9yZWR1eEFjdGlvbnMpIHJldHVybjtcblxuICAgICAgICAvLyBhZGQgYmVoYXZpb3IgYWN0aW9ucyBmaXJzdCwgaW4gcmV2ZXJzZSBvcmRlciBzbyB3ZSBrZWVwIHByaW9yaXR5XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGJlaGF2aW9ycykpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBiZWhhdmlvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBvYmplY3RBc3NpZ24oYWN0aW9ucywgYmVoYXZpb3JzW2ldLmFjdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZWxlbWVudCBhY3Rpb25zIGhhdmUgcHJpb3JpdHlcbiAgICAgICAgZWxlbWVudC5fcmVkdXhBY3Rpb25zID0gb2JqZWN0QXNzaWduKGFjdGlvbnMsIGVsZW1lbnQuYWN0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIFJlZHV4IGFjdGlvbiB2aWEgYSBQb2x5bWVyIGVsZW1lbnQuIFRoaXMgZ2l2ZXMgdGhlIGVsZW1lbnRcbiAgICAgKiBhIHBvbHltb3JwaGljIGRpc3BhdGNoIGZ1bmN0aW9uLiBTZWUgdGhlIHJlYWRtZSBmb3IgdGhlIHZhcmlvdXMgd2F5cyB0b1xuICAgICAqIGRpc3BhdGNoLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFBvbHltZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3RvcmUgUmVkdXggc3RvcmUuXG4gICAgICogQHBhcmFtIHtBcmd1bWVudHN9IGFyZ3MgVGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYGVsZW1lbnQuZGlzcGF0Y2hgLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNvbXB1dGVkIFJlZHV4IGFjdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaXNwYXRjaFJlZHV4QWN0aW9uKGVsZW1lbnQsIHN0b3JlLCBhcmdzKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYWN0aW9ucyA9IGVsZW1lbnQuX3JlZHV4QWN0aW9ucztcblxuICAgICAgICBhcmdzID0gY2FzdEFyZ3VtZW50c1RvQXJyYXkoYXJncyk7XG5cbiAgICAgICAgLy8gYWN0aW9uIG5hbWVcbiAgICAgICAgaWYgKGFjdGlvbnMgJiYgdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aW9uc1thY3Rpb25dICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUG9seW1lciBSZWR1eDogPCcgKyBlbGVtZW50LmlzICsgJz4gaGFzIG5vIGFjdGlvbiBcIicgKyBhY3Rpb24gKyAnXCInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXS5hcHBseShlbGVtZW50LCBhcmdzLnNsaWNlKDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICEhISBERVBSRUNJQVRFRCAhISFcbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIHJlbW92ZWQgYXMgb2YgMS4wLlxuXG4gICAgICAgIC8vIGFjdGlvbiBjcmVhdG9yXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nICYmIGFjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb24oKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS1cblxuICAgICAgICAvLyBtaWRkbGV3YXJlLCBtYWtlIHN1cmUgd2UgcGFzcyB0aGUgcG9seW1lci1yZWR1eCBkaXNwYXRjaFxuICAgICAgICAvLyBzbyB3ZSBoYXZlIGFjY2VzcyB0byB0aGUgZWxlbWVudHMgYWN0aW9uIGNyZWF0b3JzXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3YgPSBjYXN0QXJndW1lbnRzVG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgcmVkdXggZGlzcGF0Y2hcbiAgICAgICAgICAgICAgICBhcmd2LnNwbGljZSgwLCAxLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoUmVkdXhBY3Rpb24oZWxlbWVudCwgc3RvcmUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5hcHBseShlbGVtZW50LCBhcmd2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWN0aW9uXG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFR1cm5zIGFyZ3VtZW50cyBpbnRvIGFuIEFycmF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcmd1bWVudHN9IGFyZ3NcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYXN0QXJndW1lbnRzVG9BcnJheShhcmdzKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3QuYXNzaWduKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gWy4uLm9ial1cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gb2JqZWN0QXNzaWduKHRhcmdldCkge1xuICAgICAgICAvLyB1c2UgYnJvd3NlclxuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgICB2YXIgYXJnYyA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBvYmo7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmdjOyArK2kpIHtcbiAgICAgICAgICAgIG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChvYmosIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRba10gPSBvYmpba107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgUG9seW1lclJlZHV4IGJlaGF2aW9ycyBmcm9tIGEgZ2l2ZW4gUmVkdXggc3RvcmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3RvcmUgUmVkdXggc3RvcmUuXG4gICAgICogQHJldHVybiB7UG9seW1lclJlZHV4fVxuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbihzdG9yZSkge1xuICAgICAgICB2YXIgUG9seW1lclJlZHV4O1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBzdG9yZVxuICAgICAgICBpZiAoIXN0b3JlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtaXNzaW5nIHJlZHV4IHN0b3JlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYFBvbHltZXJSZWR1eGAgYmluZHMgYSBnaXZlbiBSZWR1eCBzdG9yZSdzIHN0YXRlIHRvIGltcGxlbWVudGluZyBFbGVtZW50cy5cbiAgICAgICAgICpcbiAgICAgICAgICogRnVsbCBkb2N1bWVudGF0aW9uIGF2YWlsYWJsZSwgaHR0cHM6Ly9naXRodWIuY29tL3R1ci1uci9wb2x5bWVyLXJlZHV4LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcG9seW1lckJlaGF2aW9yIFBvbHltZXJSZWR1eFxuICAgICAgICAgKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBQb2x5bWVyUmVkdXggPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpcmVkIHdoZW4gdGhlIFJlZHV4IHN0b3JlIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICAgKiBAZXZlbnQgc3RhdGUtY2hhbmdlZFxuICAgICAgICAgICAgICogQHBhcmFtIHsqfSBzdGF0ZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBiaW5kUmVkdXhMaXN0ZW5lcih0aGlzLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgY29tcGlsZUFjdGlvbkNyZWF0b3JzKHRoaXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJpbmRSZWR1eExpc3RlbmVyKHRoaXMsIHN0b3JlKTtcbiAgICAgICAgICAgICAgICBjb21waWxlQWN0aW9uQ3JlYXRvcnModGhpcyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdW5iaW5kUmVkdXhMaXN0ZW5lcih0aGlzKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24gdG8gdGhlIFJlZHV4IHN0b3JlLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdHxGdW5jdGlvbn0gYWN0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBhY3Rpb24gdGhhdCB3YXMgZGlzcGF0Y2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uKGFjdGlvbiAvKiwgWy4uLmFyZ3NdICovKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoUmVkdXhBY3Rpb24odGhpcywgc3RvcmUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldHMgdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIFJlZHV4IHN0b3JlLlxuICAgICAgICAgICAgICogQHJldHVybiB7Kn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcG9seW1lci1yZWR1eC9wb2x5bWVyLXJlZHV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgIHZhciBjaGFpbiA9IFtdO1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodW5kZWZpbmVkLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBpbnN0ZWFkIHJlY2VpdmVkICcgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgJy4gJyArICdEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiPycpO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhY3Rpb25DcmVhdG9ycyk7XG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4L2VzL2JpbmRBY3Rpb25DcmVhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiAnVGhlICcgKyBhcmd1bWVudE5hbWUgKyAnIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXCInICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyAnXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgJyArICgna2V5czogXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCInKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG5cbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAnVW5leHBlY3RlZCAnICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyAnICcgKyAoJ1wiJyArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiIGZvdW5kIGluICcgKyBhcmd1bWVudE5hbWUgKyAnLiAnKSArICdFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6ICcgKyAoJ1wiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTYW5pdHkocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiAnICsgJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnICsgJ2V4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgJyArICdub3QgYmUgdW5kZWZpbmVkLicpO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gJ0BAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05fJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogdHlwZSB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gJyArICgnRG9uXFwndCB0cnkgdG8gaGFuZGxlICcgKyBBY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZygnTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFwiJyArIGtleSArICdcIicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzYW5pdHlFcnJvcjtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2FuaXR5KGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2FuaXR5RXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoc2FuaXR5RXJyb3IpIHtcbiAgICAgIHRocm93IHNhbml0eUVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1trZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtrZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZVtrZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9lcy9jb21iaW5lUmVkdWNlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9jb21iaW5lUmVkdWNlcnMnO1xuaW1wb3J0IGJpbmRBY3Rpb25DcmVhdG9ycyBmcm9tICcuL2JpbmRBY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgYXBwbHlNaWRkbGV3YXJlIGZyb20gJy4vYXBwbHlNaWRkbGV3YXJlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYmluZEFjdGlvbkNyZWF0b3JzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wb255ZmlsbCA9IHJlcXVpcmUoJy4vcG9ueWZpbGwnKTtcblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb255ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMlsnZGVmYXVsdCddKShyb290KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc3VsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBheGlvcyBmcm9tICcuLi9heGlvcydcclxuaW1wb3J0IHsgY29tbW9uQWN0aW9uIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbGlzdDogW11cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcENvbm5lY3RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnQVBQX0NPTk5FQ1RfTElTVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBsaXN0OiBhY3Rpb24ucGF5bG9hZCB9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBDb25uZWN0QWN0aW9uKHN0b3JlKSB7XHJcblxyXG4gICAgcmV0dXJuIFtjb21tb25BY3Rpb24oKSxcclxuICAgIHtcclxuICAgICAgICBBUFBfQ09OTkVDVF9MSVNUOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBwcy9jb25uZWN0cy8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0FQUF9DT05ORUNUX0xJU1QnLCBwYXlsb2FkOiByZXMuZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnlsb25WaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBBUFBfQ09OTkVDVF9VUERBVEU6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLCB7IHN0YXR1czogJ2xvYWQnIH0pO1xyXG4gICAgICAgICAgICB2YXIgY29ubnM9W11cclxuICAgICAgICAgICAgZGF0YS5jb25uZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5zdGF0dXMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29ubnMucHVzaChjb25uLmlkKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRhdGEuY29ubmVjdGlvbnM9Y29ubnM7XHJcbiAgICAgICAgICAgIGF4aW9zLnB1dChgL2FwcHMvYXBwYCwgZGF0YSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BUFBfQ09OTkVDVF9MSVNUKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLCB0ZXh0OiAn4Lia4Lix4LiZ4LiX4Li24LiB4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy4kJCgncGFuZWwtcmlnaHQnKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXVxyXG5cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3NyYy9yZWR1eC1zdG9yZS9yZWR1Y2VyL2FwcENvbm5lY3QuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBheGlvcyBmcm9tICcuLi9heGlvcydcclxuaW1wb3J0IHtjb21tb25BY3Rpb259IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxpc3Q6W11cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBSb2xlUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pe1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdBUFBfUk9MRV9MSVNUJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sc3RhdGUse2xpc3Q6YWN0aW9uLnBheWxvYWR9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBSb2xlQWN0aW9uKHN0b3JlKXtcclxuXHJcbiAgICByZXR1cm4gW2NvbW1vbkFjdGlvbigpLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQVBQX1JPTEVfTElTVDpmdW5jdGlvbihpZCl7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYC9hcHBzL3JvbGVzLyR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5kYXRhLnJvbGUucHVzaChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonQVBQX1JPTEVfTElTVCcscGF5bG9hZDpyZXMuZGF0YX0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ueWxvblZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEFQUF9ST0xFX1VQREFURTpmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLHtzdGF0dXM6J2xvYWQnfSk7XHJcbiAgICAgICAgICAgICAgIC8vIGRhdGEuc2NvcGUgPSBkYXRhLnNjb3BlLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgLy8gL2FwcHMvYXBwXHJcbiAgICAgICAgICAgICAgICB2YXIgbGVuPWRhdGEucm9sZS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnJvbGVbbGVuLTFdPT1cIlwiKXtcclxuICAgICAgICAgICAgICAgICAgLy8gIGRhdGEucm9sZS5wb3AobGVuKTtcclxuICAgICAgICAgICAgICAgICAgIGRhdGEucm9sZS5zcGxpY2UobGVuLTEsMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBheGlvcy5wdXQoYC9hcHBzL2FwcGAsZGF0YSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQVBQX1JPTEVfTElTVChkYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmUoJ3RvYXN0Jyx7c3RhdHVzOidzdWNjZXNzJyx0ZXh0OifguJrguLHguJnguJfguLbguIHguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazooKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICB0aGlzLiQkKCdwYW5lbC1yaWdodCcpLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3JjL3JlZHV4LXN0b3JlL3JlZHVjZXIvYXBwUm9sZS5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGF4aW9zIGZyb20gJy4uL2F4aW9zJ1xyXG5pbXBvcnQgeyBjb21tb25BY3Rpb24gfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsaXN0OiBbXSxcclxuICAgIHVwZGF0ZXM6IFtdLFxyXG4gICAgZGVsZXRlczogW11cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBVc2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0FQUF9VU0VSX0xJU1QnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbGlzdDogYWN0aW9uLnBheWxvYWQgfSk7XHJcbiAgICAgICAgY2FzZSAnQVBQX1VTRVJfREVMRVRFJzpcclxuICAgICAgICAgICAgc3RhdGUuZGVsZXRlcy5wdXNoKGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZGVsZXRlczogc3RhdGUuZGVsZXRlcyB9KTtcclxuICAgICAgICBjYXNlICdBUFBfVVNFUl9VUERBVEUnOlxyXG4gICAgICAgICAgICBzdGF0ZS51cGRhdGVzLnB1c2goYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB1cGRhdGVzOiBzdGF0ZS51cGRhdGVzIH0pO1xyXG4gICAgICAgIGNhc2UgJ0FQUF9VU0VSX0NMRUFSJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGRlbGV0ZXM6IFtdLCB1cGRhdGVzOiBbXSB9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBVc2VyQWN0aW9uKHN0b3JlKSB7XHJcblxyXG4gICAgcmV0dXJuIFtjb21tb25BY3Rpb24oKSxcclxuICAgIHtcclxuICAgICAgICBBUFBfVVNFUl9MSVNUOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FQUF9VU0VSX0xJU1QnKTtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBwcy91c2Vycy8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXMuZGF0YS5yb2xlLnB1c2goXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQVBQX1VTRVJfTElTVCcsIHBheWxvYWQ6IHJlcy5kYXRhIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQVBQX1VTRVJfQ0xFQVInIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnlsb25WaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgQVBQX1VTRVJfVVBEQVRFOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdBUFBfVVNFUl9VUERBVEUnLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEFQUF9VU0VSX0RFTEVURTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnQVBQX1VTRVJfREVMRVRFJywgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgQVBQX1VTRVJfU0FWRTogZnVuY3Rpb24gKGRhdGEsIHVwZGF0ZXMsIGRlbGV0ZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcsIHsgc3RhdHVzOiAnbG9hZCcgfSk7XHJcbiAgICAgICAgICAgIC8vIHZhciB1c2VyX2RlbHM9W107XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVzXyA9IFtdO1xyXG4gICAgICAgICAgICB1cGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB1ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcF9pZDogdXNlci5hcHBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogdXNlci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdWlkOiB1c2VyLnVpZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlc18ucHVzaCh1KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB1c2VyX2FwcHMgPSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVzOiB1cGRhdGVzXyxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZXM6IGRlbGV0ZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyX2FwcHMpO1xyXG5cclxuICAgICAgICAgICAgYXhpb3MucHV0KGAvYXBwcy91c2Vyc2AsIHVzZXJfYXBwcylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BUFBfVVNFUl9MSVNUKGRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLCB0ZXh0OiAn4Lia4Lix4LiZ4LiX4Li24LiB4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICB0aGlzLiQkKCdwYW5lbC1yaWdodCcpLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ0FQUF9VU0VSX0NMRUFSJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtlcnJ9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF1cclxuXHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9zcmMvcmVkdXgtc3RvcmUvcmVkdWNlci9hcHBVc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vYXhpb3MnXHJcbmltcG9ydCB7Y29tbW9uQWN0aW9ufSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSdcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXI6e3JvbGU6J25vbmUnfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXV0aFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKXtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnQVVUSF9TRVRfVVNFUic6XHJcbiAgICAgICAgICAgIHZhciB1c2VySW5mbztcclxuICAgICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQudG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgdXNlckluZm8gPSBqd3REZWNvZGUoYWN0aW9uLnBheWxvYWQudG9rZW4pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdXNlckluZm8gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSx7dXNlcjp1c2VySW5mb30pO1xyXG4gICAgICAgIGNhc2UgJ0FVVEhfSU5GTyc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHt1c2VyOmFjdGlvbi5wYXlsb2FkfSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXV0aEFjdGlvbihzdG9yZSl7XHJcblxyXG4gICAgcmV0dXJuIFtjb21tb25BY3Rpb24oKSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFVVEhfTE9HSU46ZnVuY3Rpb24oZm9ybUxvZ2luKXtcclxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy4vYXV0aC9sb2dpbicse3VzZXJuYW1lOmZvcm1Mb2dpbi51c2VyLHBhc3N3b3JkOmZvcm1Mb2dpbi5wYXNzfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIixyZXNwb25zZS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonQVVUSF9TRVRfVVNFUicscGF5bG9hZDpyZXNwb25zZS5kYXRhfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEudG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mbyA9IGp3dERlY29kZShyZXNwb25zZS5kYXRhLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mbyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih1c2VySW5mby5yb2xlPT1cInRlYWNoZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgnbnlsb24tY2hhbmdlLXBhZ2UnLHtwYXRoOicvZXhhbVJvb20nfSlcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlKCdueWxvbi1jaGFuZ2UtcGFnZScse3BhdGg6Jy9leGFtSGlzdG9yeSd9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9PntcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtlcnJvcn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdlcnJvcicpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9zcmMvcmVkdXgtc3RvcmUvcmVkdWNlci9hdXRoLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vYXhpb3MnXHJcbmltcG9ydCB7Y29tbW9uQWN0aW9ufSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtb2R1bGU6W11cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1vblN5c3RlbVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKXtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdDT01NT05fTU9EVUxFJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sc3RhdGUse21vZHVsZTphY3Rpb24ucGF5bG9hZH0pO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1vblN5c3RlbUFjdGlvbihzdG9yZSl7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGNvbW1vbkFjdGlvbigpLHtcclxuICAgICAgICAgICAgQ09NTU9OX01PRFVMRTpmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIC8vIHZhciB1c2VyID0gc3RvcmUuZ2V0U3RhdGUoKS5hdXRoLnVzZXI7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9jb21tb24vbW9kdWxlLycpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonQ09NTU9OX01PRFVMRScscGF5bG9hZDpyZXMuZGF0YX0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvc3JjL3JlZHV4LXN0b3JlL3JlZHVjZXIvY29tbW9uU3lzdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vYXhpb3MnXHJcbmltcG9ydCB7Y29tbW9uQWN0aW9ufSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsaXN0OltdLFxyXG4gICAgYmFsYW5jZUxpc3Q6W10sXHJcbiAgICBzZWxlY3Q6e31cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG15QXBwUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pe1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdNWV9BUFBfTElTVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtsaXN0OmFjdGlvbi5wYXlsb2FkfSk7XHJcbiAgICAgICAgY2FzZSAnTVlfQVBQX0JBTEFOQ0VfTElTVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtiYWxhbmNlTGlzdDphY3Rpb24ucGF5bG9hZH0pO1xyXG4gICAgICAgIGNhc2UgJ01ZX0FQUF9TRUxFQ1QnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSx7c2VsZWN0OmFjdGlvbi5wYXlsb2FkfSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbXlBcHBBY3Rpb24oc3RvcmUpe1xyXG5cclxuICAgIHJldHVybiBbY29tbW9uQWN0aW9uKCksXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgTVlfQVBQX0xJU1Q6ZnVuY3Rpb24oaWQpe1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBwcy9hcHBMaXN0YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOidNWV9BUFBfTElTVCcscGF5bG9hZDpyZXMuZGF0YX0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ueWxvblZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBNWV9BUFBfQkFMQU5DRV9MSVNUOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYC9hcHBzL2JhbGFuY2VMaXN0YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOidNWV9BUFBfQkFMQU5DRV9MSVNUJyxwYXlsb2FkOnJlcy5kYXRhfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBNWV9BUFBfUkVRVUVTVDpmdW5jdGlvbihhcHBfaWQsc3RhdHVzKXtcclxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcHBzL3JlcXVlc3RgLHthcHBfaWQ6YXBwX2lkLHN0YXR1czpzdGF0dXN9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NWV9BUFBfTElTVCh0aGlzLmdldFBhcmFtLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1ZX0FQUF9CQUxBTkNFX0xJU1QodGhpcy5nZXRQYXJhbS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kJCgncGFuZWwtcmlnaHQnKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgTVlfQVBQX1NFTEVDVDpmdW5jdGlvbihpZCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFuZWxSaWdodCA9IHRoaXMuJCQoJ3BhbmVsLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gMTtcclxuICAgICAgICAgICAgICAgIHBhbmVsUmlnaHQudGl0bGUgPSBcIuC4iOC4seC4lOC4geC4suC4o+C5geC4reC4m1wiXHJcbiAgICAgICAgICAgICAgICBwYW5lbFJpZ2h0Lm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGlkKVxyXG5cclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChgL2FwcHMvYXBwLyR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOidNWV9BUFBfU0VMRUNUJyxwYXlsb2FkOnJlcy5kYXRhfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiQkKCdwYW5lbC1yaWdodCcpLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBNWV9BUFBfSU5TRVJUOmZ1bmN0aW9uKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLHtzdGF0dXM6J2xvYWQnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwcHMvYXBwYCxkYXRhKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NWV9BUFBfTElTVCh0aGlzLmdldFBhcmFtLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmUoJ3RvYXN0Jyx7c3RhdHVzOidzdWNjZXNzJyx0ZXh0OifguJrguLHguJnguJfguLbguIHguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazooKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kJCgncGFuZWwtcmlnaHQnKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgTVlfQVBQX0RFTEVURTpmdW5jdGlvbihpZCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLHtzdGF0dXM6J2xvYWQnfSk7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoYC9hcHBzL2FwcC8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1ZX0FQUF9MSVNUKHRoaXMuZ2V0UGFyYW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLHtzdGF0dXM6J3N1Y2Nlc3MnLHRleHQ6J+C4peC4muC4guC5ieC4reC4oeC4ueC4peC4quC4s+C5gOC4o+C5h+C4iCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOigpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiQkKCdwYW5lbC1yaWdodCcpLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIE1ZX0FQUF9VUERBVEU6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmUoJ3RvYXN0Jyx7c3RhdHVzOidsb2FkJ30pO1xyXG5cclxuICAgICAgICAgICAgICAgIGF4aW9zLnB1dChgL2FwcHMvYXBwYCxkYXRhKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NWV9BUFBfTElTVCh0aGlzLmdldFBhcmFtLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmUoJ3RvYXN0Jyx7c3RhdHVzOidzdWNjZXNzJyx0ZXh0OifguJrguLHguJnguJfguLbguIHguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazooKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kJCgncGFuZWwtcmlnaHQnKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3NyYy9yZWR1eC1zdG9yZS9yZWR1Y2VyL215QXBwLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vYXhpb3MnXHJcbmltcG9ydCB7Y29tbW9uQWN0aW9ufSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsaXN0OltdLFxyXG4gICAgc2VsZWN0Ont9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKXtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnUFJPVklERVJfTElTVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtsaXN0OmFjdGlvbi5wYXlsb2FkfSk7XHJcbiAgICAgICAgY2FzZSAnUFJPVklERVJfU0VMRUNUJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sc3RhdGUse3NlbGVjdDphY3Rpb24ucGF5bG9hZH0pO1xyXG4gICAgICAgIGNhc2UgJ1BST1ZJREVSX0NMRUFSX1NFTEVDVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtzZWxlY3Q6e319KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlckFjdGlvbihzdG9yZSl7XHJcblxyXG4gICAgcmV0dXJuIFtjb21tb25BY3Rpb24oKSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFBST1ZJREVSX1RFU1Q6ZnVuY3Rpb24oaWQpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQUk9WSURFUl9MSVNUOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9wcm92aWRlcnMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6J1BST1ZJREVSX0xJU1QnLHBheWxvYWQ6cmVzLmRhdGF9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnlsb25WaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQUk9WSURFUl9TRUxFQ1Q6ZnVuY3Rpb24oaWQpe1xyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGAvcHJvdmlkZXJzL3Byb3ZpZGVyLyR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOidQUk9WSURFUl9TRUxFQ1QnLHBheWxvYWQ6cmVzLmRhdGF9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJCQoJ3BhbmVsLXJpZ2h0Jykub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUFJPVklERVJfQ0xFQVJfU0VMRUNUOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTonUFJPVklERVJfQ0xFQVJfU0VMRUNUJ30pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFBST1ZJREVSX0lOU0VSVDpmdW5jdGlvbihkYXRhKXtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmUoJ3RvYXN0Jyx7c3RhdHVzOidsb2FkJ30pO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zY29wZSA9IGRhdGEuc2NvcGUuc3BsaXQoXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9wcm92aWRlcnMvcHJvdmlkZXJgLGRhdGEpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBST1ZJREVSX0xJU1QoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmUoJ3RvYXN0Jyx7c3RhdHVzOidzdWNjZXNzJyx0ZXh0OifguJrguLHguJnguJfguLbguIHguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazooKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kJCgncGFuZWwtcmlnaHQnKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUFJPVklERVJfREVMRVRFOmZ1bmN0aW9uKGlkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcse3N0YXR1czonbG9hZCd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoYC9wcm92aWRlcnMvcHJvdmlkZXIvJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QUk9WSURFUl9MSVNUKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcse3N0YXR1czonc3VjY2VzcycsdGV4dDon4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCQoJ3BhbmVsLXJpZ2h0JykuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUFJPVklERVJfVVBEQVRFOmZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcse3N0YXR1czonbG9hZCd9KTtcclxuICAgICAgICAgICAgICAgIGRhdGEuc2NvcGUgPSBkYXRhLnNjb3BlLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBheGlvcy5wdXQoYC9wcm92aWRlcnMvcHJvdmlkZXJgLGRhdGEpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlBST1ZJREVSX0xJU1QoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmUoJ3RvYXN0Jyx7c3RhdHVzOidzdWNjZXNzJyx0ZXh0OifguJrguLHguJnguJfguLbguIHguKrguLPguYDguKPguYfguIgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazooKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kJCgncGFuZWwtcmlnaHQnKS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL3NyYy9yZWR1eC1zdG9yZS9yZWR1Y2VyL3Byb3ZpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vYXhpb3MnXHJcbmltcG9ydCB7Y29tbW9uQWN0aW9ufSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsaXN0OltdLFxyXG4gICAgc2VsZWN0Ont9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pe1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdVU0VSX0xJU1QnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSx7bGlzdDphY3Rpb24ucGF5bG9hZH0pO1xyXG4gICAgICAgIGNhc2UgJ1VTRVJfU0VMRUNUJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sc3RhdGUse3NlbGVjdDphY3Rpb24ucGF5bG9hZH0pO1xyXG4gICAgICAgIGNhc2UgJ1VTRVJfQ0xFQVJfU0VMRUNUJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sc3RhdGUse3NlbGVjdDp7fX0pO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJBY3Rpb24oc3RvcmUpe1xyXG5cclxuICAgIHJldHVybiBbY29tbW9uQWN0aW9uKCksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBVU0VSX1RFU1Q6ZnVuY3Rpb24oaWQpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBVU0VSX0xJU1Q6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL3VzZXJzL2luZm8nKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6J1VTRVJfTElTVCcscGF5bG9hZDpyZXMuZGF0YX0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ueWxvblZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBVU0VSX1NFTEVDVDpmdW5jdGlvbihpZCl7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYC91c2Vycy9pbmZvLyR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOidVU0VSX1NFTEVDVCcscGF5bG9hZDpyZXMuZGF0YX0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kJCgncGFuZWwtcmlnaHQnKS5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBVU0VSX0NMRUFSX1NFTEVDVDpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6J1VTRVJfQ0xFQVJfU0VMRUNUJ30pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFVTRVJfSU5TRVJUOmZ1bmN0aW9uKGRhdGEpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgndG9hc3QnLHtzdGF0dXM6J2xvYWQnfSk7XHJcbiAgICAgICAgICAgICAgIC8vIGRhdGEuc2NvcGUgPSBkYXRhLnNjb3BlLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGAvdXNlcnMvdXNlcmAsZGF0YSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVVNFUl9MSVNUKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcse3N0YXR1czonc3VjY2VzcycsdGV4dDon4Lia4Lix4LiZ4LiX4Li24LiB4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCQoJ3BhbmVsLXJpZ2h0JykuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFVTRVJfREVMRVRFOmZ1bmN0aW9uKGlkKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcse3N0YXR1czonbG9hZCd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoYC91c2Vycy91c2VyLyR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVVNFUl9MSVNUKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcse3N0YXR1czonc3VjY2VzcycsdGV4dDon4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCQoJ3BhbmVsLXJpZ2h0JykuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVVNFUl9VUERBVEU6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmUoJ3RvYXN0Jyx7c3RhdHVzOidsb2FkJ30pO1xyXG4gICAgICAgICAgICAgICAgLy9kYXRhLnNjb3BlID0gZGF0YS5zY29wZS5zcGxpdChcIixcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MucHV0KGAvdXNlcnMvdXNlcmAsZGF0YSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVVNFUl9MSVNUKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlKCd0b2FzdCcse3N0YXR1czonc3VjY2VzcycsdGV4dDon4Lia4Lix4LiZ4LiX4Li24LiB4Liq4Liz4LmA4Lij4LmH4LiIJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJCQoJ3BhbmVsLXJpZ2h0JykuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9zcmMvcmVkdXgtc3RvcmUvcmVkdWNlci91c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9