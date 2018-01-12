
function q1(elmnt) {
	sessionStorage.totalcorrect1 = 0;
	if(elmnt == document.getElementById("1")){ //|| elmnt == document.getElementById("7") || elmnt == document.getElementById("11") || elmnt == document.getElementById("16") || elmnt == document.getElementById("17") || elmnt == document.getElementById("22") || elmnt == document.getElementById("27") || elmnt == document.getElementById("29") || elmnt == document.getElementById("36") || elmnt == document.getElementById("38") || elmnt == document.getElementById("41") || elmnt == document.getElementById("45")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect1 = Number(sessionStorage.totalcorrect1) + 1;
		sessionStorage.pressed1 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result1").innerHTML = "Correct!";
		document.getElementById("result1").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed1 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result1").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed1 == 1){
		document.getElementById("1").onclick = function() {
			return false;
		}
		document.getElementById("2").onclick = function() {
			return false;
		}
		document.getElementById("3").onclick = function() {
			return false;
		}
		document.getElementById("4").onclick = function() {
			return false;
		}
	}
}

function q2(elmnt){
	sessionStorage.totalcorrect2 = 0;
	if(elmnt == document.getElementById("7")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect2 = Number(sessionStorage.totalcorrect2) + 1;
		sessionStorage.pressed2 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result2").innerHTML = "Correct!";
		document.getElementById("result2").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed2 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result2").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed2 == 1){
		document.getElementById("5").onclick = function() {
			return false;
		}
		document.getElementById("6").onclick = function() {
			return false;
		}
		document.getElementById("7").onclick = function() {
			return false;
		}
		document.getElementById("8").onclick = function() {
			return false;
		}
	}
}

function q3(elmnt){
	sessionStorage.totalcorrect3 = 0;
	if(elmnt == document.getElementById("11")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect3 = Number(sessionStorage.totalcorrect3) + 1;
		sessionStorage.pressed3 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result3").innerHTML = "Correct!";
		document.getElementById("result3").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed3 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result3").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed3 == 1){
		document.getElementById("9").onclick = function() {
			return false;
		}
		document.getElementById("10").onclick = function() {
			return false;
		}
		document.getElementById("11").onclick = function() {
			return false;
		}
		document.getElementById("12").onclick = function() {
			return false;
		}
	}
}

function q4(elmnt){
	sessionStorage.totalcorrect4 = 0;
	if(elmnt == document.getElementById("16")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect4 = Number(sessionStorage.totalcorrect4) + 1;
		sessionStorage.pressed4 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result4").innerHTML = "Correct!";
		document.getElementById("result4").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed4 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result4").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed4 == 1){
		document.getElementById("13").onclick = function() {
			return false;
		}
		document.getElementById("14").onclick = function() {
			return false;
		}
		document.getElementById("15").onclick = function() {
			return false;
		}
		document.getElementById("16").onclick = function() {
			return false;
		}
	}
}

function q5(elmnt){
	sessionStorage.totalcorrect5 = 0;
	if(elmnt == document.getElementById("17")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect5 = Number(sessionStorage.totalcorrect5) + 1;
		sessionStorage.pressed5 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result5").innerHTML = "Correct!";
		document.getElementById("result5").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed5 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result5").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed5 == 1){
		document.getElementById("17").onclick = function() {
			return false;
		}
		document.getElementById("18").onclick = function() {
			return false;
		}
		document.getElementById("19").onclick = function() {
			return false;
		}
		document.getElementById("20").onclick = function() {
			return false;
		}
	}
}

function q6(elmnt){
	sessionStorage.totalcorrect6 = 0;
	if(elmnt == document.getElementById("22")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect6 = Number(sessionStorage.totalcorrect6) + 1;
		sessionStorage.pressed6 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result6").innerHTML = "Correct!";
		document.getElementById("result6").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed6 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result6").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed6 == 1){
		document.getElementById("21").onclick = function() {
			return false;
		}
		document.getElementById("22").onclick = function() {
			return false;
		}
		document.getElementById("23").onclick = function() {
			return false;
		}
		document.getElementById("24").onclick = function() {
			return false;
		}
	}
}

