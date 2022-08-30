/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1lbnUoKXtcbiAgICAvL2NyZWF0ZSBtZW51ICh1bClcbiAgICBjb25zdCBtZW51VUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdIMicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVVMKTtcblxuICAgIC8vY3JlYXRlIGFwcGV0aXplcnMgKHVsKVxuICAgIGNvbnN0IGFwcGV0aXplcnNVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgYXBwZXRpemVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKCdoMycpO1xuICAgIGFwcGV0aXplcnNVTC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYXBwcycpO1xuICAgIGFwcGV0aXplcnMudGV4dENvbnRlbnQgPSBcIkFwcGV0aXplcnNcIjtcbiAgICBhcHBldGl6ZXJzLmFwcGVuZENoaWxkKGFwcGV0aXplcnNVTCk7XG4gICAgbWVudVVMLmFwcGVuZENoaWxkKGFwcGV0aXplcnMpO1xuXG4gICAgLy9hcHBldGl6ZXJzIFxuICAgIGNvbnN0IGFwcDEgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhcHAxLnRleHRDb250ZW50ID0gXCJBcHAxXCI7XG4gICAgYXBwZXRpemVyc1VMLmFwcGVuZENoaWxkKGFwcDEpO1xuXG4gICAgY29uc3QgYXBwMiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFwcDIudGV4dENvbnRlbnQgPSBcIkFwcDJcIjtcbiAgICBhcHBldGl6ZXJzVUwuYXBwZW5kQ2hpbGQoYXBwMik7XG5cbiAgICBjb25zdCBhcHAzICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYXBwMy50ZXh0Q29udGVudCA9IFwiQXBwM1wiO1xuICAgIGFwcGV0aXplcnNVTC5hcHBlbmRDaGlsZChhcHAzKTtcblxuICAgIGNvbnN0IGFwcDQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhcHA0LnRleHRDb250ZW50ID0gXCJBcHA0XCI7XG4gICAgYXBwZXRpemVyc1VMLmFwcGVuZENoaWxkKGFwcDQpO1xuXG4gICAgY29uc3QgYXBwNSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFwcDUudGV4dENvbnRlbnQgPSBcIkFwcDVcIjtcbiAgICBhcHBldGl6ZXJzVUwuYXBwZW5kQ2hpbGQoYXBwNSk7XG4gICAgXG4gICAgLy9jcmVhdGUgbWFpbnMgKHVsKVxuICAgIGNvbnN0IG1haW5zVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1haW5zVUwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ21haW5zJyk7XG4gICAgXG4gICAgY29uc3QgbWFpbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1haW5zLnRleHRDb250ZW50PSBcIk1haW5zXCI7XG4gICAgbWFpbnMuYXBwZW5kQ2hpbGQobWFpbnNVTCk7XG5cbiAgICBtZW51VUwuYXBwZW5kQ2hpbGQobWFpbnMpO1xuXG4gICAgLy9tYWluc1xuICAgIGNvbnN0IG1haW4xICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWFpbjEudGV4dENvbnRlbnQgPSBcIk1haW4xXCI7XG4gICAgbWFpbnNVTC5hcHBlbmRDaGlsZChtYWluMSk7XG5cbiAgICBjb25zdCBtYWluMiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1haW4yLnRleHRDb250ZW50ID0gXCJNYWluMlwiO1xuICAgIG1haW5zVUwuYXBwZW5kQ2hpbGQobWFpbjIpO1xuICAgIFxuICAgIGNvbnN0IG1haW4zICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbWFpbjMudGV4dENvbnRlbnQgPSBcIk1haW4zXCI7XG4gICAgbWFpbnNVTC5hcHBlbmRDaGlsZChtYWluMyk7XG4gICAgXG4gICAgY29uc3QgbWFpbjQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtYWluNC50ZXh0Q29udGVudCA9IFwiTWFpbjRcIjtcbiAgICBtYWluc1VMLmFwcGVuZENoaWxkKG1haW40KTtcbiAgICBcbiAgICBjb25zdCBtYWluNSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1haW4xLnRleHRDb250ZW50ID0gXCJNYWluNVwiO1xuICAgIG1haW5zVUwuYXBwZW5kQ2hpbGQobWFpbjUpO1xuXG4gICAgLy9jcmVhdGUgZHJpbmtzICh1bClcbiAgICBjb25zdCBkcmlua3NVTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgZHJpbmtzVUwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2RyaW5rcycpO1xuICAgIGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZHJpbmtzLnRleHRDb250ZW50PSBcIkRyaW5rc1wiO1xuICAgIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NVTCk7XG4gICAgbWVudVVMLmFwcGVuZENoaWxkKGRyaW5rcyk7XG5cbiAgICAvL2RyaW5rc1xuICAgIGNvbnN0IGRyaW5rMSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRyaW5rMS50ZXh0Q29udGVudCA9IFwiRHJpbmsxXCI7XG4gICAgZHJpbmtzVUwuYXBwZW5kQ2hpbGQoZHJpbmsxKTtcblxuICAgIGNvbnN0IGRyaW5rMiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRyaW5rMi50ZXh0Q29udGVudCA9IFwiRHJpbmsyXCI7XG4gICAgZHJpbmtzVUwuYXBwZW5kQ2hpbGQoZHJpbmsyKTtcblxuICAgIGNvbnN0IGRyaW5rMyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRyaW5rMy50ZXh0Q29udGVudCA9IFwiRHJpbmszXCI7XG4gICAgZHJpbmtzVUwuYXBwZW5kQ2hpbGQoZHJpbmszKTtcbiAgICBcbiAgICBjb25zdCBkcmluazQgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkcmluazQudGV4dENvbnRlbnQgPSBcIkRyaW5rNFwiO1xuICAgIGRyaW5rc1VMLmFwcGVuZENoaWxkKGRyaW5rNCk7XG4gICAgXG4gICAgY29uc3QgZHJpbms1ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZHJpbmsxLnRleHRDb250ZW50ID0gXCJEcmluazVcIjtcbiAgICBkcmlua3NVTC5hcHBlbmRDaGlsZChkcmluazUpO1xuXG4gICAgLy9jcmVhdGUgZGVzc2VydHMgKHVsKVxuICAgIGNvbnN0IGRlc3NlcnRzVUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkZXNzZXJ0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZGVzc2VydHMnKTtcbiAgICBkZXNzZXJ0cy50ZXh0Q29udGVudD0gXCJEZXNzZXJ0c1wiO1xuICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKGRlc3NlcnRzVUwpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGVzc2VydHMpO1xuXG4gICAgLy9kZXNzZXJ0c1xuICAgIGNvbnN0IGRlc3NlcnQxICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZGVzc2VydDEudGV4dENvbnRlbnQgPSBcIkRlc3NlcnQxXCI7XG4gICAgZGVzc2VydHNVTC5hcHBlbmRDaGlsZChkZXNzZXJ0MSk7XG5cbiAgICBjb25zdCBkZXNzZXJ0MiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGRlc3NlcnQyLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0MlwiO1xuICAgIGRlc3NlcnRzVUwuYXBwZW5kQ2hpbGQoZGVzc2VydDIpO1xuICAgIFxuICAgIGNvbnN0IGRlc3NlcnQzICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZGVzc2VydDMudGV4dENvbnRlbnQgPSBcIkRlc3NlcnQzXCI7XG4gICAgZGVzc2VydHNVTC5hcHBlbmRDaGlsZChkZXNzZXJ0Myk7XG5cbiAgICByZXR1cm4gbWVudTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=