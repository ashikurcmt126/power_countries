const db = require('../../config/db.config.js')
const Population = db.populations;

//Post a Customer
exports.create = (req,res)=>{
    //Save to MySQL database
    Population.create({
      description:req.body.description,
      table_name:req.body.table_name
    }).then(population =>{
        res.send(population);
    }).catch(err => {
        res.status(500).send("Error -> "+err);
    })
};
// FETCH all Customers
exports.getAll = (req, res) => {
    Population.findAll().then(population => {
      // Send all customers to Client
      res.send(population);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };