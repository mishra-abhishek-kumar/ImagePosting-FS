const Sequelize = require('sequelize');
const sequelize = require('../util/dbConnect');

const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    postUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },  
    postDescription: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Post;