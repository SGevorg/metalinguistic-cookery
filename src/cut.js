var cutter = module.exports = {}

cutter.slice = function (ingredient) {
  return cutTransform("sliced", "slice", ingredient);
};

cutter.dice = function (ingredient) {
  return cutTransform("diced", "dice", ingredient);
};

cutter.chop = function (ingredient) {
  return cutTransform("chopped", "chop", ingredient);
};

function cutTransform(state, action, ingredient) {
  return ingredient.transform(
    [state, ingredient.name].join(" "),
    ingredient.quantity,
    [action, ingredient.name].join(" ")
  );
}
