
import data from './command';
import { Dyear, Time } from './modules/date.js';



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
    else{
        if(command.slice(0,10)=='capital of'){
            if(data.state_capital.commands[command.slice(11,command.length)]!=undefined){
                text.textContent=data.state_capital.commands[command.slice(11,command.length)];
            }
            else{
                text.textContent="the state is not found";
            }
        }
        else{
            for(let cmd in data.basic_command){
                let pattern=new RegExp(data.basic_command[cmd].pattern,"i");
                if(pattern.test(command)){
                    text.textContent=data.basic_command[cmd].reply[Math.floor(Math.random()*data.basic_command[cmd].reply.length)];                  
                    break;
                }
                else{
                    console.log(pattern.test(command))
                }
            
            }
        }
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
document.addEventListener("keypress",(e)=>{if(e.key=='Enter'){send()}});
document.getElementById("send").addEventListener("click",()=>{send()});