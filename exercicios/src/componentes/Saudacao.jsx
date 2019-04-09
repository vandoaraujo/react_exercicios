<<<<<<< HEAD
import React from 'react'

export default class Saudacao extends Component {
    render(){

    }
}
=======
// import React, {Fragment} from 'react'
import React, { Component } from 'react'

export default class Saudacao extends Component {
    render(){
        const { tipo, nome } = this.props
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} />
                <input type="text" placeholder="Nome..." value={nome} />
            </div>
        )
    }
}
>>>>>>> a6f928c3ba6aa4cfc9ef469be656f147e2363a38
