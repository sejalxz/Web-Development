
const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}


const h1 = document.querySelector('h1');
h1.innerHTML += "<i> BLOG</i>"
// h1.style.color = "Purple";
h1.style.fontSize = '3px solid pink';

// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

const h2 = document.querySelector('h2');
h2.setAttribute('class', 'purple');

newImg = document.createElement('img');
newImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ptrDHBLfBC1_8nn72Aj7RuWdKxDOpCQ_uA&usqp=CAU";

document.body.appendChild(newImg);
newImg.classList.add('square');

h1.insertAdjacentElement('afterend', newP);