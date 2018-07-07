import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'noteTypesInfo'],
	template: `
		<section class="note-type-video note-type masonry-item"
			:class="{marked: note.settings.marked}"
			:style="{'background-color': note.styles.backgroundColor }">

			<video :src="note.data.src" controls></video>

			<note-item-actions :note="note" :noteTypesInfo="noteTypesInfo"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	},
}
