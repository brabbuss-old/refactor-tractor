/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body{background-color:pink}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/profile.png */ "./src/images/profile.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/info.svg */ "./src/images/info.svg"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../images/friends.svg */ "./src/images/friends.svg"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../images/calendar.svg */ "./src/images/calendar.svg"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../images/trending.svg */ "./src/images/trending.svg"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../images/newinput.svg */ "./src/images/newinput.svg"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../images/goback.svg */ "./src/images/goback.svg"));

// Module
exports.push([module.i, "*,*:after,*:before{box-sizing:border-box;margin:0;padding:0}body{background-color:#1F1F1F;font-family:'Oswald', sans-serif}header{text-align:center;height:9vw}button:active{border:none;outline:none}#profile-button{background-image:url(" + ___CSS_LOADER_URL___0___ + ");background-position:center;background-size:5.6vw;border:none;display:inline;float:right;height:5.6vw;margin-right:.5vw;margin-top:1.6vw;width:5.6vw}#profile-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}#user-info-dropdown{background-color:#1F1F1F;color:#fff;margin:-1.2% 0 0 60%;position:relative;text-align:center;z-index:100;border:2px solid white}#dropdown-name{text-align:left;margin-left:1vw}.dropdown-p{font-size:1.5vw;letter-spacing:normal;font-weight:300;padding:0 0 1vw 0;text-align:center;width:100%}h1{color:#fff;display:inline;font-size:5.4vw;letter-spacing:.2em;font-weight:normal}h2{display:inline;font-family:\"Work Sans\",sans-serif;font-size:2.4vw;letter-spacing:.2em;font-weight:700}h3{font-size:6.75vw;letter-spacing:.1em;font-weight:bold}h4{font-size:5.6vw}h5{font-size:1.8vw;padding-bottom:1vw;text-align:center}p{font-family:\"Work Sans\",sans-serif;font-size:1.2vw;letter-spacing:.2vw;font-weight:600;margin-right:1vw;padding-top:2vw;text-align:right;width:9vw;word-break:keep-all}.feedback-container{display:center;height:auto}.input-feedback{color:#fff;font-size:2vw;letter-spacing:.2vw;font-weight:400;width:100%;padding:.5vw 0 .5vw 0;text-align:center}main{display:grid;grid-template-areas:'steps hydration' 'stairs sleep';height:100%}.main-card{display:flex;justify-content:center;align-items:center;flex-direction:column;height:20vw}.main-card-middle{display:flex;align-items:center;justify-content:center;width:100%}.main-card-row{display:flex;justify-content:space-between;align-items:center;width:100%}#steps-card-container{background-color:#E66100;grid-area:steps;margin:.5vw}#hydration-card-container{background-color:#0C7BDC;grid-area:hydration;margin:.5vw}#stairs-card-container{background-color:#8975B2;grid-area:stairs;margin:.5vw}#sleep-card-container{background-color:#23879f;grid-area:sleep;margin:.5vw}.calendar-card{padding-bottom:10%}.card-data-line{display:flex;justify-content:center;flex-direction:row;margin:-4vw 0 2vw 0}.info-text{display:flex;flex-direction:row;align-items:center;width:35%;padding:0}.info-number{width:35%}label{font-size:6vh;letter-spacing:normal;font-weight:600}input{text-align:center;margin-left:1vw;height:6vh;padding:0.5vw;font-size:3vh}.input-form{display:flex;flex-direction:column;align-items:center;padding-bottom:1vh;margin:-4vw 0 4vw 0}.input-container{display:flex;align-items:center}.submit-button{font-family:\"Work Sans\",sans-serif;font-size:3vw;letter-spacing:.2em;font-weight:700;background-color:#000000;color:#ffffff;border:none;height:6vw;margin-top:2vw 0 2vw 0;width:35.4vw}.submit-button:focus.submit-button{outline:2px solid #FFFFFF;border-color:transparent}.hydration-weekly-label{font-size:1vw;padding-top:1vw}.hydration-weekly-amount{font-size:2vw}.hydration-data-line{display:flex;justify-content:center;margin-bottom:.2vw}.trend-line{font-size:2vw;width:20vw;text-align:center}.info-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___1___ + ");margin-left:1vw}.info-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.friends-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___2___ + ");margin-right:1vw}.friends-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.calendar-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___3___ + ");margin-right:1vw;float:right}.calendar-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.trending-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___4___ + ");margin-left:.5vw;position:absolute;left:1vw}.trending-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.new-input-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___5___ + ");margin-left:1vw}.new-input-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.go-back-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___6___ + ");margin:1.8vw}.go-back-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.hide{display:none}.green-text{color:green}.red-text{color:red}.yellow-text{color:#F8BA00}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/DOM-loader.js":
/*!***************************!*\
  !*** ./src/DOM-loader.js ***!
  \***************************/
/*! exports provided: dailyOz, dropdownEmail, dropdownFriendsStepsContainer, dropdownGoal, dropdownName, headerName, hydrationCalendarCard, hydrationAllUsersToday, hydrationFriendsCard, hydrationInfoCard, hydrationInfoGlassesToday, hydrationMainCard, hydrationUserOuncesToday, hydrationNewInputCard, hydrationSubmitbutton, hydrationInputDate, numOuncesInput, mainPage, profileButton, sleepCalendarCard, sleepCalendarHoursAverageWeekly, sleepCalendarQualityAverageWeekly, sleepFriendLongestSleeper, sleepFriendsCard, sleepFriendWorstSleeper, sleepInfoCard, sleepInfoHoursAverageAlltime, sleepInfoQualityAverageAlltime, sleepInfoQualityToday, sleepMainCard, sleepUserHoursToday, sleepNewInputCard, sleepInputDate, sleepInputHours, sleepInputQuality, sleepSubmitButton, inputFeedback, stairsCalendarCard, stairsCalendarFlightsAverageWeekly, stairsCalendarStairsAverageWeekly, stepsMainCard, stepsInfoCard, stepsFriendsCard, stepsTrendingCard, stepsCalendarCard, stairsFriendFlightsAverageToday, stairsFriendsCard, stairsInfoCard, stairsInfoFlightsToday, stairsMainCard, stairsTrendingButton, stairsTrendingCard, stairsUserStairsToday, stairsNewInputCard, stepsNewInputCard, stepsCalendarTotalActiveMinutesWeekly, stepsCalendarTotalStepsWeekly, stepsFriendAverageStepGoal, stepsInfoActiveMinutesToday, stepsInfoMilesWalkedToday, stepsFriendActiveMinutesAverageToday, stepsFriendStepsAverageToday, stepsTrendingButton, stepsUserStepsToday, stepsSubmitButton, stepsInputDate, stepsInputSteps, stepsInputActiveMins, stepsInputMiles, trendingStepsPhraseContainer, trendingStairsPhraseContainer, userInfoDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dailyOz", function() { return dailyOz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownEmail", function() { return dropdownEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownFriendsStepsContainer", function() { return dropdownFriendsStepsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownGoal", function() { return dropdownGoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownName", function() { return dropdownName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerName", function() { return headerName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationCalendarCard", function() { return hydrationCalendarCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationAllUsersToday", function() { return hydrationAllUsersToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationFriendsCard", function() { return hydrationFriendsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationInfoCard", function() { return hydrationInfoCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationInfoGlassesToday", function() { return hydrationInfoGlassesToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationMainCard", function() { return hydrationMainCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationUserOuncesToday", function() { return hydrationUserOuncesToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationNewInputCard", function() { return hydrationNewInputCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationSubmitbutton", function() { return hydrationSubmitbutton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationInputDate", function() { return hydrationInputDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numOuncesInput", function() { return numOuncesInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainPage", function() { return mainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileButton", function() { return profileButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepCalendarCard", function() { return sleepCalendarCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepCalendarHoursAverageWeekly", function() { return sleepCalendarHoursAverageWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepCalendarQualityAverageWeekly", function() { return sleepCalendarQualityAverageWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepFriendLongestSleeper", function() { return sleepFriendLongestSleeper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepFriendsCard", function() { return sleepFriendsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepFriendWorstSleeper", function() { return sleepFriendWorstSleeper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInfoCard", function() { return sleepInfoCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInfoHoursAverageAlltime", function() { return sleepInfoHoursAverageAlltime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInfoQualityAverageAlltime", function() { return sleepInfoQualityAverageAlltime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInfoQualityToday", function() { return sleepInfoQualityToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepMainCard", function() { return sleepMainCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepUserHoursToday", function() { return sleepUserHoursToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepNewInputCard", function() { return sleepNewInputCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInputDate", function() { return sleepInputDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInputHours", function() { return sleepInputHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInputQuality", function() { return sleepInputQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepSubmitButton", function() { return sleepSubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputFeedback", function() { return inputFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsCalendarCard", function() { return stairsCalendarCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsCalendarFlightsAverageWeekly", function() { return stairsCalendarFlightsAverageWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsCalendarStairsAverageWeekly", function() { return stairsCalendarStairsAverageWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsMainCard", function() { return stepsMainCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInfoCard", function() { return stepsInfoCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendsCard", function() { return stepsFriendsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsTrendingCard", function() { return stepsTrendingCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsCalendarCard", function() { return stepsCalendarCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsFriendFlightsAverageToday", function() { return stairsFriendFlightsAverageToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsFriendsCard", function() { return stairsFriendsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsInfoCard", function() { return stairsInfoCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsInfoFlightsToday", function() { return stairsInfoFlightsToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsMainCard", function() { return stairsMainCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsTrendingButton", function() { return stairsTrendingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsTrendingCard", function() { return stairsTrendingCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsUserStairsToday", function() { return stairsUserStairsToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsNewInputCard", function() { return stairsNewInputCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsNewInputCard", function() { return stepsNewInputCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsCalendarTotalActiveMinutesWeekly", function() { return stepsCalendarTotalActiveMinutesWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsCalendarTotalStepsWeekly", function() { return stepsCalendarTotalStepsWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendAverageStepGoal", function() { return stepsFriendAverageStepGoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInfoActiveMinutesToday", function() { return stepsInfoActiveMinutesToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInfoMilesWalkedToday", function() { return stepsInfoMilesWalkedToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendActiveMinutesAverageToday", function() { return stepsFriendActiveMinutesAverageToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendStepsAverageToday", function() { return stepsFriendStepsAverageToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsTrendingButton", function() { return stepsTrendingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsUserStepsToday", function() { return stepsUserStepsToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsSubmitButton", function() { return stepsSubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInputDate", function() { return stepsInputDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInputSteps", function() { return stepsInputSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInputActiveMins", function() { return stepsInputActiveMins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInputMiles", function() { return stepsInputMiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trendingStepsPhraseContainer", function() { return trendingStepsPhraseContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trendingStairsPhraseContainer", function() { return trendingStairsPhraseContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfoDropdown", function() { return userInfoDropdown; });
const dailyOz = document.querySelectorAll('.daily-oz');
const dropdownEmail = document.querySelector('#dropdown-email');
const dropdownFriendsStepsContainer = document.querySelector('#dropdown-friends-steps-container');
const dropdownGoal = document.querySelector('#dropdown-goal');
const dropdownName = document.querySelector('#dropdown-name');
const headerName = document.querySelector('#header-name');
const hydrationCalendarCard = document.querySelector('#hydration-calendar-card');
const hydrationAllUsersToday = document.querySelector('#hydration-friend-ounces-today');
const hydrationFriendsCard = document.querySelector('#hydration-friends-card');
const hydrationInfoCard = document.querySelector('#hydration-info-card');
const hydrationInfoGlassesToday = document.querySelector('#hydration-info-glasses-today');
const hydrationMainCard = document.querySelector('#hydration-main-card');
const hydrationUserOuncesToday = document.querySelector('#hydration-user-ounces-today');
const hydrationNewInputCard = document.querySelector(".hydration-new-input-card");
const hydrationSubmitbutton = document.querySelector(".hydration-submit-button");
const hydrationInputDate = document.querySelector("#hydration-input-date");
const numOuncesInput = document.querySelector("#hydration-ozs");
const mainPage = document.querySelector('main');
const profileButton = document.querySelector('#profile-button');
const sleepCalendarCard = document.querySelector('#sleep-calendar-card');
const sleepCalendarHoursAverageWeekly = document.querySelector('#sleep-calendar-hours-average-weekly');
const sleepCalendarQualityAverageWeekly = document.querySelector('#sleep-calendar-quality-average-weekly');
const sleepFriendLongestSleeper = document.querySelector('#sleep-friend-longest-sleeper');
const sleepFriendsCard = document.querySelector('#sleep-friends-card');
const sleepFriendWorstSleeper = document.querySelector('#sleep-friend-worst-sleeper');
const sleepInfoCard = document.querySelector('#sleep-info-card');
const sleepInfoHoursAverageAlltime = document.querySelector('#sleep-info-hours-average-alltime');
const sleepInfoQualityAverageAlltime = document.querySelector('#sleep-info-quality-average-alltime');
const sleepInfoQualityToday = document.querySelector('#sleep-info-quality-today');
const sleepMainCard = document.querySelector('#sleep-main-card');
const sleepUserHoursToday = document.querySelector('#sleep-user-hours-today');
const sleepNewInputCard = document.querySelector(".sleep-new-input-card");
const sleepInputDate = document.querySelector('#sleep-input-date');
const sleepInputHours = document.querySelector('#hours-slept');
const sleepInputQuality = document.querySelector('#sleep-quality');
const sleepSubmitButton = document.querySelector('.sleep-submit-button');
const inputFeedback = document.querySelector('.input-feedback');
const stairsCalendarCard = document.querySelector('#stairs-calendar-card');
const stairsCalendarFlightsAverageWeekly = document.querySelector('#stairs-calendar-flights-average-weekly');
const stairsCalendarStairsAverageWeekly = document.querySelector('#stairs-calendar-stairs-average-weekly');
const stepsMainCard = document.querySelector('#steps-main-card');
const stepsInfoCard = document.querySelector('#steps-info-card');
const stepsFriendsCard = document.querySelector('#steps-friends-card');
const stepsTrendingCard = document.querySelector('#steps-trending-card');
const stepsCalendarCard = document.querySelector('#steps-calendar-card');
const stairsFriendFlightsAverageToday = document.querySelector('#stairs-friend-flights-average-today');
const stairsFriendsCard = document.querySelector('#stairs-friends-card');
const stairsInfoCard = document.querySelector('#stairs-info-card');
const stairsInfoFlightsToday = document.querySelector('#stairs-info-flights-today');
const stairsMainCard = document.querySelector('#stairs-main-card');
const stairsTrendingButton = document.querySelector('.stairs-trending-button');
const stairsTrendingCard = document.querySelector('#stairs-trending-card');
const stairsUserStairsToday = document.querySelector('#stairs-user-stairs-today');
const stairsNewInputCard = document.querySelector(".stairs-new-input-card");
const stepsNewInputCard = document.querySelector(".steps-new-input-card");
const stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
const stepsCalendarTotalStepsWeekly = document.querySelector('#steps-calendar-total-steps-weekly');
const stepsFriendAverageStepGoal = document.querySelector('#steps-friend-average-step-goal');
const stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
const stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
const stepsFriendActiveMinutesAverageToday = document.querySelector('#steps-friend-active-minutes-average-today');
const stepsFriendStepsAverageToday = document.querySelector('#steps-friend-steps-average-today');
const stepsTrendingButton = document.querySelector('.steps-trending-button');
const stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
const stepsSubmitButton = document.querySelector(".steps-submit-button");
const stepsInputDate = document.querySelector("#steps-input-date");
const stepsInputSteps = document.querySelector("#steps-input");
const stepsInputActiveMins = document.querySelector("#total-active-minutes-input");
const stepsInputMiles = document.querySelector("#total-miles-input");
const trendingStepsPhraseContainer = document.querySelector('.trending-steps-phrase-container');
const trendingStairsPhraseContainer = document.querySelector('.trending-stairs-phrase-container');
const userInfoDropdown = document.querySelector('#user-info-dropdown');


/***/ }),

/***/ "./src/classes/ActivityRepository.js":
/*!*******************************************!*\
  !*** ./src/classes/ActivityRepository.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivityRepository; });
/* harmony import */ var _ClassChooser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassChooser */ "./src/classes/ClassChooser.js");
/* harmony import */ var _ParentRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParentRepository */ "./src/classes/ParentRepository.js");



class ActivityRepository extends _ParentRepository__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(fetchedData, user, dataClass, date) {
    super(fetchedData, user, dataClass, date)
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
  }
  //      this is for the input forms
  addNewActivityData(date, steps, minutes, stairs) {
    let activityDataObject = {
      "userID": this.userID,
      "date": date,
      "numSteps": steps,
      "minutesActive": minutes,
      "flightsOfStairs": stairs
    }
    this.addNewDataObject(activityDataObject)
  }

  getStepsThisWeek(date) {
    if (this.getPastWeekData(date)) {
      return this.getPastWeekData(date).reduce((stepsTotal, activity) => {
        stepsTotal += activity.numSteps;
        return stepsTotal;
      }, 0);
    } else {
      return 'No data for this week'
    }
  }

  getMilesWalked(date) {
    let activityObject = this.findDataObjectByDate(date);
    let result = ((activityObject.numSteps * this.strideLength) / 5280).toFixed(1)
    return Number(result)
  }

  checkStepGoal(date) {
    return this.findDataObjectByDate(date).numSteps >= this.dailyStepGoal ? true : false;
  }

  getGoalReachedDays() {
    return this.dataObjectArray.filter(dataObject => {
      return dataObject.numSteps >= this.dailyStepGoal;
    })
  }
  
  getBestStairDay() {
    let bestDay = this.getHighLowDataPointByKey('flightsOfStairs', 'high')
    return {date: bestDay.date, flightsOfStairs: bestDay.flightsOfStairs}
  }
}


/***/ }),

/***/ "./src/classes/ClassChooser.js":
/*!*************************************!*\
  !*** ./src/classes/ClassChooser.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_classes_Activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-classes/Activity */ "./src/classes/data-classes/Activity.js");
/* harmony import */ var _data_classes_Hydration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-classes/Hydration */ "./src/classes/data-classes/Hydration.js");
/* harmony import */ var _data_classes_Sleep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-classes/Sleep */ "./src/classes/data-classes/Sleep.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./src/classes/User.js");





class ClassChooser {
  constructor(dataClassName, date) {
    this.dataClassName = dataClassName;
    this.date = date;
  }
  
  instantiateClass(dataObject) {
    if (this.dataClassName === 'activities') {
      return new _data_classes_Activity__WEBPACK_IMPORTED_MODULE_0__["default"](dataObject)
    } else if (this.dataClassName === 'sleep') {
      return new _data_classes_Sleep__WEBPACK_IMPORTED_MODULE_2__["default"](dataObject)
    } else if (this.dataClassName === 'hydration') {
      return new _data_classes_Hydration__WEBPACK_IMPORTED_MODULE_1__["default"](dataObject)
    } else if (this.dataClassName === 'users') {
      return new _User__WEBPACK_IMPORTED_MODULE_3__["default"](dataObject, this.date)
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ClassChooser);


/***/ }),

/***/ "./src/classes/HydrationRepository.js":
/*!********************************************!*\
  !*** ./src/classes/HydrationRepository.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HydrationRepository; });
/* harmony import */ var _ClassChooser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassChooser */ "./src/classes/ClassChooser.js");
/* harmony import */ var _ParentRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParentRepository */ "./src/classes/ParentRepository.js");



class HydrationRepository extends _ParentRepository__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(fetchedData, user, dataClass) {
    super(fetchedData, user, dataClass)
    this.numOunces;
  }
  //      this is for the input forms
  addNewHydrationData(date, ounces) {
    let hydrationData = {
    "userID": this.userID,
    "date": date,
    "numOunces": ounces
    }
    this.addNewDataObject(hydrationData)
  }
}


/***/ }),

/***/ "./src/classes/ParentRepository.js":
/*!*****************************************!*\
  !*** ./src/classes/ParentRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParentRepository; });
/* harmony import */ var _ClassChooser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassChooser */ "./src/classes/ClassChooser.js");


