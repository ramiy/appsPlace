export default {
	props: ['types'],
	template: `
		<section class="notes-add flex justify-content-center">

			<input type="type" :placeholder="placeholder" @submit="saveKeep" />

			<template v-for="(type, idx) in types">
				<i :class="setSelectedIcon(idx, type.icon)" @click="changeSelectedType(idx)"></i> 
			</template>

		</section>
	`,
	data() {
		return {
			selectedType: 'text',
		}
	},
	computed: {
		placeholder() {
			return this.types[this.selectedType].placeholder;
		}
	},
	methods: {
		setSelectedIcon(idx, icon) {
			let iconClass = icon + ' fa-lg';
			if (idx === this.selectedType) iconClass += ' selected';
			return iconClass;
		},
		changeSelectedType(idx) {
			this.selectedType = idx;
		},
		saveKeep() {
			
		},
	}
}
