const Movie = require("./models/Movie"); 
const colors = require("colors"); 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!".brightBlue)
    })
    .catch(err => {
        console.log("OH NO MONGO ERROR!!!!".darkRed)
        console.log(err)
    })
    
    // const productschema = new mongoose.Schema({
    //     name: {
    //         type: String, 
    //         required: true, 
    //     },
    //     price: {
    //         type: Number, 
    //         required: true, 
    //         min: [0, 'The price should always be positive, you got: ${VALUE}'], 
    //         default: 0, 
    //     },
    //     categorie:{
    //         type: String, 
    //         enum: ['Eiwitten', 'Vitamines', 'Aminozuren'], 
    //     },
    //     inStock: {
    //         type: Boolean, 
    //         default: false, 
    //     }
    //   });

// productSchema.methods.addNewProduct =  function () {
//     console.log("This product is saved to the database!"); 
//     this.save() 
// }

async function findAll() { 
    await Movie.find({}).then(data => console.log(data)); 
}

findAll()




