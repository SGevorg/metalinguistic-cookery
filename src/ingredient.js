var ingredient = module.exports = {}

// Ingredient is a primitive in the food language.
// Ingredients are immutable objecsts, they can be transformed to othe ingredients.
// Ingredients are not dealt with directly as a language specicific design decision.

ingredient.create = function (name, quantity) {
  return {
    name: name,
    quantity: quantity,
    steps: []
  };
}
