/*
包含n个基于state的getter计算属性方法的对象模块
 */
export default {
	evenOdd(state) {
		return state.count % 2 === 0 ? '偶数' : '奇数';
	}
}
