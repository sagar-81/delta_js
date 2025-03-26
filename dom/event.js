

let a = document.querySelector('button');

function sayHello(key) {
    let randColor = randomColor();
    let b = document.querySelector('h1');
    b.style.color = randColor;
    let divNext = document.createElement('div');
    divNext.innerText = `Generated Color: ${randColor}`;
    divNext.style.color = randColor;  // Set text color to match the generated color
    divNext.style.fontSize = '20px';
    divNext.style.marginTop = '10px';

    document.body.appendChild(divNext);  // Append new div to body

    console.log(`New color: ${randColor}`);
}

function randomColor() {
    let redColor = Math.floor(Math.random() * 255);
    let greenColor = Math.floor(Math.random() * 255);
    let blueColor = Math.floor(Math.random() * 255);

    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

a.addEventListener('click', sayHello);