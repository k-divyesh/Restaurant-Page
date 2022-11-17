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
function removeMain() {
    var main = document.querySelector("main");
    main.remove()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeMain);

/***/ }),

/***/ "./src/loadContact.js":
/*!****************************!*\
  !*** ./src/loadContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createInfo() {
    var main = document.createElement("main");
    var div1 = document.createElement("div");
    div1.innerHTML = '<span class="material-symbols-outlined">call</span> +63 933 823 4888';
    main.append(div1);
    var div2 = document.createElement("div");
    div2.innerHTML = '<span class="material-symbols-rounded">location_on</span> Gapan City, Nueva Ecija, Philippines';
    main.append(div2);
    var div3 = document.createElement("div");
    div3.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15398.020634478684!2d120.93710043955076!3d15.240223200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33971f1cde05c7cf%3A0x1acdd693c4452382!2sFeliza&#39;s%20Food%20House!5e0!3m2!1sen!2sae!4v1668680238889!5m2!1sen!2sae" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    main.append(div3);
    main.setAttribute("id", "contact");
    return main;
}

function loadContact() {
    const content = document.getElementById("content")
    content.append(createInfo());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

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
    heading.innerHTML = "Feliza's Food House";
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
    content.classList.add("viewheight") /* for gradient */
    content.appendChild(createHeader());
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);


/***/ }),

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeroText() {
    var main = document.createElement("main");
    var h2 = document.createElement("h2");
    h2.innerHTML = "Where every flavor tells a story<br><a class='findOutMore'>find out more...</a>";
    main.append(h2);
    main.setAttribute("id", "home")
    return main;
}

function loadHome() {
    const content = document.getElementById("content")
    content.append(createHeroText());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
    var main = document.createElement("main")
    const menuTitles = ["Starters", "Main Course", "Dessert"]
    const starterList = ["Cheese Sticks", "Sizzling Sisig", "Tikoy", "Fried Okra"]
    const mainCourseList = ["Abodo", "Kare Kare", "Sinigang", "Pancit Guisado", "Fried Lumpia", "Ginataang Gulay"];
    const dessertList = ["Halo Halo", "Leche Flan", ];
    const menuDishes = [starterList, mainCourseList, dessertList];

    for(let i=0; i<menuTitles.length; i++) {
        var title = document.createElement("h3")
        title.innerText = menuTitles[i];
        main.append(title)
        menuDishes[i].forEach(element => {
            var dish = document.createElement("h5")
            dish.innerText = element;
            main.append(dish)
        });
    }
    main.setAttribute("id", "menu")
    return main;
}

function loadMenu() {
    const content = document.getElementById("content")
    content.appendChild(createMenu());
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

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
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");
/* harmony import */ var _loadContact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadContact */ "./src/loadContact.js");








function usePercentage(){
    var content = document.querySelector("#content")
    if (content.classList.contains("viewheight")) {
        content.classList.add("percentage")
        content.classList.remove("viewheight")
    }
}

function useViewHeight(){
    var content = document.querySelector("#content")
    if (content.classList.contains("percentage")) {
        content.classList.add("viewheight")
        content.classList.remove("percentage")
    }
}


function action(funCall){
    (0,_clearMain__WEBPACK_IMPORTED_MODULE_1__["default"])()
    funCall;
}

function addNavEvents() {
    const HOME = document.querySelector(".HOME")
    const MENU = document.querySelector(".MENU")
    const CONTACT = document.querySelector(".CONTACT")
    const findOutMore = document.querySelector(".findOutMore")

    HOME.addEventListener("click", function(){
        action((0,_loadHome__WEBPACK_IMPORTED_MODULE_2__["default"])());
        useViewHeight();
    })
    MENU.addEventListener("click", function(){
        action((0,_loadMenu__WEBPACK_IMPORTED_MODULE_3__["default"])());
        usePercentage();
    })
    CONTACT.addEventListener("click", function(){
        action((0,_loadContact__WEBPACK_IMPORTED_MODULE_4__["default"])())
        useViewHeight();
    })
    findOutMore.addEventListener("click", function(){
        action((0,_loadContact__WEBPACK_IMPORTED_MODULE_4__["default"])());
        usePercentage();
    })
}

