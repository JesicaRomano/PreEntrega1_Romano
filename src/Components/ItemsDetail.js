import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../Moks/category"
import { ItemCount } from "./ItemCount"

export const ItemsDetail = () => {
    
    const [item, setItem] = useState({})
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
                <div className="first-letter:card w-96 bg-base-100 shadow-xl m-3">
                    <figure>{item.img}</figure>
                    <h1> Detalles de producto  { id }</h1>
                    <li> {item.title} </li>
                    <li> {item.description} </li>
                    <li> ${item.price} </li>
                    <ItemCount stock={item.stock} />
                    <button className='btn bg-pink-400'>Agregar al carrito</button>
                </div>  
            </div>
        </div>
    )
}