function q7(elmnt){
	sessionStorage.totalcorrect7 = 0;
	if(elmnt == document.getElementById("27")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect7 = Number(sessionStorage.totalcorrect7) + 1;
		sessionStorage.pressed7 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result7").innerHTML = "Correct!";
		document.getElementById("result7").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed7 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result7").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed7 == 1){
		document.getElementById("25").onclick = function() {
			return false;
		}
		document.getElementById("26").onclick = function() {
			return false;
		}
		document.getElementById("27").onclick = function() {
			return false;
		}
		document.getElementById("28").onclick = function() {
			return false;
		}
	}
}

function q8(elmnt){
	sessionStorage.totalcorrect8 = 0;
	if(elmnt == document.getElementById("29")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect8 = Number(sessionStorage.totalcorrect8) + 1;
		sessionStorage.pressed8 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result8").innerHTML = "Correct!";
		document.getElementById("result8").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed8 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result8").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed8 == 1){
		document.getElementById("29").onclick = function() {
			return false;
		}
		document.getElementById("30").onclick = function() {
			return false;
		}
		document.getElementById("31").onclick = function() {
			return false;
		}
		document.getElementById("32").onclick = function() {
			return false;
		}
	}
}

function q9(elmnt){
	sessionStorage.totalcorrect9 = 0;
	if(elmnt == document.getElementById("36")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect9 = Number(sessionStorage.totalcorrect9) + 1;
		sessionStorage.pressed9 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result9").innerHTML = "Correct!";
		document.getElementById("result9").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed9 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result9").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed9 == 1){
		document.getElementById("33").onclick = function() {
			return false;
		}
		document.getElementById("34").onclick = function() {
			return false;
		}
		document.getElementById("35").onclick = function() {
			return false;
		}
		document.getElementById("36").onclick = function() {
			return false;
		}
	}
}

function q10(elmnt){
	sessionStorage.totalcorrect10 = 0;
	if(elmnt == document.getElementById("38")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect10 = Number(sessionStorage.totalcorrect10) + 1;
		sessionStorage.pressed10 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result10").innerHTML = "Correct!";
		document.getElementById("result10").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed10 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result10").innerHTML = "Sorry that is incorrect";
	} 
	if(sessionStorage.pressed10 == 1){
		document.getElementById("37").onclick = function() {
			return false;
		}
		document.getElementById("38").onclick = function() {
			return false;
		}
		document.getElementById("39").onclick = function() {
			return false;
		}
		document.getElementById("40").onclick = function() {
			return false;
		}
	}
}

function q11(elmnt){
	sessionStorage.totalcorrect11 = 0;
	if(elmnt == document.getElementById("41")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect11 = Number(sessionStorage.totalcorrect11) + 1;
		sessionStorage.pressed11 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result11").innerHTML = "Correct!";
		document.getElementById("result11").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed11 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result11").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed11 == 1){
		document.getElementById("41").onclick = function() {
			return false;
		}
		document.getElementById("42").onclick = function() {
			return false;
		}
		document.getElementById("43").onclick = function() {
			return false;
		}
		document.getElementById("44").onclick = function() {
			return false;
		}
	}
}

function q12(elmnt){
	sessionStorage.totalcorrect12 = 0;
	if(elmnt == document.getElementById("45")){
		elmnt.style.backgroundColor = "green";
		sessionStorage.totalcorrect12 = Number(sessionStorage.totalcorrect12) + 1;
		sessionStorage.pressed12 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result12").innerHTML = "Correct!";
		document.getElementById("result12").style.color = "green";
	} else {
		elmnt.style.backgroundColor = "red";
		sessionStorage.pressed12 = 1;
		elmnt.style.borderStyle = "inset";
		document.getElementById("result12").innerHTML = "Sorry that is incorrect!";
	} 
	if(sessionStorage.pressed12 == 1){
		document.getElementById("45").onclick = function() {
			return false;
		}
		document.getElementById("46").onclick = function() {
			return false;
		}
		document.getElementById("47").onclick = function() {
			return false;
		}
		document.getElementById("48").onclick = function() {
			return false;
		}
	}
}

