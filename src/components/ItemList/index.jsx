
import Item from "../Item"
import "./styles.css"
import { useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { FirestoreContext } from "../../context/Firestore/FirestoreProvider";


function ItemList () {
    const {categoria} = useParams()
    const {getItems, items} = useContext(FirestoreContext) //Destructuracion

    useEffect(()=>{
      getItems(categoria)
    }, [categoria])

    
    const renderItems = () => {
        return items.map((item) => {
            return(
                <Item key={item.nombre} item={item} />
            )
        })
    }

    return(
        <section>
            {renderItems()}
        </section>
    )
}

export default ItemList