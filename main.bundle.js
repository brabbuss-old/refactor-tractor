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
exports.push([module.i, "*,*:after,*:before{box-sizing:border-box;margin:0;padding:0}body{background-color:#1F1F1F;font-family:'Oswald', sans-serif}header{text-align:center;height:9vw}button:active{border:none;outline:none}#profile-button{background-image:url(" + ___CSS_LOADER_URL___0___ + ");background-position:center;background-size:5.6vw;border:none;display:inline;float:right;height:5.6vw;margin-right:.5vw;margin-top:1.6vw;width:5.6vw}#profile-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}#user-info-dropdown{background-color:#fff;color:#1F1F1F;margin:-1.2% 0 0 60%;position:relative;text-align:center;z-index:100;border:2px solid #1F1F1F}#dropdown-name{font-size:1.8vw;padding-bottom:1vw;text-align:center;margin-left:6vw}.dropdown-p{font-size:1.5vw;letter-spacing:normal;font-weight:500;padding:1vw 0 1vw 0;text-align:center;width:100%}h1{color:#fff;display:inline;font-size:5.4vw;letter-spacing:.2em;font-weight:normal}h2{display:inline;font-family:\"Work Sans\",sans-serif;font-size:2.4vw;letter-spacing:.2em;font-weight:700}h3{font-size:6.75vw;letter-spacing:.1em;font-weight:bold}h4{font-size:5.6vw}p{font-family:\"Work Sans\",sans-serif;font-size:1.2vw;letter-spacing:.2vw;font-weight:600;margin-right:1vw;padding-top:2vw;text-align:right;width:9vw;word-break:keep-all}.feedback-container{display:center;height:auto}.input-feedback{color:#fff;font-size:2vw;letter-spacing:.2vw;font-weight:400;width:100%;padding:.5vw 0 .5vw 0;text-align:center}main{display:grid;grid-template-areas:'steps hydration' 'stairs sleep';height:100%}.main-card{display:flex;justify-content:center;align-items:center;flex-direction:column;height:20vw}.main-card-middle{display:flex;align-items:center;justify-content:center;width:100%}.main-card-row{display:flex;justify-content:space-between;align-items:center;width:100%}#steps-card-container{background-color:#E66100;grid-area:steps;margin:.5vw}#hydration-card-container{background-color:#0C7BDC;grid-area:hydration;margin:.5vw}#stairs-card-container{background-color:#8975B2;grid-area:stairs;margin:.5vw}#sleep-card-container{background-color:#23879f;grid-area:sleep;margin:.5vw}.calendar-card{padding-bottom:10%}.card-data-line{display:flex;justify-content:center;flex-direction:row;margin:-4vw 0 2vw 0}.info-text{display:flex;flex-direction:row;align-items:center;width:35%;padding:0}.info-number{width:35%;font-size:5.6vw}.stairs-today{margin-left:26%}label{font-size:6vh;letter-spacing:normal;font-weight:600}input{text-align:center;margin-left:1vw;height:6vh;padding:0.5vw;font-size:3vh}.input-form{display:flex;flex-direction:column;align-items:center;padding-bottom:1vh;margin:-4vw 0 4vw 0}.input-container{display:flex;align-items:center}.submit-button{font-family:\"Work Sans\",sans-serif;font-size:3vw;letter-spacing:.2em;font-weight:700;background-color:#000000;color:#ffffff;border:none;height:6vw;margin-top:2vw 0 2vw 0;width:35.4vw}.submit-button:focus.submit-button{outline:2px solid #FFFFFF;border-color:transparent}.hydration-weekly-label{font-size:1vw;padding-top:1vw}.hydration-weekly-amount{font-size:2vw}.hydration-data-line{display:flex;justify-content:center;margin-bottom:.2vw}.trend-line{font-size:2vw;width:20vw;text-align:center}.info-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___1___ + ");margin-left:1vw}.info-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.friends-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___2___ + ");margin-right:1vw}.friends-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.calendar-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___3___ + ");margin-right:1vw;float:right}.calendar-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.trending-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___4___ + ");margin-left:.5vw;position:absolute;left:1vw}.trending-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.new-input-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___5___ + ");margin-left:1vw}.new-input-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.go-back-button{background-position:center;background-size:3.4vw;background-color:transparent;border:none;display:inline;height:3.4vw;width:3.4vw;background-image:url(" + ___CSS_LOADER_URL___6___ + ");margin:1.8vw}.go-back-button:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3)}.hide{display:none}.green-text{color:#136807}.red-text{color:#b50004}.yellow-text{color:#F8BA00}\n", ""]);



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
/*! exports provided: dailyOz, dropdownEmail, dropdownFriendsStepsContainer, dropdownGoal, dropdownName, headerName, hydrationCalendarCard, hydrationAllUsersToday, hydrationFriendsCard, hydrationInfoCard, hydrationInfoGlassesToday, hydrationMainCard, hydrationUserOuncesToday, hydrationNewInputCard, hydrationSubmitbutton, hydrationInputDate, numOuncesInput, mainPage, profileButton, sleepCalendarCard, sleepCalendarHoursAverageWeekly, sleepCalendarQualityAverageWeekly, sleepFriendLongestSleeper, sleepFriendsCard, sleepFriendWorstSleeper, sleepInfoCard, sleepInfoHoursAverageAlltime, sleepInfoQualityAverageAlltime, sleepInfoQualityToday, sleepMainCard, sleepUserHoursToday, sleepNewInputCard, sleepInputDate, sleepInputHours, sleepInputQuality, sleepSubmitButton, inputFeedback, stairsCalendarCard, stairsCalendarFlightsAverageWeekly, stairsCalendarStairsAverageWeekly, stepsMainCard, stepsInfoCard, stepsFriendsCard, stepsTrendingCard, stepsCalendarCard, stairsFriendFlightsAverageToday, stairsFriendsCard, stairsInfoCard, stairsInfoFlightsToday, stairsMainCard, stairsTrendingButton, stairsTrendingCard, stairsUserStairsToday, stepsCalendarTotalActiveMinutesWeekly, stepsCalendarTotalStepsWeekly, stepsFriendAverageStepGoal, stepsInfoActiveMinutesToday, stepsInfoMilesWalkedToday, stepsFriendActiveMinutesAverageToday, stepsFriendStepsAverageToday, stepsTrendingButton, stepsUserStepsToday, stepsNewInputCard, stepsSubmitButton, stepsInputDate, stepsInputSteps, stepsInputActiveMins, stepsInputMiles, trendingStepsPhraseContainer, trendingStairsPhraseContainer, userInfoDropdown */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsCalendarTotalActiveMinutesWeekly", function() { return stepsCalendarTotalActiveMinutesWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsCalendarTotalStepsWeekly", function() { return stepsCalendarTotalStepsWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendAverageStepGoal", function() { return stepsFriendAverageStepGoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInfoActiveMinutesToday", function() { return stepsInfoActiveMinutesToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInfoMilesWalkedToday", function() { return stepsInfoMilesWalkedToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendActiveMinutesAverageToday", function() { return stepsFriendActiveMinutesAverageToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendStepsAverageToday", function() { return stepsFriendStepsAverageToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsTrendingButton", function() { return stepsTrendingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsUserStepsToday", function() { return stepsUserStepsToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsNewInputCard", function() { return stepsNewInputCard; });
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
const stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
const stepsCalendarTotalStepsWeekly = document.querySelector('#steps-calendar-total-steps-weekly');
const stepsFriendAverageStepGoal = document.querySelector('#steps-friend-average-step-goal');
const stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
const stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
const stepsFriendActiveMinutesAverageToday = document.querySelector('#steps-friend-active-minutes-average-today');
const stepsFriendStepsAverageToday = document.querySelector('#steps-friend-steps-average-today');
const stepsTrendingButton = document.querySelector('.steps-trending-button');
const stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
const stepsNewInputCard = document.querySelector(".steps-new-input-card");
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
  }

  parseData(fetchedData) {
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
    }, 0) / 7);
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
     this.accomplishedDays = []; 
     this.trendingStepDays = []; 
     this.trendingStairsDays = [];

     this.friends = user.friends;
     this.friendObjects;
     this.friendsNames = []; 
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
     ); 
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
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["trendingStairsPhraseContainer"].innerHTML = `<p tabindex="0" class='trend-line'>${user.trendingStairsDays[0]}</p>`;
});

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsTrendingButton"].addEventListener("click", function () {
  user.findTrendingStepDays();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["trendingStepsPhraseContainer"].innerHTML = `<p tabindex="0" class='trend-line'>${user.trendingStepDays[0]}</p>`;
});

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepSubmitButton"].addEventListener("click", function () {
  event.preventDefault()
  getSleepInput(
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInputDate"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInputHours"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["sleepInputQuality"].value
  );
});

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsSubmitButton"].addEventListener("click", function () {
  event.preventDefault();
  getActivityInput(
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInputDate"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInputSteps"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInputActiveMins"].value,
    _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["stepsInputMiles"].value
  );
});

