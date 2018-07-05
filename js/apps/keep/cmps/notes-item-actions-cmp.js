export default {
	props: ['data', 'type', 'icon'],
	template: `
		<section class="note-item-actions flex space-between">
		
			<i :class="icon + ' fa-lg'"></i>

			<label class="checkbox-container">x
				<input type="checkbox" :checked="data.isSticky">
				<span class="checkmark"></span>
			</label>

		</section>
	`,
}
