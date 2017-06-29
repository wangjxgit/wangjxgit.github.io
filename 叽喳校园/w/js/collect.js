$(function () {
	$.ajax({type:"get",url:"json/news.json",cache:false,dataType:"json",
		success:function(col){
			for (var i = 0; i < col.collect[0].ColImg.length; i++) {
				var divcol=$('<div class="g-Col"></div>');
				var newimg=$('<img src='+col.collect[0].ColImg[i]+' alt='+col.collect[1].ColImgAT[i]+' title='+col.collect[1].ColImgAT[i]+'>');
				var newdiv=$('<div></div>');
				var newh3=$('<h3>'+col.collect[2].ColH3[i]+'</h3>');
				var newp=$('<p class=g-ColMoney></p>');
				var news=$('<span>'+"￥"+'</span>');
				var newsp=$('<span>'+col.collect[3].ColMoney[i]+'</span>');
				var newspan=$('<span class="g-ColMhours">'+col.collect[4].ColMhours[i]+'</span>');
				var newpt=$('<p class="g-ColTime">'+col.collect[5].ColTime[i]+'</p>');
				newp.append(news);
				newp.append(newsp);
				newp.append(newspan);
				newdiv.append(newh3);
				newdiv.append(newp);
				newdiv.append(newpt);
				divcol.append(newimg);
				divcol.append(newdiv);
				$("#g-ColCon").append(divcol);
				$("#g-ColCon").on("click",".g-Col",function(){
					window.open("tra.html","_self");
				});
			}
		}
	})
	$("#w-Return").click(function(){
		window.history.go(-1);
	});
})