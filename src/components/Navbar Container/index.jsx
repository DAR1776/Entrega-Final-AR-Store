import { Link } from "react-router-dom"
import {useState } from "react";
import "./styles.css"
import Brand from "../Brand"
import Categories from "../Categories"
import CartWidget from "../CartWidget"

const NavbarContainer = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return(
        <div id="navbar">

            <Link to="/">
                <Brand/>
            </Link>

            <Link to={`/category/1`}>
                <Categories name = "Hoodies Grises" onClick={setSelectedCategory}/>
            </Link>

            <Link to={`/category/2`}>
                <Categories name = "Hoodies Blancos" onClick={setSelectedCategory}/>
            </Link>

            <Link to={`/category/3`}>
                <Categories name = "Hoodies Negros" onClick={setSelectedCategory}/>
            </Link>

            <Link to={"/cart"}>
                <CartWidget/>
            </Link>
            
        </div>
    )
}

export default NavbarContainer