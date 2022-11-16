/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clearMain.js":
/*!**************************!*\
  !*** ./src/clearMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function emptyMain() {
    var main = document.querySelector("main");
    main.remove()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emptyMain);

/***/ }),

/***/ "./src/initalWebsite.js":
/*!******************************!*\
  !*** ./src/initalWebsite.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function createHeroText() {
    var main = document.createElement("main")
    var h2 = document.createElement("h2")
    h2.innerHTML = "Where every flavor tells a story<br><a>find out more...</a>"
    main.append(h2)
    return main;
}

function initializeWebsite() {
    const content = document.getElementById("content")
    content.appendChild(createHeroText());
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/loadHead.js":
/*!*************************!*\
  !*** ./src/loadHead.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
    var header = document.createElement("header");

    var h1 = document.createElement("h1");
    header.append(h1);
    var heading = document.createElement("a")
    heading.innerHTML = "Restaurant";
    heading.setAttribute("href", "./index.html")
    h1.append(heading)
    
    var links = document.createElement("div");
    header.appendChild(links);
    links.setAttribute("id","links")

    var linksArr = ["HOME", "MENU", "CONTACT"];
    linksArr.forEach(element=> {
        var h4 = document.createElement("h4");
        links.appendChild(h4)
        var a = document.createElement("a")
        h4.appendChild(a)
        a.innerHTML = element;        
        a.classList.add("link", `${element}`)
    })

    return header;
}

function loadHeader() {
    const content = document.getElementById("content")
    content.appendChild(createHeader());
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHead */ "./src/loadHead.js");
/* harmony import */ var _clearMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearMain */ "./src/clearMain.js");
/* harmony import */ var _initalWebsite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initalWebsite */ "./src/initalWebsite.js");




(0,_loadHead__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_initalWebsite__WEBPACK_IMPORTED_MODULE_2__["default"])();


function addNavEvents() {
    const HOME = document.querySelector(".HOME")
    // const MENU = document.querySelector(".MENU")
    // const CONTACT = document.querySelector(".CONTACT")

    HOME.addEventListener("click", action((0,_initalWebsite__WEBPACK_IMPORTED_MODULE_2__["default"])()))
    // MENU.addEventListener("click", somefunction)
    // CONTACT.addEventListener("click", somefunction)
}

function action(funCall){
    (0,_clearMain__WEBPACK_IMPORTED_MODULE_1__["default"])()
    funCall;
}

addNavEvents()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNoQmhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQyxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2pDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0Q7QUFDYTs7QUFFaEQscURBQVU7QUFDViwwREFBaUI7OztBQUdqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsMERBQWlCO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksc0RBQVM7QUFDYjtBQUNBOztBQUVBLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2xlYXJNYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0YWxXZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkSGVhZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZW1wdHlNYWluKCkge1xuICAgIHZhciBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgbWFpbi5yZW1vdmUoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbXB0eU1haW47IiwiXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlcm9UZXh0KCkge1xuICAgIHZhciBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIilcbiAgICB2YXIgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICBoMi5pbm5lckhUTUwgPSBcIldoZXJlIGV2ZXJ5IGZsYXZvciB0ZWxscyBhIHN0b3J5PGJyPjxhPmZpbmQgb3V0IG1vcmUuLi48L2E+XCJcbiAgICBtYWluLmFwcGVuZChoMilcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVyb1RleHQoKSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgdmFyIGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci5hcHBlbmQoaDEpO1xuICAgIHZhciBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiUmVzdGF1cmFudFwiO1xuICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4vaW5kZXguaHRtbFwiKVxuICAgIGgxLmFwcGVuZChoZWFkaW5nKVxuICAgIFxuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpbmtzKTtcbiAgICBsaW5rcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibGlua3NcIilcblxuICAgIHZhciBsaW5rc0FyciA9IFtcIkhPTUVcIiwgXCJNRU5VXCIsIFwiQ09OVEFDVFwiXTtcbiAgICBsaW5rc0Fyci5mb3JFYWNoKGVsZW1lbnQ9PiB7XG4gICAgICAgIHZhciBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgbGlua3MuYXBwZW5kQ2hpbGQoaDQpXG4gICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgaDQuYXBwZW5kQ2hpbGQoYSlcbiAgICAgICAgYS5pbm5lckhUTUwgPSBlbGVtZW50OyAgICAgICAgXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZChcImxpbmtcIiwgYCR7ZWxlbWVudH1gKVxuICAgIH0pXG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSGVhZGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhlYWRlciBmcm9tIFwiLi9sb2FkSGVhZFwiO1xuaW1wb3J0IGVtcHR5TWFpbiBmcm9tIFwiLi9jbGVhck1haW5cIlxuaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL2luaXRhbFdlYnNpdGVcIjtcblxubG9hZEhlYWRlcigpO1xuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcblxuXG5mdW5jdGlvbiBhZGROYXZFdmVudHMoKSB7XG4gICAgY29uc3QgSE9NRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuSE9NRVwiKVxuICAgIC8vIGNvbnN0IE1FTlUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1FTlVcIilcbiAgICAvLyBjb25zdCBDT05UQUNUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5DT05UQUNUXCIpXG5cbiAgICBIT01FLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3Rpb24oaW5pdGlhbGl6ZVdlYnNpdGUoKSkpXG4gICAgLy8gTUVOVS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc29tZWZ1bmN0aW9uKVxuICAgIC8vIENPTlRBQ1QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNvbWVmdW5jdGlvbilcbn1cblxuZnVuY3Rpb24gYWN0aW9uKGZ1bkNhbGwpe1xuICAgIGVtcHR5TWFpbigpXG4gICAgZnVuQ2FsbDtcbn1cblxuYWRkTmF2RXZlbnRzKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=