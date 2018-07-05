import keepItemActions from '../keep-item-actions-cmp.js';

export default {
	props: ['data'],
	template: `
		<section class="keep-video keep-item masonry-item">

			<video :src="data.src" controls></video>

			<keep-item-actions :data="data"></keep-item-actions>

		</section>
	`,
	components: {
		keepItemActions
	}
}
