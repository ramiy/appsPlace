import { eventBus, EVENT_NOTE_ADDED, EVENT_NOTE_PINNED, EVENT_NOTE_MARKED, EVENT_NOTE_STYLED, EVENT_NOTE_CLONED, EVENT_NOTE_DELETED } from '../../../services/eventbus-service.js'
import notesService from '../services/notes-service.js';

import notesAdd from '../cmps/notes-add-cmp.js';
import notesList from '../cmps/notes-list-cmp.js';

export default {
	template: `
		<section class="notes-app">

			<notes-add :noteTypes="noteTypes"></notes-add>

			<notes-list :noteCmps="noteCmps" :noteTypes="noteTypes"></notes-list>

		</section>
	`,
	components: { notesAdd, notesList },
	data() {
		return {
			noteTypes: {
				text: { icon: 'fas fa-font', placeholder: 'What’s on your mind...' },
				image: { icon: 'far fa-image', placeholder: 'Enter image URL...' },
				video: { icon: 'fab fa-youtube', placeholder: 'Enter video URL...' },
				audio: { icon: 'fas fa-volume-up', placeholder: 'Enter audio URL...' },
				list: { icon: 'fas fa-list', placeholder: 'Enter comma separated list...' },
			},
			noteCmps: null,
		}
	},
	created() {
		this.loadNotes();
		eventBus.$on(EVENT_NOTE_ADDED, (note, data) => this.addNote(note, data));
		eventBus.$on(EVENT_NOTE_PINNED, noteId => this.pinNote(noteId));
		eventBus.$on(EVENT_NOTE_MARKED, noteId => this.markNote(noteId));
		eventBus.$on(EVENT_NOTE_STYLED, (noteId, bgColor) => this.styleNote(noteId, bgColor));
		eventBus.$on(EVENT_NOTE_CLONED, noteId => this.cloneNote(noteId));
		eventBus.$on(EVENT_NOTE_DELETED, noteId => this.removeNote(noteId));
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
		removeNote(noteId) {
			notesService.removeNote(noteId);
		},
	}
}
