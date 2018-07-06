import { eventBus, EVENT_NOTE_ADDED, EVENT_NOTE_PINNED, EVENT_NOTE_MARKED, EVENT_NOTE_STYLED, EVENT_NOTE_CLONED, EVENT_NOTE_DELETED } from '../../../services/eventbus-service.js'
import notesService from '../services/notes-service.js';

import notesAdd from '../cmps/notes-add-cmp.js';
import notesList from '../cmps/notes-list-cmp.js';

export default {
	template: `
		<section class="notes-app">

			<notes-add :noteTypes="noteTypes"></notes-add>

			<notes-list :notes="notesToShow" :noteTypes="noteTypes"></notes-list>

		</section>
	`,
	components: {
		notesAdd,
		notesList,
	},
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
			filter: null
		}
	},
	created() {
		notesService.query()
			.then(noteCmps => this.noteCmps = noteCmps);

		eventBus.$on(EVENT_NOTE_ADDED, (note, data) => this.addNote(note, data));
		eventBus.$on(EVENT_NOTE_PINNED, noteId => this.pinNote(noteId));
		eventBus.$on(EVENT_NOTE_MARKED, noteId => this.markNote(noteId));
		eventBus.$on(EVENT_NOTE_STYLED, (noteId, bgColor) => this.styleNote(noteId, bgColor));
		eventBus.$on(EVENT_NOTE_CLONED, noteId => this.cloneNote(noteId));
		eventBus.$on(EVENT_NOTE_DELETED, noteId => this.removeNote(noteId));
	},
	methods: {
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
	},
	computed: {
		notesToShow() {
			let notesToShow = this.noteCmps;

			if (this.filter) {

				// Search by search
				notesToShow = notesToShow.filter(book => {
					return book.title.includes(this.filter.by);
				});

				// Filter by price range
				notesToShow = notesToShow.filter(book => {
					let price = book.listPrice.amount;
					return (price >= this.filter.fromPrice && price <= this.filter.toPrice);
				});

				// Sort by
				switch (this.filter.sort) {
					case 'name':
						notesToShow = notesToShow.sort((a, b) => {
							if (a.title < b.title)
								return -1;
							if (a.title > b.title)
								return 1;
							return 0;
							// return a.title < b.title; // Not working?!
						});
						break;
					case 'price':
						notesToShow = notesToShow.sort((a, b) => {
							return a.listPrice.amount - b.listPrice.amount;
						});
						break;
					case 'date':
						notesToShow = notesToShow.sort((a, b) => {
							return a.publishedDate - b.publishedDate;
						});
						break;
				}

			}

			return notesToShow;
		}
	}
}
