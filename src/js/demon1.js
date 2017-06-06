var obj = require ('./tool.js');
var demon1 = {
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		//var demon1 = document.getElementsByClassName(className)[0];
		var demon1 = obj.getDom('demon1');
		demon1.onclick = this.changeStyle;
	},
	changeStyle: function(){
		this.style.width = '200px';
		this.style.height = '200px';
		this.style.background = 'green';
		alert("demo1被点击了");
	}
}

module.exports = demon1;