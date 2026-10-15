const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors')

const app = express();

const port = 3000;

// MySQL kapcsolat
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'milliomos13A'
});
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Hello World végpont
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Lekérés
app.get('/tipus', async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM tipus`);

        if (result.length === 0) {
            return res.status(400).json({
                error: 'Nem található'
            });
        }

        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});
app.get('/kerdes', async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM kerdes`);

        if (result.length === 0) {
            return res.status(400).json({
                error: 'Nem található'
            });
        }

        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});




// Szerver indítása
app.listen(port, () => {
    console.log(`Szerver fut: http://localhost:${port}`);
});