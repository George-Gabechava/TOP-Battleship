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
  margin-right: 3vmin;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;;EAEb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,sBAAsB;;EAEtB,uBAAuB;EACvB,mBAAmB;;EAEnB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;AACrB","sourcesContent":["body {\n  background-color: lightgray;\n}\n\n#buttonContain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n#container {\n  display: flex;\n  \n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.gameButtons {\n  padding: 10px;\n}\n\n.board {\n  display: flex;\n  justify-content: center;\n  width: 50vmin;\n  margin: 1.5vmin;\n}\n\n.cell {\n  background-color: lightcyan;\n  height: 5vmin;\n  width: 5vmin;\n  border: 2px solid lightblue;\n  box-sizing: border-box;\n}\n\n.cell:hover {\n  background-color: lightcoral;\n}\n\n.ylabel {\n  display: flex;\n  background-color: lightgray;\n  height: 5vmin;\n  width: 5vmin;\n  border: 2px solid gray;\n\n  justify-content: center;\n  align-items: center;\n\n  box-sizing: border-box;\n}\n\n.shotMissed {\n  background-color: blue;\n}\n\n.shotHit {\n  background-color: darkred;\n}\n\nfooter {\n  background-color: gray;\n  padding-top: 1vmin;\n  padding-bottom: 1vmin;\n  color: white;\n  text-align: center;\n}\n\n#footer a:link {\n  color: lightblue;\n}\n\n#footer a:visited {\n  color: salmon;\n}\n\n.containsShip {\n  background-color: gray;\n}\n\n.shipSunkUI {\n  font-size: large;\n}\n\n.shipSunkUIisSunk {\n  font-size: large;\n  color: red;\n}\n\n.shipStatusUI {\n  display: flex;\n  flex-direction: column;\n  margin-left: 3vmin;\n  margin-right: 3vmin;\n}"],"sourceRoot":""}]);
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

// Function to create the UI for gameplay
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

// Display winner status
const gameStatusMessage = document.getElementById("gameStatus");

// check if the game is over once all ships are sunk
function checkGameOver(shotPlayer) {
  let shipsSunk = 0;
  for (let i = 0; i < 5; i++) {
    if (shotPlayer.playerBoard.playerShips[i].sunk === true) {
      shipsSunk += 1;
    }
  }
  // Game Over message once all ships of a player are sunk
  if (shipsSunk === 5) {
    if (currentTurn === "P1") {
      gameStatusMessage.textContent = "Game over! Player 2 has won!";

      // Change current turn to stop the game
      currentTurn = "";
    } else {
      gameStatusMessage.textContent = "Game over! Player 1 has won!";
      currentTurn = "";
    }
  }
}

