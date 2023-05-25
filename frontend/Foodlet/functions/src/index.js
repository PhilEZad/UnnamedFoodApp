import { https, logger } from "firebase-functions";
import firebaseAdmin from "firebase-admin";
import { forEach, random } from "lodash";
firebaseAdmin.initializeApp();

export const test = https.onCall((data, context) => {
  logger.log("Hello from Firebase!");
});

// function to create a user in the database
// this function is called by the onCreateUserAuto function
// and by the frontend when a user is created
export const onCreateUser = https.onCall((data, context) => {
  const obj = JSON.parse(data);

  logger.log(obj);

  return firebaseAdmin
    .firestore()
    .collection("users")
    .doc(obj)
    .set({ email: obj.email });
});

/*
  obj = {
    
  }
*/
export const generateMealPlan = https.onCall((data, context) => {
  const obj = JSON.parse(data);

  recipes = firebaseAdmin
    .firestore()
    .collection(`users/${context.auth.uid}/recipes`)
    .where((x) => x.calories < obj.calories);

  forEach(obj.dates, (date) => {
    const index = random(0, recipes.length);
    const recipe = recipes[index];
    firebaseAdmin
      .firestore()
      .collection(`users/${context.auth.uid}/plan`)
      .add({
        date: new Date(date),
        recipe: recipe,
      });
  });
});
