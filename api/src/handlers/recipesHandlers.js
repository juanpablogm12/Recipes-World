const { createRecipe, getRecipeById, searchRecipeByTitle, getAllRecipes, getAllDiets } = require("../controllers/recipesControllers");



const getRecipesHandler = async (req, res) => {
  const { title } = req.query;
  const results  = title ? await searchRecipeByTitle(title) : await getAllRecipes()
  try {
     res.status(200).json(results)
  } catch (error) {
    res.status(400).json({error: error.message})
  }


};

const getRecipeHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" :  "api"
  const recipe = await getRecipeById(id, source)
  try {
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDietsHandler = async (req, res) => {
  const allDiets = await getAllDiets()
  try {
    res.status(200).json(allDiets);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

const createRecipesHandler = async (req, res) => {
  const { title, image, summary, healthScore, steps, diets } = req.body;
  const newRecipe = await createRecipe(title, image, summary, healthScore, steps, diets);
  try {
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getRecipesHandler,
  getRecipeHandler,
  getDietsHandler,
  createRecipesHandler,
  getDietsHandler,
};
