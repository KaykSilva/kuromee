const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs-extra')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const {
imageToWebp,
videoToWebp,
writeExifImg,
writeExifVid
} = require('./lib/exif')
const util = require('util')
const {
exec,
spawn,
execSync
} = require("child_process")
const axios = require('axios')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const {
formatp,
tanggal,
formatDate,
getTime,
clockString,
runtime,
jsonformat,
format,
parseMention,
getRandom,
smsg,
isUrl,
generateMessageTag,
getBuffer,
getSizeMedia,
fetchJson,
await,
sleep
} = require('./lib/myfunc')

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };

const resizeImg = async function (buffer, sizew, sizeh) {
if(!Buffer.isBuffer(buffer)) throw new Error('Não é do tipo buffer')
if (!sizew) sizew = 100
if (!sizeh) sizeh = 100
const { MIME_JPEG } = require('jimp');
const jimp = require('jimp');
imagi = await jimp.read(buffer);
tekis = imagi.resize(sizew, sizeh)
img = tekis.getBufferAsync(MIME_JPEG)
imgg = await img
return imgg
}

module.exports = {
color,
pino,
Boom,
fs,
yargs,
chalk,
FileType,
path,
PhoneNumber,
imageToWebp,
videoToWebp,
writeExifImg,
writeExifVid,
util,
exec,
spawn,
execSync,
axios,
JSDOM,
moment,
os,
performance,
speed,
primbon,
Primbon,
formatp,
tanggal,
formatDate,
getTime,
clockString,
runtime,
jsonformat,
format,
parseMention,
getRandom,
smsg,
isUrl,
generateMessageTag,
getBuffer,
getSizeMedia,
fetchJson,
await,
sleep,
resizeImg
}