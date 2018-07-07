export default {
	props: ['email'],

	template: `
		<section class="email-menu">
         
               <button class="compose-btn" @click="$emit('compose')"> <i class="fas fa-plus"></i>Compose</button>
               <ul>
                   <li class="selected"> <i class="fas fa-inbox"></i>Inbox</li>
                   <li> <i class="fas fa-star"></i>Starred</li>
                   <li><i class="fas fa-share-square"></i>Sent Mail</li>
                   <li><i class="fab fa-firstdraft"></i>Drafts</li>
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
	},
	methods: {
	
	},
	computed: {
		



	}
}