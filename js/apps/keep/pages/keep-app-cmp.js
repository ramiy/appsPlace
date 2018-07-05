import keepService from '../services/keep-service.js';

import keepAdd from '../cmps/keep-add-cmp.js';
import keepText from '../cmps/types/keep-text-cmp.js';
import keepImage from '../cmps/types/keep-image-cmp.js';
import keepVideo from '../cmps/types/keep-video-cmp.js';
import keepAudio from '../cmps/types/keep-audio-cmp.js';
import keepList from '../cmps/types/keep-list-cmp.js';

export default {
	template: `
		<section class="keep-app">

			<keep-add :types="keepTypes"></keep-add>

			<div class="masonry" v-if="keepCmps">
				<component
					v-for="(cmp, idx) in keepCmps"
					:is="'keep-'+cmp.keepType"
					:key="idx"
					:data="cmp.data"
					:icon="keepTypes[cmp.keepType].icon"
					:type="idx">
				</component>
			</div>
				
		</section>
	`,
	components: {
		keepAdd,
		keepText,
		keepImage,
		keepVideo,
		keepAudio,
		keepList,
	},
	data() {
		return {
			keepCmps: null,
			keepTypes: {
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
		keepService.query()
			.then(keepCmps => {
				this.keepCmps = keepCmps
				console.log( 'service this.keepCmps:', this.keepCmps);
			});
	}
}
