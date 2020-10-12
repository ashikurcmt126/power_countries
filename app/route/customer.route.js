module.exports = function(app) {
 
    const customers = require('../controller/customer.controller.js');
 
    // Create a new Customer
    app.post('/api/customer', customers.create);
    //Get All Customer
    app.get('/api/customer',customers.getAll);
 
}