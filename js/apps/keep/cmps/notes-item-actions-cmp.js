import { eventBus, EVENT_NOTE_PINNED, EVENT_NOTE_CLONED, EVENT_NOTE_DELETED } from '../../../services/eventbus-service.js'
import notesService from '../services/notes-service.js';

export default {
	props: ['note', 'icon'],
	template: `
		<section class="note-item-actions flex space-between">

			<i :class="icon" class="visible" :title="iconTitle"></i>
			<span> &nbsp; </span>
			<i class="fas fa-palette info" title="Change note color"></i>
			<i class="fas fa-thumbtack" :class="{selected: note.settings.isSticky}" title="Pin note" @click="pinNote"></i>
			<i class="fas fa-clone info" title="Clone note" @click="cloneNote"></i>
			<i class="fas fa-trash-alt danger" title="Delete note" @click="removeNote"></i>

		</section>
	`,
	computed: {
		iconTitle() {
			return this.capitalizeFirstLetter(this.note.settings.noteType + ' note');
		}
	},
	methods: {
		pinNote() {
			eventBus.$emit(EVENT_NOTE_PINNED, this.note.id);
		},
		cloneNote() {
			eventBus.$emit(EVENT_NOTE_CLONED, this.note.id)
		},
		removeNote() {
			eventBus.$emit(EVENT_NOTE_DELETED, this.note.id)
		},
		capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
}
