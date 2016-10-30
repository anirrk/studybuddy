  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBbTExLgdccC2Deepx8zuL2gvsCWjCo7E8",
    authDomain: "study-buddy-118f5.firebaseapp.com",
    databaseURL: "https://study-buddy-118f5.firebaseio.com",
    storageBucket: "study-buddy-118f5.appspot.com",
    messagingSenderId: "409135008457"
  };
  firebase.initializeApp(config);
  
  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();
  
  // Create a storage reference from our storage service
  var storageRef = storage.ref();

  