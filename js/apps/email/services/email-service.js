var emails = [
    {
        subject: 'First email ever!!!', 
        body: 'Hi! this would be ou email', 
        isRead: true, 
        sentAt: 1530792318391,
        from: {name:'Itai', email: 'itai@gmail.com'},
        to: {name:'rami', email: 'rami@gmail.com'},
		id: 'EfrK0'

    },
    {
        subject: 'Second email....', 
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam obcaecati provident corrupti esse saepe, similique alias autem quidem quo temporibus minus officia nostrum amet perferendis et quibusdam commodi? Alias, atque.', 
        isRead: false, 
        sentAt: 1530792318391,
        from: {name:'Itai', email: 'itai@gmail.com'},
        to: {name:'rami', email: 'rami@gmail.com'},
		id: '9IXrb'

    },


]

function query() {
    return Promise.resolve(emails)

}
function getEmailById(id) {
	let email = emails.find(email => email.id === id);
	return Promise.resolve(email);
}

export default {
	query,
	getEmailById
}