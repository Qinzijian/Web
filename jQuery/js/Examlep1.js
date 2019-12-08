var xhr=new XMLHttpRequest();//新建XHR对象

xhr.onload=function(){
    if(xhr.status==200){
        document.getElementById('content').innerHTML=xhr.responseText;
    }
};
xhr.open('GET','../html/data.html',true);//准备请求
xhr.send(null);//发送请求