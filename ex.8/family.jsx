import React from 'react'

export default props => (
    <div>
        <h1>Familia</h1>
        {/* Passando a prop 'lastName' para os filhos */}
        {/* Estamos clonando a referencia do props como uma BOA PRÁTICA. Não é legal 
        passar a referencia diretamente */}
        { React.cloneElement(props.children, {...props}) }
    </div>
)