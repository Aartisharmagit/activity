let div = document.createElement("div");
document.body.appendChild(div);

div.style.backgroundImage = "url('https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=1380&t=st=1705589139~exp=1705589739~hmac=bf9e192e8095ceb6b0a426d7b81a0d08eae620dade1c54099a7304bc0510370a')";
div.style.backgroundSize = "cover";
div.style.backgroundPosition = "center";
div.style.height = "950px";
div.style.width = "100%";
div.style.display = "flex";
div.style.flexDirection = "column"; 
div.style.alignItems = "center";
div.style.justifyContent = "center";


let heading = document.createElement("h1");
heading.innerText = "Todolist";
heading.style.color = "black";
div.appendChild(heading);


let para = document.createElement("p");
para.innerText = "Each day I will accomplish one thing on my todo list.";
para.style.color = "black";
para.style.fontSize = "20px";
div.appendChild(para);

let heading1 = document.createElement("h4");
heading1.innerText = "Read Book"
// heading1.style.fontWeight = "bold";

div.appendChild(heading1);

let bigpara = document.createElement("p")
bigpara.innerText = "I don't think that the human race will survive the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I'm an optimist..."
bigpara.style.color = "black";
div.appendChild(bigpara);

//  let div1 = documement.createElement("div");

let btn = document.createElement("button");
btn.innerText = "Start"
btn.style.backgroundColor = "orange";
btn.style.color = "white";
btn.style.textAlign = "center";

div.appendChild(btn);

let para1 = document.createElement("p");
para1.innerHTML = "skip Introduction";
para1.style.color = "black";
para1.style.textDecoration = "underline";

div.appendChild(para1);

