import Recipe from './recipe.js';

class RecipeBook {
  #recipesList = [];

  get recipes() {
    if (this.#recipesList.length > 0) {
      return `${
        this.#recipesList.length < 2
          ? 'У вас один рецепт:'
          : `Кількість рецептів - ${this.#recipesList.length}:`
      } ${this.#recipesList
        .map((recipe) => `"${recipe.recipeTitle}"`)
        .join(', ')}`;
    }
    return 'Ще немає рецептів. Додайте рецепти.';
  }

  writeDownRecipe(...records) {
    records.forEach((record) => {
      if (record instanceof Recipe && Recipe.isValid(record)) {
        this.#recipesList.push(record);
      }
      return 'Присутній невалідний запис. Передані лише валідні дані.';
    });
  }

  getRecipeByTime(timeValue) {
    if (typeof timeValue !== 'number' && isNaN(timeValue)) {
      return 'Присутній невалідний запис. Очікує число';
    }

    const filteredRecipes = this.#recipesList.filter(
      (recipe) => recipe.cookingTime <= timeValue
    );
    return filteredRecipes.length > 0 ? filteredRecipes : 'Рецепти відсутні';
  }

  getRecipeByIngredients(...ingredients) {
    if (ingredients.some((ingredient) => typeof ingredient !== 'string')) {
      return null;
    }

    const lowerCaseIngredients = ingredients.map((ingredient) =>
      ingredient.toLowerCase()
    );

    const foundRecipes = this.#recipesList.filter((recipe) =>
      lowerCaseIngredients.every((ingredient) =>
        recipe.recipeIngredients.some(
          (recipeIngredient) => recipeIngredient.toLowerCase() === ingredient
        )
      )
    );

    return foundRecipes.length > 0 ? foundRecipes : null;
  }
}

export default RecipeBook;
