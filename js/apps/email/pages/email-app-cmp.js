import emailService from '../services/email-service.js'
import emailList from '../../email/cmps/email-list-cmp.js'
import emailDetails from '../../email/cmps/email-details-cmp.js'

export default {
	template: `
		<section class="email-app">
			<h1>Emails App</h1>
			<email-list :emails="emailsToShow" @emailselceted="emailSelected" v-if="!selectedEmail">

			</email-list>
			<email-details :email="selectedEmail" v-if="selectedEmail"></email-details>
        
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
		let emailId = this.$route.params.emailId;
		if (emailId) this.checkId(emailId)



		emailService.query()
			.then(emails => {
				this.emails = emails;

			})
	},
	methods: {
		emailSelected(emailId) {
			this.$router.push(`/email/${emailId}`)


		},
		checkId(emailId) {
			emailService.getEmailById(emailId)
				.then(email => {
					if (email) {
						this.selectedEmail = email
					} else {
						this.selectedEmail = null;
						this.$router.push(`/email`);
					}
				})
		}
	},
	computed: {
		emailsToShow() {
			return this.emails;
		}
	},
	watch: {
		'$route.params.emailId'(emailId) {
			if (emailId) {
				console.log('wtach params');
				
				this.checkId(emailId)
			} else {
				this.selectedEmail = null;


			}
		}

	},
	components: {
		emailList,
		emailDetails


	}
}