import { createContext, useState } from "react"
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore"

export const FirestoreContext = createContext()

export default function FirestoreProvider ({defaultValues = [], children}){
    const[items, setItems] = useState([])
    const[item, setItem] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    const db = getFirestore(); //Conexion con la base de datos

    //FIREBASE FUNCTIONS
    function getItems(categoria){
        const itemsCollection = collection(db, "products") //Acceso a la coleccion 
        getDocs(itemsCollection)
        .then ((snapshot) =>{
            if(categoria){
                const filteredItems = snapshot.docs.filter((item) => item.data().categoria === parseInt(categoria));
                const filteredItemsData = filteredItems.map((doc) => doc.data());
                setItems(filteredItemsData);
            }
            else{
                const allItemsData = snapshot.docs.map((item) => item.data())
                setItems(allItemsData);
                }
            })
    
        .catch((error) => {
            console.error("error: ", error)
        }) 
    }

    function getItemById(id){
        const item = doc(db, "products", id.toString() ) //Acceso al item 
        getDoc(item)
          .then((snapshot) => {
            if(snapshot.exists()){
                setItem(snapshot.data())
            }
            else{
                console.log("Item no existente")
            }

          })
          .catch((error => {
            console.error("error: ", error)
          }))
    
    }

    function getCart(){
        const cart = collection(db, "cart")
        getDocs(cart)
            .then((snapshot) => {
                const allCartItemsData = snapshot.docs.map((item) => item.data());
                const allCartItemsQuantity = snapshot.docs.map((item) => item.quantity);
                setCartItems(allCartItemsData)

                
            })
            .catch ((error) => {
                console.log("error: ", error)
            })
    }

    return(
        <FirestoreContext.Provider
            value={{
                getItems,
                items,
                getItemById,
                item,
                getCart,
                cartItems,
                totalQuantity,
                quantity: cartItems.length
            }}
        >
            {children}
        </FirestoreContext.Provider>)

}