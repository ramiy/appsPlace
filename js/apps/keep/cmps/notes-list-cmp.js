import noteTypeText from '../cmps/types/note-type-text-cmp.js';
import noteTypeImage from '../cmps/types/note-type-image-cmp.js';
import noteTypeVideo from '../cmps/types/note-type-video-cmp.js';
import noteTypeAudio from '../cmps/types/note-type-audio-cmp.js';
import noteTypeList from '../cmps/types/note-type-list-cmp.js';

export default {
	props: ['notes', 'noteTypes'],
	template: `
		<section class="notes-list masonry" v-if="notes">

			<component v-for="(cmp, idx) in notes" :is="'note-type-'+cmp.settings.noteType"
				:key="idx" :note="cmp" :noteTypesInfo="noteTypes[cmp.settings.noteType]">
			</component>

		</section>
	`,
	components: {
		noteTypeText,
		noteTypeImage,
		noteTypeVideo,
		noteTypeAudio,
		noteTypeList,
	},
}
