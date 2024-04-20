function customRender(param1 , param2){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    param2.appendChild(domElement);
}

const reactElement= {
    type: "a",
    props:{
        href:'www.google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const mainContainer= document.querySelector('#root');

customRender(reactElement,mainContainer);