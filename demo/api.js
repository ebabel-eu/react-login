const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
const port = 8080;

const users = [];
const log = [];

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  RUNTIME_ERROR: 500,
};

const { version } = require('../package.json');

app.use(express.static('demo'));
app.use(bodyParser.json());

// Document how to use the demo API endpoint and list all users in memory.
app.get('/api', (req, res) => res.send({
  version,
  login: {
    description: 'Login with username and password to obtain an authenticationToken.',
    url: '/api/login',
    method: 'POST',
    payload: {
      username: 'string', password: 'string', stayLogged: 'boolean',
      stayLoggedDuration: 'number?', stayLoggedUnit: 'string?', // number? and string? mean these fields are optional.
    },
  },
  password: {
    description: 'Reset the password of an existing user based on supplied e-mail.',
    url: '/api/password',
    method: 'POST',
    payload: { email: 'string' },
  },
  signup: {
    description: 'Create a new account that will be able to login.',
    url: '/api/signup',
    method: 'POST',
    payload: { username: 'string', password: 'string', email: 'string' },
  },
  users: users.map(u => {
    return { username: u.username, password: '######', email: u.email }
  }), // Hide passwords.
  log,
}));

app.post('/api/login', (req, res) => {
  const { username, password, stayLogged, stayLoggedDuration, stayLoggedUnit } = req.body;

  res.setHeader('Content-Type', 'application/json');

  // Check if the user exists.
  const loginSuccessful = users.filter(u => u.username === username && u.password === password).length !== 0;

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

  res.setHeader('Content-Type', 'application/json');

  // Check if the e-mail is registered to an existing user.
  const passwordReset = users.filter(u => u.email === email).length !== 0;

  log.push({
    email,
    passwordReset,
    resetDate: (passwordReset) ? new Date().toLocaleString('nl') : undefined,
  });

  // Password reset will not happen because the e-mail could not be found.
  if (!passwordReset) {
    res.status(HTTP_STATUS.NOT_FOUND);
    res.send({
      actions: ['log-entry-created'],
      passwordReset,
    });

    return;
  }

  // Password reset can go ahead since e-mail has been found.
  res.status(HTTP_STATUS.OK);
  res.send({
    actions: ['link-emailed-to-reset-password', 'log-entry-created'],
    passwordReset,
  });
});

app.post('/api/signup', (req, res) => {
  const { username, password, email } = req.body;

  res.setHeader('Content-Type', 'application/json');

  // Check the account doesn't already exist.
  const accountCreated = users.filter(u => u.username === username || u.email === email).length === 0;

  // The user can be created.
  if (accountCreated) {
    users.push({ username, password, email });

    res.status(HTTP_STATUS.CREATED);
    res.send({
      actions: ['new-user-created'],
      accountCreated,
    });

    return;
  }

  // The user cannot be created.
  res.status(HTTP_STATUS.UNAUTHORIZED);
  res.send({
    accountCreated,
  });
});

app.listen(port, () => console.log(`Demo API and static client listening on http://localhost:${port}`));
