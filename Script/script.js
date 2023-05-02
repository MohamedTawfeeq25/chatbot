var data;
import da from './command.json';
import { Dyear, Time } from './modules/date.js';
console.log(Dyear());
console.log(Time());
data=da;
document.addEventListener("keypress",(e)=>{if(e.key=='Enter'){send()}});

function Reply(command){
    if(command=="clear"){
        document.getElementById('chatbox').innerHTML="";
    }
 
    else{
    var cont=document.getElementById('chatbox');
    var box=document.createElement('div');
    box.setAttribute("id","bcmd");
    var text=document.createElement('div');
    text.setAttribute("id","botc");
    if(command.slice(0,7)=="execute"){
        var ex="";
        for(var i=8;i<command.length;i++){
            ex+=command[i];
        }
        text.textContent = eval(ex);
    }
    else if(command=="time"){
        text.textContent=Time();
    }
    else if(command=="date"){
        text.textContent=Dyear();
    }
    else if(data[command]!=undefined){
        text.textContent=data[command];
    }
    else{
        text.textContent="I'm sorry, I don't have the answer to that. Can you please ask me something else?";
    }
   
    box.appendChild(text);
    cont.appendChild(box);
    var div=document.getElementById('chat');
    div.scrollTop=div.scrollHeight;
    }
    document.getElementById('command').value="";
}
function send(){
    var cd=document.getElementById("command").value;
    var cmd=cd.toLowerCase();
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
