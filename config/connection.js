// import the Sequelize constructor from the Library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', '32juan', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;