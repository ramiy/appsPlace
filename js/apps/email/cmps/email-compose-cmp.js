import emailService from '../services/email-service.js'
import { eventBus, EVENT_EMAIL_SAVED , EVENT_EMAIL_INBOX } from '../../../services/eventbus-service.js'

export default {

	template: `
		<section class="email-compose email-main-section">
            <div class="head"><h2>New Message</h2></div>
            <div class="input send-to"><input type="email"></div>
            <div class="input c-copy"><input type="email"></div>
            <div class="input b-c-copy"><input type="email"></div>
            <div class="input subject"><input type="text" placeholder="Subject"  v-model="newEmail.subject"></div>
            <div  class="body">
				
				<textarea  rows="10" v-model="newEmail.body"></textarea>
			
			</div>
			<div class="email-controls">
					<button @click="sendEmail" class="send-btn">Send</button>
					<div class="delete" @click="goToInbox"><i class="fas fa-trash fa-2x"></i></li></div>
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
			eventBus.$emit(EVENT_EMAIL_SAVED, this.newEmail)
		},
		goToInbox() {
			eventBus.$emit(EVENT_EMAIL_INBOX)
		}
	},
	
}