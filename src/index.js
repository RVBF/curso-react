import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA, CompB} from './componentes/DoisComponentes'

// import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'

import Familia from "./componentes/Familia";
import Membro from "./componentes/Membro"

const elemento = document.getElementById('root');

ReactDom.render(    
    <div>
        <Familia>
            <Membro nome="andre" sobrenome="Rezende"/>
            <Membro nome="andre" sobrenome="Rezende"/>
            
        </Familia>
        <Familia>
            <Membro nome="andre" sobrenome="Barros"/>
            <Membro nome="andre" sobrenome="Barros"/>
            
        </Familia>

        <FamiliaSilva />

    </div>
    // <PrimeiroComponente valor="bom dia" AbcD={Math.pow(2, 8)}></PrimeiroComponente>
, elemento);