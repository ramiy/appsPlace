export default {
	props: ['data'],
	template: `
		<section class="keep-audio masonry-item">
			<audio :src="data.src"></audio>
		</section>
	`,
}
