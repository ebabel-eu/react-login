# `<Login />` component (React.js)
Reusable generic login, including a password reset and an account signup. It communicates with any backend web services API asynchronolously. The styling is functional but minimal, so that it's easy to customize.

## Install
```
npm install
```

## Usage of the Login component
```
import Login from './Login';

<Login />
```

or (all props are optional and have default values)

```
import Login from './Login';

<Login
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
/>
```

## todo tasks

- Add propTypes in each component.
- In Login component, check if the values of the input fields are there in case of an AutoFill when the button state is being changed. If so, that could be a better solution than using the DOM directly to evaluate validity, although it woul mean handling all the validation rules in custom code managed by React.
- Prevent double clicking on submit button based on Axios async process.
- Display loading animation while Axios async process is ongoing.
- After Forgotten Password and Signup, show a screen to inform user the action was (or wasn't) successfully completed, then offer a link to login, don't just go straight back to Login.
- Make the input field [validation messages customizable](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation).
- Make the whole repository into a reusable npm module React component that can be reused in apps as an npm dependency.
- Move all components of Login into separate repositories.
- Adapt this React.js code to also work natively in mobiles with React Native, but also take a look at [Flutter](https://flutter.dev/docs/get-started/flutter-for/react-native-devs)
- Add more Jest unit tests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Bootstrap note

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

When checking out this repository, there is no need to bootstrap it again, this was a one-off operation with the command `npx create-react-app react-login`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [`npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
