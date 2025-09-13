// let para = document.createElement("p");
// para.innerHTML = "Hii Good Morning";
// let btn = document.createElement("button");
// btn.innerHTML = "click";
// btn.addEventListener("click", function()){
//     para.innerHTML ="Byyy";
    
// }
// document.body.appendChild()

// let heading = document.getElementsByClassName("h1");
// heading.style.color = "red";

// document.body.appendChild(input);

//     const n=require("readline-sync");
//     var name=n.question("enter name: ")
//     const store=name;
//     var string=""
//     for (let i=name.length-1;i>=0;i--) {
//        string=string+name[i]
//     }
//    if (store===string) {
//        console.log("its palindrome string")
//     }
//     else {
//        console.log("it's not a palindrome string")
//   }


// const n = require("readline-sync");
// var name = n.question("enter name: ")
// const store = name.toLowerCase(); // convert to lowercase
// var string = ""
// for (let i = name.length - 1; i >= 0; i--) {
//     string = string + name[i]
// }
// string = string.toLowerCase(); // convert to lowercase
// if (store === string) {
//     console.log("its palindrome string")
// } else {
//     console.log("it's not a palindrome string")
// }

// const obj = {name:"Ami"};
// // Object.freeze(obj);
// obj.name = "Changed";
// console.log(obj.name);


let n = [3, -3, 4, 5, -4];
let sum = 0;

for(let i = 0; i < n.length; i++){
  if(0 <= n){
    sum += i + sum;
  }
  console.log(sum);
}



