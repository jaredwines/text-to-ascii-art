function myFunction() {
	//var text2 = getLinesFromFront(/fronts/front1.txt);
	var text2 = getLinesFromFront('C:/Users/surfe/GitHub/text-to-ascii-art/fronts/front1.txt');
    var text = document.getElementById("theText").value;
    document.getElementById("ascii-art-text").innerHTML = text2;
}

function getLinesFromFront(filepath) {
	var str = "";
	var lines = "";
	var txtFile = new File(filepath);
	txtFile.open("r");
	while (!txtFile.eof) {
		// read each line of text
		str += txtFile.readln() + "\n";
	}
	//lines = str.split("\n");
	return str;
}

//((assicCharDec - 32) * 8) + 2