function saveToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
	return JSON.parse(localStorage.getItem(key))
}

function makeId(length = 20) {
	let text = "";
	let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export default {
	loadFromStorage,
	saveToStorage,
	makeId,
	getRandomColor
}
