import { eventBus, EVENT_NOTE_ADDED, EVENT_NOTE_PINNED, EVENT_NOTE_CLONED, EVENT_NOTE_DELETED } from '../../../services/eventbus-service.js'
import notesService from '../services/notes-service.js';

import notesAdd from '../cmps/notes-add-cmp.js';

import noteTypeText from '../cmps/types/note-type-text-cmp.js';
import noteTypeImage from '../cmps/types/note-type-image-cmp.js';
import noteTypeVideo from '../cmps/types/note-type-video-cmp.js';
import noteTypeAudio from '../cmps/types/note-type-audio-cmp.js';
import noteTypeList from '../cmps/types/note-type-list-cmp.js';

export default {
	template: `
		<section class="notes-app">

			<notes-add :types="noteTypes"></notes-add>

			<div class="masonry" v-if="notesToShow">
				<component v-for="(cmp, idx) in notesToShow"
					:is="'note-type-'+cmp.settings.noteType" :key="idx"
					:note="cmp" :icon="noteTypes[cmp.settings.noteType].icon">
				</component>
			</div>
				
		</section>
	`,
	components: {
		notesAdd,
		noteTypeText,
		noteTypeImage,
		noteTypeVideo,
		noteTypeAudio,
		noteTypeList,
	},
	data() {
		return {
			noteTypes: {
				text: { icon: 'fas fa-font', placeholder: 'What’s on your mind...' },
				image: { icon: 'far fa-image', placeholder: 'Enter image URL...' },
				video: { icon: 'fab fa-youtube', placeholder: 'Enter video URL...' },
				audio: { icon: 'fas fa-volume-up', placeholder: 'Enter audio URL...' },
				list: { icon: 'fas fa-list', placeholder: 'Add list items...' },
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
		eventBus.$on(EVENT_NOTE_CLONED, noteId => this.cloneNote(noteId));
		eventBus.$on(EVENT_NOTE_DELETED, noteId => this.removeNote(noteId));
	},
	methods: {
		addNote(note, data) {
			console.log('save from main notes cmp...');
			notesService.saveNote(note, data)
		},
		pinNote(noteId) {
			notesService.pinNote(noteId);
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
	},
}