_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["hydrationSubmitbutton"].addEventListener("click", function () {
  event.preventDefault();
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

const showInputFeedback = (message) => {
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["inputFeedback"].innerText = message;
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["inputFeedback"].classList.remove("hide");
  setTimeout(() => {_DOM_loader__WEBPACK_IMPORTED_MODULE_2__["inputFeedback"].classList.add('hide')}, 5000);
};

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
    .then((resp) => {
      showInputFeedback("Update successful.  Great job!");
    })
    .catch(() => {
      showInputFeedback("There was an error.  Please try again.");
    });
};

const submitActivityData = (id, date, numSteps, minutesActive, flightsOfStairs) => {
  fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData", {
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
      showInputFeedback("Update successful.  Great job!");
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
        numOunces: numOunces,
      }),
    }
  )
    .then((resp) => resp.json())
    .then(() => {
      showInputFeedback("Update successful.  Great job!");
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
};

function updateTrendingStairsDays() {
  user.findTrendingStairsDays();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["trendingStairsPhraseContainer"].innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
};

function updateTrendingStepDays() {
  user.findTrendingStepDays();
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["trendingStairsPhraseContainer"].innerHTML = `<p tabindex="0" class='trend-line'>${user.trendingStairsDays[0]}</p>`;
}

//        ****        UI INTERACTION FUNCTIONS       ****

const flipCard = (cardToHide, cardToShow) => {
  cardToHide.classList.add("hide");
  cardToShow.classList.remove("hide");
};

function showDropdown() {
  _DOM_loader__WEBPACK_IMPORTED_MODULE_2__["userInfoDropdown"].classList.toggle("hide");
};

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
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RPTS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQWN0aXZpdHlSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0NsYXNzQ2hvb3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9IeWRyYXRpb25SZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1BhcmVudFJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvU2xlZXBSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvVXNlclJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGF0YS1jbGFzc2VzL0FjdGl2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2RhdGEtY2xhc3Nlcy9EYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2RhdGEtY2xhc3Nlcy9IeWRyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGF0YS1jbGFzc2VzL1NsZWVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2JhODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzPzYxZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jYWxlbmRhci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9mcmllbmRzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2dvYmFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pbmZvLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL25ld2lucHV0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Byb2ZpbGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdHJlbmRpbmcuc3ZnIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwy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QUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVQO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ1E7O0FBRW5DLGlDQUFpQyx5REFBZ0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ0U7QUFDUjtBQUNmOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUssc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcFNBO0FBQUE7QUFBQTtBQUEwQjs7QUFFWDtBQUNmLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQUk7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtB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QTtBQUNBLGFBQWEseURBQWEsRUFBRSw0REFBZ0I7QUFDNUM7QUFDQTtBQUNBLGFBQWEseURBQWEsRUFBRSw2REFBaUI7QUFDN0M7QUFDQTtBQUNBLGFBQWEseURBQWEsRUFBRSw2REFBaUI7QUFDN0M7QUFDQTtBQUNBLGFBQWEseURBQWEsRUFBRSw2REFBaUI7QUFDN0M7QUFDQTtBQUNBLGFBQWEsNkRBQWlCLEVBQUUsNkRBQWlCO0FBQ2pEO0FBQ0E7QUFDQSxhQUFhLDZEQUFpQixFQUFFLGdFQUFvQjtBQUNwRDtBQUNBO0FBQ0EsYUFBYSw2REFBaUIsRUFBRSxpRUFBcUI7QUFDckQ7QUFDQTtBQUNBLGFBQWEsNkRBQWlCLEVBQUUsaUVBQXFCO0FBQ3JEO0FBQ0E7QUFDQSxhQUFhLDBEQUFjLEVBQUUsMERBQWM7QUFDM0M7QUFDQTtBQUNBLGFBQWEsMERBQWMsRUFBRSw2REFBaUI7QUFDOUM7QUFDQTtBQUNBLGFBQWEsMERBQWMsRUFBRSw4REFBa0I7QUFDL0M7QUFDQTtBQUNBLGFBQWEsMERBQWMsRUFBRSw4REFBa0I7QUFDL0M7QUFDQTtBQUNBLGFBQWEseURBQWEsRUFBRSx5REFBYTtBQUN6QztBQUNBO0FBQ0EsYUFBYSx5REFBYSxFQUFFLDREQUFnQjtBQUM1QztBQUNBO0FBQ0EsYUFBYSx5REFBYSxFQUFFLDZEQUFpQjtBQUM3QztBQUNBO0FBQ0EsYUFBYSx5REFBYSxFQUFFLDZEQUFpQjtBQUM3QztBQUNBO0FBQ0Esc0NBQXNDLHlEQUFhO0FBQ25EO0FBQ0E7QUFDQSxzQ0FBc0MsNkRBQWlCO0FBQ3ZEO0FBQ0E7QUFDQSxzQ0FBc0MsMERBQWM7QUFDcEQ7QUFDQTtBQUNBLHNDQUFzQyx5REFBYTtBQUNuRDtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtiYWNrZ3JvdW5kLWNvbG9yOnBpbmt9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9wcm9maWxlLnBuZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvaW5mby5zdmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2ZyaWVuZHMuc3ZnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9jYWxlbmRhci5zdmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3RyZW5kaW5nLnN2Z1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX181X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvbmV3aW5wdXQuc3ZnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzZfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9nb2JhY2suc3ZnXCIpKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqLCo6YWZ0ZXIsKjpiZWZvcmV7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowO3BhZGRpbmc6MH1ib2R5e2JhY2tncm91bmQtY29sb3I6IzFGMUYxRjtmb250LWZhbWlseTonT3N3YWxkJywgc2Fucy1zZXJpZn1oZWFkZXJ7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0Ojl2d31idXR0b246YWN0aXZle2JvcmRlcjpub25lO291dGxpbmU6bm9uZX0jcHJvZmlsZS1idXR0b257YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOjUuNnZ3O2JvcmRlcjpub25lO2Rpc3BsYXk6aW5saW5lO2Zsb2F0OnJpZ2h0O2hlaWdodDo1LjZ2dzttYXJnaW4tcmlnaHQ6LjV2dzttYXJnaW4tdG9wOjEuNnZ3O3dpZHRoOjUuNnZ3fSNwcm9maWxlLWJ1dHRvbjpob3Zlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjMpOy1tcy10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX0jdXNlci1pbmZvLWRyb3Bkb3due2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMUYxRjFGO21hcmdpbjotMS4yJSAwIDAgNjAlO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MTAwO2JvcmRlcjoycHggc29saWQgIzFGMUYxRn0jZHJvcGRvd24tbmFtZXtmb250LXNpemU6MS44dnc7cGFkZGluZy1ib3R0b206MXZ3O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1sZWZ0OjZ2d30uZHJvcGRvd24tcHtmb250LXNpemU6MS41dnc7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO2ZvbnQtd2VpZ2h0OjUwMDtwYWRkaW5nOjF2dyAwIDF2dyAwO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCV9aDF7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZTtmb250LXNpemU6NS40dnc7bGV0dGVyLXNwYWNpbmc6LjJlbTtmb250LXdlaWdodDpub3JtYWx9aDJ7ZGlzcGxheTppbmxpbmU7Zm9udC1mYW1pbHk6XFxcIldvcmsgU2Fuc1xcXCIsc2Fucy1zZXJpZjtmb250LXNpemU6Mi40dnc7bGV0dGVyLXNwYWNpbmc6LjJlbTtmb250LXdlaWdodDo3MDB9aDN7Zm9udC1zaXplOjYuNzV2dztsZXR0ZXItc3BhY2luZzouMWVtO2ZvbnQtd2VpZ2h0OmJvbGR9aDR7Zm9udC1zaXplOjUuNnZ3fXB7Zm9udC1mYW1pbHk6XFxcIldvcmsgU2Fuc1xcXCIsc2Fucy1zZXJpZjtmb250LXNpemU6MS4ydnc7bGV0dGVyLXNwYWNpbmc6LjJ2dztmb250LXdlaWdodDo2MDA7bWFyZ2luLXJpZ2h0OjF2dztwYWRkaW5nLXRvcDoydnc7dGV4dC1hbGlnbjpyaWdodDt3aWR0aDo5dnc7d29yZC1icmVhazprZWVwLWFsbH0uZmVlZGJhY2stY29udGFpbmVye2Rpc3BsYXk6Y2VudGVyO2hlaWdodDphdXRvfS5pbnB1dC1mZWVkYmFja3tjb2xvcjojZmZmO2ZvbnQtc2l6ZToydnc7bGV0dGVyLXNwYWNpbmc6LjJ2dztmb250LXdlaWdodDo0MDA7d2lkdGg6MTAwJTtwYWRkaW5nOi41dncgMCAuNXZ3IDA7dGV4dC1hbGlnbjpjZW50ZXJ9bWFpbntkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1hcmVhczonc3RlcHMgaHlkcmF0aW9uJyAnc3RhaXJzIHNsZWVwJztoZWlnaHQ6MTAwJX0ubWFpbi1jYXJke2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47aGVpZ2h0OjIwdnd9Lm1haW4tY2FyZC1taWRkbGV7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCV9Lm1haW4tY2FyZC1yb3d7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlfSNzdGVwcy1jYXJkLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNFNjYxMDA7Z3JpZC1hcmVhOnN0ZXBzO21hcmdpbjouNXZ3fSNoeWRyYXRpb24tY2FyZC1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojMEM3QkRDO2dyaWQtYXJlYTpoeWRyYXRpb247bWFyZ2luOi41dnd9I3N0YWlycy1jYXJkLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiM4OTc1QjI7Z3JpZC1hcmVhOnN0YWlyczttYXJnaW46LjV2d30jc2xlZXAtY2FyZC1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjojMjM4NzlmO2dyaWQtYXJlYTpzbGVlcDttYXJnaW46LjV2d30uY2FsZW5kYXItY2FyZHtwYWRkaW5nLWJvdHRvbToxMCV9LmNhcmQtZGF0YS1saW5le2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZsZXgtZGlyZWN0aW9uOnJvdzttYXJnaW46LTR2dyAwIDJ2dyAwfS5pbmZvLXRleHR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MzUlO3BhZGRpbmc6MH0uaW5mby1udW1iZXJ7d2lkdGg6MzUlO2ZvbnQtc2l6ZTo1LjZ2d30uc3RhaXJzLXRvZGF5e21hcmdpbi1sZWZ0OjI2JX1sYWJlbHtmb250LXNpemU6NnZoO2xldHRlci1zcGFjaW5nOm5vcm1hbDtmb250LXdlaWdodDo2MDB9aW5wdXR7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWxlZnQ6MXZ3O2hlaWdodDo2dmg7cGFkZGluZzowLjV2dztmb250LXNpemU6M3ZofS5pbnB1dC1mb3Jte2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmctYm90dG9tOjF2aDttYXJnaW46LTR2dyAwIDR2dyAwfS5pbnB1dC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcn0uc3VibWl0LWJ1dHRvbntmb250LWZhbWlseTpcXFwiV29yayBTYW5zXFxcIixzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozdnc7bGV0dGVyLXNwYWNpbmc6LjJlbTtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojMDAwMDAwO2NvbG9yOiNmZmZmZmY7Ym9yZGVyOm5vbmU7aGVpZ2h0OjZ2dzttYXJnaW4tdG9wOjJ2dyAwIDJ2dyAwO3dpZHRoOjM1LjR2d30uc3VibWl0LWJ1dHRvbjpmb2N1cy5zdWJtaXQtYnV0dG9ue291dGxpbmU6MnB4IHNvbGlkICNGRkZGRkY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5oeWRyYXRpb24td2Vla2x5LWxhYmVse2ZvbnQtc2l6ZToxdnc7cGFkZGluZy10b3A6MXZ3fS5oeWRyYXRpb24td2Vla2x5LWFtb3VudHtmb250LXNpemU6MnZ3fS5oeWRyYXRpb24tZGF0YS1saW5le2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206LjJ2d30udHJlbmQtbGluZXtmb250LXNpemU6MnZ3O3dpZHRoOjIwdnc7dGV4dC1hbGlnbjpjZW50ZXJ9LmluZm8tYnV0dG9ue2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTozLjR2dztiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2Rpc3BsYXk6aW5saW5lO2hlaWdodDozLjR2dzt3aWR0aDozLjR2dztiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKTttYXJnaW4tbGVmdDoxdnd9LmluZm8tYnV0dG9uOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxLjMpO3RyYW5zZm9ybTpzY2FsZSgxLjMpfS5mcmllbmRzLWJ1dHRvbntiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6My40dnc7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZTtoZWlnaHQ6My40dnc7d2lkdGg6My40dnc7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIik7bWFyZ2luLXJpZ2h0OjF2d30uZnJpZW5kcy1idXR0b246aG92ZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEuMyk7dHJhbnNmb3JtOnNjYWxlKDEuMyl9LmNhbGVuZGFyLWJ1dHRvbntiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6My40dnc7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZTtoZWlnaHQ6My40dnc7d2lkdGg6My40dnc7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIik7bWFyZ2luLXJpZ2h0OjF2dztmbG9hdDpyaWdodH0uY2FsZW5kYXItYnV0dG9uOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxLjMpO3RyYW5zZm9ybTpzY2FsZSgxLjMpfS50cmVuZGluZy1idXR0b257YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOjMuNHZ3O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7ZGlzcGxheTppbmxpbmU7aGVpZ2h0OjMuNHZ3O3dpZHRoOjMuNHZ3O2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpO21hcmdpbi1sZWZ0Oi41dnc7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxdnd9LnRyZW5kaW5nLWJ1dHRvbjpob3Zlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjMpOy1tcy10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX0ubmV3LWlucHV0LWJ1dHRvbntiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6My40dnc7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZTtoZWlnaHQ6My40dnc7d2lkdGg6My40dnc7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIik7bWFyZ2luLWxlZnQ6MXZ3fS5uZXctaW5wdXQtYnV0dG9uOmhvdmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxLjMpO3RyYW5zZm9ybTpzY2FsZSgxLjMpfS5nby1iYWNrLWJ1dHRvbntiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6My40dnc7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtkaXNwbGF5OmlubGluZTtoZWlnaHQ6My40dnc7d2lkdGg6My40dnc7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzZfX18gKyBcIik7bWFyZ2luOjEuOHZ3fS5nby1iYWNrLWJ1dHRvbjpob3Zlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjMpOy1tcy10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX0uaGlkZXtkaXNwbGF5Om5vbmV9LmdyZWVuLXRleHR7Y29sb3I6IzEzNjgwN30ucmVkLXRleHR7Y29sb3I6I2I1MDAwNH0ueWVsbG93LXRleHR7Y29sb3I6I0Y4QkEwMH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGRhaWx5T3ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktb3onKTtcbmV4cG9ydCBjb25zdCBkcm9wZG93bkVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duLWVtYWlsJyk7XG5leHBvcnQgY29uc3QgZHJvcGRvd25GcmllbmRzU3RlcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd24tZnJpZW5kcy1zdGVwcy1jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBkcm9wZG93bkdvYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd24tZ29hbCcpO1xuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bi1uYW1lJyk7XG5leHBvcnQgY29uc3QgaGVhZGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXItbmFtZScpO1xuZXhwb3J0IGNvbnN0IGh5ZHJhdGlvbkNhbGVuZGFyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoeWRyYXRpb24tY2FsZW5kYXItY2FyZCcpO1xuZXhwb3J0IGNvbnN0IGh5ZHJhdGlvbkFsbFVzZXJzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLWZyaWVuZC1vdW5jZXMtdG9kYXknKTtcbmV4cG9ydCBjb25zdCBoeWRyYXRpb25GcmllbmRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoeWRyYXRpb24tZnJpZW5kcy1jYXJkJyk7XG5leHBvcnQgY29uc3QgaHlkcmF0aW9uSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLWluZm8tY2FyZCcpO1xuZXhwb3J0IGNvbnN0IGh5ZHJhdGlvbkluZm9HbGFzc2VzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLWluZm8tZ2xhc3Nlcy10b2RheScpO1xuZXhwb3J0IGNvbnN0IGh5ZHJhdGlvbk1haW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h5ZHJhdGlvbi1tYWluLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBoeWRyYXRpb25Vc2VyT3VuY2VzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLXVzZXItb3VuY2VzLXRvZGF5Jyk7XG5leHBvcnQgY29uc3QgaHlkcmF0aW9uTmV3SW5wdXRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oeWRyYXRpb24tbmV3LWlucHV0LWNhcmRcIik7XG5leHBvcnQgY29uc3QgaHlkcmF0aW9uU3VibWl0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oeWRyYXRpb24tc3VibWl0LWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBoeWRyYXRpb25JbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h5ZHJhdGlvbi1pbnB1dC1kYXRlXCIpO1xuZXhwb3J0IGNvbnN0IG51bU91bmNlc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoeWRyYXRpb24tb3pzXCIpO1xuZXhwb3J0IGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBzbGVlcENhbGVuZGFyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1jYWxlbmRhci1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBDYWxlbmRhckhvdXJzQXZlcmFnZVdlZWtseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1jYWxlbmRhci1ob3Vycy1hdmVyYWdlLXdlZWtseScpO1xuZXhwb3J0IGNvbnN0IHNsZWVwQ2FsZW5kYXJRdWFsaXR5QXZlcmFnZVdlZWtseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1jYWxlbmRhci1xdWFsaXR5LWF2ZXJhZ2Utd2Vla2x5Jyk7XG5leHBvcnQgY29uc3Qgc2xlZXBGcmllbmRMb25nZXN0U2xlZXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1mcmllbmQtbG9uZ2VzdC1zbGVlcGVyJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBGcmllbmRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1mcmllbmRzLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBzbGVlcEZyaWVuZFdvcnN0U2xlZXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1mcmllbmQtd29yc3Qtc2xlZXBlcicpO1xuZXhwb3J0IGNvbnN0IHNsZWVwSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtaW5mby1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBJbmZvSG91cnNBdmVyYWdlQWxsdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1pbmZvLWhvdXJzLWF2ZXJhZ2UtYWxsdGltZScpO1xuZXhwb3J0IGNvbnN0IHNsZWVwSW5mb1F1YWxpdHlBdmVyYWdlQWxsdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1pbmZvLXF1YWxpdHktYXZlcmFnZS1hbGx0aW1lJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBJbmZvUXVhbGl0eVRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsZWVwLWluZm8tcXVhbGl0eS10b2RheScpO1xuZXhwb3J0IGNvbnN0IHNsZWVwTWFpbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtbWFpbi1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc2xlZXBVc2VySG91cnNUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC11c2VyLWhvdXJzLXRvZGF5Jyk7XG5leHBvcnQgY29uc3Qgc2xlZXBOZXdJbnB1dENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsZWVwLW5ldy1pbnB1dC1jYXJkXCIpO1xuZXhwb3J0IGNvbnN0IHNsZWVwSW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsZWVwLWlucHV0LWRhdGUnKTtcbmV4cG9ydCBjb25zdCBzbGVlcElucHV0SG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG91cnMtc2xlcHQnKTtcbmV4cG9ydCBjb25zdCBzbGVlcElucHV0UXVhbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1xdWFsaXR5Jyk7XG5leHBvcnQgY29uc3Qgc2xlZXBTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xlZXAtc3VibWl0LWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGlucHV0RmVlZGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZmVlZGJhY2snKTtcbmV4cG9ydCBjb25zdCBzdGFpcnNDYWxlbmRhckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWNhbGVuZGFyLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBzdGFpcnNDYWxlbmRhckZsaWdodHNBdmVyYWdlV2Vla2x5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy1jYWxlbmRhci1mbGlnaHRzLWF2ZXJhZ2Utd2Vla2x5Jyk7XG5leHBvcnQgY29uc3Qgc3RhaXJzQ2FsZW5kYXJTdGFpcnNBdmVyYWdlV2Vla2x5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy1jYWxlbmRhci1zdGFpcnMtYXZlcmFnZS13ZWVrbHknKTtcbmV4cG9ydCBjb25zdCBzdGVwc01haW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLW1haW4tY2FyZCcpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtaW5mby1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc3RlcHNGcmllbmRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1mcmllbmRzLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBzdGVwc1RyZW5kaW5nQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy10cmVuZGluZy1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc3RlcHNDYWxlbmRhckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtY2FsZW5kYXItY2FyZCcpO1xuZXhwb3J0IGNvbnN0IHN0YWlyc0ZyaWVuZEZsaWdodHNBdmVyYWdlVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWZyaWVuZC1mbGlnaHRzLWF2ZXJhZ2UtdG9kYXknKTtcbmV4cG9ydCBjb25zdCBzdGFpcnNGcmllbmRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFpcnMtZnJpZW5kcy1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc3RhaXJzSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWluZm8tY2FyZCcpO1xuZXhwb3J0IGNvbnN0IHN0YWlyc0luZm9GbGlnaHRzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWluZm8tZmxpZ2h0cy10b2RheScpO1xuZXhwb3J0IGNvbnN0IHN0YWlyc01haW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy1tYWluLWNhcmQnKTtcbmV4cG9ydCBjb25zdCBzdGFpcnNUcmVuZGluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFpcnMtdHJlbmRpbmctYnV0dG9uJyk7XG5leHBvcnQgY29uc3Qgc3RhaXJzVHJlbmRpbmdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy10cmVuZGluZy1jYXJkJyk7XG5leHBvcnQgY29uc3Qgc3RhaXJzVXNlclN0YWlyc1RvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy11c2VyLXN0YWlycy10b2RheScpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzQ2FsZW5kYXJUb3RhbEFjdGl2ZU1pbnV0ZXNXZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtY2FsZW5kYXItdG90YWwtYWN0aXZlLW1pbnV0ZXMtd2Vla2x5Jyk7XG5leHBvcnQgY29uc3Qgc3RlcHNDYWxlbmRhclRvdGFsU3RlcHNXZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtY2FsZW5kYXItdG90YWwtc3RlcHMtd2Vla2x5Jyk7XG5leHBvcnQgY29uc3Qgc3RlcHNGcmllbmRBdmVyYWdlU3RlcEdvYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtZnJpZW5kLWF2ZXJhZ2Utc3RlcC1nb2FsJyk7XG5leHBvcnQgY29uc3Qgc3RlcHNJbmZvQWN0aXZlTWludXRlc1RvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLWluZm8tYWN0aXZlLW1pbnV0ZXMtdG9kYXknKTtcbmV4cG9ydCBjb25zdCBzdGVwc0luZm9NaWxlc1dhbGtlZFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLWluZm8tbWlsZXMtd2Fsa2VkLXRvZGF5Jyk7XG5leHBvcnQgY29uc3Qgc3RlcHNGcmllbmRBY3RpdmVNaW51dGVzQXZlcmFnZVRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLWZyaWVuZC1hY3RpdmUtbWludXRlcy1hdmVyYWdlLXRvZGF5Jyk7XG5leHBvcnQgY29uc3Qgc3RlcHNGcmllbmRTdGVwc0F2ZXJhZ2VUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1mcmllbmQtc3RlcHMtYXZlcmFnZS10b2RheScpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzVHJlbmRpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RlcHMtdHJlbmRpbmctYnV0dG9uJyk7XG5leHBvcnQgY29uc3Qgc3RlcHNVc2VyU3RlcHNUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy11c2VyLXN0ZXBzLXRvZGF5Jyk7XG5leHBvcnQgY29uc3Qgc3RlcHNOZXdJbnB1dENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0ZXBzLW5ldy1pbnB1dC1jYXJkXCIpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGVwcy1zdWJtaXQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzSW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwcy1pbnB1dC1kYXRlXCIpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzSW5wdXRTdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcHMtaW5wdXRcIik7XG5leHBvcnQgY29uc3Qgc3RlcHNJbnB1dEFjdGl2ZU1pbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsLWFjdGl2ZS1taW51dGVzLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IHN0ZXBzSW5wdXRNaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWwtbWlsZXMtaW5wdXRcIik7XG5leHBvcnQgY29uc3QgdHJlbmRpbmdTdGVwc1BocmFzZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVuZGluZy1zdGVwcy1waHJhc2UtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgdHJlbmRpbmdTdGFpcnNQaHJhc2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlbmRpbmctc3RhaXJzLXBocmFzZS1jb250YWluZXInKTtcbmV4cG9ydCBjb25zdCB1c2VySW5mb0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXItaW5mby1kcm9wZG93bicpO1xuIiwiaW1wb3J0IENsYXNzQ2hvb3NlciBmcm9tICcuL0NsYXNzQ2hvb3Nlcic7XG5pbXBvcnQgUGFyZW50UmVwb3NpdG9yeSBmcm9tICcuL1BhcmVudFJlcG9zaXRvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpdml0eVJlcG9zaXRvcnkgZXh0ZW5kcyBQYXJlbnRSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoZmV0Y2hlZERhdGEsIHVzZXIsIGRhdGFDbGFzcywgZGF0ZSkge1xuICAgIHN1cGVyKGZldGNoZWREYXRhLCB1c2VyLCBkYXRhQ2xhc3MsIGRhdGUpXG4gICAgdGhpcy5zdHJpZGVMZW5ndGggPSB1c2VyLnN0cmlkZUxlbmd0aDtcbiAgICB0aGlzLmRhaWx5U3RlcEdvYWwgPSB1c2VyLmRhaWx5U3RlcEdvYWw7XG4gIH1cbiAgXG4gIGFkZE5ld0FjdGl2aXR5RGF0YShkYXRlLCBzdGVwcywgbWludXRlcywgc3RhaXJzKSB7XG4gICAgbGV0IGFjdGl2aXR5RGF0YU9iamVjdCA9IHtcbiAgICAgIFwidXNlcklEXCI6IHRoaXMudXNlcklELFxuICAgICAgXCJkYXRlXCI6IGRhdGUsXG4gICAgICBcIm51bVN0ZXBzXCI6IHN0ZXBzLFxuICAgICAgXCJtaW51dGVzQWN0aXZlXCI6IG1pbnV0ZXMsXG4gICAgICBcImZsaWdodHNPZlN0YWlyc1wiOiBzdGFpcnNcbiAgICB9XG4gICAgdGhpcy5hZGROZXdEYXRhT2JqZWN0KGFjdGl2aXR5RGF0YU9iamVjdClcbiAgfVxuXG4gIGdldFN0ZXBzVGhpc1dlZWsoZGF0ZSkge1xuICAgIGlmICh0aGlzLmdldFBhc3RXZWVrRGF0YShkYXRlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFzdFdlZWtEYXRhKGRhdGUpLnJlZHVjZSgoc3RlcHNUb3RhbCwgYWN0aXZpdHkpID0+IHtcbiAgICAgICAgc3RlcHNUb3RhbCArPSBhY3Rpdml0eS5udW1TdGVwcztcbiAgICAgICAgcmV0dXJuIHN0ZXBzVG90YWw7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdObyBkYXRhIGZvciB0aGlzIHdlZWsnXG4gICAgfVxuICB9XG5cbiAgZ2V0TWlsZXNXYWxrZWQoZGF0ZSkge1xuICAgIGxldCBhY3Rpdml0eU9iamVjdCA9IHRoaXMuZmluZERhdGFPYmplY3RCeURhdGUoZGF0ZSk7XG4gICAgbGV0IHJlc3VsdCA9ICgoYWN0aXZpdHlPYmplY3QubnVtU3RlcHMgKiB0aGlzLnN0cmlkZUxlbmd0aCkgLyA1MjgwKS50b0ZpeGVkKDEpXG4gICAgcmV0dXJuIE51bWJlcihyZXN1bHQpXG4gIH1cblxuICBjaGVja1N0ZXBHb2FsKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKS5udW1TdGVwcyA+PSB0aGlzLmRhaWx5U3RlcEdvYWwgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBnZXRHb2FsUmVhY2hlZERheXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YU9iamVjdEFycmF5LmZpbHRlcihkYXRhT2JqZWN0ID0+IHtcbiAgICAgIHJldHVybiBkYXRhT2JqZWN0Lm51bVN0ZXBzID49IHRoaXMuZGFpbHlTdGVwR29hbDtcbiAgICB9KVxuICB9XG5cbiAgZ2V0QmVzdFN0YWlyRGF5KCkge1xuICAgIGxldCBiZXN0RGF5ID0gdGhpcy5nZXRIaWdoTG93RGF0YVBvaW50QnlLZXkoJ2ZsaWdodHNPZlN0YWlycycsICdoaWdoJylcbiAgICByZXR1cm4ge2RhdGU6IGJlc3REYXkuZGF0ZSwgZmxpZ2h0c09mU3RhaXJzOiBiZXN0RGF5LmZsaWdodHNPZlN0YWlyc31cbiAgfVxufVxuIiwiaW1wb3J0IEFjdGl2aXR5IGZyb20gJy4vZGF0YS1jbGFzc2VzL0FjdGl2aXR5JztcbmltcG9ydCBIeWRyYXRpb24gZnJvbSAnLi9kYXRhLWNsYXNzZXMvSHlkcmF0aW9uJztcbmltcG9ydCBTbGVlcCBmcm9tICcuL2RhdGEtY2xhc3Nlcy9TbGVlcCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuXG5jbGFzcyBDbGFzc0Nob29zZXIge1xuICBjb25zdHJ1Y3RvcihkYXRhQ2xhc3NOYW1lLCBkYXRlKSB7XG4gICAgdGhpcy5kYXRhQ2xhc3NOYW1lID0gZGF0YUNsYXNzTmFtZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICB9XG4gIFxuICBpbnN0YW50aWF0ZUNsYXNzKGRhdGFPYmplY3QpIHtcbiAgICBpZiAodGhpcy5kYXRhQ2xhc3NOYW1lID09PSAnYWN0aXZpdGllcycpIHtcbiAgICAgIHJldHVybiBuZXcgQWN0aXZpdHkoZGF0YU9iamVjdClcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YUNsYXNzTmFtZSA9PT0gJ3NsZWVwJykge1xuICAgICAgcmV0dXJuIG5ldyBTbGVlcChkYXRhT2JqZWN0KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhQ2xhc3NOYW1lID09PSAnaHlkcmF0aW9uJykge1xuICAgICAgcmV0dXJuIG5ldyBIeWRyYXRpb24oZGF0YU9iamVjdClcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YUNsYXNzTmFtZSA9PT0gJ3VzZXJzJykge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyKGRhdGFPYmplY3QsIHRoaXMuZGF0ZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NDaG9vc2VyO1xuIiwiaW1wb3J0IENsYXNzQ2hvb3NlciBmcm9tICcuL0NsYXNzQ2hvb3Nlcic7XG5pbXBvcnQgUGFyZW50UmVwb3NpdG9yeSBmcm9tICcuL1BhcmVudFJlcG9zaXRvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIeWRyYXRpb25SZXBvc2l0b3J5IGV4dGVuZHMgUGFyZW50UmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKGZldGNoZWREYXRhLCB1c2VyLCBkYXRhQ2xhc3MpIHtcbiAgICBzdXBlcihmZXRjaGVkRGF0YSwgdXNlciwgZGF0YUNsYXNzKVxuICAgIHRoaXMubnVtT3VuY2VzO1xuICB9XG5cbiAgYWRkTmV3SHlkcmF0aW9uRGF0YShkYXRlLCBvdW5jZXMpIHtcbiAgICBsZXQgaHlkcmF0aW9uRGF0YSA9IHtcbiAgICBcInVzZXJJRFwiOiB0aGlzLnVzZXJJRCxcbiAgICBcImRhdGVcIjogZGF0ZSxcbiAgICBcIm51bU91bmNlc1wiOiBvdW5jZXNcbiAgICB9XG4gICAgdGhpcy5hZGROZXdEYXRhT2JqZWN0KGh5ZHJhdGlvbkRhdGEpXG4gIH1cbn1cbiIsImltcG9ydCBDbGFzc0Nob29zZXIgZnJvbSAnLi9DbGFzc0Nob29zZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJlbnRSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoZmV0Y2hlZERhdGEsIHVzZXIsIGRhdGFDbGFzcywgZGF0ZSkge1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5kYXRhQ2xhc3MgPSBkYXRhQ2xhc3M7XG4gICAgdGhpcy5jbGFzc0Nob29zZXIgPSBuZXcgQ2xhc3NDaG9vc2VyKHRoaXMuZGF0YUNsYXNzLCBkYXRlKVxuICAgIHRoaXMudXNlcklEID0gdXNlci5pZDtcbiAgICB0aGlzLmRhdGFPYmplY3RBcnJheSA9IHRoaXMucGFyc2VEYXRhKGZldGNoZWREYXRhKTtcbiAgfVxuXG4gIHBhcnNlRGF0YShmZXRjaGVkRGF0YSkge1xuICAgIHJldHVybiBmZXRjaGVkRGF0YS5yZWR1Y2UoKHBhcnNlZERhdGEsIGRhdGFPYmplY3QpID0+IHtcbiAgICAgIGlmIChkYXRhT2JqZWN0LnVzZXJJRCA9PT0gdGhpcy51c2VySUQpIHtcbiAgICAgICAgcGFyc2VkRGF0YS5wdXNoKHRoaXMuY2xhc3NDaG9vc2VyLmluc3RhbnRpYXRlQ2xhc3MoZGF0YU9iamVjdCkpXG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyc2VkRGF0YVxuICAgIH0sIFtdKVxuICB9XG5cbiAgYWRkTmV3RGF0YU9iamVjdChkYXRhT2JqZWN0KSB7XG4gICAgdGhpcy5kYXRhT2JqZWN0QXJyYXkucHVzaCh0aGlzLmNsYXNzQ2hvb3Nlci5pbnN0YW50aWF0ZUNsYXNzKGRhdGFPYmplY3QpKTtcbiAgfVxuXG4gIGZpbmREYXRhT2JqZWN0QnlEYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhT2JqZWN0QXJyYXkuZmluZChkYXRhT2JqZWN0ID0+IGRhdGFPYmplY3QuZGF0ZSA9PT0gZGF0ZSk7XG4gIH1cblxuICBnZXRBbGxUaW1lQXZlcmFnZUJ5S2V5KGRhdGFPYmplY3RLZXkpIHtcbiAgICBsZXQgZGF0YVRvdGFsID0gdGhpcy5kYXRhT2JqZWN0QXJyYXkucmVkdWNlKChkYXRhVG90YWwsIGRhdGFPYmplY3QpID0+IHtcbiAgICAgIGRhdGFUb3RhbCArPSBkYXRhT2JqZWN0W2RhdGFPYmplY3RLZXldXG4gICAgICByZXR1cm4gZGF0YVRvdGFsXG4gICAgfSwgMClcbiAgICByZXR1cm4gTnVtYmVyKChkYXRhVG90YWwgLyB0aGlzLmRhdGFPYmplY3RBcnJheS5sZW5ndGgpLnRvRml4ZWQoMSkpXG4gIH1cblxuICBnZXRQYXN0V2Vla0RhdGEoZGF0ZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZGF0YU9iamVjdEFycmF5LmluZGV4T2YodGhpcy5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKSlcbiAgICByZXR1cm4gdGhpcy5kYXRhT2JqZWN0QXJyYXkuc2xpY2UoaW5kZXggLSA2LCBpbmRleCArIDEpXG4gIH1cblxuICBnZXREYXRhQnlEYXRlQW5kS2V5KGRhdGUsIGRhdGFPYmplY3RLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKVtkYXRhT2JqZWN0S2V5XTtcbiAgfVxuXG4gIGdldEF2ZXJhZ2VEYXRhQnlXZWVrQW5kS2V5KGRhdGUsIGRhdGFPYmplY3RLZXksIGRlY2ltYWxzKSB7XG4gICAgbGV0IHdlZWtseUF2ZXJhZ2UgPSAodGhpcy5nZXRQYXN0V2Vla0RhdGEoZGF0ZSkucmVkdWNlKChkYXRhVG90YWwsIGRhdGFPYmplY3QpID0+IHtcbiAgICAgIGRhdGFUb3RhbCArPSBkYXRhT2JqZWN0W2RhdGFPYmplY3RLZXldO1xuICAgICAgcmV0dXJuIGRhdGFUb3RhbDtcbiAgICB9LCAwKSAvIDcpO1xuICAgIHJldHVybiBkZWNpbWFscyA/IE51bWJlcih3ZWVrbHlBdmVyYWdlLnRvRml4ZWQoZGVjaW1hbHMpKSA6IE51bWJlcih3ZWVrbHlBdmVyYWdlLnRvRml4ZWQoMCkpXG4gIH1cblxuICBnZXRIaWdoTG93RGF0YVBvaW50QnlLZXkoZGF0YU9iamVjdEtleSwgaGlnaE9yTG93KSB7XG4gICAgbGV0IHNvcnRlZERhdGEgPSB0aGlzLmRhdGFPYmplY3RBcnJheS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gaGlnaE9yTG93ID09PSAnbG93JyA/IGFbZGF0YU9iamVjdEtleV0gLSBiW2RhdGFPYmplY3RLZXldIDogYltkYXRhT2JqZWN0S2V5XSAtIGFbZGF0YU9iamVjdEtleV07XG4gICAgfSlcbiAgICByZXR1cm4gc29ydGVkRGF0YVswXVxuICB9XG5cbiAgZ2V0QWxsRGF0YU9iamVjdHNPbkRhdGUoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFPYmplY3RBcnJheS5maWx0ZXIoZGF0YU9iamVjdCA9PiB7XG4gICAgICByZXR1cm4gZGF0YU9iamVjdC5kYXRlID09PSBkYXRlO1xuICAgIH0pXG4gIH1cblxuICBnZXRUb3RhbEJ5RGF0ZUFuZEtleShkYXRlLCBrZXkpIHtcbiAgICBsZXQgbWF0Y2hlZERhdGEgPSB0aGlzLmdldEFsbERhdGFPYmplY3RzT25EYXRlKGRhdGUpO1xuICAgIGlmIChtYXRjaGVkRGF0YSkge1xuICAgICAgcmV0dXJuIG1hdGNoZWREYXRhLnJlZHVjZSgodG90YWwsIGRhdGFPYmplY3QpID0+IHtcbiAgICAgICAgdG90YWwgKz0gZGF0YU9iamVjdFtrZXldXG4gICAgICAgIHJldHVybiB0b3RhbFxuICAgICAgfSwgMClcbiAgICB9XG4gIH1cblxuICBnZXRXZWVrbHlUb3RhbEJ5RGF0ZUFuZEtleShkYXRlLCBrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYXN0V2Vla0RhdGEoZGF0ZSkucmVkdWNlKChkYXRhVG90YWwsIGRhdGFPYmplY3QpID0+IHtcbiAgICAgIGRhdGFUb3RhbCArPSBkYXRhT2JqZWN0W2tleV07XG4gICAgICByZXR1cm4gZGF0YVRvdGFsO1xuICAgIH0sIDApXG4gIH1cbn1cbiIsImltcG9ydCBDbGFzc0Nob29zZXIgZnJvbSAnLi9DbGFzc0Nob29zZXInO1xuaW1wb3J0IFBhcmVudFJlcG9zaXRvcnkgZnJvbSAnLi9QYXJlbnRSZXBvc2l0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xlZXBSZXBvc2l0b3J5IGV4dGVuZHMgUGFyZW50UmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKGZldGNoZWREYXRhLCB1c2VyLCBkYXRhQ2xhc3MsIGRhdGUpIHtcbiAgICBzdXBlcihmZXRjaGVkRGF0YSwgdXNlciwgZGF0YUNsYXNzLCBkYXRlKVxuICAgIHRoaXMud2Vla2x5U2xlZXBIb3VycztcbiAgICB0aGlzLndlZWtseVNsZWVwUXVhbGl0eTtcbiAgfVxuXG4gIGFkZE5ld1NsZWVwRGF0YShkYXRlLCBob3VycywgcXVhbGl0eSkge1xuICAgIGxldCBzbGVlcERhdGFPYmplY3QgPSB7XG4gICAgICBcInVzZXJJRFwiOiB0aGlzLnVzZXJJRCxcbiAgICAgIFwiZGF0ZVwiOiBkYXRlLFxuICAgICAgXCJob3Vyc1NsZXB0XCI6IGhvdXJzLFxuICAgICAgXCJzbGVlcFF1YWxpdHlcIjogcXVhbGl0eVxuICAgIH1cbiAgICB0aGlzLmFkZE5ld0RhdGFPYmplY3Qoc2xlZXBEYXRhT2JqZWN0KVxuICB9XG4gIFxuICBnZXREYXlCeURheVF1YWxpdHlPckhvdXJzKGRhdGUsIHF1YWxpdHlPckhvdXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFzdFdlZWtEYXRhKGRhdGUpLm1hcChzbGVlcE9iamVjdCA9PiB7XG4gICAgICByZXR1cm4gcXVhbGl0eU9ySG91cnMgPT09ICdob3VycycgPyB7ZGF0ZTogW3NsZWVwT2JqZWN0LmRhdGVdLCBzbGVlcEhvdXJzOiBzbGVlcE9iamVjdC5ob3Vyc1NsZXB0fVxuICAgICAgOiB7ZGF0ZTogW3NsZWVwT2JqZWN0LmRhdGVdLCBzbGVlcFF1YWxpdHk6IHNsZWVwT2JqZWN0LnNsZWVwUXVhbGl0eX07XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IFNsZWVwUmVwb3NpdG9yeSBmcm9tICcuL1NsZWVwUmVwb3NpdG9yeSc7XG5pbXBvcnQgQWN0aXZpdHlSZXBvc2l0b3J5IGZyb20gJy4vQWN0aXZpdHlSZXBvc2l0b3J5JztcbmltcG9ydCBIeWRyYXRpb25SZXBvc2l0b3J5IGZyb20gJy4vSHlkcmF0aW9uUmVwb3NpdG9yeSc7XG5pbXBvcnQgUGFyZW50UmVwb3NpdG9yeSBmcm9tICcuL1BhcmVudFJlcG9zaXRvcnknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICAgY29uc3RydWN0b3IodXNlciwgdXNlckRhdGEsIGFjdGl2aXR5RGF0YSwgaHlkcmF0aW9uRGF0YSwgc2xlZXBEYXRhLCBkYXRlKSB7XG4gICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgIHRoaXMuaWQgPSB1c2VyLmlkO1xuICAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgIHRoaXMuYWRkcmVzcyA9IHVzZXIuYWRkcmVzcztcbiAgICAgdGhpcy5lbWFpbCA9IHVzZXIuZW1haWw7XG5cbiAgICAgdGhpcy5zdHJpZGVMZW5ndGggPSB1c2VyLnN0cmlkZUxlbmd0aDtcbiAgICAgdGhpcy5kYWlseVN0ZXBHb2FsID0gdXNlci5kYWlseVN0ZXBHb2FsO1xuXG4gICAgIHRoaXMuc2xlZXBSZWNvcmQgPSBbXTtcbiAgICAgdGhpcy5zbGVlcFF1YWxpdHlSZWNvcmQgPSBbXTtcbiAgICAgdGhpcy5zbGVlcFF1YWxpdHlBdmVyYWdlID0gMDtcbiAgICAgdGhpcy5ob3Vyc1NsZXB0QXZlcmFnZSA9IDA7XG5cbiAgICAgdGhpcy5vdW5jZXNSZWNvcmQgPSBbXTtcbiAgICAgdGhpcy5vdW5jZXNBdmVyYWdlID0gMDtcblxuICAgICB0aGlzLnRvdGFsU3RlcHNUaGlzV2VlayA9IDA7XG4gICAgIHRoaXMuYWN0aXZpdHlSZWNvcmQgPSBbXTtcbiAgICAgdGhpcy5hY2NvbXBsaXNoZWREYXlzID0gW107IFxuICAgICB0aGlzLnRyZW5kaW5nU3RlcERheXMgPSBbXTsgXG4gICAgIHRoaXMudHJlbmRpbmdTdGFpcnNEYXlzID0gW107XG5cbiAgICAgdGhpcy5mcmllbmRzID0gdXNlci5mcmllbmRzO1xuICAgICB0aGlzLmZyaWVuZE9iamVjdHM7XG4gICAgIHRoaXMuZnJpZW5kc05hbWVzID0gW107IFxuICAgICB0aGlzLmZyaWVuZHNBY3Rpdml0eVJlY29yZHMgPSBbXTtcbiAgIH1cblxuICAgcG9wdWxhdGVTbGVlcERhdGEoc2xlZXBEYXRhKSB7XG4gICAgIGlmIChzbGVlcERhdGEpIHtcbiAgICAgICB0aGlzLnNsZWVwUmVjb3JkID0gbmV3IFNsZWVwUmVwb3NpdG9yeShcbiAgICAgICAgIHNsZWVwRGF0YSxcbiAgICAgICAgIHRoaXMsXG4gICAgICAgICBcInNsZWVwXCIsXG4gICAgICAgICB0aGlzLmRhdGVcbiAgICAgICApO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHJldHVybiBbXTtcbiAgICAgfVxuICAgfVxuXG4gICBwb3B1bGF0ZUh5ZHJhdGlvbkRhdGEoaHlkcmF0aW9uRGF0YSkge1xuICAgICBpZiAoaHlkcmF0aW9uRGF0YSkge1xuICAgICAgIHRoaXMub3VuY2VzUmVjb3JkID0gbmV3IEh5ZHJhdGlvblJlcG9zaXRvcnkoXG4gICAgICAgICBoeWRyYXRpb25EYXRhLFxuICAgICAgICAgdGhpcyxcbiAgICAgICAgIFwiaHlkcmF0aW9uXCIsXG4gICAgICAgICB0aGlzLmRhdGVcbiAgICAgICApO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHJldHVybiBbXTtcbiAgICAgfVxuICAgfVxuXG4gICBwb3B1bGF0ZUFjdGl2aXR5RGF0YShhY3Rpdml0eURhdGEpIHtcbiAgICAgaWYgKGFjdGl2aXR5RGF0YSkge1xuICAgICAgIHRoaXMuYWN0aXZpdHlSZWNvcmQgPSBuZXcgQWN0aXZpdHlSZXBvc2l0b3J5KFxuICAgICAgICAgYWN0aXZpdHlEYXRhLFxuICAgICAgICAgdGhpcyxcbiAgICAgICAgIFwiYWN0aXZpdGllc1wiLFxuICAgICAgICAgdGhpcy5kYXRlXG4gICAgICAgKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gW107XG4gICAgIH1cbiAgIH1cblxuICAgcG9wdWxhdGVGcmllbmRzRGF0YSh1c2VyRGF0YSwgYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEsIGRhdGUpIHtcbiAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgbGV0IG1hdGNoZWRGcmllbmRzID0gdXNlckRhdGEuZmlsdGVyKCh1c2VyKSA9PlxuICAgICAgICAgdGhpcy5mcmllbmRzLmluY2x1ZGVzKHVzZXIuaWQpXG4gICAgICAgKTtcbiAgICAgICB0aGlzLmZyaWVuZE9iamVjdHMgPSBtYXRjaGVkRnJpZW5kcy5yZWR1Y2UoKGZyaWVuZE9iamVjdHMsIGZyaWVuZCkgPT4ge1xuICAgICAgICAgZnJpZW5kT2JqZWN0cy5wdXNoKFxuICAgICAgICAgICBuZXcgVXNlcihcbiAgICAgICAgICAgICBmcmllbmQsXG4gICAgICAgICAgICAgdXNlckRhdGEsXG4gICAgICAgICAgICAgYWN0aXZpdHlEYXRhLFxuICAgICAgICAgICAgIGh5ZHJhdGlvbkRhdGEsXG4gICAgICAgICAgICAgc2xlZXBEYXRhLFxuICAgICAgICAgICAgIGRhdGVcbiAgICAgICAgICAgKVxuICAgICAgICAgKTtcbiAgICAgICAgIHJldHVybiBmcmllbmRPYmplY3RzO1xuICAgICAgIH0sIFtdKTtcbiAgICAgfSBlbHNlIHtcbiAgICAgICByZXR1cm4gW107XG4gICAgIH1cbiAgIH1cblxuICAgcG9wdWxhdGVGcmllbmRzUmVwb3MoYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEpIHtcbiAgICAgdGhpcy5mcmllbmRPYmplY3RzLmZvckVhY2goKGZyaWVuZCkgPT4ge1xuICAgICAgIGZyaWVuZC5wb3B1bGF0ZVNsZWVwRGF0YShzbGVlcERhdGEpO1xuICAgICAgIGZyaWVuZC5wb3B1bGF0ZUh5ZHJhdGlvbkRhdGEoaHlkcmF0aW9uRGF0YSk7XG4gICAgICAgZnJpZW5kLnBvcHVsYXRlQWN0aXZpdHlEYXRhKGFjdGl2aXR5RGF0YSk7XG4gICAgIH0pO1xuICAgfVxuXG4gICBwb3B1bGF0ZVVzZXJEYXRhKHVzZXJEYXRhLCBhY3Rpdml0eURhdGEsIGh5ZHJhdGlvbkRhdGEsIHNsZWVwRGF0YSwgZGF0ZSkge1xuICAgICB0aGlzLnBvcHVsYXRlU2xlZXBEYXRhKHNsZWVwRGF0YSk7XG4gICAgIHRoaXMucG9wdWxhdGVIeWRyYXRpb25EYXRhKGh5ZHJhdGlvbkRhdGEpO1xuICAgICB0aGlzLnBvcHVsYXRlQWN0aXZpdHlEYXRhKGFjdGl2aXR5RGF0YSk7XG4gICAgIHRoaXMuZ2V0VXNlckF2ZXJhZ2VEYXRhKCk7XG4gICAgIHRoaXMucG9wdWxhdGVGcmllbmRzRGF0YShcbiAgICAgICB1c2VyRGF0YSxcbiAgICAgICBhY3Rpdml0eURhdGEsXG4gICAgICAgaHlkcmF0aW9uRGF0YSxcbiAgICAgICBzbGVlcERhdGEsXG4gICAgICAgZGF0ZVxuICAgICApO1xuICAgICB0aGlzLnBvcHVsYXRlRnJpZW5kc1JlcG9zKGFjdGl2aXR5RGF0YSwgaHlkcmF0aW9uRGF0YSwgc2xlZXBEYXRhKTtcbiAgIH1cblxuICAgZ2V0VXNlckF2ZXJhZ2VEYXRhKCkge1xuICAgICB0aGlzLnNsZWVwUXVhbGl0eUF2ZXJhZ2UgPSB0aGlzLnNsZWVwUmVjb3JkLmdldEFsbFRpbWVBdmVyYWdlQnlLZXkoXG4gICAgICAgXCJzbGVlcFF1YWxpdHlcIlxuICAgICApOyBcbiAgICAgdGhpcy5ob3Vyc1NsZXB0QXZlcmFnZSA9IHRoaXMuc2xlZXBSZWNvcmQuZ2V0QWxsVGltZUF2ZXJhZ2VCeUtleShcbiAgICAgICBcImhvdXJzU2xlcHRcIlxuICAgICApO1xuICAgICB0aGlzLm91bmNlc0F2ZXJhZ2UgPSB0aGlzLm91bmNlc1JlY29yZC5nZXRBbGxUaW1lQXZlcmFnZUJ5S2V5KFwibnVtT3VuY2VzXCIpO1xuICAgICB0aGlzLnRvdGFsU3RlcHNUaGlzV2VlayA9IHRoaXMuYWN0aXZpdHlSZWNvcmQuZ2V0V2Vla2x5VG90YWxCeURhdGVBbmRLZXkoXG4gICAgICAgdGhpcy5kYXRlLFxuICAgICAgIFwibnVtU3RlcHNcIlxuICAgICApO1xuICAgfVxuXG4gICBnZXRGaXJzdE5hbWUoKSB7XG4gICAgIGxldCBwYXJzZWROYW1lID0gdGhpcy5uYW1lLnNwbGl0KFwiIFwiKTtcbiAgICAgcmV0dXJuIHBhcnNlZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgIH1cblxuICAgdXBkYXRlSHlkcmF0aW9uKGRhdGUsIG91bmNlcykge1xuICAgICB0aGlzLm91bmNlc1JlY29yZC5hZGROZXdIeWRyYXRpb25EYXRhKGRhdGUsIG91bmNlcyk7XG4gICAgIGlmICh0aGlzLm91bmNlc1JlY29yZC5kYXRhT2JqZWN0QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgdGhpcy5vdW5jZXNBdmVyYWdlID0gdGhpcy5vdW5jZXNSZWNvcmQuZ2V0QWxsVGltZUF2ZXJhZ2VCeUtleShcbiAgICAgICAgIFwibnVtT3VuY2VzXCJcbiAgICAgICApO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHRoaXMub3VuY2VzQXZlcmFnZSA9IG91bmNlcztcbiAgICAgfVxuICAgfVxuXG4gICB1cGRhdGVTbGVlcChkYXRlLCBob3VycywgcXVhbGl0eSkge1xuICAgICB0aGlzLnNsZWVwUmVjb3JkLmFkZE5ld1NsZWVwRGF0YShkYXRlLCBob3VycywgcXVhbGl0eSk7XG4gICAgIGlmICh0aGlzLnNsZWVwUmVjb3JkLmRhdGFPYmplY3RBcnJheS5sZW5ndGgpIHtcbiAgICAgICB0aGlzLmhvdXJzU2xlcHRBdmVyYWdlID0gdGhpcy5zbGVlcFJlY29yZC5nZXRBbGxUaW1lQXZlcmFnZUJ5S2V5KFxuICAgICAgICAgXCJob3Vyc1NsZXB0XCJcbiAgICAgICApO1xuICAgICAgIHRoaXMuc2xlZXBRdWFsaXR5QXZlcmFnZSA9IHRoaXMuc2xlZXBSZWNvcmQuZ2V0QWxsVGltZUF2ZXJhZ2VCeUtleShcbiAgICAgICAgIFwic2xlZXBRdWFsaXR5XCJcbiAgICAgICApO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHRoaXMuaG91cnNTbGVwdEF2ZXJhZ2UgPSBob3VycztcbiAgICAgICB0aGlzLnNsZWVwUXVhbGl0eUF2ZXJhZ2UgPSBxdWFsaXR5O1xuICAgICB9XG4gICB9XG5cbiAgIHVwZGF0ZUFjdGl2aXRpZXMoZGF0ZSwgc3RlcHMsIG1pbnV0ZXMsIHN0YWlycykge1xuICAgICB0aGlzLmFjdGl2aXR5UmVjb3JkLmFkZE5ld0FjdGl2aXR5RGF0YShkYXRlLCBzdGVwcywgbWludXRlcywgc3RhaXJzKTtcbiAgICAgaWYgKHN0ZXBzID49IHRoaXMuZGFpbHlTdGVwR29hbCkge1xuICAgICAgIHRoaXMuYWNjb21wbGlzaGVkRGF5cy5wdXNoKGRhdGUpO1xuICAgICB9XG4gICB9XG5cbiAgIHN1bURhaWx5T3VuY2VzKGRhdGUpIHtcbiAgICAgcmV0dXJuIHRoaXMub3VuY2VzUmVjb3JkLmdldFRvdGFsQnlEYXRlQW5kS2V5KGRhdGUsIFwibnVtT3VuY2VzXCIpO1xuICAgfVxuXG4gICBmaW5kQ2xpbWJpbmdSZWNvcmQoKSB7XG4gICAgIHJldHVybiB0aGlzLmFjdGl2aXR5UmVjb3JkLmdldEhpZ2hMb3dEYXRhUG9pbnRCeUtleShcbiAgICAgICBcImZsaWdodHNPZlN0YWlyc1wiLFxuICAgICAgIFwiaGlnaFwiXG4gICAgICkuZmxpZ2h0c09mU3RhaXJzO1xuICAgfVxuXG4gICBnZXRBY3Rpdml0eURhdGFCeURhdGUoZGF0ZSwgZGF0YVR5cGUpIHtcbiAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlSZWNvcmQuZmluZERhdGFPYmplY3RCeURhdGUoZGF0ZSlbZGF0YVR5cGVdO1xuICAgfVxuICAgXG4gICBnZXRTbGVlcERhdGFCeURhdGUoZGF0ZSwgZGF0YVR5cGUpIHtcbiAgICAgcmV0dXJuIHRoaXMuc2xlZXBSZWNvcmQuZmluZERhdGFPYmplY3RCeURhdGUoZGF0ZSlbZGF0YVR5cGVdO1xuICAgfVxuICAgXG4gICBjYWxjdWxhdGVEYWlseUNhbG9yaWVzKGRhdGUpIHtcbiAgICAgbGV0IHRvdGFsTWludXRlcyA9IHRoaXMuYWN0aXZpdHlSZWNvcmQuZ2V0VG90YWxCeURhdGVBbmRLZXkoXG4gICAgICAgZGF0ZSxcbiAgICAgICBcIm1pbnV0ZXNBY3RpdmVcIlxuICAgICApO1xuICAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbE1pbnV0ZXMgKiA3LjYpO1xuICAgfVxuXG4gICBjYWxjdWxhdGVBdmVyYWdlTWludXRlc0FjdGl2ZVRoaXNXZWVrKGRhdGUpIHtcbiAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlSZWNvcmQuZ2V0QXZlcmFnZURhdGFCeVdlZWtBbmRLZXkoXG4gICAgICAgZGF0ZSxcbiAgICAgICBcIm1pbnV0ZXNBY3RpdmVcIixcbiAgICAgICAwXG4gICAgICk7XG4gICB9XG5cbiAgIGNhbGN1bGF0ZUF2ZXJhZ2VTdGVwc1RoaXNXZWVrKGRhdGUpIHtcbiAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlSZWNvcmQuZ2V0QXZlcmFnZURhdGFCeVdlZWtBbmRLZXkoZGF0ZSwgXCJudW1TdGVwc1wiKTtcbiAgIH1cblxuICAgY2FsY3VsYXRlQXZlcmFnZUZsaWdodHNUaGlzV2VlayhkYXRlKSB7XG4gICAgIHJldHVybiB0aGlzLmFjdGl2aXR5UmVjb3JkLmdldEF2ZXJhZ2VEYXRhQnlXZWVrQW5kS2V5KFxuICAgICAgIGRhdGUsXG4gICAgICAgXCJmbGlnaHRzT2ZTdGFpcnNcIlxuICAgICApO1xuICAgfVxuXG4gICBjYWxjdWxhdGVUb3RhbFN0ZXBzVGhpc1dlZWsoZGF0ZSkge1xuICAgICByZXR1cm4gdGhpcy50b3RhbFN0ZXBzVGhpc1dlZWs7XG4gICB9XG5cbiAgIGNhbGN1bGF0ZUF2ZXJhZ2VRdWFsaXR5VGhpc1dlZWsoZGF0ZSkge1xuICAgICByZXR1cm4gdGhpcy5zbGVlcFJlY29yZC5nZXRBdmVyYWdlRGF0YUJ5V2Vla0FuZEtleShcbiAgICAgICBkYXRlLFxuICAgICAgIFwic2xlZXBRdWFsaXR5XCIsXG4gICAgICAgMVxuICAgICApO1xuICAgfVxuXG4gIGNhbGN1bGF0ZUF2ZXJhZ2VIb3Vyc1RoaXNXZWVrKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNsZWVwUmVjb3JkLmdldEF2ZXJhZ2VEYXRhQnlXZWVrQW5kS2V5KGRhdGUsICdob3Vyc1NsZXB0JywgMSlcbiAgfVxuXG4gIGZpbmRGcmllbmRzTmFtZXMoZnJpZW5kcykge1xuICAgICB0aGlzLmZyaWVuZE9iamVjdHMuZm9yRWFjaCgoZnJpZW5kKSA9PiB7XG4gICAgICAgdGhpcy5mcmllbmRzTmFtZXMucHVzaChmcmllbmQuZ2V0Rmlyc3ROYW1lKCkpO1xuICAgICB9KTtcbiAgIH1cbiAgIFxuICAgZmluZEZyaWVuZHNUb3RhbFN0ZXBzRm9yV2VlayhkYXRlKSB7XG4gICAgIHJldHVybiAodGhpcy5mcmllbmRzQWN0aXZpdHlSZWNvcmRzID0gdGhpcy5mcmllbmRPYmplY3RzLm1hcChcbiAgICAgICAoZnJpZW5kT2JqZWN0KSA9PiB7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICBpZDogZnJpZW5kT2JqZWN0LmlkLFxuICAgICAgICAgICBmaXJzdE5hbWU6IGZyaWVuZE9iamVjdC5nZXRGaXJzdE5hbWUoKSxcbiAgICAgICAgICAgdG90YWxXZWVrbHlTdGVwczogZnJpZW5kT2JqZWN0LmFjdGl2aXR5UmVjb3JkLmdldFN0ZXBzVGhpc1dlZWsoZGF0ZSksXG4gICAgICAgICB9O1xuICAgICAgIH1cbiAgICAgKSk7XG4gICB9XG5cbiAgIGZpbmRUcmVuZGluZ1N0YWlyc0RheXMoKSB7XG4gICAgIGxldCBwb3NpdGl2ZURheXMgPSBbXTtcbiAgICAgdGhpcy5hY3Rpdml0eVJlY29yZC5kYXRhT2JqZWN0QXJyYXkuZm9yRWFjaChcbiAgICAgICAoYWN0aXZpdHlPYmplY3QsIGksIHJlY29yZCkgPT4ge1xuICAgICAgICAgaWYgKFxuICAgICAgICAgICByZWNvcmRbaSArIDFdICYmXG4gICAgICAgICAgIHJlY29yZFtpXS5mbGlnaHRzT2ZTdGFpcnMgPiByZWNvcmRbaSArIDFdLmZsaWdodHNPZlN0YWlyc1xuICAgICAgICAgKSB7XG4gICAgICAgICAgIHBvc2l0aXZlRGF5cy51bnNoaWZ0KHJlY29yZFtpXS5kYXRlKTtcbiAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpdmVEYXlzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgdGhpcy50cmVuZGluZ1N0YWlyc0RheXMucHVzaChcbiAgICAgICAgICAgICBgWW91ciBtb3N0IHJlY2VudCBwb3NpdGl2ZSBjbGltYmluZyBzdHJlYWsgd2FzICR7XG4gICAgICAgICAgICAgICBwb3NpdGl2ZURheXNbMF1cbiAgICAgICAgICAgICB9IC0gJHtwb3NpdGl2ZURheXNbcG9zaXRpdmVEYXlzLmxlbmd0aCAtIDFdfSFgXG4gICAgICAgICAgICk7XG4gICAgICAgICAgIHBvc2l0aXZlRGF5cyA9IFtdO1xuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgKTtcbiAgIH1cblxuICAgZmluZFRyZW5kaW5nU3RlcERheXMoKSB7XG4gICAgIGxldCBwb3NpdGl2ZURheXMgPSBbXTtcbiAgICAgdGhpcy5hY3Rpdml0eVJlY29yZC5kYXRhT2JqZWN0QXJyYXkuZm9yRWFjaChcbiAgICAgICAoYWN0aXZpdHlPYmplY3QsIGksIHJlY29yZCkgPT4ge1xuICAgICAgICAgaWYgKHJlY29yZFtpICsgMV0gJiYgcmVjb3JkW2ldLm51bVN0ZXBzID4gcmVjb3JkW2kgKyAxXS5udW1TdGVwcykge1xuICAgICAgICAgICBwb3NpdGl2ZURheXMudW5zaGlmdChyZWNvcmRbaV0uZGF0ZSk7XG4gICAgICAgICB9IGVsc2UgaWYgKHBvc2l0aXZlRGF5cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgIHRoaXMudHJlbmRpbmdTdGVwRGF5cy5wdXNoKFxuICAgICAgICAgICAgIGBZb3VyIG1vc3QgcmVjZW50IHBvc2l0aXZlIHN0ZXAgc3RyZWFrIHdhcyAke3Bvc2l0aXZlRGF5c1swXX0gLSAke1xuICAgICAgICAgICAgICAgcG9zaXRpdmVEYXlzW3Bvc2l0aXZlRGF5cy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgIH0hYFxuICAgICAgICAgICApO1xuICAgICAgICAgICBwb3NpdGl2ZURheXMgPSBbXTtcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgICk7XG4gICB9XG4gfVxuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSwgYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEsIGRhdGUpIHsgLy8gb3RoZXIgZGF0YSB0eXBlcyBwYXNzZWQgaW4gaGVyZVxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy51c2VyT2JqZWN0QXJyYXkgPSB0aGlzLnBhcnNlRGF0YSh1c2VyRGF0YSwgYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEpXG4gICAgdGhpcy5nbG9iYWxTdGVwR29hbCA9IHRoaXMuZ2V0R2xvYmFsU3RlcEdvYWwoKTtcbiAgICB0aGlzLmdsb2JhbFNsZWVwUXVhbGl0eSA9IHRoaXMuZ2V0R2xvYmFsU2xlZXBRdWFsaXR5KCk7XG4gICAgdGhpcy5yYW5kb21Vc2VyID0gdGhpcy5nZXRSYW5kb21Vc2VyKClcbiAgfVxuXG4gIGdldFVzZXJPYmplY3QoaWQpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyT2JqZWN0QXJyYXkuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGlkKVxuICB9XG5cbiAgcGFyc2VEYXRhKHVzZXJzLCBhY3Rpdml0eURhdGEsIGh5ZHJhdGlvbkRhdGEsIHNsZWVwRGF0YSkge1xuICAgIGxldCB1c2VyQmFzZSA9IHVzZXJzLnJlZHVjZSgocGFyc2VkVXNlcnMsIHVzZXJPYmplY3QpID0+IHtcbiAgICAgIHBhcnNlZFVzZXJzLnB1c2gobmV3IFVzZXIodXNlck9iamVjdCwgdXNlcnMsIGFjdGl2aXR5RGF0YSwgaHlkcmF0aW9uRGF0YSwgc2xlZXBEYXRhLCB0aGlzLmRhdGUpKVxuICAgICAgcmV0dXJuIHBhcnNlZFVzZXJzIC8vIHdhcyByZXR1cm5pbmcgYW5kIGVuZGluZyBmdW5jdGlvbiwgbmVlZCB0byBnZXQgdXNlcnMsIHVwZGF0ZSwgaGFuZCBvZmZcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gdXNlckJhc2UucmVkdWNlKCh1cGRhdGVkVXNlckJhc2UsIHVzZXIpID0+IHtcbiAgICAgIHVzZXIucG9wdWxhdGVVc2VyRGF0YSh1c2VycywgYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhLCBzbGVlcERhdGEsIHRoaXMuZGF0ZSlcbiAgICAgIHVwZGF0ZWRVc2VyQmFzZS5wdXNoKHVzZXIpXG4gICAgICByZXR1cm4gdXBkYXRlZFVzZXJCYXNlXG4gICAgfSwgW10pXG4gIH1cblxuICBnZXRVc2VyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnMuZmluZChmdW5jdGlvbih1c2VyKSB7XG4gICAgICByZXR1cm4gdXNlci5pZCA9PT0gaWQ7XG4gICAgfSlcbiAgfVxuXG4gIGdldFJhbmRvbVVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlck9iamVjdEFycmF5W01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMudXNlck9iamVjdEFycmF5Lmxlbmd0aCldO1xuICB9XG5cbiAgZmluZEJlc3RTbGVlcGVycyhkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlck9iamVjdEFycmF5LmZpbHRlcih1c2VyID0+IHtcbiAgICAgIHJldHVybiB1c2VyLmNhbGN1bGF0ZUF2ZXJhZ2VRdWFsaXR5VGhpc1dlZWsoZGF0ZSkgPiAzO1xuICAgIH0pXG4gIH1cblxuICBnZXRMb25nZXN0U2xlZXBlcnMoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnVzZXJPYmplY3RBcnJheS5tYXAodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5zbGVlcFJlY29yZC5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKTtcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYi5ob3Vyc1NsZXB0IC0gYS5ob3Vyc1NsZXB0O1xuICAgIH0pWzBdLnVzZXJJRDtcbiAgfVxuXG4gIGdldFdvcnN0U2xlZXBlcnMoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnVzZXJPYmplY3RBcnJheS5tYXAodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5zbGVlcFJlY29yZC5maW5kRGF0YU9iamVjdEJ5RGF0ZShkYXRlKTtcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5ob3Vyc1NsZXB0IC0gYi5ob3Vyc1NsZXB0O1xuICAgIH0pWzBdLnVzZXJJRDtcbiAgfVxuXG4gIGdldEdsb2JhbFN0ZXBHb2FsKCkgeyAgLy9yZW5hbWUgZnJvbSBjYWxjdWxhdGVBdmVyYWdlU3RlcEdvYWxcbiAgICBsZXQgZ2xvYmFsU3RlcEdvYWxUb3RhbCA9IHRoaXMudXNlck9iamVjdEFycmF5LnJlZHVjZSgoc3RlcEdvYWxUb3RhbCwgdXNlcikgPT4ge1xuICAgICAgc3RlcEdvYWxUb3RhbCArPSB1c2VyLmRhaWx5U3RlcEdvYWw7XG4gICAgICByZXR1cm4gc3RlcEdvYWxUb3RhbDtcbiAgICB9LCAwKVxuICAgIHJldHVybiBOdW1iZXIoKGdsb2JhbFN0ZXBHb2FsVG90YWwgLyB0aGlzLnVzZXJPYmplY3RBcnJheS5sZW5ndGgpLnRvRml4ZWQoMCkpXG4gIH1cblxuICBnZXRHbG9iYWxTbGVlcFF1YWxpdHkoKSB7XG4gICAgbGV0IHNsZWVwUXVhbGl0eVRvdGFsID0gdGhpcy51c2VyT2JqZWN0QXJyYXkucmVkdWNlKChzbGVlcFF1YWxpdHlUb3RhbCwgdXNlcikgPT4ge1xuICAgICAgc2xlZXBRdWFsaXR5VG90YWwgKz0gdXNlci5zbGVlcFF1YWxpdHlBdmVyYWdlO1xuICAgICAgcmV0dXJuIHNsZWVwUXVhbGl0eVRvdGFsO1xuICAgIH0sIDApXG4gICAgcmV0dXJuIE51bWJlcigoc2xlZXBRdWFsaXR5VG90YWwgLyB0aGlzLnVzZXJPYmplY3RBcnJheS5sZW5ndGgpLnRvRml4ZWQoMSkpXG4gIH1cblxuICBnZXRHbG9iYWxTdGVwQXZnQnlEYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyT2JqZWN0QXJyYXkucmVkdWNlKCh0b3RhbFN0ZXBzLCB1c2VyKSA9PiB7XG4gICAgICB0b3RhbFN0ZXBzICs9IHVzZXIuZ2V0QWN0aXZpdHlEYXRhQnlEYXRlKGRhdGUsICdudW1TdGVwcycpXG4gICAgICByZXR1cm4gdG90YWxTdGVwc1xuICAgIH0sIDApIC8gdGhpcy51c2VyT2JqZWN0QXJyYXkubGVuZ3RoXG4gIH1cblxuICBnZXRHbG9iYWxTdGFpckF2Z0J5RGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlck9iamVjdEFycmF5LnJlZHVjZSgodG90YWxTdGVwcywgdXNlcikgPT4ge1xuICAgICAgdG90YWxTdGVwcyArPSB1c2VyLmdldEFjdGl2aXR5RGF0YUJ5RGF0ZShkYXRlLCAnZmxpZ2h0c09mU3RhaXJzJylcbiAgICAgIHJldHVybiB0b3RhbFN0ZXBzXG4gICAgfSwgMCkgLyB0aGlzLnVzZXJPYmplY3RBcnJheS5sZW5ndGhcbiAgfVxuXG4gIGdldEdsb2JhbEFjdGl2ZUF2Z0J5RGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlck9iamVjdEFycmF5LnJlZHVjZSgodG90YWxTdGVwcywgdXNlcikgPT4ge1xuICAgICAgdG90YWxTdGVwcyArPSB1c2VyLmdldEFjdGl2aXR5RGF0YUJ5RGF0ZShkYXRlLCAnbWludXRlc0FjdGl2ZScpXG4gICAgICByZXR1cm4gdG90YWxTdGVwc1xuICAgIH0sIDApIC8gdGhpcy51c2VyT2JqZWN0QXJyYXkubGVuZ3RoXG4gIH1cbiAgXG4gIGdldEdsb2JhbFdhdGVyQXZnQnlEYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gTnVtYmVyKCh0aGlzLnVzZXJPYmplY3RBcnJheS5yZWR1Y2UoKHRvdGFsSDJPLCB1c2VyKSA9PiB7XG4gICAgICB0b3RhbEgyTyArPSB1c2VyLnN1bURhaWx5T3VuY2VzKGRhdGUpXG4gICAgICByZXR1cm4gdG90YWxIMk9cbiAgICB9LCAwKSAvIHRoaXMudXNlck9iamVjdEFycmF5Lmxlbmd0aCkudG9GaXhlZCgwKSlcbiAgfVxufVxuIiwiaW1wb3J0IERhdGEgZnJvbSAnLi9EYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZpdHkgZXh0ZW5kcyBEYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YU9iamVjdCkge1xuICAgIHN1cGVyKGRhdGFPYmplY3QpO1xuICAgIHRoaXMubnVtU3RlcHMgPSBkYXRhT2JqZWN0Lm51bVN0ZXBzO1xuICAgIHRoaXMubWludXRlc0FjdGl2ZSA9IGRhdGFPYmplY3QubWludXRlc0FjdGl2ZTtcbiAgICB0aGlzLmZsaWdodHNPZlN0YWlycyA9IGRhdGFPYmplY3QuZmxpZ2h0c09mU3RhaXJzO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YU9iamVjdCkge1xuICAgIHRoaXMudXNlcklEID0gZGF0YU9iamVjdC51c2VySUQ7XG4gICAgdGhpcy5kYXRlID0gZGF0YU9iamVjdC5kYXRlO1xuICB9XG59XG4iLCJpbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIeWRyYXRpb24gZXh0ZW5kcyBEYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YU9iamVjdCkge1xuICAgIHN1cGVyKGRhdGFPYmplY3QpO1xuICAgIHRoaXMubnVtT3VuY2VzID0gZGF0YU9iamVjdC5udW1PdW5jZXM7XG4gIH1cbn1cbiIsImltcG9ydCBEYXRhIGZyb20gJy4vRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsZWVwIGV4dGVuZHMgRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGRhdGFPYmplY3QpIHtcbiAgICBzdXBlcihkYXRhT2JqZWN0KTtcbiAgICB0aGlzLmhvdXJzU2xlcHQgPSBkYXRhT2JqZWN0LmhvdXJzU2xlcHQ7XG4gICAgdGhpcy5zbGVlcFF1YWxpdHkgPSBkYXRhT2JqZWN0LnNsZWVwUXVhbGl0eTtcbiAgfVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9jYWxlbmRhci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2ZyaWVuZHMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9nb2JhY2suc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9pbmZvLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvbmV3aW5wdXQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9wcm9maWxlLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvdHJlbmRpbmcuc3ZnXCI7IiwiaW1wb3J0IFwiLi9jc3MvYmFzZS5zY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCB7XG4gIGRhaWx5T3osXG4gIGRyb3Bkb3duRW1haWwsXG4gIGRyb3Bkb3duRnJpZW5kc1N0ZXBzQ29udGFpbmVyLFxuICBkcm9wZG93bkdvYWwsXG4gIGRyb3Bkb3duTmFtZSxcbiAgaGVhZGVyTmFtZSxcbiAgaHlkcmF0aW9uQ2FsZW5kYXJDYXJkLFxuICBoeWRyYXRpb25BbGxVc2Vyc1RvZGF5LFxuICBoeWRyYXRpb25GcmllbmRzQ2FyZCxcbiAgaHlkcmF0aW9uSW5mb0NhcmQsXG4gIGh5ZHJhdGlvbkluZm9HbGFzc2VzVG9kYXksXG4gIGh5ZHJhdGlvbk1haW5DYXJkLFxuICBoeWRyYXRpb25Vc2VyT3VuY2VzVG9kYXksXG4gIGh5ZHJhdGlvbk5ld0lucHV0Q2FyZCxcbiAgaHlkcmF0aW9uU3VibWl0YnV0dG9uLFxuICBoeWRyYXRpb25JbnB1dERhdGUsXG4gIG51bU91bmNlc0lucHV0LFxuICBtYWluUGFnZSxcbiAgcHJvZmlsZUJ1dHRvbixcbiAgc2xlZXBDYWxlbmRhckNhcmQsXG4gIHNsZWVwQ2FsZW5kYXJIb3Vyc0F2ZXJhZ2VXZWVrbHksXG4gIHNsZWVwQ2FsZW5kYXJRdWFsaXR5QXZlcmFnZVdlZWtseSxcbiAgc2xlZXBGcmllbmRMb25nZXN0U2xlZXBlcixcbiAgc2xlZXBGcmllbmRzQ2FyZCxcbiAgc2xlZXBGcmllbmRXb3JzdFNsZWVwZXIsXG4gIHNsZWVwSW5mb0NhcmQsXG4gIHNsZWVwSW5mb0hvdXJzQXZlcmFnZUFsbHRpbWUsXG4gIHNsZWVwSW5mb1F1YWxpdHlBdmVyYWdlQWxsdGltZSxcbiAgc2xlZXBJbmZvUXVhbGl0eVRvZGF5LFxuICBzbGVlcE1haW5DYXJkLFxuICBzbGVlcFVzZXJIb3Vyc1RvZGF5LFxuICBzbGVlcE5ld0lucHV0Q2FyZCxcbiAgc2xlZXBJbnB1dERhdGUsXG4gIHNsZWVwSW5wdXRIb3VycyxcbiAgc2xlZXBJbnB1dFF1YWxpdHksXG4gIGlucHV0RmVlZGJhY2ssXG4gIHNsZWVwU3VibWl0QnV0dG9uLFxuICBzdGFpcnNDYWxlbmRhckNhcmQsXG4gIHN0YWlyc0NhbGVuZGFyRmxpZ2h0c0F2ZXJhZ2VXZWVrbHksXG4gIHN0YWlyc0NhbGVuZGFyU3RhaXJzQXZlcmFnZVdlZWtseSxcbiAgc3RlcHNNYWluQ2FyZCxcbiAgc3RlcHNJbmZvQ2FyZCxcbiAgc3RlcHNGcmllbmRzQ2FyZCxcbiAgc3RlcHNUcmVuZGluZ0NhcmQsXG4gIHN0ZXBzQ2FsZW5kYXJDYXJkLFxuICBzdGVwc05ld0lucHV0Q2FyZCxcbiAgc3RlcHNTdWJtaXRCdXR0b24sXG4gIHN0YWlyc0ZyaWVuZEZsaWdodHNBdmVyYWdlVG9kYXksXG4gIHN0YWlyc0ZyaWVuZHNDYXJkLFxuICBzdGFpcnNJbmZvQ2FyZCxcbiAgc3RhaXJzSW5mb0ZsaWdodHNUb2RheSxcbiAgc3RhaXJzTWFpbkNhcmQsXG4gIHN0YWlyc1RyZW5kaW5nQnV0dG9uLFxuICBzdGFpcnNUcmVuZGluZ0NhcmQsXG4gIHN0YWlyc1VzZXJTdGFpcnNUb2RheSxcbiAgc3RhaXJzTmV3SW5wdXRDYXJkLFxuICBzdGVwc0NhbGVuZGFyVG90YWxBY3RpdmVNaW51dGVzV2Vla2x5LFxuICBzdGVwc0NhbGVuZGFyVG90YWxTdGVwc1dlZWtseSxcbiAgc3RlcHNGcmllbmRBdmVyYWdlU3RlcEdvYWwsXG4gIHN0ZXBzSW5mb0FjdGl2ZU1pbnV0ZXNUb2RheSxcbiAgc3RlcHNJbmZvTWlsZXNXYWxrZWRUb2RheSxcbiAgc3RlcHNGcmllbmRBY3RpdmVNaW51dGVzQXZlcmFnZVRvZGF5LFxuICBzdGVwc0ZyaWVuZFN0ZXBzQXZlcmFnZVRvZGF5LFxuICBzdGVwc1RyZW5kaW5nQnV0dG9uLFxuICBzdGVwc1VzZXJTdGVwc1RvZGF5LFxuICBzdGVwc0lucHV0RGF0ZSxcbiAgc3RlcHNJbnB1dFN0ZXBzLFxuICBzdGVwc0lucHV0QWN0aXZlTWlucyxcbiAgc3RlcHNJbnB1dE1pbGVzLFxuICB0cmVuZGluZ1N0ZXBzUGhyYXNlQ29udGFpbmVyLFxuICB0cmVuZGluZ1N0YWlyc1BocmFzZUNvbnRhaW5lcixcbiAgdXNlckluZm9Ecm9wZG93bixcbn0gZnJvbSBcIi4vRE9NLWxvYWRlclwiO1xuXG5pbXBvcnQgVXNlclJlcG9zaXRvcnkgZnJvbSBcIi4uL3NyYy9jbGFzc2VzL1VzZXJSZXBvc2l0b3J5XCI7XG5cbi8vICA8LS0tLSAgICAgICAgbm9uLURPTSB2YXJzICAgICAgICAtLS0tPiAgIC8vXG5sZXQgdXNlckRhdGE7XG5sZXQgYWN0aXZpdHlEYXRhO1xubGV0IGh5ZHJhdGlvbkRhdGE7XG5sZXQgc2xlZXBEYXRhO1xubGV0IHVzZXI7XG5sZXQgdXNlclJlcG9zaXRvcnk7XG5sZXQgc29ydGVkSHlkcmF0aW9uRGF0YUJ5RGF0ZTtcblxuY29uc3QgZGF0ZSA9IFwiMjAyMC8wMS8yMlwiO1xuXG4vLyAgICAgICAgKioqKiAgICAgICAgRVZFTlQgTElTVEVORVJTICAgICAgICoqKipcblxuc3RhaXJzVHJlbmRpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgdXNlci5maW5kVHJlbmRpbmdTdGFpcnNEYXlzKCk7XG4gIHRyZW5kaW5nU3RhaXJzUGhyYXNlQ29udGFpbmVyLmlubmVySFRNTCA9IGA8cCB0YWJpbmRleD1cIjBcIiBjbGFzcz0ndHJlbmQtbGluZSc+JHt1c2VyLnRyZW5kaW5nU3RhaXJzRGF5c1swXX08L3A+YDtcbn0pO1xuXG5zdGVwc1RyZW5kaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHVzZXIuZmluZFRyZW5kaW5nU3RlcERheXMoKTtcbiAgdHJlbmRpbmdTdGVwc1BocmFzZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgdGFiaW5kZXg9XCIwXCIgY2xhc3M9J3RyZW5kLWxpbmUnPiR7dXNlci50cmVuZGluZ1N0ZXBEYXlzWzBdfTwvcD5gO1xufSk7XG5cbnNsZWVwU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgZ2V0U2xlZXBJbnB1dChcbiAgICBzbGVlcElucHV0RGF0ZS52YWx1ZSxcbiAgICBzbGVlcElucHV0SG91cnMudmFsdWUsXG4gICAgc2xlZXBJbnB1dFF1YWxpdHkudmFsdWVcbiAgKTtcbn0pO1xuXG5zdGVwc1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBnZXRBY3Rpdml0eUlucHV0KFxuICAgIHN0ZXBzSW5wdXREYXRlLnZhbHVlLFxuICAgIHN0ZXBzSW5wdXRTdGVwcy52YWx1ZSxcbiAgICBzdGVwc0lucHV0QWN0aXZlTWlucy52YWx1ZSxcbiAgICBzdGVwc0lucHV0TWlsZXMudmFsdWVcbiAgKTtcbn0pO1xuXG5oeWRyYXRpb25TdWJtaXRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZ2V0SHlkcmF0aW9uSW5wdXQoXG4gICAgaHlkcmF0aW9uSW5wdXREYXRlLnZhbHVlLFxuICAgIG51bU91bmNlc0lucHV0LnZhbHVlXG4gICk7XG59KTtcblxubWFpblBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dJbmZvKTtcblxucHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Ryb3Bkb3duKTtcblxuc3RhaXJzVHJlbmRpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVRyZW5kaW5nU3RhaXJzRGF5cyk7XG5cbnN0ZXBzVHJlbmRpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZVRyZW5kaW5nU3RlcERheXMpO1xuXG4vLyAgICAgICAgKioqKiAgICAgICAgVVNFUiBEQVRBIElOUFVUIEZVTkNUSU9OUyAgICAgICAqKioqXG5cbmNvbnN0IHNob3dJbnB1dEZlZWRiYWNrID0gKG1lc3NhZ2UpID0+IHtcbiAgaW5wdXRGZWVkYmFjay5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBpbnB1dEZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtpbnB1dEZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKX0sIDUwMDApO1xufTtcblxuY29uc3QgZ2V0U2xlZXBJbnB1dCA9IChkYXRlLCBob3VycywgcXVhbGl0eSkgPT4ge1xuICBsZXQgaWQgPSBOdW1iZXIodXNlci5pZCk7XG4gIGRhdGUgPSBkYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKTtcbiAgaG91cnMgPSBOdW1iZXIoaG91cnMpO1xuICBxdWFsaXR5ID0gTnVtYmVyKHF1YWxpdHkpO1xuICBzdWJtaXRTbGVlcERhdGEoaWQsIGRhdGUsIGhvdXJzLCBxdWFsaXR5KTtcbiAgdXNlci51cGRhdGVTbGVlcChkYXRlLCBob3VycywgcXVhbGl0eSk7XG59O1xuXG5jb25zdCBnZXRBY3Rpdml0eUlucHV0ID0gKGRhdGUsIG51bVN0ZXBzLCBtaW51dGVzQWN0aXZlLCBmbGlnaHRzT2ZTdGFpcnMpID0+IHtcbiAgbGV0IGlkID0gTnVtYmVyKHVzZXIuaWQpO1xuICBkYXRlID0gZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIi9cIik7XG4gIG51bVN0ZXBzID0gTnVtYmVyKG51bVN0ZXBzKTtcbiAgbWludXRlc0FjdGl2ZSA9IE51bWJlcihtaW51dGVzQWN0aXZlKTtcbiAgZmxpZ2h0c09mU3RhaXJzID0gTnVtYmVyKGZsaWdodHNPZlN0YWlycyk7XG4gIHN1Ym1pdEFjdGl2aXR5RGF0YShpZCwgZGF0ZSwgbnVtU3RlcHMsIG1pbnV0ZXNBY3RpdmUsIGZsaWdodHNPZlN0YWlycyk7XG4gIHVzZXIudXBkYXRlQWN0aXZpdGllcyhkYXRlLCBudW1TdGVwcywgbWludXRlc0FjdGl2ZSwgZmxpZ2h0c09mU3RhaXJzKTtcbn07XG5cbmNvbnN0IGdldEh5ZHJhdGlvbklucHV0ID0gKGRhdGUsIG51bU91bmNlcykgPT4ge1xuICBsZXQgaWQgPSBOdW1iZXIodXNlci5pZCk7XG4gIGRhdGUgPSBkYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKTtcbiAgbnVtT3VuY2VzID0gTnVtYmVyKG51bU91bmNlcyk7XG4gIHN1Ym1pdEh5ZHJhdGlvbkRhdGEoaWQsIGRhdGUsIG51bU91bmNlcyk7XG4gIHVzZXIudXBkYXRlSHlkcmF0aW9uKGRhdGUsIG51bU91bmNlcylcbn07XG5cbmNvbnN0IHN1Ym1pdFNsZWVwRGF0YSA9IChpZCwgZGF0ZSwgaG91cnMsIHF1YWxpdHkpID0+IHtcbiAgZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvc2xlZXAvc2xlZXBEYXRhXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdXNlcklEOiBpZCxcbiAgICAgIGRhdGU6IGRhdGUsXG4gICAgICBob3Vyc1NsZXB0OiBob3VycyxcbiAgICAgIHNsZWVwUXVhbGl0eTogcXVhbGl0eSxcbiAgICB9KSxcbiAgfSlcbiAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIHNob3dJbnB1dEZlZWRiYWNrKFwiVXBkYXRlIHN1Y2Nlc3NmdWwuICBHcmVhdCBqb2IhXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNob3dJbnB1dEZlZWRiYWNrKFwiVGhlcmUgd2FzIGFuIGVycm9yLiAgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSk7XG59O1xuXG5jb25zdCBzdWJtaXRBY3Rpdml0eURhdGEgPSAoaWQsIGRhdGUsIG51bVN0ZXBzLCBtaW51dGVzQWN0aXZlLCBmbGlnaHRzT2ZTdGFpcnMpID0+IHtcbiAgZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvYWN0aXZpdHkvYWN0aXZpdHlEYXRhXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdXNlcklEOiBpZCxcbiAgICAgIGRhdGU6IGRhdGUsXG4gICAgICBudW1TdGVwczogbnVtU3RlcHMsXG4gICAgICBtaW51dGVzQWN0aXZlOiBtaW51dGVzQWN0aXZlLFxuICAgICAgZmxpZ2h0c09mU3RhaXJzOiBmbGlnaHRzT2ZTdGFpcnMsXG4gICAgfSksXG4gIH0pXG4gICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHNob3dJbnB1dEZlZWRiYWNrKFwiVXBkYXRlIHN1Y2Nlc3NmdWwuICBHcmVhdCBqb2IhXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNob3dJbnB1dEZlZWRiYWNrKFwiVGhlcmUgd2FzIGFuIGVycm9yLiAgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSk7XG59O1xuXG5jb25zdCBzdWJtaXRIeWRyYXRpb25EYXRhID0gKGlkLCBkYXRlLCBudW1PdW5jZXMpID0+IHtcbiAgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvaHlkcmF0aW9uL2h5ZHJhdGlvbkRhdGFcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJJRDogaWQsXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIG51bU91bmNlczogbnVtT3VuY2VzLFxuICAgICAgfSksXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHNob3dJbnB1dEZlZWRiYWNrKFwiVXBkYXRlIHN1Y2Nlc3NmdWwuICBHcmVhdCBqb2IhXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIHNob3dJbnB1dEZlZWRiYWNrKFwiVGhlcmUgd2FzIGFuIGVycm9yLiAgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSk7XG59O1xuXG4vLyAgICAgICAgKioqKiAgICAgICAgRkVUQ0ggREFUQSBGVU5DVElPTlMgLyBMT0FEIERBVEEgRlVOQ1RJT05TICAgICAgICoqKipcblxuY29uc3QgdXNlclByb21pc2UgPSBmZXRjaChcblwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL2ZpdGxpdC8xOTA4L3VzZXJzL3VzZXJEYXRhXCJcbikudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xuXG5jb25zdCBhY3Rpdml0eVByb21pc2UgPSBmZXRjaChcbiAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvYWN0aXZpdHkvYWN0aXZpdHlEYXRhXCJcbikudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xuXG5jb25zdCBoeWRyYXRpb25Qcm9taXNlID0gZmV0Y2goXG4gIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL2ZpdGxpdC8xOTA4L2h5ZHJhdGlvbi9oeWRyYXRpb25EYXRhXCJcbikudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xuXG5jb25zdCBzbGVlcFByb21pc2UgPSBmZXRjaChcbiAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZml0bGl0LzE5MDgvc2xlZXAvc2xlZXBEYXRhXCJcbikudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xuXG5Qcm9taXNlLmFsbChbdXNlclByb21pc2UsIGFjdGl2aXR5UHJvbWlzZSwgaHlkcmF0aW9uUHJvbWlzZSwgc2xlZXBQcm9taXNlXSlcbiAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICBhY3Rpdml0eURhdGEgPSBkYXRhWzFdLmFjdGl2aXR5RGF0YTtcbiAgICBoeWRyYXRpb25EYXRhID0gZGF0YVsyXS5oeWRyYXRpb25EYXRhO1xuICAgIHNsZWVwRGF0YSA9IGRhdGFbM10uc2xlZXBEYXRhO1xuICAgIHVzZXJEYXRhID0gZGF0YVswXS51c2VyRGF0YTtcbiAgICB1c2VyUmVwb3NpdG9yeSA9IG5ldyBVc2VyUmVwb3NpdG9yeShcbiAgICAgIHVzZXJEYXRhLFxuICAgICAgYWN0aXZpdHlEYXRhLFxuICAgICAgaHlkcmF0aW9uRGF0YSxcbiAgICAgIHNsZWVwRGF0YSxcbiAgICAgIGRhdGVcbiAgICApO1xuICB9KVxuICAudGhlbigoKSA9PiB7XG4gICAgbG9hZEFwcCgpO1xuICB9KTtcblxuY29uc3QgbG9hZEFwcCA9ICgpID0+IHtcbiAgdXNlciA9IHVzZXJSZXBvc2l0b3J5LmdldFJhbmRvbVVzZXIoKTtcbiAgdXNlci5wb3B1bGF0ZVVzZXJEYXRhKCk7XG4gIHVzZXIuZmluZEZyaWVuZHNOYW1lcyh1c2VyUmVwb3NpdG9yeS5kYXRhT2JqZWN0QXJyYXkpOyAvL1RPRE8gZ29lcyBpbnNpZGUgdXNlciBhcyBtZXRob2RcbiAgdXBkYXRlVGV4dCgpO1xufTtcblxuZnVuY3Rpb24gbG9hZEZyaWVuZHNBY3Rpdml0eVJlY29yZHMoKSB7XG4gIHVzZXIuZmluZEZyaWVuZHNUb3RhbFN0ZXBzRm9yV2VlayhkYXRlKS5zb3J0KChhLGIpPT5iLnRvdGFsV2Vla2x5U3RlcHMtYS50b3RhbFdlZWtseVN0ZXBzKTtcbiAgdXNlci5mcmllbmRzQWN0aXZpdHlSZWNvcmRzLmZvckVhY2goZnJpZW5kID0+IHtcbiAgICBkcm9wZG93bkZyaWVuZHNTdGVwc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgIDxwIGNsYXNzPSdkcm9wZG93bi1wIGZyaWVuZHMtc3RlcHMnPiR7ZnJpZW5kLmZpcnN0TmFtZX0gfCAgJHtmcmllbmQudG90YWxXZWVrbHlTdGVwc308L3A+XG4gICAgYDtcbiAgfSk7XG4gIGxldCBmcmllbmRzU3RlcHNQYXJhZ3JhcGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mcmllbmRzLXN0ZXBzXCIpO1xuICBmcmllbmRzU3RlcHNQYXJhZ3JhcGhzLmZvckVhY2goKHBhcmFncmFwaCkgPT4ge1xuICAgIGlmIChmcmllbmRzU3RlcHNQYXJhZ3JhcGhzWzBdID09PSBwYXJhZ3JhcGgpIHtcbiAgICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW4tdGV4dFwiKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZnJpZW5kc1N0ZXBzUGFyYWdyYXBoc1tmcmllbmRzU3RlcHNQYXJhZ3JhcGhzLmxlbmd0aCAtIDFdID09PSBwYXJhZ3JhcGhcbiAgICApIHtcbiAgICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwicmVkLXRleHRcIik7XG4gICAgfVxuICAgIGlmIChwYXJhZ3JhcGguaW5uZXJUZXh0LmluY2x1ZGVzKFwiWU9VXCIpKSB7XG4gICAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInllbGxvdy10ZXh0XCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vICAgICAgICAqKioqICAgICAgICBVSSBESVNQTEFZIEZVTkNUSU9OUyAgICAgICAqKioqXG5cbmNvbnN0IHVwZGF0ZVRleHQgPSAoKSA9PiB7XG4gIGRpc3BsYXlVc2VySW5mbygpO1xuICBkaXNwbGF5SHlkcmF0aW9uSW5mbygpO1xuICBkaXNwbGF5U2xlZXBJbmZvKCk7XG4gIGRpc3BsYXlTdGFpcnNJbmZvKCk7XG4gIGRpc3BsYXlTdGVwc0luZm8oKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlVc2VySW5mbyA9ICgpID0+IHtcbiAgZHJvcGRvd25Hb2FsLmlubmVyVGV4dCA9IGBEQUlMWSBTVEVQIEdPQUwgfCAke3VzZXIuZGFpbHlTdGVwR29hbH1gO1xuICBkcm9wZG93bkVtYWlsLmlubmVyVGV4dCA9IGBFTUFJTCB8ICR7dXNlci5lbWFpbH1gO1xuICBkcm9wZG93bk5hbWUuaW5uZXJUZXh0ID0gdXNlci5uYW1lLnRvVXBwZXJDYXNlKCk7XG4gIGhlYWRlck5hbWUuaW5uZXJUZXh0ID0gYCR7dXNlci5nZXRGaXJzdE5hbWUoKX0nUyBgO1xufTtcblxuY29uc3QgZGlzcGxheUh5ZHJhdGlvbkluZm8gPSAoKSA9PiB7XG4gIGxldCBwYXN0V2Vla0h5ZHJhdGlvbiA9IHVzZXIub3VuY2VzUmVjb3JkLmdldFBhc3RXZWVrRGF0YShkYXRlKVxuICBoeWRyYXRpb25Vc2VyT3VuY2VzVG9kYXkuaW5uZXJUZXh0ID0gcGFzdFdlZWtIeWRyYXRpb25bNl0ubnVtT3VuY2VzO1xuICBoeWRyYXRpb25BbGxVc2Vyc1RvZGF5LmlubmVyVGV4dCA9IHVzZXJSZXBvc2l0b3J5LmdldEdsb2JhbFdhdGVyQXZnQnlEYXRlKGRhdGUpO1xuICBoeWRyYXRpb25JbmZvR2xhc3Nlc1RvZGF5LmlubmVyVGV4dCA9IChwYXN0V2Vla0h5ZHJhdGlvbls2XS5udW1PdW5jZXMgLyA4KS50b0ZpeGVkKDEpO1xuICBwYXN0V2Vla0h5ZHJhdGlvbi5mb3JFYWNoKChkYXksIGkpID0+IHtcbiAgICBpZihkYWlseU96W2ldKSB7XG4gICAgICBkYWlseU96W2ldLmlubmVyVGV4dCA9IGRheS5udW1PdW5jZXNcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheVNsZWVwSW5mbyA9ICgpID0+IHtcbiAgc2xlZXBDYWxlbmRhckhvdXJzQXZlcmFnZVdlZWtseS5pbm5lclRleHQgPSB1c2VyLmNhbGN1bGF0ZUF2ZXJhZ2VIb3Vyc1RoaXNXZWVrKGRhdGUpO1xuICBzbGVlcENhbGVuZGFyUXVhbGl0eUF2ZXJhZ2VXZWVrbHkuaW5uZXJUZXh0ID0gdXNlci5jYWxjdWxhdGVBdmVyYWdlUXVhbGl0eVRoaXNXZWVrKGRhdGUpO1xuICBzbGVlcEZyaWVuZExvbmdlc3RTbGVlcGVyLmlubmVyVGV4dCA9IHVzZXJSZXBvc2l0b3J5LnVzZXJPYmplY3RBcnJheS5maW5kKHVzZXIgPT4ge1xuICAgIHJldHVybiB1c2VyLmlkID09PSB1c2VyUmVwb3NpdG9yeS5nZXRMb25nZXN0U2xlZXBlcnMoZGF0ZSlcbiAgfSkuZ2V0Rmlyc3ROYW1lKCk7XG4gIHNsZWVwRnJpZW5kV29yc3RTbGVlcGVyLmlubmVyVGV4dCA9IHVzZXJSZXBvc2l0b3J5LnVzZXJPYmplY3RBcnJheS5maW5kKHVzZXIgPT4ge1xuICAgIHJldHVybiB1c2VyLmlkID09PSB1c2VyUmVwb3NpdG9yeS5nZXRXb3JzdFNsZWVwZXJzKGRhdGUpXG4gIH0pLmdldEZpcnN0TmFtZSgpO1xuICBzbGVlcEluZm9Ib3Vyc0F2ZXJhZ2VBbGx0aW1lLmlubmVyVGV4dCA9IHVzZXIuaG91cnNTbGVwdEF2ZXJhZ2U7XG4gIHN0ZXBzSW5mb01pbGVzV2Fsa2VkVG9kYXkuaW5uZXJUZXh0ID0gdXNlci5hY3Rpdml0eVJlY29yZC5nZXRNaWxlc1dhbGtlZChkYXRlKTtcbiAgc2xlZXBJbmZvUXVhbGl0eUF2ZXJhZ2VBbGx0aW1lLmlubmVyVGV4dCA9IHVzZXIuc2xlZXBRdWFsaXR5QXZlcmFnZTtcbiAgc2xlZXBJbmZvUXVhbGl0eVRvZGF5LmlubmVyVGV4dCA9IHVzZXIuZ2V0U2xlZXBEYXRhQnlEYXRlKGRhdGUsICdzbGVlcFF1YWxpdHknKTtcbiAgc2xlZXBVc2VySG91cnNUb2RheS5pbm5lclRleHQgPSBzbGVlcFVzZXJIb3Vyc1RvZGF5LmlubmVyVGV4dCA9IHVzZXIuZ2V0U2xlZXBEYXRhQnlEYXRlKGRhdGUsICdob3Vyc1NsZXB0Jyk7XG59O1xuXG5jb25zdCBkaXNwbGF5U3RhaXJzSW5mbyA9ICgpID0+IHtcbiAgc3RhaXJzQ2FsZW5kYXJGbGlnaHRzQXZlcmFnZVdlZWtseS5pbm5lclRleHQgPSB1c2VyLmNhbGN1bGF0ZUF2ZXJhZ2VGbGlnaHRzVGhpc1dlZWsoZGF0ZSk7XG4gIHN0YWlyc0NhbGVuZGFyU3RhaXJzQXZlcmFnZVdlZWtseS5pbm5lclRleHQgPSAodXNlci5jYWxjdWxhdGVBdmVyYWdlRmxpZ2h0c1RoaXNXZWVrKGRhdGUpICogMTIpLnRvRml4ZWQoMCk7XG4gIHN0YWlyc0ZyaWVuZEZsaWdodHNBdmVyYWdlVG9kYXkuaW5uZXJUZXh0ID0gKHVzZXJSZXBvc2l0b3J5LmdldEdsb2JhbFN0YWlyQXZnQnlEYXRlKGRhdGUpIC8gMTIpLnRvRml4ZWQoMSk7XG4gIHN0YWlyc0luZm9GbGlnaHRzVG9kYXkuaW5uZXJUZXh0ID0gdXNlci5nZXRBY3Rpdml0eURhdGFCeURhdGUoZGF0ZSwgJ2ZsaWdodHNPZlN0YWlycycpO1xuICBzdGFpcnNVc2VyU3RhaXJzVG9kYXkuaW5uZXJUZXh0ID0gdXNlci5nZXRBY3Rpdml0eURhdGFCeURhdGUoZGF0ZSwgJ2ZsaWdodHNPZlN0YWlycycpICogMTI7XG4gIHN0YWlyc0NhbGVuZGFyRmxpZ2h0c0F2ZXJhZ2VXZWVrbHkuaW5uZXJUZXh0ID0gdXNlci5jYWxjdWxhdGVBdmVyYWdlRmxpZ2h0c1RoaXNXZWVrKGRhdGUpO1xuICBzdGFpcnNDYWxlbmRhclN0YWlyc0F2ZXJhZ2VXZWVrbHkuaW5uZXJUZXh0ID0gKHVzZXIuY2FsY3VsYXRlQXZlcmFnZUZsaWdodHNUaGlzV2VlayhkYXRlKSAqIDEyKS50b0ZpeGVkKDApO1xufTtcblxuY29uc3QgZGlzcGxheVN0ZXBzSW5mbyA9ICgpID0+IHtcbiAgc3RlcHNVc2VyU3RlcHNUb2RheS5pbm5lclRleHQgPSB1c2VyLmdldEFjdGl2aXR5RGF0YUJ5RGF0ZShkYXRlLCAnbnVtU3RlcHMnKVxuICBzdGVwc0luZm9BY3RpdmVNaW51dGVzVG9kYXkuaW5uZXJUZXh0ID0gdXNlci5nZXRBY3Rpdml0eURhdGFCeURhdGUoZGF0ZSwgJ21pbnV0ZXNBY3RpdmUnKVxuICBzdGVwc0NhbGVuZGFyVG90YWxTdGVwc1dlZWtseS5pbm5lclRleHQgPSB1c2VyLmFjdGl2aXR5UmVjb3JkLmdldFN0ZXBzVGhpc1dlZWsoZGF0ZSk7XG4gIHN0ZXBzQ2FsZW5kYXJUb3RhbEFjdGl2ZU1pbnV0ZXNXZWVrbHkuaW5uZXJUZXh0ID0gdXNlci5jYWxjdWxhdGVBdmVyYWdlTWludXRlc0FjdGl2ZVRoaXNXZWVrKGRhdGUpO1xuICBsb2FkRnJpZW5kc0FjdGl2aXR5UmVjb3JkcygpXG4gIGRpc3BsYXlTdGVwc0luZm9GcmllbmRzKClcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlTdGVwc0luZm9GcmllbmRzKCkge1xuICBzdGVwc0ZyaWVuZEF2ZXJhZ2VTdGVwR29hbC5pbm5lclRleHQgPSB1c2VyUmVwb3NpdG9yeS5nZXRHbG9iYWxTdGVwR29hbCgpLnRvRml4ZWQoMCk7XG4gIHN0ZXBzRnJpZW5kU3RlcHNBdmVyYWdlVG9kYXkuaW5uZXJUZXh0ID0gdXNlclJlcG9zaXRvcnkuZ2V0R2xvYmFsU3RlcEF2Z0J5RGF0ZShkYXRlKS50b0ZpeGVkKDApO1xuICBzdGVwc0ZyaWVuZEFjdGl2ZU1pbnV0ZXNBdmVyYWdlVG9kYXkuaW5uZXJUZXh0ID0gdXNlclJlcG9zaXRvcnkuZ2V0R2xvYmFsQWN0aXZlQXZnQnlEYXRlKGRhdGUpLnRvRml4ZWQoMCk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVUcmVuZGluZ1N0YWlyc0RheXMoKSB7XG4gIHVzZXIuZmluZFRyZW5kaW5nU3RhaXJzRGF5cygpO1xuICB0cmVuZGluZ1N0YWlyc1BocmFzZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9J3RyZW5kLWxpbmUnPiR7dXNlci50cmVuZGluZ1N0YWlyc0RheXNbMF19PC9wPmA7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVUcmVuZGluZ1N0ZXBEYXlzKCkge1xuICB1c2VyLmZpbmRUcmVuZGluZ1N0ZXBEYXlzKCk7XG4gIHRyZW5kaW5nU3RhaXJzUGhyYXNlQ29udGFpbmVyLmlubmVySFRNTCA9IGA8cCB0YWJpbmRleD1cIjBcIiBjbGFzcz0ndHJlbmQtbGluZSc+JHt1c2VyLnRyZW5kaW5nU3RhaXJzRGF5c1swXX08L3A+YDtcbn1cblxuLy8gICAgICAgICoqKiogICAgICAgIFVJIElOVEVSQUNUSU9OIEZVTkNUSU9OUyAgICAgICAqKioqXG5cbmNvbnN0IGZsaXBDYXJkID0gKGNhcmRUb0hpZGUsIGNhcmRUb1Nob3cpID0+IHtcbiAgY2FyZFRvSGlkZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgY2FyZFRvU2hvdy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbn07XG5cbmZ1bmN0aW9uIHNob3dEcm9wZG93bigpIHtcbiAgdXNlckluZm9Ecm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbn07XG5cbmZ1bmN0aW9uIHNob3dJbmZvKCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN0ZXBzLWluZm8tYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc3RlcHNNYWluQ2FyZCwgc3RlcHNJbmZvQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGVwcy1mcmllbmRzLWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKHN0ZXBzTWFpbkNhcmQsIHN0ZXBzRnJpZW5kc0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RlcHMtdHJlbmRpbmctYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc3RlcHNNYWluQ2FyZCwgc3RlcHNUcmVuZGluZ0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RlcHMtY2FsZW5kYXItYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc3RlcHNNYWluQ2FyZCwgc3RlcHNDYWxlbmRhckNhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RlcHMtbmV3LWlucHV0LWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKHN0ZXBzTWFpbkNhcmQsIHN0ZXBzTmV3SW5wdXRDYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImh5ZHJhdGlvbi1pbmZvLWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKGh5ZHJhdGlvbk1haW5DYXJkLCBoeWRyYXRpb25JbmZvQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoeWRyYXRpb24tZnJpZW5kcy1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChoeWRyYXRpb25NYWluQ2FyZCwgaHlkcmF0aW9uRnJpZW5kc0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHlkcmF0aW9uLWNhbGVuZGFyLWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKGh5ZHJhdGlvbk1haW5DYXJkLCBoeWRyYXRpb25DYWxlbmRhckNhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHlkcmF0aW9uLW5ldy1pbnB1dC1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChoeWRyYXRpb25NYWluQ2FyZCwgaHlkcmF0aW9uTmV3SW5wdXRDYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN0YWlycy1pbmZvLWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKHN0YWlyc01haW5DYXJkLCBzdGFpcnNJbmZvQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGFpcnMtZnJpZW5kcy1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChzdGFpcnNNYWluQ2FyZCwgc3RhaXJzRnJpZW5kc0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhaXJzLXRyZW5kaW5nLWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKHN0YWlyc01haW5DYXJkLCBzdGFpcnNUcmVuZGluZ0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhaXJzLWNhbGVuZGFyLWJ1dHRvblwiKSkge1xuICAgIGZsaXBDYXJkKHN0YWlyc01haW5DYXJkLCBzdGFpcnNDYWxlbmRhckNhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xlZXAtaW5mby1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChzbGVlcE1haW5DYXJkLCBzbGVlcEluZm9DYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNsZWVwLWZyaWVuZHMtYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc2xlZXBNYWluQ2FyZCwgc2xlZXBGcmllbmRzQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGVlcC1jYWxlbmRhci1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChzbGVlcE1haW5DYXJkLCBzbGVlcENhbGVuZGFyQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzbGVlcC1uZXctaW5wdXQtYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoc2xlZXBNYWluQ2FyZCwgc2xlZXBOZXdJbnB1dENhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RlcHMtZ28tYmFjay1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChldmVudC50YXJnZXQucGFyZW50Tm9kZSwgc3RlcHNNYWluQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoeWRyYXRpb24tZ28tYmFjay1idXR0b25cIikpIHtcbiAgICBmbGlwQ2FyZChldmVudC50YXJnZXQucGFyZW50Tm9kZSwgaHlkcmF0aW9uTWFpbkNhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhaXJzLWdvLWJhY2stYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUsIHN0YWlyc01haW5DYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNsZWVwLWdvLWJhY2stYnV0dG9uXCIpKSB7XG4gICAgZmxpcENhcmQoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUsIHNsZWVwTWFpbkNhcmQpO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==