/**
 * @file 解析dom并返回img的src地址
 */
const cheerio = require('cheerio');

/**
 * 
 * @param {*} dom dom
 * @param {*} cb 回调函数
 */
const getImgUrls = (dom, cb) => {
    const $ = cheerio.load(dom);
    $('img').each(function(index, el) { // 这里不能用箭头函数，需要使用this来指向当前element操作返回src
        const imgUrl = $(this).attr('src');
        if (imgUrl) {
            cb(imgUrl, index);
        }
    });
}

module.exports = {
    getImgUrls
};