function addUser(){
    
    username = document.getElementById("username").value;
    if(username == "")
    {
        document.getElementById("username").placeholder = 'Enter username !'
    }
    else
    {
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
    }
}