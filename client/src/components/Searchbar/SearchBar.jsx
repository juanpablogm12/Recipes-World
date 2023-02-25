import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css"
import {
  filterDiets,
  getRecipesSearch,
  orderByHealthScore,
  orderByTitle,
  resetRecipes,
} from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    const { value, name } = event.target;
    name === "filter_diets" && dispatch(filterDiets(value));
    name === "order_title" && dispatch(orderByTitle(value));
    name === "order_health_score" && dispatch(orderByHealthScore(value));
    name === "reset" && dispatch(resetRecipes());
    name === "search_input" && setSearch(value);
    name === "search_button" && dispatch(getRecipesSearch(search));
  };

  return (
    <div className={style.searchbar_container}>
      <div className={style.searchbar_filter_container}>

      <div>
        <h3>Filter by Diets:</h3>
        <select name ="filter_diets" onClick={searchHandler}>
        <option value="gluten free">gluten free</option>
        <option value="dairy free">dairy free</option>
        <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
        <option value="vegan">vegan</option>
        <option value="paleolithic">paleolithic</option>
        <option value="primal">primal</option>
        <option value="whole 30">whole 30</option>
        <option value="pescatarian">pescatarian</option>
        <option value="ketogenic">ketogenic</option>
        <option value="fodmap friendly">fodmap friendly</option>
        </select>
      </div>
      <div>

      <h3>Order by Title:</h3>
      <select name="order_title" onClick={searchHandler}>
        <option value="A a la Z">A a la Z</option>
        <option value="Z a la A">Z a la A</option>
      </select>
      </div>
      <div>

      <h3>Order by Health Score:</h3>
      <select name="order_health_score" onClick={searchHandler}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      </div>
      <button name="reset" onClick={searchHandler}>
        Reset
      </button>
      </div>
      <div className={style.searchbar_search_container}>
      <input type="search" name="search_input" onChange={searchHandler} />
      <button name="search_button" onClick={searchHandler}>
        Search
      </button>
      </div>
    </div>
  );
};

export default SearchBar;
