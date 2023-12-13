
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.text({ type: 'text/plain' }));

app.post('/send', (req, res) => {
  const receivedText = req.body + " received";
  res.send(receivedText);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
