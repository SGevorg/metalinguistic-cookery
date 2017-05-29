var cooker = module.exports = {}

cooker.saute = function (ingredient) {
  var name = [
    'saute the',
    ingredient.name
  ].join(' ')
  return {
    name: name,
    quantity: ingredient.quantity,
    steps: ingredient.steps.concat(name)
  }
}

cooker.heat = function (ingredient) {
  var name = [
    'heat the',
    ingredient.name
  ].join(' ')
  return {
    name: name,
    quantity: ingredient.quantity,
    steps: ingredient.steps.concat(name)
  }
}

cooker.roast = function (ingredient) {
  var name = [
    'roast the',
    ingredient.name
  ].join(' ')
  return {
    name: name,
    quantity: ingredient.quantity,
    steps: ingredient.steps.concat(name)
  }
}

cooker.braise = function (ingredient) {
  var name = [
    'braise the',
    ingredient.name
  ].join(' ')
  return {
    name: name,
    quantity: ingredient.quantity,
    steps: ingredient.steps.concat(name)
  }
}

cooker.boil = function (ingredient) {
  var name = [
    'boil the',
    ingredient.name
  ].join(' ')
  return {
    name: name,
    quantity: ingredient.quantity,
    steps: ingredient.steps.concat(name)
  }
}
