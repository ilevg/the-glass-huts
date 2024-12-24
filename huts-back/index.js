const express = require('express')
const { Pool } = require('pg')
require('dotenv').config()

const app = express()
const port = 3000;

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
    },
})

app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM your_table_name')
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка подключения к базе данных' })
    }
})

module.exports = app