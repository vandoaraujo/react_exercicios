import React from 'react'
import Filho from './Filho';

//Criando um componente funcional...
export default props =>
    <div>
        <li>{props.nome} {props.sobrenome}</li>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} /> */}
            {/* Posso usar também o operador spread */}
            {/* <Filho {...props} /> */}
            {/* <Filho {...props} nome="Carla" /> */}

            {/* {props.children} */}
            {/* existe uma propriedade chamada cloneElement que permite
            clonar um elemento e adicionar elementos a ela */}
            {   
                React.Children.map(props.children, child => {
                        return React.cloneElement(child, {
                            ...props, ...child.props
                        })
                     })
            }
        </ul>
    </div>
 