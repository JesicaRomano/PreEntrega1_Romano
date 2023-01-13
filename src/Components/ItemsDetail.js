import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { PRODUCTS } from "../Moks/category"
import { ItemCount } from "./ItemCount"

export const ItemsDetail = ( {items} ) => {
    
    const { addToCart, setAddToCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState()

    
    const [purchase, setPurchase] =useState(false)

    /* const onAdd = (quantity) => {
        setAddToCart(true)
    } */
    const [item, setItem] = useState({})
    const onAddHandler = (item, cantidad) => {
        addToCart(item, cantidad)
        setQuantity(cantidad)
        setPurchase(!purchase)
    }

    const { id } = useParams()

    useEffect(() => {
        getItemDetail().then( res => {
            setItem( res )
        })
    }, [ id ])
    
    const getItemDetail = () => {
        return new Promise( (resolve, reject) => {
            const item = PRODUCTS.find( p => p.id == id )
            setTimeout(() => {
                resolve( item )
            }, 2000)
        })
    }

    return (
        <div className="flex flex-row">
            <div className="card-body">
                <div  className="first-letter:card w-96 bg-base-100 shadow-xl m-3">
                    <h1> Detalles de producto  { id }</h1>
                    <li> {item.title} </li>
                    <div>
                        <img className='img' src={item.img} alt={`Imagen del producto ${item.title}`} />
                    </div>  
                    <li> {item.description} </li>
                    <li> ${item.price} </li>
                    <ItemCount stock={item.stock} />
                    <div>
                        {    
                            !purchase ? (
                                <button onClick= { onAddHandler } className='btn bg-pink-400'>Agregar al carrito</button>
                            ) : (

                                <>
                                <Link to='/Cart' className= "btn bg-pink-400"> Ir al carrito </Link>
                                </>
                            )    
                        }
                    </div>
                </div>  
            </div>
        </div>
    )
}