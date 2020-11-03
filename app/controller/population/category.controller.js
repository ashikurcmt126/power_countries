const db = require('../../config/db.config.js')
const Category = db.categories;

//Post a Countries
exports.create = (req,res)=>{
    //Save to MySQL database
    Category.create({
        population_id:req.body.population_id,
        category_name:req.body.category_name
    }).then(categories =>{
        res.send(categories);
    }).catch(err => {
        res.status(500).send("Error -> "+err);
    })
};
// FETCH all Countries
exports.getAll = (req, res) => {
    Category.findAll().then(categories => {
      // Send all customers to Client
      res.send(categories);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };