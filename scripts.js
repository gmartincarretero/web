function showExp() {
    var exp = document.getElementById("exp");
    var currentDisplay = window.getComputedStyle(exp).display;

    if (currentDisplay === "none") {
        exp.style.display = "block";
    } else {
        exp.style.display = "none";
    }
}