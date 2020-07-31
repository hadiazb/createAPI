const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
	const filterMessages = req.query.user || null;
	controller
		.getMessage(filterMessages)
		.then((messageList) => {
			response.success(req, res, messageList, 200);
		})
		.catch((e) =>
			response.error(req, res, 'Unexpected Error', 500, e)
		);
});

router.post('/', (req, res) => {
	controller
		.addMessage(req.body.user, req.body.message)
		.then((fullMessage) => {
			response.success(req, res, fullMessage, 201);
		})
		.catch((e) => {
			response.error(
				req,
				res,
				'Información invalida',
				400,
				'Error en el controlador'
			);
		});
});

router.patch('/:id', (req, res) => {
	console.log(req.params.id);

	controller
		.updateMessage(req.params.id, req.body.message)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((e) => {
			response.error(req, res, 'Error interno', 500, e);
		});

	// res.send('ok');
});

router.delete('/:id', (req, res) => {
	
} )

module.exports = router;
