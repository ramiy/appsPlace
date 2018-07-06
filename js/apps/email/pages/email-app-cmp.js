import emailService from '../services/email-service.js'
import emailList from '../../email/cmps/email-list-cmp.js'
import emailDetails from '../../email/cmps/email-details-cmp.js'

export default {
	template: `
		<section class="email-app">
			<h1>Emails App</h1>
			<email-list :emails="emailsToShow" @emailselceted="emailSelected" v-if="!selectedEmail"  @delete-email="deleteEmail">

			</email-list>
			<email-details 
				:email="selectedEmail" 
				v-if="selectedEmail" 
				@delete-email="deleteEmail" 
				@email-read="markAsRead"
				>
			</email-details>
        
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
		markAsRead(id) {
			debugger;
			emailService.toggleRead(id, true) 
		},
		deleteEmail(id) {
			emailService.deleteEmail(id)
				.then(() => {
					this.selectedEmail = null;

				})
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
		},
		selectedEmail: function (email) {
			if (!email) {
				this.$router.push(`/email`);
			}
		}

	},
	components: {
		emailList,
		emailDetails


	}

}