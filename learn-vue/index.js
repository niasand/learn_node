var app = new Vue({
	el: '#app',
	data:{
		message: 'Hello Vue!'
	}
});
app.message = 'I hanve changed my data'

var app2= new Vue({
	el:"#app-2",
	data :{
		message: "page load "  + new Date().toLocaleDateString()
	}
});

var app3 = new Vue({
	el:"#app-3",
	data:{
		seen:true
	}

});

var app4 = new Vue({
	el:"#app-4",
	data:{
		todos:[

				{text:"learn js "},
				{text:"learn vue "},
				{text:"整个牛逼项目 "}

		]
	}
});

var app5 = new Vue({
	el:"#app-5",
	data:{
		message:"hello,vue.js"
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')

		}
	}
});


var app6 = new Vue({
	el :"#app-6",
	data:{
		message: "Hello vue."
	}

});



// 定义名为 todo-item 的组件
Vue.component('todo-item',{
	props: ['todos'],
	template: '<li>{{todos.text}}</li>'
})


var app7 = new Vue({

	el:'#app-7',
	data:{
		groceryList:[
			{id:0, text:"蔬菜"},
			{ id: 1, text: "水果" },
			{ id: 2, text: "奶酪" },
			{ id: 3, text: "随便" },
		]
	}

}),


var xiaoming = {
	age: '23'
}
Object.freeze(xiaoming)

new Vue({
	el:'#app-8',
	data:xiaoming
})

























