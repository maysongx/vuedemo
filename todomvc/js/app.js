(function() {
	// 注册一个全局自定义指令 `v-focus`
	Vue.directive('focus', {
		// 当被绑定的元素插入到 DOM 中时……
		inserted: function(el) {
			// 聚焦元素
			el.focus()
		}
	})

	// 双击编辑的时候，input自动聚焦
	Vue.directive('todo-focus', {
		update(el, binding) {
			// binding.value是传值获取的数据
			if (binding.value) {
				el.focus();
			}
		}
	})

	var vm = new Vue({
		data: {
			todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
			todoText: '',
			curEditing: null, // 当前编辑对象 是一个中间变量
			filterTxt: 'all', // 底部筛选文本
		},
		computed: {
			// 是否显示 清除已完成的按钮 
			isShowAllClear() {
				// 依据判断条件，数组的元素是否有一个满足，只要有一个满足则返回ture
				return this.todos.some(item => item.completed)
			},

			// 计算未完成的任务数目
			noCompletedCount() {
				return this.todos.filter(t => !t.completed).length;
			},

			// 标记是否全选：
			isAllSelected: {
				get() {
					const todoLength = this.todos.length;
					// 获取已经完成的任务
					const com = this.todos.filter(item => item.completed);
					return com.length == this.todos.length
				},
				set(value) {
					console.log('set全选和全不选', value);
					this.todos.forEach(item => {
						item.completed = value;
					})
				}
			},

			// 计算属性 todos
			filterTodos() {
				// 如果是所有，不过滤完全显示todos
				// 如果是已完成completed，则 todos.filter(t=>！t.completed)
				// 如果未完成active，则 todos.filter(t=>t.completed)
				switch (this.filterTxt) {
					case 'active':
						return this.todos.filter(t => !t.completed);
						break;
					case 'completed':
						return this.todos.filter(t => t.completed);
						break;
					default:
						return this.todos
						break;
				}
			},


		},
		// 监控todos的变化，只要todos发生变化，就存储到localStorage中
		watch: {
			todos: {
				deep: true,
				handler(value) {
					// value值你监视的数据的最新值
					console.log('todos发生变化了');
					window.localStorage.setItem('todos', JSON.stringify(value));
				}
			},
		},
		methods: {
			// 新增任务项
			handleAddTodo() {
				if (!this.todoText || this.todoText.trim().length == 0) {
					alert('请输入任务项')
					return
				}
				// 如果数组为空,默认的是第一个id就是1,否则就是最后一个id+1
				const obj = {
					id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
					title: this.todoText,
					completed: false
				}
				this.todos.push(obj)
				this.todoText = ''
			},

			/*
			删除当前项
			
			当事件处理函数没有传参的时候，第一个参数就是默认的事件源对象：event
			当手动传递了参数的时候，就没办法获取默认的 event 事件源对象
			这个时候我们可以手动在调用方法的时候传递 $event 来接收 event 事件源对象
			*/
			handleDelete(index) {
				this.todos.splice(index, 1);
			},


			// 双击标题 进入编辑模式
			handleEditDbclick(todo) {
				this.curEditing = todo;

			},

			// 编辑任务，敲回车保存编辑
			handleSaveEditKeydown(todo, index, e) {
				// 1. 获取编辑文本框的数据
				// 2. 数据校验
				//    如果数据是空的，则直接删除该元素
				//    否则保存编辑
				const value = e.target.value.trim()
				// 数据被编辑是空的，就直接删除
				if (!value.length) {
					this.todos.splice(index, 1)
				} else {
					todo.title = value
					this.curEditing = null; // 取消编辑状态
				}
			},

			// esc取消编辑
			handleCancelEditEsc() {
				// 样式去除
				this.curEditing = null
			},

			// 删除所有已完成的任务
			handleRemoveAllCompleted() {
				this.todos = this.todos.filter(item => !item.completed)
			},
		},
	}).$mount('#app')

	function handleHashChange() {
		vm.filterTxt = window.location.hash.substr(2);
	}
	// 在页面初始化的时候，调用一下，保持路由的路径状态
	handleHashChange();

	// 监控hash的变化  window.onhashchange 
	// 该方法在页面初始化的时候不会执行，只有在hash发生变化时，才会执行
	window.onhashchange = handleHashChange;


})()