// Update ship sunk indicator
function checkUpdateShipUI(shotPlayer) {
  // Player 1 ship sunk legend
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

  // Player 2 ship sunk legend
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

// New Game, refresh all UI clases
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
  gameStatusMessage.textContent = "The game is in progress.";

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

// Ship object
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

// Make sure the ship placement is valid
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

// Gameboard object for each player
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

  // Place the ship on the board
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

// Rules for each player
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxVQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDelJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjs7Ozs7OztVQzVObkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuI2J1dHRvbkNvbnRhaW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgXG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lQnV0dG9ucyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTB2bWluO1xuICBtYXJnaW46IDEuNXZtaW47XG59XG5cbi5jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjeWFuO1xuICBoZWlnaHQ6IDV2bWluO1xuICB3aWR0aDogNXZtaW47XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4ueWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBoZWlnaHQ6IDV2bWluO1xuICB3aWR0aDogNXZtaW47XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNob3RNaXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4uc2hvdEhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctdG9wOiAxdm1pbjtcbiAgcGFkZGluZy1ib3R0b206IDF2bWluO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Zvb3RlciBhOmxpbmsge1xuICBjb2xvcjogbGlnaHRibHVlO1xufVxuXG4jZm9vdGVyIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiBzYWxtb247XG59XG5cbi5jb250YWluc1NoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4uc2hpcFN1bmtVSSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5zaGlwU3Vua1VJaXNTdW5rIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNoaXBTdGF0dXNVSSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAzdm1pbjtcbiAgbWFyZ2luLXJpZ2h0OiAzdm1pbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTs7RUFFYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjs7RUFFdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbiNidXR0b25Db250YWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVCdXR0b25zIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNTB2bWluO1xcbiAgbWFyZ2luOiAxLjV2bWluO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxuICBoZWlnaHQ6IDV2bWluO1xcbiAgd2lkdGg6IDV2bWluO1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRibHVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnlsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgaGVpZ2h0OiA1dm1pbjtcXG4gIHdpZHRoOiA1dm1pbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2hvdE1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2hvdEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIHBhZGRpbmctdG9wOiAxdm1pbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxdm1pbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciBhOmxpbmsge1xcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuI2Zvb3RlciBhOnZpc2l0ZWQge1xcbiAgY29sb3I6IHNhbG1vbjtcXG59XFxuXFxuLmNvbnRhaW5zU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc2hpcFN1bmtVSSB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uc2hpcFN1bmtVSWlzU3VuayB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnNoaXBTdGF0dXNVSSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1sZWZ0OiAzdm1pbjtcXG4gIG1hcmdpbi1yaWdodDogM3ZtaW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH0gPSByZXF1aXJlKFwiLi9tYWluXCIpO1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIFVJIGZvciBnYW1lcGxheVxuZnVuY3Rpb24gbWFrZUdyaWQocGxheWVyKSB7XG4gIGNvbnN0IGN1cnJlbnROYW1lID0gcGxheWVyLk5hbWU7XG5cbiAgY29uc3QgYm9hcmRQbGF5ZXJVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBib2FyZCR7Y3VycmVudE5hbWV9YCk7XG5cbiAgY29uc3QgYm9hcmRVSSA9IHBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZDtcbiAgLy8gTm90ZSB0byBzZWxmLCBJZiBJIG5lZWQgdG8gc2VwZXJhdGUga2V5cyBhbmQgdmFsdWVzLCB1c2U6XG4gIC8vIGNvbnN0IGtleXNQMSA9IE9iamVjdC5rZXlzKGJvYXJkVUkpO1xuICAvLyBjb25zdCB2YWx1ZXNQMSA9IE9iamVjdC52YWx1ZXMoYm9hcmRVSSk7XG5cbiAgZm9yIChsZXQgY29sID0gMDsgY29sIDw9IDEwOyBjb2wrKykge1xuICAgIC8vIENyZWF0ZSBhIGNlbGwgZWxlbWVudFxuICAgIGNvbnN0IGNvbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIC8vIEFkZCBhIGNsYXNzIGZvciBzdHlsaW5nXG4gICAgY29sRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29sXCIpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgLy8gY29sdW1uIG51bWJlciB0byBhbHBoYWJldCBmb3J1bWxhXG4gICAgICBjb25zdCBudW1Ub0FscGggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdyArIFwiQVwiLmNoYXJDb2RlQXQoMCkpO1xuICAgICAgaWYgKHJvdyA9PT0gMCAmJiBjb2wgPT09IDApIHtcbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwieWxhYmVsXCIpO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgY2VsbCB0byB0aGUgY29sXG4gICAgICAgIGNvbEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbEVsZW1lbnQpO1xuICAgICAgICBib2FyZFBsYXllclVJLmFwcGVuZENoaWxkKGNvbEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAocm93ID09PSAwICYmIGNvbCA+IDApIHtcbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwieWxhYmVsXCIpO1xuXG4gICAgICAgIC8vIEFkZCBzb21lIGNvbnRlbnQgdG8gdGhlIGNlbGxcbiAgICAgICAgY2VsbEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtjb2x9YDtcblxuICAgICAgICBjb2xFbGVtZW50LmFwcGVuZENoaWxkKGNlbGxFbGVtZW50KTtcbiAgICAgICAgYm9hcmRQbGF5ZXJVSS5hcHBlbmRDaGlsZChjb2xFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2wgPT09IDApIHtcbiAgICAgICAgY29uc3QgY2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwieWxhYmVsXCIpO1xuXG4gICAgICAgIGNlbGxFbGVtZW50LnRleHRDb250ZW50ID0gYCR7bnVtVG9BbHBofWA7XG5cbiAgICAgICAgY29sRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoY29sID4gMCkge1xuICAgICAgICBjb25zdCBjZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuXG4gICAgICAgIC8vIFNldCB1bmlxdWUgY2VsbCBJRFxuICAgICAgICBjZWxsRWxlbWVudC5pZCA9IGAke251bVRvQWxwaH0ke2NvbH0ke2N1cnJlbnROYW1lfWA7XG5cbiAgICAgICAgY29uc3QgY3VycmVudENlbGwgPSBgJHtudW1Ub0FscGh9JHtjb2x9YDtcblxuICAgICAgICAvLyBDaGVjayBpZiBjdXJyZW50IGNlbGwgY29udGFpbnMgYSBzaGlwICYgY2hhbmdlIGl0cyBjb2xvclxuICAgICAgICBpZiAoY3VycmVudE5hbWUgPT09IFwiUDFcIiAmJiBib2FyZFVJW2N1cnJlbnRDZWxsXSA9PT0gXCJ1bmhpdCBzaGlwXCIpIHtcbiAgICAgICAgICBjZWxsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbnNTaGlwXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFwcGVuZCB0aGUgY29sIHRvIHRoZSBncmlkIGNvbnRhaW5lclxuICAgIGJvYXJkUGxheWVyVUkuYXBwZW5kQ2hpbGQoY29sRWxlbWVudCk7XG4gIH1cbn1cblxuLy8gU3RhcnQgYSBnYW1lXG5sZXQgY3VycmVudFR1cm47XG5sZXQgUDE7XG5sZXQgUDI7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgUDEgPSBQbGF5ZXIoXCJQMVwiKTtcbiAgUDIgPSBQbGF5ZXIoXCJQMlwiKTtcbiAgbWFrZUdyaWQoUDEpO1xuICBtYWtlR3JpZChQMik7XG5cbiAgY3VycmVudFR1cm4gPSBcIlAxXCI7XG59XG5cbi8vIE1ha2UgdGhlIGNlbGxzIGludGVyYXRpdmVcbmxldCBjZWxscztcbmZ1bmN0aW9uIGVuYWJsZUludGVyYWN0aW9uKCkge1xuICBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIEhpZ2hsaWdodCBvciB1cGRhdGUgdGhlIGNlbGwgYmFzZWQgb24gaW50ZXJhY3Rpb25cbiAgICAgIGNvbnN0IHNlbGVjdGVkQ2VsbCA9IGNlbGw7XG4gICAgICB0YWtlU2hvdChzZWxlY3RlZENlbGwpO1xuICAgIH0pO1xuICB9KTtcbn1cbnN0YXJ0R2FtZSgpO1xuZW5hYmxlSW50ZXJhY3Rpb24oKTtcblxuLy8gRGlzcGxheSB3aW5uZXIgc3RhdHVzXG5jb25zdCBnYW1lU3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVN0YXR1c1wiKTtcblxuLy8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgb3ZlciBvbmNlIGFsbCBzaGlwcyBhcmUgc3Vua1xuZnVuY3Rpb24gY2hlY2tHYW1lT3ZlcihzaG90UGxheWVyKSB7XG4gIGxldCBzaGlwc1N1bmsgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGlmIChzaG90UGxheWVyLnBsYXllckJvYXJkLnBsYXllclNoaXBzW2ldLnN1bmsgPT09IHRydWUpIHtcbiAgICAgIHNoaXBzU3VuayArPSAxO1xuICAgIH1cbiAgfVxuICAvLyBHYW1lIE92ZXIgbWVzc2FnZSBvbmNlIGFsbCBzaGlwcyBvZiBhIHBsYXllciBhcmUgc3Vua1xuICBpZiAoc2hpcHNTdW5rID09PSA1KSB7XG4gICAgaWYgKGN1cnJlbnRUdXJuID09PSBcIlAxXCIpIHtcbiAgICAgIGdhbWVTdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gXCJHYW1lIG92ZXIhIFBsYXllciAyIGhhcyB3b24hXCI7XG5cbiAgICAgIC8vIENoYW5nZSBjdXJyZW50IHR1cm4gdG8gc3RvcCB0aGUgZ2FtZVxuICAgICAgY3VycmVudFR1cm4gPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lU3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiR2FtZSBvdmVyISBQbGF5ZXIgMSBoYXMgd29uIVwiO1xuICAgICAgY3VycmVudFR1cm4gPSBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVcGRhdGUgc2hpcCBzdW5rIGluZGljYXRvclxuZnVuY3Rpb24gY2hlY2tVcGRhdGVTaGlwVUkoc2hvdFBsYXllcikge1xuICAvLyBQbGF5ZXIgMSBzaGlwIHN1bmsgbGVnZW5kXG4gIGlmIChzaG90UGxheWVyLk5hbWUgPT09IFwiUDFcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBpZiAoc2hvdFBsYXllci5wbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwc1tpXS5zdW5rID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcDBQMVVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwMFAxXCIpO1xuICAgICAgICAgIHNoaXAwUDFVSS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFN1bmtVSVwiKTtcbiAgICAgICAgICBzaGlwMFAxVUkuY2xhc3NMaXN0LmFkZChcInNoaXBTdW5rVUlpc1N1bmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICBjb25zdCBzaGlwMVAxVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAxUDFcIik7XG4gICAgICAgICAgc2hpcDFQMVVJLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwU3Vua1VJXCIpO1xuICAgICAgICAgIHNoaXAxUDFVSS5jbGFzc0xpc3QuYWRkKFwic2hpcFN1bmtVSWlzU3Vua1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gMikge1xuICAgICAgICAgIGNvbnN0IHNoaXAyUDFVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcDJQMVwiKTtcbiAgICAgICAgICBzaGlwMlAxVUkuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBTdW5rVUlcIik7XG4gICAgICAgICAgc2hpcDJQMVVJLmNsYXNzTGlzdC5hZGQoXCJzaGlwU3Vua1VJaXNTdW5rXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcDNQMVVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwM1AxXCIpO1xuICAgICAgICAgIHNoaXAzUDFVSS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFN1bmtVSVwiKTtcbiAgICAgICAgICBzaGlwM1AxVUkuY2xhc3NMaXN0LmFkZChcInNoaXBTdW5rVUlpc1N1bmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IDQpIHtcbiAgICAgICAgICBjb25zdCBzaGlwNFAxVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXA0UDFcIik7XG4gICAgICAgICAgc2hpcDRQMVVJLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwU3Vua1VJXCIpO1xuICAgICAgICAgIHNoaXA0UDFVSS5jbGFzc0xpc3QuYWRkKFwic2hpcFN1bmtVSWlzU3Vua1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFBsYXllciAyIHNoaXAgc3VuayBsZWdlbmRcbiAgaWYgKHNob3RQbGF5ZXIuTmFtZSA9PT0gXCJQMlwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGlmIChzaG90UGxheWVyLnBsYXllckJvYXJkLnBsYXllclNoaXBzW2ldLnN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICBjb25zdCBzaGlwMFAxVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAwUDJcIik7XG4gICAgICAgICAgc2hpcDBQMVVJLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwU3Vua1VJXCIpO1xuICAgICAgICAgIHNoaXAwUDFVSS5jbGFzc0xpc3QuYWRkKFwic2hpcFN1bmtVSWlzU3Vua1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgIGNvbnN0IHNoaXAxUDJVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcDFQMlwiKTtcbiAgICAgICAgICBzaGlwMVAyVUkuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBTdW5rVUlcIik7XG4gICAgICAgICAgc2hpcDFQMlVJLmNsYXNzTGlzdC5hZGQoXCJzaGlwU3Vua1VJaXNTdW5rXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcDJQMlVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwMlAyXCIpO1xuICAgICAgICAgIHNoaXAyUDJVSS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFN1bmtVSVwiKTtcbiAgICAgICAgICBzaGlwMlAyVUkuY2xhc3NMaXN0LmFkZChcInNoaXBTdW5rVUlpc1N1bmtcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgICBjb25zdCBzaGlwM1AyVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAzUDJcIik7XG4gICAgICAgICAgc2hpcDNQMlVJLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwU3Vua1VJXCIpO1xuICAgICAgICAgIHNoaXAzUDJVSS5jbGFzc0xpc3QuYWRkKFwic2hpcFN1bmtVSWlzU3Vua1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gNCkge1xuICAgICAgICAgIGNvbnN0IHNoaXA0UDJVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcDRQMlwiKTtcbiAgICAgICAgICBzaGlwNFAyVUkuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBTdW5rVUlcIik7XG4gICAgICAgICAgc2hpcDRQMlVJLmNsYXNzTGlzdC5hZGQoXCJzaGlwU3Vua1VJaXNTdW5rXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEltcGxlbWVudCBhIHRha2UgYSBzaG90IGludGVyYWN0aXZlIGZ1bmN0aW9uXG5mdW5jdGlvbiB0YWtlU2hvdChjdXJyZW50Q2VsbCkge1xuICAvLyBWYXJpYWJsZXMgZm9yIHNob3QgbG9jYXRpb24gYW5kIHNob3QgcGxheWVyXG4gIGxldCBzaG90Q29yZDtcbiAgbGV0IHNob290UGxheWVyO1xuXG4gIC8vIElmIFAxIC8gaHVtYW4gdHVyblxuICBpZiAoY3VycmVudENlbGwpIHtcbiAgICBjb25zdCBzaG90SUQgPSBjdXJyZW50Q2VsbC5pZDtcbiAgICAvLyBnZXQgY29vcmRpbmF0ZSAmIHBsYXllclxuICAgIHNob3RDb3JkID0gc2hvdElELnNsaWNlKDAsIDIpO1xuICAgIHNob290UGxheWVyID0gc2hvdElELnNsaWNlKDIpO1xuICAgIGlmIChzaG90SUQubGVuZ3RoID4gNCkge1xuICAgICAgc2hvdENvcmQgPSBzaG90SUQuc2xpY2UoMCwgMyk7XG4gICAgICBzaG9vdFBsYXllciA9IHNob3RJRC5zbGljZSgzKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY3VycmVudFR1cm4gPT09IFwiUDFcIiAmJiBzaG9vdFBsYXllciA9PT0gXCJQMlwiKSB7XG4gICAgY29uc3Qgc2hvb3QgPSBQMi5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHNob3RDb3JkKTtcblxuICAgIGlmIChzaG9vdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIGN1cnJlbnRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaG90TWlzc2VkXCIpO1xuICAgICAgY3VycmVudFR1cm4gPSBcIlAyXCI7XG4gICAgICB0YWtlU2hvdCgpO1xuICAgIH1cblxuICAgIGlmIChzaG9vdCA9PT0gXCJoaXRcIikge1xuICAgICAgY3VycmVudENlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNvbnRhaW5zU2hpcFwiKTtcbiAgICAgIGN1cnJlbnRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaG90SGl0XCIpO1xuICAgICAgY3VycmVudFR1cm4gPSBcIlAyXCI7XG4gICAgICBjaGVja1VwZGF0ZVNoaXBVSShQMik7XG4gICAgICBjaGVja0dhbWVPdmVyKFAyKTtcbiAgICAgIHRha2VTaG90KCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIElmIFAyIC8gQUkgdHVyblxuICBpZiAoY3VycmVudFR1cm4gPT09IFwiUDJcIikge1xuICAgIC8vIEdldCBhIGNvb3JkaW5hdGUgdG8gc2hvb3RcbiAgICBjb25zdCBnZXRUYXJnZXQgPSBQMi5BSXNob290KCk7XG4gICAgLy8gVXNlIHRoYXQgY29vcmRpbmF0ZSB0byBzaG9vdFxuICAgIGNvbnN0IHNob290ID0gUDEucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhnZXRUYXJnZXQpO1xuXG4gICAgLy8gVXBkYXRlIFVJXG4gICAgY3VycmVudENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtnZXRUYXJnZXR9UDFgKTtcbiAgICBpZiAoc2hvb3QgPT09IFwibWlzc1wiKSB7XG4gICAgICBjdXJyZW50Q2VsbC5jbGFzc0xpc3QuYWRkKFwic2hvdE1pc3NlZFwiKTtcbiAgICAgIGN1cnJlbnRUdXJuID0gXCJQMVwiO1xuICAgIH1cblxuICAgIGlmIChzaG9vdCA9PT0gXCJoaXRcIikge1xuICAgICAgY3VycmVudENlbGwuY2xhc3NMaXN0LmFkZChcInNob3RIaXRcIik7XG4gICAgICBjdXJyZW50VHVybiA9IFwiUDFcIjtcbiAgICAgIGNoZWNrVXBkYXRlU2hpcFVJKFAxKTtcbiAgICAgIGNoZWNrR2FtZU92ZXIoUDEpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBOZXcgR2FtZSwgcmVmcmVzaCBhbGwgVUkgY2xhc2VzXG5jb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25OZXdcIik7XG5jb25zdCBzdW5rVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBTdW5rVUlcIik7XG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkUDFVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRQMVwiKTtcbiAgd2hpbGUgKGJvYXJkUDFVSS5oYXNDaGlsZE5vZGVzKCkpIGJvYXJkUDFVSS5yZW1vdmVDaGlsZChib2FyZFAxVUkuZmlyc3RDaGlsZCk7XG5cbiAgY29uc3QgYm9hcmRQMlVJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFAyXCIpO1xuICB3aGlsZSAoYm9hcmRQMlVJLmhhc0NoaWxkTm9kZXMoKSkgYm9hcmRQMlVJLnJlbW92ZUNoaWxkKGJvYXJkUDJVSS5maXJzdENoaWxkKTtcblxuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFN1bmtVSVwiKTtcbiAgfSk7XG5cbiAgc3Vua1VJLmZvckVhY2goKFVJZWxlbWVudCkgPT4ge1xuICAgIFVJZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFN1bmtVSWlzU3Vua1wiKTtcbiAgfSk7XG5cbiAgUDEgPSBQbGF5ZXIoXCJQMVwiKTtcbiAgbWFrZUdyaWQoUDEpO1xuICBQMiA9IFBsYXllcihcIlAyXCIpO1xuICBtYWtlR3JpZChQMik7XG5cbiAgY3VycmVudFR1cm4gPSBcIlAxXCI7XG4gIGdhbWVTdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gXCJUaGUgZ2FtZSBpcyBpbiBwcm9ncmVzcy5cIjtcblxuICBlbmFibGVJbnRlcmFjdGlvbigpO1xufSk7XG4iLCIvLyBTaHV0dGluZyB1cCBlc2xpbnQgYWJvdXQgbXkgZm9yLi4uaW4gbG9vcHM6XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG5cbi8vIFNoaXAgb2JqZWN0XG5mdW5jdGlvbiBTaGlwKHNoaXBOYW1lLCBsZW5ndGgsIHN1bmsgPSBmYWxzZSwgdGltZXNIaXQgPSAwKSB7XG4gIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2hpcE5hbWUsXG4gICAgbGVuZ3RoLFxuICAgIGhpdCxcbiAgICB0aW1lc0hpdCxcbiAgICBpc1N1bmssXG4gICAgc3VuayxcbiAgfTtcbn1cblxuLy8gTWFrZSBzdXJlIHRoZSBzaGlwIHBsYWNlbWVudCBpcyB2YWxpZFxuZnVuY3Rpb24gZmluZEVuZFBvc2l0aW9uKHNoaXBMZW5ndGgsIHN0YXJ0UG9zLCBzaGlwRGlyZWN0aW9uKSB7XG4gIC8vIGZpbmQgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgY29uc3QgeVN0YXJ0UG9zID0gc3RhcnRQb3NbMF07XG4gIGxldCB4U3RhcnRQb3MgPSBzdGFydFBvc1sxXTtcbiAgLy8gYWNjb3VudCBmb3IgdHdvIGRpZ2l0cyBmb3IgeD0xMFxuICBpZiAoc3RhcnRQb3MubGVuZ3RoID4gMikge1xuICAgIHhTdGFydFBvcyA9IFwiMTBcIjtcbiAgfVxuICBsZXQgeEVuZFBvcztcbiAgbGV0IHlFbmRQb3M7XG5cbiAgLy8gZmluZCB0aGUgZW5kIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHNoaXAgZ2l2ZW4gdGhlIGRpcmVjdGlvbiAmIGxlbmd0aFxuICBpZiAoc2hpcERpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgeEVuZFBvcyA9IChOdW1iZXIoeFN0YXJ0UG9zKSArIHNoaXBMZW5ndGggLSAxKTtcbiAgICB5RW5kUG9zID0geVN0YXJ0UG9zO1xuICB9XG4gIGlmIChzaGlwRGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICB4RW5kUG9zID0gTnVtYmVyKHhTdGFydFBvcyk7XG4gICAgeUVuZFBvcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoeVN0YXJ0UG9zLmNoYXJDb2RlQXQoMCkgLSBzaGlwTGVuZ3RoICsgMSk7XG4gIH1cblxuICAvLyBjaGVjayBpZiBlbmQgcG9zaXRpb24gaXMgb3V0IG9mIGJvdW5kc1xuICBpZiAoeEVuZFBvcyA+IDEwIHx8IHlFbmRQb3MgPCBcIkFcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcInNoaXAgY2Fubm90IGJlIHBsYWNlZCBvdXQgb2YgYm91bmRzXCIpO1xuICB9XG5cbiAgY29uc3QgZW5kUG9zID0geUVuZFBvcyArIHhFbmRQb3MudG9TdHJpbmcoKTtcbiAgcmV0dXJuIGVuZFBvcztcbn1cblxuLy8gR2FtZWJvYXJkIG9iamVjdCBmb3IgZWFjaCBwbGF5ZXJcbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgeGFycmF5ID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIl07XG4gIGNvbnN0IHlhcnJheSA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gIGNvbnN0IGJvYXJkID0ge307XG4gIGNvbnN0IHBsYXllclNoaXBzID0gW107XG4gIGlmIChib2FyZFswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChjb25zdCBpIGluIHhhcnJheSkge1xuICAgICAgZm9yIChjb25zdCBqIGluIHlhcnJheSkge1xuICAgICAgICBjb25zdCBncmlkUG9zaXRpb24gPSB5YXJyYXlbaV0gKyB4YXJyYXlbal07XG4gICAgICAgIGJvYXJkW2dyaWRQb3NpdGlvbl0gPSBcImVtcHR5XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUGxhY2UgdGhlIHNoaXAgb24gdGhlIGJvYXJkXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwT2JqLCBzdGFydFBvcywgc2hpcERpcmVjdGlvbiA9IFwicmlnaHRcIikge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwT2JqLmxlbmd0aDtcblxuICAgIC8vIEZpbmQgZW5kIFBvc2l0aW9uIG9mIGN1cnJlbnQgcGxhY2VtZW50LCBlbnN1cmluZyB3ZSBkb24ndCBnbyBvdXQgb2YgYm91bmRzXG4gICAgY29uc3QgZW5kUG9zID0gZmluZEVuZFBvc2l0aW9uKHNoaXBMZW5ndGgsIHN0YXJ0UG9zLCBzaGlwRGlyZWN0aW9uKTtcblxuICAgIGlmIChlbmRQb3MgPT09IG5ldyBFcnJvcihcInNoaXAgY2Fubm90IGJlIHBsYWNlZCBvdXQgb2YgYm91bmRzXCIpKSB7XG4gICAgICByZXR1cm4gZW5kUG9zO1xuICAgIH1cblxuICAgIC8vIE5vdyB1c2luZyBzdGFydFBvcyBhbmQgZW5kUG9zLCBjaGVjayBpZiBzaGlwIHBsYWNlbWVudHMgZG9uJ3Qgb3ZlcmxhcFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudFBvcyA9IGZpbmRFbmRQb3NpdGlvbihpLCBzdGFydFBvcywgc2hpcERpcmVjdGlvbik7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgZG9udCBhbGxvdyBzaGlwcyB0byBiZSBwbGFjZWQgb250b3Agb24gZWFjaG90aGVyXG4gICAgICBpZiAoYm9hcmRbY3VycmVudFBvc10gIT09IFwiZW1wdHlcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW4ndCBwbGFjZSBzaGlwIG9uIGFub3RoZXIgc2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2hpcEdyaWRzID0gW107XG4gICAgLy8gcG9wdWxhdGUgZWFjaCBncmlkIHdpdGggdGhlIHVuaGl0IHNoaXAgcHJvcGVydHkgYW5kIHNoaXAgbmFtZVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudFBvcyA9IGZpbmRFbmRQb3NpdGlvbihpLCBzdGFydFBvcywgc2hpcERpcmVjdGlvbik7XG4gICAgICBzaGlwR3JpZHMucHVzaChjdXJyZW50UG9zKTtcbiAgICAgIGJvYXJkW2N1cnJlbnRQb3NdID0gXCJ1bmhpdCBzaGlwXCI7XG4gICAgfVxuICAgIC8vIEFkZCBncmlkcyB0aGUgc2hpcCBvY2N1cGllcyB0byB0aGUgc2hpcCBwcm9wZXJ0aWVzXG4gICAgc2hpcE9iai5ncmlkcyA9IHNoaXBHcmlkcztcblxuICAgIC8vIEFkZCBzaGlwIHRvIHBsYXllciBzaGlwc1xuICAgIHBsYXllclNoaXBzLnB1c2goc2hpcE9iaik7XG4gIH1cblxuICAvLyBjb2RlIHRvIHJlY2lldmUgYW4gYXR0YWNrIHRoZW4gc2VuZCB0aGUgJ2hpdCcgZnVuY3Rpb24gb3IgcmVjb3JkIGEgbWlzc1xuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGN1cnJlbnRTaG90KSB7XG4gICAgaWYgKGJvYXJkW2N1cnJlbnRTaG90XSA9PT0gXCJzaG90IHNoaXBcIiB8fCBib2FyZFtjdXJyZW50U2hvdF0gPT09IFwic2hvdCB3YXRlclwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhbHJlYWR5IHNob3QgaGVyZVwiKTtcbiAgICB9XG4gICAgaWYgKGJvYXJkW2N1cnJlbnRTaG90XSA9PT0gXCJ1bmhpdCBzaGlwXCIpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBwbGF5ZXJTaGlwcykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcEdyaWRzID0gcGxheWVyU2hpcHNbaV0uZ3JpZHM7XG4gICAgICAgIGlmIChjdXJyZW50U2hpcEdyaWRzLmluY2x1ZGVzKGN1cnJlbnRTaG90KSkge1xuICAgICAgICAgIGJvYXJkW2N1cnJlbnRTaG90XSA9IFwic2hvdCBzaGlwXCI7XG4gICAgICAgICAgcGxheWVyU2hpcHNbaV0uaGl0KCk7XG4gICAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmRbY3VycmVudFNob3RdID0gXCJzaG90IHdhdGVyXCI7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBwbGF5ZXJTaGlwcyxcbiAgfTtcbn1cblxuLy8gUnVsZXMgZm9yIGVhY2ggcGxheWVyXG5mdW5jdGlvbiBQbGF5ZXIocGxheWVyTmFtZSkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIC8vIEdlbmVyYXRlIGJvYXJkXG4gIGNvbnN0IHhhcnJheSA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCJdO1xuICBjb25zdCB5YXJyYXkgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuICBjb25zdCBib2FyZCA9IFtdO1xuXG4gIGlmIChib2FyZFswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChjb25zdCBpIGluIHhhcnJheSkge1xuICAgICAgZm9yIChjb25zdCBqIGluIHlhcnJheSkge1xuICAgICAgICBjb25zdCBncmlkUG9zaXRpb24gPSB5YXJyYXlbaV0gKyB4YXJyYXlbal07XG4gICAgICAgIGJvYXJkLnB1c2goZ3JpZFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSYW5kb20gcGxhY2VtZW50IGNvZGVcbiAgZnVuY3Rpb24gYXV0b1BsYWNlbWVudCgpIHtcbiAgICBjb25zdCByYW5kb21QbGFjZW1lbnQgPSBbXTtcbiAgICBjb25zdCByYW5kTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQubGVuZ3RoKTtcbiAgICByYW5kb21QbGFjZW1lbnQucHVzaChib2FyZFtyYW5kTnVtXSk7XG4gICAgY29uc3QgemVyb29yb25lID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICBpZiAoemVyb29yb25lID09PSAwKSB7XG4gICAgICByYW5kb21QbGFjZW1lbnQucHVzaChcInJpZ2h0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYW5kb21QbGFjZW1lbnQucHVzaChcInVwXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmFuZG9tUGxhY2VtZW50O1xuICB9XG5cbiAgLy8gUDEgLyBodW1hbiBjb2RlXG4gIGlmIChwbGF5ZXJOYW1lID09PSBcIlAxXCIgJiYgcGxheWVyQm9hcmQucGxheWVyU2hpcHMubGVuZ3RoIDwgNSkge1xuICAgIGxldCBzdG9wcGVyID0gMDtcbiAgICBjb25zdCBzaGlwc1RvUGxhY2UgPSBbU2hpcChcImNhcnJpZXJQMVwiLCA1KSwgU2hpcChcImJhdHRsZXNoaXBQMVwiLCA0KSwgU2hpcChcImNydWlzZXJQMVwiLCAzKSwgU2hpcChcInN1Ym1hcmluZVAxXCIsIDMpLCBTaGlwKFwicGF0cm9sUDFcIiwgMildO1xuICAgIHdoaWxlIChwbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwcy5sZW5ndGggPCA1KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByYW5kb21QbGFjZW1lbnRzID0gYXV0b1BsYWNlbWVudCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzVG9QbGFjZVtwbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwcy5sZW5ndGhdO1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoY3VycmVudFNoaXAsIHJhbmRvbVBsYWNlbWVudHNbMF0sIHJhbmRvbVBsYWNlbWVudHNbMV0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzdG9wcGVyKys7XG4gICAgICAgIGlmIChzdG9wcGVyID4gMTAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQMiBjb2RlXG4gIGlmIChwbGF5ZXJOYW1lID09PSBcIlAyXCIgJiYgcGxheWVyQm9hcmQucGxheWVyU2hpcHMubGVuZ3RoIDwgNSkge1xuICAgIGxldCBzdG9wcGVyID0gMDtcbiAgICBjb25zdCBzaGlwc1RvUGxhY2UgPSBbU2hpcChcImNhcnJpZXJQMlwiLCA1KSwgU2hpcChcImJhdHRsZXNoaXBQMlwiLCA0KSwgU2hpcChcImNydWlzZXJQMlwiLCAzKSwgU2hpcChcInN1Ym1hcmluZVAyXCIsIDMpLCBTaGlwKFwicGF0cm9sUDJcIiwgMildO1xuICAgIHdoaWxlIChwbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwcy5sZW5ndGggPCA1KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByYW5kb21QbGFjZW1lbnRzID0gYXV0b1BsYWNlbWVudCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzVG9QbGFjZVtwbGF5ZXJCb2FyZC5wbGF5ZXJTaGlwcy5sZW5ndGhdO1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoY3VycmVudFNoaXAsIHJhbmRvbVBsYWNlbWVudHNbMF0sIHJhbmRvbVBsYWNlbWVudHNbMV0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzdG9wcGVyKys7XG4gICAgICAgIGlmIChzdG9wcGVyID4gMTAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBIYXZlIHRoZSBBSSBzaG9vdCBhIHJhbmRvbSBsb2NhdGlvblxuICBmdW5jdGlvbiBBSXNob290KCkge1xuICAgIGNvbnN0IHJhbmROdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5sZW5ndGgpO1xuICAgIGNvbnN0IHJhbmRTaG90ID0gYm9hcmRbcmFuZE51bV07XG4gICAgYm9hcmQuc3BsaWNlKHJhbmROdW0sIDEpO1xuICAgIHJldHVybiByYW5kU2hvdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGxheWVyQm9hcmQsXG4gICAgQUlzaG9vdCxcbiAgICBhdXRvUGxhY2VtZW50LFxuICAgIE5hbWU6IHBsYXllck5hbWUsXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vbWFpbi5qc1wiO1xuaW1wb3J0IFwiLi9nYW1lLmpzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=