module.exports = (sequelize, Sequelize) => {
    const Countries = sequelize.define('countries', {
      country: {
      type: Sequelize.STRING
      },
      
    });
    
    return Countries;
  }