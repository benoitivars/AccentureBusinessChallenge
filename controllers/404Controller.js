
const ExampleModel = require('../models/model'); // Remplacer par le modèle approprié

exports.get404 = (req, res) => {
    res.render('404', { title: '404 Page' });
};
