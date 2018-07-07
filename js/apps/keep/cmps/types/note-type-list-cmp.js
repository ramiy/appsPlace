import { eventBus, EVENT_LIST_NOTE_STATUS_CHANGED } from '../../../../services/eventbus-service.js'
import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'noteTypesInfo'],
	template: `
		<section class="note-type-list note-type masonry-item"
			:class="{marked: note.settings.marked}"
			:style="{'background-color': note.styles.backgroundColor }">

			<ul>
				<li v-for="(listItem, idx) in note.data.list"
					:class="statusClass(listItem.completed)"
					@click="updateStatus(idx)">
						{{listItem.text}}
				</li>
			</ul>

			<note-item-actions :note="note" :noteTypesInfo="noteTypesInfo"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	},
	methods: {
		statusClass(status) {
			return (status) ? 'completed' : '';
		},
		updateStatus(listIdx) {
			console.log('change status');
			eventBus.$emit(EVENT_LIST_NOTE_STATUS_CHANGED, this.note.id, listIdx);
		}
	}
}
