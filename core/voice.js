const config = require('../config.js');
const Sonus = require('sonus');
const {Models} = require('snowboy');
const speech = require('@google-cloud/speech')(config.google);
const sound = require('./sound.js');

const hotwords = [{ file: config.snowboy.resource, sensitivity: config.snowboy.sensitivity, hotword: config.snowboy.hotword }];
const language = config.language;
const sonus = Sonus.init({ hotwords, language }, speech);

sonus.on('hotword', function (index, keyword) {
  console.log('Hi !');
  sound.play();
});

sonus.on('partial-result', function (result) {

});

sonus.on('error', function (result) {
  console.log(result);
});

module.exports.start = function start(cb){
    Sonus.start(sonus);
    sonus.on('final-result', cb);
};

module.exports.stop = function stop(){
    sonus.stop(); //start listening
};
