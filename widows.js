//simple widow remover

function widow(id)
	{
	var theHTML = document.getElementById(id).innerHTML;
	var newHTML = "";
	theHTML = theHTML.split(" "); 
	
	for (var i=0; i<theHTML.length-1; i++)
		newHTML = newHTML + " " + theHTML[i];

	newHTML = newHTML + "&nbsp;" + theHTML[theHTML.length-1];
	
	document.getElementById(id).innerHTML=newHTML;
	}
