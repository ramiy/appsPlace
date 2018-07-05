import homePage from './pages/home-cmp.js';
import emailApp from './apps/email/pages/email-app-cmp.js';
import keepApp from './apps/keep/pages/keep-app-cmp.js';
import keepDetails from './apps/keep/pages/keep-details-cmp.js';

export default [
	{ path: '/', component: homePage },
	{ path: '/email/:emailId?', component: emailApp },
	{ path: '/keep', component: keepApp },
	{ path: '/keep/:keepId', component: keepDetails },
	{ path: '*', redirect: '/' },
]
