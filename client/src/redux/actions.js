import axios from "axios";
// llevar a carpeta de utils y organizar exportanción
const GET_RECIPES = "GET_RECIPES";
const GET_RECIPE = "GET_RECIPE";
const GET_DIETS = "GET_DIETS";
const FILTER_DIETS = "FILTER_DIETS";
const ORDER_TITLE = "ORDER_TITLE";
const ORDER_SCORE = "ORDER_SCORE";
const RESET_RECIPES = "RESET_RECIPES";
const GET_RECIPES_SEARCH = "GET_RECIPES_SEARCH";

const getRecipes = () => {
  return async (dispatch) => {
    const data = await axios.get("http://localhost:3001/recipes");
    const recipes = data.data;
    dispatch({ type: GET_RECIPES, payload: recipes });
  };
};
//organizar nombres de variables

const getRecipe = (id) => {
  return async (dispatch) => {
    const dataRecipe = await axios.get(`http://localhost:3001/recipes/${id}`);
    const recipe = dataRecipe.data;
    dispatch({ type: GET_RECIPE, payload: recipe });
  };
};

const getDiets = () => {
  return async (dispatch) => {
    const dataDiets = await axios.get("http://localhost:3001/diets");
    const diets = dataDiets.data;
    dispatch({ type: GET_DIETS, payload: diets });
  };
};

const getRecipesSearch = (search) => {
  return async (dispatch) => {
    const dataRecipes = await axios.get(
      `http://localhost:3001/recipes?title=${search}`
    );
    const recipes = dataRecipes.data;
    dispatch({ type: GET_RECIPES_SEARCH, payload: recipes });
    console.log(recipes);
  };
};

const filterDiets = (diets) => {
  return {
    type: FILTER_DIETS,
    payload: diets,
  };
};

const orderByTitle = (order) => {
  return {
    type: ORDER_TITLE,
    payload: order,
  };
};

const orderByHealthScore = (order) => {
  return {
    type: ORDER_SCORE,
    payload: order,
  };
};

const resetRecipes = () => {
  return {
    type: RESET_RECIPES,
  };
};

export {
  GET_RECIPES,
  GET_RECIPE,
  GET_DIETS,
  FILTER_DIETS,
  ORDER_TITLE,
  ORDER_SCORE,
  RESET_RECIPES,
  GET_RECIPES_SEARCH,
  getRecipes,
  getRecipe,
  getDiets,
  getRecipesSearch,
  filterDiets,
  orderByTitle,
  orderByHealthScore,
  resetRecipes,
};
