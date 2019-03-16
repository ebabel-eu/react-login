# @thomasamar `<ReactLogin />` component
Reusable generic Reactlogin, including a password reset and an account signup.
It communicates with any backend web services API asynchronolously.
The styling is functional but minimal, so that it's easy to customize.

## Usage

### Install
```
npm install @thomasamar/react-login --save
```

### Use the ReactLogin component
The props you shouldn't leave on their default values, at aminimum, are the API endpoints, since that's how the component will interface with your business logic. Each call is a POST.

```
import ReactLogin from '@thomasamar/react-login';

<ReactLogin
  loginEndpoint="https://address-of-your-api/login"
  forgottenEndpoint="https://address-of-your-api/password"
  signupEndpoint="https://address-of-your-api/signup"
/>
```

All props are optional and have default values you can overwrite.

```
import ReactLogin from '@thomasamar/react-login';

<ReactLogin
  loginEndpoint="https://address-of-your-api/login"
  forgottenEndpoint="https://address-of-your-api/password"
  signupEndpoint="https://address-of-your-api/signup"

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
  errorLoginFailed="Aanmelden mislukt"
  errorResetFailed="Wachtwoord resetten mislukt"
  errorSignupFailed="Registratie mislukt"
/>
```

If you want to display your own custom components when the password reset or the signup are successfully handled by your own API, I recommend setting these properties to `{false}`: ***afterResetDisplayLogin*** and ***afterSignupDisplayLogin***

```
import ReactLogin from '@thomasamar/react-login';

<ReactLogin
  loginEndpoint="https://address-of-your-api/login"
  forgottenEndpoint="https://address-of-your-api/password"
  signupEndpoint="https://address-of-your-api/signup"

  afterResetDisplayLogin={false}
  afterSignupDisplayLogin={false}
/>
```

### Successful login event
When the login is successful, a custom event `login-successful` will be dispatched.

The detail property of that event contains the response of the web API endpoint that performed the login.

Any other code outside the scope of this component can listen for that custom event and receive the response data.

### Successful password reset event
When the Ajax call to the password reset endpoint is successful, a custom event `forgotten-successful` will be dispatched.

The detail property of that event contains the response of the web API endpoint that performed the password reset.

Any code outside the scope of this login component can listen for that event and decide what do to next.

The property afterResetDisplayLogin is set to false by default. If it is set to true, the event `forgotten-successful` will still be dispatched, and the login screen will be displayed.

### Successful signup event
When the Ajax call to the signup endpoint is successful, a custom event `signup-successful` will be dispatched.

The detail property of that event contains the response of the web API endpoint that performed the signup.

Any code outside the scope of this login component can listen for that event and decide what do to next.

The property afterSignupDisplayLogin is set to false by default. If it is set to true, the event `signup-successful` will still be dispatched, and the login screen will be displayed.

## Contributing
You are most welcome to [contribute to `<ReactLogin />`](CONTRIBUTING.md).

## Attributions
- CSS only [spinner](http://tobiasahlin.com/spinkit/)
