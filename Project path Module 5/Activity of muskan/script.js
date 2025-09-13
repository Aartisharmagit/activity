
// 1.    
// let btn = document.createElement("button");
// btn.innerText = "click me"
// document.body.appendChild(btn);

// //2. 
// let head = document.getElementsByClassName("wow");   // problem
// head.style.color = "red";

// head.style.color = "yellow";

// document.body.appendChild(head);


//3.   

// let paragraph = document.createElement("p");
// paragraph.innerText = "Make your life very colorful and also join others to make it more colorful";
// document.body.appendChild(paragraph);

// // 4. 

// let btn = document.createElement("button");
// btn.innerText = "click me";
// btn.addEventListener("click", function(){
//     paragraph.style.color = "red";
// })

// document.body.appendChild(btn);

// let karishma = {
//     name: "Karishma",
//     age: 19,
//     school: "High School",
// };


// console.log(karishma.name);


let n = [3, -3, 4, 5, -4];
let sum = 0;

for(let i = 0; i < n.length; i++){
  if(0 <= n){
    sum += i + sum;
  }
  console.log(sum);
}




