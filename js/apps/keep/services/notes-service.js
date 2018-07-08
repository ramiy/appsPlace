import utilsService from '../../../services/utils-service.js';

const STORAGE_KEY = 'notesApp';

var notes = [
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'image',
			pinned: false,
			marked: true,
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
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
			editMode: false,
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
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
			editMode: false,
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
		},
		data: {
			src: 'http://techslides.com/demos/sample-videos/small.mp4'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
			editMode: false,
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
			editMode: false,
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
		},
		data: {
			text: 'QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
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
			editMode: false,
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
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
		},
		data: {
			text: 'There are only 10 types of people in the world: Those that understand binary and those that don\'t.'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'image',
			pinned: false,
			marked: true,
			editMode: false,
		},
		styles: {
			backgroundColor: '#ddbbff',
		},
		data: {
			src: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8b82dbd7fe9677e9218686a427ea6d7&auto=format&fit=crop&w=1350&q=80'
		},
	},
	{
		id: utilsService.makeId(),
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
			editMode: false,
		},
		styles: {
			backgroundColor: '#ffffff',
		},
		data: {
			text: 'Programming is like sex, one mistake and you have to support it for the rest of your life.'
		},
	},
];

(function () {
	var temp = utilsService.loadFromStorage(STORAGE_KEY);
	if (temp) notes = temp;
	else saveNotesToStorage();
})();

function saveNotesToStorage() {
	utilsService.saveToStorage(STORAGE_KEY, notes);
}

function emptyNote() {
	return {
		settings: {
			noteType: 'text',
			pinned: false,
			marked: false,
			editMode: false,
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
		saveNotesToStorage();
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
			saveNotesToStorage();
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

	// Save data
	if (note.id) {
		// Update existing note
		let noteIdx = notes.findIndex(currNote => currNote.id === note.id);
		notes.splice(noteIdx, 1, note);
	} else {
		// Add new note
		note.id = utilsService.makeId();
		notes.unshift(note);
	}

	saveNotesToStorage();
	return Promise.resolve(note);
}

function pinNote(id) {
	return getNoteById(id)
		.then(note => {
			note.settings.pinned = !note.settings.pinned;
			saveNotesToStorage();
		});
}

function markNote(id) {
	return getNoteById(id)
		.then(note => {
			note.settings.marked = !note.settings.marked;
			saveNotesToStorage();
		});
}

function styleNote(id, bgColor) {
	return getNoteById(id)
		.then(note => {
			note.styles.backgroundColor = bgColor;
			saveNotesToStorage();
		});
}

function editNote(id) {
	return getNoteById(id)
		.then(note => {
			note.settings.editMode = !note.settings.editMode;
			saveNotesToStorage();
		});
}

function updateListNoteStatus(id, listIdx) {
	return getNoteById(id)
		.then(note => {
			note.data.list[listIdx].completed = !note.data.list[listIdx].completed;
			saveNotesToStorage();
		});
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
	editNote,
	updateListNoteStatus,
}
