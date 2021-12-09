const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const ulist = document.querySelector('#list');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(input.value);
    const catName = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = catName; 
    ulist.append(newLI);
    input.value="";
});