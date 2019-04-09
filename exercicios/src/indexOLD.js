import React from 'react'
import ReactDOM from 'react-dom'
// import Bomdia from './componentes/Bomdia'

//usando o modulo de desestruturacao, estamos exportando a funcao BoaTarde, BoaNoite
import {BoaTarde, BoaNoite} from './componentes/Multiplos' 

// essa é uma sintaxe do React chamda JSX que será transpilada
//Esse elemento virará JS
//Voce deixará de separar os arquivos por tipo e eles funcionarao como componentes
//*A REACTDOM conversa com a DOM
ReactDOM.render(
    <div>
        <BoaTarde nome='Vando' />
        <BoaNoite nome='Flavia' />
    </div>
, document.getElementById('root'))