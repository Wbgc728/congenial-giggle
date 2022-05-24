const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

// GET Wildcard Route for homepage
// Return index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/index.html'))
);

// GET Route for notes page
//return notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);