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
		assicArt += '<br>';
		row++;
	}
	document.getElementById("ascii-art-text").innerHTML = assicArt;
}

function getPieceOfArt(text, textPos, rowPos)
{
	var frontArrPos = ((text.charCodeAt(textPos) - 32) * 7) + rowPos;
	var pieceOfArt = font1[frontArrPos] + ".";

	return pieceOfArt;
}

function CopyToClipboard(containerid) {
  // Create a new textarea element and give it id='temp_element'
  var textarea = document.createElement('textarea')
  textarea.id = 'temp_element'
  // Optional step to make less noise on the page, if any!
  textarea.style.height = 0
  // Now append it to your page somewhere, I chose <body>
  document.body.appendChild(textarea)
  // Give our textarea a value of whatever inside the div of id=containerid
  textarea.value = document.getElementById(containerid).innerText
  // Now copy whatever inside the textarea to clipboard
  var selector = document.querySelector('#temp_element')
  selector.select()
  document.execCommand('copy')
  // Remove the textarea
  document.body.removeChild(textarea)
  
  //Display copy notification
  var x = document.getElementById("copy-notification");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}