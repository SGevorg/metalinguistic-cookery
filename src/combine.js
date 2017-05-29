var combiner = module.exports = {}

/*
  Combine is the means of combination for the ingredients of the food.
  Ingredients can be combined in different ways:
  1. 

*/

combiner.mix = function (ingredient1, ingredient2) {
  var name = [
    ingredient1.name,
    'mix with',
    ingredient2.name].join(' ')  
  return {
    name: name,
    quantity: ingredient1.quantity + ingredient2.quantity,
    steps: ingredient1.steps.concat(ingredient2.steps).concat(name)
  };
}

combiner.stack = function (ingredient1, ingredient2) {
  var name = [
    'stack',
    ingredient1.name,
    'with',
    ingredient2.name].join(' ')
  return {
    name: name,
    quantity: ingredient1.quantity + ingredient2.quantity,
    steps: ingredient.steps.concat(ingredient2.steps).concat(name)
  };
}
