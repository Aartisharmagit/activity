let card = document.createElement("div");
document.body.appendChild(card);
card.style.backgroundImage = "url('https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad')";
card.style.backgroundColor = "#f6c56e";
card.style.backgroundSize = "cover";
card.style.backgroundPosition = "center"
card.style.height = "100vh";
card.style.padding = "30px";
card.style.borderBlockStyle = "solid";
card.style.borderWidth = "20px";

let heading = document.createElement("h1");
heading.innerText = "Happy Meals";
heading.style.fontFamily = "Bree Serif";
heading.style.color = "white";
card.appendChild(heading);

let para = document.createElement("p");
para.innerText = "Discover the best foods over the 1,000 restaurants";
para.style.font = "Roboto";
para.style.color = "white";
card.appendChild(para);

let btn = document.createElement("button");
btn.innerText = "order now";
btn.style.color = "#323f4b"
btn.style.backgroundColor = "orange";
card.appendChild(btn);


let h = document.getElementsById("era");
h.innerText = "Hi NavGurukul";

card.appendChild(h)