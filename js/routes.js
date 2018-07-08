import homePage from './pages/home-cmp.js';
import emailApp from './apps/email/pages/email-app-cmp.js';
import notesApp from './apps/keep/pages/notes-app-cmp.js';

export default [
	{ path: '/', component: homePage },
	{ path: '/email/:emailId?', component: emailApp },
	{ path: '/notes', component: notesApp },
	{ path: '*', redirect: '/' },
]
