import keepItemActions from '../keep-item-actions-cmp.js';

export default {
	props: ['data', 'type', 'icon'],
	template: `
		<section class="keep-video keep-item masonry-item">

			<video :src="data.src" controls></video>

			<keep-item-actions :data="data" :type="type" :icon="icon"></keep-item-actions>

		</section>
	`,
	components: {
		keepItemActions
	}
}
