import { eventBus, EVENT_NOTE_EDITING, EVENT_NOTE_UPDATED } from '../../../services/eventbus-service.js'

export default {
	props: ['note'],
	template: `
		<section class="notes-edit">

			<input type="text" autocomplete="off" v-model="newData" />
			<button @click="chancelEdit">Chancel</button>
			<button @click="saveEdit">Update</button>

		</section>
	`,
	data() {
		return {
			newData: '',
		}
	},
	created() {
		this.newData = this.getNoteData();
	},
	methods: {
		getNoteData() {
			let strValue = '';
			switch (this.note.settings.noteType) {
				case 'text':
					strValue = this.note.data.text;
					break;
				case 'image':
				case 'video':
				case 'audio':
					strValue = this.note.data.src;
					break;
				case 'list':
					strValue = this.note.data.list.map(list => list.text).join(',');
					break;
			}
			return strValue;
		},
		chancelEdit() {
			eventBus.$emit(EVENT_NOTE_EDITING, this.note.id);
		},
		saveEdit() {
			eventBus.$emit(EVENT_NOTE_EDITING, this.note.id);
			eventBus.$emit(EVENT_NOTE_UPDATED, this.note, this.newData);
		}
	}
}
