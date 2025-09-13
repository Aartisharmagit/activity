// function changeHeading(){
//     let  head = document.getElementById("heading");
//     head.textContent = "Heading After";
//     head.style.color = "blue";
// }


    function tooglebtn(){
        let emogi = document.getElementById("emogi");
        let btn = document.getElementById("btn");

    if(btn.innerText === "unhappy"){
        btn.innerText = "happy";
        emogi.src = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png";
    
    }
    else{
        btn.innerText = "unhappy";
        emogi.src = "https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093";
        emogi.alt = "unhappy emogi";
    }
}
    
  