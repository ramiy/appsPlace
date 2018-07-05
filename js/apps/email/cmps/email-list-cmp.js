import emailPreview from './email-preview-cmp.js'


export default {
    props: ['emails'],

	template: `
		<section class="email-list">
			<ul>
				<li v-for="email in emails">
					<email-preview :email="email"></email-preview>

				</li>
			</ul>

		</section>
    
    `,
    data() {
        return {
            
        }
	},
	created() {
		console.log('list ', this.emails);
		
	},
	components: {
		emailPreview
	},

}