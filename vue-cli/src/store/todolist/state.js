// 状态对象模块
import localStorageUtil from '../../utils/localStorageUtil.js'
export default {
	todos: localStorageUtil.getLocalStorage_vuex()
}