function correct() {
	var total = Number(sessionStorage.totalcorrect1) + Number(sessionStorage.totalcorrect2) + Number(sessionStorage.totalcorrect3) + Number(sessionStorage.totalcorrect4) + Number(sessionStorage.totalcorrect5) + Number(sessionStorage.totalcorrect6) + Number(sessionStorage.totalcorrect7) + Number(sessionStorage.totalcorrect8) + Number(sessionStorage.totalcorrect9) + Number(sessionStorage.totalcorrect10) + Number(sessionStorage.totalcorrect11) + Number(sessionStorage.totalcorrect12);
	if(isNaN(total)) {
		total = 0;
	}
	if(isNaN(sessionStorage.totalcorrect1) || isNaN(sessionStorage.totalcorrect2) || isNaN(sessionStorage.totalcorrect3) || isNaN(sessionStorage.totalcorrect4) || isNaN(sessionStorage.totalcorrect5) || isNaN(sessionStorage.totalcorrect6) || isNaN(sessionStorage.totalcorrect7) || isNaN(sessionStorage.totalcorrect8) || isNaN(sessionStorage.totalcorrect9) || isNaN(sessionStorage.totalcorrect10) || isNaN(sessionStorage.totalcorrect11) || isNaN(sessionStorage.totalcorrect12)) {
		document.getElementById("final-result").innerHTML = ('Please answer all the questions before checking your final score.');
	} else if(total <= 4) {
		document.getElementById("final-result").innerHTML = ('Your score is ') + total + (' out of 12 | ') + Math.floor(total/12*100) + ('%... ') + ('<br>Oh no, looks like you need to study more! Visit the <a href="biography.html">Biography</a> page to help you answer the questions! Remember to also watch the interview video with the grand nephew of Sir Robert Borden on the <a href="index.html">About Sir Robert Borden</a> page.');
	} if((total <= 7) && (total >= 5)) {
		document.getElementById("final-result").innerHTML = ('Your score is ') + total + (' out of 12 | ') + Math.floor(total/12*100) + ('%... ') + ('<br>Keep trying! Visit the <a href="biography.html">Biography</a> page to help you answer the questions! Remember to also watch the interview video with the grand nephew of Sir Robert Borden on the <a href="index.html">About Sir Robert Borden</a> page.');
	} if((total <= 10) && (total >= 8)) {
		document.getElementById("final-result").innerHTML = ('Your score is ') + total + (' out of 12 | ') + Math.floor(total/12*100) + ('%! ') + ('<br>Very good, you`re almost there!');
	} if(total == 11) {
		document.getElementById("final-result").innerHTML = ('Your score is ') + total + (' out of 12 | ') + Math.floor(total/12*100) + ('%! ') + ('<br>Impressive!');
	} if(total == 12) {
		document.getElementById("final-result").innerHTML = ('Your score is ') + total + (' out of 12 | ') + Math.floor(total/12*100) + ('%! ') + ('<br>Perfect score, congratulations!');
		document.getElementById("final-result").innerHTML = ("green");
	} if(document.getElementById("final-result").innerHTML != ('Please answer all the questions before checking your final score.')) {
		document.getElementById("show-total").style.backgroundColor = "black";
		document.getElementById("show-total").style.color = "white";
	}

}

