const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const uri =
	'mongodb+srv://hadiazb:hdrFKDSDNr@cluster0-1mskk.mongodb.net/telegram?retryWrites=true&w=majority';
db(uri)

const app = express();
const router = require('./network/routes');

app.use(bodyParser.json());

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log(
	'La aplicación esta escuchando en http://localhost:3000'
);