(0,_loadHead__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_loadHome__WEBPACK_IMPORTED_MODULE_2__["default"])();
addNavEvents()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDTHpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZQQUE2UCwyR0FBMkc7QUFDeFc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNwQjFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQyxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNkdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsUUFBUTs7Ozs7O1VDNUJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNDO0FBQ0o7QUFDQztBQUNNOzs7O0FBSXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFEQUFRO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxxREFBUTtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsd0RBQVc7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLHdEQUFXO0FBQzFCO0FBQ0EsS0FBSztBQUNMOztBQUVBLHFEQUFVO0FBQ1YscURBQVE7QUFDUixjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyTWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZENvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIZWFkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbW92ZU1haW4oKSB7XG4gICAgdmFyIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBtYWluLnJlbW92ZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZU1haW47IiwiZnVuY3Rpb24gY3JlYXRlSW5mbygpIHtcbiAgICB2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIHZhciBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYxLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jYWxsPC9zcGFuPiArNjMgOTMzIDgyMyA0ODg4JztcbiAgICBtYWluLmFwcGVuZChkaXYxKTtcbiAgICB2YXIgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Mi5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIj5sb2NhdGlvbl9vbjwvc3Bhbj4gR2FwYW4gQ2l0eSwgTnVldmEgRWNpamEsIFBoaWxpcHBpbmVzJztcbiAgICBtYWluLmFwcGVuZChkaXYyKTtcbiAgICB2YXIgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2My5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNTM5OC4wMjA2MzQ0Nzg2ODQhMmQxMjAuOTM3MTAwNDM5NTUwNzYhM2QxNS4yNDAyMjMyMDAwMDAwMDQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDMzOTcxZjFjZGUwNWM3Y2YlM0EweDFhY2RkNjkzYzQ0NTIzODIhMnNGZWxpemEmIzM5O3MlMjBGb29kJTIwSG91c2UhNWUwITNtMiExc2VuITJzYWUhNHYxNjY4NjgwMjM4ODg5ITVtMiExc2VuITJzYWVcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+JztcbiAgICBtYWluLmFwcGVuZChkaXYzKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZUluZm8oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIHZhciBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIuYXBwZW5kKGgxKTtcbiAgICB2YXIgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIkZlbGl6YSdzIEZvb2QgSG91c2VcIjtcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuL2luZGV4Lmh0bWxcIilcbiAgICBoMS5hcHBlbmQoaGVhZGluZylcbiAgICBcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsaW5rcyk7XG4gICAgbGlua3Muc2V0QXR0cmlidXRlKFwiaWRcIixcImxpbmtzXCIpXG5cbiAgICB2YXIgbGlua3NBcnIgPSBbXCJIT01FXCIsIFwiTUVOVVwiLCBcIkNPTlRBQ1RcIl07XG4gICAgbGlua3NBcnIuZm9yRWFjaChlbGVtZW50PT4ge1xuICAgICAgICB2YXIgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgICAgIGxpbmtzLmFwcGVuZENoaWxkKGg0KVxuICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICAgIGg0LmFwcGVuZENoaWxkKGEpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gZWxlbWVudDsgICAgICAgIFxuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJsaW5rXCIsIGAke2VsZW1lbnR9YClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwidmlld2hlaWdodFwiKSAvKiBmb3IgZ3JhZGllbnQgKi9cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSGVhZGVyO1xuIiwiZnVuY3Rpb24gY3JlYXRlSGVyb1RleHQoKSB7XG4gICAgdmFyIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICB2YXIgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIuaW5uZXJIVE1MID0gXCJXaGVyZSBldmVyeSBmbGF2b3IgdGVsbHMgYSBzdG9yeTxicj48YSBjbGFzcz0nZmluZE91dE1vcmUnPmZpbmQgb3V0IG1vcmUuLi48L2E+XCI7XG4gICAgbWFpbi5hcHBlbmQoaDIpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbiAgICBjb250ZW50LmFwcGVuZChjcmVhdGVIZXJvVGV4dCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICB2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpXG4gICAgY29uc3QgbWVudVRpdGxlcyA9IFtcIlN0YXJ0ZXJzXCIsIFwiTWFpbiBDb3Vyc2VcIiwgXCJEZXNzZXJ0XCJdXG4gICAgY29uc3Qgc3RhcnRlckxpc3QgPSBbXCJDaGVlc2UgU3RpY2tzXCIsIFwiU2l6emxpbmcgU2lzaWdcIiwgXCJUaWtveVwiLCBcIkZyaWVkIE9rcmFcIl1cbiAgICBjb25zdCBtYWluQ291cnNlTGlzdCA9IFtcIkFib2RvXCIsIFwiS2FyZSBLYXJlXCIsIFwiU2luaWdhbmdcIiwgXCJQYW5jaXQgR3Vpc2Fkb1wiLCBcIkZyaWVkIEx1bXBpYVwiLCBcIkdpbmF0YWFuZyBHdWxheVwiXTtcbiAgICBjb25zdCBkZXNzZXJ0TGlzdCA9IFtcIkhhbG8gSGFsb1wiLCBcIkxlY2hlIEZsYW5cIiwgXTtcbiAgICBjb25zdCBtZW51RGlzaGVzID0gW3N0YXJ0ZXJMaXN0LCBtYWluQ291cnNlTGlzdCwgZGVzc2VydExpc3RdO1xuXG4gICAgZm9yKGxldCBpPTA7IGk8bWVudVRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gbWVudVRpdGxlc1tpXTtcbiAgICAgICAgbWFpbi5hcHBlbmQodGl0bGUpXG4gICAgICAgIG1lbnVEaXNoZXNbaV0uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHZhciBkaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXG4gICAgICAgICAgICBkaXNoLmlubmVyVGV4dCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBtYWluLmFwcGVuZChkaXNoKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIilcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSGVhZGVyIGZyb20gXCIuL2xvYWRIZWFkXCI7XG5pbXBvcnQgcmVtb3ZlTWFpbiBmcm9tIFwiLi9jbGVhck1haW5cIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9sb2FkSG9tZVwiXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbG9hZE1lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9sb2FkQ29udGFjdFwiO1xuXG5cblxuZnVuY3Rpb24gdXNlUGVyY2VudGFnZSgpe1xuICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG4gICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlld2hlaWdodFwiKSkge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwZXJjZW50YWdlXCIpXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcInZpZXdoZWlnaHRcIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVzZVZpZXdIZWlnaHQoKXtcbiAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuICAgIGlmIChjb250ZW50LmNsYXNzTGlzdC5jb250YWlucyhcInBlcmNlbnRhZ2VcIikpIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwidmlld2hlaWdodFwiKVxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwZXJjZW50YWdlXCIpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFjdGlvbihmdW5DYWxsKXtcbiAgICByZW1vdmVNYWluKClcbiAgICBmdW5DYWxsO1xufVxuXG5mdW5jdGlvbiBhZGROYXZFdmVudHMoKSB7XG4gICAgY29uc3QgSE9NRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuSE9NRVwiKVxuICAgIGNvbnN0IE1FTlUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1FTlVcIilcbiAgICBjb25zdCBDT05UQUNUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5DT05UQUNUXCIpXG4gICAgY29uc3QgZmluZE91dE1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmRPdXRNb3JlXCIpXG5cbiAgICBIT01FLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBhY3Rpb24obG9hZEhvbWUoKSk7XG4gICAgICAgIHVzZVZpZXdIZWlnaHQoKTtcbiAgICB9KVxuICAgIE1FTlUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGFjdGlvbihsb2FkTWVudSgpKTtcbiAgICAgICAgdXNlUGVyY2VudGFnZSgpO1xuICAgIH0pXG4gICAgQ09OVEFDVC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgYWN0aW9uKGxvYWRDb250YWN0KCkpXG4gICAgICAgIHVzZVZpZXdIZWlnaHQoKTtcbiAgICB9KVxuICAgIGZpbmRPdXRNb3JlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBhY3Rpb24obG9hZENvbnRhY3QoKSk7XG4gICAgICAgIHVzZVBlcmNlbnRhZ2UoKTtcbiAgICB9KVxufVxuXG5sb2FkSGVhZGVyKCk7XG5sb2FkSG9tZSgpO1xuYWRkTmF2RXZlbnRzKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=