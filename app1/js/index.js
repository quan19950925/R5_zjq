window.onresize = window.onload = function(){
	document.documentElement.style.fontsize = document.documentElement.clientWidth / 640 * 20 + 'px';
}
var one = Vue.extend({
	template:"#one"
})
var two = Vue.extend({
	template:"#two"
})
var three = Vue.extend({
	template:"#three"
})
var service = Vue.extend({
	template:"#zjq-service"
})
var fine = Vue.extend({
	template:"#fine"
})
var order = Vue.extend({
	template:"#zjq-order"
})
var refer = Vue.extend({
	template:"#zjq-refer"
})
var router = new VueRouter({
	routes:[
		{path:"/one",component:one},
		{path:"/two",component:two},
		{path:"/three",component:three},
		{path:"/service",component:service,
			children:[
				{path:"/service/order",component:order},
				{path:"/service/refer",component:refer},
				{path:"/service/",component:order},
			]
		},
		{path:"/fine",component:fine},
		{path:"/",redirect:"/service"}
	]
})
var vue = new Vue({
	el:"#app",
	router:router
})
