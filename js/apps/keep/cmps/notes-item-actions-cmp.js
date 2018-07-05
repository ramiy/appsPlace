import { eventBus, EVENT_NOTE_PINNED, EVENT_NOTE_DELETED } from '../../../services/eventbus-service.js'
import notesService from '../services/notes-service.js';

export default {
	props: ['note', 'icon'],
	template: `
		<section class="note-item-actions flex space-between">
		
			<i :class="icon" class="visible"></i>
			<i class="fas fa-thumbtack" :class="{selected: note.isSticky}" @click="pinNote"></i>
			<i class="fas fa-palette info"></i>
			<i class="fas fa-trash-alt danger" @click="removeNote"></i>

		</section>
	`,
	methods: {
		pinNote() {
			eventBus.$emit(EVENT_NOTE_PINNED, this.note.id);
		},
		removeNote() {
			eventBus.$emit(EVENT_NOTE_DELETED, this.note.id)
		},
	}
}
