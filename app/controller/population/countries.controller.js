const db = require('../../config/db.config.js')
const Countries = db.countries;

//Post a Countries
exports.create = (req,res)=>{
    //Save to MySQL database
    Countries.create({
      country_name:req.body.country_name
    }).then(countries =>{
        res.send(countries);
    }).catch(err => {
        res.status(500).send("Error -> "+err);
    })
};
// FETCH all Countries
exports.getAll = (req, res) => {
    Countries.findAll().then(countries => {
      // Send all customers to Client
      res.send(countries);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };