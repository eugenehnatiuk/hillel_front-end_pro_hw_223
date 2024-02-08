
class Recipe {
  constructor(title, ingredients, description, time) {
    this.recipeTitle = title;
    this.recipeIngredients = ingredients;
    this.recipeDescription = description;
    this.cookingTime = time;
  }

  static isValid = ({
    recipeTitle,
    recipeIngredients,
    recipeDescription,
    cookingTime,
  }) =>
    typeof recipeTitle === 'string' &&
    recipeTitle.trim() &&
    Array.isArray(recipeIngredients) &&
    recipeIngredients.length > 0 &&
    recipeIngredients.every((el) => typeof el === 'string' && el.trim()) &&
    typeof recipeDescription === 'string' &&
    recipeDescription.trim() &&
    typeof cookingTime === 'number' &&
    cookingTime
      ? true
      : false;
}
export default Recipe; 
