import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

export const config = {
  apiKey: 'AIzaSyC4VwRsZVj0u6Pgsbcsbp6AoXIRI-YIfP4',
  authDomain: 'foodlet-a2c4b.firebaseapp.com',
  projectId: 'foodlet-a2c4b',
  storageBucket: 'foodlet-a2c4b.appspot.com',
  messagingSenderId: '574930730941',
  appId: '1:574930730941:web:91fc718b51af7c0fc5dcd4',
  measurementId: 'G-92WP0BYW85',
};

export class FirebaseStatic {
  private static app: firebase.app.App;
  private static init: boolean = false;

  private static initApp() {
    if (!this.init) {
      this.init = true; // prevent multiple initializations
      this.app = firebase.initializeApp(config);

      this.auth().useEmulator('http://localhost:9099');
      this.firestore().useEmulator('localhost', 8080);
      this.functions().useEmulator('localhost', 9199);
    }
  }

  static auth(): firebase.auth.Auth {
    if (!this.init) {
      this.initApp();
    }
    return firebase.auth(this.app);
  }

  static functions(): firebase.functions.Functions {
    if (!this.init) {
      this.initApp();
    }
    return firebase.functions(this.app);
  }
  static firestore(): firebase.firestore.Firestore {
    if (!this.init) {
      this.initApp();
    }
    return firebase.firestore(this.app);
  }

  currentlySignedInUserAvatarURL: string =
    'https://wbi.net.au/wp-content/uploads/2019/04/person-icon-silhouette-png-12-1-e1555982192147.png';

  baseUrl: string = 'http://127.0.0.1:5001/fstack23/us-central1/api/';

  private constructor() {}
}
