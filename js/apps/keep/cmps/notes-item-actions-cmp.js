import { eventBus, EVENT_NOTE_PINNED, EVENT_NOTE_MARKED, EVENT_NOTE_STYLED, EVENT_NOTE_CLONED, EVENT_NOTE_DELETED } from '../../../services/eventbus-service.js'

export default {
	props: ['note', 'noteTypesInfo'],
	template: `
		<aside class="note-item-actions flex space-between">

			<i :class="getIconClass" :title="getIconTitle"></i>
			<span> &nbsp; </span>
			<i class="fas fa-thumbtack" :class="{pinned: note.settings.pinned}" title="Pin note" @click="pinNote"></i>
			<i class="fas fa-check" :class="{marked: note.settings.marked}" title="Mark note" @click="markNote"></i>
			<i class="fas fa-palette info colors dropdown" title="Change note color">
				<div class="dropdown-content">
					<template v-for="color in availableColors">
						<span :style="{'background-color': color.value}"
						:class="getBgColorClass(color.value)" @click="styleNote(color.value)"> &nbsp; </span>
					</template>
				</div>
			</i>
			<i class="fas fa-clone info" title="Clone note" @click="cloneNote"></i>
			<i class="fas fa-trash-alt danger" title="Delete note" @click="removeNote"></i>

		</aside>
	`,
	computed: {
		getIconClass() {
			return this.noteTypesInfo.icon + ' visible';
		},
		getIconTitle() {
			return this.capitalizeFirstLetter(this.note.settings.noteType + ' note');
		},
	},
	methods: {
		pinNote() {
			eventBus.$emit(EVENT_NOTE_PINNED, this.note.id);
		},
		markNote() {
			eventBus.$emit(EVENT_NOTE_MARKED, this.note.id);
		},
		styleNote(newBgColor) {
			eventBus.$emit(EVENT_NOTE_STYLED, this.note.id, newBgColor);
		},
		cloneNote() {
			eventBus.$emit(EVENT_NOTE_CLONED, this.note.id);
		},
		removeNote() {
			eventBus.$emit(EVENT_NOTE_DELETED, this.note.id);
		},
		capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		getBgColorClass(color) {
			return (this.note.styles.backgroundColor === color) ? 'selected' : '';
		},
	},
	data() {
		return {
			availableColors: [
				{ value: '#ffffff', name: 'white' },
				{ value: '#ff8888', name: 'red' },
				{ value: '#ffcc88', name: 'orange' },
				{ value: '#ffff88', name: 'yellow' },
				{ value: '#ccff99', name: 'green' },
				{ value: '#aaffee', name: 'turquoise' },
				{ value: '#88ddff', name: 'sky' },
				{ value: '#88bbff', name: 'blue' },
				{ value: '#bb88ff', name: 'purple' },
				{ value: '#dddddd', name: 'grey' },
			]
		}
	}
}