class ParentRepository {
  constructor(fetchedData, user, dataClass, date) {
    this.date = date;
    this.dataClass = dataClass;
    this.classChooser = new _ClassChooser__WEBPACK_IMPORTED_MODULE_0__["default"](this.dataClass, date)
    this.userID = user.id;
    this.dataObjectArray = this.parseData(fetchedData);
    // console.log(fetchedData);
  }

  // Methods to add to data array of given class objects

  parseData(fetchedData) {
    // console.log(fetchedData);
    return fetchedData.reduce((parsedData, dataObject) => {
      if (dataObject.userID === this.userID) {
        parsedData.push(this.classChooser.instantiateClass(dataObject))
      }
      return parsedData
    }, [])
  }

  addNewDataObject(dataObject) {
    this.dataObjectArray.push(this.classChooser.instantiateClass(dataObject));
  }

  // Data Array Parsing Methods

  findDataObjectByDate(date) {
    return this.dataObjectArray.find(dataObject => dataObject.date === date);
  }

  getAllTimeAverageByKey(dataObjectKey) {
    let dataTotal = this.dataObjectArray.reduce((dataTotal, dataObject) => {
      dataTotal += dataObject[dataObjectKey]
      return dataTotal
    }, 0)
    return Number((dataTotal / this.dataObjectArray.length).toFixed(1))
  }

  getPastWeekData(date) {
    let index = this.dataObjectArray.indexOf(this.findDataObjectByDate(date))
    return this.dataObjectArray.slice(index - 6, index + 1)
  }

  getDataByDateAndKey(date, dataObjectKey) {
    return this.findDataObjectByDate(date)[dataObjectKey];
  }

  getAverageDataByWeekAndKey(date, dataObjectKey, decimals) {
    let weeklyAverage = (this.getPastWeekData(date).reduce((dataTotal, dataObject) => {
      dataTotal += dataObject[dataObjectKey];
      return dataTotal;
    }, 0)/7);
    return decimals ? Number(weeklyAverage.toFixed(decimals)) : Number(weeklyAverage.toFixed(0))
  }

  getHighLowDataPointByKey(dataObjectKey, highOrLow) {
    let sortedData = this.dataObjectArray.sort((a, b) => {
      return highOrLow === 'low' ? a[dataObjectKey] - b[dataObjectKey] : b[dataObjectKey] - a[dataObjectKey];
    })
    return sortedData[0]
  }

  getAllDataObjectsOnDate(date) {
    return this.dataObjectArray.filter(dataObject => {
      return dataObject.date === date;
    })
  }

  getTotalByDateAndKey(date, key) {
    let matchedData = this.getAllDataObjectsOnDate(date);
    if (matchedData) {
      return matchedData.reduce((total, dataObject) => {
        total += dataObject[key]
        return total
      }, 0)
    }
  }
  
  getWeeklyTotalByDateAndKey(date, key) {
    return this.getPastWeekData(date).reduce((dataTotal, dataObject) => {
      dataTotal += dataObject[key];
      return dataTotal;
    }, 0)
  }
}


/***/ }),

/***/ "./src/classes/SleepRepository.js":
/*!****************************************!*\
  !*** ./src/classes/SleepRepository.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SleepRepository; });
/* harmony import */ var _ClassChooser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassChooser */ "./src/classes/ClassChooser.js");
/* harmony import */ var _ParentRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParentRepository */ "./src/classes/ParentRepository.js");



class SleepRepository extends _ParentRepository__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(fetchedData, user, dataClass, date) {
    super(fetchedData, user, dataClass, date)
    this.weeklySleepHours;
    this.weeklySleepQuality;
  }

  addNewSleepData(date, hours, quality) {
    let sleepDataObject = {
      "userID": this.userID,
      "date": date,
      "hoursSlept": hours,
      "sleepQuality": quality
    }
    this.addNewDataObject(sleepDataObject)
  }
  
  getDayByDayQualityOrHours(date, qualityOrHours) {
    return this.getPastWeekData(date).map(sleepObject => {
      return qualityOrHours === 'hours' ? {date: [sleepObject.date], sleepHours: sleepObject.hoursSlept}
      : {date: [sleepObject.date], sleepQuality: sleepObject.sleepQuality};
    })
  }
}


/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _SleepRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SleepRepository */ "./src/classes/SleepRepository.js");
/* harmony import */ var _ActivityRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivityRepository */ "./src/classes/ActivityRepository.js");
/* harmony import */ var _HydrationRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HydrationRepository */ "./src/classes/HydrationRepository.js");
/* harmony import */ var _ParentRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ParentRepository */ "./src/classes/ParentRepository.js");






 class User {
   constructor(user, userData, activityData, hydrationData, sleepData, date) {
     // this.activityData = activityData;

     this.date = date;
     this.id = user.id;
     this.name = user.name;
     this.address = user.address;
     this.email = user.email;

     this.strideLength = user.strideLength;
     this.dailyStepGoal = user.dailyStepGoal;

     this.sleepRecord = [];
     this.sleepQualityRecord = [];
     this.sleepQualityAverage = 0;
     this.hoursSleptAverage = 0;

     this.ouncesRecord = [];
     this.ouncesAverage = 0;

     this.totalStepsThisWeek = 0;
     this.activityRecord = [];
     this.accomplishedDays = []; // if steps >= stepgoal
     this.trendingStepDays = []; // looks like list reads in only one direction, bottom up sequentially to determine if 'trending day'
     this.trendingStairsDays = [];

     this.friends = user.friends;
     this.friendObjects;
     this.friendsNames = []; // can check an array of users by id to see if they match your friends id. if yes, push STRING into friuendnames
     this.friendsActivityRecords = [];
   }

   populateSleepData(sleepData) {
     if (sleepData) {
       this.sleepRecord = new _SleepRepository__WEBPACK_IMPORTED_MODULE_0__["default"](
         sleepData,
         this,
         "sleep",
         this.date
       );
       // console.log(this.sleepRecord);
     } else {
       return [];
     }
   }

   populateHydrationData(hydrationData) {
     if (hydrationData) {
       this.ouncesRecord = new _HydrationRepository__WEBPACK_IMPORTED_MODULE_2__["default"](
         hydrationData,
         this,
         "hydration",
         this.date
       );
     } else {
       return [];
     }
   }

   populateActivityData(activityData) {
     if (activityData) {
       this.activityRecord = new _ActivityRepository__WEBPACK_IMPORTED_MODULE_1__["default"](
         activityData,
         this,
         "activities",
         this.date
       );
     } else {
       return [];
     }
   }

   populateFriendsData(userData, activityData, hydrationData, sleepData, date) {
     if (userData) {
       let matchedFriends = userData.filter((user) =>
         this.friends.includes(user.id)
       );
       this.friendObjects = matchedFriends.reduce((friendObjects, friend) => {
         friendObjects.push(
           new User(
             friend,
             userData,
             activityData,
             hydrationData,
             sleepData,
             date
           )
         );
         return friendObjects;
       }, []);
     } else {
       return [];
     }
   }

   populateFriendsRepos(activityData, hydrationData, sleepData) {
     this.friendObjects.forEach((friend) => {
       friend.populateSleepData(sleepData);
       friend.populateHydrationData(hydrationData);
       friend.populateActivityData(activityData);
     });
   }

   populateUserData(userData, activityData, hydrationData, sleepData, date) {
     this.populateSleepData(sleepData);
     this.populateHydrationData(hydrationData);
     this.populateActivityData(activityData);
     this.getUserAverageData();
     this.populateFriendsData(
       userData,
       activityData,
       hydrationData,
       sleepData,
       date
     );
     this.populateFriendsRepos(activityData, hydrationData, sleepData);
   }

   getUserAverageData() {
     this.sleepQualityAverage = this.sleepRecord.getAllTimeAverageByKey(
       "sleepQuality"
     ); // need to come before populating and RETURN
     this.hoursSleptAverage = this.sleepRecord.getAllTimeAverageByKey(
       "hoursSlept"
     );
     this.ouncesAverage = this.ouncesRecord.getAllTimeAverageByKey("numOunces");
     this.totalStepsThisWeek = this.activityRecord.getWeeklyTotalByDateAndKey(
       this.date,
       "numSteps"
     );
   }

   getFirstName() {
     let parsedName = this.name.split(" ");
     return parsedName[0].toUpperCase();
   }

   updateHydration(date, ounces) {
     this.ouncesRecord.addNewHydrationData(date, ounces);
     if (this.ouncesRecord.dataObjectArray.length) {
       this.ouncesAverage = this.ouncesRecord.getAllTimeAverageByKey(
         "numOunces"
       );
     } else {
       this.ouncesAverage = ounces;
     }
   }

   updateSleep(date, hours, quality) {
     this.sleepRecord.addNewSleepData(date, hours, quality);
     if (this.sleepRecord.dataObjectArray.length) {
       this.hoursSleptAverage = this.sleepRecord.getAllTimeAverageByKey(
         "hoursSlept"
       );
       this.sleepQualityAverage = this.sleepRecord.getAllTimeAverageByKey(
         "sleepQuality"
       );
     } else {
       this.hoursSleptAverage = hours;
       this.sleepQualityAverage = quality;
     }
   }

   updateActivities(date, steps, minutes, stairs) {
     this.activityRecord.addNewActivityData(date, steps, minutes, stairs);
     if (steps >= this.dailyStepGoal) {
       this.accomplishedDays.push(date);
     }
   }

   sumDailyOunces(date) {
     return this.ouncesRecord.getTotalByDateAndKey(date, "numOunces");
   }

   findClimbingRecord() {
     return this.activityRecord.getHighLowDataPointByKey(
       "flightsOfStairs",
       "high"
     ).flightsOfStairs;
   }

   getActivityDataByDate(date, dataType) {
     return this.activityRecord.findDataObjectByDate(date)[dataType];
   }
   
   getSleepDataByDate(date, dataType) {
     return this.sleepRecord.findDataObjectByDate(date)[dataType];
   }
   
   calculateDailyCalories(date) {
     let totalMinutes = this.activityRecord.getTotalByDateAndKey(
       date,
       "minutesActive"
     );
     return Math.round(totalMinutes * 7.6);
   }

   calculateAverageMinutesActiveThisWeek(date) {
     return this.activityRecord.getAverageDataByWeekAndKey(
       date,
       "minutesActive",
       0
     );
   }

   calculateAverageStepsThisWeek(date) {
     return this.activityRecord.getAverageDataByWeekAndKey(date, "numSteps");
   }

   calculateAverageFlightsThisWeek(date) {
     return this.activityRecord.getAverageDataByWeekAndKey(
       date,
       "flightsOfStairs"
     );
   }

   calculateTotalStepsThisWeek(date) {
     return this.totalStepsThisWeek;
   }

   calculateAverageQualityThisWeek(date) {
     return this.sleepRecord.getAverageDataByWeekAndKey(
       date,
       "sleepQuality",
       1
     );
   }

  calculateAverageHoursThisWeek(date) {
      return this.sleepRecord.getAverageDataByWeekAndKey(date, 'hoursSlept', 1)
    }

  findFriendsNames(friends) {
    this.friendObjects.forEach(friend => {
      this.friendsNames.push(friend.getFirstName());
    })
  }

  findFriendsTotalStepsForWeek(date) {
    this.friendsActivityRecords = this.friendObjects.map(friendObject => {
      return {
        'id': friendObject.id,
        'firstName': friendObject.getFirstName(),
        'totalWeeklySteps': friendObject.activityRecord.getStepsThisWeek(date)
      }
    })
  }

   findFriendsNames(friends) {
     this.friendObjects.forEach((friend) => {
       this.friendsNames.push(friend.getFirstName());
     });
   }
   
   findFriendsTotalStepsForWeek(date) {
     return (this.friendsActivityRecords = this.friendObjects.map(
       (friendObject) => {
         return {
           id: friendObject.id,
           firstName: friendObject.getFirstName(),
           totalWeeklySteps: friendObject.activityRecord.getStepsThisWeek(date),
         };
       }
     ));
   }

   findTrendingStairsDays() {
     let positiveDays = [];
     this.activityRecord.dataObjectArray.forEach(
       (activityObject, i, record) => {
         if (
           record[i + 1] &&
           record[i].flightsOfStairs > record[i + 1].flightsOfStairs
         ) {
           positiveDays.unshift(record[i].date);
         } else if (positiveDays.length > 2) {
           this.trendingStairsDays.push(
             `Your most recent positive climbing streak was ${
               positiveDays[0]
             } - ${positiveDays[positiveDays.length - 1]}!`
           );
           positiveDays = [];
         }
       }
     );
   }

   findTrendingStepDays() {
     let positiveDays = [];
     this.activityRecord.dataObjectArray.forEach(
       (activityObject, i, record) => {
         if (record[i + 1] && record[i].numSteps > record[i + 1].numSteps) {
           positiveDays.unshift(record[i].date);
         } else if (positiveDays.length > 2) {
           this.trendingStepDays.push(
             `Your most recent positive step streak was ${positiveDays[0]} - ${
               positiveDays[positiveDays.length - 1]
             }!`
           );
           positiveDays = [];
         }
       }
     );
   }
 }


/***/ }),

/***/ "./src/classes/UserRepository.js":
/*!***************************************!*\
  !*** ./src/classes/UserRepository.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRepository; });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/classes/User.js");


class UserRepository {
  constructor(userData, activityData, hydrationData, sleepData, date) { // other data types passed in here
    this.date = date;
    this.userObjectArray = this.parseData(userData, activityData, hydrationData, sleepData)
    this.globalStepGoal = this.getGlobalStepGoal();
    this.globalSleepQuality = this.getGlobalSleepQuality();
    this.randomUser = this.getRandomUser()
  }

  getUserObject(id) {
    return this.userObjectArray.find(user => user.id === id)
  }

  parseData(users, activityData, hydrationData, sleepData) {
    let userBase = users.reduce((parsedUsers, userObject) => {
      parsedUsers.push(new _User__WEBPACK_IMPORTED_MODULE_0__["default"](userObject, users, activityData, hydrationData, sleepData, this.date))
      return parsedUsers // was returning and ending function, need to get users, update, hand off
    }, [])
    return userBase.reduce((updatedUserBase, user) => {
      user.populateUserData(users, activityData, hydrationData, sleepData, this.date)
      updatedUserBase.push(user)
      return updatedUserBase
    }, [])
  }

  getUser(id) {
    return this.users.find(function(user) {
      return user.id === id;
    })
  }

  getRandomUser() {
    return this.userObjectArray[Math.round(Math.random() * this.userObjectArray.length)];
  }

  findBestSleepers(date) {
    return this.userObjectArray.filter(user => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    })
  }

  getLongestSleepers(date) {
    return this.userObjectArray.map(user => {
      return user.sleepRecord.findDataObjectByDate(date);
    }).sort((a, b) => {
        return b.hoursSlept - a.hoursSlept;
      })[0].userID;
  }

  getWorstSleepers(date) {
    return this.userObjectArray.map(user => {
      return user.sleepRecord.findDataObjectByDate(date);
    }).sort((a, b) => {
        return a.hoursSlept - b.hoursSlept;
      })[0].userID;
  }

  getGlobalStepGoal() {  //rename from calculateAverageStepGoal
    let globalStepGoalTotal = this.userObjectArray.reduce((stepGoalTotal, user) => {
      stepGoalTotal += user.dailyStepGoal;
      return stepGoalTotal;
    }, 0)
    return Number((globalStepGoalTotal / this.userObjectArray.length).toFixed(0))
  }

  getGlobalSleepQuality() {
    let sleepQualityTotal = this.userObjectArray.reduce((sleepQualityTotal, user) => {
      sleepQualityTotal += user.sleepQualityAverage;
      return sleepQualityTotal;
    }, 0)
    return Number((sleepQualityTotal / this.userObjectArray.length).toFixed(1))
  }

  getGlobalStepAvgByDate(date) {
    return this.userObjectArray.reduce((totalSteps, user) => {
      totalSteps += user.getActivityDataByDate(date, 'numSteps')
      return totalSteps
    }, 0) / this.userObjectArray.length
  }

  getGlobalStairAvgByDate(date) {
    return this.userObjectArray.reduce((totalSteps, user) => {
      totalSteps += user.getActivityDataByDate(date, 'flightsOfStairs')
      return totalSteps
    }, 0) / this.userObjectArray.length
  }

  getGlobalActiveAvgByDate(date) {
    return this.userObjectArray.reduce((totalSteps, user) => {
      totalSteps += user.getActivityDataByDate(date, 'minutesActive')
      return totalSteps
    }, 0) / this.userObjectArray.length
  }
  
  getGlobalWaterAvgByDate(date) {
    return Number((this.userObjectArray.reduce((totalH2O, user) => {
      totalH2O += user.sumDailyOunces(date)
      return totalH2O
    }, 0) / this.userObjectArray.length).toFixed(0))
  }
}


/***/ }),

/***/ "./src/classes/data-classes/Activity.js":
/*!**********************************************!*\
  !*** ./src/classes/data-classes/Activity.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Activity; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/classes/data-classes/Data.js");


class Activity extends _Data__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(dataObject) {
    super(dataObject);
    this.numSteps = dataObject.numSteps;
    this.minutesActive = dataObject.minutesActive;
    this.flightsOfStairs = dataObject.flightsOfStairs;
  }
}


/***/ }),

/***/ "./src/classes/data-classes/Data.js":
/*!******************************************!*\
  !*** ./src/classes/data-classes/Data.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Data; });
class Data {
  constructor(dataObject) {
    this.userID = dataObject.userID;
    this.date = dataObject.date;
  }
}


/***/ }),

/***/ "./src/classes/data-classes/Hydration.js":
/*!***********************************************!*\
  !*** ./src/classes/data-classes/Hydration.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hydration; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/classes/data-classes/Data.js");


class Hydration extends _Data__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(dataObject) {
    super(dataObject);
    this.numOunces = dataObject.numOunces;
  }
}


/***/ }),

/***/ "./src/classes/data-classes/Sleep.js":
/*!*******************************************!*\
  !*** ./src/classes/data-classes/Sleep.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sleep; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/classes/data-classes/Data.js");


class Sleep extends _Data__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(dataObject) {
    super(dataObject);
    this.hoursSlept = dataObject.hoursSlept;
    this.sleepQuality = dataObject.sleepQuality;
  }
}


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/calendar.svg":
/*!*********************************!*\
  !*** ./src/images/calendar.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/calendar.svg";

/***/ }),

/***/ "./src/images/friends.svg":
/*!********************************!*\
  !*** ./src/images/friends.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/friends.svg";

/***/ }),

/***/ "./src/images/goback.svg":
/*!*******************************!*\
  !*** ./src/images/goback.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/goback.svg";

/***/ }),

/***/ "./src/images/info.svg":
/*!*****************************!*\
  !*** ./src/images/info.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/info.svg";

/***/ }),

/***/ "./src/images/newinput.svg":
/*!*********************************!*\
  !*** ./src/images/newinput.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/newinput.svg";

/***/ }),

/***/ "./src/images/profile.png":
/*!********************************!*\
  !*** ./src/images/profile.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/profile.png";

/***/ }),

/***/ "./src/images/trending.svg":
/*!*********************************!*\
  !*** ./src/images/trending.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/trending.svg";

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DOM_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-loader */ "./src/DOM-loader.js");
/* harmony import */ var _src_classes_UserRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/classes/UserRepository */ "./src/classes/UserRepository.js");







//  <----        non-DOM vars        ---->   //
let userData;
let activityData;
let hydrationData;
let sleepData;
let user;
let userRepository;
let sortedHydrationDataByDate;

const date = "2020/01/22";

//        ****        EVENT LISTENERS       ****

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsTrendingButton"].addEventListener("click", function () {
  user.findTrendingStairsDays();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["trendingStairsPhraseContainer"].innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
});

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsTrendingButton"].addEventListener("click", function () {
  user.findTrendingStepDays();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["trendingStepsPhraseContainer"].innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
});

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepSubmitButton"].addEventListener("click", function () {
  getSleepInput(
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInputDate"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInputHours"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInputQuality"].value
  );
});

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsSubmitButton"].addEventListener("click", function () {
  getActivityInput(
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInputDate"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInputSteps"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInputActiveMins"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInputMiles"].value
  );
});

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationSubmitbutton"].addEventListener("click", function () {
  getHydrationInput(
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationInputDate"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["numOuncesInput"].value
  );
});

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["mainPage"].addEventListener("click", showInfo);

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["profileButton"].addEventListener("click", showDropdown);

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsTrendingButton"].addEventListener("click", updateTrendingStairsDays);

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsTrendingButton"].addEventListener("click", updateTrendingStepDays);


