$(function(){
	$.ajax({
		url:"json/data.json",
		success:function(data){
			/*载入新消息信息*/
			for(var i=0;i<data.user.length;i++){
				var str=data.user[i].message[1].txt[(data.user[i].message[1].txt.length-1)];
				/*限制最后一条信息的长度*//*未判定未读信息数*/
				if(str.length>9){
					str=str.substr(0,9)+"……";
				}
				/*获取时间*/
				var time=new Date();
				var timer=new Date(parseInt(data.user[i].message[2].timer[data.user[i].message[2].timer.length-1],10));
				console.log(new Date(1474434329064).getFullYear());
				if(time.getDate()-timer.getDate()<1){
					time=timer.getHours()+":"+timer.getMinutes();
				}else if(time.getDate()-timer.getDate()==1){
					time="昨天";
				}else if(time.getDate()-timer.getDate()==2){
					time="前天";
				}else if(time.getDate()-timer.getDate()>2){
					time=timer.getFullYear()+"-0"+timer.getMonth()+"-"+timer.getDate();
				}
				/*导入li*/
				$("#y_message").append($('<li><img src="'+data.user[i].header+'" class="y_header"><div class="y_header_cirle">'+Math.floor(Math.random()*9)+'</div><span class="y_time">'+time+'</span><div class="y_text"><h3>'+data.user[i].nickname+'</h3><p class="y_text_b">'+str+'</p></div></li>'));
			}
			/*取消最上li的横线*/
			$("#y_message li").eq(0).css("border-top","0");
			/*点击用户跳转*/
			$("#y_message>li").each(function(){
				$(this).click(function(){
					setcookie("friend",$(this).index(),3);
					self.location.href="message.html";
				})
			})
			/*返回上一个界面*/
			$(".y_message_ruturn").click(function(){
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
