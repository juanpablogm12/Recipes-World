import { Link } from "react-router-dom"
import style from "./NavBar.module.css"



const NavBar = () => {

    return(
        <div className={style.navbar_container}>
            <img className={style.navbar_logo} alt="logo" src="recipes_world.png" />
            <Link className={style.navbar_link} to={"/home"}>Home</Link>
            <Link className={style.navbar_link} to={"/Form"}>Create Recipe</Link>
        </div>
    )
}

export default NavBar