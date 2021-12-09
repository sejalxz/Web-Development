console.log("Hi")
document.querySelector('button').addEventListener('click',function(eve){
    console.log(eve);
})

const input = document.querySelector('input');

// input.addEventListener('keydown', (evtObj)=> {
//     console.log(evtObj.key);
//     console.log(evtObj.code); //code :corresponds to key's location on keyboard
// })

// input.addEventListener('keyup', ()=> {
//     console.log("Key up!");
// })

window.addEventListener('keydown', (e)=>{
    console.log(e.code);
})