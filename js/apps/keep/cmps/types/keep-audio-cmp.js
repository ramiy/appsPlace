export default {
	props: ['data'],
	template: `
		<section class="keep-audio masonry-item">
			<audio controls>
				<source :src="data.src" />
			</audio>
		</section>
	`,
}
