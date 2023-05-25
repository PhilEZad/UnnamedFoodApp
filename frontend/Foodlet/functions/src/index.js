import * as firebaseFunctions from "firebase-functions";
import firebaseAdmin from "firebase-admin";
firebaseAdmin.initializeApp();

export const test = firebaseFunctions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("Hello from Firebase!");
});

// function to create a user in the database
// this function is called by the onCreateUserAuto function
// and by the frontend when a user is created
export const onCreateUser = firebaseFunctions.https.onCall(
  async (data, context) => {
    context.rawRequest.headers["Access-Control-Allow-Origin"] = "*";
    const obj = JSON.parse(data);

    firebaseFunctions.logger.log(obj);

    return await firebaseAdmin
      .firestore()
      .collection("users")
      .doc(obj)
      .set({ email: obj.email });
  }
);
