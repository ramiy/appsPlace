import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'noteTypesInfo'],
	template: `
		<section class="note-type-image note-type masonry-item" :class="{marked: note.settings.marked}">

			<img :src="note.data.src" alt="" />

			<note-item-actions :note="note" :noteTypesInfo="noteTypesInfo"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
