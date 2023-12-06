const Sequelize = require('sequelize');

const sequelize = new Sequelize('image-posting-app', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;