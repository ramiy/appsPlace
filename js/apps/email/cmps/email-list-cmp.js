import emailPreview from './email-preview-cmp.js'


export default {
    props: ['emails'],

	template: `
		<section class="email-list">
			LIST
			<ul>
				<li v-for="email in emails">
					<email-preview :email="email" @click.native="emailSelected(email.id)"></email-preview>

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
		emailSelected(email) {
			this.$emit('emailselceted', email)

		}
	}
}