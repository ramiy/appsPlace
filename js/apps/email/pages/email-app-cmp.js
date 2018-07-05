import emailService from '../services/email-service.js'
import emailList from '../../email/cmps/email-list-cmp.js'

export default {
	template: `
		<section class="email-app">
			<h1>Emails App</h1>
			<email-list :emails="emailsToShow" @emailselceted="emailSelected" v-if="!selectedEmail">
			</email-list>
        
        </section>
    
    
    
    `,

	data() {
		return {
			emails: [],
			selectedEmail: null,
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
	methods: {
		emailSelected(email) {
			this.selectedEmail = email;

			
		}
	},
	computed: {
		emailsToShow() {
			return this.emails;
		}
	},
	watch: {

	},
	components: {
		emailList,

	}
}