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

//adding a middleware to store the dummy post created while sync
//storing the dummy post into the 'request' so that we can use it anywhere in the app
app.use((req, res, next) => {
    Post.findByPk(1)
        .then(post => {
            req.post = post; //storing the entire post inside request. It doesn't store the JSON object, it stores the sequelize object
            next();
        })
        .catch(err => console.log(err))
})

app.use('/', mainRoute);

app.get('/:temp', (req, res) => {
    res.status(400).send("Not Found");
});

const PORT = process.env.PORT || 4001;

Post.hasMany(Comment); //It will create a foreignKey to Comment table 
Comment.belongsTo(Post, {constraints: true}); //this constraints specifies that Post table should be created before Comment table

//Below promise chain will make sure to have atleast one post available everytime
// sequelize.sync({force: true})
sequelize.sync()
    .then(result => {
        return Post.findByPk(1);
    })
    .then(post => {
        if(!post) {
            return Post.create({
                postUrl: "dummy.jpg", 
                postDescription: "dummy"
            })
        }
        return post;
    })
    .then(post => {
        // console.log(post);
        app.listen(PORT, () => {
            console.log("Listening on PORT:", PORT);
        });
    })
    .catch(err => console.log(err));