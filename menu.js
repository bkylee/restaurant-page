/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu(){
    //create menu (ul)
    const menuUL = document.createElement('ul');
    const menu = document.createElement('H2');
    menu.setAttribute('id', 'menu');
    menu.textContent = "Menu";
    menu.appendChild(menuUL);

    //create appetizers (ul)
    const appetizersUL = document.createElement('ul');
    const appetizers = document.createElement ('h3');
    appetizersUL.setAttribute('class','apps');
    appetizers.textContent = "Appetizers";
    appetizers.appendChild(appetizersUL);
    menuUL.appendChild(appetizers);

    //appetizers 
    const app1  = document.createElement('li');
    app1.textContent = "App1";
    appetizersUL.appendChild(app1);

    const app2  = document.createElement('li');
    app2.textContent = "App2";
    appetizersUL.appendChild(app2);

    const app3  = document.createElement('li');
    app3.textContent = "App3";
    appetizersUL.appendChild(app3);

    const app4  = document.createElement('li');
    app4.textContent = "App4";
    appetizersUL.appendChild(app4);

    const app5  = document.createElement('li');
    app5.textContent = "App5";
    appetizersUL.appendChild(app5);
    
    //create mains (ul)
    const mainsUL = document.createElement('ul');
    mainsUL.setAttribute('class','mains');
    
    const mains = document.createElement('h3');
    mains.textContent= "Mains";
    mains.appendChild(mainsUL);

    menuUL.appendChild(mains);

    //mains
    const main1  = document.createElement('li');
    main1.textContent = "Main1";
    mainsUL.appendChild(main1);

    const main2  = document.createElement('li');
    main2.textContent = "Main2";
    mainsUL.appendChild(main2);
    
    const main3  = document.createElement('li');
    main3.textContent = "Main3";
    mainsUL.appendChild(main3);
    
    const main4  = document.createElement('li');
    main4.textContent = "Main4";
    mainsUL.appendChild(main4);
    
    const main5  = document.createElement('li');
    main1.textContent = "Main5";
    mainsUL.appendChild(main5);

    //create drinks (ul)
    const drinksUL = document.createElement('ul');
    drinksUL.setAttribute('class','drinks');
    const drinks = document.createElement('h3');
    drinks.textContent= "Drinks";
    drinks.appendChild(drinksUL);
    menuUL.appendChild(drinks);

    //drinks
    const drink1  = document.createElement('li');
    drink1.textContent = "Drink1";
    drinksUL.appendChild(drink1);

    const drink2  = document.createElement('li');
    drink2.textContent = "Drink2";
    drinksUL.appendChild(drink2);

    const drink3  = document.createElement('li');
    drink3.textContent = "Drink3";
    drinksUL.appendChild(drink3);
    
    const drink4  = document.createElement('li');
    drink4.textContent = "Drink4";
    drinksUL.appendChild(drink4);
    
    const drink5  = document.createElement('li');
    drink1.textContent = "Drink5";
    drinksUL.appendChild(drink5);

    //create desserts (ul)
    const dessertsUL = document.createElement('ul');
    const desserts = document.createElement('h3');
    desserts.setAttribute('class','desserts');
    desserts.textContent= "Desserts";
    desserts.appendChild(dessertsUL);
    menu.appendChild(desserts);

    //desserts
    const dessert1  = document.createElement('li');
    dessert1.textContent = "Dessert1";
    dessertsUL.appendChild(dessert1);

    const dessert2  = document.createElement('li');
    dessert2.textContent = "Dessert2";
    dessertsUL.appendChild(dessert2);
    
    const dessert3  = document.createElement('li');
    dessert3.textContent = "Dessert3";
    dessertsUL.appendChild(dessert3);

    return menu;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpe1xuICAgIC8vY3JlYXRlIG1lbnUgKHVsKVxuICAgIGNvbnN0IG1lbnVVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0gyJyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VUwpO1xuXG4gICAgLy9jcmVhdGUgYXBwZXRpemVycyAodWwpXG4gICAgY29uc3QgYXBwZXRpemVyc1VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoJ2gzJyk7XG4gICAgYXBwZXRpemVyc1VMLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdhcHBzJyk7XG4gICAgYXBwZXRpemVycy50ZXh0Q29udGVudCA9IFwiQXBwZXRpemVyc1wiO1xuICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYXBwZXRpemVyc1VMKTtcbiAgICBtZW51VUwuYXBwZW5kQ2hpbGQoYXBwZXRpemVycyk7XG5cbiAgICAvL2FwcGV0aXplcnMgXG4gICAgY29uc3QgYXBwMSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFwcDEudGV4dENvbnRlbnQgPSBcIkFwcDFcIjtcbiAgICBhcHBldGl6ZXJzVUwuYXBwZW5kQ2hpbGQoYXBwMSk7XG5cbiAgICBjb25zdCBhcHAyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYXBwMi50ZXh0Q29udGVudCA9IFwiQXBwMlwiO1xuICAgIGFwcGV0aXplcnNVTC5hcHBlbmRDaGlsZChhcHAyKTtcblxuICAgIGNvbnN0IGFwcDMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhcHAzLnRleHRDb250ZW50ID0gXCJBcHAzXCI7XG4gICAgYXBwZXRpemVyc1VMLmFwcGVuZENoaWxkKGFwcDMpO1xuXG4gICAgY29uc3QgYXBwNCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFwcDQudGV4dENvbnRlbnQgPSBcIkFwcDRcIjtcbiAgICBhcHBldGl6ZXJzVUwuYXBwZW5kQ2hpbGQoYXBwNCk7XG5cbiAgICBjb25zdCBhcHA1ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYXBwNS50ZXh0Q29udGVudCA9IFwiQXBwNVwiO1xuICAgIGFwcGV0aXplcnNVTC5hcHBlbmRDaGlsZChhcHA1KTtcbiAgICBcbiAgICAvL2NyZWF0ZSBtYWlucyAodWwpXG4gICAgY29uc3QgbWFpbnNVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbWFpbnNVTC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbWFpbnMnKTtcbiAgICBcbiAgICBjb25zdCBtYWlucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWFpbnMudGV4dENvbnRlbnQ9IFwiTWFpbnNcIjtcbiAgICBtYWlucy5hcHBlbmRDaGlsZChtYWluc1VMKTtcblxuICAgIG1lbnVVTC5hcHBlbmRDaGlsZChtYWlucyk7XG5cbiAgICAvL21haW5zXG4gICAgY29uc3QgbWFpbjEgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtYWluMS50ZXh0Q29udGVudCA9IFwiTWFpbjFcIjtcbiAgICBtYWluc1VMLmFwcGVuZENoaWxkKG1haW4xKTtcblxuICAgIGNvbnN0IG1haW4yICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWFpbjIudGV4dENvbnRlbnQgPSBcIk1haW4yXCI7XG4gICAgbWFpbnNVTC5hcHBlbmRDaGlsZChtYWluMik7XG4gICAgXG4gICAgY29uc3QgbWFpbjMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtYWluMy50ZXh0Q29udGVudCA9IFwiTWFpbjNcIjtcbiAgICBtYWluc1VMLmFwcGVuZENoaWxkKG1haW4zKTtcbiAgICBcbiAgICBjb25zdCBtYWluNCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1haW40LnRleHRDb250ZW50ID0gXCJNYWluNFwiO1xuICAgIG1haW5zVUwuYXBwZW5kQ2hpbGQobWFpbjQpO1xuICAgIFxuICAgIGNvbnN0IG1haW41ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWFpbjEudGV4dENvbnRlbnQgPSBcIk1haW41XCI7XG4gICAgbWFpbnNVTC5hcHBlbmRDaGlsZChtYWluNSk7XG5cbiAgICAvL2NyZWF0ZSBkcmlua3MgKHVsKVxuICAgIGNvbnN0IGRyaW5rc1VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBkcmlua3NVTC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZHJpbmtzJyk7XG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkcmlua3MudGV4dENvbnRlbnQ9IFwiRHJpbmtzXCI7XG4gICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc1VMKTtcbiAgICBtZW51VUwuYXBwZW5kQ2hpbGQoZHJpbmtzKTtcblxuICAgIC8vZHJpbmtzXG4gICAgY29uc3QgZHJpbmsxICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZHJpbmsxLnRleHRDb250ZW50ID0gXCJEcmluazFcIjtcbiAgICBkcmlua3NVTC5hcHBlbmRDaGlsZChkcmluazEpO1xuXG4gICAgY29uc3QgZHJpbmsyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZHJpbmsyLnRleHRDb250ZW50ID0gXCJEcmluazJcIjtcbiAgICBkcmlua3NVTC5hcHBlbmRDaGlsZChkcmluazIpO1xuXG4gICAgY29uc3QgZHJpbmszICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZHJpbmszLnRleHRDb250ZW50ID0gXCJEcmluazNcIjtcbiAgICBkcmlua3NVTC5hcHBlbmRDaGlsZChkcmluazMpO1xuICAgIFxuICAgIGNvbnN0IGRyaW5rNCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRyaW5rNC50ZXh0Q29udGVudCA9IFwiRHJpbms0XCI7XG4gICAgZHJpbmtzVUwuYXBwZW5kQ2hpbGQoZHJpbms0KTtcbiAgICBcbiAgICBjb25zdCBkcmluazUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkcmluazEudGV4dENvbnRlbnQgPSBcIkRyaW5rNVwiO1xuICAgIGRyaW5rc1VMLmFwcGVuZENoaWxkKGRyaW5rNSk7XG5cbiAgICAvL2NyZWF0ZSBkZXNzZXJ0cyAodWwpXG4gICAgY29uc3QgZGVzc2VydHNVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRlc3NlcnRzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdkZXNzZXJ0cycpO1xuICAgIGRlc3NlcnRzLnRleHRDb250ZW50PSBcIkRlc3NlcnRzXCI7XG4gICAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoZGVzc2VydHNVTCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG5cbiAgICAvL2Rlc3NlcnRzXG4gICAgY29uc3QgZGVzc2VydDEgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkZXNzZXJ0MS50ZXh0Q29udGVudCA9IFwiRGVzc2VydDFcIjtcbiAgICBkZXNzZXJ0c1VMLmFwcGVuZENoaWxkKGRlc3NlcnQxKTtcblxuICAgIGNvbnN0IGRlc3NlcnQyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZGVzc2VydDIudGV4dENvbnRlbnQgPSBcIkRlc3NlcnQyXCI7XG4gICAgZGVzc2VydHNVTC5hcHBlbmRDaGlsZChkZXNzZXJ0Mik7XG4gICAgXG4gICAgY29uc3QgZGVzc2VydDMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkZXNzZXJ0My50ZXh0Q29udGVudCA9IFwiRGVzc2VydDNcIjtcbiAgICBkZXNzZXJ0c1VMLmFwcGVuZENoaWxkKGRlc3NlcnQzKTtcblxuICAgIHJldHVybiBtZW51O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==