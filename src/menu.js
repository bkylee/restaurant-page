function menu(){
    //create menu (ul)
    const menu = document.createElement('ul');
    menu.setAttribute('id', 'menu');
    menu.textContent = "Menu";

    //create appetizers (ul)
    const appetizers = document.createElement('ul');
    appetizers.setAttribute('class','apps');
    appetizers.textContent = "Appetizers";
    menu.appendChild(appetizers);

    //appetizers 
    const app1  = document.createElement('li');
    app1.textContent = "App1";
    appetizers.appendChild(app1);

    const app2  = document.createElement('li');
    app2.textContent = "App2";
    appetizers.appendChild(app2);

    const app3  = document.createElement('li');
    app3.textContent = "App3";
    appetizers.appendChild(app3);

    const app4  = document.createElement('li');
    app4.textContent = "App4";
    appetizers.appendChild(app4);

    const app5  = document.createElement('li');
    app5.textContent = "App5";
    appetizers.appendChild(app5);
    
    //create mains (ul)
    const mains = document.createElement('ul');
    mains.setAttribute('class','mains');
    mains.textContent= "Mains";

    //mains
    const main1  = document.createElement('li');
    main1.textContent = "Main1";
    mains.appendChild(main1);

    const main2  = document.createElement('li');
    main2.textContent = "Main2";
    mains.appendChild(main2);
    
    const main3  = document.createElement('li');
    main3.textContent = "Main3";
    mains.appendChild(main3);
    
    const main4  = document.createElement('li');
    main4.textContent = "Main4";
    mains.appendChild(main4);
    
    const main5  = document.createElement('li');
    main1.textContent = "Main5";
    mains.appendChild(main5);

    //create drinks (ul)
    const drinks = document.createElement('ul');
    drinks.setAttribute('class','drinks');
    drinks.textContent= "Drinks";

    //drinks
    const drink1  = document.createElement('li');
    drink1.textContent = "Drink1";
    drinks.appendChild(drink1);

    const drink2  = document.createElement('li');
    drink2.textContent = "Drink2";
    drinks.appendChild(drink2);
    
    const drink3  = document.createElement('li');
    drink3.textContent = "Drink3";
    drinks.appendChild(drink3);
    
    const drink4  = document.createElement('li');
    drink4.textContent = "Drink4";
    drinks.appendChild(drink4);
    
    const drink5  = document.createElement('li');
    drink1.textContent = "Drink5";
    drinks.appendChild(drink5);

    //create desserts (ul)
    const desserts = document.createElement('ul');
    desserts.setAttribute('class','desserts');
    desserts.textContent= "Desserts";

    //desserts
    const dessert1  = document.createElement('li');
    dessert1.textContent = "Dessert1";
    desserts.appendChild(dessert1);

    const dessert2  = document.createElement('li');
    drink2.textContent = "Dessert2";
    desserts.appendChild(desserts2);
    
    const dessert3  = document.createElement('li');
    drink3.textContent = "Dessert3";
    desserts.appendChild(dessert3);
}