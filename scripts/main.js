function myFunction() {
    var text = document.getElementById("theText").value;
    document.getElementById("ascii-art-text").innerHTML = text;
}

((assicCharDec - 32) * 8) + 2