/**
 * @file index入口文件
 */
const got = require('got');
const path = require('path');
const fs = require('fs');

const {originUrl, imgDir} = require('./config');
const {getImgUrls} = require('./analyze');

/**
 * 下载图片并写入本地
 * @param {*} url 图片url地址
 * @param {*} index 
 */
const dowloadImg = (url, index) => {
    const imgPathObj = path.parse(url);
    const readStream = got.stream(url);
    const writeStream = fs.createWriteStream(path.join(imgDir, `${imgPathObj.name}.${imgPathObj.ext}`), {
        'encoding': 'utf-8'
    });
    readStream.pipe(writeStream);
}

/**
 * 入口函数
 */
const start = async () => {
    try {
        const response = await got(originUrl);
        getImgUrls(response.body, (url, index) => {
            dowloadImg(`https:${url}`, index);
        });
    } catch (error) {
        console.log(error.response.body);
    }
}

start();