//        ****        USER DATA INPUT FUNCTIONS       ****

const getSleepInput = (date, hours, quality) => {
  let id = Number(user.id);
  date = date.replaceAll("-", "/");
  hours = Number(hours);
  quality = Number(quality);
  submitSleepData(id, date, hours, quality);
  user.updateSleep(date, hours, quality);
};

const getActivityInput = (date, numSteps, minutesActive, flightsOfStairs) => {
  let id = Number(user.id);
  date = date.replaceAll("-", "/");
  numSteps = Number(numSteps);
  minutesActive = Number(minutesActive);
  flightsOfStairs = Number(flightsOfStairs);
  submitActivityData(id, date, numSteps, minutesActive, flightsOfStairs);
  user.updateActivities(date, numSteps, minutesActive, flightsOfStairs);
};

const getHydrationInput = (date, numOunces) => {
  let id = Number(user.id);
  date = date.replaceAll("-", "/");
  numOunces = Number(numOunces);
  submitHydrationData(id, date, numOunces);
  user.updateHydration(date, numOunces)
};

const showInputFeedback = (message) => {
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["inputFeedback"].innerText = message;
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["inputFeedback"].classList.remove("hide");
};

const submitSleepData = (id, date, hours, quality) => {
  fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: id,
      date: date,
      hoursSlept: hours,
      sleepQuality: quality,
    }),
  })
    .then((resp) => resp.json())
    .then(() => {
      showInputFeedback("Update successful.  Great job!");
    })
    .catch(() => {
      showInputFeedback("There was an error.  Please try again.");
    });
};

const submitActivityData = (id, date, numSteps, minutesActive, flightsOfStairs) => {
  fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/ActivityData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: id,
      date: date,
      numSteps: numSteps,
      minutesActive: minutesActive,
      flightsOfStairs: flightsOfStairs,
    }),
  })
    .then((resp) => resp.json())
    .then(() => {
      showInputFeedback("Input success.  Great job!");
    })
    .catch(() => {
      showInputFeedback("There was an error.  Please try again.");
    });
};

const submitHydrationData = (id, date, numOunces) => {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: id,
        date: date,
        numOunces: numOunces
      }),
    }
  )
    .then((resp) => resp.json())
    .then(() => {
      showInputFeedback("Input success.  Great job!");
    })
    .catch(() => {
      showInputFeedback("There was an error.  Please try again.");
    });
};

//        ****        FETCH DATA FUNCTIONS / LOAD DATA FUNCTIONS       ****

const userPromise = fetch(
"https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData"
).then((resp) => resp.json());

const activityPromise = fetch(
  "https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData"
).then((resp) => resp.json());

const hydrationPromise = fetch(
  "https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData"
).then((resp) => resp.json());

const sleepPromise = fetch(
  "https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData"
).then((resp) => resp.json());

Promise.all([userPromise, activityPromise, hydrationPromise, sleepPromise])
  .then((data) => {
    activityData = data[1].activityData;
    hydrationData = data[2].hydrationData;
    sleepData = data[3].sleepData;
    userData = data[0].userData;
    userRepository = new _src_classes_UserRepository__WEBPACK_IMPORTED_MODULE_3__["default"](
      userData,
      activityData,
      hydrationData,
      sleepData,
      date
    );
  })
  .then(() => {
    loadApp();
  });

const loadApp = () => {
  user = userRepository.getRandomUser();
  user.populateUserData();
  user.findFriendsNames(userRepository.dataObjectArray); //TODO goes inside user as method
  updateText();
};

function loadFriendsActivityRecords() {
  user.findFriendsTotalStepsForWeek(date).sort((a,b)=>b.totalWeeklySteps-a.totalWeeklySteps);
  user.friendsActivityRecords.forEach(friend => {
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["dropdownFriendsStepsContainer"].innerHTML += `
    <p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>
    `;
  });
  let friendsStepsParagraphs = document.querySelectorAll(".friends-steps");
  friendsStepsParagraphs.forEach((paragraph) => {
    if (friendsStepsParagraphs[0] === paragraph) {
      paragraph.classList.add("green-text");
    }
    if (
      friendsStepsParagraphs[friendsStepsParagraphs.length - 1] === paragraph
    ) {
      paragraph.classList.add("red-text");
    }
    if (paragraph.innerText.includes("YOU")) {
      paragraph.classList.add("yellow-text");
    }
  });
}

//        ****        UI DISPLAY FUNCTIONS       ****

const updateText = () => {
  displayUserInfo();
  displayHydrationInfo();
  displaySleepInfo();
  displayStairsInfo();
  displayStepsInfo();
};

const displayUserInfo = () => {
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["dropdownGoal"].innerText = `DAILY STEP GOAL | ${user.dailyStepGoal}`;
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["dropdownEmail"].innerText = `EMAIL | ${user.email}`;
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["dropdownName"].innerText = user.name.toUpperCase();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["headerName"].innerText = `${user.getFirstName()}'S `;
};

const displayHydrationInfo = () => {
  let pastWeekHydration = user.ouncesRecord.getPastWeekData(date)
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationUserOuncesToday"].innerText = pastWeekHydration[6].numOunces;
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationAllUsersToday"].innerText = userRepository.getGlobalWaterAvgByDate(date);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationInfoGlassesToday"].innerText = (pastWeekHydration[6].numOunces / 8).toFixed(1);
  pastWeekHydration.forEach((day, i) => {
    if(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["dailyOz"][i]) {
      _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["dailyOz"][i].innerText = day.numOunces
    }
  });
};

const displaySleepInfo = () => {
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepCalendarHoursAverageWeekly"].innerText = user.calculateAverageHoursThisWeek(date);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepCalendarQualityAverageWeekly"].innerText = user.calculateAverageQualityThisWeek(date);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepFriendLongestSleeper"].innerText = userRepository.userObjectArray.find(user => {
    return user.id === userRepository.getLongestSleepers(date)
  }).getFirstName();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepFriendWorstSleeper"].innerText = userRepository.userObjectArray.find(user => {
    return user.id === userRepository.getWorstSleepers(date)
  }).getFirstName();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInfoHoursAverageAlltime"].innerText = user.hoursSleptAverage;
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInfoMilesWalkedToday"].innerText = user.activityRecord.getMilesWalked(date);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInfoQualityAverageAlltime"].innerText = user.sleepQualityAverage;
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInfoQualityToday"].innerText = user.getSleepDataByDate(date, 'sleepQuality');
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepUserHoursToday"].innerText = _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepUserHoursToday"].innerText = user.getSleepDataByDate(date, 'hoursSlept');
};

const displayStairsInfo = () => {
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsCalendarFlightsAverageWeekly"].innerText = user.calculateAverageFlightsThisWeek(date);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsCalendarStairsAverageWeekly"].innerText = (user.calculateAverageFlightsThisWeek(date) * 12).toFixed(0);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsFriendFlightsAverageToday"].innerText = (userRepository.getGlobalStairAvgByDate(date) / 12).toFixed(1);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsInfoFlightsToday"].innerText = user.getActivityDataByDate(date, 'flightsOfStairs');
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsUserStairsToday"].innerText = user.getActivityDataByDate(date, 'flightsOfStairs') * 12;
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsCalendarFlightsAverageWeekly"].innerText = user.calculateAverageFlightsThisWeek(date);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsCalendarStairsAverageWeekly"].innerText = (user.calculateAverageFlightsThisWeek(date) * 12).toFixed(0);
};

const displayStepsInfo = () => {
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsUserStepsToday"].innerText = user.getActivityDataByDate(date, 'numSteps')
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInfoActiveMinutesToday"].innerText = user.getActivityDataByDate(date, 'minutesActive')
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsCalendarTotalStepsWeekly"].innerText = user.activityRecord.getStepsThisWeek(date);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsCalendarTotalActiveMinutesWeekly"].innerText = user.calculateAverageMinutesActiveThisWeek(date);
  loadFriendsActivityRecords()
  displayStepsInfoFriends()
};

function displayStepsInfoFriends() {
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsFriendAverageStepGoal"].innerText = userRepository.getGlobalStepGoal().toFixed(0);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsFriendStepsAverageToday"].innerText = userRepository.getGlobalStepAvgByDate(date).toFixed(0);
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsFriendActiveMinutesAverageToday"].innerText = userRepository.getGlobalActiveAvgByDate(date).toFixed(0);
}

function updateTrendingStairsDays() {
  user.findTrendingStairsDays();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["trendingStairsPhraseContainer"].innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
}

function updateTrendingStepDays() {
  user.findTrendingStepDays();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["trendingStepsPhraseContainer"].innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
}

//        ****        UI INTERACTION FUNCTIONS       ****


function flipCard(cardToHide, cardToShow) {
  cardToHide.classList.add("hide");
  cardToShow.classList.remove("hide");
}

function showDropdown() {
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["userInfoDropdown"].classList.toggle("hide");
}

