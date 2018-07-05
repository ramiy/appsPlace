export default {
    props: ['email'],

	template: `
		<section class="email-details">
			<div class="header">
				<div class="subject">{{email.subject}}</div>
				<h2>{{email.from.name}} </h2>	<p><{{email.from.email}}></p>
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
	components: {
	},
	computed: {
	
	}
}