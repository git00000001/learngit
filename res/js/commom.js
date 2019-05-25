var config = {
    author: 'llq',
    wechat: 'q2403245302',
    QQ: '2403245302',
    email: '2403245302@qq.com'

}

function $(e) {
    if (document.getElementById(e)) {
        return document.getElementById(e)
    } else if (document.getElementsByClassName(e)[0]) {
        return document.getElementsByClassName(e)[0]
    }
}

function commom() {
    $('author').innerText = config.author
    $('wechat').innerText = config.wechat
    $('QQ').innerText = config.QQ
    $('email').innerText = config.email

}
function indexList(item){
    var url="res/img/sy_img"+parseInt(Math.random()*5+1) +".jpg"
    console.log(Math.random()*5,url)
    var strVar = "";
    strVar += "<div class=\"item\">\n";
    strVar += "	<div class=\"layui-fluid\">\n";
    strVar += "		<div class=\"layui-row\">\n";
    strVar += "			<div class=\"layui-col-xs12 layui-col-sm4 layui-col-md5\">\n";
    strVar += "				<div class=\"img\">\n";
    strVar += "					<img src='"+url+"'alt=\"\">\n";
    strVar += "				<\/div>\n";
    strVar += "			<\/div>\n";
    strVar += "			<div class=\"layui-col-xs12 layui-col-sm8 layui-col-md7\">\n";
    strVar += "				<div class=\"item-cont\">\n";
    strVar += "					<h3>"+item.title+"<button class=\"layui-btn layui-btn-danger new-icon\">new<\/button><\/h3>\n";
    strVar += "					<h5>"+item.type+"<\/h5>\n";
    strVar += "					<p>\n"+item.detail;
    strVar += "					<\/p>\n";
    strVar += "					<a href=\"details.html\" class=\"go-icon\"><\/a>\n";
    strVar += "				<\/div>\n";
    strVar += "			<\/div>\n";
    strVar += "		<\/div>\n";
    strVar += "	<\/div>\n";
    strVar += "<\/div>\n";
    return strVar
}
commom()
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
   
    element.style.display = 'none';
    document.body.appendChild(element);
   
    element.click();
   
    document.body.removeChild(element);
  }
   
   
//download("hello.txt","This is the content of my file :)");