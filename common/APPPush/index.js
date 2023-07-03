import app_push from './app_push.js'

const appPush = {
	install: function(Vue) {
		Vue.prototype.$appPush = function(op = {}) {
			// #ifdef APP-PLUS
			new app_push({
				...op
			}).show();
			// #endif
		}
	}
}

export default appPush