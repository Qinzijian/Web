//注意:此案例运行在服务器端,不适用与浏览器静态运行
$(function(){
	var times;   //申明全局变量times
	$.ajax({
		beforeSend:function(xhr){
			if(xhr.overrideMimeType){
				xhr.overrideMimeType("application/json"); //设置MIME，防止错误
			}
		}
	});
	
	//从JSON文件中读取JSON数据
	function loadTimetable() {
	    $.getJSON('../data/example.json')   //调用example.json文件获取JSON数据集
	    .done(function(data){    //如果JSON数据调用成功
	    	times=data;       //将JSON数据集存储在times全局变量中
	    })
		.fail(function(){  //如果失败，显示下面错误提示
	    	$('#event').html('对不起！没有找到当前选择的高铁列车时刻表');
	    });
	}
	    
	loadTimetable();  //调用函数
	
	
	
	//单机车次加载列车时刻JSON数据
	$('#content').on('click','#event a',function(e){  //用户单机事件发生时触发
	alert("123");
		e.preventDefault();  //避免加载页面事件发生
		var loc=this.id.toUpperCase();   //获取id值,并转为大写
		alert(loc);   //测试loc值
		
		var newContent='';
		for(var i=0;i<times[loc].length;i++){
			newContent+='<li><span class="time">'+times[loc][i].time+'</span>';
			newContent+='<a href="descriptions.html#';
			newContent+=times[loc][i].time.replace(/:/g,'-')+'">';
			newContent+=times[loc][i].title+'</a></li>';
		}
		alert(newContent);  //测试HTML代码
		
		$('#sessions').html('<ul>'+newContent+'</ul>');
		
		$('#event a.current').removeClass('current');
		$(this).addClass('current');
	});
});