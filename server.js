import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.join(__dirname, 'data', 'contacts.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.get('/api/contacts', (req, res) => {
  if (!fs.existsSync(dataFile)) {
    return res.json([]);
  }

  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ message: 'Unable to read contacts data' });
  }
});

app.post('/api/contacts', (req, res) => {
  const { firstName, lastName, email, message, permission } = req.body;

  if (!firstName || !lastName || !email || !message || !permission) {
    return res.status(400).json({ message: 'Please fill all required fields and allow contact permission.' });
  }

  const newContact = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    message,
    permission,
    submittedAt: new Date().toISOString()
  };

  let contacts = [];
  if (fs.existsSync(dataFile)) {
    try {
      contacts = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    } catch {
      contacts = [];
    }
  }

  contacts.push(newContact);
  fs.writeFileSync(dataFile, JSON.stringify(contacts, null, 2));

  res.status(201).json({ message: 'Contact saved successfully', contact: newContact });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
