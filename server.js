//mongodb+srv://itomohito:<password>@cluster0.xytus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require("express");
const bodyParser = require('body-parser');
const ejs=require('ejs')
const app = express();
const port = 1111;


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
 useNewUrlParser: true
}).then(() => {
 console.log("Databse Connected Successfully!!");
}).catch(err => {
 console.log('Could not connect to the database', err);
 process.exit();
});


app.get("/", function (req, res){
 res.render("index.ejs")
});

app.use(express.static('public'));
/*app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));*/

app.use("/", require("./routes/root.js"));
app.use("/tops", require("./routes/tops.js"));
app.use("/login", require("./routes/login.js"));
app.use("/userprofile", require("./routes/userprofile.js"));
app.use("/adminprofile", require("./routes/adminprofile.js"));


 app.listen(port, () =>
    console.log(`App listening at http://localhost:${1111}`)
);
