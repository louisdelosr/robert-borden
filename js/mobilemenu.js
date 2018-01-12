function myFunction() {
    var x = document.getElementById("my-menu");
    if (x.className === "horizontal-menu") {
        x.className += "responsive";
        x.style.margin = 0;
    } else {
        x.className = "horizontal-menu";
    }
}