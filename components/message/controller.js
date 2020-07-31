const store = require('./store');

const addMessage = (user, message) => {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			console.error(
				'[messageController] No hay usuario o mensaje'
			);
			reject('Los datos son incorrectos');
			return false;
		}

		const fullMessage = {
			user,
			message,
			date: new Date(),
		};
		store.add(fullMessage);
		resolve(fullMessage);
	});
};

const getMessage = (filterUser) => {
	return new Promise((resolve, reject) => {
		resolve(store.list(filterUser));
	});
};

const updateMessage = (id, message) => {
	return new Promise(async (resolve, reject) => {
		if (!id || !message) {
			reject('Invalid data');
			return false;
		}
		const result = await store.updateText(id, message);
		resolve(result);
	});
};

module.exports = {
	addMessage,
	getMessage,
	updateMessage,
};
