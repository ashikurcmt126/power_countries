module.exports = (sequelize, Sequelize) => {
    const Population = sequelize.define('population', {
      country_id: {
      type: Sequelize.INTEGER
      },
      population_number:{
          type: Sequelize.STRING
      },
      increasing_rate:{
          type: Sequelize.FLOAT
      }

    });
    
    return Population;
  }