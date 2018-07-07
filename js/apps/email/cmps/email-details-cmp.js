export default {
    props: ['email'],

	template: `
		<section class="email-details email-main-section">
			<div class="header">
				<div class="subject">{{email.subject}}</div>
				<h2>{{email.from.name}} </h2>	<p><{{email.from.email}}></p>
				<button class="btn-delete" @click="deleteEmail"><i class="far fa-trash-alt fa-2x"></i></button>
			</div>
			<main>
				{{email.body}}
			</main>
     		
		

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
			this.$emit('delete-email', this.email.id)
			
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