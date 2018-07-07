export default {
	props: ['note'],
	template: `
		<section class="notes-edit flex">

			<input type="text" autocomplete="off" :value="value">
			<button @click>Update</button>

		</section>
	`,
	computed: {
		value() {
			let value = '';
			switch (this.note.settings.noteType) {
				case 'text':
					value = this.note.data.text;
					break;
				case 'image':
				case 'video':
				case 'audio':
					value = this.note.data.src;
					break;
				case 'list':
					value = this.note.data.list.map(list => list.text).join(',');
					break;
			}
			return value;
		}
	}
}
