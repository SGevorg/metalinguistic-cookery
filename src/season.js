var seasoner = module.exports = {}

seasoner.rub = function (ing, seasoning) {
  return seasoningTransform("rubbed", "rub", ing, seasoning);
};

seasoner.sprinkle = function (ing, seasoning) {
  return seasoningTransform("sprinkled", "sprinkle", ing, seasoning);
};

function seasoningTransform(state, action, ing, seasoning) {
  return ing.combine(seasoning, (ing1Name, ing2Name) => {
    return {
      name: [ing1Name, state, , "with", ing2Name].join(" "),
      action: [action, ing1Name, "with", ing2Name].join(" ")
    }
  });
}
