import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['data', 'type', 'icon'],
	template: `
		<section class="note-type-image note-item masonry-item">

			<img :src="data.src" alt="" />

			<note-item-actions :data="data" :type="type" :icon="icon"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
