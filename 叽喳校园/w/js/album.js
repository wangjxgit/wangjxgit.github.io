$(function () {
	$.ajax({type:"get",url:"json/news.json",cache:false,dataType:"json",
		success:function(al){
			for (var i = 0; i < al.album[0].AlbImg.length; i++) {
				var newdiv=$('<div class="g-AlbImg"></div>')
				var newImg=$("<img>");
				var newh3=$("<h3></h3>");
				newdiv.append(newImg);
				newdiv.append(newh3);
				$("#g-AlbCon").append(newdiv);
				$(".g-AlbImg img").eq(i).attr("src",al.album[0].AlbImg[i]);
				$(".g-AlbImg h3").eq(i).html(al.album[1].AlbH3[i]);
			}
		}
	})


	$("#w-Return").click(function(){
		window.history.go(-1);
	});
})