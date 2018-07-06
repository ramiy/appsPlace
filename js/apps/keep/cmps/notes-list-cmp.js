import noteTypeText from '../cmps/types/note-type-text-cmp.js';
import noteTypeImage from '../cmps/types/note-type-image-cmp.js';
import noteTypeVideo from '../cmps/types/note-type-video-cmp.js';
import noteTypeAudio from '../cmps/types/note-type-audio-cmp.js';
import noteTypeList from '../cmps/types/note-type-list-cmp.js';

export default {
	props: ['noteCmps', 'noteTypes'],
	template: `
		<section class="notes-list" v-if="noteCmps">

			<h3 v-if="pinnedNotesToShow"> Pinned Notes </h3>
			<div v-if="pinnedNotesToShow" class="masonry">
				<component v-for="(cmp, idx) in pinnedNotesToShow" :is="'note-type-'+cmp.settings.noteType"
					:key="idx" :note="cmp" :noteTypesInfo="noteTypes[cmp.settings.noteType]">
				</component>
			</div>

			<h3 v-if="pinnedNotesToShow"> Other Notes </h3>
			<div v-if="notesToShow" class="masonry">
				<component v-for="(cmp, idx) in notesToShow" :is="'note-type-'+cmp.settings.noteType"
					:key="idx" :note="cmp" :noteTypesInfo="noteTypes[cmp.settings.noteType]">
				</component>
			</div>

		</section>
	`,
	components: {
		noteTypeText,
		noteTypeImage,
		noteTypeVideo,
		noteTypeAudio,
		noteTypeList,
	},
	computed: {
		pinnedNotesToShow() {
			return this.noteCmps.filter(note => (note.settings.pinned));
		},
		notesToShow() {
			return this.noteCmps.filter(note => (!note.settings.pinned));
		}
	}
}
