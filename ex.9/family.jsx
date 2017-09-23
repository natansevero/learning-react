import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Familia</h1>
        {/* Passando o props para multiplos filhos */}
        {/* O 'React.Children' já passa uma key implicita */}
        {/* { React.Children.map(props.children, 
            child => React.cloneElement(child, {...props})) } */}
   
        { childrenWithProps(props) }
    </div>
)