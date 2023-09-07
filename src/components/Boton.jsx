import React from 'react';
import '../style/Boton.css'


function Boton({ texto, esBotonClic, manejarClic }) {
    return (

        <button
            className={esBotonClic ? 'boton-click' : 'boton-reiniciar'}
            onClick={manejarClic}>
            {texto}
        </button>


    );

}

export default Boton;