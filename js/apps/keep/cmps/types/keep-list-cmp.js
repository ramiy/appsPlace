import keepItemActions from '../keep-item-actions-cmp.js';

export default {
	props: ['data', 'type', 'icon'],
	template: `
		<section class="keep-list keep-item masonry-item">

			list

			<keep-item-actions :data="data" :type="type" :icon="icon"></keep-item-actions>

		</section>
	`,
	components: {
		keepItemActions
	}
}
