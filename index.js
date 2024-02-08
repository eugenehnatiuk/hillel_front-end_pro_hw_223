import Recipe from "./recipe";
import RecipeBook from "./recipeBook";

const recipe1 = new Recipe(
  'Швидка вечеря',
  ['Курина грудка', 'Брокколі', 'Паста', 'Соєвий соус', 'Часник'],
  'Пожар курку на сковороді з часником. Додай брокколі та соєвий соус. Вари пасту паралельно.Змішай всі інгредієнти. Готово!',
  30
);
// console.log(Recipe.isValid(recipe1));

const recipe2 = new Recipe(
  'Картопля по-селянськи',
  ['Картопля', 'Цибуля', 'Розмарин', 'Оливкова олія'],
  'Поріж картоплю кубиками та цибулю півкільцями. Пожар на сковороді з розмарином та оливковою олією. Пекти в духовці 60 хвилин при 180°C. Готово!',
  60
);
// console.log(Recipe.isValid(recipe2));

const recipe3 = new Recipe(
  'Каррі з куркою та картоплею',
  ['Куряча грудка', 'Картопля', 'Кокосове молоко', 'Каррі-паста'],
  'Пожар курку та картоплю у каррі-пасті. Додай кокосове молоко. Тушити під кришкою 45 хвилин. Готово!',
  60
);
// console.log(Recipe.isValid(recipe3));

const recipe4 = new Recipe(
  'Овочевий гуляш',
  ['Яловичина', 'Картопля', 'Морква', 'Цибуля', 'Томатний соус'],
  "Пожар м'ясо з цибулею. Додай моркву, картоплю та томатний соус. Тушити під кришкою 2 години",
  120
);
// console.log(Recipe.isValid(recipe4));

const recipe5 = new Recipe(
  'Овочевий гуляш',
  ['Картопля', 'Морква', 'Цибуля', 'Томатний соус'],
  120
);
// console.log(Recipe.isValid(recipe5));

const traditionalRecipe = new RecipeBook();

traditionalRecipe.writeDownRecipe(
  recipe1,
  recipe2,
  recipe3,
  // 'invalid',
  recipe4,
  // recipe5
);

traditionalRecipe.recipes;
console.log(traditionalRecipe.getRecipeByTime(60));
// console.log(traditionalRecipe.getRecipeByTime('а'));
console.log(traditionalRecipe.getRecipeByIngredients('картопля', 'морква', 'ffff'));
