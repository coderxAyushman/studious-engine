function checkAnswer() {
	var answer = document.getElementById("name");
    var ans = answer.value;
    if (ans == "japan") {
    	alert("!CORRECT");
    	return true
    }
    else{
    	alert("NOT THE CORRECT ANSWER!. GO TO THE PREVIOUS PAGE FOR CHECKING");
    	return false
    }
}