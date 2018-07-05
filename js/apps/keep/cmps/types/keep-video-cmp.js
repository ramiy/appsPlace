export default {
	props: ['data'],
	template: `
		<section class="keep-video masonry-item">
			<video :src="data.src"></video>
		</section>
	`,
}
