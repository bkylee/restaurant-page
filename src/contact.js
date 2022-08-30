export default function contact (){
    const title = document.createElement('h2');
    title.textContent = "Contact info";
    
    //contact UL 
    const cList = document.createElement('ul');
    title.appendChild(cList);

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