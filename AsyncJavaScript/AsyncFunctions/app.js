const login = async (username, password) => {
    if(!username || !password)
        throw 'Mising Credentials';

    if(password === 'corgi')
        return 'WELCOME BACK!'
    
    throw 'Invalid Password';
}

login('frhe',"corgi")
    .then(msg =>{
    console.log("LOGGED IN!")
    console.log(msg)
    })
    .catch(err=>{
    console.log("ERROR!")
    console.log(err)
    })

    const delayedColorChange = (color, delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
        })
    }
    
    // delayedColorChange('red', 1000)
    //     .then(() => delayedColorChange('orange', 1000))
    //     .then(() => delayedColorChange('yellow', 1000))
    //     .then(() => delayedColorChange('green', 1000))
    //     .then(() => delayedColorChange('blue', 1000))
    //     .then(() => delayedColorChange('indigo', 1000))
    //     .then(() => delayedColorChange('violet', 1000))

    // async function rainbow() {
    //     delayedColorChange('red', 1000)
    //     delayedColorChange('orange', 1000)
    // }  //Will directly show orange.

    async function rainbow() {
            await delayedColorChange('red', 1000)
            await delayedColorChange('orange', 1000)
            await delayedColorChange('yellow', 1000)
            await delayedColorChange('green', 1000)
            await delayedColorChange('blue', 1000)
            await delayedColorChange('indigo', 1000)
            await delayedColorChange('violet', 1000)
            return "ALL DONE!"
    }

 //rainbow().then(() => console.log("END OF RAINBOW!"))

 async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!")
}

printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// async function makeTwoRequests(){
//     let data = await fakeRequest("./page23");
//     console.log(data);
// }

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } 
    catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }

}