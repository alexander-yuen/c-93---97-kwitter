//YOUR FIREBASE LINKSs
var firebaseConfig = {
      apiKey: "AIzaSyCR2O8lyzqrobxbhrDqIC7RzJlt_PbDkpM",
      authDomain: "kwitter-b414c.firebaseapp.com",
      databaseURL: "https://kwitter-b414c-default-rtdb.firebaseio.com",
      projectId: "kwitter-b414c",
      storageBucket: "kwitter-b414c.appspot.com",
      messagingSenderId: "585566622407",
      appId: "1:585566622407:web:60852abe6f3b2f0225a4e2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    username = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");
    
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
      }