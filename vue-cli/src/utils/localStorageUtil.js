// 使用LocalStorage本地存储
const TODOS_KEY = 'todos_key';
const TODOS_KEY_VUEX = 'todos_key_vuex';
export default {
	// 存储数据
	setLocalStorage(value) {
		window.localStorage.setItem(TODOS_KEY, JSON.stringify(value));
	},

	// 获取数据
	getLocalStorage() {
		return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
	},

	// 存储数据 vuex todolist
	setLocalStorage_vuex(value) {
		window.localStorage.setItem(TODOS_KEY_VUEX, JSON.stringify(value));
	},

	// 获取数据 vuex todolist
	getLocalStorage_vuex() {
		return JSON.parse(window.localStorage.getItem(TODOS_KEY_VUEX) || '[]')
	}
}
