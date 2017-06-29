$(function(){
	$.ajax({
		type:"get",
		url:"json/school.json",
		cache:false,
		dataType:"json",
		success:function(s){
			//载入大图
			for (var i = 0; i < s.inde[0].datu.length; i++) {
				var imgs=$('<img src="'+s.inde[0].datu[i]+'" alt="">');
				$("#w1 ul").append('<li></li>');
				$("#w1 .w_top").append(imgs);
				$("#w1 img:first").addClass("w_top1");
				$("#w1 li:first").addClass("w_tp1");
			};
			//载入最新
			for (var i = 0; i < s.inde[1].zuixin[0].zxImg.length; i++) {
				var dd1=$('<dd class="w_c2"></dd>');
				var div1=$('<div class="w_c3"><img src="'+s.inde[1].zuixin[0].zxImg[i]+'" alt=""></div>');
				var dl1=$('<dl><dt>'+s.inde[1].zuixin[1].zxTit[i]+'</dt><dd>'+s.inde[1].zuixin[2].zxCon[i]+'</dd></dl>');
				var p1=$('<p><em>'+s.inde[1].zuixin[3].zxPing[i]+'</em><a class="w_c4" href="script:;"></a><em class="w_c6">'+s.inde[1].zuixin[4].zxZan[i]+'</em><a class="w_c5" href="script:;"></a></p>');
				dd1.append(div1,dl1,p1);
				$(".w_con dl").eq(0).append(dd1);
			};
			//载入tit
			for (var i = 0; i < s.inde[2].ultit[0].uImg.length; i++) {
				var lis=$('<li class="w_t'+(i+1)+'"><img src="'+s.inde[2].ultit[0].uImg[i]+'" alt=""><h3>'+s.inde[2].ultit[1].uTit[i]+'</h3></li>');
				$(".w_tit ul").append(lis);
			};
			for (var i = 0; i < s.inde[3].oltit[0].oImg.length; i++) {
				var lis=$('<li class="w_t'+(i+3)+'"><img src="'+s.inde[3].oltit[0].oImg[i]+'" alt=""><h3>'+s.inde[3].oltit[1].oTit[i]+'</h3></li>');
				$(".w_tit ol").append(lis);
			};
		},
		error:function(){
			alert("请求失败");
		}
	});
	//大图滚动事件
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
		clearInterval(timer1);
		automove();
	});
	//点赞事件
	$(".w_con").on("click",".w_c5",function(event){
		event.stopPropagation();
		var i=$(".w_con .w_c5").index(this);
		var zan=$(".w_c6").eq(i).html();
		if ($(".w_c6").eq(i).css("color")=="rgb(102, 102, 102)"){
			zan++;
			$(".w_c6").eq(i).html(zan);
			$(".w_c6").eq(i).css("color","rgb(236, 64, 64)");
		}else{
			zan--;
			$(".w_c6").eq(i).html(zan);
			$(".w_c6").eq(i).css("color","rgb(102, 102, 102)");
		}	
	});
	//跳转事件
	$(".w_tit").on("click",".w_t1",function(){
		window.open("news-HomePage.html","_self");
	});
	$(".w_tit").on("click",".w_t2",function(){
		window.open("shouye.html","_self");
	});
	$(".w_tit").on("click",".w_t3",function(){
		window.open("train.html","_self");
	});
	$(".w_tit").on("click",".w_t4",function(){
		window.open("friends.html","_self");
	});
	$(".w_tit").on("click",".w_t5",function(){
		window.open("jzyy.html","_self");
	});
	$(".w_con").on("click",".w_c2",function(){
		window.open("news-Detail.html","_self");
	});
});