const express = require('express');
const inquirer = require('inquirer');
const app = express();
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const pool = new Pool(
{

     user: 'postgres',

    password: 'S1mbaPr1de!',
    host: 'localhost',
   database: 'movies_db'

},
console.log('Connected to the database.')
)

pool.connect();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});