function showInfo() {
  if (event.target.classList.contains("steps-info-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInfoCard"]);
  }
  if (event.target.classList.contains("steps-friends-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsFriendsCard"]);
  }
  if (event.target.classList.contains("steps-trending-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsTrendingCard"]);
  }
  if (event.target.classList.contains("steps-calendar-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsCalendarCard"]);
  }
  if (event.target.classList.contains("steps-new-input-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsNewInputCard"]);
  }
  if (event.target.classList.contains("hydration-info-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationInfoCard"]);
  }
  if (event.target.classList.contains("hydration-friends-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationFriendsCard"]);
  }
  if (event.target.classList.contains("hydration-calendar-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationCalendarCard"]);
  }
  if (event.target.classList.contains("hydration-new-input-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationNewInputCard"]);
  }
  if (event.target.classList.contains("stairs-info-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsInfoCard"]);
  }
  if (event.target.classList.contains("stairs-friends-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsFriendsCard"]);
  }
  if (event.target.classList.contains("stairs-trending-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsTrendingCard"]);
  }
  if (event.target.classList.contains("stairs-calendar-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsCalendarCard"]);
  }
  if (event.target.classList.contains("stairs-new-input-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsNewInputCard"]);
  }
  if (event.target.classList.contains("sleep-info-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInfoCard"]);
  }
  if (event.target.classList.contains("sleep-friends-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepFriendsCard"]);
  }
  if (event.target.classList.contains("sleep-calendar-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepCalendarCard"]);
  }
  if (event.target.classList.contains("sleep-new-input-button")) {
    flipCard(_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepMainCard"], _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepNewInputCard"]);
  }
  if (event.target.classList.contains("steps-go-back-button")) {
    flipCard(event.target.parentNode, _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"]);
  }
  if (event.target.classList.contains("hydration-go-back-button")) {
    flipCard(event.target.parentNode, _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationMainCard"]);
  }
  if (event.target.classList.contains("stairs-go-back-button")) {
    flipCard(event.target.parentNode, _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"]);
  }
  if (event.target.classList.contains("sleep-go-back-button")) {
    flipCard(event.target.parentNode, _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepMainCard"]);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQWN0aXZpdHlSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0NsYXNzQ2hvb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9IeWRyYXRpb25SZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1BhcmVudFJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvU2xlZXBSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvVXNlclJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGF0YS1jbGFzc2VzL0FjdGl2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2RhdGEtY2xhc3Nlcy9EYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2RhdGEtY2xhc3Nlcy9IeWRyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGF0YS1jbGFzc2VzL1NsZWVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2JhODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzPzYxZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jYWxlbmRhci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9mcmllbmRzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2dvYmFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pbmZvLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL25ld2lucHV0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Byb2ZpbGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdHJlbmRpbmcuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwy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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkVQO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ1E7O0FBRW5DLGlDQUFpQyx5REFBZ0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNFO0FBQ1I7QUFDZjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFLLHNDQUFzQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsMERBQTBELGdCQUFnQjtBQUMxRTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZUQTtBQUFBO0FBQUE7QUFBMEI7O0FBRVg7QUFDZix1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJB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bGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7YmFja2dyb3VuZC1jb2xvcjpwaW5rfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciB1cmxFc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvcHJvZmlsZS5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2luZm8uc3ZnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9mcmllbmRzLnN2Z1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvY2FsZW5kYXIuc3ZnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy90cmVuZGluZy5zdmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL25ld2lucHV0LnN2Z1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX182X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvZ29iYWNrLnN2Z1wiKSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiwqOmFmdGVyLCo6YmVmb3Jle2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW46MDtwYWRkaW5nOjB9Ym9keXtiYWNrZ3JvdW5kLWNvbG9yOiMxRjFGMUY7Zm9udC1mYW1pbHk6J09zd2FsZCcsIHNhbnMtc2VyaWZ9aGVhZGVye3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDo5dnd9YnV0dG9uOmFjdGl2ZXtib3JkZXI6bm9uZTtvdXRsaW5lOm5vbmV9I3Byb2ZpbGUtYnV0dG9ue2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTo1LjZ2dztib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZTtmbG9hdDpyaWdodDtoZWlnaHQ6NS42dnc7bWFyZ2luLXJpZ2h0Oi41dnc7bWFyZ2luLXRvcDoxLjZ2dzt3aWR0aDo1LjZ2d30jcHJvZmlsZS1idXR0b246aG92ZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEuMyk7dHJhbnNmb3JtOnNjYWxlKDEuMyl9I3VzZXItaW5mby1kcm9wZG93bntiYWNrZ3JvdW5kLWNvbG9yOiMxRjFGMUY7Y29sb3I6I2ZmZjttYXJnaW46LTEuMiUgMCAwIDYwJTtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjEwMDtib3JkZXI6MnB4IHNvbGlkIHdoaXRlfSNkcm9wZG93bi1uYW1le3RleHQtYWxpZ246bGVmdDttYXJnaW4tbGVmdDoxdnd9LmRyb3Bkb3duLXB7Zm9udC1zaXplOjEuNXZ3O2xldHRlci1zcGFjaW5nOm5vcm1hbDtmb250LXdlaWdodDozMDA7cGFkZGluZzowIDAgMXZ3IDA7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJX1oMXtjb2xvcjojZmZmO2Rpc3BsYXk6aW5saW5lO2ZvbnQtc2l6ZTo1LjR2dztsZXR0ZXItc3BhY2luZzouMmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbH1oMntkaXNwbGF5OmlubGluZTtmb250LWZhbWlseTpcXFwiV29yayBTYW5zXFxcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyLjR2dztsZXR0ZXItc3BhY2luZzouMmVtO2ZvbnQtd2VpZ2h0OjcwMH1oM3tmb250LXNpemU6Ni43NXZ3O2xldHRlci1zcGFjaW5nOi4xZW07Zm9udC13ZWlnaHQ6Ym9sZH1oNHtmb250LXNpemU6NS42dnd9aDV7Zm9udC1zaXplOjEuOHZ3O3BhZGRpbmctYm90dG9tOjF2dzt0ZXh0LWFsaWduOmNlbnRlcn1we2ZvbnQtZmFtaWx5OlxcXCJXb3JrIFNhbnNcXFwiLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEuMnZ3O2xldHRlci1zcGFjaW5nOi4ydnc7Zm9udC13ZWlnaHQ6NjAwO21hcmdpbi1yaWdodDoxdnc7cGFkZGluZy10b3A6MnZ3O3RleHQtYWxpZ246cmlnaHQ7d2lkdGg6OXZ3O3dvcmQtYnJlYWs6a2VlcC1hbGx9LmZlZWRiYWNrLWNvbnRhaW5lcntkaXNwbGF5OmNlbnRlcjtoZWlnaHQ6YXV0b30uaW5wdXQtZmVlZGJhY2t7Y29sb3I6I2ZmZjtmb250LXNpemU6MnZ3O2xldHRlci1zcGFjaW5nOi4ydnc7Zm9udC13ZWlnaHQ6NDAwO3dpZHRoOjEwMCU7cGFkZGluZzouNXZ3IDAgLjV2dyAwO3RleHQtYWxpZ246Y2VudGVyfW1haW57ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtYXJlYXM6J3N0ZXBzIGh5ZHJhdGlvbicgJ3N0YWlycyBzbGVlcCc7aGVpZ2h0OjEwMCV9Lm1haW4tY2FyZHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2hlaWdodDoyMHZ3fS5tYWluLWNhcmQtbWlkZGxle2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlfS5tYWluLWNhcmQtcm93e2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJX0jc3RlcHMtY2FyZC1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojRTY2MTAwO2dyaWQtYXJlYTpzdGVwczttYXJnaW46LjV2d30jaHlkcmF0aW9uLWNhcmQtY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6IzBDN0JEQztncmlkLWFyZWE6aHlkcmF0aW9uO21hcmdpbjouNXZ3fSNzdGFpcnMtY2FyZC1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojODk3NUIyO2dyaWQtYXJlYTpzdGFpcnM7bWFyZ2luOi41dnd9I3NsZWVwLWNhcmQtY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6IzIzODc5ZjtncmlkLWFyZWE6c2xlZXA7bWFyZ2luOi41dnd9LmNhbGVuZGFyLWNhcmR7cGFkZGluZy1ib3R0b206MTAlfS5jYXJkLWRhdGEtbGluZXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpyb3c7bWFyZ2luOi00dncgMCAydncgMH0uaW5mby10ZXh0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjM1JTtwYWRkaW5nOjB9LmluZm8tbnVtYmVye3dpZHRoOjM1JX1sYWJlbHtmb250LXNpemU6NnZoO2xldHRlci1zcGFjaW5nOm5vcm1hbDtmb250LXdlaWdodDo2MDB9aW5wdXR7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWxlZnQ6MXZ3O2hlaWdodDo2dmg7cGFkZGluZzowLjV2dztmb250LXNpemU6M3ZofS5pbnB1dC1mb3Jte2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmctYm90dG9tOjF2aDttYXJnaW46LTR2dyAwIDR2dyAwfS5pbnB1dC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uc3VibWl0LWJ1dHRvbntmb250LWZhbWlseTpcXFwiV29yayBTYW5zXFxcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozdnc7bGV0dGVyLXNwYWNpbmc6LjJlbTtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojMDAwMDAwO2NvbG9yOiNmZmZmZmY7Ym9yZGVyOm5vbmU7aGVpZ2h0OjZ2dzttYXJnaW4tdG9wOjJ2dyAwIDJ2dyAwO3dpZHRoOjM1LjR2d30uc3VibWl0LWJ1dHRvbjpmb2N1cy5zdWJtaXQtYnV0dG9ue291dGxpbmU6MnB4IHNvbGlkICNGRkZGRkY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5oeWRyYXRpb24td2Vla2x5LWxhYmVse2ZvbnQtc2l6ZToxdnc7cGFkZGluZy10b3A6MXZ3fS5oeWRyYXRpb24td2Vla2x5LWFtb3VudHtmb250LXNpemU6MnZ3fS5oeWRyYXRpb24tZGF0YS1saW5le2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206LjJ2d30udHJlbmQtbGluZXtmb250LXNpemU6MnZ3O3dpZHRoOjIwdnc7dGV4dC1hbGlnbjpjZW50ZXJ9LmluZm8tYnV0dG9ue2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTozLjR2dztiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2Rpc3BsYXk6aW5saW5lO2hlaWdodDozLjR2dzt3aWR0aDozLjR2dztiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKTttYXJnaW4tbGVmdDoxdnd9LmluZm8tYnV0dG9uOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxLjMpO3RyYW5zZm9ybTpzY2FsZSgxLjMpfS5mcmllbmRzLWJ1dHRvbntiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6My40dnc7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZTtoZWlnaHQ6My40dnc7d2lkdGg6My40dnc7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIik7bWFyZ2luLXJpZ2h0OjF2d30uZnJpZW5kcy1idXR0b246aG92ZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEuMyk7dHJhbnNmb3JtOnNjYWxlKDEuMyl9LmNhbGVuZGFyLWJ1dHRvbntiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6My40dnc7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZTtoZWlnaHQ6My40dnc7d2lkdGg6My40dnc7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIik7bWFyZ2luLXJpZ2h0OjF2dztmbG9hdDpyaWdodH0uY2FsZW5kYXItYnV0dG9uOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxLjMpO3RyYW5zZm9ybTpzY2FsZSgxLjMpfS50cmVuZGluZy1idXR0b257YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOjMuNHZ3O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7ZGlzcGxheTppbmxpbmU7aGVpZ2h0OjMuNHZ3O3dpZHRoOjMuNHZ3O2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpO21hcmdpbi1sZWZ0Oi41dnc7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxdnd9LnRyZW5kaW5nLWJ1dHRvbjpob3Zlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjMpOy1tcy10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX0ubmV3LWlucHV0LWJ1dHRvbntiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6My40dnc7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZTtoZWlnaHQ6My40dnc7d2lkdGg6My40dnc7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIik7bWFyZ2luLWxlZnQ6MXZ3fS5uZXctaW5wdXQtYnV0dG9uOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxLjMpO3RyYW5zZm9ybTpzY2FsZSgxLjMpfS5nby1iYWNrLWJ1dHRvbntiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6My40dnc7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZTtoZWlnaHQ6My40dnc7d2lkdGg6My40dnc7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzZfX18gKyBcIik7bWFyZ2luOjEuOHZ3fS5nby1iYWNrLWJ1dHRvbjpob3Zlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjMpOy1tcy10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX0uaGlkZXtkaXNwbGF5Om5vbmV9LmdyZWVuLXRleHR7Y29sb3I6Z3JlZW59LnJlZC10ZXh0e2NvbG9yOnJlZH0ueWVsbG93LXRleHR7Y29sb3I6I0Y4QkEwMH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGRhaWx5T3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktb3onKTtcbmV4cG9ydCBjb25zdCBkcm9wZG93bkVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duLWVtYWlsJyk7XG5leHBvcnQgY29uc3QgZHJvcGRvd25GcmllbmRzU3RlcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd24tZnJpZW5kcy1zdGVwcy1jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBkcm9wZG93bkdvYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd24tZ29hbCcpO1xuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bi1uYW1lJyk7XG5leHBvcnQgY29uc3QgaGVhZGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXItbmFtZScpO1xuZXhwb3J0IGNvbnN0IGh5ZHJhdGlvbkNhbGVuZGFyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoeWRyYXRpb24tY2FsZW5kYXItY2FyZCcpO1xuZXhwb3J0IGNvbnN0IGh5ZHJhdGlvbkFsbFVzZXJzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLWZyaWVuZC1vdW5jZXMtdG9kYXknKTtcbmV4cG9ydCBjb25zdCBoeWRyYXRpb25GcmllbmRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoeWRyYXRpb24tZnJpZW5kcy1jYXJkJyk7XG5leHBvcnQgY29uc3QgaHlkcmF0aW9uSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLWluZm8tY2FyZCcpO1xuZXhwb3J0IGNvbnN0IGh5ZHJhdGlvbkluZm9HbGFzc2VzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLWluZm8tZ2xhc3Nlcy10b2RheScpO1xuZXhwb3J0IGNvbnN0IGh5ZHJhdGlvbk1haW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h5ZHJhdGlvbi1tYWluLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBoeWRyYXRpb25Vc2VyT3VuY2VzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLXVzZXItb3VuY2VzLXRvZGF5Jyk7XG5leHBvcnQgY29uc3QgaHlkcmF0aW9uTmV3SW5wdXRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oeWRyYXRpb24tbmV3LWlucHV0LWNhcmRcIik7XG5leHBvcnQgY29uc3QgaHlkcmF0aW9uU3VibWl0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oeWRyYXRpb24tc3VibWl0LWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBoeWRyYXRpb25JbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h5ZHJhdGlvbi1pbnB1dC1kYXRlXCIpO1xuZXhwb3J0IGNvbnN0IG51bU91bmNlc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoeWRyYXRpb24tb3pzXCIpO1xuZXhwb3J0IGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBzbGVlcENhbGVuZGFyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1jYWxlbmRhci1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBDYWxlbmRhckhvdXJzQXZlcmFnZVdlZWtseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1jYWxlbmRhci1ob3Vycy1hdmVyYWdlLXdlZWtseScpO1xuZXhwb3J0IGNvbnN0IHNsZWVwQ2FsZW5kYXJRdWFsaXR5QXZlcmFnZVdlZWtseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1jYWxlbmRhci1xdWFsaXR5LWF2ZXJhZ2Utd2Vla2x5Jyk7XG5leHBvcnQgY29uc3Qgc2xlZXBGcmllbmRMb25nZXN0U2xlZXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1mcmllbmQtbG9uZ2VzdC1zbGVlcGVyJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBGcmllbmRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1mcmllbmRzLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBzbGVlcEZyaWVuZFdvcnN0U2xlZXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1mcmllbmQtd29yc3Qtc2xlZXBlcicpO1xuZXhwb3J0IGNvbnN0IHNsZWVwSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtaW5mby1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBJbmZvSG91cnNBdmVyYWdlQWxsdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1pbmZvLWhvdXJzLWF2ZXJhZ2UtYWxsdGltZScpO1xuZXhwb3J0IGNvbnN0IHNsZWVwSW5mb1F1YWxpdHlBdmVyYWdlQWxsdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1pbmZvLXF1YWxpdHktYXZlcmFnZS1hbGx0aW1lJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBJbmZvUXVhbGl0eVRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsZWVwLWluZm8tcXVhbGl0eS10b2RheScpO1xuZXhwb3J0IGNvbnN0IHNsZWVwTWFpbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtbWFpbi1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBVc2VySG91cnNUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC11c2VyLWhvdXJzLXRvZGF5Jyk7XG5leHBvcnQgY29uc3Qgc2xlZXBOZXdJbnB1dENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsZWVwLW5ldy1pbnB1dC1jYXJkXCIpO1xuZXhwb3J0IGNvbnN0IHNsZWVwSW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsZWVwLWlucHV0LWRhdGUnKTtcbmV4cG9ydCBjb25zdCBzbGVlcElucHV0SG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cnMtc2xlcHQnKTtcbmV4cG9ydCBjb25zdCBzbGVlcElucHV0UXVhbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1xdWFsaXR5Jyk7XG5leHBvcnQgY29uc3Qgc2xlZXBTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xlZXAtc3VibWl0LWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGlucHV0RmVlZGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmVlZGJhY2snKTtcbmV4cG9ydCBjb25zdCBzdGFpcnNDYWxlbmRhckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWNhbGVuZGFyLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBzdGFpcnNDYWxlbmRhckZsaWdodHNBdmVyYWdlV2Vla2x5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy1jYWxlbmRhci1mbGlnaHRzLWF2ZXJhZ2Utd2Vla2x5Jyk7XG5leHBvcnQgY29uc3Qgc3RhaXJzQ2FsZW5kYXJTdGFpcnNBdmVyYWdlV2Vla2x5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy1jYWxlbmRhci1zdGFpcnMtYXZlcmFnZS13ZWVrbHknKTtcbmV4cG9ydCBjb25zdCBzdGVwc01haW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLW1haW4tY2FyZCcpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtaW5mby1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc3RlcHNGcmllbmRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1mcmllbmRzLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBzdGVwc1RyZW5kaW5nQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy10cmVuZGluZy1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc3RlcHNDYWxlbmRhckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtY2FsZW5kYXItY2FyZCcpO1xuZXhwb3J0IGNvbnN0IHN0YWlyc0ZyaWVuZEZsaWdodHNBdmVyYWdlVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWZyaWVuZC1mbGlnaHRzLWF2ZXJhZ2UtdG9kYXknKTtcbmV4cG9ydCBjb25zdCBzdGFpcnNGcmllbmRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFpcnMtZnJpZW5kcy1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc3RhaXJzSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWluZm8tY2FyZCcpO1xuZXhwb3J0IGNvbnN0IHN0YWlyc0luZm9GbGlnaHRzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWluZm8tZmxpZ2h0cy10b2RheScpO1xuZXhwb3J0IGNvbnN0IHN0YWlyc01haW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy1tYWluLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBzdGFpcnNUcmVuZGluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFpcnMtdHJlbmRpbmctYnV0dG9uJyk7XG5leHBvcnQgY29uc3Qgc3RhaXJzVHJlbmRpbmdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy10cmVuZGluZy1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc3RhaXJzVXNlclN0YWlyc1RvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy11c2VyLXN0YWlycy10b2RheScpO1xuZXhwb3J0IGNvbnN0IHN0YWlyc05ld0lucHV0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhaXJzLW5ldy1pbnB1dC1jYXJkXCIpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzTmV3SW5wdXRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGVwcy1uZXctaW5wdXQtY2FyZFwiKTtcbmV4cG9ydCBjb25zdCBzdGVwc0NhbGVuZGFyVG90YWxBY3RpdmVNaW51dGVzV2Vla2x5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLWNhbGVuZGFyLXRvdGFsLWFjdGl2ZS1taW51dGVzLXdlZWtseScpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzQ2FsZW5kYXJUb3RhbFN0ZXBzV2Vla2x5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLWNhbGVuZGFyLXRvdGFsLXN0ZXBzLXdlZWtseScpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzRnJpZW5kQXZlcmFnZVN0ZXBHb2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLWZyaWVuZC1hdmVyYWdlLXN0ZXAtZ29hbCcpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzSW5mb0FjdGl2ZU1pbnV0ZXNUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1pbmZvLWFjdGl2ZS1taW51dGVzLXRvZGF5Jyk7XG5leHBvcnQgY29uc3Qgc3RlcHNJbmZvTWlsZXNXYWxrZWRUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1pbmZvLW1pbGVzLXdhbGtlZC10b2RheScpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzRnJpZW5kQWN0aXZlTWludXRlc0F2ZXJhZ2VUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1mcmllbmQtYWN0aXZlLW1pbnV0ZXMtYXZlcmFnZS10b2RheScpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzRnJpZW5kU3RlcHNBdmVyYWdlVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtZnJpZW5kLXN0ZXBzLWF2ZXJhZ2UtdG9kYXknKTtcbmV4cG9ydCBjb25zdCBzdGVwc1RyZW5kaW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0ZXBzLXRyZW5kaW5nLWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzVXNlclN0ZXBzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtdXNlci1zdGVwcy10b2RheScpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGVwcy1zdWJtaXQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzSW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwcy1pbnB1dC1kYXRlXCIpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzSW5wdXRTdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcHMtaW5wdXRcIik7XG5leHBvcnQgY29uc3Qgc3RlcHNJbnB1dEFjdGl2ZU1pbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsLWFjdGl2ZS1taW51dGVzLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzSW5wdXRNaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWwtbWlsZXMtaW5wdXRcIik7XG5leHBvcnQgY29uc3QgdHJlbmRpbmdTdGVwc1BocmFzZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVuZGluZy1zdGVwcy1waHJhc2UtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgdHJlbmRpbmdTdGFpcnNQaHJhc2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlbmRpbmctc3RhaXJzLXBocmFzZS1jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCB1c2VySW5mb0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXItaW5mby1kcm9wZG93bicpO1xuIiwiaW1wb3J0IENsYXNzQ2hvb3NlciBmcm9tICcuL0NsYXNzQ2hvb3Nlcic7XG5pbXBvcnQgUGFyZW50UmVwb3NpdG9yeSBmcm9tICcuL1BhcmVudFJlcG9zaXRvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpdml0eVJlcG9zaXRvcnkgZXh0ZW5kcyBQYXJlbnRSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoZmV0Y2hlZERhdGEsIHVzZXIsIGRhdGFDbGFzcywgZGF0ZSkge1xuICAgIHN1cGVyKGZldGNoZWREYXRhLCB1c2VyLCBkYXRhQ2xhc3MsIGRhdGUpXG4gICAgdGhpcy5zdHJpZGVMZW5ndGggPSB1c2VyLnN0cmlkZUxlbmd0aDtcbiAgICB0aGlzLmRhaWx5U3RlcEdvYWwgPSB1c2VyLmRhaWx5U3RlcEdvYWw7XG4gIH1cbiAgLy8gICAgICB0aGlzIGlzIGZvciB0aGUgaW5wdXQgZm9ybXNcbiAgYWRkTmV3QWN0aXZpdHlEYXRhKGRhdGUsIHN0ZXBzLCBtaW51dGVzLCBzdGFpcnMpIHtcbiAgICBsZXQgYWN0aXZpdHlEYXRhT2JqZWN0ID0ge1xuICAgICAgXCJ1c2VySURcIjogdGhpcy51c2VySUQsXG4gICAgICBcImRhdGVcIjogZGF0ZSxcbiAgICAgIFwibnVtU3RlcHNcIjogc3RlcHMsXG4gICAgICBcIm1pbnV0ZXNBY3RpdmVcIjogbWludXRlcyxcbiAgICAgIFwiZmxpZ2h0c09mU3RhaXJzXCI6IHN0YWlyc1xuICAgIH1cbiAgICB0aGlzLmFkZE5ld0RhdGFPYmplY3QoYWN0aXZpdHlEYXRhT2JqZWN0KVxuICB9XG5cbiAgZ2V0U3RlcHNUaGlzV2VlayhkYXRlKSB7XG4gICAgaWYgKHRoaXMuZ2V0UGFzdFdlZWtEYXRhKGRhdGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRQYXN0V2Vla0RhdGEoZGF0ZSkucmVkdWNlKChzdGVwc1RvdGFsLCBhY3Rpdml0eSkgPT4ge1xuICAgICAgICBzdGVwc1RvdGFsICs9IGFjdGl2aXR5Lm51bVN0ZXBzO1xuICAgICAgICByZXR1cm4gc3RlcHNUb3RhbDtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ05vIGRhdGEgZm9yIHRoaXMgd2VlaydcbiAgICB9XG4gIH1cblxuICBnZXRNaWxlc1dhbGtlZChkYXRlKSB7XG4gICAgbGV0IGFjdGl2aXR5T2JqZWN0ID0gdGhpcy5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKTtcbiAgICBsZXQgcmVzdWx0ID0gKChhY3Rpdml0eU9iamVjdC5udW1TdGVwcyAqIHRoaXMuc3RyaWRlTGVuZ3RoKSAvIDUyODApLnRvRml4ZWQoMSlcbiAgICByZXR1cm4gTnVtYmVyKHJlc3VsdClcbiAgfVxuXG4gIGNoZWNrU3RlcEdvYWwoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLmZpbmREYXRhT2JqZWN0QnlEYXRlKGRhdGUpLm51bVN0ZXBzID49IHRoaXMuZGFpbHlTdGVwR29hbCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGdldEdvYWxSZWFjaGVkRGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhT2JqZWN0QXJyYXkuZmlsdGVyKGRhdGFPYmplY3QgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFPYmplY3QubnVtU3RlcHMgPj0gdGhpcy5kYWlseVN0ZXBHb2FsO1xuICAgIH0pXG4gIH1cbiAgXG4gIGdldEJlc3RTdGFpckRheSgpIHtcbiAgICBsZXQgYmVzdERheSA9IHRoaXMuZ2V0SGlnaExvd0RhdGFQb2ludEJ5S2V5KCdmbGlnaHRzT2ZTdGFpcnMnLCAnaGlnaCcpXG4gICAgcmV0dXJuIHtkYXRlOiBiZXN0RGF5LmRhdGUsIGZsaWdodHNPZlN0YWlyczogYmVzdERheS5mbGlnaHRzT2ZTdGFpcnN9XG4gIH1cbn1cbiIsImltcG9ydCBBY3Rpdml0eSBmcm9tICcuL2RhdGEtY2xhc3Nlcy9BY3Rpdml0eSc7XG5pbXBvcnQgSHlkcmF0aW9uIGZyb20gJy4vZGF0YS1jbGFzc2VzL0h5ZHJhdGlvbic7XG5pbXBvcnQgU2xlZXAgZnJvbSAnLi9kYXRhLWNsYXNzZXMvU2xlZXAnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuY2xhc3MgQ2xhc3NDaG9vc2VyIHtcbiAgY29uc3RydWN0b3IoZGF0YUNsYXNzTmFtZSwgZGF0ZSkge1xuICAgIHRoaXMuZGF0YUNsYXNzTmFtZSA9IGRhdGFDbGFzc05hbWU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgfVxuICBcbiAgaW5zdGFudGlhdGVDbGFzcyhkYXRhT2JqZWN0KSB7XG4gICAgaWYgKHRoaXMuZGF0YUNsYXNzTmFtZSA9PT0gJ2FjdGl2aXRpZXMnKSB7XG4gICAgICByZXR1cm4gbmV3IEFjdGl2aXR5KGRhdGFPYmplY3QpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGFDbGFzc05hbWUgPT09ICdzbGVlcCcpIHtcbiAgICAgIHJldHVybiBuZXcgU2xlZXAoZGF0YU9iamVjdClcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YUNsYXNzTmFtZSA9PT0gJ2h5ZHJhdGlvbicpIHtcbiAgICAgIHJldHVybiBuZXcgSHlkcmF0aW9uKGRhdGFPYmplY3QpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGFDbGFzc05hbWUgPT09ICd1c2VycycpIHtcbiAgICAgIHJldHVybiBuZXcgVXNlcihkYXRhT2JqZWN0LCB0aGlzLmRhdGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzQ2hvb3NlcjtcbiIsImltcG9ydCBDbGFzc0Nob29zZXIgZnJvbSAnLi9DbGFzc0Nob29zZXInO1xuaW1wb3J0IFBhcmVudFJlcG9zaXRvcnkgZnJvbSAnLi9QYXJlbnRSZXBvc2l0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHlkcmF0aW9uUmVwb3NpdG9yeSBleHRlbmRzIFBhcmVudFJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcihmZXRjaGVkRGF0YSwgdXNlciwgZGF0YUNsYXNzKSB7XG4gICAgc3VwZXIoZmV0Y2hlZERhdGEsIHVzZXIsIGRhdGFDbGFzcylcbiAgICB0aGlzLm51bU91bmNlcztcbiAgfVxuICAvLyAgICAgIHRoaXMgaXMgZm9yIHRoZSBpbnB1dCBmb3Jtc1xuICBhZGROZXdIeWRyYXRpb25EYXRhKGRhdGUsIG91bmNlcykge1xuICAgIGxldCBoeWRyYXRpb25EYXRhID0ge1xuICAgIFwidXNlcklEXCI6IHRoaXMudXNlcklELFxuICAgIFwiZGF0ZVwiOiBkYXRlLFxuICAgIFwibnVtT3VuY2VzXCI6IG91bmNlc1xuICAgIH1cbiAgICB0aGlzLmFkZE5ld0RhdGFPYmplY3QoaHlkcmF0aW9uRGF0YSlcbiAgfVxufVxuIiwiaW1wb3J0IENsYXNzQ2hvb3NlciBmcm9tICcuL0NsYXNzQ2hvb3Nlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmVudFJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcihmZXRjaGVkRGF0YSwgdXNlciwgZGF0YUNsYXNzLCBkYXRlKSB7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLmRhdGFDbGFzcyA9IGRhdGFDbGFzcztcbiAgICB0aGlzLmNsYXNzQ2hvb3NlciA9IG5ldyBDbGFzc0Nob29zZXIodGhpcy5kYXRhQ2xhc3MsIGRhdGUpXG4gICAgdGhpcy51c2VySUQgPSB1c2VyLmlkO1xuICAgIHRoaXMuZGF0YU9iamVjdEFycmF5ID0gdGhpcy5wYXJzZURhdGEoZmV0Y2hlZERhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKGZldGNoZWREYXRhKTtcbiAgfVxuXG4gIC8vIE1ldGhvZHMgdG8gYWRkIHRvIGRhdGEgYXJyYXkgb2YgZ2l2ZW4gY2xhc3Mgb2JqZWN0c1xuXG4gIHBhcnNlRGF0YShmZXRjaGVkRGF0YSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGZldGNoZWREYXRhKTtcbiAgICByZXR1cm4gZmV0Y2hlZERhdGEucmVkdWNlKChwYXJzZWREYXRhLCBkYXRhT2JqZWN0KSA9PiB7XG4gICAgICBpZiAoZGF0YU9iamVjdC51c2VySUQgPT09IHRoaXMudXNlcklEKSB7XG4gICAgICAgIHBhcnNlZERhdGEucHVzaCh0aGlzLmNsYXNzQ2hvb3Nlci5pbnN0YW50aWF0ZUNsYXNzKGRhdGFPYmplY3QpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlZERhdGFcbiAgICB9LCBbXSlcbiAgfVxuXG4gIGFkZE5ld0RhdGFPYmplY3QoZGF0YU9iamVjdCkge1xuICAgIHRoaXMuZGF0YU9iamVjdEFycmF5LnB1c2godGhpcy5jbGFzc0Nob29zZXIuaW5zdGFudGlhdGVDbGFzcyhkYXRhT2JqZWN0KSk7XG4gIH1cblxuICAvLyBEYXRhIEFycmF5IFBhcnNpbmcgTWV0aG9kc1xuXG4gIGZpbmREYXRhT2JqZWN0QnlEYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhT2JqZWN0QXJyYXkuZmluZChkYXRhT2JqZWN0ID0+IGRhdGFPYmplY3QuZGF0ZSA9PT0gZGF0ZSk7XG4gIH1cblxuICBnZXRBbGxUaW1lQXZlcmFnZUJ5S2V5KGRhdGFPYmplY3RLZXkpIHtcbiAgICBsZXQgZGF0YVRvdGFsID0gdGhpcy5kYXRhT2JqZWN0QXJyYXkucmVkdWNlKChkYXRhVG90YWwsIGRhdGFPYmplY3QpID0+IHtcbiAgICAgIGRhdGFUb3RhbCArPSBkYXRhT2JqZWN0W2RhdGFPYmplY3RLZXldXG4gICAgICByZXR1cm4gZGF0YVRvdGFsXG4gICAgfSwgMClcbiAgICByZXR1cm4gTnVtYmVyKChkYXRhVG90YWwgLyB0aGlzLmRhdGFPYmplY3RBcnJheS5sZW5ndGgpLnRvRml4ZWQoMSkpXG4gIH1cblxuICBnZXRQYXN0V2Vla0RhdGEoZGF0ZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZGF0YU9iamVjdEFycmF5LmluZGV4T2YodGhpcy5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKSlcbiAgICByZXR1cm4gdGhpcy5kYXRhT2JqZWN0QXJyYXkuc2xpY2UoaW5kZXggLSA2LCBpbmRleCArIDEpXG4gIH1cblxuICBnZXREYXRhQnlEYXRlQW5kS2V5KGRhdGUsIGRhdGFPYmplY3RLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKVtkYXRhT2JqZWN0S2V5XTtcbiAgfVxuXG4gIGdldEF2ZXJhZ2VEYXRhQnlXZWVrQW5kS2V5KGRhdGUsIGRhdGFPYmplY3RLZXksIGRlY2ltYWxzKSB7XG4gICAgbGV0IHdlZWtseUF2ZXJhZ2UgPSAodGhpcy5nZXRQYXN0V2Vla0RhdGEoZGF0ZSkucmVkdWNlKChkYXRhVG90YWwsIGRhdGFPYmplY3QpID0+IHtcbiAgICAgIGRhdGFUb3RhbCArPSBkYXRhT2JqZWN0W2RhdGFPYmplY3RLZXldO1xuICAgICAgcmV0dXJuIGRhdGFUb3RhbDtcbiAgICB9LCAwKS83KTtcbiAgICByZXR1cm4gZGVjaW1hbHMgPyBOdW1iZXIod2Vla2x5QXZlcmFnZS50b0ZpeGVkKGRlY2ltYWxzKSkgOiBOdW1iZXIod2Vla2x5QXZlcmFnZS50b0ZpeGVkKDApKVxuICB9XG5cbiAgZ2V0SGlnaExvd0RhdGFQb2ludEJ5S2V5KGRhdGFPYmplY3RLZXksIGhpZ2hPckxvdykge1xuICAgIGxldCBzb3J0ZWREYXRhID0gdGhpcy5kYXRhT2JqZWN0QXJyYXkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGhpZ2hPckxvdyA9PT0gJ2xvdycgPyBhW2RhdGFPYmplY3RLZXldIC0gYltkYXRhT2JqZWN0S2V5XSA6IGJbZGF0YU9iamVjdEtleV0gLSBhW2RhdGFPYmplY3RLZXldO1xuICAgIH0pXG4gICAgcmV0dXJuIHNvcnRlZERhdGFbMF1cbiAgfVxuXG4gIGdldEFsbERhdGFPYmplY3RzT25EYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhT2JqZWN0QXJyYXkuZmlsdGVyKGRhdGFPYmplY3QgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFPYmplY3QuZGF0ZSA9PT0gZGF0ZTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0VG90YWxCeURhdGVBbmRLZXkoZGF0ZSwga2V5KSB7XG4gICAgbGV0IG1hdGNoZWREYXRhID0gdGhpcy5nZXRBbGxEYXRhT2JqZWN0c09uRGF0ZShkYXRlKTtcbiAgICBpZiAobWF0Y2hlZERhdGEpIHtcbiAgICAgIHJldHVybiBtYXRjaGVkRGF0YS5yZWR1Y2UoKHRvdGFsLCBkYXRhT2JqZWN0KSA9PiB7XG4gICAgICAgIHRvdGFsICs9IGRhdGFPYmplY3Rba2V5XVxuICAgICAgICByZXR1cm4gdG90YWxcbiAgICAgIH0sIDApXG4gICAgfVxuICB9XG4gIFxuICBnZXRXZWVrbHlUb3RhbEJ5RGF0ZUFuZEtleShkYXRlLCBrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYXN0V2Vla0RhdGEoZGF0ZSkucmVkdWNlKChkYXRhVG90YWwsIGRhdGFPYmplY3QpID0+IHtcbiAgICAgIGRhdGFUb3RhbCArPSBkYXRhT2JqZWN0W2tleV07XG4gICAgICByZXR1cm4gZGF0YVRvdGFsO1xuICAgIH0sIDApXG4gIH1cbn1cbiIsImltcG9ydCBDbGFzc0Nob29zZXIgZnJvbSAnLi9DbGFzc0Nob29zZXInO1xuaW1wb3J0IFBhcmVudFJlcG9zaXRvcnkgZnJvbSAnLi9QYXJlbnRSZXBvc2l0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xlZXBSZXBvc2l0b3J5IGV4dGVuZHMgUGFyZW50UmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKGZldGNoZWREYXRhLCB1c2VyLCBkYXRhQ2xhc3MsIGRhdGUpIHtcbiAgICBzdXBlcihmZXRjaGVkRGF0YSwgdXNlciwgZGF0YUNsYXNzLCBkYXRlKVxuICAgIHRoaXMud2Vla2x5U2xlZXBIb3VycztcbiAgICB0aGlzLndlZWtseVNsZWVwUXVhbGl0eTtcbiAgfVxuXG4gIGFkZE5ld1NsZWVwRGF0YShkYXRlLCBob3VycywgcXVhbGl0eSkge1xuICAgIGxldCBzbGVlcERhdGFPYmplY3QgPSB7XG4gICAgICBcInVzZXJJRFwiOiB0aGlzLnVzZXJJRCxcbiAgICAgIFwiZGF0ZVwiOiBkYXRlLFxuICAgICAgXCJob3Vyc1NsZXB0XCI6IGhvdXJzLFxuICAgICAgXCJzbGVlcFF1YWxpdHlcIjogcXVhbGl0eVxuICAgIH1cbiAgICB0aGlzLmFkZE5ld0RhdGFPYmplY3Qoc2xlZXBEYXRhT2JqZWN0KVxuICB9XG4gIFxuICBnZXREYXlCeURheVF1YWxpdHlPckhvdXJzKGRhdGUsIHF1YWxpdHlPckhvdXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFzdFdlZWtEYXRhKGRhdGUpLm1hcChzbGVlcE9iamVjdCA9PiB7XG4gICAgICByZXR1cm4gcXVhbGl0eU9ySG91cnMgPT09ICdob3VycycgPyB7ZGF0ZTogW3NsZWVwT2JqZWN0LmRhdGVdLCBzbGVlcEhvdXJzOiBzbGVlcE9iamVjdC5ob3Vyc1NsZXB0fVxuICAgICAgOiB7ZGF0ZTogW3NsZWVwT2JqZWN0LmRhdGVdLCBzbGVlcFF1YWxpdHk6IHNsZWVwT2JqZWN0LnNsZWVwUXVhbGl0eX07XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IFNsZWVwUmVwb3NpdG9yeSBmcm9tICcuL1NsZWVwUmVwb3NpdG9yeSc7XG5pbXBvcnQgQWN0aXZpdHlSZXBvc2l0b3J5IGZyb20gJy4vQWN0aXZpdHlSZXBvc2l0b3J5JztcbmltcG9ydCBIeWRyYXRpb25SZXBvc2l0b3J5IGZyb20gJy4vSHlkcmF0aW9uUmVwb3NpdG9yeSc7XG5pbXBvcnQgUGFyZW50UmVwb3NpdG9yeSBmcm9tICcuL1BhcmVudFJlcG9zaXRvcnknO1xuXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgIGNvbnN0cnVjdG9yKHVzZXIsIHVzZXJEYXRhLCBhY3Rpdml0eURhdGEsIGh5ZHJhdGlvbkRhdGEsIHNsZWVwRGF0YSwgZGF0ZSkge1xuICAgICAvLyB0aGlzLmFjdGl2aXR5RGF0YSA9IGFjdGl2aXR5RGF0YTtcblxuICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICB0aGlzLmlkID0gdXNlci5pZDtcbiAgICAgdGhpcy5uYW1lID0gdXNlci5uYW1lO1xuICAgICB0aGlzLmFkZHJlc3MgPSB1c2VyLmFkZHJlc3M7XG4gICAgIHRoaXMuZW1haWwgPSB1c2VyLmVtYWlsO1xuXG4gICAgIHRoaXMuc3RyaWRlTGVuZ3RoID0gdXNlci5zdHJpZGVMZW5ndGg7XG4gICAgIHRoaXMuZGFpbHlTdGVwR29hbCA9IHVzZXIuZGFpbHlTdGVwR29hbDtcblxuICAgICB0aGlzLnNsZWVwUmVjb3JkID0gW107XG4gICAgIHRoaXMuc2xlZXBRdWFsaXR5UmVjb3JkID0gW107XG4gICAgIHRoaXMuc2xlZXBRdWFsaXR5QXZlcmFnZSA9IDA7XG4gICAgIHRoaXMuaG91cnNTbGVwdEF2ZXJhZ2UgPSAwO1xuXG4gICAgIHRoaXMub3VuY2VzUmVjb3JkID0gW107XG4gICAgIHRoaXMub3VuY2VzQXZlcmFnZSA9IDA7XG5cbiAgICAgdGhpcy50b3RhbFN0ZXBzVGhpc1dlZWsgPSAwO1xuICAgICB0aGlzLmFjdGl2aXR5UmVjb3JkID0gW107XG4gICAgIHRoaXMuYWNjb21wbGlzaGVkRGF5cyA9IFtdOyAvLyBpZiBzdGVwcyA+PSBzdGVwZ29hbFxuICAgICB0aGlzLnRyZW5kaW5nU3RlcERheXMgPSBbXTsgLy8gbG9va3MgbGlrZSBsaXN0IHJlYWRzIGluIG9ubHkgb25lIGRpcmVjdGlvbiwgYm90dG9tIHVwIHNlcXVlbnRpYWxseSB0byBkZXRlcm1pbmUgaWYgJ3RyZW5kaW5nIGRheSdcbiAgICAgdGhpcy50cmVuZGluZ1N0YWlyc0RheXMgPSBbXTtcblxuICAgICB0aGlzLmZyaWVuZHMgPSB1c2VyLmZyaWVuZHM7XG4gICAgIHRoaXMuZnJpZW5kT2JqZWN0cztcbiAgICAgdGhpcy5mcmllbmRzTmFtZXMgPSBbXTsgLy8gY2FuIGNoZWNrIGFuIGFycmF5IG9mIHVzZXJzIGJ5IGlkIHRvIHNlZSBpZiB0aGV5IG1hdGNoIHlvdXIgZnJpZW5kcyBpZC4gaWYgeWVzLCBwdXNoIFNUUklORyBpbnRvIGZyaXVlbmRuYW1lc1xuICAgICB0aGlzLmZyaWVuZHNBY3Rpdml0eVJlY29yZHMgPSBbXTtcbiAgIH1cblxuICAgcG9wdWxhdGVTbGVlcERhdGEoc2xlZXBEYXRhKSB7XG4gICAgIGlmIChzbGVlcERhdGEpIHtcbiAgICAgICB0aGlzLnNsZWVwUmVjb3JkID0gbmV3IFNsZWVwUmVwb3NpdG9yeShcbiAgICAgICAgIHNsZWVwRGF0YSxcbiAgICAgICAgIHRoaXMsXG4gICAgICAgICBcInNsZWVwXCIsXG4gICAgICAgICB0aGlzLmRhdGVcbiAgICAgICApO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2xlZXBSZWNvcmQpO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHJldHVybiBbXTtcbiAgICAgfVxuICAgfVxuXG4gICBwb3B1bGF0ZUh5ZHJhdGlvbkRhdGEoaHlkcmF0aW9uRGF0YSkge1xuICAgICBpZiAoaHlkcmF0aW9uRGF0YSkge1xuICAgICAgIHRoaXMub3VuY2VzUmVjb3JkID0gbmV3IEh5ZHJhdGlvblJlcG9zaXRvcnkoXG4gICAgICAgICBoeWRyYXRpb25EYXRhLFxuICAgICAgICAgdGhpcyxcbiAgICAgICAgIFwiaHlkcmF0aW9uXCIsXG4gICAgICAgICB0aGlzLmRhdGVcbiAgICAgICApO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHJldHVybiBbXTtcbiAgICAgfVxuICAgfVxuXG4gICBwb3B1bGF0ZUFjdGl2aXR5RGF0YShhY3Rpdml0eURhdGEpIHtcbiAgICAgaWYgKGFjdGl2aXR5RGF0YSkge1xuICAgICAgIHRoaXMuYWN0aXZpdHlSZWNvcmQgPSBuZXcgQWN0aXZpdHlSZXBvc2l0b3J5KFxuICAgICAgICAgYWN0aXZpdHlEYXRhLFxuICAgICAgICAgdGhpcyxcbiAgICAgICAgIFwiYWN0aXZpdGllc1wiLFxuICAgICAgICAgdGhpcy5kYXRlXG4gICAgICAgKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gW107XG4gICAgIH1cbiAgIH1cblxuICAgcG9wdWxhdGVGcmllbmRzRGF0YSh1c2VyRGF0YSwgYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEsIGRhdGUpIHtcbiAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgbGV0IG1hdGNoZWRGcmllbmRzID0gdXNlckRhdGEuZmlsdGVyKCh1c2VyKSA9PlxuICAgICAgICAgdGhpcy5mcmllbmRzLmluY2x1ZGVzKHVzZXIuaWQpXG4gICAgICAgKTtcbiAgICAgICB0aGlzLmZyaWVuZE9iamVjdHMgPSBtYXRjaGVkRnJpZW5kcy5yZWR1Y2UoKGZyaWVuZE9iamVjdHMsIGZyaWVuZCkgPT4ge1xuICAgICAgICAgZnJpZW5kT2JqZWN0cy5wdXNoKFxuICAgICAgICAgICBuZXcgVXNlcihcbiAgICAgICAgICAgICBmcmllbmQsXG4gICAgICAgICAgICAgdXNlckRhdGEsXG4gICAgICAgICAgICAgYWN0aXZpdHlEYXRhLFxuICAgICAgICAgICAgIGh5ZHJhdGlvbkRhdGEsXG4gICAgICAgICAgICAgc2xlZXBEYXRhLFxuICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgKVxuICAgICAgICAgKTtcbiAgICAgICAgIHJldHVybiBmcmllbmRPYmplY3RzO1xuICAgICAgIH0sIFtdKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gW107XG4gICAgIH1cbiAgIH1cblxuICAgcG9wdWxhdGVGcmllbmRzUmVwb3MoYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEpIHtcbiAgICAgdGhpcy5mcmllbmRPYmplY3RzLmZvckVhY2goKGZyaWVuZCkgPT4ge1xuICAgICAgIGZyaWVuZC5wb3B1bGF0ZVNsZWVwRGF0YShzbGVlcERhdGEpO1xuICAgICAgIGZyaWVuZC5wb3B1bGF0ZUh5ZHJhdGlvbkRhdGEoaHlkcmF0aW9uRGF0YSk7XG4gICAgICAgZnJpZW5kLnBvcHVsYXRlQWN0aXZpdHlEYXRhKGFjdGl2aXR5RGF0YSk7XG4gICAgIH0pO1xuICAgfVxuXG4gICBwb3B1bGF0ZVVzZXJEYXRhKHVzZXJEYXRhLCBhY3Rpdml0eURhdGEsIGh5ZHJhdGlvbkRhdGEsIHNsZWVwRGF0YSwgZGF0ZSkge1xuICAgICB0aGlzLnBvcHVsYXRlU2xlZXBEYXRhKHNsZWVwRGF0YSk7XG4gICAgIHRoaXMucG9wdWxhdGVIeWRyYXRpb25EYXRhKGh5ZHJhdGlvbkRhdGEpO1xuICAgICB0aGlzLnBvcHVsYXRlQWN0aXZpdHlEYXRhKGFjdGl2aXR5RGF0YSk7XG4gICAgIHRoaXMuZ2V0VXNlckF2ZXJhZ2VEYXRhKCk7XG4gICAgIHRoaXMucG9wdWxhdGVGcmllbmRzRGF0YShcbiAgICAgICB1c2VyRGF0YSxcbiAgICAgICBhY3Rpdml0eURhdGEsXG4gICAgICAgaHlkcmF0aW9uRGF0YSxcbiAgICAgICBzbGVlcERhdGEsXG4gICAgICAgZGF0ZVxuICAgICApO1xuICAgICB0aGlzLnBvcHVsYXRlRnJpZW5kc1JlcG9zKGFjdGl2aXR5RGF0YSwgaHlkcmF0aW9uRGF0YSwgc2xlZXBEYXRhKTtcbiAgIH1cblxuICAgZ2V0VXNlckF2ZXJhZ2VEYXRhKCkge1xuICAgICB0aGlzLnNsZWVwUXVhbGl0eUF2ZXJhZ2UgPSB0aGlzLnNsZWVwUmVjb3JkLmdldEFsbFRpbWVBdmVyYWdlQnlLZXkoXG4gICAgICAgXCJzbGVlcFF1YWxpdHlcIlxuICAgICApOyAvLyBuZWVkIHRvIGNvbWUgYmVmb3JlIHBvcHVsYXRpbmcgYW5kIFJFVFVSTlxuICAgICB0aGlzLmhvdXJzU2xlcHRBdmVyYWdlID0gdGhpcy5zbGVlcFJlY29yZC5nZXRBbGxUaW1lQXZlcmFnZUJ5S2V5KFxuICAgICAgIFwiaG91cnNTbGVwdFwiXG4gICAgICk7XG4gICAgIHRoaXMub3VuY2VzQXZlcmFnZSA9IHRoaXMub3VuY2VzUmVjb3JkLmdldEFsbFRpbWVBdmVyYWdlQnlLZXkoXCJudW1PdW5jZXNcIik7XG4gICAgIHRoaXMudG90YWxTdGVwc1RoaXNXZWVrID0gdGhpcy5hY3Rpdml0eVJlY29yZC5nZXRXZWVrbHlUb3RhbEJ5RGF0ZUFuZEtleShcbiAgICAgICB0aGlzLmRhdGUsXG4gICAgICAgXCJudW1TdGVwc1wiXG4gICAgICk7XG4gICB9XG5cbiAgIGdldEZpcnN0TmFtZSgpIHtcbiAgICAgbGV0IHBhcnNlZE5hbWUgPSB0aGlzLm5hbWUuc3BsaXQoXCIgXCIpO1xuICAgICByZXR1cm4gcGFyc2VkTmFtZVswXS50b1VwcGVyQ2FzZSgpO1xuICAgfVxuXG4gICB1cGRhdGVIeWRyYXRpb24oZGF0ZSwgb3VuY2VzKSB7XG4gICAgIHRoaXMub3VuY2VzUmVjb3JkLmFkZE5ld0h5ZHJhdGlvbkRhdGEoZGF0ZSwgb3VuY2VzKTtcbiAgICAgaWYgKHRoaXMub3VuY2VzUmVjb3JkLmRhdGFPYmplY3RBcnJheS5sZW5ndGgpIHtcbiAgICAgICB0aGlzLm91bmNlc0F2ZXJhZ2UgPSB0aGlzLm91bmNlc1JlY29yZC5nZXRBbGxUaW1lQXZlcmFnZUJ5S2V5KFxuICAgICAgICAgXCJudW1PdW5jZXNcIlxuICAgICAgICk7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgdGhpcy5vdW5jZXNBdmVyYWdlID0gb3VuY2VzO1xuICAgICB9XG4gICB9XG5cbiAgIHVwZGF0ZVNsZWVwKGRhdGUsIGhvdXJzLCBxdWFsaXR5KSB7XG4gICAgIHRoaXMuc2xlZXBSZWNvcmQuYWRkTmV3U2xlZXBEYXRhKGRhdGUsIGhvdXJzLCBxdWFsaXR5KTtcbiAgICAgaWYgKHRoaXMuc2xlZXBSZWNvcmQuZGF0YU9iamVjdEFycmF5Lmxlbmd0aCkge1xuICAgICAgIHRoaXMuaG91cnNTbGVwdEF2ZXJhZ2UgPSB0aGlzLnNsZWVwUmVjb3JkLmdldEFsbFRpbWVBdmVyYWdlQnlLZXkoXG4gICAgICAgICBcImhvdXJzU2xlcHRcIlxuICAgICAgICk7XG4gICAgICAgdGhpcy5zbGVlcFF1YWxpdHlBdmVyYWdlID0gdGhpcy5zbGVlcFJlY29yZC5nZXRBbGxUaW1lQXZlcmFnZUJ5S2V5KFxuICAgICAgICAgXCJzbGVlcFF1YWxpdHlcIlxuICAgICAgICk7XG4gICAgIH0gZWxzZSB7XG4gICAgICAgdGhpcy5ob3Vyc1NsZXB0QXZlcmFnZSA9IGhvdXJzO1xuICAgICAgIHRoaXMuc2xlZXBRdWFsaXR5QXZlcmFnZSA9IHF1YWxpdHk7XG4gICAgIH1cbiAgIH1cblxuICAgdXBkYXRlQWN0aXZpdGllcyhkYXRlLCBzdGVwcywgbWludXRlcywgc3RhaXJzKSB7XG4gICAgIHRoaXMuYWN0aXZpdHlSZWNvcmQuYWRkTmV3QWN0aXZpdHlEYXRhKGRhdGUsIHN0ZXBzLCBtaW51dGVzLCBzdGFpcnMpO1xuICAgICBpZiAoc3RlcHMgPj0gdGhpcy5kYWlseVN0ZXBHb2FsKSB7XG4gICAgICAgdGhpcy5hY2NvbXBsaXNoZWREYXlzLnB1c2goZGF0ZSk7XG4gICAgIH1cbiAgIH1cblxuICAgc3VtRGFpbHlPdW5jZXMoZGF0ZSkge1xuICAgICByZXR1cm4gdGhpcy5vdW5jZXNSZWNvcmQuZ2V0VG90YWxCeURhdGVBbmRLZXkoZGF0ZSwgXCJudW1PdW5jZXNcIik7XG4gICB9XG5cbiAgIGZpbmRDbGltYmluZ1JlY29yZCgpIHtcbiAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlSZWNvcmQuZ2V0SGlnaExvd0RhdGFQb2ludEJ5S2V5KFxuICAgICAgIFwiZmxpZ2h0c09mU3RhaXJzXCIsXG4gICAgICAgXCJoaWdoXCJcbiAgICAgKS5mbGlnaHRzT2ZTdGFpcnM7XG4gICB9XG5cbiAgIGdldEFjdGl2aXR5RGF0YUJ5RGF0ZShkYXRlLCBkYXRhVHlwZSkge1xuICAgICByZXR1cm4gdGhpcy5hY3Rpdml0eVJlY29yZC5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKVtkYXRhVHlwZV07XG4gICB9XG4gICBcbiAgIGdldFNsZWVwRGF0YUJ5RGF0ZShkYXRlLCBkYXRhVHlwZSkge1xuICAgICByZXR1cm4gdGhpcy5zbGVlcFJlY29yZC5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKVtkYXRhVHlwZV07XG4gICB9XG4gICBcbiAgIGNhbGN1bGF0ZURhaWx5Q2Fsb3JpZXMoZGF0ZSkge1xuICAgICBsZXQgdG90YWxNaW51dGVzID0gdGhpcy5hY3Rpdml0eVJlY29yZC5nZXRUb3RhbEJ5RGF0ZUFuZEtleShcbiAgICAgICBkYXRlLFxuICAgICAgIFwibWludXRlc0FjdGl2ZVwiXG4gICAgICk7XG4gICAgIHJldHVybiBNYXRoLnJvdW5kKHRvdGFsTWludXRlcyAqIDcuNik7XG4gICB9XG5cbiAgIGNhbGN1bGF0ZUF2ZXJhZ2VNaW51dGVzQWN0aXZlVGhpc1dlZWsoZGF0ZSkge1xuICAgICByZXR1cm4gdGhpcy5hY3Rpdml0eVJlY29yZC5nZXRBdmVyYWdlRGF0YUJ5V2Vla0FuZEtleShcbiAgICAgICBkYXRlLFxuICAgICAgIFwibWludXRlc0FjdGl2ZVwiLFxuICAgICAgIDBcbiAgICAgKTtcbiAgIH1cblxuICAgY2FsY3VsYXRlQXZlcmFnZVN0ZXBzVGhpc1dlZWsoZGF0ZSkge1xuICAgICByZXR1cm4gdGhpcy5hY3Rpdml0eVJlY29yZC5nZXRBdmVyYWdlRGF0YUJ5V2Vla0FuZEtleShkYXRlLCBcIm51bVN0ZXBzXCIpO1xuICAgfVxuXG4gICBjYWxjdWxhdGVBdmVyYWdlRmxpZ2h0c1RoaXNXZWVrKGRhdGUpIHtcbiAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlSZWNvcmQuZ2V0QXZlcmFnZURhdGFCeVdlZWtBbmRLZXkoXG4gICAgICAgZGF0ZSxcbiAgICAgICBcImZsaWdodHNPZlN0YWlyc1wiXG4gICAgICk7XG4gICB9XG5cbiAgIGNhbGN1bGF0ZVRvdGFsU3RlcHNUaGlzV2VlayhkYXRlKSB7XG4gICAgIHJldHVybiB0aGlzLnRvdGFsU3RlcHNUaGlzV2VlaztcbiAgIH1cblxuICAgY2FsY3VsYXRlQXZlcmFnZVF1YWxpdHlUaGlzV2VlayhkYXRlKSB7XG4gICAgIHJldHVybiB0aGlzLnNsZWVwUmVjb3JkLmdldEF2ZXJhZ2VEYXRhQnlXZWVrQW5kS2V5KFxuICAgICAgIGRhdGUsXG4gICAgICAgXCJzbGVlcFF1YWxpdHlcIixcbiAgICAgICAxXG4gICAgICk7XG4gICB9XG5cbiAgY2FsY3VsYXRlQXZlcmFnZUhvdXJzVGhpc1dlZWsoZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xlZXBSZWNvcmQuZ2V0QXZlcmFnZURhdGFCeVdlZWtBbmRLZXkoZGF0ZSwgJ2hvdXJzU2xlcHQnLCAxKVxuICAgIH1cblxuICBmaW5kRnJpZW5kc05hbWVzKGZyaWVuZHMpIHtcbiAgICB0aGlzLmZyaWVuZE9iamVjdHMuZm9yRWFjaChmcmllbmQgPT4ge1xuICAgICAgdGhpcy5mcmllbmRzTmFtZXMucHVzaChmcmllbmQuZ2V0Rmlyc3ROYW1lKCkpO1xuICAgIH0pXG4gIH1cblxuICBmaW5kRnJpZW5kc1RvdGFsU3RlcHNGb3JXZWVrKGRhdGUpIHtcbiAgICB0aGlzLmZyaWVuZHNBY3Rpdml0eVJlY29yZHMgPSB0aGlzLmZyaWVuZE9iamVjdHMubWFwKGZyaWVuZE9iamVjdCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnaWQnOiBmcmllbmRPYmplY3QuaWQsXG4gICAgICAgICdmaXJzdE5hbWUnOiBmcmllbmRPYmplY3QuZ2V0Rmlyc3ROYW1lKCksXG4gICAgICAgICd0b3RhbFdlZWtseVN0ZXBzJzogZnJpZW5kT2JqZWN0LmFjdGl2aXR5UmVjb3JkLmdldFN0ZXBzVGhpc1dlZWsoZGF0ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgIGZpbmRGcmllbmRzTmFtZXMoZnJpZW5kcykge1xuICAgICB0aGlzLmZyaWVuZE9iamVjdHMuZm9yRWFjaCgoZnJpZW5kKSA9PiB7XG4gICAgICAgdGhpcy5mcmllbmRzTmFtZXMucHVzaChmcmllbmQuZ2V0Rmlyc3ROYW1lKCkpO1xuICAgICB9KTtcbiAgIH1cbiAgIFxuICAgZmluZEZyaWVuZHNUb3RhbFN0ZXBzRm9yV2VlayhkYXRlKSB7XG4gICAgIHJldHVybiAodGhpcy5mcmllbmRzQWN0aXZpdHlSZWNvcmRzID0gdGhpcy5mcmllbmRPYmplY3RzLm1hcChcbiAgICAgICAoZnJpZW5kT2JqZWN0KSA9PiB7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICBpZDogZnJpZW5kT2JqZWN0LmlkLFxuICAgICAgICAgICBmaXJzdE5hbWU6IGZyaWVuZE9iamVjdC5nZXRGaXJzdE5hbWUoKSxcbiAgICAgICAgICAgdG90YWxXZWVrbHlTdGVwczogZnJpZW5kT2JqZWN0LmFjdGl2aXR5UmVjb3JkLmdldFN0ZXBzVGhpc1dlZWsoZGF0ZSksXG4gICAgICAgICB9O1xuICAgICAgIH1cbiAgICAgKSk7XG4gICB9XG5cbiAgIGZpbmRUcmVuZGluZ1N0YWlyc0RheXMoKSB7XG4gICAgIGxldCBwb3NpdGl2ZURheXMgPSBbXTtcbiAgICAgdGhpcy5hY3Rpdml0eVJlY29yZC5kYXRhT2JqZWN0QXJyYXkuZm9yRWFjaChcbiAgICAgICAoYWN0aXZpdHlPYmplY3QsIGksIHJlY29yZCkgPT4ge1xuICAgICAgICAgaWYgKFxuICAgICAgICAgICByZWNvcmRbaSArIDFdICYmXG4gICAgICAgICAgIHJlY29yZFtpXS5mbGlnaHRzT2ZTdGFpcnMgPiByZWNvcmRbaSArIDFdLmZsaWdodHNPZlN0YWlyc1xuICAgICAgICAgKSB7XG4gICAgICAgICAgIHBvc2l0aXZlRGF5cy51bnNoaWZ0KHJlY29yZFtpXS5kYXRlKTtcbiAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpdmVEYXlzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgdGhpcy50cmVuZGluZ1N0YWlyc0RheXMucHVzaChcbiAgICAgICAgICAgICBgWW91ciBtb3N0IHJlY2VudCBwb3NpdGl2ZSBjbGltYmluZyBzdHJlYWsgd2FzICR7XG4gICAgICAgICAgICAgICBwb3NpdGl2ZURheXNbMF1cbiAgICAgICAgICAgICB9IC0gJHtwb3NpdGl2ZURheXNbcG9zaXRpdmVEYXlzLmxlbmd0aCAtIDFdfSFgXG4gICAgICAgICAgICk7XG4gICAgICAgICAgIHBvc2l0aXZlRGF5cyA9IFtdO1xuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgKTtcbiAgIH1cblxuICAgZmluZFRyZW5kaW5nU3RlcERheXMoKSB7XG4gICAgIGxldCBwb3NpdGl2ZURheXMgPSBbXTtcbiAgICAgdGhpcy5hY3Rpdml0eVJlY29yZC5kYXRhT2JqZWN0QXJyYXkuZm9yRWFjaChcbiAgICAgICAoYWN0aXZpdHlPYmplY3QsIGksIHJlY29yZCkgPT4ge1xuICAgICAgICAgaWYgKHJlY29yZFtpICsgMV0gJiYgcmVjb3JkW2ldLm51bVN0ZXBzID4gcmVjb3JkW2kgKyAxXS5udW1TdGVwcykge1xuICAgICAgICAgICBwb3NpdGl2ZURheXMudW5zaGlmdChyZWNvcmRbaV0uZGF0ZSk7XG4gICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aXZlRGF5cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgIHRoaXMudHJlbmRpbmdTdGVwRGF5cy5wdXNoKFxuICAgICAgICAgICAgIGBZb3VyIG1vc3QgcmVjZW50IHBvc2l0aXZlIHN0ZXAgc3RyZWFrIHdhcyAke3Bvc2l0aXZlRGF5c1swXX0gLSAke1xuICAgICAgICAgICAgICAgcG9zaXRpdmVEYXlzW3Bvc2l0aXZlRGF5cy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgIH0hYFxuICAgICAgICAgICApO1xuICAgICAgICAgICBwb3NpdGl2ZURheXMgPSBbXTtcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgICk7XG4gICB9XG4gfVxuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSwgYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEsIGRhdGUpIHsgLy8gb3RoZXIgZGF0YSB0eXBlcyBwYXNzZWQgaW4gaGVyZVxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy51c2VyT2JqZWN0QXJyYXkgPSB0aGlzLnBhcnNlRGF0YSh1c2VyRGF0YSwgYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEpXG4gICAgdGhpcy5nbG9iYWxTdGVwR29hbCA9IHRoaXMuZ2V0R2xvYmFsU3RlcEdvYWwoKTtcbiAgICB0aGlzLmdsb2JhbFNsZWVwUXVhbGl0eSA9IHRoaXMuZ2V0R2xvYmFsU2xlZXBRdWFsaXR5KCk7XG4gICAgdGhpcy5yYW5kb21Vc2VyID0gdGhpcy5nZXRSYW5kb21Vc2VyKClcbiAgfVxuXG4gIGdldFVzZXJPYmplY3QoaWQpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyT2JqZWN0QXJyYXkuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGlkKVxuICB9XG5cbiAgcGFyc2VEYXRhKHVzZXJzLCBhY3Rpdml0eURhdGEsIGh5ZHJhdGlvbkRhdGEsIHNsZWVwRGF0YSkge1xuICAgIGxldCB1c2VyQmFzZSA9IHVzZXJzLnJlZHVjZSgocGFyc2VkVXNlcnMsIHVzZXJPYmplY3QpID0+IHtcbiAgICAgIHBhcnNlZFVzZXJzLnB1c2gobmV3IFVzZXIodXNlck9iamVjdCwgdXNlcnMsIGFjdGl2aXR5RGF0YSwgaHlkcmF0aW9uRGF0YSwgc2xlZXBEYXRhLCB0aGlzLmRhdGUpKVxuICAgICAgcmV0dXJuIHBhcnNlZFVzZXJzIC8vIHdhcyByZXR1cm5pbmcgYW5kIGVuZGluZyBmdW5jdGlvbiwgbmVlZCB0byBnZXQgdXNlcnMsIHVwZGF0ZSwgaGFuZCBvZmZcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gdXNlckJhc2UucmVkdWNlKCh1cGRhdGVkVXNlckJhc2UsIHVzZXIpID0+IHtcbiAgICAgIHVzZXIucG9wdWxhdGVVc2VyRGF0YSh1c2VycywgYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEsIHRoaXMuZGF0ZSlcbiAgICAgIHVwZGF0ZWRVc2VyQmFzZS5wdXNoKHVzZXIpXG4gICAgICByZXR1cm4gdXBkYXRlZFVzZXJCYXNlXG4gICAgfSwgW10pXG4gIH1cblxuICBnZXRVc2VyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnMuZmluZChmdW5jdGlvbih1c2VyKSB7XG4gICAgICByZXR1cm4gdXNlci5pZCA9PT0gaWQ7XG4gICAgfSlcbiAgfVxuXG4gIGdldFJhbmRvbVVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlck9iamVjdEFycmF5W01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMudXNlck9iamVjdEFycmF5Lmxlbmd0aCldO1xuICB9XG5cbiAgZmluZEJlc3RTbGVlcGVycyhkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlck9iamVjdEFycmF5LmZpbHRlcih1c2VyID0+IHtcbiAgICAgIHJldHVybiB1c2VyLmNhbGN1bGF0ZUF2ZXJhZ2VRdWFsaXR5VGhpc1dlZWsoZGF0ZSkgPiAzO1xuICAgIH0pXG4gIH1cblxuICBnZXRMb25nZXN0U2xlZXBlcnMoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnVzZXJPYmplY3RBcnJheS5tYXAodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5zbGVlcFJlY29yZC5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKTtcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBiLmhvdXJzU2xlcHQgLSBhLmhvdXJzU2xlcHQ7XG4gICAgICB9KVswXS51c2VySUQ7XG4gIH1cblxuICBnZXRXb3JzdFNsZWVwZXJzKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyT2JqZWN0QXJyYXkubWFwKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIHVzZXIuc2xlZXBSZWNvcmQuZmluZERhdGFPYmplY3RCeURhdGUoZGF0ZSk7XG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gYS5ob3Vyc1NsZXB0IC0gYi5ob3Vyc1NsZXB0O1xuICAgICAgfSlbMF0udXNlcklEO1xuICB9XG5cbiAgZ2V0R2xvYmFsU3RlcEdvYWwoKSB7ICAvL3JlbmFtZSBmcm9tIGNhbGN1bGF0ZUF2ZXJhZ2VTdGVwR29hbFxuICAgIGxldCBnbG9iYWxTdGVwR29hbFRvdGFsID0gdGhpcy51c2VyT2JqZWN0QXJyYXkucmVkdWNlKChzdGVwR29hbFRvdGFsLCB1c2VyKSA9PiB7XG4gICAgICBzdGVwR29hbFRvdGFsICs9IHVzZXIuZGFpbHlTdGVwR29hbDtcbiAgICAgIHJldHVybiBzdGVwR29hbFRvdGFsO1xuICAgIH0sIDApXG4gICAgcmV0dXJuIE51bWJlcigoZ2xvYmFsU3RlcEdvYWxUb3RhbCAvIHRoaXMudXNlck9iamVjdEFycmF5Lmxlbmd0aCkudG9GaXhlZCgwKSlcbiAgfVxuXG4gIGdldEdsb2JhbFNsZWVwUXVhbGl0eSgpIHtcbiAgICBsZXQgc2xlZXBRdWFsaXR5VG90YWwgPSB0aGlzLnVzZXJPYmplY3RBcnJheS5yZWR1Y2UoKHNsZWVwUXVhbGl0eVRvdGFsLCB1c2VyKSA9PiB7XG4gICAgICBzbGVlcFF1YWxpdHlUb3RhbCArPSB1c2VyLnNsZWVwUXVhbGl0eUF2ZXJhZ2U7XG4gICAgICByZXR1cm4gc2xlZXBRdWFsaXR5VG90YWw7XG4gICAgfSwgMClcbiAgICByZXR1cm4gTnVtYmVyKChzbGVlcFF1YWxpdHlUb3RhbCAvIHRoaXMudXNlck9iamVjdEFycmF5Lmxlbmd0aCkudG9GaXhlZCgxKSlcbiAgfVxuXG4gIGdldEdsb2JhbFN0ZXBBdmdCeURhdGUoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnVzZXJPYmplY3RBcnJheS5yZWR1Y2UoKHRvdGFsU3RlcHMsIHVzZXIpID0+IHtcbiAgICAgIHRvdGFsU3RlcHMgKz0gdXNlci5nZXRBY3Rpdml0eURhdGFCeURhdGUoZGF0ZSwgJ251bVN0ZXBzJylcbiAgICAgIHJldHVybiB0b3RhbFN0ZXBzXG4gICAgfSwgMCkgLyB0aGlzLnVzZXJPYmplY3RBcnJheS5sZW5ndGhcbiAgfVxuXG4gIGdldEdsb2JhbFN0YWlyQXZnQnlEYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyT2JqZWN0QXJyYXkucmVkdWNlKCh0b3RhbFN0ZXBzLCB1c2VyKSA9PiB7XG4gICAgICB0b3RhbFN0ZXBzICs9IHVzZXIuZ2V0QWN0aXZpdHlEYXRhQnlEYXRlKGRhdGUsICdmbGlnaHRzT2ZTdGFpcnMnKVxuICAgICAgcmV0dXJuIHRvdGFsU3RlcHNcbiAgICB9LCAwKSAvIHRoaXMudXNlck9iamVjdEFycmF5Lmxlbmd0aFxuICB9XG5cbiAgZ2V0R2xvYmFsQWN0aXZlQXZnQnlEYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyT2JqZWN0QXJyYXkucmVkdWNlKCh0b3RhbFN0ZXBzLCB1c2VyKSA9PiB7XG4gICAgICB0b3RhbFN0ZXBzICs9IHVzZXIuZ2V0QWN0aXZpdHlEYXRhQnlEYXRlKGRhdGUsICdtaW51dGVzQWN0aXZlJylcbiAgICAgIHJldHVybiB0b3RhbFN0ZXBzXG4gICAgfSwgMCkgLyB0aGlzLnVzZXJPYmplY3RBcnJheS5sZW5ndGhcbiAgfVxuICBcbiAgZ2V0R2xvYmFsV2F0ZXJBdmdCeURhdGUoZGF0ZSkge1xuICAgIHJldHVybiBOdW1iZXIoKHRoaXMudXNlck9iamVjdEFycmF5LnJlZHVjZSgodG90YWxIMk8sIHVzZXIpID0+IHtcbiAgICAgIHRvdGFsSDJPICs9IHVzZXIuc3VtRGFpbHlPdW5jZXMoZGF0ZSlcbiAgICAgIHJldHVybiB0b3RhbEgyT1xuICAgIH0sIDApIC8gdGhpcy51c2VyT2JqZWN0QXJyYXkubGVuZ3RoKS50b0ZpeGVkKDApKVxuICB9XG59XG4iLCJpbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpdml0eSBleHRlbmRzIERhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhT2JqZWN0KSB7XG4gICAgc3VwZXIoZGF0YU9iamVjdCk7XG4gICAgdGhpcy5udW1TdGVwcyA9IGRhdGFPYmplY3QubnVtU3RlcHM7XG4gICAgdGhpcy5taW51dGVzQWN0aXZlID0gZGF0YU9iamVjdC5taW51dGVzQWN0aXZlO1xuICAgIHRoaXMuZmxpZ2h0c09mU3RhaXJzID0gZGF0YU9iamVjdC5mbGlnaHRzT2ZTdGFpcnM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhT2JqZWN0KSB7XG4gICAgdGhpcy51c2VySUQgPSBkYXRhT2JqZWN0LnVzZXJJRDtcbiAgICB0aGlzLmRhdGUgPSBkYXRhT2JqZWN0LmRhdGU7XG4gIH1cbn1cbiIsImltcG9ydCBEYXRhIGZyb20gJy4vRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh5ZHJhdGlvbiBleHRlbmRzIERhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhT2JqZWN0KSB7XG4gICAgc3VwZXIoZGF0YU9iamVjdCk7XG4gICAgdGhpcy5udW1PdW5jZXMgPSBkYXRhT2JqZWN0Lm51bU91bmNlcztcbiAgfVxufVxuIiwiaW1wb3J0IERhdGEgZnJvbSAnLi9EYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xlZXAgZXh0ZW5kcyBEYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YU9iamVjdCkge1xuICAgIHN1cGVyKGRhdGFPYmplY3QpO1xuICAgIHRoaXMuaG91cnNTbGVwdCA9IGRhdGFPYmplY3QuaG91cnNTbGVwdDtcbiAgICB0aGlzLnNsZWVwUXVhbGl0eSA9IGRhdGFPYmplY3Quc2xlZXBRdWFsaXR5O1xuICB9XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2NhbGVuZGFyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvZnJpZW5kcy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2dvYmFjay5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2luZm8uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9uZXdpbnB1dC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Byb2ZpbGUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy90cmVuZGluZy5zdmdcIjsiLCJpbXBvcnQgXCIuL2Nzcy9iYXNlLnNjc3NcIjtcbmltcG9ydCBcIi4vY3NzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IHtcbiAgZGFpbHlPeixcbiAgZHJvcGRvd25FbWFpbCxcbiAgZHJvcGRvd25GcmllbmRzU3RlcHNDb250YWluZXIsXG4gIGRyb3Bkb3duR29hbCxcbiAgZHJvcGRvd25OYW1lLFxuICBoZWFkZXJOYW1lLFxuICBoeWRyYXRpb25DYWxlbmRhckNhcmQsXG4gIGh5ZHJhdGlvbkFsbFVzZXJzVG9kYXksXG4gIGh5ZHJhdGlvbkZyaWVuZHNDYXJkLFxuICBoeWRyYXRpb25JbmZvQ2FyZCxcbiAgaHlkcmF0aW9uSW5mb0dsYXNzZXNUb2RheSxcbiAgaHlkcmF0aW9uTWFpbkNhcmQsXG4gIGh5ZHJhdGlvblVzZXJPdW5jZXNUb2RheSxcbiAgaHlkcmF0aW9uTmV3SW5wdXRDYXJkLFxuICBoeWRyYXRpb25TdWJtaXRidXR0b24sXG4gIGh5ZHJhdGlvbklucHV0RGF0ZSxcbiAgbnVtT3VuY2VzSW5wdXQsXG4gIG1haW5QYWdlLFxuICBwcm9maWxlQnV0dG9uLFxuICBzbGVlcENhbGVuZGFyQ2FyZCxcbiAgc2xlZXBDYWxlbmRhckhvdXJzQXZlcmFnZVdlZWtseSxcbiAgc2xlZXBDYWxlbmRhclF1YWxpdHlBdmVyYWdlV2Vla2x5LFxuICBzbGVlcEZyaWVuZExvbmdlc3RTbGVlcGVyLFxuICBzbGVlcEZyaWVuZHNDYXJkLFxuICBzbGVlcEZyaWVuZFdvcnN0U2xlZXBlcixcbiAgc2xlZXBJbmZvQ2FyZCxcbiAgc2xlZXBJbmZvSG91cnNBdmVyYWdlQWxsdGltZSxcbiAgc2xlZXBJbmZvUXVhbGl0eUF2ZXJhZ2VBbGx0aW1lLFxuICBzbGVlcEluZm9RdWFsaXR5VG9kYXksXG4gIHNsZWVwTWFpbkNhcmQsXG4gIHNsZWVwVXNlckhvdXJzVG9kYXksXG4gIHNsZWVwTmV3SW5wdXRDYXJkLFxuICBzbGVlcElucHV0RGF0ZSxcbiAgc2xlZXBJbnB1dEhvdXJzLFxuICBzbGVlcElucHV0UXVhbGl0eSxcbiAgaW5wdXRGZWVkYmFjayxcbiAgc2xlZXBTdWJtaXRCdXR0b24sXG4gIHN0YWlyc0NhbGVuZGFyQ2FyZCxcbiAgc3RhaXJzQ2FsZW5kYXJGbGlnaHRzQXZlcmFnZVdlZWtseSxcbiAgc3RhaXJzQ2FsZW5kYXJTdGFpcnNBdmVyYWdlV2Vla2x5LFxuICBzdGVwc01haW5DYXJkLFxuICBzdGVwc0luZm9DYXJkLFxuICBzdGVwc0ZyaWVuZHNDYXJkLFxuICBzdGVwc1RyZW5kaW5nQ2FyZCxcbiAgc3RlcHNDYWxlbmRhckNhcmQsXG4gIHN0ZXBzTmV3SW5wdXRDYXJkLFxuICBzdGVwc1N1Ym1pdEJ1dHRvbixcbiAgc3RhaXJzRnJpZW5kRmxpZ2h0c0F2ZXJhZ2VUb2RheSxcbiAgc3RhaXJzRnJpZW5kc0NhcmQsXG4gIHN0YWlyc0luZm9DYXJkLFxuICBzdGFpcnNJbmZvRmxpZ2h0c1RvZGF5LFxuICBzdGFpcnNNYWluQ2FyZCxcbiAgc3RhaXJzVHJlbmRpbmdCdXR0b24sXG4gIHN0YWlyc1RyZW5kaW5nQ2FyZCxcbiAgc3RhaXJzVXNlclN0YWlyc1RvZGF5LFxuICBzdGFpcnNOZXdJbnB1dENhcmQsXG4gIHN0ZXBzQ2FsZW5kYXJUb3RhbEFjdGl2ZU1pbnV0ZXNXZWVrbHksXG4gIHN0ZXBzQ2FsZW5kYXJUb3RhbFN0ZXBzV2Vla2x5LFxuICBzdGVwc0ZyaWVuZEF2ZXJhZ2VTdGVwR29hbCxcbiAgc3RlcHNJbmZvQWN0aXZlTWludXRlc1RvZGF5LFxuICBzdGVwc0luZm9NaWxlc1dhbGtlZFRvZGF5LFxuICBzdGVwc0ZyaWVuZEFjdGl2ZU1pbnV0ZXNBdmVyYWdlVG9kYXksXG4gIHN0ZXBzRnJpZW5kU3RlcHNBdmVyYWdlVG9kYXksXG4gIHN0ZXBzVHJlbmRpbmdCdXR0b24sXG4gIHN0ZXBzVXNlclN0ZXBzVG9kYXksXG4gIHN0ZXBzSW5wdXREYXRlLFxuICBzdGVwc0lucHV0U3RlcHMsXG4gIHN0ZXBzSW5wdXRBY3RpdmVNaW5zLFxuICBzdGVwc0lucHV0TWlsZXMsXG4gIHRyZW5kaW5nU3RlcHNQaHJhc2VDb250YWluZXIsXG4gIHRyZW5kaW5nU3RhaXJzUGhyYXNlQ29udGFpbmVyLFxuICB1c2VySW5mb0Ryb3Bkb3duLFxufSBmcm9tIFwiLi9ET00tbG9hZGVyXCI7XG5cbmltcG9ydCBVc2VyUmVwb3NpdG9yeSBmcm9tIFwiLi4vc3JjL2NsYXNzZXMvVXNlclJlcG9zaXRvcnlcIjtcblxuLy8gIDwtLS0tICAgICAgICBub24tRE9NIHZhcnMgICAgICAgIC0tLS0+ICAgLy9cbmxldCB1c2VyRGF0YTtcbmxldCBhY3Rpdml0eURhdGE7XG5sZXQgaHlkcmF0aW9uRGF0YTtcbmxldCBzbGVlcERhdGE7XG5sZXQgdXNlcjtcbmxldCB1c2VyUmVwb3NpdG9yeTtcbmxldCBzb3J0ZWRIeWRyYXRpb25EYXRhQnlEYXRlO1xuXG5jb25zdCBkYXRlID0gXCIyMDIwLzAxLzIyXCI7XG5cbi8vICAgICAgICAqKioqICAgICAgICBFVkVOVCBMSVNURU5FUlMgICAgICAgKioqKlxuXG5zdGFpcnNUcmVuZGluZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICB1c2VyLmZpbmRUcmVuZGluZ1N0YWlyc0RheXMoKTtcbiAgdHJlbmRpbmdTdGFpcnNQaHJhc2VDb250YWluZXIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPSd0cmVuZC1saW5lJz4ke3VzZXIudHJlbmRpbmdTdGFpcnNEYXlzWzBdfTwvcD5gO1xufSk7XG5cbnN0ZXBzVHJlbmRpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgdXNlci5maW5kVHJlbmRpbmdTdGVwRGF5cygpO1xuICB0cmVuZGluZ1N0ZXBzUGhyYXNlQ29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBjbGFzcz0ndHJlbmQtbGluZSc+JHt1c2VyLnRyZW5kaW5nU3RlcERheXNbMF19PC9wPmA7XG59KTtcblxuc2xlZXBTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZ2V0U2xlZXBJbnB1dChcbiAgICBzbGVlcElucHV0RGF0ZS52YWx1ZSxcbiAgICBzbGVlcElucHV0SG91cnMudmFsdWUsXG4gICAgc2xlZXBJbnB1dFF1YWxpdHkudmFsdWVcbiAgKTtcbn0pO1xuXG5zdGVwc1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBnZXRBY3Rpdml0eUlucHV0KFxuICAgIHN0ZXBzSW5wdXREYXRlLnZhbHVlLFxuICAgIHN0ZXBzSW5wdXRTdGVwcy52YWx1ZSxcbiAgICBzdGVwc0lucHV0QWN0aXZlTWlucy52YWx1ZSxcbiAgICBzdGVwc0lucHV0TWlsZXMudmFsdWVcbiAgKTtcbn0pO1xuXG5oeWRyYXRpb25TdWJtaXRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZ2V0SHlkcmF0aW9uSW5wdXQoXG4gICAgaHlkcmF0aW9uSW5wdXREYXRlLnZhbHVlLFxuICAgIG51bU91bmNlc0lucHV0LnZhbHVlXG4gICk7XG59KTtcblxubWFpblBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dJbmZvKTtcblxucHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Ryb3Bkb3duKTtcblxuc3RhaXJzVHJlbmRpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVRyZW5kaW5nU3RhaXJzRGF5cyk7XG5cbnN0ZXBzVHJlbmRpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVRyZW5kaW5nU3RlcERheXMpO1xuXG5cbi8vICAgICAgICAqKioqICAgICAgICBVU0VSIERBVEEgSU5QVVQgRlVOQ1RJT05TICAgICAgICoqKipcblxuY29uc3QgZ2V0U2xlZXBJbnB1dCA9IChkYXRlLCBob3VycywgcXVhbGl0eSkgPT4ge1xuICBsZXQgaWQgPSBOdW1iZXIodXNlci5pZCk7XG4gIGRhdGUgPSBkYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKTtcbiAgaG91cnMgPSBOdW1iZXIoaG91cnMpO1xuICBxdWFsaXR5ID0gTnVtYmVyKHF1YWxpdHkpO1xuICBzdWJtaXRTbGVlcERhdGEoaWQsIGRhdGUsIGhvdXJzLCBxdWFsaXR5KTtcbiAgdXNlci51cGRhdGVTbGVlcChkYXRlLCBob3VycywgcXVhbGl0eSk7XG59O1xuXG5jb25zdCBnZXRBY3Rpdml0eUlucHV0ID0gKGRhdGUsIG51bVN0ZXBzLCBtaW51dGVzQWN0aXZlLCBmbGlnaHRzT2ZTdGFpcnMpID0+IHtcbiAgbGV0IGlkID0gTnVtYmVyKHVzZXIuaWQpO1xuICBkYXRlID0gZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIi9cIik7XG4gIG51bVN0ZXBzID0gTnVtYmVyKG51bVN0ZXBzKTtcbiAgbWludXRlc0FjdGl2ZSA9IE51bWJlcihtaW51dGVzQWN0aXZlKTtcbiAgZmxpZ2h0c09mU3RhaXJzID0gTnVtYmVyKGZsaWdodHNPZlN0YWlycyk7XG4gIHN1Ym1pdEFjdGl2aXR5RGF0YShpZCwgZGF0ZSwgbnVtU3RlcHMsIG1pbnV0ZXNBY3RpdmUsIGZsaWdodHNPZlN0YWlycyk7XG4gIHVzZXIudXBkYXRlQWN0aXZpdGllcyhkYXRlLCBudW1TdGVwcywgbWludXRlc0FjdGl2ZSwgZmxpZ2h0c09mU3RhaXJzKTtcbn07XG5cbmNvbnN0IGdldEh5ZHJhdGlvbklucHV0ID0gKGRhdGUsIG51bU91bmNlcykgPT4ge1xuICBsZXQgaWQgPSBOdW1iZXIodXNlci5pZCk7XG4gIGRhdGUgPSBkYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKTtcbiAgbnVtT3VuY2VzID0gTnVtYmVyKG51bU91bmNlcyk7XG4gIHN1Ym1pdEh5ZHJhdGlvbkRhdGEoaWQsIGRhdGUsIG51bU91bmNlcyk7XG4gIHVzZXIudXBkYXRlSHlkcmF0aW9uKGRhdGUsIG51bU91bmNlcylcbn07XG5cbmNvbnN0IHNob3dJbnB1dEZlZWRiYWNrID0gKG1lc3NhZ2UpID0+IHtcbiAgaW5wdXRGZWVkYmFjay5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBpbnB1dEZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xufTtcblxuY29uc3Qgc3VibWl0U2xlZXBEYXRhID0gKGlkLCBkYXRlLCBob3VycywgcXVhbGl0eSkgPT4ge1xuICBmZXRjaChcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9maXRsaXQvMTkwOC9zbGVlcC9zbGVlcERhdGFcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VySUQ6IGlkLFxuICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgIGhvdXJzU2xlcHQ6IGhvdXJzLFxuICAgICAgc2xlZXBRdWFsaXR5OiBxdWFsaXR5LFxuICAgIH0pLFxuICB9KVxuICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBzaG93SW5wdXRGZWVkYmFjayhcIlVwZGF0ZSBzdWNjZXNzZnVsLiAgR3JlYXQgam9iIVwiKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBzaG93SW5wdXRGZWVkYmFjayhcIlRoZXJlIHdhcyBhbiBlcnJvci4gIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgIH0pO1xufTtcblxuY29uc3Qgc3VibWl0QWN0aXZpdHlEYXRhID0gKGlkLCBkYXRlLCBudW1TdGVwcywgbWludXRlc0FjdGl2ZSwgZmxpZ2h0c09mU3RhaXJzKSA9PiB7XG4gIGZldGNoKFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL2ZpdGxpdC8xOTA4L2FjdGl2aXR5L0FjdGl2aXR5RGF0YVwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXJJRDogaWQsXG4gICAgICBkYXRlOiBkYXRlLFxuICAgICAgbnVtU3RlcHM6IG51bVN0ZXBzLFxuICAgICAgbWludXRlc0FjdGl2ZTogbWludXRlc0FjdGl2ZSxcbiAgICAgIGZsaWdodHNPZlN0YWlyczogZmxpZ2h0c09mU3RhaXJzLFxuICAgIH0pLFxuICB9KVxuICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBzaG93SW5wdXRGZWVkYmFjayhcIklucHV0IHN1Y2Nlc3MuICBHcmVhdCBqb2IhXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNob3dJbnB1dEZlZWRiYWNrKFwiVGhlcmUgd2FzIGFuIGVycm9yLiAgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSk7XG59O1xuXG5jb25zdCBzdWJtaXRIeWRyYXRpb25EYXRhID0gKGlkLCBkYXRlLCBudW1PdW5jZXMpID0+IHtcbiAgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvaHlkcmF0aW9uL2h5ZHJhdGlvbkRhdGFcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJJRDogaWQsXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIG51bU91bmNlczogbnVtT3VuY2VzXG4gICAgICB9KSxcbiAgICB9XG4gIClcbiAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgc2hvd0lucHV0RmVlZGJhY2soXCJJbnB1dCBzdWNjZXNzLiAgR3JlYXQgam9iIVwiKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBzaG93SW5wdXRGZWVkYmFjayhcIlRoZXJlIHdhcyBhbiBlcnJvci4gIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgIH0pO1xufTtcblxuLy8gICAgICAgICoqKiogICAgICAgIEZFVENIIERBVEEgRlVOQ1RJT05TIC8gTE9BRCBEQVRBIEZVTkNUSU9OUyAgICAgICAqKioqXG5cbmNvbnN0IHVzZXJQcm9taXNlID0gZmV0Y2goXG5cImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9maXRsaXQvMTkwOC91c2Vycy91c2VyRGF0YVwiXG4pLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcblxuY29uc3QgYWN0aXZpdHlQcm9taXNlID0gZmV0Y2goXG4gIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL2ZpdGxpdC8xOTA4L2FjdGl2aXR5L2FjdGl2aXR5RGF0YVwiXG4pLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcblxuY29uc3QgaHlkcmF0aW9uUHJvbWlzZSA9IGZldGNoKFxuICBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9maXRsaXQvMTkwOC9oeWRyYXRpb24vaHlkcmF0aW9uRGF0YVwiXG4pLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcblxuY29uc3Qgc2xlZXBQcm9taXNlID0gZmV0Y2goXG4gIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL2ZpdGxpdC8xOTA4L3NsZWVwL3NsZWVwRGF0YVwiXG4pLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcblxuUHJvbWlzZS5hbGwoW3VzZXJQcm9taXNlLCBhY3Rpdml0eVByb21pc2UsIGh5ZHJhdGlvblByb21pc2UsIHNsZWVwUHJvbWlzZV0pXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgYWN0aXZpdHlEYXRhID0gZGF0YVsxXS5hY3Rpdml0eURhdGE7XG4gICAgaHlkcmF0aW9uRGF0YSA9IGRhdGFbMl0uaHlkcmF0aW9uRGF0YTtcbiAgICBzbGVlcERhdGEgPSBkYXRhWzNdLnNsZWVwRGF0YTtcbiAgICB1c2VyRGF0YSA9IGRhdGFbMF0udXNlckRhdGE7XG4gICAgdXNlclJlcG9zaXRvcnkgPSBuZXcgVXNlclJlcG9zaXRvcnkoXG4gICAgICB1c2VyRGF0YSxcbiAgICAgIGFjdGl2aXR5RGF0YSxcbiAgICAgIGh5ZHJhdGlvbkRhdGEsXG4gICAgICBzbGVlcERhdGEsXG4gICAgICBkYXRlXG4gICAgKTtcbiAgfSlcbiAgLnRoZW4oKCkgPT4ge1xuICAgIGxvYWRBcHAoKTtcbiAgfSk7XG5cbmNvbnN0IGxvYWRBcHAgPSAoKSA9PiB7XG4gIHVzZXIgPSB1c2VyUmVwb3NpdG9yeS5nZXRSYW5kb21Vc2VyKCk7XG4gIHVzZXIucG9wdWxhdGVVc2VyRGF0YSgpO1xuICB1c2VyLmZpbmRGcmllbmRzTmFtZXModXNlclJlcG9zaXRvcnkuZGF0YU9iamVjdEFycmF5KTsgLy9UT0RPIGdvZXMgaW5zaWRlIHVzZXIgYXMgbWV0aG9kXG4gIHVwZGF0ZVRleHQoKTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRGcmllbmRzQWN0aXZpdHlSZWNvcmRzKCkge1xuICB1c2VyLmZpbmRGcmllbmRzVG90YWxTdGVwc0ZvcldlZWsoZGF0ZSkuc29ydCgoYSxiKT0+Yi50b3RhbFdlZWtseVN0ZXBzLWEudG90YWxXZWVrbHlTdGVwcyk7XG4gIHVzZXIuZnJpZW5kc0FjdGl2aXR5UmVjb3Jkcy5mb3JFYWNoKGZyaWVuZCA9PiB7XG4gICAgZHJvcGRvd25GcmllbmRzU3RlcHNDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICA8cCBjbGFzcz0nZHJvcGRvd24tcCBmcmllbmRzLXN0ZXBzJz4ke2ZyaWVuZC5maXJzdE5hbWV9IHwgICR7ZnJpZW5kLnRvdGFsV2Vla2x5U3RlcHN9PC9wPlxuICAgIGA7XG4gIH0pO1xuICBsZXQgZnJpZW5kc1N0ZXBzUGFyYWdyYXBocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJpZW5kcy1zdGVwc1wiKTtcbiAgZnJpZW5kc1N0ZXBzUGFyYWdyYXBocy5mb3JFYWNoKChwYXJhZ3JhcGgpID0+IHtcbiAgICBpZiAoZnJpZW5kc1N0ZXBzUGFyYWdyYXBoc1swXSA9PT0gcGFyYWdyYXBoKSB7XG4gICAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcImdyZWVuLXRleHRcIik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGZyaWVuZHNTdGVwc1BhcmFncmFwaHNbZnJpZW5kc1N0ZXBzUGFyYWdyYXBocy5sZW5ndGggLSAxXSA9PT0gcGFyYWdyYXBoXG4gICAgKSB7XG4gICAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInJlZC10ZXh0XCIpO1xuICAgIH1cbiAgICBpZiAocGFyYWdyYXBoLmlubmVyVGV4dC5pbmNsdWRlcyhcIllPVVwiKSkge1xuICAgICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJ5ZWxsb3ctdGV4dFwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyAgICAgICAgKioqKiAgICAgICAgVUkgRElTUExBWSBGVU5DVElPTlMgICAgICAgKioqKlxuXG5jb25zdCB1cGRhdGVUZXh0ID0gKCkgPT4ge1xuICBkaXNwbGF5VXNlckluZm8oKTtcbiAgZGlzcGxheUh5ZHJhdGlvbkluZm8oKTtcbiAgZGlzcGxheVNsZWVwSW5mbygpO1xuICBkaXNwbGF5U3RhaXJzSW5mbygpO1xuICBkaXNwbGF5U3RlcHNJbmZvKCk7XG59O1xuXG5jb25zdCBkaXNwbGF5VXNlckluZm8gPSAoKSA9PiB7XG4gIGRyb3Bkb3duR29hbC5pbm5lclRleHQgPSBgREFJTFkgU1RFUCBHT0FMIHwgJHt1c2VyLmRhaWx5U3RlcEdvYWx9YDtcbiAgZHJvcGRvd25FbWFpbC5pbm5lclRleHQgPSBgRU1BSUwgfCAke3VzZXIuZW1haWx9YDtcbiAgZHJvcGRvd25OYW1lLmlubmVyVGV4dCA9IHVzZXIubmFtZS50b1VwcGVyQ2FzZSgpO1xuICBoZWFkZXJOYW1lLmlubmVyVGV4dCA9IGAke3VzZXIuZ2V0Rmlyc3ROYW1lKCl9J1MgYDtcbn07XG5cbmNvbnN0IGRpc3BsYXlIeWRyYXRpb25JbmZvID0gKCkgPT4ge1xuICBsZXQgcGFzdFdlZWtIeWRyYXRpb24gPSB1c2VyLm91bmNlc1JlY29yZC5nZXRQYXN0V2Vla0RhdGEoZGF0ZSlcbiAgaHlkcmF0aW9uVXNlck91bmNlc1RvZGF5LmlubmVyVGV4dCA9IHBhc3RXZWVrSHlkcmF0aW9uWzZdLm51bU91bmNlcztcbiAgaHlkcmF0aW9uQWxsVXNlcnNUb2RheS5pbm5lclRleHQgPSB1c2VyUmVwb3NpdG9yeS5nZXRHbG9iYWxXYXRlckF2Z0J5RGF0ZShkYXRlKTtcbiAgaHlkcmF0aW9uSW5mb0dsYXNzZXNUb2RheS5pbm5lclRleHQgPSAocGFzdFdlZWtIeWRyYXRpb25bNl0ubnVtT3VuY2VzIC8gOCkudG9GaXhlZCgxKTtcbiAgcGFzdFdlZWtIeWRyYXRpb24uZm9yRWFjaCgoZGF5LCBpKSA9PiB7XG4gICAgaWYoZGFpbHlPeltpXSkge1xuICAgICAgZGFpbHlPeltpXS5pbm5lclRleHQgPSBkYXkubnVtT3VuY2VzXG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlTbGVlcEluZm8gPSAoKSA9PiB7XG4gIHNsZWVwQ2FsZW5kYXJIb3Vyc0F2ZXJhZ2VXZWVrbHkuaW5uZXJUZXh0ID0gdXNlci5jYWxjdWxhdGVBdmVyYWdlSG91cnNUaGlzV2VlayhkYXRlKTtcbiAgc2xlZXBDYWxlbmRhclF1YWxpdHlBdmVyYWdlV2Vla2x5LmlubmVyVGV4dCA9IHVzZXIuY2FsY3VsYXRlQXZlcmFnZVF1YWxpdHlUaGlzV2VlayhkYXRlKTtcbiAgc2xlZXBGcmllbmRMb25nZXN0U2xlZXBlci5pbm5lclRleHQgPSB1c2VyUmVwb3NpdG9yeS51c2VyT2JqZWN0QXJyYXkuZmluZCh1c2VyID0+IHtcbiAgICByZXR1cm4gdXNlci5pZCA9PT0gdXNlclJlcG9zaXRvcnkuZ2V0TG9uZ2VzdFNsZWVwZXJzKGRhdGUpXG4gIH0pLmdldEZpcnN0TmFtZSgpO1xuICBzbGVlcEZyaWVuZFdvcnN0U2xlZXBlci5pbm5lclRleHQgPSB1c2VyUmVwb3NpdG9yeS51c2VyT2JqZWN0QXJyYXkuZmluZCh1c2VyID0+IHtcbiAgICByZXR1cm4gdXNlci5pZCA9PT0gdXNlclJlcG9zaXRvcnkuZ2V0V29yc3RTbGVlcGVycyhkYXRlKVxuICB9KS5nZXRGaXJzdE5hbWUoKTtcbiAgc2xlZXBJbmZvSG91cnNBdmVyYWdlQWxsdGltZS5pbm5lclRleHQgPSB1c2VyLmhvdXJzU2xlcHRBdmVyYWdlO1xuICBzdGVwc0luZm9NaWxlc1dhbGtlZFRvZGF5LmlubmVyVGV4dCA9IHVzZXIuYWN0aXZpdHlSZWNvcmQuZ2V0TWlsZXNXYWxrZWQoZGF0ZSk7XG4gIHNsZWVwSW5mb1F1YWxpdHlBdmVyYWdlQWxsdGltZS5pbm5lclRleHQgPSB1c2VyLnNsZWVwUXVhbGl0eUF2ZXJhZ2U7XG4gIHNsZWVwSW5mb1F1YWxpdHlUb2RheS5pbm5lclRleHQgPSB1c2VyLmdldFNsZWVwRGF0YUJ5RGF0ZShkYXRlLCAnc2xlZXBRdWFsaXR5Jyk7XG4gIHNsZWVwVXNlckhvdXJzVG9kYXkuaW5uZXJUZXh0ID0gc2xlZXBVc2VySG91cnNUb2RheS5pbm5lclRleHQgPSB1c2VyLmdldFNsZWVwRGF0YUJ5RGF0ZShkYXRlLCAnaG91cnNTbGVwdCcpO1xufTtcblxuY29uc3QgZGlzcGxheVN0YWlyc0luZm8gPSAoKSA9PiB7XG4gIHN0YWlyc0NhbGVuZGFyRmxpZ2h0c0F2ZXJhZ2VXZWVrbHkuaW5uZXJUZXh0ID0gdXNlci5jYWxjdWxhdGVBdmVyYWdlRmxpZ2h0c1RoaXNXZWVrKGRhdGUpO1xuICBzdGFpcnNDYWxlbmRhclN0YWlyc0F2ZXJhZ2VXZWVrbHkuaW5uZXJUZXh0ID0gKHVzZXIuY2FsY3VsYXRlQXZlcmFnZUZsaWdodHNUaGlzV2VlayhkYXRlKSAqIDEyKS50b0ZpeGVkKDApO1xuICBzdGFpcnNGcmllbmRGbGlnaHRzQXZlcmFnZVRvZGF5LmlubmVyVGV4dCA9ICh1c2VyUmVwb3NpdG9yeS5nZXRHbG9iYWxTdGFpckF2Z0J5RGF0ZShkYXRlKSAvIDEyKS50b0ZpeGVkKDEpO1xuICBzdGFpcnNJbmZvRmxpZ2h0c1RvZGF5LmlubmVyVGV4dCA9IHVzZXIuZ2V0QWN0aXZpdHlEYXRhQnlEYXRlKGRhdGUsICdmbGlnaHRzT2ZTdGFpcnMnKTtcbiAgc3RhaXJzVXNlclN0YWlyc1RvZGF5LmlubmVyVGV4dCA9IHVzZXIuZ2V0QWN0aXZpdHlEYXRhQnlEYXRlKGRhdGUsICdmbGlnaHRzT2ZTdGFpcnMnKSAqIDEyO1xuICBzdGFpcnNDYWxlbmRhckZsaWdodHNBdmVyYWdlV2Vla2x5LmlubmVyVGV4dCA9IHVzZXIuY2FsY3VsYXRlQXZlcmFnZUZsaWdodHNUaGlzV2VlayhkYXRlKTtcbiAgc3RhaXJzQ2FsZW5kYXJTdGFpcnNBdmVyYWdlV2Vla2x5LmlubmVyVGV4dCA9ICh1c2VyLmNhbGN1bGF0ZUF2ZXJhZ2VGbGlnaHRzVGhpc1dlZWsoZGF0ZSkgKiAxMikudG9GaXhlZCgwKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlTdGVwc0luZm8gPSAoKSA9PiB7XG4gIHN0ZXBzVXNlclN0ZXBzVG9kYXkuaW5uZXJUZXh0ID0gdXNlci5nZXRBY3Rpdml0eURhdGFCeURhdGUoZGF0ZSwgJ251bVN0ZXBzJylcbiAgc3RlcHNJbmZvQWN0aXZlTWludXRlc1RvZGF5LmlubmVyVGV4dCA9IHVzZXIuZ2V0QWN0aXZpdHlEYXRhQnlEYXRlKGRhdGUsICdtaW51dGVzQWN0aXZlJylcbiAgc3RlcHNDYWxlbmRhclRvdGFsU3RlcHNXZWVrbHkuaW5uZXJUZXh0ID0gdXNlci5hY3Rpdml0eVJlY29yZC5nZXRTdGVwc1RoaXNXZWVrKGRhdGUpO1xuICBzdGVwc0NhbGVuZGFyVG90YWxBY3RpdmVNaW51dGVzV2Vla2x5LmlubmVyVGV4dCA9IHVzZXIuY2FsY3VsYXRlQXZlcmFnZU1pbnV0ZXNBY3RpdmVUaGlzV2VlayhkYXRlKTtcbiAgbG9hZEZyaWVuZHNBY3Rpdml0eVJlY29yZHMoKVxuICBkaXNwbGF5U3RlcHNJbmZvRnJpZW5kcygpXG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5U3RlcHNJbmZvRnJpZW5kcygpIHtcbiAgc3RlcHNGcmllbmRBdmVyYWdlU3RlcEdvYWwuaW5uZXJUZXh0ID0gdXNlclJlcG9zaXRvcnkuZ2V0R2xvYmFsU3RlcEdvYWwoKS50b0ZpeGVkKDApO1xuICBzdGVwc0ZyaWVuZFN0ZXBzQXZlcmFnZVRvZGF5LmlubmVyVGV4dCA9IHVzZXJSZXBvc2l0b3J5LmdldEdsb2JhbFN0ZXBBdmdCeURhdGUoZGF0ZSkudG9GaXhlZCgwKTtcbiAgc3RlcHNGcmllbmRBY3RpdmVNaW51dGVzQXZlcmFnZVRvZGF5LmlubmVyVGV4dCA9IHVzZXJSZXBvc2l0b3J5LmdldEdsb2JhbEFjdGl2ZUF2Z0J5RGF0ZShkYXRlKS50b0ZpeGVkKDApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUcmVuZGluZ1N0YWlyc0RheXMoKSB7XG4gIHVzZXIuZmluZFRyZW5kaW5nU3RhaXJzRGF5cygpO1xuICB0cmVuZGluZ1N0YWlyc1BocmFzZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9J3RyZW5kLWxpbmUnPiR7dXNlci50cmVuZGluZ1N0YWlyc0RheXNbMF19PC9wPmA7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRyZW5kaW5nU3RlcERheXMoKSB7XG4gIHVzZXIuZmluZFRyZW5kaW5nU3RlcERheXMoKTtcbiAgdHJlbmRpbmdTdGVwc1BocmFzZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9J3RyZW5kLWxpbmUnPiR7dXNlci50cmVuZGluZ1N0ZXBEYXlzWzBdfTwvcD5gO1xufVxuXG4vLyAgICAgICAgKioqKiAgICAgICAgVUkgSU5URVJBQ1RJT04gRlVOQ1RJT05TICAgICAgICoqKipcblxuXG5mdW5jdGlvbiBmbGlwQ2FyZChjYXJkVG9IaWRlLCBjYXJkVG9TaG93KSB7XG4gIGNhcmRUb0hpZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIGNhcmRUb1Nob3cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG59XG5cbmZ1bmN0aW9uIHNob3dEcm9wZG93bigpIHtcbiAgdXNlckluZm9Ecm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd0luZm8oKSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RlcHMtaW5mby1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChzdGVwc01haW5DYXJkLCBzdGVwc0luZm9DYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN0ZXBzLWZyaWVuZHMtYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc3RlcHNNYWluQ2FyZCwgc3RlcHNGcmllbmRzQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGVwcy10cmVuZGluZy1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChzdGVwc01haW5DYXJkLCBzdGVwc1RyZW5kaW5nQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGVwcy1jYWxlbmRhci1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChzdGVwc01haW5DYXJkLCBzdGVwc0NhbGVuZGFyQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGVwcy1uZXctaW5wdXQtYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc3RlcHNNYWluQ2FyZCwgc3RlcHNOZXdJbnB1dENhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHlkcmF0aW9uLWluZm8tYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoaHlkcmF0aW9uTWFpbkNhcmQsIGh5ZHJhdGlvbkluZm9DYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImh5ZHJhdGlvbi1mcmllbmRzLWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKGh5ZHJhdGlvbk1haW5DYXJkLCBoeWRyYXRpb25GcmllbmRzQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoeWRyYXRpb24tY2FsZW5kYXItYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoaHlkcmF0aW9uTWFpbkNhcmQsIGh5ZHJhdGlvbkNhbGVuZGFyQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoeWRyYXRpb24tbmV3LWlucHV0LWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKGh5ZHJhdGlvbk1haW5DYXJkLCBoeWRyYXRpb25OZXdJbnB1dENhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhaXJzLWluZm8tYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc3RhaXJzTWFpbkNhcmQsIHN0YWlyc0luZm9DYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN0YWlycy1mcmllbmRzLWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKHN0YWlyc01haW5DYXJkLCBzdGFpcnNGcmllbmRzQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGFpcnMtdHJlbmRpbmctYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc3RhaXJzTWFpbkNhcmQsIHN0YWlyc1RyZW5kaW5nQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGFpcnMtY2FsZW5kYXItYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc3RhaXJzTWFpbkNhcmQsIHN0YWlyc0NhbGVuZGFyQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGFpcnMtbmV3LWlucHV0LWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKHN0YWlyc01haW5DYXJkLCBzdGFpcnNOZXdJbnB1dENhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xlZXAtaW5mby1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChzbGVlcE1haW5DYXJkLCBzbGVlcEluZm9DYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNsZWVwLWZyaWVuZHMtYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc2xlZXBNYWluQ2FyZCwgc2xlZXBGcmllbmRzQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGVlcC1jYWxlbmRhci1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChzbGVlcE1haW5DYXJkLCBzbGVlcENhbGVuZGFyQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGVlcC1uZXctaW5wdXQtYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc2xlZXBNYWluQ2FyZCwgc2xlZXBOZXdJbnB1dENhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RlcHMtZ28tYmFjay1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChldmVudC50YXJnZXQucGFyZW50Tm9kZSwgc3RlcHNNYWluQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoeWRyYXRpb24tZ28tYmFjay1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChldmVudC50YXJnZXQucGFyZW50Tm9kZSwgaHlkcmF0aW9uTWFpbkNhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhaXJzLWdvLWJhY2stYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUsIHN0YWlyc01haW5DYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNsZWVwLWdvLWJhY2stYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUsIHNsZWVwTWFpbkNhcmQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9