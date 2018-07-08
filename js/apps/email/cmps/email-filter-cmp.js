export default {
	props: ['email'],

	template: `
		<section class="email-filter">
                <i class="fas fa-search  fa-lg" @click="setFilter"></i>
				<input v-model="filter.txt" type="search" placeholder="Search mail" @keyup.13="setFilter">
				<h3 @click="show=!show">
					{{emailStatus}} 
					<ul class="email-status" v-show="show" >
						<li>
							<label>
							All
							<input value="all" type="radio" v-model="status">

							</label>
							
						</li>
						<li>
							<label>
							Read
							<input value="read" type="radio" v-model="status">

							</label>
							
						</li>
						<li>
							<label >
							Unread
							<input  value="unread" type="radio" v-model="status">

							</label>
							
						</li>

					</ul>
				</h3>
        

		</section>
    
    `,
	data() {
		return {
			filter: {
				txt: '',
				emailStatus: 'all'

			},
			status: 'all',
			show: false

		}
		

	},
	created() {

	},
	components: {
	},
	methods: {
		toggleShow() {
			console.log('toggle');
			
			this.show = !this.show
		
		},
		setFilter() {
			console.log('sssss');

			this.$emit('set-filter', this.filter)
		}

	},
	computed: {
		emailStatus() {

			return this.filter.emailStatus.charAt(0).toUpperCase() + this.filter.emailStatus.slice(1);

		}


	},
	watch: {
		status() {
			this.toggleShow()
			
			this.filter.emailStatus = this.status;
			this.$emit('set-filter', this.filter)

		}
	}
}