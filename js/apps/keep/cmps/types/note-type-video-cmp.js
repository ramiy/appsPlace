import noteItemActions from '../notes-item-actions-cmp.js';
import noteEdit from '../notes-edit-cmp.js';

export default {
	props: ['note', 'noteTypesInfo'],
	template: `
		<section class="note-type note-type-video"
			:class="{marked: note.settings.marked}"
			:style="{'background-color': note.styles.backgroundColor }">

			<video :src="note.data.src" controls></video>

			<note-item-actions :note="note" :noteTypesInfo="noteTypesInfo"></note-item-actions>

			<note-edit :note="note" v-if="note.settings.editMode"></note-edit>

		</section>
	`,
	components: {
		noteItemActions,
		noteEdit,
	},
}
