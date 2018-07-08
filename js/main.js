import appRoutes from './routes.js'
import { eventBus, EVENT_ACTIVE_APP_SET } from './services/eventbus-service.js'


Vue.use(VueRouter);

const appRouter = new VueRouter({ routes: appRoutes });

new Vue({
	el: '#app',
	router: appRouter,
	data: {
		activeApp: ''
	},
	created() {
		eventBus.$on(EVENT_ACTIVE_APP_SET, appName => this.activeApp = appName);
	}
})
