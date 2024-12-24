const express = require('express')
const { Pool } = require('pg')
require('dotenv').config()

const app = express()

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
    },
})

app.get('/api/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM huts_orders')
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error db connecting' })
    }
})

module.exports = app