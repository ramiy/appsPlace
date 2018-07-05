import homePage from './pages/home-cmp.js';
import emailApp from './apps/email/pages/email-app-cmp.js';
import emailDetails from './apps/email/pages/email-details-cmp.js';
import keepApp from './apps/keep/pages/keep-app-cmp.js';
import keepDetails from './apps/keep/pages/keep-details-cmp.js';

export default [
	{ path: '/', component: homePage },
	{ path: '/email', component: emailApp },
	{ path: '/email/:mailId', component: emailDetails },
	{ path: '/keep', component: keepApp },
	{ path: '/keep/:keepId', component: keepDetails },
	{ path: '*', redirect: '/' },
]
