var input = document.getElementById("users-input");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("enter").click();
    }
})

function genAssicArt() {
	var assicArt = "";
	var userText = document.getElementById("users-input").value;
	
	var row = 0;
	while (row < 7)
	{
		for (var i = 0; i < userText.length; i++) 
		{
		  assicArt += getPieceOfArt(userText, i, row);
		}
		assicArt += '&#13;&#10;';
		row++;
	}
	document.getElementById("ascii-art-text").innerHTML = assicArt;
}

function getPieceOfArt(text, textPos, rowPos)
{
	var frontArrPos = ((text.charCodeAt(textPos) - 32) * 7) + rowPos;
	var pieceOfArt = front1[frontArrPos] + ".";

	return pieceOfArt;
}

function copyAssicArt() {
	var range = document.getSelection().getRangeAt(0);
    range.selectNode(document.getElementById("ascii-art-text"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
}