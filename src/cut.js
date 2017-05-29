var cutter = module.exports = {}

cutter.slice = function (ingredient) {
  var name = [
    'slice',
    ingredient.name
  ].join(' ')
  return {
    name: name,
    quantity: ingredient.quantity,
    steps: ingredient.steps.concat(name)
  }
};

cutter.dice = function (ingredient) {
  var name = [
    'dice',
    ingredient.name
  ].join(' ')
  return {
    name: name,
    quantity: ingredient.quantity,
    steps: ingredient.steps.concat(name)
  }
};

cutter.chop = function (ingredient) {
  var name = [
    'chop',
    ingredient.name
  ].join(' ')
  return {
    name: name,
    quantity: ingredient.quantity,
    steps: ingredient.steps.concat(name)
  }
};
