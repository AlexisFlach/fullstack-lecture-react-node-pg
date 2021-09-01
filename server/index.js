const express = require('express');
const app = express();
const cors = require('cors')
const pool = require("./db");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/api/colors', async (req, res) => {
  try {
    const colors = await pool.query("SELECT color_name FROM color");
    res.send(colors.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(4000, () => {
  console.log('server listen on port: 4000');
})