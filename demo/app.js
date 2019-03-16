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

      // Unload ReactLogin and load the dashboard component.
      if (authenticationToken && loginSuccessful) {
        this.setState({
          displayReactLogin: false,
          displayDashboard: true,
          displayPasswordReset: false,
          displayAccountCreated: false,
        });
      }
    });

    window.addEventListener('forgotten-successful', (e) => {
      const { passwordReset } = e.detail;

      if (passwordReset) {
        this.setState({
          displayReactLogin: false,
          displayDashboard: false,
          displayPasswordReset: true,
          displayAccountCreated: false,
        });
      }
    });

    window.addEventListener('signup-successful', (e) => {
      const { accountCreated } = e.detail;

      if (accountCreated) {
        this.setState({
          displayReactLogin: false,
          displayDashboard: false,
          displayPasswordReset: false,
          displayAccountCreated: true,
        });
      }
    });
  }

  componentWillMount() {
    this.setState({
      displayReactLogin: true,
      displayDashboard: false,  // The dashboard requires for the user to be logged in first and to obtain a authenticationToken.
      displayPasswordReset: false,
      displayAccountCreated: false,
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
        {this.state.displayReactLogin ?
        <ReactLogin
          loginEndpoint="/api/login"
          forgottenEndpoint="/api/password"
          signupEndpoint="/api/signup"

          usernameLabel="Nom d'utilisateur"
          usernamePlaceholder="rémi-martin"
          passwordLabel="Mot de passe"
          passwordPlaceholder="s013ilVert"
          loginButtonText="Vous connecter"
          stayLoggedLabel="Restez connecté"
          stayLoggedDurationDescription="pour 2 semaines"
          loginLink="Vous connecter"
          forgottenLink="Mot de passe oublié?"
          signupLink="Voulez-vous créer un compte?"
          loginHash="vous-connecter"
          forgottenHash="réinitialiser-le-mot-de-passe"
          signupHash="créer-un-nouveau-compte"
          emailLabel="Votre email"
          emailPlaceholder="rémi-martin@tv.fr"
          forgottenButtonText="Réinitialisation du mot de passe"
          signupButtonText="Créer votre compte"
          pleaseWait="Merci de patienter&hellip;"
          emailPolicy="Votre email est nécessaire si vous oubliez votre mot de passe et souhaitez le réinitialiser. Votre adresse email ne sera pas utilisée à d'autres fins."
          errorHelpText="Que voulez-vous faire?"
          afterResetDisplayLogin={false}
          afterSignupDisplayLogin={false}
          errorTextColor="#cc0033"
          errorHeaderFontSize="1.75em"
          errorSubHeaderFontSize="1.5em"
          errorLoginFailed="Échec de la connexion"
          errorResetFailed="La réinitialisation du mot de passe a échoué"
          errorSignupFailed="L'inscription a échoué"
        />
        : null}

        {this.state.displayDashboard ?
        <div className="dashboard">
          <p>Vous êtes connecté avec succès au tableau de bord de cette application.</p>
        </div>
        : null}

        {this.state.displayPasswordReset ?
        <div className="password-reset">
          <p>Un lien vous a été envoyé par courrier électronique. Suivez ce lien pour completer la réinitialisation de votre mot de passe.</p>
        </div>
        : null}

        {this.state.displayAccountCreated ?
        <div className="account-created">
          <p>Votre compte a été créé. Pour l'activer, veuillez vérifier votre courrier électronique et suivre le lien qui vous a été envoyé.</p>
        </div>
        : null}
      </div>
    );
  }
}

export default App;
