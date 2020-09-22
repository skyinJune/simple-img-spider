/**
 * @file 配置文件
 * 
 */
const path = require('path');

const originUrl = 'https://item.jd.com/100008204675.html'; // 示例链接，可替换为其他

const imgDir = path.join(__dirname, 'img');

module.exports = {
    originUrl,
    imgDir
};