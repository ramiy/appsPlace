import keepAdd from '../cmps/keep-add-cmp.js';
import keepText from '../cmps/types/keep-text-cmp.js';
import keepImage from '../cmps/types/keep-image-cmp.js';
import keepVideo from '../cmps/types/keep-video-cmp.js';
import keepAudio from '../cmps/types/keep-audio-cmp.js';
import keepList from '../cmps/types/keep-list-cmp.js';

export default {
	template: `
		<section class="keep-app">

			<keep-add></keep-add>

			<!-- <button @click="cmps.push({cmpType: 'say-hello', data: {greet : 'Hi'}})">+</button> -->

			<div class="masonry">
				<component v-for="(cmp, idx) in keepCmps" :is="cmp.keepType" :key="idx" :data="cmp.data">
				</component>
			</div>

		</section>
	`,
	data() {
		return {
			currView: '',
			keepCmps: [
				{
					keepType: 'keep-image',
					data: { src: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif' },
					isSticky: true,
				},
				{
					keepType: 'keep-image',
					data: { src: 'http://placehold.it/300x400?text=Image' },
					isSticky: true,
				},
				{
					keepType: 'keep-text',
					data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
					isSticky: false,
				},
				{
					keepType: 'keep-text',
					data: { text: 'Another lorem ipsum dolor, consectetur adipiscing elit' },
					isSticky: false,
				},
				{
					keepType: 'keep-text',
					data: { text: 'Blah blah blah ...' },
					isSticky: false,
				},
				{
					keepType: 'keep-video',
					data: { src: 'http://techslides.com/demos/sample-videos/small.mp4' },
					isSticky: false,
				},
				{
					keepType: 'keep-audio',
					data: { src: 'http://cld2099web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3' },
					isSticky: false,
				},
				{
					keepType: 'keep-image',
					data: { src: 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif' },
					isSticky: true,
				},
			],
			newKeep: null,
		}
	},
	components: {
		keepAdd,
		keepText,
		keepImage,
		keepVideo,
		keepAudio,
		keepList,
	}
}