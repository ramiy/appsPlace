import utilsService from '../../../services/utils-service.js';

var notes = [
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'image',
			pinned: false,
			marked: true,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			src: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			text: 'How many programmers does it take to screw in a light bulb? None, it\'s a hardware problem.'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'image',
			pinned: false,
			marked: true,
		},
		styles: {
			backgroundColor: '#ffff88',
		},
		data: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			text: 'What is a programmer\'s favorite hangout place? Foo bar...'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'video',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			src: 'https://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			text: 'Definition, Algorithm: Word used by programmers when they do not want to explain what they did.'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'image',
			pinned: false,
			marked: true,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			src: 'https://placehold.it/400x300?text=Image'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#ffcc88',
		},
		data: {
			text: 'What is the object-oriented way to become wealthy? Inheritance...'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'video',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			src: 'http://techslides.com/demos/sample-videos/small.mp4'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: true,
			marked: false,
		},
		styles: {
			backgroundColor: '#ffff88',
		},
		data: {
			text: 'Real programmers count from 0.'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'audio',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#dddddd',
		},
		data: {
			src: 'https://cld2099web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'image',
			pinned: false,
			marked: true,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			src: 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			text: 'A SQL query goes into a bar, walks to tables and asks: "Can I join you?"'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'list',
			pinned: false,
			marked: true,
		},
		styles: {
			backgroundColor: '#ccff99',
		},
		data: {
			list: [
				{ text: 'eat()', completed: false },
				{ text: 'sleep()', completed: true },
				{ text: 'code()', completed: false },
				{ text: 'repeat()', completed: false },
			]
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '#fffff',
		},
		data: {
			text: 'There are only 10 types of people in the world: Those that understand binary and those that don\'t.'
		},
	},
];

function emptyNote() {
	return {
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
		},
		styles: {
			backgroundColor: '',
		},
		data: {},
	};
}

function query() {
	return Promise.resolve(notes);
}

function getNoteById(id) {
	let note = notes.find(note => note.id === id);
	return Promise.resolve(note);
}

function removeNote(id) {
	return new Promise((resolve, reject) => {
		let noteIdx = notes.findIndex(note => note.id === id);
		notes.splice(noteIdx, 1);
		resolve();
	});
}

function cloneNote(id) {
	return getNoteById(id)
		.then(note => {
			let oldNoteIdx = notes.findIndex(note => note.id === id);
			let newNote = JSON.parse(JSON.stringify(note));
			newNote.id = utilsService.makeId();
			notes.splice(oldNoteIdx, 0, newNote)
		});
}

function saveNote(note, data) {
	if (!note) Promise.reject();

	switch (note.settings.noteType) {
		case 'text':
			note.data.text = data;
			break;
		case 'image':
		case 'video':
		case 'audio':
			note.data.src = data;
			break;
		case 'list':
			let listArr = data.split(',');
			note.data.list = listArr.map(item => {
				return { text: item, completed: false };
			});
			break;
		// default:
		// 	return Promise.reject();
	}

	if (note.id) {
		let noteIdx = notes.findIndex(currNote => currNote.id === note.id);
		notes.splice(noteIdx, 1, note);
	} else {
		note.id = utilsService.makeId();
		notes.unshift(note);
	}
	return Promise.resolve(note);
}

function pinNote(id) {
	return getNoteById(id)
		.then(note => note.settings.pinned = !note.settings.pinned);
}

function markNote(id) {
	return getNoteById(id)
		.then(note => note.settings.marked = !note.settings.marked);
}

function styleNote(id, bgColor) {
	return getNoteById(id)
		.then(note => note.styles.backgroundColor = bgColor);
}

function updateListNoteStatus(id, listIdx) {
	return getNoteById(id)
		.then(note => note.data.list[listIdx].completed = !note.data.list[listIdx].completed);
}

export default {
	emptyNote,
	query,
	getNoteById,
	removeNote,
	cloneNote,
	saveNote,
	pinNote,
	markNote,
	styleNote,
	updateListNoteStatus,
}
