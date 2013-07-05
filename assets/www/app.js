$("#page-contacts").live("pageinit",function(){
	var $page = $(this);
	var fields=["displayName","phoneNumbers","photos"];
	navigator.contacts.find(fields, function(contacts){
		console.log("检索通讯录成功..." + contacts.length);
		var results=[];
		$.each(contacts,function(i,c){
			console.log("通讯录："+c.displayName);
			results.push("<li><a href=''><h3>"+c.displayName+"</h3><p>"+c.phoneNumbers[0].value+"</p></a></li>");
		});
		$(".content-container",$page).append(results.join("")).listview("refresh");
	}, function(){
		alert("检索通讯录失败!");
	},new ContactFindOptions());
	
});