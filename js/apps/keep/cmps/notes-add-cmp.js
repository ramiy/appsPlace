import { eventBus, EVENT_NOTE_ADDED } from '../../../services/eventbus-service.js'
import notesService from '../services/notes-service.js';

export default {
	props: ['types'],
	template: `
		<section class="notes-add flex justify-content-center">

			<input type="type" v-model="userData" :placeholder="placeholder" @keyup.enter="addNote" ref="newNote" />

			<template v-for="(type, idx) in types">
				<i :class="setSelectedIcon(idx, type.icon)" @click="changeSelectedType(idx)"></i> 
			</template>

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
			return this.types[this.newNote.noteType].placeholder;
		}
	},
	methods: {
		setSelectedIcon(idx, icon) {
			let iconClass = icon + ' fa-lg';
			if (idx === this.newNote.noteType) iconClass += ' selected';
			return iconClass;
		},
		changeSelectedType(idx) {
			this.newNote.noteType = idx;
			this.$refs.newNote.focus();
		},
		addNote() {
			console.log('save from add new cmp...');
			eventBus.$emit(EVENT_NOTE_ADDED, [ this.newNote, this.userData ]);
			this.newNote = notesService.emptyNote();
			this.userData = '';
		},
	}
}
