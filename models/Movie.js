
const mongoose = require('mongoose'); 
const movieSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
    },
    price: {
        type: Number, 
        required: true, 
        min: [0, 'The price should always be positive, you got: ${VALUE}'], 
        default: 0, 
    },
    categorie:{
        type: String, 
    },
    inStock: {
        type: Boolean, 
        default: false, 
    },
    description: {
        type: String, 
        required: true, 
    }
  });

const Movie = mongoose.model('Movie', movieSchema); 


module.exports = Movie;   