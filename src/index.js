import './style.css';
import cool from './cool.png';

console.log('hello');

//function ot create page 
function page(){
    //get div #content
    const content = document.querySelector('#content');
    document.body.appendChild(content);

    //create header 
    const header = document.createElement('h1');
    header.textContent = "RESTAURANT NAME";
    content.appendChild(header);

    //create main text thing for website 
    const main = document.createElement('div');
    main.textContent = "This is text about the restaurant and how awesome it is. I love this restaurant.";
    content.appendChild(main);

    const pic = new Image();
    pic.src = cool;
    content.appendChild(pic);
}

page();