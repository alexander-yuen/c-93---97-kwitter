
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
    document.getElementById("username").innerHTML = "Welcome "+username+" !";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
    
        window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}