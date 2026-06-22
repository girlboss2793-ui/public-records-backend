const express = require('express');
const app = express();const courtService = require('./courtService');
const propertyService = require('./propertyService');
const businessService = require('./businessService');
const inmateService = require('./inmateService');
const sexOffenderService = require('./sexOffenderService');
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: "Backend is running" });
});

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ status: "OK", time: new Date().toISOString() });
});
// Search endpoint
app.get('/search', (req, res) => {
  const query = req.query.q || "";
  res.json({ message: `You searched for: ${query}` });
});// Court endpoint
// Court endpoint (real service)
app.get('/court', async (req, res) => {
  const name = req.query.name || "";
  const state = req.query.state || "";

  const results = await courtService.lookup(name, state);

  res.json({
    success: true,
    data: results
  });
}); // Property endpoint
app.get('/property', (req, res) => {
  res.json({
    type: "property",
    message: "Property records endpoint is working"
  });
});// Business endpoint
app.get('/business', (req, res) => {
  res.json({
    type: "business",
    message: "Business records endpoint is working"
  });
});// Inmate endpoint
app.get('/inmate', (req, res) => {
  res.json({
    type: "inmate",
    message: "Inmate records endpoint is working"
  });
});// Sex offender endpoint
app.get('/sexoffender', (req, res) => {
  res.json({
    type: "sexoffender",
    message: "Sex offender records endpoint is working"
  });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});     
