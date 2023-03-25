var data;
fetch('./command.json')
.then(res=>res.json())
.then(res=>data=res)
.catch((err)=>{console.log(err)});
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
