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

			<div class="masonry">
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
			currView: '',
			keepTypes: {
				text: { icon: 'fas fa-font', placeholder: 'What’s on your mind...' },
				image: { icon: 'far fa-image', placeholder: 'Enter image URL...' },
				video: { icon: 'fab fa-youtube', placeholder: 'Enter video URL...' },
				audio: { icon: 'fas fa-volume-up', placeholder: 'Enter audio URL...' },
				list: { icon: 'fas fa-list', placeholder: 'Add list items...' },
			},
			keepCmps: [
				{
					keepType: 'image',
					data: { src: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif' },
					isSticky: true,
				},
				{
					keepType: 'text',
					data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
					isSticky: false,
				},

				{
					keepType: 'image',
					data: { src: 'http://placehold.it/300x400?text=Image' },
					isSticky: true,
				},
				{
					keepType: 'text',
					data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
					isSticky: false,
				},
				{
					keepType: 'text',
					data: { text: 'Another lorem ipsum dolor, consectetur adipiscing elit' },
					isSticky: false,
				},
				{
					keepType: 'text',
					data: { text: 'Blah blah blah ...' },
					isSticky: false,
				},
				{
					keepType: 'video',
					data: { src: 'http://techslides.com/demos/sample-videos/small.mp4' },
					isSticky: false,
				},
				{
					keepType: 'audio',
					data: { src: 'http://cld2099web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3' },
					isSticky: false,
				},
				{
					keepType: 'image',
					data: { src: 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif' },
					isSticky: true,
				},
				{
					keepType: 'text',
					data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
					isSticky: false,
				},
				{
					keepType: 'text',
					data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
					isSticky: false,
				},

			],
			newKeep: null,
		}
	},
	methods: {

	}
}
