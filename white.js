function add_user(){
    User_name=document.getElementById("user_nameee").value;
    localStorage.setItem("name_of_user",User_name);
    window.location="whiteboard_room.html";
}