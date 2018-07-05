import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'icon'],
	template: `
		<section class="note-type-image note-type masonry-item" :class="{pinned: note.isSticky}">

			<img :src="note.data.src" alt="" />

			<note-item-actions :note="note" :icon="icon"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
