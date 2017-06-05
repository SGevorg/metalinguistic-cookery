var ingredient = require('./src/ingredient');
var combiner = require('./src/combine');
var seasoner = require('./src/season');
var cook = require('./src/cook');
var cut = require('./src/cut') 

var potato = ingredient.create('potatoes', 300);
var salt = ingredient.create('salt', 10);
var rosemary = ingredient.create('rosemary', 2);
var oil = ingredient.create('oil', 50);

var heatedOil = cook.heat(oil)
var combinedPotatoes = combiner.mix(heatedOil, potato)
var saltedPotatoes = seasoner.sprinkle(combinedPotatoes, salt)


saltedPotatoes.printHistory()
