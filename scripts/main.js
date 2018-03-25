function myFunction() {
	var assicArt = "";
	var text = document.getElementById("theText").value;
	
	var row = 0;
	while (row < 7)
	{
		for (var i = 0; i < text.length; i++) 
		{
		  assicArt += front1[((text.charCodeAt(i) - 32) * 7) + row] + ".";
		}
		assicArt += '<br>';
		row++;
	}
	document.getElementById("ascii-art-text").innerHTML = assicArt;
}


//((assicCharDec - 32) * 7) 
