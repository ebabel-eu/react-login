import React from 'react';

// In production, in your app, use:
// import ReactLogin from '@thomasamar/react-login';
import ReactLogin from '../react-login'; // Local relative path is for demo only.

class App extends React.Component {
  constructor(props) {
    super(props);

    window.addEventListener('login-successful', (e) => {
      const { authenticationToken, loginSuccessful } = e.detail;  // note: the e.detail data comes from the API response and can be anything, based on the API the ReactLogin works with.
      this.setState({ authenticationToken, loginSuccessful });
      // todo: unload ReactLogin and load another component that gives access to the demo app next screen.
    });

    window.addEventListener('forgotten-successful', (e) => {
      console.log(e.detail);
    });

    window.addEventListener('signup-successful', (e) => {
      console.log(e.detail);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('login-successful');
    window.removeEventListener('forgotten-successful');
    window.removeEventListener('signup-successful');
  }

  render() {
    return (
      <div className="App">
        <ReactLogin
          loginEndpoint="/api/login"
          forgottenEndpoint="/api/password"
          signupEndpoint="/api/signup"

          usernameLabel="Nom d'utilisateur"
          usernamePlaceholder="rémi-martin"
          passwordLabel="Mot de passe"
          passwordPlaceholder="s013ilVert"
          loginButtonText="Se connecter"
          stayLoggedLabel="Rester connecté"
          stayLoggedDurationDescription="pour 2 semaines"
          loginLink="S'identifier"
          forgottenLink="Mot de passe oublié?"
          signupLink="Voulez-vous créer un compte?"
          loginHash="s'identifier"
          forgottenHash="réinitialiser-le-mot-de-passe"
          signupHash="créer-un-nouveau-compte"
          emailLabel="Votre email"
          emailPlaceholder="rémi-martin@tv.fr"
          forgottenButtonText="Réinitialisation du mot de passe"
          signupButtonText="Créer votre compte"
          pleaseWait="Merci de patienter&hellip;"
          emailPolicy="Votre email est nécessaire si vous oubliez votre mot de passe et souhaitez le réinitialiser. Votre adresse email ne sera pas utilisée à d'autres fins."
          errorHelpText="Que voulez-vous faire?"
          afterResetDisplayLogin={true}
          afterSignupDisplayLogin={true}
          errorTextColor="#cc0033"
          errorHeaderFontSize="1.75em"
          errorSubHeaderFontSize="1.5em"
        />
      </div>
    );
  }
}

export default App;
