import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'noteTypesInfo'],
	template: `
		<section class="note-type-audio note-type masonry-item"
			:class="{marked: note.settings.marked}"
			:style="{'background-color': note.styles.backgroundColor }">

			<audio controls>
				<source :src="note.data.src" />
			</audio>

			<note-item-actions :note="note" :noteTypesInfo="noteTypesInfo"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
