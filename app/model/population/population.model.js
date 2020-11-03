module.exports = (sequelize, Sequelize) => {
    const Population = sequelize.define('population', {
      description: {
        type: Sequelize.STRING
      },
      table_name:{
        type: Sequelize.STRING
      }
    });
    
    return Population;
  }