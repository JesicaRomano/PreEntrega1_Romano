import React, { useState } from 'react'

export const ItemCount = ( { stock }) => {

    const [count, setCount] = useState(1);

    const onAddHandler = () => {
        if ( count < stock ) {
            setCount ( count => count + 1 )
        } 
    }
    const onSubHandler = () => {
        if ( count >=1 ) {
            setCount( count => count - 1 )
        }
    }

    return(
        <div>
            <button onClick= { onSubHandler } className = 'btn bg-pink-400'>Disminuir</button>
            <strong> { count } </strong>
            <button onClick= { onAddHandler } className = 'btn bg-pink-400'>Aumentar</button>
        </div>
    )
}
