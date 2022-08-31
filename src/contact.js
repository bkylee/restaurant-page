export default function contact (){
    //title of page
    const title = document.createElement('h2');
    title.textContent = "Contact info";

    //wrapper 
    const wrap = document.createElement('div');
    title.appendChild(wrap);
    
    //contact UL 
    const cList = document.createElement('ul');
    wrap.appendChild(cList);

    //contact info LI
    const email = document.createElement('li');
    email.textContent = "emailhandle@email.com";
    cList.appendChild(email);
    
    const address = document.createElement('li');
    address.textContent = "123 Address Road";
    cList.appendChild(address);

    const phone = document.createElement('li');
    phone.textContent = '416 123 4567';
    cList.appendChild(phone);

    return title;
}