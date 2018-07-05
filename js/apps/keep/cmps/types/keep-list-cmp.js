import keepItemActions from '../keep-item-actions-cmp.js';

export default {
	props: ['data'],
	template: `
		<section class="keep-list keep-item masonry-item">

			list

			<keep-item-actions :data="data"></keep-item-actions>

		</section>
	`,
	components: {
		keepItemActions
	}
}
