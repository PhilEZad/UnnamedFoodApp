import {Component} from '@angular/core';
import {MealPlan} from 'src/domain/MealPlan';
import {Recipe} from "../../../domain/Recipe";
import {FoodItem} from "../../../domain/FoodItem";
import {Nutrients} from "../../../domain/Nutrients";
import {FoodRestrictionCompatibility} from "../../../domain/EFoodRestrictionCompatibility";

@Component({
  selector: 'app-meal-plan-screen',
  templateUrl: './meal-plan-screen.component.html',
  styleUrls: ['./meal-plan-screen.component.scss']
})
export class MealPlanScreenComponent {

  mealPlan: MealPlan[] = [] //All meal plans for the current user

  //TODO: Get meal plan from database.
  //TODO: Generate meal plan button
  //TODO: Replace meal plan button

  week: Date[] = []  //The dates of the week that is currently being displayed

  mealPlanForWeek: MealPlan[] = []

  currentWeekNumber: number = this.getWeekNumber(new Date()) //The current realtime week number
  weekNumber: number = this.getWeekNumber(new Date()) // The week number of the week that is currently being displayed
  daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  weekHasMealPlan: boolean = false


  constructor() {
    this.week = this.getDaysOfWeek(new Date().getFullYear(), this.weekNumber)
    this.mealPlan = mockMealPlan
    this.mealPlanForWeek = this.findMealPlanForWeek(this.weekNumber)
  }


  findMealPlanForWeek(weekNumber: number): MealPlan[] {
    let mealPlans = this.mealPlan.filter(mealPlan => this.getWeekNumber(mealPlan.date) === weekNumber) //find meal plans for the current week


    if (mealPlans.length == 7) { //if there are 7 meal plans for the week, return them
      this.weekHasMealPlan = true
      return mealPlans
    }
    else if (mealPlans.length > 7) { //if there are more than 7 meal plans for the week, return the first 7
      this.weekHasMealPlan = true
      return mealPlans.slice(0, 7)
    }
    else if (mealPlans.length === 0) { //if there are no meal plans for the week, return an empty array
      this.weekHasMealPlan = false
      return []
    }
    else { //else find the missing days
      let missingDays: Date[] = []
      this.getDaysOfWeek(new Date().getFullYear(), weekNumber).forEach(day => {
        if (!mealPlans.find(mealPlan => mealPlan.date.getDay() === day.getDay())) {
          missingDays.push(day)
        }
      })

      missingDays.map(day => {
        let mealPlan = {
          id: "-1",
          recipe: Recipe.emptyRecipe(), //sentinel value
          date: day,
        } as MealPlan

        mealPlans.push(mealPlan)
      })
      this.weekHasMealPlan = true
      return mealPlans
    }
  }

  /**
   * Returns the week number for a given date
   * @param date
   */
  getWeekNumber(date: Date){
    let tdt = new Date(date.valueOf()); //prevent mutation of original date
    let day = (date.getDay() + 6) % 7; //+6 to start the week on Monday instead of Sunday

    tdt.setDate(tdt.getDate() - day + 3); //get closest Thursday: current date + 3 - current day number
    let firstThursday = tdt.valueOf(); //store result in variable
    tdt.setMonth(0, 1); //set month to January

    if (tdt.getDay() !== 4)  //not Thursday? get next Thursday
    {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }

    return 1 + Math.ceil((firstThursday - tdt.valueOf()) / 604800000); //1 + number of weeks
  };

  /**
   * Returns an array of dates for a given week number and year
   */
  getDaysOfWeek(year: number, weekNumber: number): Date[] {
    let simple = new Date(year, 0, 1 + (weekNumber - 1) * 7); // 1st of January + 7 days for each week
    let dow = simple.getDay(); // Day of week: Sunday = 0, Monday = 1, etc.
    let ISOweekStart = simple; // Start of ISO week

    let days: Date[] = []

    if (dow <= 4) // Calculate the Thursday of the current week
      ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1); // 1st day is the day of the month - the day of the week
    else
      ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay()); // 1st day is the day of the month + 8 - the day of the week

    for (let i = 0; i < 7; i++) {
      days.push(new Date(ISOweekStart.valueOf() + i * 86400000)) // 86400000 = 1 day in milliseconds
    }

    return days
  }

  nextWeek() {
    this.weekNumber++
    this.week.forEach(day => {
      day.setDate(day.getDate() + 7)
    })
    this.mealPlanForWeek = this.findMealPlanForWeek(this.weekNumber)
  }

  previousWeek() {
    this.weekNumber--
    this.week.forEach(day => {
      day.setDate(day.getDate() - 7)
    })
    this.mealPlanForWeek = this.findMealPlanForWeek(this.weekNumber)
  }



  generateMealPlan() {

  }

  createEmptyMealPlan() {
    let days: Date[] = this.getDaysOfWeek(new Date().getFullYear(), this.weekNumber)

    days.forEach(day => {
      let mealPlanDay = {
        id: "-1",
        recipe: Recipe.emptyRecipe(), //sentinel value
        date: day,
      } as MealPlan

      this.mealPlan.push(mealPlanDay)
    });

    this.mealPlanForWeek = this.findMealPlanForWeek(this.weekNumber)
  }

  dayHasARecipe(mealPlanDays: MealPlan): boolean {
    return mealPlanDays.recipe.title !== ""
  }

  setRecipeForMealPlanDay(mealPlanDays: MealPlan) {

  }
}


const mockMealPlan: MealPlan[] = [
  {
    id: "ID",
    date: new Date(2023, 4, 22),
    recipe: Recipe.fullRecipe("ID", "Pork and Rice", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    )
  },
  {
    id: "ID",
    date: new Date(2023, 4, 23),
    recipe: Recipe.fullRecipe("ID", "Recipe Pork and Rice", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    )
  },
  {
    id: "ID",
    date: new Date(2023, 4, 24),
    recipe: Recipe.fullRecipe("ID", "Pork and Rice Name", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    )
  },
  {
    id: "ID",
    date: new Date(2023, 4, 25),
    recipe: Recipe.fullRecipe("ID", "RecipePork and Rice Name", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    )
  },
  {
    id: "ID",
    date: new Date(2023, 4, 26),
    recipe: Recipe.fullRecipe("ID", "Recipe NamePork and Rice", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    )
  },
  {
    id: "ID",
    date: new Date(2023, 4, 27),
    recipe: Recipe.fullRecipe("ID", "Pork and RiceRecipe Name", "A very distinct and unique description of a delicious recipe",
      [
        new FoodItem("Pork Sirloin", 400, "Meat",
          new Nutrients(192, 26, 8.8, 2.8, 0, 0)),
        new FoodItem("Rice", 200, "Grain", new Nutrients(250, 4, 1.52, 0, 0, 120)),
      ], 4,
      ["Step 1", "Step 2", "Step 3", "Step 4"],
      [FoodRestrictionCompatibility.DAIRY_FREE, FoodRestrictionCompatibility.GLUTEN_FREE, FoodRestrictionCompatibility.VEGAN, FoodRestrictionCompatibility.VEGETARIAN],
      new Date()
    )
  },
]

