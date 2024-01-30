
const ExampleModel = require('../models/model'); // Remplacer par le modèle approprié

exports.getAbout = (req, res) => {
    res.render('about', { title: 'About Page' });
};
