let msg = document.getDocumentById("#form");

msg.addEventListener("keydown", (event) => {
    console.log("key down",event.key);
});

msg.addEventListener("keypress", (event) => {
    console.log("key press",event.key);
});

msg.addEventListener("keyup", (event) => {
    console.log("key Up",event.key);
});
