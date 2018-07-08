export default {
	props: ['email'],

	template: `
		<section class="email-filter">
			<i class="fas fa-search  fa-lg" @click="setFilter"></i>
			<input v-model="filter.txt" type="search" placeholder="Search mail" @keyup.13="setFilter">
			<div class="filter" @click="show=!show">
				<p>{{emailStatus}}</p> <i class="fas fa-sort-down"></i>
				<ul class="email-status" v-show="show" >
					<li><label>All <input value="all" type="radio" v-model="status"></label></li>
					<li><label>Read <input value="read" type="radio" v-model="status"> </label></li>
					<li><label>Unread <input value="unread" type="radio" v-model="status"> </label></li>
				</ul>
			</div>
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
	methods: {
		toggleShow() {
			this.show = !this.show;
		},
		setFilter() {
			this.$emit('set-filter', this.filter);
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
			this.$emit('set-filter', this.filter);
		}
	}
}