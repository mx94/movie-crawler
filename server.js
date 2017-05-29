/**
 * Created by maxin on 2017/5/29.
 */

let express = require('express');
let path = require('path');
let Movie = require('./model').Movie;
let app = express();
app.use(express.static(path.resolve('node_modules')));
app.set('view engine', 'ejs');
app.listen(8080);
app.get('/', function (req, res) {
    Movie.find({}, function (err, movies) {
        res.render('index', {movies});
    });
});