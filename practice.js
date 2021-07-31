
var firebaseConfig = {
    apiKey: "AIzaSyDOK4ZOvxxBdhzhPvU-guwynw1yYTnbsrg",
    authDomain: "guess-the-word-b8012.firebaseapp.com",
    databaseURL: "https://guess-the-word-b8012-default-rtdb.firebaseio.com",
    projectId: "guess-the-word-b8012",
    storageBucket: "guess-the-word-b8012.appspot.com",
    messagingSenderId: "1056170007806",
    appId: "1:1056170007806:web:ab89e57402ddd83f4fd9af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      username = document.getElementById("uname").value;
      firebase.database().ref("/").child(username).update({
          purpose: "adding user"
      })
  }