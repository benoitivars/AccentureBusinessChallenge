
const ExampleModel = require('../models/model'); // Remplacer par le modèle approprié

exports.getIndex = (req, res) => {
    res.render('index', { title: 'Index Page' });
};
