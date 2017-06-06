//entry.js
require ('../css/index.css');//引入css文件
var demo1 = require ('../js/demon1.js');
var demo2 = require ('../js/demon2.js');

demo1.init();
demo2.init();

var oImg = new Image();
oImg.src = require('../img/img.png');//当成模块引入图片
document.body.appendChild(oImg);