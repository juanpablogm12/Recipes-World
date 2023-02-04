const { Router } = require("express");
const {
  getRecipesHandler,
  getRecipeHandler,
  getDietsHandler,
  createRecipesHandler,
} = require("../handlers/recipesHandlers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/recipes", getRecipesHandler);
router.get("/recipes/:id", getRecipeHandler);
router.get("/diets", getDietsHandler);
router.post("/recipes", createRecipesHandler);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
