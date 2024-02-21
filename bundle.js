/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: lightgray;
}

#buttonContain {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

#container {
  display: flex;
  
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.gameButtons {
  padding: 10px;
}

.board {
  display: flex;
  justify-content: center;
  width: 50vmin;
  margin: 1.5vmin;
}

.cell {
  background-color: lightcyan;
  height: 5vmin;
  width: 5vmin;
  border: 2px solid lightblue;
  box-sizing: border-box;
}

.cell:hover {
  background-color: lightcoral;
}

.ylabel {
  display: flex;
  background-color: lightgray;
  height: 5vmin;
  width: 5vmin;
  border: 2px solid gray;

  justify-content: center;
  align-items: center;

  box-sizing: border-box;
}

.shotMissed {
  background-color: blue;
}

.shotHit {
  background-color: darkred;
}

footer {
  background-color: gray;
  padding-top: 1vmin;
  padding-bottom: 1vmin;
  color: white;
  text-align: center;
}

#footer a:link {
  color: lightblue;
}

#footer a:visited {
  color: salmon;
}

.containsShip {
  background-color: gray;
}

.shipSunkUI {
  font-size: large;
}

.shipSunkUIisSunk {
  font-size: large;
  color: red;
}

.shipStatusUI {
  display: flex;
  flex-direction: column;
  margin-left: 3vmin;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;;EAEb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,sBAAsB;;EAEtB,uBAAuB;EACvB,mBAAmB;;EAEnB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB","sourcesContent":["body {\n  background-color: lightgray;\n}\n\n#buttonContain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n#container {\n  display: flex;\n  \n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.gameButtons {\n  padding: 10px;\n}\n\n.board {\n  display: flex;\n  justify-content: center;\n  width: 50vmin;\n  margin: 1.5vmin;\n}\n\n.cell {\n  background-color: lightcyan;\n  height: 5vmin;\n  width: 5vmin;\n  border: 2px solid lightblue;\n  box-sizing: border-box;\n}\n\n.cell:hover {\n  background-color: lightcoral;\n}\n\n.ylabel {\n  display: flex;\n  background-color: lightgray;\n  height: 5vmin;\n  width: 5vmin;\n  border: 2px solid gray;\n\n  justify-content: center;\n  align-items: center;\n\n  box-sizing: border-box;\n}\n\n.shotMissed {\n  background-color: blue;\n}\n\n.shotHit {\n  background-color: darkred;\n}\n\nfooter {\n  background-color: gray;\n  padding-top: 1vmin;\n  padding-bottom: 1vmin;\n  color: white;\n  text-align: center;\n}\n\n#footer a:link {\n  color: lightblue;\n}\n\n#footer a:visited {\n  color: salmon;\n}\n\n.containsShip {\n  background-color: gray;\n}\n\n.shipSunkUI {\n  font-size: large;\n}\n\n.shipSunkUIisSunk {\n  font-size: large;\n  color: red;\n}\n\n.shipStatusUI {\n  display: flex;\n  flex-direction: column;\n  margin-left: 3vmin;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const { Ship, Gameboard, Player } = __webpack_require__(/*! ./main */ "./src/main.js");

function makeGrid(player) {
  const currentName = player.Name;

  const boardPlayerUI = document.getElementById(`board${currentName}`);

  const boardUI = player.playerBoard.board;
  // Note to self, If I need to seperate keys and values, use:
  // const keysP1 = Object.keys(boardUI);
  // const valuesP1 = Object.values(boardUI);

  for (let col = 0; col <= 10; col++) {
    // Create a cell element
    const colElement = document.createElement("div");
    // Add a class for styling
    colElement.classList.add("col");
    for (let row = 0; row < 10; row++) {
      // column number to alphabet forumla
      const numToAlph = String.fromCharCode(row + "A".charCodeAt(0));
      if (row === 0 && col === 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel");

        // Append the cell to the col
        colElement.appendChild(cellElement);
        boardPlayerUI.appendChild(colElement);
      }

      if (row === 0 && col > 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel");

        // Add some content to the cell
        cellElement.textContent = `${col}`;

        colElement.appendChild(cellElement);
        boardPlayerUI.appendChild(colElement);
      }
      if (col === 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("ylabel");

        cellElement.textContent = `${numToAlph}`;

        colElement.appendChild(cellElement);
      }
      if (col > 0) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");

        // Set unique cell ID
        cellElement.id = `${numToAlph}${col}${currentName}`;

        const currentCell = `${numToAlph}${col}`;

        // Check if current cell contains a ship & change its color
        if (currentName === "P1" && boardUI[currentCell] === "unhit ship") {
          cellElement.classList.add("containsShip");
        }

        colElement.appendChild(cellElement);
      }
    }
    // Append the col to the grid container
    boardPlayerUI.appendChild(colElement);
  }
}

// Start a game
let currentTurn;
let P1;
let P2;

function startGame() {
  P1 = Player("P1");
  P2 = Player("P2");
  makeGrid(P1);
  makeGrid(P2);

  currentTurn = "P1";
}

// Make the cells interative
let cells;
function enableInteraction() {
  cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      // Highlight or update the cell based on interaction
      const selectedCell = cell;
      takeShot(selectedCell);
    });
  });
}
startGame();
enableInteraction();

// check if the game is over once all ships are sunk
function checkGameOver(shotPlayer) {
  let shipsSunk = 0;
  for (let i = 0; i < 5; i++) {
    if (shotPlayer.playerBoard.playerShips[i].sunk === true) {
      shipsSunk += 1;
    }
  }
  if (shipsSunk === 5) {
    // Game Over
    if (currentTurn === "P1") {
      console.log("Game over", "Player 1 has won!");
      // Change current turn to stop the game
      currentTurn = "";
    } else {
      console.log("Game over", "Player 2 has won!");
      currentTurn = "";
    }
  }
}

