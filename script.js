document.addEventListener("keypress",(e)=>{if(e.key=='Enter'){send()}});

function Reply(){
    var cont=document.getElementById('chatbox');
    var box=document.createElement('div');
    box.setAttribute("id","bcmd");
    var text=document.createElement('div');
    text.setAttribute("id","botc");
    text.textContent="Hello";
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
        Reply()
    }
   else{
       alert('write any command');
   }
}
