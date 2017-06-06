var ingredient = require('./src/ingredient');

// program in terms of ingredient language.

var pepper = ingredient.create("pepper", 40)

var dicedPepper = pepper.transform("diced pepper", 40, "dice the pepper")

var onion = ingredient.create("onion", 20)

var choppedOnion = onion.transform("chopped " + onion.name, 20, "chop the " + onion.name)

var mixOnionPepper = choppedOnion.combine(dicedPepper, (ing1Name, ing2Name) => {
  return {
    name: ["mixed", ing1Name, "and", ing2Name].join(' '),
    action: ["mix", ing1Name, "and", ing2Name].join(' ')
  };
});

var potato = ingredient.create("potato", 300);

var boiledPotato = potato.transform("boiled potatoes", 300, "boil the potatoes")

var boiledChoppedPotato = boiledPotato.transform("chopped boiled potatoes", 300, "chop the boiled potatoes");

var salad = boiledChoppedPotato.combine(mixOnionPepper, (ing1Name, ing2Name) => {
  return {
    name: ["mixed", ing1Name, "and", ing2Name].join(' '),
    action: ["add", ing2Name, "to", ing1Name].join(' ')
  }
});


salad.printHistory();
