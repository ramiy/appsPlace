import utilService from '../../../services/utils-service.js';
const STORAGE_KEY = 'emailApp';


var emails = [


	{
		subject: 'Third email ever',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam obcaecati provident corrupti esse saepe, similique alias autem quidem quo temporibus minus officia nostrum amet perferendis et quibusdam commodi? Alias, atque.',
		isRead: false,
		sentAt: Date.now(),
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: '99Xrb'

	},
	{
		subject: 'Second email ever',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam obcaecati provident corrupti esse saepe, similique alias autem quidem quo temporibus minus officia nostrum amet perferendis et quibusdam commodi? Alias, atque.',
		isRead: false,
		sentAt: 1530792318391,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: '9IXrb'

	},
	{
		subject: 'First email ever!!!',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: 'EfrK0'

	},
	{
		subject: 'First email ever!!!',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: 'EsdrK0'

	},
	{
		subject: 'First email ever!!!',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: 'EfrgzgK0'

	},
	{
		subject: 'First email ever!!!',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: 'sfsfsF'

	},
	{
		subject: 'First email ever!!!',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: 'sdfzsf'

	},
	{
		subject: 'First email ever!!!',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: 'EfdzfvrK0'

	},
	{
		subject: 'First email ever!!!',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: 'sdfsd'

	},
	


];
(function () {
	var temp = utilService.loadFromStorage(STORAGE_KEY);
	if (temp) {
		emails = temp;
	}

})();


function query() {
	return Promise.resolve(emails)

}
function getEmailById(id) {
	let email = emails.find(email => email.id === id);
	return Promise.resolve(email);
}
function deleteEmail(id) {
	let idx = emails.findIndex(email => email.id === id)
	emails.splice(idx, 1)
	saveEmails()

	return Promise.resolve()

}
function saveEmails() {
	utilService.saveToStorage(STORAGE_KEY, emails);
}

function toggleRead(id, isRead) {
	getEmailById(id)
		.then(email => {
			email.isRead = isRead;
			saveEmails()
		})
}

export default {
	query,
	getEmailById,
	deleteEmail,
	toggleRead
}