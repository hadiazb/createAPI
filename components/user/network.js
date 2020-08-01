const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req, res) => {
	controller
		.addUser(req.body.name)
		.then((data) => {
			response.success(req, res, data, 201);
		})
		.catch((error) =>
			response.error(req, res, 'Unexpected Error', 500, error)
		);
});

router.get('/', (req, res) => {
	controller
		.listUsers()
		.then((users) => {
			response.success(req, res, users, 200);
		})
		.catch((e) => {
			response.error(req, res, 'Unexpected Error', 500, e);
		});
});

module.exports = router;
