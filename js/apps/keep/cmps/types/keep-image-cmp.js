import keepItemActions from '../keep-item-actions-cmp.js';

export default {
	props: ['data', 'type', 'icon'],
	template: `
		<section class="keep-image keep-item masonry-item">

			<img :src="data.src" alt="" />

			<keep-item-actions :data="data" :type="type" :icon="icon"></keep-item-actions>

		</section>
	`,
	components: {
		keepItemActions
	}
}
