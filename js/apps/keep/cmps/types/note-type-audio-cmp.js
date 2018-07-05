import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['data', 'type', 'icon'],
	template: `
		<section class="note-type-audio note-item masonry-item">

			<audio controls>
				<source :src="data.src" />
			</audio>

			<note-item-actions :data="data" :type="type" :icon="icon"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
