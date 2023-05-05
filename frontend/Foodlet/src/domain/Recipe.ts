export class Recipe {

  id: string = ""
  title: string = ""
  ingredients: FoodItem[] = [] // for calculation
  rawIngredients: string[] = [] // for display due to ingridents like "1 Ripe mango (1 lb), halved,|Pitted peeled & cut in small|Pieces|
  servings: string = ""
  instructions: string[] = []

  static fromJSON(json: any): Recipe {
    let recipe = new Recipe();
    recipe.title = json.title
    recipe.servings = json.servings

    //for each ingridient, foodItem call
    //Assuming the nutrion api call has already been made and is in the json object

    recipe.rawIngredients = json.ingredients.split("")

    recipe.instructions = json.instructions.split(".")

    return recipe
  }

}


interface FoodItem {
  name: string
  calories: number
  servingSizeGrams: number
  totalFatGrams: number
  saturatedFatGrams: number
  proteinGrams: number
  sodiumMg: number
  potassiumMg: number
  cholesterolMg: number
  carbsTotalGrams: number
  fiberGrams: number
  sugarGrams: number

}
