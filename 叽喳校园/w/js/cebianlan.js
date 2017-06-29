$(function(){
	$.ajax({
		type:"get",
		url:"json/school.json",
		cache:false,
		dataType:"json",
		success:function(s){
			var div=$('<div class="w_index"></div>');
			var div1=$('<div id="w6" class="w_index2"></div>');
			if(getcookie("登录")=="true"){
				var acc=getcookie("账号");
			}else{
				var acc="请登录";
			}
			var div2=$('<div class="w_head"><a id="w7" class="w_hd1" href="script:;"><img src="img/w_t6.png" alt=""></a><a class="w_hd2" href="percenter.html"><img src="img/w_ind2.png" alt=""></a></div><div class="w_index3"><div class="w_index4"><img src="img/w_c2.png" alt=""><span>'+acc+'</span></div><div id="logout">登出</div></div>');
			var ul=$('<ul class="w_index5"></ul>');
			for (var i = 0; i < s.cbl.cImg.length; i++) {
				var lis=$('<li><img class="w_index6" src="'+s.cbl.cImg[i]+'" alt=""><span>'+s.cbl.cTit[i]+'</span><a href="script:;"><img src="img/w_c9.png" alt=""></a></li>');
				ul.append(lis);
			};
			div1.append(div2,ul);
			var div0=$("body div:first");
			var wdh=$(div0).height();
			div.append(div0,div1);
			$("body").prepend(div);
			$(".w_index5 li:last").addClass("w_index7");
			//添加必要的某些属性属性
			div0.addClass("w_index1");
			div.css("height",wdh+"px");
			//侧边栏事件
			$("#w4").on("click",function(event){
				event.stopPropagation();
				$(".w_index1").animate({
					left: "580px"
				},500);
				$("#w6").animate({
					left: 0
				},500,function(){
					var div3=$('<div class="w_on"></div>');
					div3.css({
						zIndex: 3,
						position: "absolute",
						top: 0,
						left: 0,
						width: "640px",
						height: $(".w_index1").height()
					});
					$(".w_index1").append(div3);
				});
			});
			if ($("#w6").get(0).style.left==0){
				$(".w_index1").on("click",function(){
					$("#w6").animate({
						left: "-580px"
					},500);
					$(".w_index1").animate({
						left: 0
					},500,function(){
						$(".w_on").remove();
					});
				});
			}
			$("#w7").on("click",function(){
				$("#w6").animate({
					left: "-580px"
				},500);
				$(".w_index1").animate({
					left: 0
				},500,function(){
					$(".w_on").remove();
				});
			});
			$(window).one("scroll",function(){
				$(".w_index").css("height",$(".w_index1").height()+"px");
			});
			$(document).one("mousedown",function(){
				$(".w_index").css("height",$(".w_index1").height()+"px");
			});
			//侧边栏跳转事件
			$(".w_index5").on("click","li",function(){
				var i=$(".w_index5 li").index(this);
				if (i==0){window.open("news-HomePage.html","_self");}
				if (i==1){window.open("shouye.html","_self");}
				if (i==2){window.open("train.html","_self");}
				if (i==3){window.open("friends.html","_self");}
				if (i==4){window.open("jzyy.html","_self");}
				if (i==5){window.open("percenter.html","_self");}
			});

			if(getcookie("登录")=="true"){
				$("#logout").css("display","block");
				$(".w_index4").on("click","span",function(){
					window.open("percenter.html","_self");
				});
			}else{
				$("#logout").css("display","none");
				$(".w_index4").on("click","span",function(){
					window.open("dl.html","_self");
				});
			}
			$("#logout").click(function(){
				setcookie(3,"登录","false");
				window.open("dl.html","_self");
			})
		},
		error:function(){
			alert("请求失败");
		}
	});
});
