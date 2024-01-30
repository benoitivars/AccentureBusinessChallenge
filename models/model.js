
const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
    // Définition du schéma
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
    // Ajoutez d'autres champs selon les besoins
});

module.exports = mongoose.model('Example', ExampleSchema);
