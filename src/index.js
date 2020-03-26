import React from 'react'
import ReactDom from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root');

ReactDom.render(    
    <PrimeiroComponente valor="bom dia" AbcD={Math.pow(2, 8)}></PrimeiroComponente>
, elemento);