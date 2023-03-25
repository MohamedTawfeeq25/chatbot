var data={
    "how old are you?":"As an AI chatbot, I don't have an age like humans do. How may I assist you?",
    "thank you":"You're welcome! Is there anything else I can assist you with?",
    "hi": "Hello! How can I assist you today?",
    "what is your name?": "My name is ChatBOT. How may I assist you?",
    "can you tell me a joke?":"Sure! Why did the scarecrow win an award? Because he was outstanding in his field.",
    "what is the meaning of life?":"The meaning of life is a subjective topic that can vary from person to person. What do you think is the meaning of life?",
    "what can you do?":"I can help you with a variety of tasks, such as finding information, setting reminders, making reservations, and more. What can I assist you with today?",
    "how are you?": "As an AI chatbot, I don't have feelings like humans do. How may I assist you?",
    "what is your favorite color?": "As an AI chatbot, I don't have personal preferences like humans do. How may I assist you?"
    
}
document.addEventListener("keypress",(e)=>{if(e.key=='Enter'){send()}});

function Reply(command){
    var cont=document.getElementById('chatbox');
    var box=document.createElement('div');
    box.setAttribute("id","bcmd");
    var text=document.createElement('div');
    text.setAttribute("id","botc");
    if(data[command]!=undefined){
        text.textContent=data[command];
    }
    else{
        text.textContent="I'm sorry, I don't have the answer to that. Can you please ask me something else?";
    }
    var imgc=document.createElement('div');
    imgc.setAttribute("id","botimg");
    var img=document.createElement('img');
    img.src="./assets/bot.png";
    imgc.appendChild(img);
    box.appendChild(imgc);
    box.appendChild(text);
    cont.appendChild(box);
    var div=document.getElementById('chat');
    div.scrollTop=div.scrollHeight;
    document.getElementById('command').value="";
}
function send(){
    var cmd=document.getElementById("command").value;
    if(cmd!=""){
        var cont=document.getElementById('chatbox');
        var box=document.createElement('div');
        box.setAttribute("id","ucmd");
        var text=document.createElement('div');
        text.setAttribute("id","uc");
        text.textContent=cmd;
        box.appendChild(text);
        cont.appendChild(box);
        
        Reply(cmd)
    }
   else{
       alert('write any command');
   }
}