// Update ship sunk indicator
function checkUpdateShipUI(shotPlayer) {
  if (shotPlayer.Name === "P1") {
    for (let i = 0; i < 5; i++) {
      if (shotPlayer.playerBoard.playerShips[i].sunk === true) {
        if (i === 0) {
          const ship0P1UI = document.getElementById("ship0P1");
          ship0P1UI.classList.remove("shipSunkUI");
          ship0P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 1) {
          const ship1P1UI = document.getElementById("ship1P1");
          ship1P1UI.classList.remove("shipSunkUI");
          ship1P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 2) {
          const ship2P1UI = document.getElementById("ship2P1");
          ship2P1UI.classList.remove("shipSunkUI");
          ship2P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 3) {
          const ship3P1UI = document.getElementById("ship3P1");
          ship3P1UI.classList.remove("shipSunkUI");
          ship3P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 4) {
          const ship4P1UI = document.getElementById("ship4P1");
          ship4P1UI.classList.remove("shipSunkUI");
          ship4P1UI.classList.add("shipSunkUIisSunk");
        }
      }
    }
  }

  if (shotPlayer.Name === "P2") {
    for (let i = 0; i < 5; i++) {
      if (shotPlayer.playerBoard.playerShips[i].sunk === true) {
        if (i === 0) {
          const ship0P1UI = document.getElementById("ship0P2");
          ship0P1UI.classList.remove("shipSunkUI");
          ship0P1UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 1) {
          const ship1P2UI = document.getElementById("ship1P2");
          ship1P2UI.classList.remove("shipSunkUI");
          ship1P2UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 2) {
          const ship2P2UI = document.getElementById("ship2P2");
          ship2P2UI.classList.remove("shipSunkUI");
          ship2P2UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 3) {
          const ship3P2UI = document.getElementById("ship3P2");
          ship3P2UI.classList.remove("shipSunkUI");
          ship3P2UI.classList.add("shipSunkUIisSunk");
        }
        if (i === 4) {
          const ship4P2UI = document.getElementById("ship4P2");
          ship4P2UI.classList.remove("shipSunkUI");
          ship4P2UI.classList.add("shipSunkUIisSunk");
        }
      }
    }
  }
}

// Implement a take a shot interactive function
function takeShot(currentCell) {
  // Variables for shot location and shot player
  let shotCord;
  let shootPlayer;

  // If P1 / human turn
  if (currentCell) {
    const shotID = currentCell.id;
    // get coordinate & player
    shotCord = shotID.slice(0, 2);
    shootPlayer = shotID.slice(2);
    if (shotID.length > 4) {
      shotCord = shotID.slice(0, 3);
      shootPlayer = shotID.slice(3);
    }
  }

  if (currentTurn === "P1" && shootPlayer === "P2") {
    const shoot = P2.playerBoard.receiveAttack(shotCord);

    if (shoot === "miss") {
      currentCell.classList.add("shotMissed");
      currentTurn = "P2";
      takeShot();
    }

    if (shoot === "hit") {
      currentCell.classList.remove("containsShip");
      currentCell.classList.add("shotHit");
      currentTurn = "P2";
      checkUpdateShipUI(P2);
      checkGameOver(P2);
      takeShot();
    }
    return;
  }

  // If P2 / AI turn
  if (currentTurn === "P2") {
    // Get a coordinate to shoot
    const getTarget = P2.AIshoot();
    // Use that coordinate to shoot
    const shoot = P1.playerBoard.receiveAttack(getTarget);

    // Update UI
    currentCell = document.getElementById(`${getTarget}P1`);
    if (shoot === "miss") {
      currentCell.classList.add("shotMissed");
      currentTurn = "P1";
    }

    if (shoot === "hit") {
      currentCell.classList.add("shotHit");
      currentTurn = "P1";
      checkUpdateShipUI(P1);
      checkGameOver(P1);
    }
  }
}

