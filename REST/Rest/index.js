const express = require('express');
const app = express();
const path = require('path');
const { v4:uuid } = require('uuid');
const methodOverride = require('method-override')


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        id : uuid(),
        username : 'Harvey Specter',
        comment : 'I am Best Closer in the city.'
    },
    {
        id : uuid(),
        username : 'Mike Ross',
        comment : 'My mind is my power'
    },
    {
        id : uuid(),
        username : 'Louis Litt',
        comment : "Let's go mudding."
    },
    {
        id : uuid(),
        username : 'Dauna Paulsen',
        comment : 'You have no idea how Donna I am.'
    }
]

//Read
app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments });
})

//For Form
app.get('/comments/new', (req,res) => {
    res.render('comments/new')
})

//Create 
app.post('/comments', (req, res) =>{
    const {username, comment} = req.body;
    comments.push({username, comment, id:uuid()});
    res.redirect('/comments');
})

//Show about 1 thing
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const comment = comments.find( c => c.id === id);
    res.render('comments/show', {comment});
    // res.redirect('comments/show');
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id);
    res.render('comments/edit', {comment});
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find( c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body;
    res.send(`OK! here are your ${qty} ${meat} tacos :)`)
})

app.listen(3000, () => {
    console.log("Listening on Port 3000.")
})
