export default {
	props: ['data'],
	template: `
		<section class="keep-image masonry-item">
			<img :src="data.src" alt="" />
		</section>
	`,
}
