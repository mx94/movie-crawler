/**
 * Created by maxin on 2017/5/29.
 */

let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let debug = require('debug')('crawl:read');
// 读取url地址中的内容
exports.read = function (url, callback) {
    request({url, encoding: null}, function (err, response, body) {
        body = iconv.decode(body, 'gbk');
        let $ = cheerio.load(body);
        let movies = [];
        $('.keyword .list-title').each(function () {
            let $this = $(this);
            let movie = {
                name: $this.text().trim(),
                url: $this.attr('href')
            };
            debug(`读到电影：${movie.name}`);
            movies.push(movie);
        });
        callback(err, movies);
    });
}