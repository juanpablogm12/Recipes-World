

const cleanApi = (api) =>
api.map((e) => {
  return {
    id: e.id,
    title: e.title,
    image: e.image,
    healthScore: e.healthScore,
    diets: e.diets,
  };
});

const cleanData = (data) =>
data.map((e) => {
  return {
    diets: e.diets
  };
});

const cleanBd = (bd) => 
bd.map((e) => {
  return {
    id: e.id,
    title: e.title,
    image: e.image,
    healthScore: e.healthScore,
    diets: e.Diets.map((e) => e.name),
  };
});

const cleanApiObj = (obj) => {
return {
  id: obj.id,
  title: obj.title,
  image: obj.image,
  diets: obj.diets,
  summary: obj.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
  healthScore: obj.healthScore,
  steps: obj.analyzedInstructions[0].steps.map(
    (e, index) => `step ${index + 1}. ${e.step}`
  )
};
};

const cleanBdObj = (obj) => {
return {
  id: obj.id,
  title: obj.title,
  image: obj.image,
  healthScore: obj.healthScore,
  summary: obj.summary,
  steps: obj.steps,
  diets: obj.Diets.map((e) => e.name),
};
};




module.exports = {
    cleanApi,
    cleanBd,
    cleanApiObj,
    cleanBdObj,
}
