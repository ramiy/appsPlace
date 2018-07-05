var notes = [
	{
		noteType: 'image',
		data: { src: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif' },
		isSticky: true,
	},
	{
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
		isSticky: false,
	},
	{
		noteType: 'image',
		data: { src: 'http://placehold.it/300x400?text=Image' },
		isSticky: true,
	},
	{
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
		isSticky: false,
	},
	{
		noteType: 'text',
		data: { text: 'Another lorem ipsum dolor, consectetur adipiscing elit' },
		isSticky: false,
	},
	{
		noteType: 'text',
		data: { text: 'Blah blah blah ...' },
		isSticky: false,
	},
	{
		noteType: 'video',
		data: { src: 'http://techslides.com/demos/sample-videos/small.mp4' },
		isSticky: false,
	},
	{
		noteType: 'audio',
		data: { src: 'http://cld2099web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3' },
		isSticky: false,
	},
	{
		noteType: 'image',
		data: { src: 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif' },
		isSticky: true,
	},
	{
		noteType: 'text',
		data: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
		isSticky: false,
	},
	{
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

function saveNote(note) {
	if (note.id) {
		var noteIdx = notes.findIndex(currnote => currnote.id === note.id);
		notes.splice(noteIdx, 1, note)
	} else {
		note.id = makeId();
		notes.push(note);
	}
	return Promise.resolve(note);
}

export default {
	emptyNote,
	query,
	getNoteById,
	removeNote,
	saveNote,
}
