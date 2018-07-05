export default {
    props: ['email'],

	template: `
		<section class="email-preview" :class="[isRead? 'read' : '']">
			<span class="from">{{email.from}}</span>  
			<span class="subject">
				{{email.subject}} - 
				<span class="body">
					{{body}}
				</span>
			</span>
		

		</section>
    
    `,
    data() {
        return {
            
        }
	},
	created() {
		console.log('email preview ', this.body);
		
	},
	components: {
	},
	computed: {
		isRead() {
			return this.email.isRead
		},
		body() {
			if (this.email.body.length > 100) {
				
				return this.email.body.substr(0, 100) + '...'
			}
			else return this.email.body
		}

	}
}