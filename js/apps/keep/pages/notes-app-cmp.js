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
				<component
					v-for="(cmp, idx) in noteCmps"
					:is="'note-type-'+cmp.noteType"
					:key="idx"
					:data="cmp.data"
					:icon="noteTypes[cmp.noteType].icon"
					:type="idx">
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
			newKeep: null,
		}
	},
	created() {
		notesService.query()
			.then(noteCmps => {
				this.noteCmps = noteCmps
				console.log( 'service this.noteCmps:', this.noteCmps);
			});
	}
}
