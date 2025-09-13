let heading = document.createElement("div");
heading.id = "heading";
heading.innerText = "Happy Birthday";
heading.style.textAlign = "center";
document.body.appendChild(heading);

let btn = document.createElement("button");
btn.id = "btn";
btn.innerText = "God Bless You"
btn.style.align = "center";
btn.style.color = "red";
heading.appendChild(btn);

btn.onclick = function(){
    let = heading = document.getElementById("heading");
    heading.textContent = "Happy Birthday Aarti";
    heading.style.color = "red";
}



