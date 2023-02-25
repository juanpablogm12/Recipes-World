// import { useSelector } from "react-redux";
import style from "./Detail.module.css";
import { useSelector } from "react-redux";

const Detail = () => {
  const { title, image, healthScore, diets, summary, steps } = useSelector(
    (state) => state.recipe
  );
  console.log();

  return (
    <div>
      <h1>Detail Of Recipe</h1>
      <h2>{title}</h2>
      <div className={style.detail_container}>
        <div className={style.detail_image}>
          <img className={style.detail_image} src={image} alt={image} />
        </div>
        <div className={style.detail_info_container}>
          <div className={style.detail_diets_score_container}>
            <h3>Health Score: </h3>
            <h4>{healthScore}</h4>
          </div>
          <div className={style.detail_diets_score_container}>
            <h3>Diets: </h3>
            {diets && diets.map((diet, index) => <h4 key={index}>{diet}</h4>)}
          </div>

          <h3 className={style.detail_summary}>Summary: </h3>
          <p className={style.detail_summary}>{summary}</p>
        </div>
      </div>
      <div>
        <h3>Steps: </h3>
        {Array.isArray(steps) 
        ? steps.map((step, index) => <p key={index}>{step}</p>)
        : <p>{steps}</p>}
      </div>
    </div>
  );
};

export default Detail;
