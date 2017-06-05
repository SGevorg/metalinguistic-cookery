var combiner = module.exports = {}

/*
  Combine is the means of combination for the ingredients of the food.
  Ingredients can be combined in different ways:
  1. 

*/

combiner.mix = function (ing1, ing2) {
  return ing1.combine(ing2, (ing1Name, ing2Name) => {
    return {
      name: ["mixed", ing1Name, "and", ing2Name].join(" "),
      action: ["mix", ing1Name, "and", ing2Name].join(" ")
    }
  });
}

combiner.stack = function (ing1, ing2) {
  return ing1.combine(ing2, (ing1Name, ing2Name) => {
    return {
      name: ["stacked", ing2Name, "on", ing1Name].join(" "),
      action: ["stack", ing2Name, "on", ing1Name].join(" ")
    }
  });
}
