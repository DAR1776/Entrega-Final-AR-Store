import "./styles.css"
import { useContext } from "react";
import { CartContext } from "../../context/Cart/CartProvider";

function CartItem (props) {
    const{deleteItem} = useContext(CartContext) //Destructuracion
    return(
        <div className="cartItem">
            <h3>{props.item.item.item.nombre}</h3>
            <h4>Precio: ${props.item.item.item.precio * props.item.quantity}</h4>
            <h4>Cantidad: {props.item.quantity} </h4>
            <button onClick={() => deleteItem(props.item.id)}>Eliminar producto</button>
        </div>
    )
}

export default CartItem