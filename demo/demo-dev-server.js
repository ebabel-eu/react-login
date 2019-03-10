const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('demo'));

app.get('/api', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Demo API and static client listening on http://localhost:${port}`));
