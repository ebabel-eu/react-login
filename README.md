# @thomasamar `<ReactLogin />` component
Reusable generic login, including a password reset and an account signup.
It communicates with any backend web services API asynchronolously.
The styling is functional but minimal, so that it's easy to customize.

## Install
```
npm install @thomasamar/react-login --save
```

## Usage of the Login component
The props you shouldn't leave on their default values, at aminimum, are the API endpoints, since that's how the component will interface with your business logic. Each call is a POST.

```
import ReactLogin from '@thomasamar/react-login';

<ReactLogin
  loginEndpoint="https://address-of-your-api/login"
  forgottenEndpoint="https://address-of-your-api/password"
  signupEndpoint="https://address-of-your-api/signup"
/>
```

All props are optional and have default values you cn overwrite.

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
  afterSignupDisplayLogin={true}
  errorTextColor="#cc0033"
  errorHeaderFontSize="1.75em"
  errorSubHeaderFontSize="1.5em"
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
- Add [redux](https://react-redux.js.org/introduction/quick-start) in demo but keep it optional to handle state with Redux because some users may not opt for Redux. ReactLogin redux support should be optional.
- Setup JSDoc to generate documentation.
- Add Jest unit tests.
- Add test coverage reporting (istanbul?).
- To take the demo API further: send an e-mail with a link that will modify the password, and send an e-mail to enable the account that has been created then use that `enabled` flag to allow or reject logging in.
- New screen: when password is reset, a special link is e-mailed, which gets user to a password update screen (new password, twice). Integrate all this in the demo, I don't think the emailing itself is within the scope of the component, not is the link but he component needs a hook to jump directly to showing the password reset screen.
- Replace DOM validation with React-only validation. Prevent submitting login form when user puts in just spaces in username and password.
- Switch the Please wait text to Operation completed + remove spinner, and make all that optional.
- Proofread the Dutch text in demo index.js and README.md
- Make the Login component style dynamic with properties and delete Login.css
- Prevent double clicking on submit button based on Ajax async process.
- Make the input field [validation messages customizable](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).
- Move all components of Login into separate repositories.
- Adapt this React.js code to also work natively in mobiles with React Native, but also take a look at [Flutter](https://flutter.dev/docs/get-started/flutter-for/react-native-devs)
- Make sure the component is offline-friendly in the demo. Not sure the offline setup scope is entirely inside the component or actually the responsibility of the component itself, but if the demo works offline, so should the component.
- Look into a validation method that doesn't talk to the DOM directly but relies entirely on React.
- Use webpack to create 2 versions of react-login.js: one that is for importing into ES6 modules, and one that can be used directly as-is in a browser, without any module import.
- Treeshake react-login.js so it's smaller than 34k and only contains code that's really needed.
- Look at this [cool react-login](https://www.npmjs.com/package/react-modal-login) component for inspiration.
- Also look at this article about [React forms](https://medium.com/@rossbulat/an-introduction-to-using-form-elements-in-react-3778042ff334)
- Add an animated gif (or better, a youtube video?) to show how ReactLogin works.
- Make the usage of the API default [http verbs more RESTfull](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

## `npm run build`
Builds the component, so it can be used in other applications as a front-end node module for browsers.

## Attributions
- CSS only [spinner](http://tobiasahlin.com/spinkit/)
