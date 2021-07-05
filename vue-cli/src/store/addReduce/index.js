import state from './state.js';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true, // 设置命名空间
	state,
	mutations,
	actions,
	getters
}
