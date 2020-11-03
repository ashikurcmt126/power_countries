module.exports = function(app) {
 
    const countries = require('../controller/population/countries.controller.js');
    const populations = require('../controller/population/population.controller.js');
    const population_year = require('../controller/population/population_year.controller.js');
    const categories = require('../controller/population/category.controller.js');
 
    //============================Countries===========================
    app.post('/api/countries',countries.create);
    app.get('/api/countries',countries.getAll);


    //============================Population===========================
    app.post('/api/populations',populations.create);
    app.get('/api/populations',populations.getAll);

    //============================population_year===========================
    app.post('/api/population_year',population_year.create);
    app.get('/api/population_year',population_year.getAll);

    //============================population_year===========================
    app.post('/api/categories',categories.create);
    app.get('/api/categories',categories.getAll);
 
}