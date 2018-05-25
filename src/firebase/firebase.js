  import * as firebase from 'firebase';
  
  var config = {
    apiKey: "AIzaSyC6pD81J-sPJqcyvnO5G7oPreTMJp2KTWw",
    authDomain: "fb-react-a42ef.firebaseapp.com",
    databaseURL: "https://fb-react-a42ef.firebaseio.com",
    projectId: "fb-react-a42ef",
    storageBucket: "fb-react-a42ef.appspot.com",
    messagingSenderId: "1013064008612"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth,
  };