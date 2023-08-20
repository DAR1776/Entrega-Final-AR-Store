import { CartContext } from "../../context/Cart/CartProvider";
import { useContext, useEffect } from "react";
import { FirestoreContext } from "../../context/Firestore/FirestoreProvider";
import CartItem from "../../components/CartItem";
import "./styles.css"


function Cart () {
    const {clearCart, payCart, precioTotal, calcPrecioTotal} = useContext(CartContext) //Desestrucuracion
    const {cartItems, getCart, quantity} = useContext(FirestoreContext)


    const renderCartItems = () => {
        getCart()
        return cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
        ));
    }

    const renderText = () => {
        if (quantity == 0){
            return(
                <h2> No hay items que mostrar </h2>
            )
        }
    }

    useEffect(() => {
        calcPrecioTotal();
    }, []);
    console.log("repeticion")
    
 
    return(
        <div id="cartContainer">
            <h1>Carrito de compras</h1>
            
            <div id="cartInfo">
                {renderText()}
                {renderCartItems()}
            </div>
            

            <h3>Precio Total: ${precioTotal} </h3>
            
            <div>
                <button id="payCart" onClick={() => payCart()}>Pagar compra</button>
                <button id="clearCart" onClick={() => clearCart()}>Limpiar carrito</button>
            </div>

        </div>
    )
}

export default Cart;