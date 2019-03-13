# Develop `<ReactLogin />` further
These instructions are not necessary if all you want to do is use `<ReactLogin />` in your own application.

However, if you are interested in improving this component, please go ahead:

1. Fork the [repository](https://github.com/ebabel-eu/react-login).
2. Raise a merge request on Github.

We'll take it from there!

## npm commands

### `npm install`
Install all dependencies of `<ReactLogin />`, including the development dependencies.

Note: these development dependencies are not installed when an application only makes use of this component.

### `npm run build`
Builds the component and the demo.

### `npm start`
This command both builds the component and will listen locally on port 3000 where it's possible to browse to a demo app that uses `<ReactLogin />`: http://localhost:3000

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
