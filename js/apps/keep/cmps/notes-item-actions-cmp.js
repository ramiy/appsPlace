import { eventBus, EVENT_NOTE_PINNED, EVENT_NOTE_MARKED, EVENT_NOTE_CLONED, EVENT_NOTE_DELETED } from '../../../services/eventbus-service.js'

export default {
	props: ['note', 'noteTypesInfo'],
	template: `
		<section class="note-item-actions flex space-between">

			<i :class="getIconClass" :title="getIconTitle"></i>
			<span> &nbsp; </span>
			<i class="fas fa-thumbtack" :class="{pinned: note.settings.pinned}" title="Pin note" @click="pinNote"></i>
			<i class="fas fa-check" :class="{marked: note.settings.marked}" title="Mark note" @click="markNote"></i>
			<i class="fas fa-palette info colors dropdown" title="Change note color">
				<div class="dropdown-content">
					<template v-for="color in availableColors">
						<span :style="{'background-color': color.value}"> &nbsp; </span>
					</template>
				</div>
				<!-- <ul arie-label="Change note color" class="dropdown-content">
					<li v-for="color in availableColors">
						<span :style="{'background-color': color.value}"> &nbsp; </span>
					</li>
				</ul> -->
			</i>
			<i class="fas fa-clone info" title="Clone note" @click="cloneNote"></i>
			<i class="fas fa-trash-alt danger" title="Delete note" @click="removeNote"></i>

		</section>
	`,
	computed: {
		getIconClass() {
			return this.noteTypesInfo.icon + ' visible';
		},
		getIconTitle() {
			return this.capitalizeFirstLetter(this.note.settings.noteType + ' note');
		}
	},
	methods: {
		pinNote() {
			eventBus.$emit(EVENT_NOTE_PINNED, this.note.id);
		},
		markNote() {
			eventBus.$emit(EVENT_NOTE_MARKED, this.note.id);
		},
		cloneNote() {
			eventBus.$emit(EVENT_NOTE_CLONED, this.note.id);
		},
		removeNote() {
			eventBus.$emit(EVENT_NOTE_DELETED, this.note.id);
		},
		capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	},
	data() {
		return {
			availableColors: [
				{ value: 'rgb(255, 255, 255)', name: 'white' },
				{ value: 'rgb(255, 138, 128)', name: 'xxx' },
				{ value: 'rgb(255, 209, 128)', name: 'xxx' },
				{ value: 'rgb(255, 255, 141)', name: 'xxx' },
				{ value: 'rgb(204, 255, 144)', name: 'xxx' },
				{ value: 'rgb(167, 255, 235)', name: 'xxx' },
				{ value: 'rgb(128, 216, 255)', name: 'xxx' },
				{ value: 'rgb(130, 177, 255)', name: 'xxx' },
				{ value: 'rgb(179, 136, 255)', name: 'xxx' },
				{ value: 'rgb(248, 187, 208)', name: 'xxx' },
				{ value: 'rgb(215, 204, 200)', name: 'xxx' },
				{ value: 'rgb(207, 216, 220)', name: 'xxx' },
			]
		}
	},
}
