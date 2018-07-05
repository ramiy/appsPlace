export default {
	props: ['data'],
	template: `
		<section class="keep-video masonry-item">
			<video :src="data.src" controls></video>
		</section>
	`,
}
