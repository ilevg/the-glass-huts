const express = require('express')
const cors = require('cors');
const { Pool } = require('pg')
require('dotenv').config()

const app = express()
app.use(express.json());
app.use(cors());

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
    },
})
app.get("/", (req, res) => {
    res.send("API is running!");
});

app.get('/api/dates', async (req, res) => {
    try {
        const result = await pool.query('SELECT check_in, check_out FROM huts_orders')
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error db connections' })
    }
})

app.post('/api/dates', async (req, res) => {
    try {
        const { check_in, check_out, guests, options, total, first_name, last_name, email, phone } = req.body

        const query = `
            INSERT INTO huts_orders (
                check_in, check_out, guests, options, total, first_name, last_name, email, phone, created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
            RETURNING *;
        `

        const values = [check_in, check_out, guests, options, total, first_name, last_name, email, phone];
        const result = await pool.query(query, values);

        res.status(201).json(result.rows[0])
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error creating order' })
    }
});


module.exports = app