import './style.css';
import cool from './cool.png';
import menu from 'menu';

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

function tabs(){
    //tabs and their pages
    const tabs = document.createElement('div');
    
    const about = document.createElement('button');
    tabs.appendChild(about);
    const headPage = header();

    about.addEventListener('click', ()=>{
        //remove elements from body
        document.body.removeChild(..);
        document.body.removeChild(..);
        document.body.appendChild(headPage);
    });
    
    const menuButton = document.createElement('button');
    const menuPage = menu;
    menuButton.addEventListener('click', ()=>{
        document.body.removeChild(contactPage);
        document.body.removeChild(headPage);
        document.body.appendChild(menuPage);
    })

    const contact = document.createElement('button');
    

}

function mainText() {
    //create main text thing for website 
    const main = document.createElement('div');
    main.textContent = "This is text about the restaurant and how awesome it is. I love this restaurant.";

    return main;
};

function picture() {
    const pic = new Image();
    pic.src = cool;

    return pic;
}

document.body.appendChild(header());
document.body.appendChild(mainText());
document.body.appendChild(picture());
