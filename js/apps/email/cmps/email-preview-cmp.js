export default {
	props: ['email'],

	template: `
		<section class="email-preview" :class="[isRead? 'read' : '']">
			<span class="from">{{email.from.name}}</span>  
			<span class="content">
				{{email.subject}} - 
				<span class="body">
					{{body}}
				</span>
			</span>
			<span class="sent-at">
				{{sentAt}}
			</span>
		
	<!-- <button @click.stop="deleteEmail(email.id)">delete</button> -->
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
	methods: {
		deleteEmail(id) {
			this.$emit('delete-email', id)
		}
	},
	computed: {
		isRead() {
			return this.email.isRead
		},
		body() {
			if (this.email.body.length > 400) {

				return this.email.body.substr(0, 400)
			}
			else return this.email.body
		},
		sentAt() {
			let currDate = moment(Date.now())
			let emailDate = moment(this.email.sentAt)

			if (currDate.diff(emailDate, 'days') === 0) {
				return moment(emailDate).format('LT')
			} else if (currDate.diff(emailDate, 'years') === 0) {
				return moment(emailDate).format('MMM, D')
			} else {
				return moment(emailDate).format('l')
			}


		}



	}
}