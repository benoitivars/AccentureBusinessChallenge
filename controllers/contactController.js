
const ExampleModel = require('../models/model'); // Remplacer par le modèle approprié

exports.getContact = (req, res) => {
    res.render('contact', { title: 'Contact Page' });
};
