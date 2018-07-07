import { eventBus, EVENT_EMAIL_DELETED } from '../../../services/eventbus-service.js'

export default {
    props: ['email'],

	template: `
		<section class="email-details email-main-section">
			<div class="header">
				<div class="subject">{{email.subject}}</div>
				<h2>{{email.from.name}} </h2>	<p><{{email.from.email}}></p>
				<button class="btn-delete" @click="deleteEmail"><i class="fas fa-trash fa-2x"></i></button>
			</div>
			<div class="main-details">
				{{email.body}
			</div>
     		
		

		</section>
    
    `,
    data() {
        return {

            
        }
	},
	created() {
		console.log('deatils created');
        
	
		
	},
	mounted() {
		this.$emit('email-read', this.email.id)
	},
	methods: {
		deleteEmail(){
			eventBus.$emit(EVENT_EMAIL_DELETED, this.email.id)
			
		}

	},
	components: {
	},
	computed: {

	
	},
	watch: {
		email(email) {
			console.log('something changed,', email);
			

		}
	}
}