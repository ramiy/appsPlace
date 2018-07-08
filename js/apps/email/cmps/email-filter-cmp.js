import { eventBus, EVENT_EMAIL_FILTERED } from '../../../services/eventbus-service.js'

export default {
	template: `
		<section class="search email-filter flex justify-content-center">

			<div>
				<button class="fas fa-search" @click="updateFilter"></button>
				<input v-model="filter.txt" type="search" placeholder="Search mail" @input="updateFilter">
			</div>

			<select v-model="filter.status" @change="updateFilter">
				<option value="all">All</option>
				<option value="read">Read</option>
				<option value="unread">Unread</option>
			</select>				

		</section>
    `,
	data() {
		return {
			filter: {
				txt: '',
				status: 'all'
			},
		}
	},
	methods: {
		updateFilter() {
			eventBus.$emit(EVENT_EMAIL_FILTERED, this.filter);
		}
	},
}