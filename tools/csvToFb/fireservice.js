"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireService = void 0;
var app_1 = require("firebase/compat/app");
require("firebase/compat/firestore");
require("firebase/compat/auth");
require("firebase/compat/storage");
var firebaseConfig = {
    apiKey: "AIzaSyC4VwRsZVj0u6Pgsbcsbp6AoXIRI-YIfP4",
    authDomain: "foodlet-a2c4b.firebaseapp.com",
    projectId: "foodlet-a2c4b",
    storageBucket: "foodlet-a2c4b.appspot.com",
    messagingSenderId: "574930730941",
    appId: "1:574930730941:web:91fc718b51af7c0fc5dcd4",
    measurementId: "G-92WP0BYW85"
};
var FireService = /** @class */ (function () {
    function FireService() {
        this.firebaseApplication = app_1.default.initializeApp(firebaseConfig);
        this.firestore = app_1.default.firestore();
        this.storage = app_1.default.storage();
    }
    FireService.prototype.writeData = function (collectionName, data) {
        return this.firestore.collection(collectionName).doc().set(data);
    };
    return FireService;
}());
exports.FireService = FireService;
