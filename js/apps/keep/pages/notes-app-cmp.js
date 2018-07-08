import notesService from '../services/notes-service.js';
import {
	eventBus, EVENT_NOTE_ADDED, EVENT_NOTE_PINNED, EVENT_NOTE_MARKED,
	EVENT_NOTE_STYLED, EVENT_NOTE_EDITING, EVENT_NOTE_UPDATED,
	EVENT_NOTE_CLONED, EVENT_NOTE_DELETED, EVENT_LIST_NOTE_STATUS_CHANGED
} from '../../../services/eventbus-service.js'

import notesAdd from '../cmps/notes-add-cmp.js';
import notesFilter from '../cmps/notes-filter-cmp.js';
import notesList from '../cmps/notes-list-cmp.js';

export default {
	template: `
		<section class="notes-app">

			<notes-add :noteTypes="noteTypes"></notes-add>
			<notes-filter :noteTypes="noteTypes" @filtered="updateFilter"></notes-filter>
			<notes-list :noteCmps="notesToShow" :noteTypes="noteTypes"></notes-list>

		</section>
	`,
	components: { notesAdd, notesFilter, notesList },
	data() {
		return {
			noteTypes: {
				text: { field: 'text', icon: 'fas fa-font', placeholder: 'What’s on your mind...' },
				image: { field: 'url', icon: 'far fa-image', placeholder: 'Enter image URL...' },
				video: { field: 'url', icon: 'fab fa-youtube', placeholder: 'Enter video URL...' },
				audio: { field: 'url', icon: 'fas fa-volume-up', placeholder: 'Enter audio URL...' },
				list: { field: 'text', icon: 'fas fa-list', placeholder: 'Enter comma separated list...' },
			},
			noteCmps: null,
			filterBy: '',
		}
	},
	created() {
		this.loadNotes();
		eventBus.$on(EVENT_NOTE_ADDED, (note, data) => this.addNote(note, data));
		eventBus.$on(EVENT_NOTE_PINNED, noteId => this.pinNote(noteId));
		eventBus.$on(EVENT_NOTE_MARKED, noteId => this.markNote(noteId));
		eventBus.$on(EVENT_NOTE_STYLED, (noteId, bgColor) => this.styleNote(noteId, bgColor));
		eventBus.$on(EVENT_NOTE_EDITING, noteId => this.editNote(noteId));
		eventBus.$on(EVENT_NOTE_UPDATED, (note, data) => this.addNote(note, data));
		eventBus.$on(EVENT_NOTE_CLONED, noteId => this.cloneNote(noteId));
		eventBus.$on(EVENT_NOTE_DELETED, noteId => this.removeNote(noteId));
		eventBus.$on(EVENT_LIST_NOTE_STATUS_CHANGED, (noteId, listIdx) => this.updateListNoteStatus(noteId, listIdx));
	},
	methods: {
		loadNotes() {
			notesService.query()
				.then(noteCmps => this.noteCmps = noteCmps);
		},
		addNote(note, data) {
			notesService.saveNote(note, data);
		},
		pinNote(noteId) {
			notesService.pinNote(noteId);
		},
		markNote(noteId) {
			notesService.markNote(noteId);
		},
		styleNote(noteId, bgColor) {
			notesService.styleNote(noteId, bgColor);
		},
		cloneNote(noteId) {
			notesService.cloneNote(noteId);
		},
		editNote(noteId) {
			notesService.editNote(noteId);
		},
		removeNote(noteId) {
			notesService.removeNote(noteId);
		},
		updateListNoteStatus(noteId, listIdx) {
			notesService.updateListNoteStatus(noteId, listIdx);
		},
		updateFilter(newFilter) {
			this.filterBy = newFilter;
		}
	},
	computed: {
		notesToShow() {
			let notesToShow = this.noteCmps;
			if (this.filterBy) {
				notesToShow = notesToShow.filter(note => this.filterBy.includes(note.settings.noteType));
			}
			return notesToShow;
		}
	}
}
