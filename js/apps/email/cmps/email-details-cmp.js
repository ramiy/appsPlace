import { eventBus, EVENT_EMAIL_DELETED, EMAIL_FULL_SCREEN } from '../../../services/eventbus-service.js'

export default {
    props: ['email', 'screenMode'],

	template: `
		<section class="email-details" :class="mainClassObj">
			<div class="header">
				<button @click="toggleScreenMode"><i :class="iClassObj"></i></button>
				<div class="subject">{{email.subject}}</div>
				<h2>{{email.from.name}} </h2>	<p><{{email.from.email}}></p>
				<button class="btn-delete" @click="deleteEmail"><i class="fas fa-trash fa-2x"></i></button>
			</div>
			<div class="main-details">
				{{email.body}}
			</div>
     		
		

		</section>
    
    `,
    data() {
        return {
			mainClassObj: {
				'email-main-section': this.screenMode,
	
			},
			iClassObj: {
				'fas' :true, 
				'fa-expand': !this.screenMode,
		
				'fa-compress': this.screenMode


			}
			

            
        }
	},
	created() {
		console.log('deatils created');
		console.log(this.screenMode);
		
        
	
		
	},
	mounted() {
	},
	methods: {
		deleteEmail(){
			eventBus.$emit(EVENT_EMAIL_DELETED, this.email.id)
			
		},
		toggleScreenMode() {
			eventBus.$emit(EMAIL_FULL_SCREEN)
			// this.classObj['email-main-section']  =true;

		}

	},
	components: {
	},
	computed: {
		
		fullScreen() {
			
		}
		

	
	},
	watch: {
		email(email) {
			console.log('something changed,', email);
			

		}
	}
}