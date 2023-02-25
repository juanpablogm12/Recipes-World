import style from "./Landing.module.css"
import { Link } from "react-router-dom"

const Landing = () => {
    return(
        <div className={style.landing_container}>
            <img className={style.landing_logo} alt="logo" src="recipes_world.png" />
            <p className={style.landing_text}>Welcome to recipes world, in this place you can the best recipes of world.</p>
            <Link to={"/home"} className={style.landing_link}>
            <button className={style.landing_button}>GET START</button>
            </Link>
        </div>
    )
}

export default Landing