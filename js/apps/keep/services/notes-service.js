var notes = [
	{
		id: 'K3wOw44gf5E3oqpAxRQn',
		noteType: 'image',
		data: { src: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif' },
		isSticky: true,
	},
	{
		id: 'Z2dXF5UIO2anC2N3XUGy',
		noteType: 'video',
		data: { src: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4' },
		isSticky: false,
	},
	{
		id: 'MpBwL72DculXttx6Lzts',
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		isSticky: false,
	},
	{
		id: 'vFlzFZTyPIjatpioucCY',
		noteType: 'image',
		data: { src: 'http://placehold.it/400x300?text=Image' },
		isSticky: true,
	},
	{
		id: 'rqyLwc10Xm7o4b09fnvj',
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
		isSticky: false,
	},
	{
		id: 'hN8sERkyRAVHNjoFrVVq',
		noteType: 'text',
		data: { text: 'Another lorem ipsum dolor, consectetur adipiscing elit' },
		isSticky: false,
	},
	{
		id: 'r1DTCAPr9Fz02p8lOtEZ',
		noteType: 'text',
		data: { text: 'Blah blah blah ...' },
		isSticky: false,
	},
	{
		id: 'UuYKcLiW81IQ4ZXdZjz2',
		noteType: 'video',
		data: { src: 'http://techslides.com/demos/sample-videos/small.mp4' },
		isSticky: false,
	},
	{
		id: 'mAYTH31FGzRV6k2a5yHV',
		noteType: 'audio',
		data: { src: 'http://cld2099web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3' },
		isSticky: false,
	},
	{
		id: 'pS6LPa5KIxoGZwHMqWMT',
		noteType: 'image',
		data: { src: 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif' },
		isSticky: true,
	},
	{
		id: 'Nb8494nM8A5wUXI0o8VN',
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
		isSticky: false,
	},
	{
		id: 'yp5jhbQBhWbCC24iODcA',
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
		var noteIdx = notes.findIndex(note => note.id === id);
		notes.splice(noteIdx, 1);
		resolve();
	});
}

function cloneNote(id) {
	let oldNoteIdx = notes.findIndex(note => note.id === id);
	return getNoteById(id)
		.then(newNote => notes.splice(oldNoteIdx, 0, newNote));

}

function saveNote(note, data) {
	if (note.id) {
		var noteIdx = notes.findIndex(currNote => currNote.id === note.id);
		notes.splice(noteIdx, 1, note)
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
