import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyC4VwRsZVj0u6Pgsbcsbp6AoXIRI-YIfP4",
    authDomain: "foodlet-a2c4b.firebaseapp.com",
    projectId: "foodlet-a2c4b",
    storageBucket: "foodlet-a2c4b.appspot.com",
    messagingSenderId: "574930730941",
    appId: "1:574930730941:web:91fc718b51af7c0fc5dcd4",
    measurementId: "G-92WP0BYW85"
};


export class FireService {

    firebaseApplication;
    firestore: firebase.firestore.Firestore;
    storage: firebase.storage.Storage;

    constructor() {
        this.firebaseApplication = firebase.initializeApp(firebaseConfig);
        this.firestore = firebase.firestore();
        this.storage = firebase.storage();
    }

    writeData(collectionName: string, data: any) {
        return this.firestore.collection(collectionName).doc().set(data);
    }

    writeMany(collectionName: string, data: any[]) {
        const batch = this.firestore.batch();
        data.forEach((d) => {
            const ref = this.firestore.collection(collectionName).doc();
            batch.set(ref, d);
        });
        return batch.commit();
    }
}