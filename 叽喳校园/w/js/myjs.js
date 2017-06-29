//创建cookie
function setcookie (day,key,value) {
	var date=new Date();
	date.setDate(date.getDate()+day)
	document.cookie=key+"="+escape(value)+";expires="+date;
}
//删除cookie第一种方法
function removecookie (key) {
	setcookie(-1,key,"xxx");
}
//删除cookie第二种方法
function removecookie2 (key) {
	var date=new Date();
	date.setDate(date.getDate()-1);
	document.cookie=key+"=xxx"+";expires="+date;
}
//获得cookie的value值
function getcookie (key) {
	var arr1=unescape(document.cookie).split("; ");
	for (var i = 0; i < arr1.length; i++) {
		var arr2=arr1[i].split("=");
		if (arr2[0]==key) {
			return arr2[1];
		}
	}
}
