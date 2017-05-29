/**
 * Created by maxin on 2017/5/29.
 */

let Movie = require('../model').Movie;
let async = require('async');
let debug = require('debug')('crawl:write');
exports.write = function (movies, callback) {
    async.forEach(movies, function (movie, cb) {
        Movie.create(movie, cb);
        debug(`写入电影:${movie.name}`);
    }, callback);
    //Movie.create(movies,callback);
}
