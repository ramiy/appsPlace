import { eventBus, EVENT_ACTIVE_APP_SET } from './services/eventbus-service.js'
import appRoutes from './routes.js'
import notesFilter from './apps/keep/cmps/notes-filter-cmp.js';
import emailFilter from './apps/email/cmps/email-filter-cmp.js';

Vue.use(VueRouter);

const appRouter = new VueRouter({ routes: appRoutes });

new Vue({
	el: '#app',
	router: appRouter,
	data: {
		activeApp: ''
	},
	components: {
		notesFilter,
		emailFilter
	},
	created() {
		eventBus.$on(EVENT_ACTIVE_APP_SET, appName => this.activeApp = appName);
	}
})
