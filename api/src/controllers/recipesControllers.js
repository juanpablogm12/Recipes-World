const axios = require("axios");
const e = require("express");
const { Recipe, Diet } = require("../db");
const { API_KEY } = process.env;
const { cleanApi, cleanBd, cleanApiObj, cleanBdObj } = require("../utils");
//ok

const createRecipe = async (
  title,
  image,
  summary,
  healthScore,
  steps,
  diets
) => {
  const newRecipe = await Recipe.create({
    title,
    image,
    summary,
    healthScore,
    steps,
  });
  await newRecipe.addDiet(diets);
  return newRecipe;
};

//ok
const getRecipeById = async (id, source) => {
  const recipe =
    source === "api"
      ? (
          await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
          )
        ).data
      : await Recipe.findOne({
          where: { id: id },
          include: Diet,
        });
  const recipeClean =
    source === "api" ? cleanApiObj(recipe) : cleanBdObj(recipe);
  return recipeClean;
};

const searchRecipeByTitle = async (title) => {
  const databaseRecipes = await Recipe.findAll();
  const databaseFilter = databaseRecipes.filter((e) =>
    e.title.toLowerCase().includes(title.toLowerCase())
  );
  const apiRecipes = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
    )
  ).data.results;
  const apiRecipesClean = cleanApi(apiRecipes).filter((e) =>
    e.title.toLowerCase().includes(title.toLowerCase())
  );
  return [...databaseFilter, ...apiRecipesClean];
};  

//ok
const getAllRecipes = async () => {
  const databaseRecipes = await Recipe.findAll({ include: Diet });
  const apiRecipes = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    )
  ).data.results;
  const apiRecipesClean = cleanApi(apiRecipes);
  const bdRecipesClean = cleanBd(databaseRecipes);
  return [...bdRecipesClean, ...apiRecipesClean];
};

const getAllDiets = async () => {
  const apiDiets = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    )
  ).data.results;
  const diets = apiDiets.map((e) => e.diets).flat()
  const uniqueDiets = [... new Set(diets)]
  return uniqueDiets;
};

module.exports = {
  createRecipe,
  getRecipeById,
  searchRecipeByTitle,
  getAllRecipes,
  getAllDiets,
};
