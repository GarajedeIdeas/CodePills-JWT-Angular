const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./config/db');

const app = express();

// Config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET /api/songs
// GET /api/songs/SONGID
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})