module.exports = (sequelize, Sequelize) => {
    const PopulationYear = sequelize.define('population_year', {
      population_id: {
      type: Sequelize.INTEGER
      },
      year:{
          type: Sequelize.FLOAT
      },
      population_number:{
          type: Sequelize.STRING
      },
      increasing_rate:{
        type: Sequelize.FLOAT
      }
    });
    
    return PopulationYear;
  }