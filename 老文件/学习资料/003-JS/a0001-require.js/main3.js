requirejs.config({
	main4: "main4"
})

requirejs(["main4"], function(main4) {
	main4.jichu();
})

define(["main3"], function() {
	return {
		conname: function() {
			$(".box").css("background", "red");
			console.log("main3.js被调用,改变了box的背景颜色");
		}
	}
});