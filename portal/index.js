const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const port = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('database.db');

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS form_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT,
    age TEXT,
    dateOfBirth TEXT,
    idNumber TEXT,
    fathersName TEXT,
    placeOfBirth TEXT,
    phoneNumber TEXT,
    address TEXT,
    emailAddress TEXT,
    workExperience TEXT,
    desiredWorkTitle TEXT,
    heardAboutUsFrom TEXT
  )
`;

db.run(createTableQuery, (err) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully!');
  }
});

app.get('/', (req, res) => {
  const query = 'SELECT * FROM form_data'; // Replace with your actual query

  db.all(query, (err, rows) => {
    if (err) {
      console.error('Error fetching data from the database:', err);
      res.status(500).send('Error retrieving data!');
    } else {
      res.json(rows);
    }
  });
});

app.post('/save', (req, res) => {
  const {
    firstName,
    lastName,
    age,
    dateOfBirth,
    idNumber,
    fathersName,
    placeOfBirth,
    phoneNumber,
    address,
    emailAddress,
    workExperience,
    desiredWorkTitle,
    heardAboutUsFrom,
  } = req.body;

  const insertQuery = `
    INSERT INTO form_data (
      firstName,
      lastName,
      age,
      dateOfBirth,
      idNumber,
      fathersName,
      placeOfBirth,
      phoneNumber,
      address,
      emailAddress,
      workExperience,
      desiredWorkTitle,
      heardAboutUsFrom ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    insertQuery,
    [
      firstName,
      lastName,
      age,
      dateOfBirth,
      idNumber,
      fathersName,
      placeOfBirth,
      phoneNumber,
      address,
      emailAddress,
      workExperience,
      desiredWorkTitle,
      heardAboutUsFrom,
    ],
    (err) => {
      if (err) {
        console.error('Error saving data:', err);
        res.status(500).json({ message: 'Error saving data!' });
      } else {
        res.status(201).json({ message: 'Data saved successfully!' });
      }
    }
  );
});

app.get('/showAll', (req, res) => {
  const query = 'SELECT * FROM form_data'; // Replace with your actual query

  db.all(query, (err, rows) => {
    if (err) {
      console.error('Error fetching data from the database:', err);
      res.status(500).send('Error retrieving data!');
    } else {
      res.json(rows);
    }
  });
});

app.post('/delete', (req, res) => {
  const query = 'DELETE FROM form_data WHERE id=?';
  const { id } = req.body;

  db.run(query, [id], (err) => {
    if (err) {
      console.error('Error deleting data:', err);
      res.status(500).json({ message: 'Error deleting data!' });
    } else {
      res.status(201).json({ message: 'Data deleted successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
