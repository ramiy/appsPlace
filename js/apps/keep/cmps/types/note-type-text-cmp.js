import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['data', 'type', 'icon'],
	template: `
		<section class="note-type-text note-item masonry-item">

			<p>{{data.text}}</p>

			<note-item-actions :data="data" :type="type" :icon="icon"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
