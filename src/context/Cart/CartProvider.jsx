import { createContext, useState, useContext } from "react"
import { getFirestore, collection, doc, addDoc, updateDoc, deleteDoc} from "firebase/firestore"
import { FirestoreContext } from "../Firestore/FirestoreProvider";

export const CartContext = createContext()

export default function CartProvider ({defultValues = [], children}){

    const {cartItems} = useContext(FirestoreContext)
    const db = getFirestore(); //Conexion con la base de datos

    const [precioTotal, setPrecioTotal] = useState(0)

    //CART FUNCTIONS
    function  addItem (item, quantity){

        const itemToCart = {
            buyer: {
                name: "Daniel",
                phone: 70786535,
                email: "dani@grupoangel.com"
            },
            item: {item},
            quantity: quantity
        }

        const cartCollection = collection(db, "cart")
        addDoc(cartCollection, itemToCart)
            .then((order) => {
                console.log("orden: ", order)
            })

        //Descuento del stock
        const itemDoc = doc(db, "cart", item.id.toString())
        updateDoc(itemDoc, {unidadesDisponibles: item.unidadesDisponibles - 1})
    }

    function clearCart (){

    }

    function payCart (){
        setProductos([])
    }

    function deleteItem (id){
        console.log("id: ", id)
        const itemDoc = doc(db, "cart", id.toString())
        deleteDoc(itemDoc)
            .then(() => {
                console.log("Document successfully deleted!");
            })
            .catch((error) => {
                console.error("Error deleting document: ", error);
            });
    }

    function calcPrecioTotal(){
        cartItems.map((item) => {
            //console.log("precio: ", item.item.item.precio, " cantidad: ", item.quantity )
            
            setPrecioTotal(item.item.item.precio * item.quantity + precioTotal )
        });
    }

    return(
        <CartContext.Provider 
            value={{
                name: "CartContext",
                addItem,
                clearCart,
                deleteItem,
                payCart,
                calcPrecioTotal,
                precioTotal
            }}
        >
            {children}
        </CartContext.Provider>
    )
}