const newGameButton = document.getElementById("buttonNew");
const sunkUI = document.querySelectorAll(".shipSunkUI");
newGameButton.addEventListener("click", () => {
  const boardP1UI = document.getElementById("boardP1");
  while (boardP1UI.hasChildNodes()) boardP1UI.removeChild(boardP1UI.firstChild);

  const boardP2UI = document.getElementById("boardP2");
  while (boardP2UI.hasChildNodes()) boardP2UI.removeChild(boardP2UI.firstChild);

  cells.forEach((cell) => {
    cell.classList.remove("shipSunkUI");
  });

  sunkUI.forEach((UIelement) => {
    UIelement.classList.remove("shipSunkUIisSunk");
  });

  P1 = Player("P1");
  makeGrid(P1);
  P2 = Player("P2");
  makeGrid(P2);

  currentTurn = "P1";
  enableInteraction();
});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module) => {

// Shutting up eslint about my for...in loops:
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

// refactor my ship to classes
function Ship(shipName, length, sunk = false, timesHit = 0) {
  function isSunk() {
    if (this.timesHit === this.length) {
      this.sunk = true;
    } else {
      this.sunk = false;
    }
  }

  function hit() {
    this.timesHit += 1;
    this.isSunk();
  }

  return {
    shipName,
    length,
    hit,
    timesHit,
    isSunk,
    sunk,
  };
}

function findEndPosition(shipLength, startPos, shipDirection) {
  // find the current position
  const yStartPos = startPos[0];
  let xStartPos = startPos[1];
  // account for two digits for x=10
  if (startPos.length > 2) {
    xStartPos = "10";
  }
  let xEndPos;
  let yEndPos;

  // find the end position of the current ship given the direction & length
  if (shipDirection === "right") {
    xEndPos = (Number(xStartPos) + shipLength - 1);
    yEndPos = yStartPos;
  }
  if (shipDirection === "up") {
    xEndPos = Number(xStartPos);
    yEndPos = String.fromCharCode(yStartPos.charCodeAt(0) - shipLength + 1);
  }

  // check if end position is out of bounds

  if (xEndPos > 10 || yEndPos < "A") {
    throw new Error("ship cannot be placed out of bounds");
  }

  const endPos = yEndPos + xEndPos.toString();
  return endPos;
}

function Gameboard() {
  const xarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const yarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const board = {};
  const playerShips = [];
  if (board[0] === undefined) {
    for (const i in xarray) {
      for (const j in yarray) {
        const gridPosition = yarray[i] + xarray[j];
        board[gridPosition] = "empty";
      }
    }
  }

  function placeShip(shipObj, startPos, shipDirection = "right") {
    const shipLength = shipObj.length;

    // Find end Position of current placement, ensuring we don't go out of bounds
    const endPos = findEndPosition(shipLength, startPos, shipDirection);

    if (endPos === new Error("ship cannot be placed out of bounds")) {
      return endPos;
    }

    // Now using startPos and endPos, check if ship placements don't overlap
    for (let i = 1; i <= shipLength; i += 1) {
      const currentPos = findEndPosition(i, startPos, shipDirection);
      // Make sure we dont allow ships to be placed ontop on eachother
      if (board[currentPos] !== "empty") {
        throw new Error("can't place ship on another ship");
      }
    }
    const shipGrids = [];
    // populate each grid with the unhit ship property and ship name
    for (let i = 1; i <= shipLength; i += 1) {
      const currentPos = findEndPosition(i, startPos, shipDirection);
      shipGrids.push(currentPos);
      board[currentPos] = "unhit ship";
    }
    // Add grids the ship occupies to the ship properties
    shipObj.grids = shipGrids;

    // Add ship to player ships
    playerShips.push(shipObj);
  }

  // code to recieve an attack then send the 'hit' function or record a miss
  function receiveAttack(currentShot) {
    if (board[currentShot] === "shot ship" || board[currentShot] === "shot water") {
      throw new Error("already shot here");
    }
    if (board[currentShot] === "unhit ship") {
      for (const i in playerShips) {
        const currentShipGrids = playerShips[i].grids;
        if (currentShipGrids.includes(currentShot)) {
          board[currentShot] = "shot ship";
          playerShips[i].hit();
          return "hit";
        }
      }
    } else {
      board[currentShot] = "shot water";
      return "miss";
    }
  }

  return {
    board,
    placeShip,
    receiveAttack,
    playerShips,
  };
}

function Player(playerName) {
  const playerBoard = Gameboard();

  // Generate board
  const xarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const yarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const board = [];

  if (board[0] === undefined) {
    for (const i in xarray) {
      for (const j in yarray) {
        const gridPosition = yarray[i] + xarray[j];
        board.push(gridPosition);
      }
    }
  }

  // Random placement code
  function autoPlacement() {
    const randomPlacement = [];
    const randNum = Math.floor(Math.random() * board.length);
    randomPlacement.push(board[randNum]);
    const zeroorone = Math.round(Math.random());
    if (zeroorone === 0) {
      randomPlacement.push("right");
    } else {
      randomPlacement.push("up");
    }
    return randomPlacement;
  }

  // P1 / human code
  if (playerName === "P1" && playerBoard.playerShips.length < 5) {
    let stopper = 0;
    const shipsToPlace = [Ship("carrierP1", 5), Ship("battleshipP1", 4), Ship("cruiserP1", 3), Ship("submarineP1", 3), Ship("patrolP1", 2)];
    while (playerBoard.playerShips.length < 5) {
      try {
        const randomPlacements = autoPlacement();
        const currentShip = shipsToPlace[playerBoard.playerShips.length];
        playerBoard.placeShip(currentShip, randomPlacements[0], randomPlacements[1]);
      } catch (e) {
        stopper++;
        if (stopper > 100) {
          break;
        }
      }
    }
  }

  // P2 code
  if (playerName === "P2" && playerBoard.playerShips.length < 5) {
    let stopper = 0;
    const shipsToPlace = [Ship("carrierP2", 5), Ship("battleshipP2", 4), Ship("cruiserP2", 3), Ship("submarineP2", 3), Ship("patrolP2", 2)];
    while (playerBoard.playerShips.length < 5) {
      try {
        const randomPlacements = autoPlacement();
        const currentShip = shipsToPlace[playerBoard.playerShips.length];
        playerBoard.placeShip(currentShip, randomPlacements[0], randomPlacements[1]);
      } catch (e) {
        stopper++;
        if (stopper > 100) {
          break;
        }
      }
    }
  }

  // Have the AI shoot a random location
  function AIshoot() {
    const randNum = Math.floor(Math.random() * board.length);
    const randShot = board[randNum];
    board.splice(randNum, 1);
    return randShot;
  }

  return {
    playerBoard,
    AIshoot,
    autoPlacement,
    Name: playerName,
  };
}

module.exports = { Ship, Gameboard, Player };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game_js__WEBPACK_IMPORTED_MODULE_2__);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsVUFBVTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUMvUUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7Ozs7Ozs7VUN6Tm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNGO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbiNidXR0b25Db250YWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZUJ1dHRvbnMge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwdm1pbjtcbiAgbWFyZ2luOiAxLjV2bWluO1xufVxuXG4uY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcbiAgaGVpZ2h0OiA1dm1pbjtcbiAgd2lkdGg6IDV2bWluO1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGJsdWU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuLnlsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgaGVpZ2h0OiA1dm1pbjtcbiAgd2lkdGg6IDV2bWluO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zaG90TWlzc2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLnNob3RIaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBwYWRkaW5nLXRvcDogMXZtaW47XG4gIHBhZGRpbmctYm90dG9tOiAxdm1pbjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb290ZXIgYTpsaW5rIHtcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuI2Zvb3RlciBhOnZpc2l0ZWQge1xuICBjb2xvcjogc2FsbW9uO1xufVxuXG4uY29udGFpbnNTaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLnNoaXBTdW5rVUkge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uc2hpcFN1bmtVSWlzU3VuayB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zaGlwU3RhdHVzVUkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogM3ZtaW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7O0VBRWIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7O0VBRXRCLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbiNidXR0b25Db250YWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVCdXR0b25zIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTB2bWluO1xcbiAgbWFyZ2luOiAxLjV2bWluO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxuICBoZWlnaHQ6IDV2bWluO1xcbiAgd2lkdGg6IDV2bWluO1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRibHVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnlsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgaGVpZ2h0OiA1dm1pbjtcXG4gIHdpZHRoOiA1dm1pbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2hvdE1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2hvdEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIHBhZGRpbmctdG9wOiAxdm1pbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxdm1pbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciBhOmxpbmsge1xcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuI2Zvb3RlciBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IHNhbG1vbjtcXG59XFxuXFxuLmNvbnRhaW5zU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc2hpcFN1bmtVSSB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uc2hpcFN1bmtVSWlzU3VuayB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnNoaXBTdGF0dXNVSSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1sZWZ0OiAzdm1pbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfSA9IHJlcXVpcmUoXCIuL21haW5cIik7XG5cbmZ1bmN0aW9uIG1ha2VHcmlkKHBsYXllcikge1xuICBjb25zdCBjdXJyZW50TmFtZSA9IHBsYXllci5OYW1lO1xuXG4gIGNvbnN0IGJvYXJkUGxheWVyVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYm9hcmQke2N1cnJlbnROYW1lfWApO1xuXG4gIGNvbnN0IGJvYXJkVUkgPSBwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmQ7XG4gIC8vIE5vdGUgdG8gc2VsZiwgSWYgSSBuZWVkIHRvIHNlcGVyYXRlIGtleXMgYW5kIHZhbHVlcywgdXNlOlxuICAvLyBjb25zdCBrZXlzUDEgPSBPYmplY3Qua2V5cyhib2FyZFVJKTtcbiAgLy8gY29uc3QgdmFsdWVzUDEgPSBPYmplY3QudmFsdWVzKGJvYXJkVUkpO1xuXG4gIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8PSAxMDsgY29sKyspIHtcbiAgICAvLyBDcmVhdGUgYSBjZWxsIGVsZW1lbnRcbiAgICBjb25zdCBjb2xFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyBBZGQgYSBjbGFzcyBmb3Igc3R5bGluZ1xuICAgIGNvbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbFwiKTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgIC8vIGNvbHVtbiBudW1iZXIgdG8gYWxwaGFiZXQgZm9ydW1sYVxuICAgICAgY29uc3QgbnVtVG9BbHBoID0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3cgKyBcIkFcIi5jaGFyQ29kZUF0KDApKTtcbiAgICAgIGlmIChyb3cgPT09IDAgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInlsYWJlbFwiKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIGNlbGwgdG8gdGhlIGNvbFxuICAgICAgICBjb2xFbGVtZW50LmFwcGVuZENoaWxkKGNlbGxFbGVtZW50KTtcbiAgICAgICAgYm9hcmRQbGF5ZXJVSS5hcHBlbmRDaGlsZChjb2xFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvdyA9PT0gMCAmJiBjb2wgPiAwKSB7XG4gICAgICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInlsYWJlbFwiKTtcblxuICAgICAgICAvLyBBZGQgc29tZSBjb250ZW50IHRvIHRoZSBjZWxsXG4gICAgICAgIGNlbGxFbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y29sfWA7XG5cbiAgICAgICAgY29sRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudCk7XG4gICAgICAgIGJvYXJkUGxheWVyVUkuYXBwZW5kQ2hpbGQoY29sRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoY29sID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInlsYWJlbFwiKTtcblxuICAgICAgICBjZWxsRWxlbWVudC50ZXh0Q29udGVudCA9IGAke251bVRvQWxwaH1gO1xuXG4gICAgICAgIGNvbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbEVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbCA+IDApIHtcbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGNlbGwgSURcbiAgICAgICAgY2VsbEVsZW1lbnQuaWQgPSBgJHtudW1Ub0FscGh9JHtjb2x9JHtjdXJyZW50TmFtZX1gO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gYCR7bnVtVG9BbHBofSR7Y29sfWA7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgY3VycmVudCBjZWxsIGNvbnRhaW5zIGEgc2hpcCAmIGNoYW5nZSBpdHMgY29sb3JcbiAgICAgICAgaWYgKGN1cnJlbnROYW1lID09PSBcIlAxXCIgJiYgYm9hcmRVSVtjdXJyZW50Q2VsbF0gPT09IFwidW5oaXQgc2hpcFwiKSB7XG4gICAgICAgICAgY2VsbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5zU2hpcFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBcHBlbmQgdGhlIGNvbCB0byB0aGUgZ3JpZCBjb250YWluZXJcbiAgICBib2FyZFBsYXllclVJLmFwcGVuZENoaWxkKGNvbEVsZW1lbnQpO1xuICB9XG59XG5cbi8vIFN0YXJ0IGEgZ2FtZVxubGV0IGN1cnJlbnRUdXJuO1xubGV0IFAxO1xubGV0IFAyO1xuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIFAxID0gUGxheWVyKFwiUDFcIik7XG4gIFAyID0gUGxheWVyKFwiUDJcIik7XG4gIG1ha2VHcmlkKFAxKTtcbiAgbWFrZUdyaWQoUDIpO1xuXG4gIGN1cnJlbnRUdXJuID0gXCJQMVwiO1xufVxuXG4vLyBNYWtlIHRoZSBjZWxscyBpbnRlcmF0aXZlXG5sZXQgY2VsbHM7XG5mdW5jdGlvbiBlbmFibGVJbnRlcmFjdGlvbigpIHtcbiAgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBIaWdobGlnaHQgb3IgdXBkYXRlIHRoZSBjZWxsIGJhc2VkIG9uIGludGVyYWN0aW9uXG4gICAgICBjb25zdCBzZWxlY3RlZENlbGwgPSBjZWxsO1xuICAgICAgdGFrZVNob3Qoc2VsZWN0ZWRDZWxsKTtcbiAgICB9KTtcbiAgfSk7XG59XG5zdGFydEdhbWUoKTtcbmVuYWJsZUludGVyYWN0aW9uKCk7XG5cbi8vIGNoZWNrIGlmIHRoZSBnYW1lIGlzIG92ZXIgb25jZSBhbGwgc2hpcHMgYXJlIHN1bmtcbmZ1bmN0aW9uIGNoZWNrR2FtZU92ZXIoc2hvdFBsYXllcikge1xuICBsZXQgc2hpcHNTdW5rID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBpZiAoc2hvdFBsYXllci5wbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwc1tpXS5zdW5rID09PSB0cnVlKSB7XG4gICAgICBzaGlwc1N1bmsgKz0gMTtcbiAgICB9XG4gIH1cbiAgaWYgKHNoaXBzU3VuayA9PT0gNSkge1xuICAgIC8vIEdhbWUgT3ZlclxuICAgIGlmIChjdXJyZW50VHVybiA9PT0gXCJQMVwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkdhbWUgb3ZlclwiLCBcIlBsYXllciAxIGhhcyB3b24hXCIpO1xuICAgICAgLy8gQ2hhbmdlIGN1cnJlbnQgdHVybiB0byBzdG9wIHRoZSBnYW1lXG4gICAgICBjdXJyZW50VHVybiA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBvdmVyXCIsIFwiUGxheWVyIDIgaGFzIHdvbiFcIik7XG4gICAgICBjdXJyZW50VHVybiA9IFwiXCI7XG4gICAgfVxuICB9XG59XG5cbi8vIFVwZGF0ZSBzaGlwIHN1bmsgaW5kaWNhdG9yXG5mdW5jdGlvbiBjaGVja1VwZGF0ZVNoaXBVSShzaG90UGxheWVyKSB7XG4gIGlmIChzaG90UGxheWVyLk5hbWUgPT09IFwiUDFcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBpZiAoc2hvdFBsYXllci5wbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwc1tpXS5zdW5rID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcDBQMVVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwMFAxXCIpO1xuICAgICAgICAgIHNoaXAwUDFVSS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFN1bmtVSVwiKTtcbiAgICAgICAgICBzaGlwMFAxVUkuY2xhc3NMaXN0LmFkZChcInNoaXBTdW5rVUlpc1N1bmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICBjb25zdCBzaGlwMVAxVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAxUDFcIik7XG4gICAgICAgICAgc2hpcDFQMVVJLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwU3Vua1VJXCIpO1xuICAgICAgICAgIHNoaXAxUDFVSS5jbGFzc0xpc3QuYWRkKFwic2hpcFN1bmtVSWlzU3Vua1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gMikge1xuICAgICAgICAgIGNvbnN0IHNoaXAyUDFVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcDJQMVwiKTtcbiAgICAgICAgICBzaGlwMlAxVUkuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBTdW5rVUlcIik7XG4gICAgICAgICAgc2hpcDJQMVVJLmNsYXNzTGlzdC5hZGQoXCJzaGlwU3Vua1VJaXNTdW5rXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcDNQMVVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwM1AxXCIpO1xuICAgICAgICAgIHNoaXAzUDFVSS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFN1bmtVSVwiKTtcbiAgICAgICAgICBzaGlwM1AxVUkuY2xhc3NMaXN0LmFkZChcInNoaXBTdW5rVUlpc1N1bmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCBzaGlwNFAxVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXA0UDFcIik7XG4gICAgICAgICAgc2hpcDRQMVVJLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwU3Vua1VJXCIpO1xuICAgICAgICAgIHNoaXA0UDFVSS5jbGFzc0xpc3QuYWRkKFwic2hpcFN1bmtVSWlzU3Vua1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzaG90UGxheWVyLk5hbWUgPT09IFwiUDJcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBpZiAoc2hvdFBsYXllci5wbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwc1tpXS5zdW5rID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcDBQMVVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwMFAyXCIpO1xuICAgICAgICAgIHNoaXAwUDFVSS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFN1bmtVSVwiKTtcbiAgICAgICAgICBzaGlwMFAxVUkuY2xhc3NMaXN0LmFkZChcInNoaXBTdW5rVUlpc1N1bmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICBjb25zdCBzaGlwMVAyVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAxUDJcIik7XG4gICAgICAgICAgc2hpcDFQMlVJLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwU3Vua1VJXCIpO1xuICAgICAgICAgIHNoaXAxUDJVSS5jbGFzc0xpc3QuYWRkKFwic2hpcFN1bmtVSWlzU3Vua1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gMikge1xuICAgICAgICAgIGNvbnN0IHNoaXAyUDJVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcDJQMlwiKTtcbiAgICAgICAgICBzaGlwMlAyVUkuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBTdW5rVUlcIik7XG4gICAgICAgICAgc2hpcDJQMlVJLmNsYXNzTGlzdC5hZGQoXCJzaGlwU3Vua1VJaXNTdW5rXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcDNQMlVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwM1AyXCIpO1xuICAgICAgICAgIHNoaXAzUDJVSS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFN1bmtVSVwiKTtcbiAgICAgICAgICBzaGlwM1AyVUkuY2xhc3NMaXN0LmFkZChcInNoaXBTdW5rVUlpc1N1bmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCBzaGlwNFAyVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXA0UDJcIik7XG4gICAgICAgICAgc2hpcDRQMlVJLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwU3Vua1VJXCIpO1xuICAgICAgICAgIHNoaXA0UDJVSS5jbGFzc0xpc3QuYWRkKFwic2hpcFN1bmtVSWlzU3Vua1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBJbXBsZW1lbnQgYSB0YWtlIGEgc2hvdCBpbnRlcmFjdGl2ZSBmdW5jdGlvblxuZnVuY3Rpb24gdGFrZVNob3QoY3VycmVudENlbGwpIHtcbiAgLy8gVmFyaWFibGVzIGZvciBzaG90IGxvY2F0aW9uIGFuZCBzaG90IHBsYXllclxuICBsZXQgc2hvdENvcmQ7XG4gIGxldCBzaG9vdFBsYXllcjtcblxuICAvLyBJZiBQMSAvIGh1bWFuIHR1cm5cbiAgaWYgKGN1cnJlbnRDZWxsKSB7XG4gICAgY29uc3Qgc2hvdElEID0gY3VycmVudENlbGwuaWQ7XG4gICAgLy8gZ2V0IGNvb3JkaW5hdGUgJiBwbGF5ZXJcbiAgICBzaG90Q29yZCA9IHNob3RJRC5zbGljZSgwLCAyKTtcbiAgICBzaG9vdFBsYXllciA9IHNob3RJRC5zbGljZSgyKTtcbiAgICBpZiAoc2hvdElELmxlbmd0aCA+IDQpIHtcbiAgICAgIHNob3RDb3JkID0gc2hvdElELnNsaWNlKDAsIDMpO1xuICAgICAgc2hvb3RQbGF5ZXIgPSBzaG90SUQuc2xpY2UoMyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGN1cnJlbnRUdXJuID09PSBcIlAxXCIgJiYgc2hvb3RQbGF5ZXIgPT09IFwiUDJcIikge1xuICAgIGNvbnN0IHNob290ID0gUDIucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhzaG90Q29yZCk7XG5cbiAgICBpZiAoc2hvb3QgPT09IFwibWlzc1wiKSB7XG4gICAgICBjdXJyZW50Q2VsbC5jbGFzc0xpc3QuYWRkKFwic2hvdE1pc3NlZFwiKTtcbiAgICAgIGN1cnJlbnRUdXJuID0gXCJQMlwiO1xuICAgICAgdGFrZVNob3QoKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvb3QgPT09IFwiaGl0XCIpIHtcbiAgICAgIGN1cnJlbnRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjb250YWluc1NoaXBcIik7XG4gICAgICBjdXJyZW50Q2VsbC5jbGFzc0xpc3QuYWRkKFwic2hvdEhpdFwiKTtcbiAgICAgIGN1cnJlbnRUdXJuID0gXCJQMlwiO1xuICAgICAgY2hlY2tVcGRhdGVTaGlwVUkoUDIpO1xuICAgICAgY2hlY2tHYW1lT3ZlcihQMik7XG4gICAgICB0YWtlU2hvdCgpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiBQMiAvIEFJIHR1cm5cbiAgaWYgKGN1cnJlbnRUdXJuID09PSBcIlAyXCIpIHtcbiAgICAvLyBHZXQgYSBjb29yZGluYXRlIHRvIHNob290XG4gICAgY29uc3QgZ2V0VGFyZ2V0ID0gUDIuQUlzaG9vdCgpO1xuICAgIC8vIFVzZSB0aGF0IGNvb3JkaW5hdGUgdG8gc2hvb3RcbiAgICBjb25zdCBzaG9vdCA9IFAxLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soZ2V0VGFyZ2V0KTtcblxuICAgIC8vIFVwZGF0ZSBVSVxuICAgIGN1cnJlbnRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Z2V0VGFyZ2V0fVAxYCk7XG4gICAgaWYgKHNob290ID09PSBcIm1pc3NcIikge1xuICAgICAgY3VycmVudENlbGwuY2xhc3NMaXN0LmFkZChcInNob3RNaXNzZWRcIik7XG4gICAgICBjdXJyZW50VHVybiA9IFwiUDFcIjtcbiAgICB9XG5cbiAgICBpZiAoc2hvb3QgPT09IFwiaGl0XCIpIHtcbiAgICAgIGN1cnJlbnRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaG90SGl0XCIpO1xuICAgICAgY3VycmVudFR1cm4gPSBcIlAxXCI7XG4gICAgICBjaGVja1VwZGF0ZVNoaXBVSShQMSk7XG4gICAgICBjaGVja0dhbWVPdmVyKFAxKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uTmV3XCIpO1xuY29uc3Qgc3Vua1VJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwU3Vua1VJXCIpO1xubmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBib2FyZFAxVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkUDFcIik7XG4gIHdoaWxlIChib2FyZFAxVUkuaGFzQ2hpbGROb2RlcygpKSBib2FyZFAxVUkucmVtb3ZlQ2hpbGQoYm9hcmRQMVVJLmZpcnN0Q2hpbGQpO1xuXG4gIGNvbnN0IGJvYXJkUDJVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRQMlwiKTtcbiAgd2hpbGUgKGJvYXJkUDJVSS5oYXNDaGlsZE5vZGVzKCkpIGJvYXJkUDJVSS5yZW1vdmVDaGlsZChib2FyZFAyVUkuZmlyc3RDaGlsZCk7XG5cbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBTdW5rVUlcIik7XG4gIH0pO1xuXG4gIHN1bmtVSS5mb3JFYWNoKChVSWVsZW1lbnQpID0+IHtcbiAgICBVSWVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBTdW5rVUlpc1N1bmtcIik7XG4gIH0pO1xuXG4gIFAxID0gUGxheWVyKFwiUDFcIik7XG4gIG1ha2VHcmlkKFAxKTtcbiAgUDIgPSBQbGF5ZXIoXCJQMlwiKTtcbiAgbWFrZUdyaWQoUDIpO1xuXG4gIGN1cnJlbnRUdXJuID0gXCJQMVwiO1xuICBlbmFibGVJbnRlcmFjdGlvbigpO1xufSk7XG4iLCIvLyBTaHV0dGluZyB1cCBlc2xpbnQgYWJvdXQgbXkgZm9yLi4uaW4gbG9vcHM6XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG5cbi8vIHJlZmFjdG9yIG15IHNoaXAgdG8gY2xhc3Nlc1xuZnVuY3Rpb24gU2hpcChzaGlwTmFtZSwgbGVuZ3RoLCBzdW5rID0gZmFsc2UsIHRpbWVzSGl0ID0gMCkge1xuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMudGltZXNIaXQgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNoaXBOYW1lLFxuICAgIGxlbmd0aCxcbiAgICBoaXQsXG4gICAgdGltZXNIaXQsXG4gICAgaXNTdW5rLFxuICAgIHN1bmssXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRFbmRQb3NpdGlvbihzaGlwTGVuZ3RoLCBzdGFydFBvcywgc2hpcERpcmVjdGlvbikge1xuICAvLyBmaW5kIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gIGNvbnN0IHlTdGFydFBvcyA9IHN0YXJ0UG9zWzBdO1xuICBsZXQgeFN0YXJ0UG9zID0gc3RhcnRQb3NbMV07XG4gIC8vIGFjY291bnQgZm9yIHR3byBkaWdpdHMgZm9yIHg9MTBcbiAgaWYgKHN0YXJ0UG9zLmxlbmd0aCA+IDIpIHtcbiAgICB4U3RhcnRQb3MgPSBcIjEwXCI7XG4gIH1cbiAgbGV0IHhFbmRQb3M7XG4gIGxldCB5RW5kUG9zO1xuXG4gIC8vIGZpbmQgdGhlIGVuZCBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBzaGlwIGdpdmVuIHRoZSBkaXJlY3Rpb24gJiBsZW5ndGhcbiAgaWYgKHNoaXBEaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgIHhFbmRQb3MgPSAoTnVtYmVyKHhTdGFydFBvcykgKyBzaGlwTGVuZ3RoIC0gMSk7XG4gICAgeUVuZFBvcyA9IHlTdGFydFBvcztcbiAgfVxuICBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgeEVuZFBvcyA9IE51bWJlcih4U3RhcnRQb3MpO1xuICAgIHlFbmRQb3MgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHlTdGFydFBvcy5jaGFyQ29kZUF0KDApIC0gc2hpcExlbmd0aCArIDEpO1xuICB9XG5cbiAgLy8gY2hlY2sgaWYgZW5kIHBvc2l0aW9uIGlzIG91dCBvZiBib3VuZHNcblxuICBpZiAoeEVuZFBvcyA+IDEwIHx8IHlFbmRQb3MgPCBcIkFcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcInNoaXAgY2Fubm90IGJlIHBsYWNlZCBvdXQgb2YgYm91bmRzXCIpO1xuICB9XG5cbiAgY29uc3QgZW5kUG9zID0geUVuZFBvcyArIHhFbmRQb3MudG9TdHJpbmcoKTtcbiAgcmV0dXJuIGVuZFBvcztcbn1cblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCB4YXJyYXkgPSBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXTtcbiAgY29uc3QgeWFycmF5ID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcbiAgY29uc3QgYm9hcmQgPSB7fTtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBbXTtcbiAgaWYgKGJvYXJkWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4geGFycmF5KSB7XG4gICAgICBmb3IgKGNvbnN0IGogaW4geWFycmF5KSB7XG4gICAgICAgIGNvbnN0IGdyaWRQb3NpdGlvbiA9IHlhcnJheVtpXSArIHhhcnJheVtqXTtcbiAgICAgICAgYm9hcmRbZ3JpZFBvc2l0aW9uXSA9IFwiZW1wdHlcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcE9iaiwgc3RhcnRQb3MsIHNoaXBEaXJlY3Rpb24gPSBcInJpZ2h0XCIpIHtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcE9iai5sZW5ndGg7XG5cbiAgICAvLyBGaW5kIGVuZCBQb3NpdGlvbiBvZiBjdXJyZW50IHBsYWNlbWVudCwgZW5zdXJpbmcgd2UgZG9uJ3QgZ28gb3V0IG9mIGJvdW5kc1xuICAgIGNvbnN0IGVuZFBvcyA9IGZpbmRFbmRQb3NpdGlvbihzaGlwTGVuZ3RoLCBzdGFydFBvcywgc2hpcERpcmVjdGlvbik7XG5cbiAgICBpZiAoZW5kUG9zID09PSBuZXcgRXJyb3IoXCJzaGlwIGNhbm5vdCBiZSBwbGFjZWQgb3V0IG9mIGJvdW5kc1wiKSkge1xuICAgICAgcmV0dXJuIGVuZFBvcztcbiAgICB9XG5cbiAgICAvLyBOb3cgdXNpbmcgc3RhcnRQb3MgYW5kIGVuZFBvcywgY2hlY2sgaWYgc2hpcCBwbGFjZW1lbnRzIGRvbid0IG92ZXJsYXBcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQb3MgPSBmaW5kRW5kUG9zaXRpb24oaSwgc3RhcnRQb3MsIHNoaXBEaXJlY3Rpb24pO1xuICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbnQgYWxsb3cgc2hpcHMgdG8gYmUgcGxhY2VkIG9udG9wIG9uIGVhY2hvdGhlclxuICAgICAgaWYgKGJvYXJkW2N1cnJlbnRQb3NdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2FuJ3QgcGxhY2Ugc2hpcCBvbiBhbm90aGVyIHNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNoaXBHcmlkcyA9IFtdO1xuICAgIC8vIHBvcHVsYXRlIGVhY2ggZ3JpZCB3aXRoIHRoZSB1bmhpdCBzaGlwIHByb3BlcnR5IGFuZCBzaGlwIG5hbWVcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQb3MgPSBmaW5kRW5kUG9zaXRpb24oaSwgc3RhcnRQb3MsIHNoaXBEaXJlY3Rpb24pO1xuICAgICAgc2hpcEdyaWRzLnB1c2goY3VycmVudFBvcyk7XG4gICAgICBib2FyZFtjdXJyZW50UG9zXSA9IFwidW5oaXQgc2hpcFwiO1xuICAgIH1cbiAgICAvLyBBZGQgZ3JpZHMgdGhlIHNoaXAgb2NjdXBpZXMgdG8gdGhlIHNoaXAgcHJvcGVydGllc1xuICAgIHNoaXBPYmouZ3JpZHMgPSBzaGlwR3JpZHM7XG5cbiAgICAvLyBBZGQgc2hpcCB0byBwbGF5ZXIgc2hpcHNcbiAgICBwbGF5ZXJTaGlwcy5wdXNoKHNoaXBPYmopO1xuICB9XG5cbiAgLy8gY29kZSB0byByZWNpZXZlIGFuIGF0dGFjayB0aGVuIHNlbmQgdGhlICdoaXQnIGZ1bmN0aW9uIG9yIHJlY29yZCBhIG1pc3NcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjdXJyZW50U2hvdCkge1xuICAgIGlmIChib2FyZFtjdXJyZW50U2hvdF0gPT09IFwic2hvdCBzaGlwXCIgfHwgYm9hcmRbY3VycmVudFNob3RdID09PSBcInNob3Qgd2F0ZXJcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYWxyZWFkeSBzaG90IGhlcmVcIik7XG4gICAgfVxuICAgIGlmIChib2FyZFtjdXJyZW50U2hvdF0gPT09IFwidW5oaXQgc2hpcFwiKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4gcGxheWVyU2hpcHMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXBHcmlkcyA9IHBsYXllclNoaXBzW2ldLmdyaWRzO1xuICAgICAgICBpZiAoY3VycmVudFNoaXBHcmlkcy5pbmNsdWRlcyhjdXJyZW50U2hvdCkpIHtcbiAgICAgICAgICBib2FyZFtjdXJyZW50U2hvdF0gPSBcInNob3Qgc2hpcFwiO1xuICAgICAgICAgIHBsYXllclNoaXBzW2ldLmhpdCgpO1xuICAgICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkW2N1cnJlbnRTaG90XSA9IFwic2hvdCB3YXRlclwiO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxheWVyU2hpcHMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgLy8gR2VuZXJhdGUgYm9hcmRcbiAgY29uc3QgeGFycmF5ID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gIGNvbnN0IHlhcnJheSA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gIGNvbnN0IGJvYXJkID0gW107XG5cbiAgaWYgKGJvYXJkWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4geGFycmF5KSB7XG4gICAgICBmb3IgKGNvbnN0IGogaW4geWFycmF5KSB7XG4gICAgICAgIGNvbnN0IGdyaWRQb3NpdGlvbiA9IHlhcnJheVtpXSArIHhhcnJheVtqXTtcbiAgICAgICAgYm9hcmQucHVzaChncmlkUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJhbmRvbSBwbGFjZW1lbnQgY29kZVxuICBmdW5jdGlvbiBhdXRvUGxhY2VtZW50KCkge1xuICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudCA9IFtdO1xuICAgIGNvbnN0IHJhbmROdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgIHJhbmRvbVBsYWNlbWVudC5wdXNoKGJvYXJkW3JhbmROdW1dKTtcbiAgICBjb25zdCB6ZXJvb3JvbmUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgIGlmICh6ZXJvb3JvbmUgPT09IDApIHtcbiAgICAgIHJhbmRvbVBsYWNlbWVudC5wdXNoKFwicmlnaHRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmRvbVBsYWNlbWVudC5wdXNoKFwidXBcIik7XG4gICAgfVxuICAgIHJldHVybiByYW5kb21QbGFjZW1lbnQ7XG4gIH1cblxuICAvLyBQMSAvIGh1bWFuIGNvZGVcbiAgaWYgKHBsYXllck5hbWUgPT09IFwiUDFcIiAmJiBwbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwcy5sZW5ndGggPCA1KSB7XG4gICAgbGV0IHN0b3BwZXIgPSAwO1xuICAgIGNvbnN0IHNoaXBzVG9QbGFjZSA9IFtTaGlwKFwiY2FycmllclAxXCIsIDUpLCBTaGlwKFwiYmF0dGxlc2hpcFAxXCIsIDQpLCBTaGlwKFwiY3J1aXNlclAxXCIsIDMpLCBTaGlwKFwic3VibWFyaW5lUDFcIiwgMyksIFNoaXAoXCJwYXRyb2xQMVwiLCAyKV07XG4gICAgd2hpbGUgKHBsYXllckJvYXJkLnBsYXllclNoaXBzLmxlbmd0aCA8IDUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudHMgPSBhdXRvUGxhY2VtZW50KCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcHNUb1BsYWNlW3BsYXllckJvYXJkLnBsYXllclNoaXBzLmxlbmd0aF07XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgcmFuZG9tUGxhY2VtZW50c1swXSwgcmFuZG9tUGxhY2VtZW50c1sxXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHN0b3BwZXIrKztcbiAgICAgICAgaWYgKHN0b3BwZXIgPiAxMDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFAyIGNvZGVcbiAgaWYgKHBsYXllck5hbWUgPT09IFwiUDJcIiAmJiBwbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwcy5sZW5ndGggPCA1KSB7XG4gICAgbGV0IHN0b3BwZXIgPSAwO1xuICAgIGNvbnN0IHNoaXBzVG9QbGFjZSA9IFtTaGlwKFwiY2FycmllclAyXCIsIDUpLCBTaGlwKFwiYmF0dGxlc2hpcFAyXCIsIDQpLCBTaGlwKFwiY3J1aXNlclAyXCIsIDMpLCBTaGlwKFwic3VibWFyaW5lUDJcIiwgMyksIFNoaXAoXCJwYXRyb2xQMlwiLCAyKV07XG4gICAgd2hpbGUgKHBsYXllckJvYXJkLnBsYXllclNoaXBzLmxlbmd0aCA8IDUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbVBsYWNlbWVudHMgPSBhdXRvUGxhY2VtZW50KCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcHNUb1BsYWNlW3BsYXllckJvYXJkLnBsYXllclNoaXBzLmxlbmd0aF07XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgcmFuZG9tUGxhY2VtZW50c1swXSwgcmFuZG9tUGxhY2VtZW50c1sxXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHN0b3BwZXIrKztcbiAgICAgICAgaWYgKHN0b3BwZXIgPiAxMDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhdmUgdGhlIEFJIHNob290IGEgcmFuZG9tIGxvY2F0aW9uXG4gIGZ1bmN0aW9uIEFJc2hvb3QoKSB7XG4gICAgY29uc3QgcmFuZE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmxlbmd0aCk7XG4gICAgY29uc3QgcmFuZFNob3QgPSBib2FyZFtyYW5kTnVtXTtcbiAgICBib2FyZC5zcGxpY2UocmFuZE51bSwgMSk7XG4gICAgcmV0dXJuIHJhbmRTaG90O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBBSXNob290LFxuICAgIGF1dG9QbGFjZW1lbnQsXG4gICAgTmFtZTogcGxheWVyTmFtZSxcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9tYWluLmpzXCI7XG5pbXBvcnQgXCIuL2dhbWUuanNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==