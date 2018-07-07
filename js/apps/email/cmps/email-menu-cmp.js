import {  EVENT_EMAIL_INBOX, EVENT_EMAIL_TOGGLE_MENU, eventBus } from '../../../services/eventbus-service.js'



export default {
	props: ['email'],

	template: `
		<section class="email-menu">
         
               <button class="compose-btn" @click="$emit('compose')"> <i class="fas fa-plus"></i>Compose</button>
               <ul>
                   <li class="selected" @click="goToInbox"> <i class="fas fa-inbox"></i>Inbox</li>
                   <li> <i class="fas fa-star"></i>Starred</li>
                   <li><i class="fas fa-share-square"></i>Sent Mail</li>
                   <li><i class="fab fa-firstdraft"></i>Drafts</li>
			   </ul>
			   <div class="close-menu" @click="closeMenu"><i class="fas fa-times fa-2x"></i></div>

		</section>
    
    `,
	data() {
		return {

		}
	},
	created() {

	},
	components: {
	},
	methods: {
		goToInbox() {
			eventBus.$emit(EVENT_EMAIL_INBOX)
		},
		closeMenu() {
			eventBus.$emit(EVENT_EMAIL_TOGGLE_MENU)
		}
	
	},
	computed: {
		



	}
}