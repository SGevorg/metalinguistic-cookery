var combiner = module.exports = {}

/*
  Layer on top of ingredients to abstract the process of mixing the ingredients with each other.
  This layer provides the necessary language to express the mixing of ingredients
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
