# @thomasamar `<ReactLogin />` component
Reusable generic login, including a password reset and an account signup.
It communicates with any backend web services API asynchronolously.
The styling is functional but minimal, so that it's easy to customize.

## Install
```
npm install @thomasamar/react-login --save
```

## Usage of the Login component
```
import ReactLogin from '@thomasamar/react-login';

<ReactLogin />
```

or (all props are optional and have default values)

```
import ReactLogin from '@thomasamar/react-login';

<ReactLogin
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

/>
```

## Successful login event
When the login is successful, a custom event `login-successful` will be dispatched.

The detail property of that event contains the response of the web API endpoint that performed the login.

Any other code outside the scope of this component can listen for that custom event and receive the response data.

## Successful password reset event
When the Ajax call to the password reset endpoint is successful, a custom event `forgotten-successful` will be dispatched.

The detail property of that event contains the response of the web API endpoint that performed the password reset.

Any code outside the scope of this login component can listen for that event and decide what do to next.

The property afterResetDisplayLogin is set to false by default. If it is set to true, the event `forgotten-successful` will still be dispatched, and the login screen will be displayed.

## Successful signup event
When the Ajax call to the signup endpoint is successful, a custom event `signup-successful` will be dispatched.

The detail property of that event contains the response of the web API endpoint that performed the signup.

Any code outside the scope of this login component can listen for that event and decide what do to next.

The property afterSignupDisplayLogin is set to false by default. If it is set to true, the event `signup-successful` will still be dispatched, and the login screen will be displayed.

## todo tasks
- Make a demo that works on its own, from this repository with a small Node express.js that serves both the static client and a simple API that stores data in memory.
- Refactor: use destructuring, make Login.js smaller, remove all IDs and only use className at most, make one input component for text, password and email (pass type as a property). Trim the input.
- Replace DOM validation with React-only validation. Prevent submitting login form when user puts in just spaces in username and password.
- Switch the Please wait text to Operation completed + remove spinner, and make all that optional.
- Proofread the Dutch text in demo index.js and README.md
- Make the Login component style dynamic with properties and delete Login.css
- Prevent double clicking on submit button based on Ajax async process.
- Make the input field [validation messages customizable](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).
- Move all components of Login into separate repositories.
- Adapt this React.js code to also work natively in mobiles with React Native, but also take a look at [Flutter](https://flutter.dev/docs/get-started/flutter-for/react-native-devs)
- Add more Jest unit tests.
- Make sure the component is offline-friendly in the demo. Not sure the offline setup scope is entirely inside the component or actually the responsibility of the component itself, but if the demo works offline, so should the component.
- Look into a validation method that doesn't talk to the DOM directly but relies entirely on React.
- Setup JSDoc to generate documentation.
- Use webpack to create 2 versions of react-login.js: one that is for importing into ES6 modules, and one that can be used directly as-is in a browser, without any module import.
- Treeshake react-login.js so it's smaller than 34k and only contains code that's really needed.
- Look at this [cool react-login](https://www.npmjs.com/package/react-modal-login) component for inspiration.
- Also look at this article about [React forms](https://medium.com/@rossbulat/an-introduction-to-using-form-elements-in-react-3778042ff334)

## `npm run build`
Builds the component, so it can be used in other applications as a front-end node module for browsers.

## Attributions
- CSS only [spinner](http://tobiasahlin.com/spinkit/)
