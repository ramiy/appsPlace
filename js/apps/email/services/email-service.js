import utilService from '../../../services/utils-service.js';
const STORAGE_KEY = 'emailApp';


var emails = [
	{
		subject: 'GoodJob!!!!!',
		body: `My money's in that office, right? 
			If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. 
		
			She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?
		`,
		isRead: false,
		sentAt: Date.now(),
		from: { name: 'Muki Ben David', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: '99ljljrb',
		color: utilService.getRandomColor()

	},
	{
		subject: 'Fucking Sprint',
		body: `
			The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. 
			Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, 
			for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
		`,
		isRead: false,
		sentAt: Date.now() - 8.64e+7,
		from: { name: 'Tenzer Hamaniak', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: '99lsdfXrb',
		color: utilService.getRandomColor()

	},
	{
		subject: 'Thanks for everything!!!!!!',
		body: `My money's in that office, right? 
			If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. 
		
			She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?
			<img src="https://images.unsplash.com/photo-1520174583545-b66ab68c50df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69e28999de3955f96fb5317d0b87e107&auto=format&fit=crop&w=1868&q=80" />
		`,
		isRead: false,
		sentAt: Date.now() - 2*8.64e+7,
		from: { name: 'Soshana Damari', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: '99zdfzsdfXrb',
		color: utilService.getRandomColor()

	},
	{
		subject: 'Thanks for everything!!!!!!',
		body: `
			Do you see any Teletubbies in here? 
			Do you see a slender plastic tag clipped to my shirt with my name printed on it? 
			
			Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. 
			
			And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
		`,
		isRead: false,
		sentAt: Date.now() - 3* 8.64e+7,
		from: { name: 'JoJo Halstra', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: '99dfsdfXrb',
		color: utilService.getRandomColor()

	},



	{
		subject: 'Thanks for everything!!!!!!',
		body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam obcaecati provident 
			corrupti esse saepe, similique alias autem quidem quo temporibus minus officia nostrum amet perferendis 
			et quibusdam commodi? Alias, atque.
			<img src="http://t2.gstatic.com/images?q=tbn:ANd9GcRz_2nKTNlxhVtzbh29kgL3m2ebLv3TlYyzrbyqBtEUxt6mBuZ-" />>
			
		`,
		isRead: false,
		sentAt: Date.now() - 4* 8.64e+7,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: '99Xrb',
		color: utilService.getRandomColor()

	},
	{
		subject: 'Where Are You?',
		body: `What is Lorem Ipsum?
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			
			Why do we use it?
			It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
			
			
			Where does it come from?
			Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
			
			The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
			
			Where can I get some?
			There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
		isRead: false,
		sentAt: Date.now() - 2.628e+9,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: '9IXrb',
		color: utilService.getRandomColor()

	},
	{
		subject: 'Don\'t Open!!!!!!!!!!',
		body: `hello
		How Are you?
		Good`,
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itai ben yair ben donald trump', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: 'EfrK0',
		color: utilService.getRandomColor()

	},
	{
		subject: 'How Are You??',
		body: `'Hi! this would be ou email'`,
		isRead: false,
		sentAt: 153079231839,
		to: { name: 'Tomer ben Artzi', email: 'tomer@gmail.com' },
		from: { name: 'Itai', email: 'itai@gmail.com' },
		id: 'EsdrK0',
		color: utilService.getRandomColor()

	},
	{
		subject: 'Your card has arrived',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itzik Kapach', email: 'Itzik@gmail.com' },
		to: { name: 'Itai', email: 'Itai@gmail.com' },
		id: 'EfrgzgK0',
		color: utilService.getRandomColor()

	},
	{
		subject: 'Code review for this and that',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Yosi Cohen', email: 'Yosi@gmail.com' },
		to: { name: 'rami', email: 'Itai@gmail.com' },
		id: 'sfsfsF',
		color: utilService.getRandomColor()

	},
	{
		subject: 'Third email ever!!!',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Moshe Rabeno', email: 'moshe@gmail.com' },
		to: { name: 'itai', email: 'itai@gmail.com' },
		id: 'sdfzsf',
		color: utilService.getRandomColor()

	},
	{
		subject: 'Second email ever',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Rami', email: 'Rami@gmail.com' },
		to: { name: 'Itai', email: 'itai@gmail.com' },
		id: 'EfdzfvrK0',
		color: utilService.getRandomColor()

	},
	{
		subject: 'First email ever!!!',
		body: 'Hi! this would be ou email',
		isRead: false,
		sentAt: 153079231839,
		from: { name: 'Itai Yosephi', email: 'itai@gmail.com' },
		to: { name: 'rami', email: 'rami@gmail.com' },
		id: 'sdfsd',
		color: utilService.getRandomColor()

	},



];

(function () {
	var temp = utilService.loadFromStorage(STORAGE_KEY);
	if (temp) {
		emails = temp;
	} else {
		saveEmails()
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
function emptyEmail() {
	return {
		subject: '',
		body: '',
		isRead: false,
		sentAt: null,
		from: { name: 'Itai', email: 'itai@gmail.com' },
		to: { name: 'Itai', email: 'itai@gmail.com' },
		id: '',
		color: ''

	}

}

function addEmail(newEmail) {
	newEmail.id = utilService.makeId(6);
	newEmail.color = utilService.getRandomColor()
	newEmail.sentAt = Date.now()
	emails.unshift(newEmail)
	saveEmails()
	console.log(emails);

	return Promise.resolve();
}
export default {
	query,
	getEmailById,
	deleteEmail,
	toggleRead,
	emptyEmail,
	addEmail
}