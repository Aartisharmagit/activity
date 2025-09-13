function switchoff() {
    document.getElementById("bulbImage").src = "https://images.pexels.com/photos/1616472/pexels-photo-1616472.jpeg";
    document.getElementById("catImage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMQpacumUq8tjgGzfSY2me0ULbTBjwMUdRQ&s";
    document.getElementById("switchstatus").textContent = "Switched Off";

    document.getElementById("onswitch").style.backgroundColor = "#22c55e";
    document.getElementById("offswitch").style.backgroundColor = "#cbd2d9";
}

function switchon() {
    document.getElementById("bulbImage").src = "https://images.pexels.com/photos/1830252/pexels-photo-1830252.jpeg";
    document.getElementById("catImage").src = "https://media.istockphoto.com/id/1321992197/photo/close-up-of-a-beautiful-asian-leopard-cat.jpg?s=612x612&w=0&k=20&c=Pl13SNQzc7ol3y6ucoQ1NBX4K9x1gyIxjnkPvU2iXJI=";
    document.getElementById("switchstatus").textContent = "Switched On";

    document.getElementById("offswitch").style.backgroundColor = "#e12d39";
    document.getElementById("onswitch").style.backgroundColor = "#cbd2d9";  
}
