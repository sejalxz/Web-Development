const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("You clicked me!")
    console.log("I hope it worked!!")
}

function scream () {
    console.log("AAAAH");
    console.log("Stop touching me!");
}

btn.onmouseenter = scream;
//          *******METHOD 3*********
const button=document.querySelector('#v3');

button.addEventListener('dblclick',()=>{
    alert("CLICKED!!")
})

const tasButton=document.querySelector('#tas');

function twist(){
    console.log('TWIST!');
}

function shout(){
    console.log('SHOUT!');
}

// tasButton.onclick=twist;
// tasButton.onclick=shout;

tasButton.addEventListener('click',twist,{once:true});
tasButton.addEventListener('click',shout);