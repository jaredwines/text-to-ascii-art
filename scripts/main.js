function genAssicArt() {
	var assicArt = "";
	var userText = document.getElementById("theText").value;
	
	var row = 0;
	while (row < 7)
	{
		for (var i = 0; i < userText.length; i++) 
		{
		  assicArt += getPieceOfArt(userText, i, row);
		}
		assicArt += '<br>';
		row++;
	}
	document.getElementById("ascii-art").innerHTML = assicArt;
}

function getPieceOfArt(text, textPos, rowPos)
{
	var frontArrPos = ((text.charCodeAt(textPos) - 32) * 7) + rowPos;
	var pieceOfArt = front1[frontArrPos] + ".";

	return pieceOfArt;
}

