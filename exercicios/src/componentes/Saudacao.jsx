// import React, {Fragment} from 'react'
import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props){
        super(props)
        //eu preciso fazer o binding para ele entender que o this é o proprio componente
        //Saudacao, senão recebo um undefined
        //Ha duas formas de fazer, uma com a funcao usando aerofunction ermbaixo e a outra usando o bind.
        //As duas formas funcionam, uma usando bind e a outra usando aerofunction
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e){
        this.setState({ tipo: e.target.value})
    }

    setNome(e){
        this.setState({ nome: e.target.value})
    }

    render(){
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..."
                 value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}