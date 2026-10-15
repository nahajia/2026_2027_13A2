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
//post kerdes tipus id alapján
app.post('/kerdesTipus', async (req, res) => {
    const {szam}=req.body
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM kerdes
            where kerdes_tipus_id=?
            `,[szam]);

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
//POST keres, kerdes szovegeben
app.post('/kerdesKeres', async (req, res) => {
    const {szoveg}=req.body
    try {
        const [result] = await pool.query(`
            SELECT * 
            FROM kerdes
            where kerdes_szoveg like ?
            `,[`%${szoveg}%`]);

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
//post felvitel, tipus
app.post('/bevitelTipus', async (req, res) => {
    const {tipus_nev}=req.body
    try {
        const [result] = await pool.query(`
            insert into tipus values (null,?)
            `,[tipus_nev]);


        res.status(200).json({message:"Sikeres felvitel"});

    } catch (err) {
        res.status(500).json({
            error: 'Adatbázis hiba',
            err
        });
    }
});
//post felvitel, kerdes
app.post('/bevitelKerdes', async (req, res) => {
    const {kerdes_szoveg,kerdes_jo,kerdes_rossz1,kerdes_rossz2,kerdes_rossz3,kerdes_tipus_id}=req.body
    try {
        const [result] = await pool.query(`
            insert into kerdes values (null,?,?,?,?,?,?)
            `,[kerdes_szoveg,kerdes_jo,kerdes_rossz1,kerdes_rossz2,kerdes_rossz3,kerdes_tipus_id]);


        res.status(200).json({message:"Sikeres felvitel"});

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