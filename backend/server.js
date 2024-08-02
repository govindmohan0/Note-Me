// Load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const PDF = require('./models/pdfModel');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});
const upload = multer({ storage: storage });

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log(`Connected to MongoDB at ${process.env.MONGODB_URI}`);
});

// File upload endpoint
app.post('/api/upload', upload.single('pdf'), async (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(400).send('No file uploaded.');
    return;
  }

  // Save file details to MongoDB
  const newPDF = new PDF({
    filename: file.filename,
    originalName: file.originalname,
    // Add additional metadata here
  });

  try {
    const savedPDF = await newPDF.save();
    res.send(savedPDF);
  } catch (err) {
    res.status(500).send('Error saving PDF metadata.');
  }
});

//starting the server point
app.get('/', (req, res) => {
    res.send('Welcome to the PDF Service API');
  });

// Fetch all PDFs endpoint
app.get('/api/pdfs', async (req, res) => {
  try {
    const pdfs = await PDF.find({});
    res.json(pdfs);
  } catch (err) {
    res.status(500).send('Error fetching PDFs.');
  }
});



// Fetch single PDF endpoint
app.get('/api/pdf/:id', async (req, res) => {
  try {
    const pdf = await PDF.findById(req.params.id);
    if (!pdf) {
      res.status(404).send('PDF not found.');
      return;
    }
    res.sendFile(path.join(__dirname, 'uploads', pdf.filename));
  } catch (err) {
    res.status(500).send('Error fetching PDF.');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
