import React from 'react'
import ReactDOM from 'react-dom'

// essa é uma sintaxe do React chamda JSX que será transpilada
//Esse elemento virará JS
//Voce deixará de separar os arquivos por tipo e eles funcionarao como componentes
const elemento = <h1>React</h1>
ReactDOM.render(elemento, document.getElementById('root'))