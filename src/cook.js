var cooker = module.exports = {}

cooker.saute = function (ingredient) {
  return cookTransform("sauteed", "saute", ingredient);
};

cooker.heat = function (ingredient) {
  return cookTransform("heated", "heat", ingredient);
};

cooker.roast = function (ingredient) {
  return cookTransform("roasted", "roast", ingredient);
};

cooker.braise = function (ingredient) {
  return cookTransform("braised", "braise", ingredient);
};

cooker.boil = function (ingredient) {
  return cookTransform("boiled", "boil", ingredient);
};

function cookTransform(state, action, ingredient) {
  return ingredient.transform(
    [state, ingredient.name].join(" "),
    ingredient.quantity,
    [action, ingredient.name].join(" ")
  );
}
