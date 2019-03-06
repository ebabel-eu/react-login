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
  loginButtonText="Aanmelden"
  stayLoggedLabel="Blijf ingelogd"
  stayLoggedDurationDescription="voor 2 weken"
  loginLink="Aanmelden"
  forgottenLink="Vergeten wachtwoord?"
  signupLink="Wilt u zich aanmelden voor een account?"
  loginHash="aanmelden"
  forgottenHash="reset-wachtwoord"
  signupHash="nieuw-account-maken"
  emailLabel="Uw email"
  emailPlaceholder="bartvv@muziek.nl"
  forgottenButtonText="Wachtwoord reset"
  signupButtonText="Inschrijven"
  pleaseWait="Wachten, alstublieft..."
  emailPolicy="Uw e-mail is nodig in de geval uw vergeet uw wachtwoord en wil het reset. Uw e-mail word niet voor iets ander gebruikt."
  errorHelpText="Wat wilt u anders doen?"
  afterResetDisplayLogin={true}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
