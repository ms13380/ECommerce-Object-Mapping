const Sequelize = require('');
require('').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize();
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PW, 
    {
      host: '',
      dialect: '',
      port: , 
      dialectOptions: {
        decimalNumbers: true,
      }
    }
  ); 
} 

module.exports = sequelize;