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
})
