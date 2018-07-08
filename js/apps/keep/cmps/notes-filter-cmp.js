import { eventBus, EVENT_NOTE_FILTERED } from '../../../services/eventbus-service.js'

export default {
	template: `
		<section class="search notes-filter flex justify-content-center">

			<div>
				<button class="fas fa-search" @click="updateFilter"></button>
				<input v-model="filter.txt" type="search" placeholder="Search notes" @input="updateFilter">
			</div>

			<select v-model="filter.type" @change="updateFilter">
				<option value="">All</option>
				<option value="text">Text</option>
				<option value="image">Image</option>
				<option value="video">Video</option>
				<option value="audio">Audio</option>
				<option value="list">List</option>
			</select>				

		</section>
	`,
	data() {
		return {
			filter: {
				txt: '',
				type: ''
			},
		}
	},
	methods: {
		updateFilter() {
			eventBus.$emit(EVENT_NOTE_FILTERED, this.filter);
		},
	}
}
