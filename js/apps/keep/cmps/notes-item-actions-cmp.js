import { eventBus, EVENT_NOTE_PINNED, EVENT_NOTE_DELETED } from '../../../services/eventbus-service.js'
import notesService from '../services/notes-service.js';

export default {
	props: ['note', 'icon'],
	template: `
		<section class="note-item-actions flex space-between">

			<i :class="icon" class="visible" :title="iconTitle"></i>
			<i class="fas fa-thumbtack" :class="{selected: note.isSticky}" @click="pinNote" title="Pin note"></i>
			<i class="fas fa-palette info" title="Change note color"></i>
			<i class="fas fa-trash-alt danger" @click="removeNote" title="Delete note"></i>

		</section>
	`,
	computed: {
		iconTitle() {
			return this.capitalizeFirstLetter(this.note.noteType + ' note');
		}
	},
	methods: {
		pinNote() {
			eventBus.$emit(EVENT_NOTE_PINNED, this.note.id);
		},
		removeNote() {
			eventBus.$emit(EVENT_NOTE_DELETED, this.note.id)
		},
		capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
}
