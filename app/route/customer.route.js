module.exports = function(app) {
 
    const customers = require('../controller/customer.controller.js');
    const countries = require('../controller/countries.controller.js');
    const populations = require('../controller/population.controller.js');
 
    // Create a new Customer
    app.post('/api/customer', customers.create);
    //Get All Customer
    app.get('/api/customer',customers.getAll);


    //============================Countries===========================
    app.post('/api/countries',countries.create);
    app.get('/api/countries',countries.getAll);


    //============================Population===========================
    app.post('/api/populations',populations.create);
    app.get('/api/populations',populations.getAll);
 
}