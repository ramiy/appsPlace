import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'icon'],
	template: `
		<section class="note-type-audio note-type masonry-item" :class="{pinned: note.isSticky}">

			<audio controls>
				<source :src="note.data.src" />
			</audio>

			<note-item-actions :note="note" :icon="icon"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
