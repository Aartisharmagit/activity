let background = document.createElement("div");


 background.style.backgroundColor = "pink";
 background.style.backgroundSize = "cover";
 background.style.height = "100vh";

 document.body.appendChild(background);

 let heading = document.createElement("h1");
 heading.innerText = "Chat";
 heading.style.color = "black";
 heading.style.backgroundColor = "#323f4b";
 heading.style.textAlign = "center";
 heading.style.fontFamily = "Roboto";
 heading.style.fontWeight = "bold";
 heading.style.padding = "14px";

 background.appendChild(heading);

 let whole = document.createElement("div");
 whole.style.padding = "14px";
 whole.style.backgroundColor= "white";
 whole.style.fontFamily = "Roboto";
 whole.style.fontSize = "20px";

 background.appendChild(whole);

let sent = document.createElement("p");
sent.innerText = "Hello, How are you?";
sent.style.backgroundColor = "#52606d"
sent.style.color ="red";
sent.style.borderTopLeftRadius = "12px";
sent.style.borderTopRightRadius = "12px";
sent.style.bottomRightRadius = "12px"
sent.style.textAlign = "left";

whole.appendChild(sent);

let rec = document.createElement("p");
rec.innerText = "Hi Vivan, I am good. How are you?";
rec.style.backgroundColor = "#47a3f3"
rec.style.color ="red";
rec.style.borderTopLeftRadius = "12px";
rec.style.borderTopRightRadius = "12px";
rec.style.bottomRightRadius = "12px"
rec.style.textAlign = "right";

whole.appendChild(rec);











 
