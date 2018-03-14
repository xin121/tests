//newa();


	
// define(function(){
// 	alert("vvv");
// 	var tem={};
// 	var a={};
// 	tem.a=function(ss){
// 		alert(ss);
// 	}
// })
var http = require("http");
http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/plain"});  
    response.write("Hello World");  
    response.end();
}).listen(8888);
console.log("nodejs start listen 8888 port!");