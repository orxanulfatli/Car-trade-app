export const addModelsAC = (models) => {
    return {
      type: "ADD_MODELS",
      payload: models,
    };
}