function reset(){
	sessionStorage.clear();
	scroll(0,0);
	location.reload();
	document.getElementById("final-result").innerHTML = sessionStorage.totalcorrect;
	document.getElementById("1").style.backgroundColor = "initial";
	document.getElementById("2").style.backgroundColor = "initial";
	document.getElementById("3").style.backgroundColor = "initial";
	document.getElementById("4").style.backgroundColor = "initial";
	document.getElementById("5").style.backgroundColor = "initial";
	document.getElementById("6").style.backgroundColor = "initial";
	document.getElementById("7").style.backgroundColor = "initial";
	document.getElementById("8").style.backgroundColor = "initial";
	document.getElementById("9").style.backgroundColor = "initial";
	document.getElementById("10").style.backgroundColor = "initial";
	document.getElementById("11").style.backgroundColor = "initial";
	document.getElementById("12").style.backgroundColor = "initial";
	document.getElementById("13").style.backgroundColor = "initial";
	document.getElementById("14").style.backgroundColor = "initial";
	document.getElementById("15").style.backgroundColor = "initial";
	document.getElementById("16").style.backgroundColor = "initial";
	document.getElementById("17").style.backgroundColor = "initial";
	document.getElementById("18").style.backgroundColor = "initial";
	document.getElementById("19").style.backgroundColor = "initial";
	document.getElementById("20").style.backgroundColor = "initial";
	document.getElementById("21").style.backgroundColor = "initial";
	document.getElementById("22").style.backgroundColor = "initial";
	document.getElementById("23").style.backgroundColor = "initial";
	document.getElementById("24").style.backgroundColor = "initial";
	document.getElementById("25").style.backgroundColor = "initial";
	document.getElementById("26").style.backgroundColor = "initial";
	document.getElementById("27").style.backgroundColor = "initial";
	document.getElementById("28").style.backgroundColor = "initial";
	document.getElementById("29").style.backgroundColor = "initial";
	document.getElementById("30").style.backgroundColor = "initial";
	document.getElementById("31").style.backgroundColor = "initial";
	document.getElementById("32").style.backgroundColor = "initial";
	document.getElementById("33").style.backgroundColor = "initial";
	document.getElementById("34").style.backgroundColor = "initial";
	document.getElementById("35").style.backgroundColor = "initial";
	document.getElementById("36").style.backgroundColor = "initial";
	document.getElementById("37").style.backgroundColor = "initial";
	document.getElementById("38").style.backgroundColor = "initial";
	document.getElementById("39").style.backgroundColor = "initial";
	document.getElementById("40").style.backgroundColor = "initial";
	document.getElementById("41").style.backgroundColor = "initial";
	document.getElementById("42").style.backgroundColor = "initial";
	document.getElementById("43").style.backgroundColor = "initial";
	document.getElementById("44").style.backgroundColor = "initial";
	document.getElementById("45").style.backgroundColor = "initial";
	document.getElementById("46").style.backgroundColor = "initial";
	document.getElementById("47").style.backgroundColor = "initial";
	document.getElementById("48").style.backgroundColor = "initial";
	document.getElementById("1").style.border = "outset";
	document.getElementById("2").style.border = "outset";
	document.getElementById("3").style.border = "outset";
	document.getElementById("4").style.border = "outset";
	document.getElementById("5").style.border = "outset";
	document.getElementById("6").style.border = "outset";
	document.getElementById("7").style.border = "outset";
	document.getElementById("8").style.border = "outset";
	document.getElementById("9").style.border = "outset";
	document.getElementById("10").style.border = "outset";
	document.getElementById("11").style.border = "outset";
	document.getElementById("12").style.border = "outset";
	document.getElementById("13").style.border = "outset";
	document.getElementById("14").style.border = "outset";
	document.getElementById("15").style.border = "outset";
	document.getElementById("16").style.border = "outset";
	document.getElementById("17").style.border = "outset";
	document.getElementById("18").style.border = "outset";
	document.getElementById("19").style.border = "outset";
	document.getElementById("20").style.border = "outset";
	document.getElementById("21").style.border = "outset";
	document.getElementById("22").style.border = "outset";
	document.getElementById("23").style.border = "outset";
	document.getElementById("24").style.border = "outset";
	document.getElementById("25").style.border = "outset";
	document.getElementById("26").style.border = "outset";
	document.getElementById("27").style.border = "outset";
	document.getElementById("28").style.border = "outset";
	document.getElementById("29").style.border = "outset";
	document.getElementById("30").style.border = "outset";
	document.getElementById("31").style.border = "outset";
	document.getElementById("32").style.border = "outset";
	document.getElementById("33").style.border = "outset";
	document.getElementById("34").style.border = "outset";
	document.getElementById("35").style.border = "outset";
	document.getElementById("36").style.border = "outset";
	document.getElementById("37").style.border = "outset";
	document.getElementById("38").style.border = "outset";
	document.getElementById("39").style.border = "outset";
	document.getElementById("40").style.border = "outset";
	document.getElementById("41").style.border = "outset";
	document.getElementById("42").style.border = "outset";
	document.getElementById("43").style.border = "outset";
	document.getElementById("44").style.border = "outset";
	document.getElementById("45").style.border = "outset";
	document.getElementById("46").style.border = "outset";
	document.getElementById("47").style.border = "outset";
	document.getElementById("48").style.border = "outset";
}

window.onbeforeunload = function(){
  sessionStorage.clear();
};
