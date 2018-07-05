import keepItemActions from '../keep-item-actions-cmp.js';

export default {
	props: ['data', 'type', 'icon'],
	template: `
		<section class="keep-text keep-item masonry-item">

			<p>{{data.text}}</p>

			<keep-item-actions :data="data" :type="type" :icon="icon"></keep-item-actions>

		</section>
	`,
	components: {
		keepItemActions
	}
}
