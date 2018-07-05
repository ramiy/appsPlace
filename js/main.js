import appRoutes from './routes.js'

Vue.use(VueRouter);

const appRouter = new VueRouter({ routes: appRoutes });

new Vue({
	el: '#app',
	router: appRouter,
})
