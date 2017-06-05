var ingredient = module.exports = {}

// Ingredient is a primitive in the food language.
// Ingredients are immutable objecsts, they can be transformed to othe ingredients.
// Ingredients are not dealt with directly as a language specicific design decision.


ingredient.create = function (name, quantity) {
  return new Ingredient(name, quantity)
}

class Ingredient {
  constructor(ingName, qty, history, ingAction) {
    this.name = ingName;
    this.actionDescription = ingAction || ingName;
    this.quantity = qty;
    this.history = history || [];
  }
  
  printHistory() {
    this.history.forEach(step => step.printHistory());
    console.log("%s: %s grams", this.actionDescription, this.quantity);
  }

  transform(newIngName, newQty, actionDesc) {
    var currentClone = new Ingredient(this.name, this.quantity, [], this.actionDescription)
    return new Ingredient(
      newIngName,
      newQty,
      this.history.concat([currentClone]),
      actionDesc
    );
  }

  combine(newIng, combineBy) {
    var combinationIngName = combineBy(this.name, newIng.name); 
    return  new Ingredient(
      combinationIngName.name,
      this.quantity + newIng.quantity,
      [this].concat([newIng]),
      combinationIngName.action);
  }
}
