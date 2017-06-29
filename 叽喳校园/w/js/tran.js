$(function(){
	$.ajax({
		type:"get",
		url:"json/school.json",
		cache:false,
		dataType:"json",
		success:function(t){
			// 载入培训课程信息
			for (var i = 0; i < t.tran[0].tranImg.length; i++) {
				var li=$('<li></li>');
				var div1=$('<div class="w_tran5"><img src="'+t.tran[0].tranImg[i]+'" alt=""></div>');
				var div2=$('<div class="w_tran6"><h3>'+t.tran[1].tranTit[i]+'</h3><span class="w_tran7">￥'+t.tran[2].tranMoney[i]+'</span><p class="w_tran8"><span></span><var>'+t.tran[3].tranTime[i]+'</var><em>'+t.tran[4].tranPing[i]+'</em><a class="w_c4" href="script:;"></a><em class="w_c6">'+t.tran[5].tranZan[i]+'</em><a class="w_c5" href="script:;"></a></p></div>');
				li.append(div1,div2);
				$("#w10").append(li);
			}
			$("#w10 li:first").addClass("w_tran4");
		},
		error:function(){
			alert("请求失败");
		}
	});
	// 搜索框事件
	$("#w2 input").focus(function(){
		if ($("#w2 input").val()=="Search"){
			$("#w2 input").val("");
			$("#w2 input").css({
				"background":"#fff",
				"text-indent":0
			});
		}
	});
	$("#w2 input").blur(function(){
		if ($("#w2 input").val()==""){
			$("#w2 input").val("Search");
			$("#w2 input").css({
				"background":"url(img/w_t7.png) 12px 13px no-repeat",
				"background-color":"#fff",
				"text-indent":"46px"
			});
		}
	});
	// 返回跳转事件
	$("#w10").on("click","li",function(){
		window.open("tra.html","_self");
	});
	// 点赞事件
	$("#w10").on("click",".w_c5",function(event){
		event.stopPropagation();
		var i=$("#w10 .w_c5").index(this);
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
});