const db = require('mongoose');
const Model = require('./model');
const uri =
	'mongodb+srv://hadiazb:hdrFKDSDNr@cluster0-1mskk.mongodb.net/telegram?retryWrites=true&w=majority';

db.Promise = global.Promise;

db
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('[db] Conectada con éxito'))
	.catch((err) => console.error('[db]', err));

const addMessage = (message) => {
	const myMessage = new Model(message);
	myMessage.save();
};

const getMessage = async (filterUser) => {
	let filter = filterUser
		? { user: new RegExp(filterUser, 'i') }
		: {};
	const messages = await Model.find(filter);
	return messages;
};

const updateText = async (id, message) => {
	const foundMessage = await Model.findOne({
		_id: id,
	});
	foundMessage.message = message;
	const newMessage = await foundMessage.save();
	return newMessage;
};

module.exports = {
	add: addMessage,
	list: getMessage,
	updateText: updateText,
	// get
	// delete
};
