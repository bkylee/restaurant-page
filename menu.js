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
    const menuTitle = document.createElement('H2');
    menuTitle.textContent = "Menu";
    
    //menu container 
    const menu = document.createElement('div');
    menu.setAttribute('id','menu');
    menuTitle.appendChild(menu);

    //create appetizers (ul)
    const appetizersUL = document.createElement('ul');
    const appetizers = document.createElement ('h3');
    appetizersUL.setAttribute('class','appetizers');
    appetizers.textContent = "Appetizers";
    appetizers.appendChild(appetizersUL);
    menu.appendChild(appetizers);

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

    menu.appendChild(mains);

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
    main5.textContent = "Main5";
    mainsUL.appendChild(main5);

    //create drinks (ul)
    const drinksUL = document.createElement('ul');
    drinksUL.setAttribute('class','drinks');
    const drinks = document.createElement('h3');
    drinks.textContent= "Drinks";
    drinks.appendChild(drinksUL);
    menu.appendChild(drinks);

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
    drink5.textContent = "Drink5";
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

    return menuTitle;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKXtcbiAgICAvL2NyZWF0ZSBtZW51ICh1bClcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdIMicpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIFxuICAgIC8vbWVudSBjb250YWluZXIgXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcbiAgICBtZW51VGl0bGUuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAvL2NyZWF0ZSBhcHBldGl6ZXJzICh1bClcbiAgICBjb25zdCBhcHBldGl6ZXJzVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnaDMnKTtcbiAgICBhcHBldGl6ZXJzVUwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2FwcGV0aXplcnMnKTtcbiAgICBhcHBldGl6ZXJzLnRleHRDb250ZW50ID0gXCJBcHBldGl6ZXJzXCI7XG4gICAgYXBwZXRpemVycy5hcHBlbmRDaGlsZChhcHBldGl6ZXJzVUwpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYXBwZXRpemVycyk7XG5cbiAgICAvL2FwcGV0aXplcnMgXG4gICAgY29uc3QgYXBwMSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFwcDEudGV4dENvbnRlbnQgPSBcIkFwcDFcIjtcbiAgICBhcHBldGl6ZXJzVUwuYXBwZW5kQ2hpbGQoYXBwMSk7XG5cbiAgICBjb25zdCBhcHAyICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYXBwMi50ZXh0Q29udGVudCA9IFwiQXBwMlwiO1xuICAgIGFwcGV0aXplcnNVTC5hcHBlbmRDaGlsZChhcHAyKTtcblxuICAgIGNvbnN0IGFwcDMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhcHAzLnRleHRDb250ZW50ID0gXCJBcHAzXCI7XG4gICAgYXBwZXRpemVyc1VMLmFwcGVuZENoaWxkKGFwcDMpO1xuXG4gICAgY29uc3QgYXBwNCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFwcDQudGV4dENvbnRlbnQgPSBcIkFwcDRcIjtcbiAgICBhcHBldGl6ZXJzVUwuYXBwZW5kQ2hpbGQoYXBwNCk7XG5cbiAgICBjb25zdCBhcHA1ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYXBwNS50ZXh0Q29udGVudCA9IFwiQXBwNVwiO1xuICAgIGFwcGV0aXplcnNVTC5hcHBlbmRDaGlsZChhcHA1KTtcbiAgICBcbiAgICAvL2NyZWF0ZSBtYWlucyAodWwpXG4gICAgY29uc3QgbWFpbnNVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbWFpbnNVTC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbWFpbnMnKTtcbiAgICBcbiAgICBjb25zdCBtYWlucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWFpbnMudGV4dENvbnRlbnQ9IFwiTWFpbnNcIjtcbiAgICBtYWlucy5hcHBlbmRDaGlsZChtYWluc1VMKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWFpbnMpO1xuXG4gICAgLy9tYWluc1xuICAgIGNvbnN0IG1haW4xICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWFpbjEudGV4dENvbnRlbnQgPSBcIk1haW4xXCI7XG4gICAgbWFpbnNVTC5hcHBlbmRDaGlsZChtYWluMSk7XG5cbiAgICBjb25zdCBtYWluMiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1haW4yLnRleHRDb250ZW50ID0gXCJNYWluMlwiO1xuICAgIG1haW5zVUwuYXBwZW5kQ2hpbGQobWFpbjIpO1xuICAgIFxuICAgIGNvbnN0IG1haW4zICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWFpbjMudGV4dENvbnRlbnQgPSBcIk1haW4zXCI7XG4gICAgbWFpbnNVTC5hcHBlbmRDaGlsZChtYWluMyk7XG4gICAgXG4gICAgY29uc3QgbWFpbjQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtYWluNC50ZXh0Q29udGVudCA9IFwiTWFpbjRcIjtcbiAgICBtYWluc1VMLmFwcGVuZENoaWxkKG1haW40KTtcbiAgICBcbiAgICBjb25zdCBtYWluNSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1haW41LnRleHRDb250ZW50ID0gXCJNYWluNVwiO1xuICAgIG1haW5zVUwuYXBwZW5kQ2hpbGQobWFpbjUpO1xuXG4gICAgLy9jcmVhdGUgZHJpbmtzICh1bClcbiAgICBjb25zdCBkcmlua3NVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgZHJpbmtzVUwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2RyaW5rcycpO1xuICAgIGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZHJpbmtzLnRleHRDb250ZW50PSBcIkRyaW5rc1wiO1xuICAgIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NVTCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChkcmlua3MpO1xuXG4gICAgLy9kcmlua3NcbiAgICBjb25zdCBkcmluazEgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkcmluazEudGV4dENvbnRlbnQgPSBcIkRyaW5rMVwiO1xuICAgIGRyaW5rc1VMLmFwcGVuZENoaWxkKGRyaW5rMSk7XG5cbiAgICBjb25zdCBkcmluazIgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkcmluazIudGV4dENvbnRlbnQgPSBcIkRyaW5rMlwiO1xuICAgIGRyaW5rc1VMLmFwcGVuZENoaWxkKGRyaW5rMik7XG5cbiAgICBjb25zdCBkcmluazMgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkcmluazMudGV4dENvbnRlbnQgPSBcIkRyaW5rM1wiO1xuICAgIGRyaW5rc1VMLmFwcGVuZENoaWxkKGRyaW5rMyk7XG4gICAgXG4gICAgY29uc3QgZHJpbms0ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZHJpbms0LnRleHRDb250ZW50ID0gXCJEcmluazRcIjtcbiAgICBkcmlua3NVTC5hcHBlbmRDaGlsZChkcmluazQpO1xuICAgIFxuICAgIGNvbnN0IGRyaW5rNSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRyaW5rNS50ZXh0Q29udGVudCA9IFwiRHJpbms1XCI7XG4gICAgZHJpbmtzVUwuYXBwZW5kQ2hpbGQoZHJpbms1KTtcblxuICAgIC8vY3JlYXRlIGRlc3NlcnRzICh1bClcbiAgICBjb25zdCBkZXNzZXJ0c1VMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZGVzc2VydHMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Rlc3NlcnRzJyk7XG4gICAgZGVzc2VydHMudGV4dENvbnRlbnQ9IFwiRGVzc2VydHNcIjtcbiAgICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChkZXNzZXJ0c1VMKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcblxuICAgIC8vZGVzc2VydHNcbiAgICBjb25zdCBkZXNzZXJ0MSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRlc3NlcnQxLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0MVwiO1xuICAgIGRlc3NlcnRzVUwuYXBwZW5kQ2hpbGQoZGVzc2VydDEpO1xuXG4gICAgY29uc3QgZGVzc2VydDIgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkZXNzZXJ0Mi50ZXh0Q29udGVudCA9IFwiRGVzc2VydDJcIjtcbiAgICBkZXNzZXJ0c1VMLmFwcGVuZENoaWxkKGRlc3NlcnQyKTtcbiAgICBcbiAgICBjb25zdCBkZXNzZXJ0MyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRlc3NlcnQzLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0M1wiO1xuICAgIGRlc3NlcnRzVUwuYXBwZW5kQ2hpbGQoZGVzc2VydDMpO1xuXG4gICAgcmV0dXJuIG1lbnVUaXRsZTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=