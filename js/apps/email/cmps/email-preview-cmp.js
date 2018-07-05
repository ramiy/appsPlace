export default {
    props: ['email'],

	template: `
		<section class="email-preview">
			from :{{email.from}}
			<br />
			title: {{email.title}}
			<br />
			body: {{email.body}}
			<br />


		</section>
    
    `,
    data() {
        return {
            
        }
	},
	created() {
		console.log('email preview ', this.email.subject);
		
	},
	components: {
	},
	computed: {
		

	}
}