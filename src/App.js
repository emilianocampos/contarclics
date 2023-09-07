
import './App.css';
import Boton from './components/Boton';
import logo from './img/logo.png';
import Contador from './components/Contador';
import React, { useState } from 'react';

function App() {
 
  const inicialNumClics = localStorage.getItem('numClics') || 0;
  
  const [numClics, setNumClic] = useState(parseInt(inicialNumClics));

  const manejarClick = () => {
    const nuevoNumClics = numClics + 1;
    setNumClic(nuevoNumClics);

    
    localStorage.setItem('numClics', nuevoNumClics.toString());
  }

  const reiniciarContador = () => {
    setNumClic(0);

   
    localStorage.removeItem('numClics');
  }


  return (
    <div className='App'>
      <div className='contenedor-logo'>
        <img src={logo} alt="" className="logo" />
      </div>


      <div className='contenedor-principal'>

        <Contador
          numClics={numClics} />

        <Boton
          texto='Click'
          esBotonClic={true}
          manejarClic={manejarClick}

        />
        <Boton
          texto='Reniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
