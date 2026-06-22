// server.js
const express = require('express');
const app = express();
const port = 3000;

const courtService = require('./courtService');
const propertyService = require('./propertyService');
const businessService = require('./businessService');
const inmateService = require('./inmateService');
const sexOffenderService = require('./sexOffenderService');

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: "Backend is running" });
});

// Main search route
app.post('/search', async (req, res) => {
  const { name, state } = req.body;

  try {
    const results = {
      courts: await courtService.lookup(name, state),
      properties: await propertyService.lookup(name, state),
      businesses: await businessService.lookup(name, state),
      inmates: await inmateService.lookup(name, state),
      offenders: await sexOffenderService.lookup(name, state)
    };

    res.json({ success: true, results });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});