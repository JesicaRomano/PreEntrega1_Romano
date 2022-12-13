import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../Moks/category'
import { ItemList } from './ItemList'

const ItemListContainer = () => {
    const [category, setCategory] = useState([])

    const { idCategory } = useParams()
    

    const getProducts = () => new Promise((resolve, reject) =>{
        setTimeout(() => resolve(PRODUCTS), 2000)
    })

    useEffect(() => {
        if (idCategory) {
        getProducts()
        .then(PRODUCTS => setCategory(PRODUCTS.filter(p => p.category === idCategory)))
        .catch(error => console.error(error))
        } else {
        getProducts()
        .then(PRODUCTS => setCategory(PRODUCTS))
        .catch(error => console.error(error))
        }
    }, [idCategory]) 
    return (
        <>
        {
        category.length
        ?
        <ItemList category={category}/>
        :
        <h1>Loading...</h1>
        }
        </>
    )
}

export default ItemListContainer