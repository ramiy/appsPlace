var emails = [
    {
        subject: 'First email ever!!!', 
        body: 'Hi! this would be ou email', 
        isRead: false, 
        sentAt: 1530792318391,
        from: 'Itai',
        to: 'Rami'

    },
    {
        subject: 'Second email....', 
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam obcaecati provident corrupti esse saepe, similique alias autem quidem quo temporibus minus officia nostrum amet perferendis et quibusdam commodi? Alias, atque.', 
        isRead: false, 
        sentAt: 1530792318391,
        from: 'Itai',
        to: 'Rami'

    },


]

function query() {
    return Promise.resolve(emails)

}

export default {
    query
}