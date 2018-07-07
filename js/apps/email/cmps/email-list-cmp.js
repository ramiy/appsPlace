import emailPreview from './email-preview-cmp.js'


export default {
    props: ['emails'],

	template: `
		<section class="email-list">
			<ul>
				<li v-for="email in emails">
					<email-preview :key="email.id" @toggle-read="toggleRead" @delete-email="deleteEmail" :email="email" @click.native="emailSelected(email.id)"></email-preview>

				</li>
			</ul>

		</section>
    
    `,
    data() {
        return {
            
        }
	},
	created() {		
	},
	components: {
		emailPreview
	},
	methods: {
		deleteEmail(id){
			this.$emit('delete-email', id)
		},
		toggleRead(id, isRead) {
			this.$emit('toggle-read', id, isRead)

		},
		emailSelected(email) {
			this.$emit('emailselceted', email)

		}
	}
}