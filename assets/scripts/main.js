var input = document.getElementById("users-input");

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("enter").click();
    }
})

//Creats Assic art from the user's input and displays the result in text area
function genAssicArt() {
	var assicArt = "";
	var userText = document.getElementById("users-input").value;
	
	var row = 0;
	//while loop is set to less than 7 because there are 7 rows of assic art for each character
	while (row < 7)
	{
		for (var i = 0; i < userText.length; i++) 
		{
		  assicArt += getPieceOfArt(userText, i, row);
		}
		assicArt += '<br>';
		row++;
	}
	document.getElementById("ascii-art-text").innerHTML = assicArt;
}

//gets the correct line of the desired character.
function getPieceOfArt(text, textPos, rowPos)
{
	var frontArrPos = ((text.charCodeAt(textPos) - 32) * 7) + rowPos;
	var pieceOfArt = font1[frontArrPos] + ".";

	return pieceOfArt;
}

//copies the assic art text area to pc's clipboard
function CopyToClipboard(containerid) {
  var textarea = document.createElement('textarea')
  textarea.id = 'temp_element'
  textarea.style.height = 0
  document.body.appendChild(textarea)
  textarea.value = document.getElementById(containerid).innerText
  var selector = document.querySelector('#temp_element')
  selector.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  
  //Display copy notification
  var x = document.getElementById("copy-notification");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}