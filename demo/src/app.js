import React, { Component } from 'react';

// In production, in your app, use:
// import ReactLogin from '@thomasamar/react-login';
import ReactLogin from '../../src/ReactLogin'; // Local relative path is for demo only.

class App extends Component {
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
