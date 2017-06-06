var obj = require ('./tool.js');
var demon2 = {
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		//var demon1 = document.getElementsByClassName(className)[0];
		var demon2 = obj.getDom('demon2');
		demon2.onclick = this.changeStyle;
	},
	changeStyle: function(){
		this.style.width = '100px';
		this.style.height = '100px';
		this.style.background = 'grey';
		alert("demo2被点击了");
	}
}

module.exports = demon2;