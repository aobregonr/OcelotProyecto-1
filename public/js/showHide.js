function showHide() {
    var checkbox = document.getElementById("chk");
    var hidenInputs = document.getElementsByClassName("hidden");

    for (var i = 0; i != hidenInputs.length; i++) {
        if (checkbox.checked) {
            hidenInputs[i].style.display = "inline";
        } else {
            hidenInputs[i].style.display = "none";
        }
    }
}
