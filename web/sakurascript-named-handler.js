var sakuraScriptNamedHandler =
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SakuraScriptNamedHandler = undefined;
	
	var _toConsumableArray2 = __webpack_require__(1);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _classCallCheck2 = __webpack_require__(55);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(56);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _sakurascript = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SakuraScriptNamedHandler = exports.SakuraScriptNamedHandler = function () {
	  function SakuraScriptNamedHandler(named) {
	    (0, _classCallCheck3.default)(this, SakuraScriptNamedHandler);
	
	    this._named = named;
	  }
	
	  (0, _createClass3.default)(SakuraScriptNamedHandler, [{
	    key: 'execute',
	    value: function execute(token) {
	      var named = this.named;
	      var scope = named.scope();
	      var surface = scope.surface();
	      var blimp = scope.blimp();
	      if (token instanceof _sakurascript.SakuraScriptToken.Scope) {
	        named.scope(token.scope);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Surface) {
	        scope.surface(token.surface);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.SurfaceAlias) {
	        scope.surface(token.surface_alias);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Balloon) {
	        scope.blimp(token.balloon);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimation) {
	        surface.play(token.animation);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimationWait) {
	        surface.play(token.animation);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.SimpleWait) {
	        return true;
	      } else if (token instanceof _sakurascript.SakuraScriptToken.PreciseWait) {
	        return true;
	      } else if (token instanceof _sakurascript.SakuraScriptToken.WaitFromBeginning) {
	        return true;
	      } else if (token instanceof _sakurascript.SakuraScriptToken.ResetBeginning) {
	        return true;
	      } else if (token instanceof _sakurascript.SakuraScriptToken.WaitAnimationEnd) {
	        return true;
	      } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleQuick) {
	        return true;
	      } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleSynchronize) {
	        // TODO syncro section
	      } else if (token instanceof _sakurascript.SakuraScriptToken.TimeCritical) {
	        // TODO set time critical to state model
	      } else if (token instanceof _sakurascript.SakuraScriptToken.WaitClick) {
	        named.scope(0).blimp().showWait();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.NoChoiceTimeout) {
	        // TODO state
	      } else if (token instanceof _sakurascript.SakuraScriptToken.EventChoice) {
	        // TODO state.has_choice = true;
	        blimp.choice.apply(blimp, [token.text, token.event].concat((0, _toConsumableArray3.default)(token.references)));
	      } else if (token instanceof _sakurascript.SakuraScriptToken.ReferencesChoice) {
	        // TODO state.has_choice = true;
	        blimp.choiceBegin.apply(blimp, [token.text].concat((0, _toConsumableArray3.default)(token.references)));
	      } else if (token instanceof _sakurascript.SakuraScriptToken.ScriptChoice) {
	        // TODO state.has_choice = true;
	        blimp.choiceBegin(token.text, 'script:' + token.script);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.OldReferenceChoice) {
	        // TODO state.has_choice = true;
	        blimp.choiceBegin(token.text, token.reference);
	        blimp.br();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginEventChoice) {
	        // TODO state.has_choice = true;
	        blimp.choiceBegin.apply(blimp, [token.event].concat((0, _toConsumableArray3.default)(token.references)));
	      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginReferencesChoice) {
	        // TODO state.has_choice = true;
	        blimp.choiceBegin.apply(blimp, (0, _toConsumableArray3.default)(token.references));
	      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginScriptChoice) {
	        // TODO state.has_choice = true;
	        blimp.choiceBegin('script:' + token.script);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.EndChoice) {
	        blimp.choiceEnd();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginEventAnchor) {
	        blimp.anchorBegin.apply(blimp, [token.event].concat((0, _toConsumableArray3.default)(token.references)));
	      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginReferencesAnchor) {
	        blimp.anchorBegin.apply(blimp, (0, _toConsumableArray3.default)(token.references));
	      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginScriptAnchor) {
	        blimp.anchorBegin('script:' + token.script);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.EndAnchor) {
	        blimp.anchorEnd();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.LineBreak) {
	        blimp.br();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.HalfLineBreak) {
	        blimp.br(0.5);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.PercentLineBreak) {
	        blimp.br(token.percent / 100);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleNoAutoLineBreak) {
	        // TODO cuttlebone not implemented
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Location) {
	        blimp.location(token.x, token.y);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Image) {
	        // TODO cuttlebone not implemented
	      } else if (token instanceof _sakurascript.SakuraScriptToken.InlineImage) {
	        // TODO cuttlebone not implemented
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Font) {
	        blimp.font.apply(blimp, [token.name].concat((0, _toConsumableArray3.default)(token.args)));
	      } else if (token instanceof _sakurascript.SakuraScriptToken.BeFar) {
	        // TODO cuttlebone not implemented
	      } else if (token instanceof _sakurascript.SakuraScriptToken.BeNear) {
	        // TODO cuttlebone not implemented
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Clear) {
	        blimp.clear();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.End) {
	        surface.yenE();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.OldChoiceEnd) {
	        surface.yenE();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.OpenCommunicateBox) {
	        named.openCommunicateBox();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.OpenTeachBox) {
	        // TODO cuttlebone not implemented
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Halt) {
	        surface.yenE();
	        return false;
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Marker) {
	        blimp.marker();
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Char) {
	        // TODO syncro
	        blimp.talk(token.char);
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Animation) {
	        // TODO cuttlebone not implemented
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Bind) {
	        if (token.dress_up == null) {
	          // TODO toggle
	        } else if (token.dress_up) {
	          scope.bind(token.category, token.parts);
	        } else {
	          scope.unbind(token.category, token.parts);
	        }
	      } else if (token instanceof _sakurascript.SakuraScriptToken.LockRepaint) {
	        // TODO cuttlebone not implemented
	      } else if (token instanceof _sakurascript.SakuraScriptToken.UnlockRepaint) {
	        // TODO cuttlebone not implemented
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Move) {
	        // TODO shell state
	      } else if (token instanceof _sakurascript.SakuraScriptToken.MoveAsync) {
	        // TODO shell state
	      } else if (token instanceof _sakurascript.SakuraScriptToken.MoveAsyncCancel) {
	        // TODO shell state
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Raise) {
	        return false;
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Set) {
	        // TODO
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Open) {
	        // TODO
	      } else if (token instanceof _sakurascript.SakuraScriptToken.Close) {
	        // TODO
	      } else if (token instanceof _sakurascript.SakuraScriptToken.NotImplemented) {
	        return true;
	      } else {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'named',
	    get: function get() {
	      return this._named;
	    }
	  }]);
	  return SakuraScriptNamedHandler;
	}();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(2);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(48);
	module.exports = __webpack_require__(12).Array.from;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(5)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(8)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(6)
	  , defined   = __webpack_require__(7);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(9)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(25)
	  , hide           = __webpack_require__(15)
	  , has            = __webpack_require__(26)
	  , Iterators      = __webpack_require__(27)
	  , $iterCreate    = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(44)
	  , getPrototypeOf = __webpack_require__(46)
	  , ITERATOR       = __webpack_require__(45)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(12)
	  , ctx       = __webpack_require__(13)
	  , hide      = __webpack_require__(15)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(14);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(16)
	  , createDesc = __webpack_require__(24);
	module.exports = __webpack_require__(20) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(17)
	  , IE8_DOM_DEFINE = __webpack_require__(19)
	  , toPrimitive    = __webpack_require__(23)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(20) && !__webpack_require__(21)(function(){
	  return Object.defineProperty(__webpack_require__(22)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(21)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);

/***/ },
/* 26 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(29)
	  , descriptor     = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(44)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(15)(IteratorPrototype, __webpack_require__(45)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(17)
	  , dPs         = __webpack_require__(30)
	  , enumBugKeys = __webpack_require__(42)
	  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(22)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(43).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(16)
	  , anObject = __webpack_require__(17)
	  , getKeys  = __webpack_require__(31);
	
	module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(32)
	  , enumBugKeys = __webpack_require__(42);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(26)
	  , toIObject    = __webpack_require__(33)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(39)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(38);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(6)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(6)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(40)('keys')
	  , uid    = __webpack_require__(41);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11).document && document.documentElement;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(16).f
	  , has = __webpack_require__(26)
	  , TAG = __webpack_require__(45)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(40)('wks')
	  , uid        = __webpack_require__(41)
	  , Symbol     = __webpack_require__(11).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(26)
	  , toObject    = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(13)
	  , $export        = __webpack_require__(10)
	  , toObject       = __webpack_require__(47)
	  , call           = __webpack_require__(49)
	  , isArrayIter    = __webpack_require__(50)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(51)
	  , getIterFn      = __webpack_require__(52);
	
	$export($export.S + $export.F * !__webpack_require__(54)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(17);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(27)
	  , ITERATOR   = __webpack_require__(45)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(16)
	  , createDesc      = __webpack_require__(24);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(53)
	  , ITERATOR  = __webpack_require__(45)('iterator')
	  , Iterators = __webpack_require__(27);
	module.exports = __webpack_require__(12).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(35)
	  , TAG = __webpack_require__(45)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(45)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(57);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var $Object = __webpack_require__(12).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperty: __webpack_require__(16).f});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function() {
	  var SakuraScript, SakuraScriptToken, joinargs, splitargs,
	    slice = [].slice,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;
	
	  splitargs = function(str) {
	    return str.replace(/"((?:\\\\|\\"|[^"])*)"/g, function(all, quoted) {
	      return quoted.replace(/,/g, '\0');
	    }).split(/\s*\,\s*/).map(function(arg) {
	      return arg.replace(/\0/g, ',').replace(/\\(.)/, '$1');
	    });
	  };
	
	  joinargs = function(args) {
	    return args.map(function(arg) {
	      return arg.replace(/\\/, '\\\\').replace(/\]/, '\\]');
	    }).map(function(arg) {
	      if (/[,"]/.test(arg)) {
	        return '"' + arg.replace(/"/, '\\"') + '"';
	      } else {
	        return arg;
	      }
	    }).join(',');
	  };
	
	  SakuraScript = (function() {
	    SakuraScript.fromObject = function(json) {
	      var i, len, token, tokens;
	      tokens = [];
	      for (i = 0, len = json.length; i < len; i++) {
	        token = json[i];
	        tokens.push(SakuraScriptToken.fromObject(token));
	      }
	      return new SakuraScript(tokens);
	    };
	
	    SakuraScript.parse = function(script) {
	      var i, len, ref, tag, tokens;
	      tokens = [];
	      while (script.length) {
	        tag = null;
	        ref = SakuraScript.tags;
	        for (i = 0, len = ref.length; i < len; i++) {
	          tag = ref[i];
	          if (tag.re.test(script)) {
	            break;
	          }
	        }
	        script = script.replace(tag.re, (function(_this) {
	          return function() {
	            var all, group, j, offset;
	            group = 3 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 2) : (j = 0, []), offset = arguments[j++], all = arguments[j++];
	            tokens.push(tag.match.call(_this, group));
	            return '';
	          };
	        })(this));
	      }
	      return new SakuraScript(tokens);
	    };
	
	    function SakuraScript(tokens1) {
	      this.tokens = tokens1 != null ? tokens1 : [];
	    }
	
	    SakuraScript.prototype.toObject = function() {
	      var i, len, ref, results, token;
	      ref = this.tokens;
	      results = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        token = ref[i];
	        results.push(token.toObject());
	      }
	      return results;
	    };
	
	    SakuraScript.prototype.toSakuraScript = function() {
	      var token;
	      return ((function() {
	        var i, len, ref, results;
	        ref = this.tokens;
	        results = [];
	        for (i = 0, len = ref.length; i < len; i++) {
	          token = ref[i];
	          results.push(token.toSakuraScript());
	        }
	        return results;
	      }).call(this)).join('');
	    };
	
	    return SakuraScript;
	
	  })();
	
	  SakuraScriptToken = (function() {
	    SakuraScriptToken.fromObject = function(json) {
	      var i, instance, key, len, ref;
	      instance = new SakuraScriptToken[json["class"]]();
	      ref = Object.keys(json);
	      for (i = 0, len = ref.length; i < len; i++) {
	        key = ref[i];
	        if (key !== "class") {
	          instance[key] = json[key];
	        }
	      }
	      return instance;
	    };
	
	    function SakuraScriptToken() {}
	
	    SakuraScriptToken.prototype.toObject = function() {
	      var class_name, i, json, key, len, ref;
	      class_name = this.constructor.toString().slice(9).match(/^[^\s(]+/)[0];
	      json = {
	        "class": class_name
	      };
	      ref = Object.keys(this);
	      for (i = 0, len = ref.length; i < len; i++) {
	        key = ref[i];
	        json[key] = this[key];
	      }
	      return json;
	    };
	
	    SakuraScriptToken.prototype.toSakuraScript = function() {
	      throw new Error("not implemented");
	    };
	
	    return SakuraScriptToken;
	
	  })();
	
	  SakuraScriptToken.Scope = (function(superClass) {
	    extend(Scope, superClass);
	
	    function Scope(scope, view) {
	      this.scope = scope;
	      this.view = view;
	    }
	
	    Scope.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\p[" + this.scope + "]";
	        case "nobracket":
	          return "\\p" + this.scope;
	        default:
	          return "\\" + this.view;
	      }
	    };
	
	    return Scope;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Surface = (function(superClass) {
	    extend(Surface, superClass);
	
	    function Surface(surface, view) {
	      this.surface = surface;
	      this.view = view;
	    }
	
	    Surface.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\s[" + this.surface + "]";
	        case "nobracket":
	          return "\\s" + this.surface;
	      }
	    };
	
	    return Surface;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.SurfaceAlias = (function(superClass) {
	    extend(SurfaceAlias, superClass);
	
	    function SurfaceAlias(surface_alias) {
	      this.surface_alias = surface_alias;
	    }
	
	    SurfaceAlias.prototype.toSakuraScript = function() {
	      return "\\s[" + (joinargs([this.surface_alias])) + "]";
	    };
	
	    return SurfaceAlias;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Balloon = (function(superClass) {
	    extend(Balloon, superClass);
	
	    function Balloon(balloon, view) {
	      this.balloon = balloon;
	      this.view = view;
	    }
	
	    Balloon.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\b[" + this.balloon + "]";
	        case "nobracket":
	          return "\\b" + this.balloon;
	      }
	    };
	
	    return Balloon;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PlayAnimation = (function(superClass) {
	    extend(PlayAnimation, superClass);
	
	    function PlayAnimation(animation, view) {
	      this.animation = animation;
	      this.view = view;
	    }
	
	    PlayAnimation.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\i[" + this.animation + "]";
	        case "nobracket":
	          return "\\i" + this.animation;
	      }
	    };
	
	    return PlayAnimation;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PlayAnimationWait = (function(superClass) {
	    extend(PlayAnimationWait, superClass);
	
	    function PlayAnimationWait(animation) {
	      this.animation = animation;
	    }
	
	    PlayAnimationWait.prototype.toSakuraScript = function() {
	      return "\\i[" + this.animation + ",wait]";
	    };
	
	    return PlayAnimationWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.SimpleWait = (function(superClass) {
	    extend(SimpleWait, superClass);
	
	    function SimpleWait(period) {
	      this.period = period;
	    }
	
	    SimpleWait.prototype.toSakuraScript = function() {
	      return "\\w" + this.period;
	    };
	
	    return SimpleWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PreciseWait = (function(superClass) {
	    extend(PreciseWait, superClass);
	
	    function PreciseWait(period) {
	      this.period = period;
	    }
	
	    PreciseWait.prototype.toSakuraScript = function() {
	      return "\\_w[" + this.period + "]";
	    };
	
	    return PreciseWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitFromBeginning = (function(superClass) {
	    extend(WaitFromBeginning, superClass);
	
	    function WaitFromBeginning(period) {
	      this.period = period;
	    }
	
	    WaitFromBeginning.prototype.toSakuraScript = function() {
	      return "\\__w[" + this.period + "]";
	    };
	
	    return WaitFromBeginning;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ResetBeginning = (function(superClass) {
	    extend(ResetBeginning, superClass);
	
	    function ResetBeginning() {}
	
	    ResetBeginning.prototype.toSakuraScript = function() {
	      return "\\__w[clear]";
	    };
	
	    return ResetBeginning;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitAnimationEnd = (function(superClass) {
	    extend(WaitAnimationEnd, superClass);
	
	    function WaitAnimationEnd(id) {
	      this.id = id;
	    }
	
	    WaitAnimationEnd.prototype.toSakuraScript = function() {
	      return "\\__w[animation," + this.id + "]";
	    };
	
	    return WaitAnimationEnd;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleQuick = (function(superClass) {
	    extend(ToggleQuick, superClass);
	
	    function ToggleQuick() {}
	
	    ToggleQuick.prototype.toSakuraScript = function() {
	      return "\\_q";
	    };
	
	    return ToggleQuick;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleSynchronize = (function(superClass) {
	    extend(ToggleSynchronize, superClass);
	
	    function ToggleSynchronize(scopes) {
	      this.scopes = scopes != null ? scopes : [];
	    }
	
	    ToggleSynchronize.prototype.toSakuraScript = function() {
	      return "\\_s" + (this.scopes.length ? "[" + (joinargs(this.scopes)) + "]" : "");
	    };
	
	    return ToggleSynchronize;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.TimeCritical = (function(superClass) {
	    extend(TimeCritical, superClass);
	
	    function TimeCritical() {}
	
	    TimeCritical.prototype.toSakuraScript = function() {
	      return "\\t";
	    };
	
	    return TimeCritical;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitClick = (function(superClass) {
	    extend(WaitClick, superClass);
	
	    function WaitClick(noclear) {
	      this.noclear = noclear != null ? noclear : false;
	    }
	
	    WaitClick.prototype.toSakuraScript = function() {
	      return "\\x";
	    };
	
	    return WaitClick;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.NoChoiceTimeout = (function(superClass) {
	    extend(NoChoiceTimeout, superClass);
	
	    function NoChoiceTimeout() {}
	
	    NoChoiceTimeout.prototype.toSakuraScript = function() {
	      return "\\*";
	    };
	
	    return NoChoiceTimeout;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EventChoice = (function(superClass) {
	    extend(EventChoice, superClass);
	
	    function EventChoice(text, event, references) {
	      this.text = text;
	      this.event = event;
	      this.references = references;
	    }
	
	    EventChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text, this.event].concat(this.references))) + "]";
	    };
	
	    return EventChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ReferencesChoice = (function(superClass) {
	    extend(ReferencesChoice, superClass);
	
	    function ReferencesChoice(text, references) {
	      this.text = text;
	      this.references = references;
	    }
	
	    ReferencesChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text].concat(this.references))) + "]";
	    };
	
	    return ReferencesChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ScriptChoice = (function(superClass) {
	    extend(ScriptChoice, superClass);
	
	    function ScriptChoice(text, script1) {
	      this.text = text;
	      this.script = script1;
	    }
	
	    ScriptChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text, "script:" + this.script])) + "]";
	    };
	
	    return ScriptChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OldReferenceChoice = (function(superClass) {
	    extend(OldReferenceChoice, superClass);
	
	    function OldReferenceChoice(text, reference, view) {
	      this.text = text;
	      this.reference = reference;
	      this.view = view;
	    }
	
	    OldReferenceChoice.prototype.toSakuraScript = function() {
	      return "\\q" + (this.view || '') + "[" + (joinargs([this.reference])) + "][" + (joinargs([this.text])) + "]";
	    };
	
	    return OldReferenceChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginEventChoice = (function(superClass) {
	    extend(BeginEventChoice, superClass);
	
	    function BeginEventChoice(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    BeginEventChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return BeginEventChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginReferencesChoice = (function(superClass) {
	    extend(BeginReferencesChoice, superClass);
	
	    function BeginReferencesChoice(references) {
	      this.references = references;
	    }
	
	    BeginReferencesChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs(this.references)) + "]";
	    };
	
	    return BeginReferencesChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginScriptChoice = (function(superClass) {
	    extend(BeginScriptChoice, superClass);
	
	    function BeginScriptChoice(script1) {
	      this.script = script1;
	    }
	
	    BeginScriptChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs(["script:" + this.script])) + "]";
	    };
	
	    return BeginScriptChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EndChoice = (function(superClass) {
	    extend(EndChoice, superClass);
	
	    function EndChoice() {}
	
	    EndChoice.prototype.toSakuraScript = function() {
	      return "\\__q";
	    };
	
	    return EndChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginEventAnchor = (function(superClass) {
	    extend(BeginEventAnchor, superClass);
	
	    function BeginEventAnchor(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    BeginEventAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return BeginEventAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginReferencesAnchor = (function(superClass) {
	    extend(BeginReferencesAnchor, superClass);
	
	    function BeginReferencesAnchor(references) {
	      this.references = references;
	    }
	
	    BeginReferencesAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs(this.references)) + "]";
	    };
	
	    return BeginReferencesAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginScriptAnchor = (function(superClass) {
	    extend(BeginScriptAnchor, superClass);
	
	    function BeginScriptAnchor(script1) {
	      this.script = script1;
	    }
	
	    BeginScriptAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs(["script:" + this.script])) + "]";
	    };
	
	    return BeginScriptAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EndAnchor = (function(superClass) {
	    extend(EndAnchor, superClass);
	
	    function EndAnchor() {}
	
	    EndAnchor.prototype.toSakuraScript = function() {
	      return "\\_a";
	    };
	
	    return EndAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.LineBreak = (function(superClass) {
	    extend(LineBreak, superClass);
	
	    function LineBreak() {}
	
	    LineBreak.prototype.toSakuraScript = function() {
	      return "\\n";
	    };
	
	    return LineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.HalfLineBreak = (function(superClass) {
	    extend(HalfLineBreak, superClass);
	
	    function HalfLineBreak() {}
	
	    HalfLineBreak.prototype.toSakuraScript = function() {
	      return "\\n[half]";
	    };
	
	    return HalfLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PercentLineBreak = (function(superClass) {
	    extend(PercentLineBreak, superClass);
	
	    function PercentLineBreak(percent) {
	      this.percent = percent;
	    }
	
	    PercentLineBreak.prototype.toSakuraScript = function() {
	      return "\\n[" + this.percent + "]";
	    };
	
	    return PercentLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleNoAutoLineBreak = (function(superClass) {
	    extend(ToggleNoAutoLineBreak, superClass);
	
	    function ToggleNoAutoLineBreak() {}
	
	    ToggleNoAutoLineBreak.prototype.toSakuraScript = function() {
	      return "\\_n";
	    };
	
	    return ToggleNoAutoLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Location = (function(superClass) {
	    extend(Location, superClass);
	
	    function Location(x1, y1) {
	      this.x = x1;
	      this.y = y1;
	    }
	
	    Location.prototype.toSakuraScript = function() {
	      return "\\_l[" + ([this.x, this.y].join(',')) + "]";
	    };
	
	    return Location;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Image = (function(superClass) {
	    extend(Image, superClass);
	
	    function Image(path, x1, y1, args1) {
	      this.path = path;
	      this.x = x1;
	      this.y = y1;
	      this.args = args1;
	    }
	
	    Image.prototype.toSakuraScript = function() {
	      return "\\_b[" + ([this.path, this.x, this.y].concat(this.args).join(',')) + "]";
	    };
	
	    return Image;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.InlineImage = (function(superClass) {
	    extend(InlineImage, superClass);
	
	    function InlineImage(path, x1, y1, args1) {
	      this.path = path;
	      this.x = x1;
	      this.y = y1;
	      this.args = args1;
	    }
	
	    InlineImage.prototype.toSakuraScript = function() {
	      return "\\_b[" + ([this.path, 'inline'].concat(this.args).join(',')) + "]";
	    };
	
	    return InlineImage;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Font = (function(superClass) {
	    extend(Font, superClass);
	
	    function Font(name, args1) {
	      this.name = name;
	      this.args = args1;
	    }
	
	    Font.prototype.toSakuraScript = function() {
	      return "\\f[" + (joinargs([this.name].concat(this.args))) + "]";
	    };
	
	    return Font;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeFar = (function(superClass) {
	    extend(BeFar, superClass);
	
	    function BeFar() {}
	
	    BeFar.prototype.toSakuraScript = function() {
	      return "\\4";
	    };
	
	    return BeFar;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeNear = (function(superClass) {
	    extend(BeNear, superClass);
	
	    function BeNear() {}
	
	    BeNear.prototype.toSakuraScript = function() {
	      return "\\5";
	    };
	
	    return BeNear;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Clear = (function(superClass) {
	    extend(Clear, superClass);
	
	    function Clear() {}
	
	    Clear.prototype.toSakuraScript = function() {
	      return "\\c";
	    };
	
	    return Clear;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.End = (function(superClass) {
	    extend(End, superClass);
	
	    function End() {}
	
	    End.prototype.toSakuraScript = function() {
	      return "\\e";
	    };
	
	    return End;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OldChoiceEnd = (function(superClass) {
	    extend(OldChoiceEnd, superClass);
	
	    function OldChoiceEnd() {}
	
	    OldChoiceEnd.prototype.toSakuraScript = function() {
	      return "\\z";
	    };
	
	    return OldChoiceEnd;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OpenCommunicateBox = (function(superClass) {
	    extend(OpenCommunicateBox, superClass);
	
	    function OpenCommunicateBox() {}
	
	    OpenCommunicateBox.prototype.toSakuraScript = function() {
	      return "\\__c";
	    };
	
	    return OpenCommunicateBox;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OpenTeachBox = (function(superClass) {
	    extend(OpenTeachBox, superClass);
	
	    function OpenTeachBox() {}
	
	    OpenTeachBox.prototype.toSakuraScript = function() {
	      return "\\__t";
	    };
	
	    return OpenTeachBox;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Halt = (function(superClass) {
	    extend(Halt, superClass);
	
	    function Halt() {}
	
	    Halt.prototype.toSakuraScript = function() {
	      return "\\-";
	    };
	
	    return Halt;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Marker = (function(superClass) {
	    extend(Marker, superClass);
	
	    function Marker() {}
	
	    Marker.prototype.toSakuraScript = function() {
	      return "\\![*]";
	    };
	
	    return Marker;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Char = (function(superClass) {
	    extend(Char, superClass);
	
	    function Char(raw_char) {
	      this.raw_char = raw_char;
	      if (this.raw_char) {
	        this.char = this.raw_char.replace(/</, '&lt;').replace(/>/, '&gt;').replace(/&/, '&amp;');
	      }
	    }
	
	    Char.prototype.toSakuraScript = function() {
	      return this.raw_char;
	    };
	
	    return Char;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EscapeChar = (function(superClass) {
	    extend(EscapeChar, superClass);
	
	    function EscapeChar() {
	      this.char = "\\";
	    }
	
	    EscapeChar.prototype.toSakuraScript = function() {
	      return "\\\\";
	    };
	
	    return EscapeChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.UCSChar = (function(superClass) {
	    extend(UCSChar, superClass);
	
	    function UCSChar(code_point) {
	      this.code_point = code_point;
	      this.char = "&#" + this.code_point + ";";
	    }
	
	    UCSChar.prototype.toSakuraScript = function() {
	      return "\\_u[0x" + (this.code_point.toString(16)) + "]";
	    };
	
	    return UCSChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.AsciiChar = (function(superClass) {
	    extend(AsciiChar, superClass);
	
	    function AsciiChar(code_point) {
	      this.code_point = code_point;
	      this.char = "&#" + this.code_point + ";";
	    }
	
	    AsciiChar.prototype.toSakuraScript = function() {
	      return "\\_m[0x" + (this.code_point.toString(16)) + "]";
	    };
	
	    return AsciiChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.EntityChar = (function(superClass) {
	    extend(EntityChar, superClass);
	
	    function EntityChar(entity) {
	      this.entity = entity;
	      this.char = "&" + this.entity + ";";
	    }
	
	    EntityChar.prototype.toSakuraScript = function() {
	      return "\\&[" + this.entity + "]";
	    };
	
	    return EntityChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.Animation = (function(superClass) {
	    extend(Animation, superClass);
	
	    function Animation(command, id, args1) {
	      this.command = command;
	      this.id = id;
	      this.args = args1;
	    }
	
	    Animation.prototype.toSakuraScript = function() {
	      return "\\![anim," + (joinargs([this.command, this.id].concat(this.args))) + "]";
	    };
	
	    return Animation;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Bind = (function(superClass) {
	    extend(Bind, superClass);
	
	    function Bind(category, parts, dress_up) {
	      this.category = category;
	      this.parts = parts;
	      this.dress_up = dress_up;
	    }
	
	    Bind.prototype.toSakuraScript = function() {
	      return "\\![bind," + (joinargs([this.category, this.parts, this.dress_up])) + "]";
	    };
	
	    return Bind;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.LockRepaint = (function(superClass) {
	    extend(LockRepaint, superClass);
	
	    function LockRepaint() {}
	
	    LockRepaint.prototype.toSakuraScript = function() {
	      return "\\![lock,repaint]";
	    };
	
	    return LockRepaint;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.UnlockRepaint = (function(superClass) {
	    extend(UnlockRepaint, superClass);
	
	    function UnlockRepaint() {}
	
	    UnlockRepaint.prototype.toSakuraScript = function() {
	      return "\\![unlock,repaint]";
	    };
	
	    return UnlockRepaint;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Move = (function(superClass) {
	    extend(Move, superClass);
	
	    function Move(x1, y1, duration, origin_type, source_origin, target_origin) {
	      this.x = x1;
	      this.y = y1;
	      this.duration = duration;
	      this.origin_type = origin_type;
	      this.source_origin = source_origin;
	      this.target_origin = target_origin;
	    }
	
	    Move.prototype.toSakuraScript = function() {
	      return "\\![move," + (joinargs([this.x, this.y, this.duration, this.origin_type, this.source_origin, this.target_origin])) + "]";
	    };
	
	    return Move;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.MoveAsync = (function(superClass) {
	    extend(MoveAsync, superClass);
	
	    function MoveAsync() {
	      return MoveAsync.__super__.constructor.apply(this, arguments);
	    }
	
	    MoveAsync.prototype.toSakuraScript = function() {
	      return "\\![moveasync," + (joinargs([this.x, this.y, this.duration, this.origin_type, this.source_origin, this.target_origin])) + "]";
	    };
	
	    return MoveAsync;
	
	  })(SakuraScriptToken.Move);
	
	  SakuraScriptToken.MoveAsyncCancel = (function(superClass) {
	    extend(MoveAsyncCancel, superClass);
	
	    function MoveAsyncCancel() {}
	
	    MoveAsyncCancel.prototype.toSakuraScript = function() {
	      return "\\![moveasync,cancel]";
	    };
	
	    return MoveAsyncCancel;
	
	  })(SakuraScriptToken.Move);
	
	  SakuraScriptToken.Raise = (function(superClass) {
	    extend(Raise, superClass);
	
	    function Raise(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    Raise.prototype.toSakuraScript = function() {
	      return "\\![raise," + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return Raise;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Set = (function(superClass) {
	    extend(Set, superClass);
	
	    function Set(id, args1) {
	      this.id = id;
	      this.args = args1;
	    }
	
	    Set.prototype.toSakuraScript = function() {
	      return "\\![set," + (joinargs([this.id].concat(this.args))) + "]";
	    };
	
	    return Set;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Open = (function(superClass) {
	    extend(Open, superClass);
	
	    function Open(id, args1) {
	      this.id = id;
	      this.args = args1;
	    }
	
	    Open.prototype.toSakuraScript = function() {
	      return "\\![open," + (joinargs([this.id].concat(this.args))) + "]";
	    };
	
	    return Open;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.NotImplemented = (function(superClass) {
	    extend(NotImplemented, superClass);
	
	    function NotImplemented(str1) {
	      this.str = str1;
	    }
	
	    NotImplemented.prototype.toSakuraScript = function() {
	      return this.str;
	    };
	
	    return NotImplemented;
	
	  })(SakuraScriptToken);
	
	  SakuraScript.tags = [
	    {
	      re: /^\\([h0])/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(0, group[1]);
	      }
	    }, {
	      re: /^\\([u1])/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(1, group[1]);
	      }
	    }, {
	      re: /^\\p\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\p(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\s(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Surface(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\s\[([^\]]+)\]/,
	      match: function(group) {
	        if (isNaN(group[1])) {
	          return new SakuraScriptToken.SurfaceAlias(group[1]);
	        } else {
	          return new SakuraScriptToken.Surface(Number(group[1]), "bracket");
	        }
	      }
	    }, {
	      re: /^\\b(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Balloon(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\b\[([^\]]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Balloon(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\i(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimation(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\i\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimation(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\i\[(\d+),wait\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimationWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\w(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.SimpleWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\_w\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PreciseWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\__w\[animation,(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitAnimationEnd(Number(group[1]));
	      }
	    }, {
	      re: /^\\__w\[clear\]/,
	      match: function(group) {
	        return new SakuraScriptToken.ResetBeginning();
	      }
	    }, {
	      re: /^\\__w\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitFromBeginning(Number(group[1]));
	      }
	    }, {
	      re: /^\\_q/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleQuick();
	      }
	    }, {
	      re: /^\\_s\[([^\]]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleSynchronize(splitargs(group[1]).map(function(n) {
	          return Number(n);
	        }));
	      }
	    }, {
	      re: /^\\_s/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleSynchronize();
	      }
	    }, {
	      re: /^\\t/,
	      match: function(group) {
	        return new SakuraScriptToken.TimeCritical();
	      }
	    }, {
	      re: /^\\x(\[noclear\])?/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitClick(!!group[1]);
	      }
	    }, {
	      re: /^\\\*/,
	      match: function(group) {
	        return new SakuraScriptToken.NoChoiceTimeout();
	      }
	    }, {
	      re: /^\\q\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[1])) {
	          return new SakuraScriptToken.EventChoice(args[0], args[1], args.slice(2));
	        } else if (/^script:/.test(args[1])) {
	          return new SakuraScriptToken.ScriptChoice(args[0], args[1].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.ReferencesChoice(args[0], args.slice(1));
	        }
	      }
	    }, {
	      re: /^\\__q\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[0])) {
	          return new SakuraScriptToken.BeginEventChoice(args[0], args.slice(1));
	        } else if (/^script:/.test(args[0])) {
	          return new SakuraScriptToken.BeginScriptChoice(args[0].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.BeginReferencesChoice(args);
	        }
	      }
	    }, {
	      re: /^\\__q/,
	      match: function(group) {
	        return new SakuraScriptToken.EndChoice();
	      }
	    }, {
	      re: /^\\q(\d*)\[((?:\\\\|\\\]|[^\]])+)\]\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.OldReferenceChoice(group[3], group[2], group[1]);
	      }
	    }, {
	      re: /^\\_a\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[0])) {
	          return new SakuraScriptToken.BeginEventAnchor(args[0], args.slice(1));
	        } else if (/^script:/.test(args[0])) {
	          return new SakuraScriptToken.BeginScriptAnchor(args[0].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.BeginReferencesAnchor(args);
	        }
	      }
	    }, {
	      re: /^\\_a/,
	      match: function(group) {
	        return new SakuraScriptToken.EndAnchor();
	      }
	    }, {
	      re: /^\\n\[half\]/,
	      match: function(group) {
	        return new SakuraScriptToken.HalfLineBreak();
	      }
	    }, {
	      re: /^\\n\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PercentLineBreak(Number(group[1]));
	      }
	    }, {
	      re: /^\\n/,
	      match: function(group) {
	        return new SakuraScriptToken.LineBreak();
	      }
	    }, {
	      re: /^\\_n/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleNoAutoLineBreak();
	      }
	    }, {
	      re: /^\\_l\[([^\]]+)\]/,
	      match: function(group) {
	        var ref, x, y;
	        ref = splitargs(group[1]), x = ref[0], y = ref[1];
	        return new SakuraScriptToken.Location(x, y);
	      }
	    }, {
	      re: /^\\_b\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (args[1] === "inline") {
	          return new SakuraScriptToken.InlineImage(args[0], args.slice(2));
	        } else {
	          return new SakuraScriptToken.Image(args[0], args[1], args[2], args.slice(3));
	        }
	      }
	    }, {
	      re: /^\\f\[([^\]]+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Font(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\4/,
	      match: function(group) {
	        return new SakuraScriptToken.BeFar();
	      }
	    }, {
	      re: /^\\5/,
	      match: function(group) {
	        return new SakuraScriptToken.BeNear();
	      }
	    }, {
	      re: /^\\c/,
	      match: function(group) {
	        return new SakuraScriptToken.Clear();
	      }
	    }, {
	      re: /^\\e/,
	      match: function(group) {
	        return new SakuraScriptToken.End();
	      }
	    }, {
	      re: /^\\z/,
	      match: function(group) {
	        return new SakuraScriptToken.OldChoiceEnd();
	      }
	    }, {
	      re: /^\\-/,
	      match: function(group) {
	        return new SakuraScriptToken.Halt();
	      }
	    }, {
	      re: /^\\\\/,
	      match: function(group) {
	        return new SakuraScriptToken.EscapeChar();
	      }
	    }, {
	      re: /^\\!\[anim,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Animation(args[0], args[1], args.slice(2));
	      }
	    }, {
	      re: /^\\!\[bind,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Bind(args[0], args[1], args[2]);
	      }
	    }, {
	      re: /^\\!\[moveasync,cancel\]/,
	      match: function(group) {
	        return new SakuraScriptToken.MoveAsyncCancel();
	      }
	    }, {
	      re: /^\\!\[move(async)?,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args, use_class;
	        use_class = group[1] ? SakuraScriptToken.MoveAsync : SakuraScriptToken.Move;
	        args = splitargs(group[2]);
	        return new use_class(args[0], args[1], args[2], args[3], args[4], args[5]);
	      }
	    }, {
	      re: /^\\!\[lock,repaint\]/,
	      match: function(group) {
	        return new SakuraScriptToken.LockRepaint();
	      }
	    }, {
	      re: /^\\!\[unlock,repaint\]/,
	      match: function(group) {
	        return new SakuraScriptToken.UnlockRepaint();
	      }
	    }, {
	      re: /^\\!\[set,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Set(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[open,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Open(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\__c/,
	      match: function(group) {
	        return new SakuraScriptToken.OpenCommunicateBox();
	      }
	    }, {
	      re: /^\\__t/,
	      match: function(group) {
	        return new SakuraScriptToken.OpenTeachBox();
	      }
	    }, {
	      re: /^\\!\[\s*raise\s*,\s*((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Raise(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[\*\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Marker();
	      }
	    }, {
	      re: /^\\_u\[([A-Fa-fXx0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.UCSChar(Number(group[1]));
	      }
	    }, {
	      re: /^\\_m\[([A-Fa-fXx0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.AsciiChar(Number(group[1]));
	      }
	    }, {
	      re: /^\\&\[([A-Za-z0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.EntityChar(group[1]);
	      }
	    }, {
	      re: /^\\[C67+v8]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\_[+V]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\[8j]\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\_[!?v]\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\!\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^./,
	      match: function(group) {
	        return new SakuraScriptToken.Char(group[0]);
	      }
	    }
	  ];
	
	  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
	    module.exports = {
	      SakuraScript: SakuraScript,
	      SakuraScriptToken: SakuraScriptToken
	    };
	  } else {
	    this.SakuraScript = SakuraScript;
	    this.SakuraScriptToken = SakuraScriptToken;
	  }
	
	}).call(this);
	
	//# sourceMappingURL=sakurascript.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)(module)))

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=sakurascript-named-handler.js.map