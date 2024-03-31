const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded data and serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Helper function to read the notes from 'db.json'
const readNotes = () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Helper function to write the notes to 'db.json'
const writeNotes = (notes) => {
  try {
    fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(notes, null, 2));
  } catch (err) {
    console.error(err);
  }
};

// Route to serve the notes HTML page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// API route to get all saved notes
app.get('/api/notes', (req, res) => {
  res.json(readNotes());
});

// API route to add a new note
app.post('/api/notes', (req, res) => {
  const notes = readNotes();
  const newNote = { ...req.body, id: uuidv4() };
  notes.push(newNote);
  writeNotes(notes);
  res.json(newNote);
});

// Bonus: API route to delete a note by its ID
app.delete('/api/notes/:id', (req, res) => {
  const notes = readNotes();
  const filteredNotes = notes.filter(note => note.id !== req.params.id);
  writeNotes(filteredNotes);
  res.json({ message: 'Note deleted successfully' });
});

// Route to serve the home page (catch-all)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});