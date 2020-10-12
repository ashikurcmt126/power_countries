const db = require('../config/db.config.js')
const Customer = db.customers;

//Post a Customer
exports.create = (req,res)=>{
    //Save to MySQL database
    Customer.create({
        name:req.body.name,
        age:req.body.age
    }).then(customer =>{
        res.send(customer);
    }).catch(err => {
        res.status(500).send("Error -> "+err);
    })
};
// FETCH all Customers
exports.getAll = (req, res) => {
    Customer.findAll().then(customers => {
      // Send all customers to Client
      res.send(customers);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };