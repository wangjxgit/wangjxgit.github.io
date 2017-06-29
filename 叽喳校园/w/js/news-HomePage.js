$(function(){
	$.ajax({type:"get",url:"json/news.json",cache:false,
		success:function(news){
			// 导航栏
			for (var i = 0; i < news.New[0].HPnav.length; i++) {
				$("#g-HPnav").append($("<li>"+news.New[0].HPnav[i]+"</li>"));
			}
			$("#g-HPnav li").eq(0).addClass("g-navSelect");
			$("#g-HPnav li").click(function(){
				var i=$(this).index();
				$("#g-HPnav li").eq(i).addClass("g-navSelect").siblings().removeClass("g-navSelect");
				$(".g-HPnavCon .g-HPnavli").eq(i).addClass("g-navShow").siblings().removeClass("g-navShow");
			});
			// 大图滚动布局
			for (var i = 0; i < news.New[1].HPdt.length; i++) {
				$("#g-HPdt").append($("<img src="+"'"+news.New[1].HPdt[i]+"'"+" atl="+"'"+news.New[2].HPdtAT[i]+"'"+" title="+"'"+news.New[2].HPdtAT[i]+"'"+">"))
			}
			$("#g-HPdt img").eq(0).addClass("g-HPdtShow");
			for (var i = 0; i < news.New[2].HPdtAT.length; i++) {
				$("#g-HPdtTitle").append($("<h3>"+news.New[2].HPdtAT[i]+"</h3>"))
			}
			$("#g-HPdtTitle h3").eq(0).addClass("g-HPdtTitShow");
			for (var i = 0; i < news.New[2].HPdtAT.length; i++) {
				$("#g-HPdtyuan").append($("<li></li>"))
			}
			$("#g-HPdtyuan li").eq(0).addClass("g-HPdtyuShow");
			// 大图滚动实现
			var timer1=null;
			var x=0;
			function gmoveauto () {
				$("#g-HPdt img").eq(x).fadeIn(500).siblings().fadeOut(500);
				$("#g-HPdtTitle h3").eq(x).addClass("g-HPdtTitShow").siblings().removeClass("g-HPdtTitShow");
				$("#g-HPdtyuan li").eq(x).addClass("g-HPdtyuShow").siblings().removeClass("g-HPdtyuShow");
			}
			function gmove () {
				timer1=setInterval(function(){
					x++;
					if (x>$("#g-HPdt img").length-1) {
						x=0;
					}
					gmoveauto();
				},2000);
			}
			gmove();
			$("#g-HPdtyuan li").click(function(){
				clearInterval(timer1);
				x=$(this).index();
				gmoveauto();
				gmove();
			});
			$("#g-HPdt img").mouseenter(function () {
				clearInterval(timer1);
			});
			$("#g-HPdt img").mouseleave(function () {
				x=$(this).index();
				gmove();
			});
			// 新闻首页列表
			for(var j=0;j<4;j++) {
				var newli=$('<li></li>');
				var newa=$('<a herf="javascript:;" class="g-HPConA">'+'<img src='+news.New[3].HPCon[0].HPheadnews[0].imgs[j]+' alt='+news.New[3].HPCon[0].HPheadnews[1].imgsAT[j]+' title='+news.New[3].HPCon[0].HPheadnews[1].imgsAT[j]+' </a>');
				var HPConxtDiv=$('<div class="g-HPConxt"></div>');
				var HPConxtH3=$('<h3>'+news.New[3].HPCon[0].HPheadnews[2].HPConxth3[j]+'</h3>');
				var HPConxtP=$('<p>'+news.New[3].HPCon[0].HPheadnews[3].HPConxtp[j]+'</p>');
				var HPConxtdiv=$('<div></div>');
				for (var i = 0; i < news.New[3].HPCon[0].HPheadnews[4].HPConxtpD.length; i++) {
					HPConxtdiv.append($('<span>'+news.New[3].HPCon[0].HPheadnews[4].HPConxtpD[i]+'</span>'));
				}
				HPConxtDiv.append(HPConxtH3);
				HPConxtDiv.append(HPConxtP);
				HPConxtDiv.append(HPConxtdiv);
				newli.append(newa);
				newli.append(HPConxtDiv);
				$("#g-HPheadnews").append(newli);
				$("#g-HPheadnews .g-HPConxt").eq(j).find("span").eq(2).addClass("g-HPConzan");
				$("#g-HPheadnews .g-HPConxt").eq(j).find("span").eq(3).addClass("g-HPConp");
			}
			// 新闻学习列表
			for (var j = 0; j < 6; j++) {
				var newli=$('<li></li>');
				var newa=$('<a herf="javascript:;" class="g-HPConA">'+'<img src='+news.New[3].HPCon[1].HPConStudy[0].imgs[j]+' alt='+news.New[3].HPCon[1].HPConStudy[1].imgsAT[j]+' title='+news.New[3].HPCon[1].HPConStudy[1].imgsAT[j]+' </a>');
				var HPConxtDiv=$('<div class="g-HPConxt"></div>');
				var HPConxtH3=$('<h3>'+news.New[3].HPCon[1].HPConStudy[2].HPConxth3[j]+'</h3>');
				var HPConxtP=$('<p>'+news.New[3].HPCon[1].HPConStudy[3].HPConxtp[j]+'</p>');
				var HPConxtdiv=$('<div></div>');
				for (var i = 0; i < news.New[3].HPCon[1].HPConStudy[4].HPConxtpD.length; i++) {
					HPConxtdiv.append($('<span>'+news.New[3].HPCon[1].HPConStudy[4].HPConxtpD[i]+'</span>'));
				}
				HPConxtDiv.append(HPConxtH3);
				HPConxtDiv.append(HPConxtP);
				HPConxtDiv.append(HPConxtdiv);
				newli.append(newa);
				newli.append(HPConxtDiv);
				$("#g-HPConStudy").append(newli);
				$("#g-HPConStudy li").eq(0).addClass("g-HPConli");
				$("#g-HPConStudy .g-HPConxt").eq(j).find("span").eq(2).addClass("g-HPConzan");
				$("#g-HPConStudy .g-HPConxt").eq(j).find("span").eq(3).addClass("g-HPConp");
			}
			// 新闻娱乐列表
			for (var j = 0; j < 6; j++) {
				var newli=$('<li></li>');
				var newa=$('<a herf="javascript:;" class="g-HPConA">'+'<img src='+news.New[3].HPCon[2].HPConRec[0].imgs[j]+' alt='+news.New[3].HPCon[2].HPConRec[1].imgsAT[j]+' title='+news.New[3].HPCon[2].HPConRec[1].imgsAT[j]+' </a>');
				var HPConxtDiv=$('<div class="g-HPConxt"></div>');
				var HPConxtH3=$('<h3>'+news.New[3].HPCon[2].HPConRec[2].HPConxth3[j]+'</h3>');
				var HPConxtP=$('<p>'+news.New[3].HPCon[2].HPConRec[3].HPConxtp[j]+'</p>');
				var HPConxtdiv=$('<div></div>');
				for (var i = 0; i < news.New[3].HPCon[2].HPConRec[4].HPConxtpD.length; i++) {
					HPConxtdiv.append($('<span>'+news.New[3].HPCon[2].HPConRec[4].HPConxtpD[i]+'</span>'));
				}
				HPConxtDiv.append(HPConxtH3);
				HPConxtDiv.append(HPConxtP);
				HPConxtDiv.append(HPConxtdiv);
				newli.append(newa);
				newli.append(HPConxtDiv);
				$("#g-HPConRec").append(newli);
				$("#g-HPConRec li").eq(0).addClass("g-HPConli");
				$("#g-HPConRec .g-HPConxt").eq(j).find("span").eq(2).addClass("g-HPConzan");
				$("#g-HPConRec .g-HPConxt").eq(j).find("span").eq(3).addClass("g-HPConp");
			}
			// 新闻交友列表
			for (var j = 0; j < 6; j++) {
				var newli=$('<li></li>');
				var newa=$('<a herf="javascript:;" class="g-HPConA">'+'<img src='+news.New[3].HPCon[3].HPConMF[0].imgs[j]+' alt='+news.New[3].HPCon[3].HPConMF[1].imgsAT[j]+' title='+news.New[3].HPCon[3].HPConMF[1].imgsAT[j]+' </a>');
				var HPConxtDiv=$('<div class="g-HPConxt"></div>');
				var HPConxtH3=$('<h3>'+news.New[3].HPCon[3].HPConMF[2].HPConxth3[j]+'</h3>');
				var HPConxtP=$('<p>'+news.New[3].HPCon[3].HPConMF[3].HPConxtp[j]+'</p>');
				var HPConxtdiv=$('<div></div>');
				for (var i = 0; i < news.New[3].HPCon[3].HPConMF[4].HPConxtpD.length; i++) {
					HPConxtdiv.append($('<span>'+news.New[3].HPCon[3].HPConMF[4].HPConxtpD[i]+'</span>'));
				}
				HPConxtDiv.append(HPConxtH3);
				HPConxtDiv.append(HPConxtP);
				HPConxtDiv.append(HPConxtdiv);
				newli.append(newa);
				newli.append(HPConxtDiv);
				$("#g-HPConMF").append(newli);
				$("#g-HPConMF li").eq(0).addClass("g-HPConli");
				$("#g-HPConMF .g-HPConxt").eq(j).find("span").eq(2).addClass("g-HPConzan");
				$("#g-HPConMF .g-HPConxt").eq(j).find("span").eq(3).addClass("g-HPConp");
			}
			// 新闻活动列表
			for (var j = 0; j < 6; j++) {
				var newli=$('<li></li>');
				var newa=$('<a herf="javascript:;" class="g-HPConA">'+'<img src='+news.New[3].HPCon[4].HPConActive[0].imgs[j]+' alt='+news.New[3].HPCon[4].HPConActive[1].imgsAT[j]+' title='+news.New[3].HPCon[4].HPConActive[1].imgsAT[j]+' </a>');
				var HPConxtDiv=$('<div class="g-HPConxt"></div>');
				var HPConxtH3=$('<h3>'+news.New[3].HPCon[4].HPConActive[2].HPConxth3[j]+'</h3>');
				var HPConxtP=$('<p>'+news.New[3].HPCon[4].HPConActive[3].HPConxtp[j]+'</p>');
				var HPConxtdiv=$('<div></div>');
				for (var i = 0; i < news.New[3].HPCon[4].HPConActive[4].HPConxtpD.length; i++) {
					HPConxtdiv.append($('<span>'+news.New[3].HPCon[4].HPConActive[4].HPConxtpD[i]+'</span>'));
				}
				HPConxtDiv.append(HPConxtH3);
				HPConxtDiv.append(HPConxtP);
				HPConxtDiv.append(HPConxtdiv);
				newli.append(newa);
				newli.append(HPConxtDiv);
				$("#g-HPConActive").append(newli);
				$("#g-HPConActive li").eq(0).addClass("g-HPConli");
				$("#g-HPConActive .g-HPConxt").eq(j).find("span").eq(2).addClass("g-HPConzan");
				$("#g-HPConActive .g-HPConxt").eq(j).find("span").eq(3).addClass("g-HPConp");
			}
			// 返回首页
			$("#w4").click(function () {
				window.open("inde.html","_self")
			});
			// 新闻首页头条列表进入新闻详情
			$("#g-HPheadnews li").click(function () {
				var i=$(this).index();
				window.open("news-Detail.html","_self")
			});
			// 大图滚动进入新闻详情
			$("#g-HPdt img").click(function () {
				var i=$(this).index();
				window.open("news-Detail.html","_self")
			});
			// 新闻首页学习列表进入新闻详情
			$("#g-HPConStudy li").click(function () {
				var i=$(this).index();
				window.open("news-Detail.html","_self")
			});
			// 新闻首页娱乐列表进入新闻详情
			$("#g-HPConRec li").click(function () {
				var i=$(this).index();
				window.open("news-Detail.html","_self")
			});
			// 新闻首页交友列表进入新闻详情
			$("#g-HPConMF li").click(function () {
				var i=$(this).index();
				window.open("news-Detail.html","_self")
			});
			// 新闻首页活动列表进入新闻详情
			$("#g-HPConActive li").click(function () {
				var i=$(this).index();
				window.open("news-Detail.html","_self")
			});
			//评论和点赞
			$(".g-HPConzan").each(function(){
				var a=105;
				$(this).click(function(event){
					event.stopPropagation();
					if($(this).css("color")=="rgb(102, 102, 102)"){
						a++;
						setcookie(9,"赞",a);
						$(this).html(getcookie("赞"));
						$(this).css("color","rgb(236, 64, 64)");
					}else if($(this).css("color")=="rgb(236, 64, 64)"){
						a--;
						setcookie(9,"赞",a);
						$(this).html(getcookie("赞"));
						$(this).css("color","rgb(102, 102, 102)");
					}
				});
			});
			$(".g-HPConp").each(function(){
				$(this).click(function(event){
					event.stopPropagation();
				});
			});
		}
	});
	// 搜索
	$("#g-newsSearch").click(function(){
		$("#g-HPnavqie").css("height","89px");
		$("#g-HPnav").css("display","none");
		$("#g-HPnavSearch").css("display","block");
		$("#g-newsSearch").css("display","none");
		$(".w-cebian").css("display","none");
		$("#w-Return").css("display","block");
	});
	$("#w-Return").click(function(){
		$("#g-HPnavqie").css("height","60px");
		$("#g-HPnavSearch").css("display","none");
		$("#g-HPnav").css("display","block");
		$("#g-newsSearch").css("display","block");
		$("#w-Return").css("display","none");
		$(".w-cebian").css("display","block");
	});
	$("#g-HPnavSearch input").focus(function () {
		if ($("#g-HPnavSearch input").get(0).value=="搜索你想要的") {
			$("#g-HPnavSearch input").val("");
			$("#g-HPnavSearch input").css("color","#000");
		}
	});
	$("#g-HPnavSearch input").blur(function () {
		if ($("#g-HPnavSearch input").get(0).value=="") {
			$("#g-HPnavSearch input").val("搜索你想要的");
			$("#g-HPnavSearch input").css("color","#ccc");
		}
	})
});
