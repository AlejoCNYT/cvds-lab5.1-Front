import React from 'react';
import logo from './assets/images/logo.svg'; // Importa el logo de React
import './assets/css/App.css';

// Importar componentes
import MiComponente from './components/MiComponente';


function HelloWorld(names, undergraduate){
  var presentation = <div>
    <h2>Hello there, we're {names}</h2>
    <h3>We're studying {undergraduate} </h3>
  </div>


  return presentation
}

function App() {

  var names = "Daniel Alejandro Acero y Julian Triana"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>

        { HelloWorld(names, "Computer Science") }

      <section className='componentes'>
        <MiComponente />

        </section>

      </header>
    </div>
  );
}

export default App;
