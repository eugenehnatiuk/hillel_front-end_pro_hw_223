import Recipe from './recipe';

class RecipeBook {
  #numberOfRecords = 0;
  #recipesList = [];

  get recipes() {
    if (this.#recipesList.length === 0) {
      return 'No Recipes yet';
    } else {
      return `${
        this.#numberOfRecords < 2
          ? 'Існує один рецепт:'
          : `Існує ${this.#numberOfRecords} рецепти:`
      } ${this.#recipesList
        .map((recipe) => `"${recipe.recipeTitle}"`)
        .join(', ')}`;
    }
  }

  writeDownRecipe(...records) {
    try {
      records.forEach((record) => {
        if (record instanceof Recipe && Recipe.isValid(record)) {
          this.#recipesList.push(record);
          this.#numberOfRecords++;
        } else {
          throw new TypeError(
            'Присутній невалідний запис. Перелані лише валідні дані.'
          );
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  getRecipeByTime(timeValue) {
    try {
      if (typeof timeValue !== 'number' || isNaN(timeValue)) {
        throw new TypeError('Присутній невалідний запис. Очікує число');
      }

      const filteredRecipes = this.#recipesList.filter(
        (recipe) => recipe.cookingTime <= timeValue
      );

      return `Ваші рецепти за вказаним часом => ${
        filteredRecipes.length > 0
          ? filteredRecipes
              .map((recipe) => `"${recipe.recipeTitle}"`)
              .join(', ')
          : null
      }`;
    } catch (error) {
      console.error(error);
    }
    return null;
  }

  getRecipeByIngredients(...ingredients) {
    if (
      ingredients.length !== 0 &&
      ingredients.every((el) => typeof el === 'string')
    ) {
      const lowerCaseIngredients = ingredients.map((ingredient) =>
        ingredient.toLowerCase()
      );
      const filteredRecipes = this.#recipesList.filter((recipe) =>
        lowerCaseIngredients.every((ingredient) => {
          const lowerCaseRecipeIngredients = recipe.recipeIngredients.map(
            (el) => el.toLowerCase()
          );
          return lowerCaseRecipeIngredients.includes(ingredient);
        })
      );
      return `Ваші рецепти за інгрідієнтами => ${
        filteredRecipes.length > 0
          ? filteredRecipes
              .map((recipe) => `"${recipe.recipeTitle}"`)
              .join(', ')
          : `не знайдені`
      }`;
    } else {
      return null;
    }
  }
}

export default RecipeBook;