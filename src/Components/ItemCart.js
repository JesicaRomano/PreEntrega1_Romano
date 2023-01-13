/* import React from 'react'
import { useCart } from '../Context/CartContext'
import { PRODUCTS } from '../Moks/category'

export const ItemCart = ( { item } ) => {
    
    const { deleteProductById, totalItemsCarrito, totalPrecioCarrito } = useCart()
    return (
        <div>
            {
                (item => (
                    <>
                        <div>
                            <img src={item.img} alt={item.title}/>
                            <h3>{item.title}</h3>
                            <p>{item.quantity}</p>
                            <p>{item.price}</p>
                            <button onClick= {() => deleteProductById(item.id)}>Eliminar Producto</button>
                            <div> { totalItemsCarrito } </div>
                            <div> { totalPrecioCarrito } </div> 
                        </div>
                    </>
                ))
            }
        </div> 
    )
}

 */

