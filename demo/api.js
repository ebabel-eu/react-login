const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
const port = 3000;

const users = [];
const log = [];

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  RUNTIME_ERROR: 500,
};

app.use(express.static('demo'));
app.use(bodyParser.json());

// Document how to use the demo API endpoint and list all users in memory.
app.get('/api', (req, res) => res.send({
  login: {
    description: 'Login with username and password to obtain an authenticationToken.',
    endpoint: '/api/login',
    method: 'POST',
    payload: 'JSON { username: string, password: string, stayLogged: boolean, stayLoggedDuration: number?, stayLoggedUnit: string? }',
  },
  password: '/api/password',
  signup: '/api/signup',
  users: users.map(u => { return { username: u.username, password: 'not-available', email: u.email } }), // Hide passwords.
  log,
}));

app.post('/api/login', (req, res) => {
  const { username, password, stayLogged, stayLoggedDuration, stayLoggedUnit } = req.body;

  res.setHeader('Content-Type', 'application/json');

  // Check if the user exists.
  const loginSuccessful = users.map(u => u.username === username && u.password === password).length !== 0;

  // Login has failed.
  if (!loginSuccessful) {
    log.push({
      username, loginSuccessful,
      loggedDate: new Date().toLocaleString('nl'),
    });

    res.status(HTTP_STATUS.UNAUTHORIZED);
    res.send({
      actions: ['log-entry-created'],
      loginSuccessful,
    });

    return;
  }

  // Login is successful.
  const authenticationToken = crypto.randomBytes(16).toString("hex"); 
  log.push({
    username, loginSuccessful, authenticationToken,
    loggedDate: new Date().toLocaleString('nl'),
    stayLogged, stayLoggedDuration, stayLoggedUnit,
  });

  res.status(HTTP_STATUS.OK);
  res.send({
    actions: ['log-entry-created'],
    loginSuccessful,
    authenticationToken,
  });
});

app.post('/api/password', (req, res) => {
  const { email } = req.body;

  log.push({
    email, passwordReset: true,
    resetDate: new Date().toLocaleString('nl'),
  });
  
  res.setHeader('Content-Type', 'application/json');
  res.status(HTTP_STATUS.OK);
  res.send({
    actions: ['link-emailed-to-reset-password', 'log-entry-created'],
  });
});

app.post('/api/signup', (req, res) => {
  const { username, password, email } = req.body;

  users.push({ username, password, email });

  res.setHeader('Content-Type', 'application/json');
  res.status(HTTP_STATUS.CREATED);
  res.send({
    actions: ['new-user-created'],
  });
});

app.listen(port, () => console.log(`Demo API and static client listening on http://localhost:${port}`));
