import "./styles.css"
import ItemCount from "../ItemCount"
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FirestoreContext } from "../../context/Firestore/FirestoreProvider";


function ItemDetail () {
    const {id} = useParams()
    const {getItemById, item} = useContext(FirestoreContext) //Destructuracion
    
    useEffect(() => {
        getItemById(id)
    }, [id]);

    return(
        <div>
            <div id= "itemDetail">
                <img src={item.imagen} alt={item.nombre}/>
                <h2>{item.nombre}</h2>
                <p>{item.descripcion} </p>
                <p> Precio: ${item.precio}</p>

                <ItemCount stock={item.unidadesDisponibles} />


                <h3>Stock: {item.unidadesDisponibles}</h3>
            </div>

        </div>
    )
}

export default ItemDetail