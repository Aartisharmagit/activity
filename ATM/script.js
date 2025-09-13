let bal=50000
let pin="8877"

function atm(){
let on =true

while(on){
alert("Welcome to State Bank Of India ATM Machine");
let language = prompt("1.English 2.Hindi");
if(language == "1"){
    alert("You are logging in in English!");}
else if(language == "2"){
    alert("आप हिंदी में लॉगिन कर रहे हैं!");}
}
let a = prompt("1.Saving 2.Current");
if(a == "1"){
    alert("You have selected Savings Account.");
}
else if(a == "2"){
    alert("You have selected Current Account.");
}
let attempt = 3
let ok = false


while (attempt > 0 && !ok){
let pincode = prompt("enter pin")
if(pincode === pin){ 
    ok = true }
    else{attempt--;
    alert("wrong pin left "+attempt)
if(attempt == 0){
    alert("Card block");
    on = false}}}
// if(!ok){
//     break;
// }
let tr = prompt("1.Withdraw 2.Deposit 3.Balance 4.ChangePin")
if(tr == "1"){

let amount = parseInt(prompt("Amount?"))
if(amount > 0 && amount <= bal){bal -= amount;
    alert("Cash "+amount)}
else{
    alert("Invalid")}
}
else if(tr == "2"){
    alert("Insert money");
    alert("Done")}
else if(tr == "3"){
    alert("Bal:"+bal)}
else if(tr == "4"){
let o = prompt("old pin")
if(o === pin){

let code1 = prompt("new pin")
let code2 = prompt("re enter")


if(code1 === code2 && code1.length == 4){
    pin=code1;
    alert("Pin changed")}
else{
    alert("Not match")}
}else{
    alert("wrong old pin")}
}
else{
    alert("wrong option")}
let reciept = prompt("Receipt? yes/no")
if(reciept == "yes"){
    
    alert("take it")}
alert("thanks")
let again = prompt("again? yes/no")
if(again!= "yes"){
    on = false
}

}