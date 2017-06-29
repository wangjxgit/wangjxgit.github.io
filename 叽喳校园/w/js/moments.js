$(function(){
	$.ajax({
		url:"json/data.json",
		success:function(data){
			/*载入朋友圈信息*/
			var n=getcookie("friend");
			for(var i=0;i<data.user[n].friend.length;i++){
				/*获取时间*/
				var timer=new Date().getTime()-data.user[n].friend[i].timer;
				if(timer>=0&&timer<1000*60){
					timer=Math.floor(timer/(1000))+"秒前";
				}else if(timer>=1000*60&&timer<1000*60*60){
					timer=Math.floor(timer/(1000*60))+"分钟前";
				}else if(timer>=1000*60*60&&timer<1000*60*60*24){
					timer=Math.floor(timer/(1000*60*60))+"小时前";
				}else if(timer>=1000*60*60*24&&timer<1000*60*60*24*365){
					timer=Math.floor(timer/(1000*60*60*24))+"天前";
				}
				$("#y_moments").append($('<li><img src="'+data.user[n].header+'" class="y_header"><div class="y_con"><h2>'+data.user[n].friend[i].tle+'</h2><p>'+data.user[n].friend[i].txt+'</p><div class="y_pic2"><img src="'+data.user[n].friend[i].image[0]+'"><img src="'+data.user[n].friend[i].image[1]+'"></div><div class="y_txt"><h3>'+timer+'</h3><h5 class="y_speak">360</h5><h5 class="y_like">'+data.user[n].friend[i].like+'</h5></div></div></li>'))
			}
			/*点击关注*/
			for(var i=0;i<$(".y_txt").length;i++){
				$(".y_txt").eq(i).find("h5").eq(1).click(function(ev){
					ev.stopPropagation?ev.stopPropagation():ev.cancelButtle=true;
					if($(this).css("color")=="rgb(102, 102, 102)"){
						$(this).removeClass().addClass("y_like_red");
						$(this).html(Number($(this).html())+1);
					}else if($(this).css("color")=="rgb(236, 64, 64)"){
						$(this).removeClass().addClass("y_like");
						$(this).html(Number($(this).html())-1);
					}
				})
			}
			/*返回上一个界面*/
			$(".y_talk_ruturn").click(function(){
				history.back();
			})
			/*返回个人中心*/
			$(".y_search").on("click",function(){
				window.open("percenter.html","_self");
			});
		},
		error:function(){
			alert("请求失败");
		}
	})
})


/*获取cookie*/
function getcookie(key){
	var arr1=unescape(document.cookie).split("; ");
	for(var i=0;i<arr1.length;i++){
		var arr2=arr1[i].split('=');
		if(arr2[0]==key){
			return arr2[1];
		}
	}
}
