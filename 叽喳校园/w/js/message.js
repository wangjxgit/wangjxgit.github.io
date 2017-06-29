/*friends-talk*/

/*输入框聚焦失焦*/
$(".y_entry_ipt").focus(function(){
	if($(".y_entry_ipt").val()=="快来吐槽，小伙伴行动起来"){
		$(".y_entry_ipt").val("");
		$(".y_entry_ipt").css("color","#333");
		$(".y_entry_ipt").css("background","#fff");
		$(".y_entry_ipt").css("text-indent","0");
	}
})
$(".y_entry_ipt").blur(function(){
	if($(".y_entry_ipt").val()==""){
		$(".y_entry_ipt").val("快来吐槽，小伙伴行动起来");
		$(".y_entry_ipt").css("color","#d2d2d2");
		$(".y_entry_ipt").css("background","url(img/moments/y_write.png) 27px 7px no-repeat #fff")
		$(".y_entry_ipt").css("text-indent","50px");
	}
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

$(function(){
	if($("#y_talk_box").selector=="#y_talk_box"){
		/*获取json*/
		$.ajax({url:"json/data.json",
			success:function(data){
				/*载入聊天信息*/
				var n=getcookie("friend");
				for(var i=0;i<data.user[n].message[0].header.length;i++){
					if(data.user[n].message[0].header[i]==data.user[n].header){
						//console.log(data.user[n].message[1].txt[i]);
						$(".y_talk").append($('<li><img src="'+data.user[n].message[0].header[i]+'" class="y_seftheader"><img src="img/moments/y_talk-right.png" class="y_talk_right"><div class="y_talkbox right"><p>'+data.user[n].message[1].txt[i]+'</p></div></li>'));
					}else{
						$(".y_talk").append($('<li><img src="'+data.user[n].message[0].header[i]+'" class="y_header"><img src="img/moments/y_talk-left.png" class="y_talk_left"><div class="y_talkbox left"><p>'+data.user[n].message[1].txt[i]+'</p></div></li>'));
					}
				}
				/*聊天名*/
				$(".y_top h3").html(data.user[n].nickname);
				/*限定对话框最大宽度*/
				$(".y_talkbox").each(function(){
					var width=$(this).css("width").replace("px","");
					if(width>=370){width=370;}
					$(this).css("width",width);
				})
				/*进入页面拉到聊天界面最下*/
				$("#y_talk_box").scrollTop($("#y_talk_box")[0].scrollHeight);
				/*发送对话*/
				$(".y_entry_more").click(function(){
					if($(".y_entry_ipt").val()!=""&&$(".y_entry_ipt").val()!="快来吐槽，小伙伴行动起来"){
						$(".y_talk").append($('<li><img src="'+data.user[0].header+'" class="y_seftheader"><img src="img/moments/y_talk-right.png" class="y_talk_right"><div class="y_talkbox right"><p>'+$(".y_entry_ipt").val()+'</p></div></li>'));
						$("#y_talk_box").scrollTop($("#y_talk_box")[0].scrollHeight);
						$(".y_entry_ipt").val("");
					}else{
						alert("请输入信息");
					}
				})
				/*返回上一个界面*/
				$(".y_talk_ruturn").click(function(){
					history.back();
				})
				/*返回个人中心*/
				$(".y_person").on("click",function(){
					window.open("percenter.html","_self");
				});
			},
			error:function(){
				alert("请求失败");
			}
		})
	}
})
