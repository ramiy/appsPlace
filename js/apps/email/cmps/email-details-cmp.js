export default {
    props: ['email'],

	template: `
		<section class="email-details">
			{{email}}
     		
		

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