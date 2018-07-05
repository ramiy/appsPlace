import keepItemActions from '../keep-item-actions-cmp.js';

export default {
	props: ['data'],
	template: `
		<section class="keep-audio keep-item masonry-item">

			<audio controls>
				<source :src="data.src" />
			</audio>

			<keep-item-actions :data="data"></keep-item-actions>

		</section>
	`,
	components: {
		keepItemActions
	}
}
