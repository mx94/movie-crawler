/**
 * Created by maxin on 2017/5/29.
 */

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myCrawler');
let MovieSchema = new mongoose.Schema({
    name: String,
    url: String
});
let Movie = mongoose.model('Movie', MovieSchema);
exports.Movie = Movie;