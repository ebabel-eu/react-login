const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('demo'));

// Document how to use the demo API endpoints.
app.get('/api', (req, res) => res.send({
  login: '/api/login',
  password: '/api/password',
  signup: '/api/signup',
}));

app.post('/api/login', (req, res) => res.send({

}));

app.post('/api/password', (req, res) => res.send({

}));

app.post('/api/signup', (req, res) => res.send({

}));

app.listen(port, () => console.log(`Demo API and static client listening on http://localhost:${port}`));
