import keepAdd from '../cmps/keep-add-cmp.js';

export default {
	template: `
		<section class="keep-app">

			<keep-add></keep-add>

			<!-- <button @click="cmps.push({cmpType: 'say-hello', data: {greet : 'Hi'}})">+</button> -->

			<component v-for="(cmp, idx) in keepCmps" :is="cmp.keepType" :key="idx" :data="cmp.data">
			</component>

		</section>
	`,
	data() {
		return {
			currView: '',
			keepCmps: [
				{ keepType: 'keep-text', data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' } },
				{ keepType: 'keep-text', data: { text: 'Another lorem ipsum dolor' } },
				{ keepType: 'keep-image', data: { src: 'http://placehold.it/300x400?text=Image' } },
				{ keepType: 'keep-text', data: { text: 'Blah blah blah ...' } },
				{ keepType: 'keep-note', data: { text: 'note info...' } },
			],
		}
	},
	components: {
		keepAdd,
		'keep-text': {
			props: ['data'],
			template: `
				<section class="keep-item keep-text">
					{{data.text}}
				</section>
			`
		},
		'keep-image': {
			props: ['data'],
			template: `
				<section class="keep-item keep-image">
					<img :src="data.src" alt="" />
				</section>
			`
		},
		'keep-note': {
			props: ['data'],
			template: `
				<section class="keep-item keep-note">
					{{data.text}}
				</section>
			`
		},
		'keep-video': {
			props: ['data'],
			template: `
				<section class="keep-item keep-video">
					video
				</section>
			`
		},
		'keep-audio': {
			props: ['data'],
			template: `
				<section class="keep-item keep-audio">
				audio
				</section>
			`
		},
		'keep-list': {
			props: ['data'],
			template: `
				<section class="keep-item keep-list">
					list
				</section>
			`
		},
	}
}