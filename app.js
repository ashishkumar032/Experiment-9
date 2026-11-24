const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from a Dockerized Node.js app!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
