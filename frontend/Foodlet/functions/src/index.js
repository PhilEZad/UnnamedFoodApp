
// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// eslint-disable-next-line @typescript-eslint/no-var-requires
const functions = require("firebase-functions");

exports.userRecordOnRegister = functions.auth
  .user()
  .onCreate((user, context) => {
    functions.logger.log(user);
  });
