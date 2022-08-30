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