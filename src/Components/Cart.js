
import { Link } from 'react-router-dom'
import { useCart, CartContext } from '../Context/CartContext'



export const Cart = ({ condition }) => {
    const { cartList, deleteProductById, emptyCartList, totalPrecioCarrito } = useCart(CartContext)
    condition = cartList.length === 0

    return (
        <div>
            {condition &&
                <div>
                    <h2>No hay Items en el Carrito</h2>
                    <Link to={"/"}>
                        <button className='btn bg-pink-400'>Volver al inicio</button>
                    </Link>
                </div>
            }
            {!condition &&
                <>
                    <h1>Carrito de Compras</h1>
                    <div>
                        <div className='cartContainer'>
                            {cartList.map(cartItm => (
                                <div className='itemCard' key={cartItm.id}>
                                    <img className='itemcard_img' src={cartItm.img} alt={cartItm.title} />
                                    <h1>{cartItm.title}</h1>
                                    <h3>${cartItm.price}</h3>
                                    <h4>Cantidad: {cartItm.cantidad}</h4>
                                    <h4>Subtotal: ${cartItm.cantidad * cartItm.price} </h4>
                                    <button className='btn bm-pink-200' onClick={() => deleteProductById(cartItm.id)} >Eliminar</button>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Total: ${totalPrecioCarrito()}</h3>
                            <button className='btn bg-pink-400' onClick={emptyCartList}>Vaciar Carrito</button>
                           
                        </div>
                    </div>
                </>
            }
        </div>
    )
}


