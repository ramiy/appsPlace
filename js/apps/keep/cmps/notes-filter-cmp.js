export default {
	props: ['noteTypes'],
	template: `
		<section class="note-filter flex justify-content-center" style="padding-bottom: 2em">

			<div class="flex justify-content-center">
				Filter by: &nbsp;&nbsp;
				<template v-for="(noteType, idx) in noteTypes">
					<i :class="setSelectedFilter(idx, noteType.icon)" @click="updateFilter(idx)"></i> &nbsp;&nbsp;
				</template>
			</div>

		</section>
	`,
	data() {
		return {
			filterBy: ''
		}
	},
	methods: {
		setSelectedFilter(type, noteIcon) {
			return (this.filterBy.includes(type))
				? noteIcon + ' fa-lg selected'
				: noteIcon + ' fa-lg';
		},
		updateFilter(sortByType) {
			this.filterBy = (this.filterBy === sortByType) ? '' : sortByType;
			this.$emit('filtered', this.filterBy);
		},
	}
}
