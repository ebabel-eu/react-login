import React from 'react';

// In production, in your app, use:
// import ReactLogin from '@thomasamar/react-login';
import ReactLogin from '../react-login'; // Local relative path is for demo only.

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ReactLogin
          usernameLabel="Nom d'utilisateur"
          passwordLabel="Mot de passe"
        />
      </div>
    );
  }
}

export default App;
