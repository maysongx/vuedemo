/*
实现列表的增删改查

新增数据：在输入框输入数据 按键enter直接新增
删除数据：点击 删除 按钮，即可删除选中的一条数据
更新数据：双击文本即可进入编辑模式，input失去焦点 自动更新
查询：根据状态查询  -1 全部  0未完成  1已完成
localStorage实现了本地缓存

*/

// 自定义一个全局指令：主要实现功能是页面载入时，当前元素获取焦点
Vue.directive('focus', {
	// 当绑定元素插入到 DOM 中
	inserted: function(el) {
		// 聚焦元素
		el.focus()
	}
});


// 自定义一个全局组件
Vue.component('to_do_list', {
	// 接收父组件传递的参数
	props: ['placeholdertxt', 'name'],
	template: `
		<div class="box">
			<h1>{{name}}</h1>
		
			<div class="input">
				<input type="text" :placeholder="placeholdertxt" v-model="text" @keyup.13="add()">
			</div>
		
			<div class="btns">
				<input type="button" value="全部" @click="changeStatus(-1)" v-bind:class="{'active':status==-1}">
				<input type="button" value="已完成" @click="changeStatus(1)" v-bind:class="{'active':status==1}">
				<input type="button" value="未完成" @click="changeStatus(0)" v-bind:class="{'active':status==0}">
			</div>
		
			<ul class="list">
				<li v-for="m in computeddata">
					<div v-if="m.edit==true">
						<span :class="{'active2':m.finished==1}" :finished="m.finished" class="opt" @click="changeFinished(m)"></span>
						<p @dblclick="edit(m)">{{m.text}}</p>
						<span v-bind:id="m.id" class="del" @click="del(m.id)">删除</span>
					</div>
					<div v-else>
						<input v-focus type="text" v-model="m.text" @blur="update(m)">
					</div>
				</li>
			</ul>
		
			<div v-show="all.length==0">当前列表暂时没有数据</div>
		
		</div>
		`,

	// data是一个函数
	data: function() {
		return {
			text: '', // 用户输入
			// localStorage 本地缓存
			all: localStorage.dataList ? JSON.parse(localStorage.dataList) : [],
			status: '-1', // -1 全部  0未完成  1已完成
		}
	},
	methods: {
		// 新增
		add: function() {
			if (this.text.length > 0) {
				var obj = {
					id: Math.random() + new Date().getTime(), // 随机id
					text: this.text,
					finished: 0, // 0 未完成    1 已完成
					edit: true, // 是否可编辑
				};
				this.all.push(obj);
				// 将数据缓存到本地 而且接受类型是string
				localStorage.dataList = JSON.stringify(this.all);

				// 清空输入框数据
				this.text = '';
			}
		},

		// 删除选中的一个
		del: function(id) {
			this.all = this.all.filter(function(val) {
				if (val.id != id) {
					return val;
				}
			});

			// 将数据缓存到本地
			localStorage.dataList = JSON.stringify(this.all);
		},
		edit: function(obj) {
			obj.edit = !obj.edit;
			//等同于下面的
			// if (obj.edit = false) {
			//     obj.edit = true;
			// } else {
			//     obj.edit = false;
			// }

			// 将数据缓存到本地
			localStorage.dataList = JSON.stringify(this.all);

		},

		// 更新数据
		update: function(obj) {
			obj.edit = !obj.edit;
			// 将数据缓存到本地
			localStorage.dataList = JSON.stringify(this.all);
		},

		// 更改 状态：全部、未完成、已完成
		changeStatus: function(val) {
			this.status = val;
			// 将数据缓存到本地
			localStorage.dataList = JSON.stringify(this.all);
		},

		// 修改状态：0未选中  1选中
		changeFinished: function(item) {
			console.log('dangqian0', item)
			if (item.finished == 0) {
				item.finished = 1;
			} else {
				item.finished = 0;
			}
		}
	},
	computed: {
		computeddata: function() {
			var m;
			var vm = this.status; //传递参数
			if (this.all.length > 0) {
				//val：当前对象   index：当前下标  curObj：过滤后的这个对象
				m = this.all.filter(function(val, index, obj) {
					if (vm == '-1') {
						return obj;
					} else {
						if (vm == val.finished) {
							return obj;
						}
					}
				});
			}
			return m;
		}
	}
});
