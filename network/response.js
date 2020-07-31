exports.success = (req, res, message, status) => {
	res.status(status || 200).send({
		error: '',
		body: message,
		status: status || 200,
	});
};

exports.error = (req, res, message, status, details) => {
  console.error(details);
  res.status(status || 500).send({
		error: message,
		body: '',
		status: status || 200,
	});
};
