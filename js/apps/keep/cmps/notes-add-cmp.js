import { eventBus, EVENT_NOTE_ADDED } from '../../../services/eventbus-service.js'
import notesService from '../services/notes-service.js';

export default {
	props: ['noteTypes'],
	template: `
		<section class="notes-add flex space-between">

			<input type="type" v-model="userData" :placeholder="placeholder" @keyup.enter="addNote" ref="newNoteEl" />

			<div class="flex">
				<template v-for="(type, idx) in noteTypes">
					<i :class="setSelectedIcon(idx, type.icon)" @click="changeSelectedType(idx)"></i> 
				</template>
			</div>

		</section>
	`,
	data() {
		return {
			newNote: notesService.emptyNote(),
			userData: ''
		}
	},
	computed: {
		placeholder() {
			return this.noteTypes[this.newNote.settings.noteType].placeholder;
		}
	},
	methods: {
		setSelectedIcon(idx, icon) {
			let iconClass = icon + ' fa-lg';
			if (idx === this.newNote.settings.noteType) iconClass += ' selected';
			return iconClass;
		},
		changeSelectedType(idx) {
			this.newNote.settings.noteType = idx;
			this.$refs.newNoteEl.focus();
		},
		addNote() {
			eventBus.$emit(EVENT_NOTE_ADDED, this.newNote, this.userData);
			this.newNote = notesService.emptyNote();
			this.userData = '';
		},
	}
}
