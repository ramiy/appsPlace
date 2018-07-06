import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'noteTypesInfo'],
	template: `
		<section class="note-type-text note-type masonry-item" :class="{marked: note.settings.marked}">

			<p contenteditable="true" @input="updateNote">{{note.data.text}}</p>

			<note-item-actions :note="note" :noteTypesInfo="noteTypesInfo"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	},
	methods: {
		updateNote(ev) {
			// eventBus.$emit('update', ev.target.innerText);
		}
	}
}