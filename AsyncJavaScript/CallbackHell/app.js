//Approach 1
// setTimeout(()=>{
//     document.body.style.backgroundColor = "red";
// },1000)

// setTimeout(()=>{
//     document.body.style.backgroundColor = "green";
// },2000)

// setTimeout(()=>{
//     document.body.style.backgroundColor = "blue";
// },3000)

//Approach 2

// setTimeout(()=>{
//     document.body.style.backgroundColor = "red";
//     setTimeout(()=>{
//         document.body.style.backgroundColor = "green";
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "blue";
//         },1000)
//     },1000)
// },1000)

//Approach 3

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

// STILL A LOT OF NESTING!!!
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {

                })
            })
        })
    })
});


// searchMoviesAPI('amadeus', () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })