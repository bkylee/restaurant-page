import './style.css';
import cool from './cool.png';

console.log('hello');

//function ot create page 
function header(){
    //create header 
    const header = document.createElement('h1');
    header.textContent = "RESTAURANT NAME";

    return header;
};

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