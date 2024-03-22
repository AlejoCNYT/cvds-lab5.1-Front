import React from 'react';
import logo from './assets/images/logo.svg'; // Importa el logo de React
import './assets/css/App.css';

// Importar componentes
import MiComponente from './components/MiComponente';

function HelloWorld({ names, undergraduate }) {
  return (
    <div>
      <h2>Hello there, we're {names}</h2>
      <h3>We're studying {undergraduate}</h3>
    </div>
  );
}

function App() {
  var names = "Daniel Alejandro Acero y Julian Triana";

  const handleClick = async () => {
    try {
      const res = await fetch('http://localhost:8080/', {
        method: 'GET',
        mode: 'cors',
      });
      if (res.ok) {
        console.log('Pong');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <HelloWorld names={names} undergraduate="Computer Science" />
      </header>
      <section className='componentes'>
        <MiComponente />
      </section>
      <button onClick={handleClick}>fetch</button>
    </div>
  );
}

export default App;
