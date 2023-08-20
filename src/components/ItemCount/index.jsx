import { useState, useContext, useEffect } from "react";
import "./styles.css"
import { CartContext } from "../../context/Cart/CartProvider";
import { FirestoreContext } from "../../context/Firestore/FirestoreProvider";


const ItemCount = (props) => {
    const [itemCount, setItemCount] = useState(0);
    const {addItem} = useContext(CartContext)
    const {item} = useContext(FirestoreContext) //Destructuracion
    

    const increment = () => {
        if (itemCount === props.stock)
            setItemCount(itemCount)

        else 
            setItemCount(itemCount + 1);
    };

    const decrement = () => {
        if (itemCount === 0)
            setItemCount(0);
    
        else
            setItemCount(itemCount-1)
    };


    const renderAddButton = () => {
        if (itemCount != 0)
            return(
                <button id="addCart" onClick={() => addItem(item, itemCount)}>Agregar al carrito</button>
            )
    };

    return(
        <div>
            <div id="itemCount">            
                <button onClick={increment}>+</button>
                <h3>{itemCount}</h3>
                <button onClick={decrement}>-</button>
            </div>

            {renderAddButton()}

        </div>
    )
}

export default ItemCount