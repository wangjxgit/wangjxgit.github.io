$(function () {
	$.ajax({type:"get",url:"json/news.json",cache:false,dataType:"json",
		success:function(nd){
			$(".g-newsDeyoung").html(nd.New[4].newsDebt);
			for (var i = 0; i < 6; i++) {
				$(".g-newsDeMes").append($("<span>"+nd.New[5].newsDeMes[i]+"</span>"));
				$(".g-newsDeMes span").eq(3).addClass("g-newsDeMesHours");
				$(".g-newsDeMes span").eq(5).addClass("g-newsDeMesMinute");
			}
			for (var i = 0; i < 2; i++) {
				$(".g-newsDeMes").append($("<strong>"+nd.New[5].newsDeMes[i+6]+"</strong>"));
				$(".g-newsDeMes strong").eq(1).addClass("g-newsDeMesName");
			}
			$("#g-newsDeImg").attr({src:nd.New[6].newsDeimg,alt:nd.New[7].newsDeAT,title:nd.New[7].newsDeAT});
			$(".g-newsDePar").html(nd.New[8].newsDep);
		}
	})


	$("#w-Return").click(function(){
		window.history.go(-1);
	});
	window.onload=function(){
		var a=getcookie("赞");
		$("#g-newsDeFZan").click(function(){
			a++;
			setcookie(9,"赞",a);
		});
	}
	$("#g-newsDeFoot input").focus(function () {
		if ($("#g-newsDeFoot input").get(0).value=="写评论") {
			$("#g-newsDeFoot input").val("");
			$("#g-newsDeFoot input").css("color","#000");
		}
	});
	$("#g-newsDeFoot input").blur(function () {
		if ($("#g-newsDeFoot input").get(0).value=="") {
			$("#g-newsDeFoot input").val("写评论");
			$("#g-newsDeFoot input").css("color","#ccc");
		}
	})
})