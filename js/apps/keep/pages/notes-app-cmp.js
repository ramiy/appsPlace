import { eventBus, EVENT_NOTE_PINNED, EVENT_NOTE_CLONED, EVENT_NOTE_DELETED } from '../../../services/eventbus-service.js'
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

			<div class="masonry" v-if="noteCmps">
				<component v-for="(cmp, idx) in noteCmps"
					:is="'note-type-'+cmp.noteType" :key="idx"
					:note="cmp" :icon="noteTypes[cmp.noteType].icon">
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
			noteCmps: null,
			noteTypes: {
				text: { icon: 'fas fa-font', placeholder: 'What’s on your mind...' },
				image: { icon: 'far fa-image', placeholder: 'Enter image URL...' },
				video: { icon: 'fab fa-youtube', placeholder: 'Enter video URL...' },
				audio: { icon: 'fas fa-volume-up', placeholder: 'Enter audio URL...' },
				list: { icon: 'fas fa-list', placeholder: 'Add list items...' },
			},
		}
	},
	created() {
		notesService.query()
			.then(noteCmps => this.noteCmps = noteCmps);

		eventBus.$on(EVENT_NOTE_PINNED, noteId => this.pinNote(noteId));
		eventBus.$on(EVENT_NOTE_CLONED, noteId => this.cloneNote(noteId));
		eventBus.$on(EVENT_NOTE_DELETED, noteId => this.removeNote(noteId));
	},
	methods: {
		pinNote(noteId) {
			notesService.pinNote(noteId);
		},
		cloneNote(noteId) {
			notesService.cloneNote(noteId);
		},
		removeNote(noteId) {
			notesService.removeNote(noteId);
		},
	}
}
