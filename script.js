document.getElementById("openModal").onclick = function() {
    document.getElementById("myModal").style.display = "block";
}

// Chiudi la finestra modale quando si fa clic sull'icona di chiusura
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

// Chiudi la finestra modale quando si fa clic all'esterno della finestra modale
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}


function togglemenu() {
    var menu = document.getElementById("burger-menu");
    var computedStyle = window.getComputedStyle(menu);

    if (computedStyle.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
