const db = require('../../config/db.config.js')
const Population_year = db.population_year;

//Post a Customer
exports.create = (req,res)=>{
    //Save to MySQL database
    Population_year.create({
        population_id:req.body.population_id,
        year:req.body.year,
        population_number:req.body.population_number,
        increasing_rate:req.body.increasing_rate
    }).then(population_year =>{
        res.send(population_year);
    }).catch(err => {
        res.status(500).send("Error -> "+err);
    })
};
// FETCH all Customers
exports.getAll = (req, res) => {
    Population_year.findAll().then(population_year => {
      // Send all customers to Client
      res.send(population_year);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };