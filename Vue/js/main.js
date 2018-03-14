
	 // 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
 
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import a from '../b.vue'
// const b = { template: '<div>vv</div>' }
//const c = { template: '<div>cc</div>' }
var routeConfig =  [
	{path: '/', component: a},
    {path: '/a', component: a}
//  {path: '/b:id', component: b},
//  {path: '/clal', component: c}
]
const router = new VueRouter({
	routes: routeConfig
})

const app = new Vue({
  router
}).$mount('#app')