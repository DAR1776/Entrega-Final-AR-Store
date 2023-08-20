import { FirestoreContext } from "../../context/Firestore/FirestoreProvider"
import { useContext } from "react"
import "./styles.css"

const CartWidget = (props) => {
    const {totalQuantity} = useContext(FirestoreContext)

    return(
        <div 
            id="cartWidget"
            onClick={props.clic}
        >
            <h6>{totalQuantity}</h6>
            <ion-icon name="cart-outline"></ion-icon> 
        </div>
    )
}

export default CartWidget