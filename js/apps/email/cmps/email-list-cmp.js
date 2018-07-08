import emailPreview from './email-preview-cmp.js'
import emailDetails from './email-details-cmp.js'

export default {
	props: ['emails', 'selectedEmail'],

	template: `
		<section class="email-list email-main-section">
			<ul>
				<li v-for="email in emails">
					<email-preview :key="email.id" @toggle-read="toggleRead" :email="email" @click.native="selectEmail(email.id)"></email-preview>
					<email-details v-if="checkSelected(email.id)" :email="email" :screenMode="false"></email-details>
				</li>
			</ul>
		</section>
    `,
	data() {
		return {
		}
	},
	created() {
		console.log('selectedEmail', this.selectedEmail);
	},
	components: {
		emailPreview,
		emailDetails
	},
	methods: {
		toggleRead(id, isRead) {
			this.$emit('toggle-read', id, isRead)
		},
		selectEmail(email) {
			this.$emit('selectEmail', email);
		},
		checkSelected(emailId) {
			return (this.selectedEmail && this.selectedEmail.id )
				? this.selectedEmail.id== emailId
				: false;
		}
	}
}