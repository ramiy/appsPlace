import utilsService from '../services/notes-service.js';

var notes = [
	{
		id: makeId(),
		noteType: 'image',
		data: { src: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif' },
		isSticky: true,
	},
	{
		id: makeId(),
		noteType: 'video',
		data: { src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4' },
		isSticky: false,
	},
	{
		id: makeId(),
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		isSticky: false,
	},
	{
		id: makeId(),
		noteType: 'image',
		data: { src: 'http://placehold.it/400x300?text=Image' },
		isSticky: true,
	},
	{
		id: makeId(),
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
		isSticky: false,
	},
	{
		id: makeId(),
		noteType: 'text',
		data: { text: 'Another lorem ipsum dolor, consectetur adipiscing elit' },
		isSticky: false,
	},
	{
		id: makeId(),
		noteType: 'text',
		data: { text: 'Blah blah blah ...' },
		isSticky: false,
	},
	{
		id: makeId(),
		noteType: 'video',
		data: { src: 'http://techslides.com/demos/sample-videos/small.mp4' },
		isSticky: false,
	},
	{
		id: makeId(),
		noteType: 'audio',
		data: { src: 'http://cld2099web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3' },
		isSticky: false,
	},
	{
		id: makeId(),
		noteType: 'image',
		data: { src: 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif' },
		isSticky: true,
	},
	{
		id: makeId(),
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
		isSticky: false,
	},
	{
		id: makeId(),
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
		isSticky: false,
	},
];

function emptyNote() {
	return {
		noteType: 'text',
		data: {},
		isSticky: false,
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
			newNote.id = makeId();
			notes.splice(oldNoteIdx, 0, newNote)
		});

}

function saveNote(note, data) {

	switch (note.noteType) {
		case 'text':
			note.data.text = data;
			break;
		case 'image':
		case 'video':
		case 'audio':
			note.data.src = data;
			break;
		// default:
		// 	return Promise.reject();
	}
	console.log('save from notes service...', note);

	if (note.id) {
		let noteIdx = notes.findIndex(currNote => currNote.id === note.id);
		notes.splice(noteIdx, 1, note);
	} else {
		note.id = makeId();
		notes.push(note);
	}
	return Promise.resolve(note);
}

function pinNote(id) {
	return getNoteById(id)
		.then(note => note.isSticky = !note.isSticky)
}


export default {
	emptyNote,
	query,
	getNoteById,
	removeNote,
	cloneNote,
	saveNote,
	pinNote,
}



function makeId(length = 20) {
	let text = "";
	let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}
