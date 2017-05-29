var seasoner = module.exports = {}

seasoner.rub = function (ing, seasoning) {
  var name = [
    'rub',
    ing.name,
    'with',
    seasoning.name
  ].join(' ');
  return {
    name: name,
    quantity: ing.quantity + seasoning.quantity,
    steps: ing.steps.concat(seasoning.steps).concat(name)
  };
};

seasoner.sprinkle = function (ing, seasoning) {
  var name = [
    'sprinkle',
    ing.name,
    'with',
    seasoning.name
  ].join(' ');
  
  return {
    name: name,
    quantity: ing.quantity + seasoning.quantity,
    steps: ing.steps.concat(seasoning.steps).concat(name)
  };
};
