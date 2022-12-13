import React from 'react'
import { ItemCard } from './ItemCard'


export const ItemList = ({category}) => {
    return (
        <div>
            {
                category.map(item => <ItemCard key={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price} id={item.id} />)

            }
        </div>
    )
}