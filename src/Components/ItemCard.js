import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({
    title = 'Pantalón de jeans Mom',
    img = 'https://http2.mlstatic.com/D_NQ_NP_781930-MLA48498795839_122021-W.jpg',
    price = 9000,
    stock = 10,
    id
}) => {
    return (
        <div>
            <h4>{title}</h4> 
            <div>
                <img className='img' src={img} alt={`Imagen del producto ${title}`} />
            </div> 
            <p className='price'>{price} $</p>
            <Link to={`/item/${id}`}>
                <button className='btn bg-pink-400'>Ver mas detalles</button>
            </Link>
        </div>
    )
}