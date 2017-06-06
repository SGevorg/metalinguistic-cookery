var ingredient = module.exports = {}

// Ingredient is a primitive type in the language of cooking we are trying to build.
// It is also a language by itself to specify any cooking program by using only ingredient as
// means of combination, abstraction and the trivial type.

// Means of abstraction is the one used in javascript (assigning name to any variable)

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

  // print the recipe of the cooked meal.
  // For demonstration purposes.  
  printHistory() {
    this.history.forEach(step => step.printHistory());
    console.log("%s: %s grams", this.actionDescription, this.quantity);
  }

  // the main generic operation on ingredient.
  // Will return new ingredient thus making ingredient an immutable type.
  transform(newIngName, newQty, actionDesc) {
    var currentClone = new Ingredient(this.name, this.quantity, [], this.actionDescription)
    return new Ingredient(
      newIngName,
      newQty,
      this.history.concat([currentClone]),
      actionDesc
    );
  }

  // Means of combination for ingredients.
  combine(newIng, combineBy) {
    var combinationIngName = combineBy(this.name, newIng.name); 
    return  new Ingredient(
      combinationIngName.name,
      this.quantity + newIng.quantity,
      [this].concat([newIng]),
      combinationIngName.action);
  }
}
