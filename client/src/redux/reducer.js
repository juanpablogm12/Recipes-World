import {
  GET_DIETS,
  GET_RECIPE,
  GET_RECIPES,
  FILTER_DIETS,
  ORDER_TITLE,
  ORDER_SCORE,
  RESET_RECIPES,
  GET_RECIPES_SEARCH,
} from "./actions";

const initialState = {
  recipes: [],
  allRecipes: [],
  recipe: {},
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };

    case GET_RECIPE:
      return { ...state, recipe: action.payload };

    case GET_DIETS:
      return { ...state, diets: action.payload };

    case FILTER_DIETS:
      const recipesFilter = [...state.recipes];
      const recipesFiltered = recipesFilter.filter((recipe) =>
        recipe.diets.includes(action.payload)
      );
      return { ...state, recipes: recipesFiltered };

    case ORDER_TITLE:
      const recipesOrderAlphabetical = [...state.recipes];
      const recipesOrdered = recipesOrderAlphabetical.sort((a, b) => {
        if (a.title > b.title) {
          return "A a la Z" === action.payload ? 1 : -1;
        }
        if (a.title < b.title) {
          return "Z a la A" === action.payload ? 1 : -1;
        }
        return 0;
      });
      return { ...state, recipes: recipesOrdered };

    case ORDER_SCORE:
      const recipesOrderScore = [...state.recipes];
      const recipesOrderedScore = recipesOrderScore.sort((a, b) => {
        if (a.healthScore > b.healthScore) {
          return "Ascendente" === action.payload ? 1 : -1;
        }
        if (a.healthScore < b.healthScore) {
          return "Descendente" === action.payload ? 1 : -1;
        }
        return 0;
      });
      return { ...state, recipes: recipesOrderedScore };

    case RESET_RECIPES:
      return { ...state, recipes: state.allRecipes };

    case GET_RECIPES_SEARCH:
      return {...state, recipes:action.payload}

    default:
      return { ...state };
  }
};

export default rootReducer;
