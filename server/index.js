const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/colors', async (req, res) => {
	try {
		const colors = await pool.query('SELECT color_name FROM color');
		res.send(colors.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.post('/api/addcolor', async (req, res) => {
	try {
		const { color } = req.body;
		const newTodo = await pool.query(
			'INSERT INTO color (color_name) VALUES($1) RETURNING *',
			[color]
		);

		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(4000, () => {
	console.log('server listen on port: 4000');
});
