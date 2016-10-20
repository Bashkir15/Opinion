class Storage {
	constructor() {
		this.title = 'localStorage';
	}

	get(item) {
		return localStorage.getItem(item);
	}

	set(item, val) {
		return localStorage.setItem(item, val);
	}

	remove(item) {
		return localStorage.removeItem(item);
	}
}

export default Storage