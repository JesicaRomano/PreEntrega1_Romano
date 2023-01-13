import {  useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const CartContext = createContext() 

export const useCart = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
    const [ cartList, setCartList ] = useState([]);

    const addToCart = (item, quantity) => {
        if(cartList.length === 0){
            setCartList([{
                ...item,
                cantidad: quantity
            }])
        }else{
            const findedItem = cartList.find(product => product.id === item.id)
            if(!findedItem){
                setCartList([
                    ...cartList,
                    {
                        ...item,
                        cantidad: quantity
                    }
                ])
            }else{
                const filteredItems = cartList.filter(product => product.id !== item.id)
                setCartList([
                    ...filteredItems,{
                        ...findedItem,
                            cantidad: findedItem.quantity +1
                    }
                ])
            }
        }
    }

    const totalItemsCarrito = () => {
        return cartList.reduce((acc, item) => acc + item.quantity, 0)
      /*  let total = 0;
       cartList.forEach(itemInCart => {
        total = total + itemInCart.cantidad
       })
       return total */
    }

    const totalPrecioCarrito = () => {
        return cartList.reduce((acc, item) => acc + item.quantity * item.price,0)
       /* let totalPrice = 0;
        cartList.forEach(itemInCart => {
            totalPrice = totalPrice + itemInCart.cantidad * itemInCart.price
        })
        return totalPrice; */
    }


    const emptyCartList = () => { 
        setCartList([])
    }

    const deleteProductById = (id) => { 
        const filterProduct = cartList.filter((item)=> item.id !== id)
        setCartList(filterProduct)
    }

    return (
        <CartContext.Provider value= {{
            cartList,
            addToCart,
            emptyCartList,
            deleteProductById,
            totalItemsCarrito,
            totalPrecioCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}

