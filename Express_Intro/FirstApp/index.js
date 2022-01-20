const express = require("express");
const app = express()
// console.dir(app);

// app.use((req,res) => {
//     console.log("WE GOT A NEW REQUEST");
//     // console.dir(req);
//     // res.send("HELLO, WE GOT YOUR REQUEST!");
//     // res.send({color: 'red'});
//     res.send('<h1>This is a WEBPAGE!</h1>');
// })

app.get('/', (req,res) => {
    res.send('<h1>Welcome to the WEBPAGE!</h1>');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the ${subreddit} subreddit with Post ID : ${postId} </h1>`);
})

app.get('/cats', (req,res) => {
    console.log("CAT REQUEST!!!");
    res.send('<h1>Meow!!</h1>');
})

app.post('/cats', (req,res) => {
    res.send('POST REQUEST FOR CATS!!!')
})

app.get('/dogs', (req,res) => {
    console.log("DOG REQUEST!!!");
    res.send('<h1>Woof!!</h1>');
})

//--------------------------------------//

app.get('/search', (req,res) => {
    console.log(req.query);
    const {q} = req.query;
    if(!q){
        res.send(`<h1>Nothing found</h1>`);
    }
    res.send(`<h1>Search results for ${q}</h1>`);
})

app.get('*', (req,res) => {
    res.send('IDK THAT PATH!!')
})




app.listen(3000, () =>{
    console.log("LISTENING ON PORT 3000!")
})

