import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{

    constructor() {
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyADkEdqyMBrABxq8LtAM7ZTBePcjhOhuIU",
        authDomain: "blogs-69b41.firebaseapp.com",
        databaseURL: "https://blogs-69b41.firebaseio.com",
        projectId: "blogs-69b41",
        storageBucket: "blogs-69b41.appspot.com",
        messagingSenderId: "554096457959",
        appId: "1:554096457959:web:7e2cf470b19229a2084a42"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    }

}
