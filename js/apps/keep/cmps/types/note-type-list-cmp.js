import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'icon'],
	template: `
		<section class="note-type-list note-type masonry-item" :class="{pinned: note.settings.isSticky}">

			list

			<note-item-actions :note="note" :icon="icon"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
