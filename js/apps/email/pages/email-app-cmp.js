import emailService from '../services/email-service.js'
import emailList from '../../email/cmps/email-list-cmp.js'
import emailDetails from '../../email/cmps/email-details-cmp.js'
import emailFilter from '../../email/cmps/email-filter-cmp.js'
import emailMenu from '../../email/cmps/email-menu-cmp.js'

export default {
	template: `
		<section class="email-app">
			<div class="header">
				<email-filter></email-filter>
			</div>

			<div class="wrapper flex">

				<email-menu></email-menu>

				<email-list :emails="emailsToShow" 
					@emailselceted="emailSelected" 
					v-if="!selectedEmail"  
					@delete-email="deleteEmail"				
					@toggle-read="toggleRead">					
				</email-list>

				<email-details 
					:email="selectedEmail" 
					v-if="selectedEmail" 
					@delete-email="deleteEmail" 
					@email-read="markAsRead">
				</email-details>
			</div>
        
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
			emailService.toggleRead(id, true) 
		},
		toggleRead(id, isRead) {
			console.log('pipi');
			
			emailService.toggleRead(id, isRead) 


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
		emailDetails,
		emailFilter,
		emailMenu


	}

}