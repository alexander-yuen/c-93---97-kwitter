function addUser(){
  username = document.getElementById("Username").value; 
  localStorage.setItem("username", username);
  window.location = "kwitter_room.html";
}