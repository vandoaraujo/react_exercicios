import React from 'react'
import ReactDOM from 'react-dom'

// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        {/* <Saudacao tipo="Bom dia" nome="Vando" /> */}
        
        {/* 1 forma de usar o pai com os filhos */}
        {/* <Pai nome="Paulo" sobrenome="Silva" /> */}

        {/* 2 forma de usar o pai com os filhos internamente  */}
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))