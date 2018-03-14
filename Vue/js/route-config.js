require.config({
    paths : {
        "a" : ["/vue/b"]   
    }
})
require(["a"],function($){
	console.log(a);
    
})
	const a = { template: '<div>foo</div>' }
	const b = { template: '<div>bar</div>' }
	const c = { template: '<div>bar</div>' }
 
		var routeConfig =  [
			{path: '/', component: a},
		    {path: '/a', component: a},
		    {path: '/b:id', component: b},
		    {path: '/clal', component: c}
		]
