import emailService from '../services/email-service.js'
export default {

	template: `
		<section class="email-compose email-main-section">
            <div class="head"><h2>New Message</h2></div>
            <div class="input send-to"><input type="email"></div>
            <div class="input c-copy"><input type="email"></div>
            <div class="input b-c-copy"><input type="email"></div>
            <div class="input subject"><input type="text" placeholder="Subject"  v-model="newEmail.subject"></div>
            <div  class="body">
				
				<textarea   v-model="newEmail.body"></textarea>
			
			</div>
			<div class="email-controls">
					<button @click="sendEmail" class="send-btn">Send</button>
					<div class="delete"><i class="fas fa-trash fa-2x"></i></li></div>
				</div>
		</section>
    
    `,
	data() {
		return {
			newEmail : {},

		}
	},
	created() {
		this.newEmail = emailService.emptyEmail();
		
	},
	methods: {
		sendEmail() {
			this.$emit('send-email', this.newEmail)
		},
		goToInbox() {
			this.$emit('go-to-inbox')
		}
	}
}