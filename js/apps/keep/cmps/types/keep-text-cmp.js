import keepItemActions from '../keep-item-actions-cmp.js';

export default {
	props: ['data'],
	template: `
		<section class="keep-text keep-item masonry-item">

			<p>{{data.text}}</p>

			<keep-item-actions :data="data"></keep-item-actions>

		</section>
	`,
	components: {
		keepItemActions
	}
}
