var data;
fetch('./command.json')
.then(res=>res.json())
.then(res=>data=res)
.catch((err)=>{console.log(err)});

//reply function

function displayMessage(command){
  
  var newDiv = document.createElement("div");
  newDiv.className = "chat-bubble";
  var newImg = document.createElement("img");
  newImg.className = "bot image";
  var newP = document.createElement("p");
    if(data[command]!=undefined){
        newP.textContent=data[command];
    }
    else{
        newP.textContent="I'm sorry, I don't have the answer to that. Can you please ask me something else?";
    }
  newDiv.appendChild(newImg)
  newDiv.appendChild(newP);
  
  
  var messages = document.getElementById("chat-contents");
  messages.appendChild(newDiv);
}

function arrowSubmit(){
  console.log("here")
  button = document.getElementById("submit-chat");
  text = document.getElementById("chat-message-value");
  if( text.value != ""){
    button.classList = "active";
  }else{
    button.classList.remove("active");
  }
}

function submitMessage(){
  var text = document.getElementById("chat-message-value").value;
  if(text == ""){
    return
  }
  document.getElementById("chat-message-value").value = "";
  
  var newDiv = document.createElement("div");
  newDiv.className = "chat-bubble";
  var newImg = document.createElement("img");
  newImg.className = "user image";
  var newP = document.createElement("p");
  newP.innerHTML = text;
  newDiv.appendChild(newImg);
  newDiv.appendChild(newP);
  
  var messages = document.getElementById("chat-contents");
  messages.appendChild(newDiv);
  document.getElementById("submit-chat").classList.remove("active");
  setTimeout(function(){displayMessage(document.getElementById("chat-message-value").value)}, 1000);

}

function addHandlers(){
  document.getElementById("submit-chat").addEventListener("click", submitMessage);
  document.onkeypress = function (e){
    if( e.keyCode == 13 ){
      document.getElementById("submit-chat").click();
    }
  };
  setTimeout(function(){displayMessage(document.getElementById("chat-message-value").value)}, 1500);
  document.getElementById("chat-message-value").addEventListener("input", arrowSubmit);
}

window.addEventListener("load", addHandlers);
