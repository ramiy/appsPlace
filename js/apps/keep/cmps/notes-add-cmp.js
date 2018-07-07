import { eventBus, EVENT_NOTE_ADDED } from '../../../services/eventbus-service.js'
import notesService from '../services/notes-service.js';

export default {
	props: ['noteTypes'],
	template: `
		<section class="notes-add flex space-between">

			<input :type="fieldType" autocomplete="off" v-model="userData"
				:placeholder="placeholder" @keyup.enter="addNote" ref="newNoteEl" />

			<div class="flex">
				<template v-for="(noteType, idx) in noteTypes">
					<i :class="setSelectedType(idx, noteType.icon)" @click="updateSelectedType(idx)"></i> 
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
		fieldType() {
			return this.noteTypes[this.newNote.settings.noteType].field;
		},
		placeholder() {
			return this.noteTypes[this.newNote.settings.noteType].placeholder;
		}
	},
	methods: {
		setSelectedType(noteType, noteIcon) {
			return (this.newNote.settings.noteType === noteType)
				? noteIcon + ' fa-lg selected'
				: noteIcon + ' fa-lg';
		},
		updateSelectedType(noteType) {
			this.newNote.settings.noteType = noteType;
			this.$refs.newNoteEl.focus();
		},
		addNote() {
			eventBus.$emit(EVENT_NOTE_ADDED, this.newNote, this.userData);
			this.newNote = notesService.emptyNote();
			this.userData = '';
		},
	}
}
