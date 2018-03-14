

var arry = [
'jquery-1.8.3.min',
   'new_file'
]

require(arry, function(a) {
	var tem , a;
		
//	tem.a("ll");
    //加载scripts/helper/util.js.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});
