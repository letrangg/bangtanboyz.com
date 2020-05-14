function navFunction() {
    var x = document.getElementById("navbarRes");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}