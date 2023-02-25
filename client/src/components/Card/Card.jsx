import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions";

const Card = ({ id, title, image, diets }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(getRecipe(id));
  };

  return (
    <Link className={style.card_link} to={`/detail/${id}`}>
      <div className={style.card_container} onClick={clickHandler}>
        <img className={style.img} src={image} alt={image} />
        <h1 className={style.card_title}>{title}</h1>
        <h2>Diets : </h2>
        <div className={style.card_diets_container}>
        {diets && diets.map((diet) =><div className={style.card_diets} key={diet}><h3 key={diet}>{diet}</h3></div>)}
        </div>
      </div>
    </Link>
  );
};

export default Card;
