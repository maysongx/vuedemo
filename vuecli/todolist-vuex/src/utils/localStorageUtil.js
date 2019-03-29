/*
使用localStorage存储数据的工具模块
*/
const TODOKEY = 'todos_key'
export default {
	// 设置localStorage
	setLocalStorage(value) {
		window.localStorage.setItem(TODOKEY, JSON.stringify(value));
	},
	//获取localStorage
	getLocalStorage() {
		return JSON.parse(window.localStorage.getItem(TODOKEY) || '[]');
	}
}
