import React from 'react'

export default(props)=>
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.AbcD}</h2>
        <p>{ true ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>

// export default()=>
//     <div>
//         <h1>Primeiro componente (arrow)!</h1>
//     </div>
// export default function primeiro() {
//     return <h1>Primeiro componente</h1>
// }
// function primeiro() {
//     return <h1>Primeiro componente</h1>
// }

// export default primeiro;