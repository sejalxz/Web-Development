const fs = require('fs');
const folderName = process.argv[2] || 'Project'
// console.log(fs);

    //Asynchronous  
// fs.mkdir('Pets', { recursive : true}, (err) => {
//     console.log("IN CALLBACK")
//     if(err) throw err;
// })

// console.log("AFTER ASYNCHRONOUS MKDIR")

//SYNCHRNOUS 

    fs.mkdirSync(folderName);
    console.log(`${folderName} directory created!`)
    try{
        fs.writeFileSync(`${folderName}/index.html`)
        fs.writeFileSync(`${folderName}/app.js`)
        fs.writeFileSync(`${folderName}/app.css`)
    }
    catch(e){
        console.log(e);
    }