
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB_DhEnXphJyYwBBJHwppwTkACAYywczFI",
      authDomain: "whitey-d945b.firebaseapp.com",
      databaseURL: "https://whitey-d945b-default-rtdb.firebaseio.com",
      projectId: "whitey-d945b",
      storageBucket: "whitey-d945b.appspot.com",
      messagingSenderId: "608037764836",
      appId: "1:608037764836:web:7ca8052be4c590f4f9f6f1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("name_of_user")
     document.getElementById("users_name").innerHTML="Welcome "+user_name+" !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='go_to_room(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function addroomer(){
      room_name=document.getElementById("The_id_of_input").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding a new room"
      })
      localStorage.setItem("room_name",room_name);
      window.location="index (2).html";
}
function go_to_room(name1){
      localStorage.setItem("room_name",name1);
      window.location="index (2).html";
}
function loggorout(){
      localStorage.removeItem("name_of_user");
      localStorage.removeItem("room_name");
      window.location="index.html"
}