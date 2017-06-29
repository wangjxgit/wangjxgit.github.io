$(function(){
	$.ajax({
		type:"get",
		url:"json/school.json",
		cache:false,
		dataType:"json",
		success:function(s){
			//载入大图
			for (var i = 0; i < s.train[0].datu.length; i++) {
				var imgs=$('<img src="'+s.train[0].datu[i]+'" alt="">');
				$("#w1 ul").append('<li></li>');
				$("#w1 .w_top").append(imgs);
				$("#w1 img:first").addClass("w_top1");
				$("#w1 li:first").addClass("w_tp1");
			};
			//载入课程
			for (var i = 0; i < s.train[1].kecheng[0].kImg.length; i++) {
				var lis=$('<li><img src="'+s.train[1].kecheng[0].kImg[i]+'" alt=""><h2>'+s.train[1].kecheng[1].kTit[i]+'</h2><span>￥'+s.train[1].kecheng[2].kMoney[i]+'</span><var>'+s.train[1].kecheng[3].kTime[i]+'</var></li>');
				$("#w8").append(lis);
				$("#w8 li:even").addClass("w_tr3");
			};
		},
		error:function(){
			alert("请求失败");
		}
	});
	//大图滚动
	var x=0;
	var timer1=null;
	function automove(){
		timer1=setInterval(function(){
			x++;
			if (x>$("#w1 img").length-1){
				x=0;
			}
			$("#w1 img").eq(x).fadeIn(500).siblings().fadeOut(500);
			$("#w1 li").eq(x).addClass("w_tp1").siblings().removeClass("w_tp1");
		},2000);
	}
	automove();
	$("#w1").on("mouseenter","li",function(){
		clearInterval(timer1);
		x=$("#w1 li").index(this);
		$("#w1 img").eq(x).fadeIn(500).siblings().fadeOut(500);
		$("#w1 li").eq(x).addClass("w_tp1").siblings().removeClass("w_tp1");
	});
	$("#w1").on("mouseleave","li",function(){
		automove();
	});
	//跳转事件
	$("#w8").on("click","li",function(){
		window.open("tra.html","_self");
	});
	// 返回首页
	$("#w4").click(function () {
		window.open("inde.html","_self")
	});
});
