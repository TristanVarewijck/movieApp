

const Movie = require('./models/Movie'); 
const colors = require('colors'); 
const express = require('express')
const app = express()
const port = 3000; 
const path = require('path'); 
const mongoose = require('mongoose');
let bp= require('body-parser'); 
var methodOverride = require('method-override')

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!".brightBlue)
    })
    .catch(err => {
        console.log("OH NO MONGO ERROR!!!!".darkRed)
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.use(express.static('public')); 

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


// ALL PRODUCTS 
app.get('/', (req, res) => {
    res.redirect('/movies');
}); 

app.get('/movies', async (req, res) => {
    let Movies = await Movie.find({});
    res.render('index', {
      Movies, 
  });

})

// CREATE PRODUCT (FORM)
app.get('/movies/add', (req, res) => {
    res.render('add'); 
})

app.post('/movies', async (req, res) => {
    const newMovie = new Movie(req.body); 
    newMovie.save();  
    res.redirect(`/movies/${newMovie._id}`);
})

// GET 1 PRODUCT
app.get('/movies/:id', async (req, res) => {
    let { id } = req.params;
    let clickedMovie = await Movie.findById(id);
    res.render('detail', 
    {clickedMovie});  
})

// UPDATE 1 PRODUCT



// DELETE PRODUCT
// app.delete('/:id', (req, res) => {
//     res.redirect('/');
// })

// UPDATE PRODUCHT 


// localhost (port)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`.green);
  })



