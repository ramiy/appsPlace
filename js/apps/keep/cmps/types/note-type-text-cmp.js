import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'icon'],
	template: `
		<section class="note-type-text note-type masonry-item" :class="{pinned: note.isSticky}">

			<p>{{note.data.text}}</p>

			<note-item-actions :note="note" :icon="icon"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
