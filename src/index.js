import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Login';
import * as serviceWorker from './serviceWorker';

// Simple login with default property values (in English).
// ReactDOM.render(<Login />, document.getElementById('root'));

// Login component with custom property values (in Dutch).
ReactDOM.render(<Login
  usernameLabel="Gebruikersnaam"
  usernamePlaceholder="bartvanveldhoven"
  passwordLabel="Wachtwoord"
  passwordPlaceholder="Gebl33kteAmandel"
  loginButtonText="Inloggen"
  stayLoggedLabel="Blijf ingelogd"
  stayLoggedDurationDescription="voor 2 weken"
  forgottenLink="Vergeten wachtwoord?"
  signupLink="Wilt u zich aanmelden voor een account?"
  emailLabel="Uw email"
  emailPlaceholder="bartvv@muziek.nl"
  forgottenButtonText="Wachtwoord reset"
  signupButtonText="Inschrijven"
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
