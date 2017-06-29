$(function(){
	$.ajax({
		url:"json/data.json",
		success:function(data){
			/*载入朋友信息*/
			for(var i=0;i<data.user.length;i++){
				$("#y_friend").append($('<li><img src="'+data.user[i].header+'" class="y_header"><div class="y_text"><h3>'+data.user[i].nickname+'</h3><div class="y_text_b"><h5 class="y_like">关注<span>'+data.user[i].focus+'</span></h5><h5 class="y_speak">发言<span>'+data.user[i].talk+'</span></h5></div></div></li>'))
			}
			/*点击关注*/
			for(var i=0;i<$(".y_text_b").length;i++){
				$(".y_text_b").eq(i).find("h5").eq(0).click(function(ev){
					ev.stopPropagation?ev.stopPropagation():ev.cancelButtle=true;
					if($(this).css("color")=="rgb(132, 132, 132)"){
						$(this).removeClass().addClass("y_like_red");
						$(this).find("span").html(Number($(this).find("span").html())+1);
					}else if($(this).css("color")=="rgb(236, 64, 64)"){
						$(this).removeClass().addClass("y_like");
						$(this).find("span").html(Number($(this).find("span").html())-1);
					}
				})
			}
			/*取消最上li的横线*/
			$("#y_friend li").eq(0).css("border-top","0");
			/*点击用户跳转*/
			$("#y_friend>li").each(function(){
				$(this).click(function(){
					setcookie("friend",$(this).index(),3);
					self.location.href="moments.html";
				})
			})
			/*返回上一个界面*/
			$(".y_friend_ruturn").click(function(){
				history.go(-1);
			});
		},
		error:function(){
			alert("请求失败");
		}
	})
})

function setcookie(key,user,day){
	var date=new Date();
	date.setDate(date.getDate()+day);
	document.cookie=key+"="+escape(user)+";expires="+date;
}
