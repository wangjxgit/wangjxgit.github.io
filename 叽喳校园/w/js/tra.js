$(function(){
	$.ajax({
		type:"get",
		url:"json/school.json",
		cache:false,
		dataType:"json",
		success:function(s){
			//页面内容载入
			var div1=$('<div class="w_tra2"><img src="'+s.tra.tImg+'" alt=""></div>');
			var div2=$('<div class="w_tra3"><h3>'+s.tra.tTit+'</h3><strong>￥'+s.tra.tMoney+'</strong></div>');
			var ul=$('<ul class="w_tra4"></ul>');
			for (var i = 0; i < s.tra.tTTD[0].Img.length; i++) {
				var lis=$('<li><img src="'+s.tra.tTTD[0].Img[i]+'" alt=""><span>'+s.tra.tTTD[1].Span[i]+'</span></li>');
				ul.append(lis);
			};
			$(".w_tra1").append(div1,div2,ul);
			var dt1=$('<dt><span>'+s.tra.tT+'</span></dt>');
			var dd1=$('<dd><p>'+s.tra.tC[0]+'</p><p>'+s.tra.tC[1]+'</p></dd>');
			$(".w_tra5 dl:first").append(dt1,dd1);
			var dt2=$('<dt><span>'+s.tra.tD+'</span></dt>');
			$(".w_tra6").append(dt2);
			for (var i = 0; i < s.tra.tP[0].Pan.length; i++) {
				var dds=$('<dd><span>'+s.tra.tP[0].Pan[i]+'</span><var>'+s.tra.tP[1].Con[i]+'</var></dd>');
				$(".w_tra6").append(dds);
			};
			$(".w_tra6 dd:first").addClass("w_tra7");
		},
		error:function(){
			alert("请求失败");
		}
	});
	//评论事件
	$("#w3 input").focus(function(){
		if ($("#w3 input").val()=="写评论"){
			$("#w3 input").val("");
			$("#w3 input").css({
				"background": "#fff",
				"text-indent": "17px"
			});
		}
	});
	$("#w3 input").blur(function(){
		if ($("#w3 input").val()==""){
			$("#w3 input").val("写评论");
			$("#w3 input").css({
				"background": "url(img/w_t17.png) 17px 7px no-repeat #fff",
				"text-indent": "57px"
			});
		}
	});
	//返回上一页事件
	$("#w9").click(function(){
		history.go(-1);
	});
});