import emailService from '../services/email-service.js'
import emailList from '../../email/cmps/email-list-cmp.js'
import emailDetails from '../../email/cmps/email-details-cmp.js'
import emailFilter from '../../email/cmps/email-filter-cmp.js'
import emailMenu from '../../email/cmps/email-menu-cmp.js'
import emailCompose from '../../email/cmps/email-compose-cmp.js'
import { eventBus, EVENT_EMAIL_DELETED, EVENT_EMAIL_SAVED, EVENT_EMAIL_INBOX, EVENT_EMAIL_TOGGLE_MENU } from '../../../services/eventbus-service.js'



export default {
	template: `
		<section class="email-app">

			<div class="header">
				<div @click="isMenuOpen=true" class="toggle-menu"><i class="fas fa-bars fa-lg"></i></div>
				<email-filter @set-filter="setFilter"></email-filter>
			</div>

			<div class="wrapper flex">

				<email-menu :class="menuClass" @compose="compose" :percent="readPercentage"></email-menu>

				<email-list v-if="!isCompose" 
					:emails="emailsToShow" 
					:selectedEmail="selectedEmail"
					@selectEmail="emailSelected" 
					@toggle-read="toggleRead">					
				</email-list>
				
				<!--
				v-if="showList" 
				<email-details 
					v-if="showDetails" 
					:email="selectedEmail" 
					@email-read="markAsRead">
				</email-details>
				-->
				
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
			isMenuOpen: false,

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
		eventBus.$on(EVENT_EMAIL_INBOX, () => this.goToInbox());
		eventBus.$on(EVENT_EMAIL_TOGGLE_MENU, () => this.isMenuOpen = !this.isMenuOpen);

		if (this.$route.params.emailId) this.checkId(emailId)
		this.filter = this.$refs.search;

	},
	methods: {
		emailSelected(emailId) {
			if (this.selectedEmail && this.selectedEmail.id && this.selectedEmail.id === emailId) {
				this.goToInbox()
			} else {
				this.$router.push(`/email/${emailId}`);
				this.checkId(emailId);
				this.markAsRead(emailId)

			}
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
			this.selectedEmail = null
			this.isCompose = true;
			this.isMenuOpen = false;
		},
		sendEmail(newEmail) {
			emailService.addEmail(newEmail)
				.then(() => { this.isCompose = false })
		},
		goToInbox() {
			this.isCompose = false;
			this.selectedEmail = null;
			this.filter = null;
			this.isMenuOpen = false;
		},
		setFilter(filter) {

			this.filter = filter;

		}
	},
	computed: {
		emailsToShow() {
			if (!this.filter) return this.emails;

			let emailsToShow = this.emails

			if (this.filter.emailStatus !== 'all') {
				let isRead = (this.filter.emailStatus === 'read') ? true : false;
				emailsToShow = emailsToShow.filter(email => email.isRead === isRead)
			}

			if (this.filter.txt) {
				let searchTerm = this.filter.txt.toLowerCase()
				emailsToShow = emailsToShow.filter(email => {
					return (email.subject.toLowerCase().includes(searchTerm) ||
							email.body.toLowerCase().includes(searchTerm))
				})

			}

			return emailsToShow


		},
		showList() {
			return !this.selectedEmail && !this.isCompose;
		},
		showDetails() {
			return !this.isCompose && this.selectedEmail;
		},
		menuClass() {
			return {
				open: this.isMenuOpen
			}
		},
		readPercentage() {
			let readCount = 0;
			for (let i = 0; i < this.emails.length; i++) {
				if (this.emails[i].isRead) readCount++
			}

			return Math.floor(readCount / this.emails.length * 100);
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