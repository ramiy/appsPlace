import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'icon'],
	template: `
		<section class="note-type-video note-type masonry-item" :class="{pinned: note.settings.isSticky}">

			<video :src="note.data.src" controls></video>

			<note-item-actions :note="note" :icon="icon"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	},
}
