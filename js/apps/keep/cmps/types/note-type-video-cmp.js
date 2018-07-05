import noteItemActions from '../notes-item-actions-cmp.js';

export default {
	props: ['data', 'type', 'icon'],
	template: `
		<section class="note-type-video note-item masonry-item">

			<video :src="data.src" controls></video>

			<note-item-actions :data="data" :type="type" :icon="icon"></note-item-actions>

		</section>
	`,
	components: {
		noteItemActions
	}
}
