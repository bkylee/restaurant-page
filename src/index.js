import './style.css';
import cool from './cool.png';
import menu from 'menu';
import contact from 'contact';

console.log('hello');

//function ot create page 
function header(){
    //create header 
    const header = document.createElement('div');
    header.setAttribute('class', 'header');
    
    //title for header
    const title = document.createElement('h1');
    title.textContent = "RESTAURANT NAME";
    header.appendChild(title);
    return header;
};

function mainText() {
    //create main text thing for website 
    const main = document.createElement('div');
    main.textContent = "This is text about the restaurant and how awesome it is. I love this restaurant.";

    return main;
};

function tabs(){
    //tabs and their pages
    const tabs = document.createElement('div');

    //create about/default page button
    const about = document.createElement('button');
    tabs.appendChild(about);
    //header generated from header function
    const headPage = mainText();
    
    //event listener to about button 
    about.addEventListener('click', ()=>{
        //remove elements from body
        document.body.removeChild(contactPage);
        document.body.removeChild(menuPage);
        document.body.appendChild(headPage);
    });

    //create menu page button
    const menuButton = document.createElement('button');
    tabs.appendChild(menuButton);
    //menu page generated from menu module
    const menuPage = menu;
    menuButton.addEventListener('click', ()=>{
        document.body.removeChild(contactPage);
        document.body.removeChild(headPage);
        document.body.appendChild(menuPage);
    });

    //create contact page button
    const contactButton = document.createElement('button');
    tabs.appendChild(contactButton);
    //contact page generated from contact module
    const contactPage = contact;
    contactButton.textContent = "Contact";
    contactButton.addEventListener('click', ()=>{
        document.body.removeChild(menuPage);
        document.body.removeChild(headPage);
        document.body.appendChild(contactPage);
    });
}


function picture() {
    const pic = new Image();
    pic.src = cool;

    return pic;
}

document.body.appendChild(header());
document.body.appendChild(mainText());
document.body.appendChild(picture());
