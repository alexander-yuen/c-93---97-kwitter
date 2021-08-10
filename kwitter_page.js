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
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_width_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
msg_tag = "<h4 class='message_h4'>"+message+"</h4>";
//like_button = "<button class='btn btn-warning' id="+ firebase_message_id +"value="+like+"onclick=updatedLike(this.id)> ";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatedLike(this.id)'>";

span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_width_tag + msg_tag+like_button + span_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updatedLike(message_id)
{
      console.log("clicked on the like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) +1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
      }