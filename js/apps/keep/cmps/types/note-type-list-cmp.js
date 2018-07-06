import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['note', 'noteTypesInfo'],
	template: `
		<section class="note-type-list note-type masonry-item"
			:class="{marked: note.settings.marked}"
			:style="{'background-color': note.styles.backgroundColor }">

			<ul>
				<li v-for="list in note.data.list">
					<p>{{list}}</p>
				</li>
			</ul>

			<note-item-actions :note="note" :noteTypesInfo="noteTypesInfo"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
