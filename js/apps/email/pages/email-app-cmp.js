import emailService from '../services/email-service.js'
import emailList from '../../email/cmps/email-list-cmp.js'
import emailDetails from '../../email/cmps/email-details-cmp.js'
import emailFilter from '../../email/cmps/email-filter-cmp.js'
import emailMenu from '../../email/cmps/email-menu-cmp.js'
import emailCompose from '../../email/cmps/email-compose-cmp.js'
import { eventBus, EVENT_EMAIL_DELETED, EVENT_EMAIL_SAVED  } from '../../../services/eventbus-service.js'



export default {
	template: `
		<section class="email-app">
			<div class="header">
				<email-filter></email-filter>
			</div>

			<div class="wrapper flex">

				<email-menu @compose="compose"></email-menu>

				<email-list :emails="emailsToShow" 
					@emailselceted="emailSelected" 
					v-if="showList"  
					@toggle-read="toggleRead">					
				</email-list>

				<email-details 
					:email="selectedEmail" 
					v-if="showDetails" 
					@email-read="markAsRead">
				</email-details>
				<email-compose v-if="isCompose" ></email-compose>

			</div>
        
        </section>
    
    
    
    `,

	data() {
		return {
			emails: [],
			selectedEmail: null,
			filter: null,
			isCompose: false,
		}
	},
	created() {
		let emailId = this.$route.params.emailId;
		if (emailId) this.checkId(emailId)
		emailService.query()
			.then(emails => {
				this.emails = emails;

			})
		eventBus.$on(EVENT_EMAIL_DELETED, (id) => this.deleteEmail(id));
		eventBus.$on(EVENT_EMAIL_SAVED, (newEmail) => this.sendEmail(newEmail));


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
		},
		compose() {
			this.isCompose = true;
		},
		sendEmail(newEmail) {
			emailService.addEmail(newEmail)	
				.then(() =>
			{this.isCompose = false})		
		}
	},
	computed: {
		emailsToShow() {
			return this.emails;
		},
		showList() {
			return !this.selectedEmail && !this.isCompose;
		},
		showDetails() {
			return  !this.isCompose && this.selectedEmail;
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
		emailMenu,
		emailCompose


	}

}