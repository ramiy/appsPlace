export default {
	props: ['data'],
	template: `
		<section class="keep-item-actions">

			<label class="container">Sticky
				<input type="checkbox"  :checked="data.isSticky">
				<span class="checkmark"></span>
			</label>

		</section>
	`,
}
