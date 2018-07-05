import emailService from '../services/email-service.js'

export default {
	template: `
		<section class="email-app">
			<h1>Emails App</h1>
        
        </section>
    
    
    
    `,

	data() {
		return {
			emails: [],
			filter: null,
		}
	},
	created() {
		emailService.query()
			.then(emails => {
				this.emails = emails;
				console.log(this.emails);
				
			})
	},
}