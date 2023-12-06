const express = require('express');
const app = express();

//import required to create environment variables
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

//import required to parse JSON data from a POST request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//import required for main-routing
const mainRoute = require('./routers/index');

//imports required for DB connection and table creation
const sequelize = require('./util/dbConnect');
const Post = require('./models/Post'); //Without this table was not getting created
const Comment = require('./models/Comment');

//import required to allow CORS origin connection
const cors = require("cors");
app.use(cors());

app.use('/', mainRoute);

app.get('/:temp', (req, res) => {
    res.status(400).send("Not Found");
});

const PORT = process.env.PORT || 4001;

Post.hasMany(Comment); //It will create a foreignKey to Comment table 
Comment.belongsTo(Post, {constraints: true}); //this constraints specifies that Post table should be created before Comment table

// sequelize.sync({force: true})
sequelize.sync()
    .then(post => {
        app.listen(PORT, () => {
            console.log("Listening on PORT:", PORT);
        });
    })
    .catch(err => console.log(err));