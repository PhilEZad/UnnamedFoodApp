import { Component } from '@angular/core';
import {Recipe} from "../../../domain/Recipe";

@Component({
  selector: 'app-meal-plan-screen',
  templateUrl: './meal-plan-screen.component.html',
  styleUrls: ['./meal-plan-screen.component.scss']
})
export class MealPlanScreenComponent {

  meals: Recipe[] = []

  week: Date[] = []

  currentWeekNumber: number = this.getWeekNumber(new Date())
  weekNumber: number = this.getWeekNumber(new Date())

  daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


  constructor() {
    this.week = this.getDaysOfWeek(new Date().getFullYear(), this.weekNumber)
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
    this.week = this.getDaysOfWeek(new Date().getFullYear(), this.weekNumber)
  }

  previousWeek() {
    this.weekNumber--
    this.week = this.getDaysOfWeek(new Date().getFullYear(), this.weekNumber)
  }


}

