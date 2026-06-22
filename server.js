const express = require('express');
const app = express();
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
app.get('/court', (req, res) => {
  res.json({
    type: "court",
    message: "Court records endpoint is working"
  });
});// Property endpoint
app.get('/property', (req, res) => {
  res.json({
    type: "property",
    message: "Property records endpoint is working"
  });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});     
