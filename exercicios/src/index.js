import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'

// essa é uma sintaxe do React chamda JSX que será transpilada
//Esse elemento virará JS
//Voce deixará de separar os arquivos por tipo e eles funcionarao como componentes
//*A REACTDOM conversa com a DOM
ReactDOM.render(<Primeiro /> , document.getElementById('root'))