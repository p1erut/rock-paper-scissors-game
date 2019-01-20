var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var reset = document.getElementById("reset");
var stats = document.getElementById("stats");
var round = document.getElementById("round_number");
var ty_result = document.getElementById("ty_result");
var ai_result = document.getElementById("ai_result");
var ty_choice = document.getElementById("ty_choice");
var ai_choice = document.getElementById("ai_choice");
var remis = 0;
var count_paper = 0;
var count_rock = 0;
var count_scissors = 0;

paper.addEventListener("click", event1);
rock.addEventListener("click", event2);
scissors.addEventListener("click", event3);

function event1() {
	var ai = Math.floor(Math.random()*3+1);
	round.innerHTML = parseInt(round.innerHTML) + 1;
	ty_choice.innerHTML="<i class='icon-hand-paper-o'></i>";
	count_paper = count_paper+1;
	switch(ai) {
		case 1:
			ai_choice.innerHTML="<i class='icon-hand-paper-o'></i>";
			remis = remis+1;
			break;
		case 2:
			ty_result.innerHTML=parseInt(ty_result.innerHTML)+1;
			ai_choice.innerHTML="<i class='icon-hand-grab-o'></i>";
			break;
		case 3:
			ai_result.innerHTML=parseInt(ai_result.innerHTML)+1;
			ai_choice.innerHTML="<i class='icon-hand-scissors-o'></i>";
			break;
	}

	return remis, count_paper;
}

function event2() {
	var ai = Math.floor(Math.random()*3+1);
	round.innerHTML = parseInt(round.innerHTML) + 1;
	ty_choice.innerHTML="<i class='icon-hand-grab-o'></i>";
	count_rock = count_rock+1;
	switch(ai) {
		case 1:
			ai_result.innerHTML=parseInt(ai_result.innerHTML)+1;
			ai_choice.innerHTML="<i class='icon-hand-paper-o'></i>"; 
			break;
		case 2:
			ai_choice.innerHTML="<i class='icon-hand-grab-o'></i>";
			remis = remis+1;
			break;
		case 3:
			ty_result.innerHTML=parseInt(ty_result.innerHTML)+1;
			ai_choice.innerHTML="<i class='icon-hand-scissors-o'></i>";
			break;
	}
	return remis, count_rock;
}

function event3() {
	var ai = Math.floor(Math.random()*3+1);
	round.innerHTML = parseInt(round.innerHTML) + 1;
	ty_choice.innerHTML="<i class='icon-hand-scissors-o'></i>";
	count_scissors = count_scissors+1;
	switch(ai) {
		case 1:
			ty_result.innerHTML=parseInt(ty_result.innerHTML)+1;
			ai_choice.innerHTML="<i class='icon-hand-paper-o'></i>"; 
			break;
		case 2:
			ai_result.innerHTML=parseInt(ai_result.innerHTML)+1;
			ai_choice.innerHTML="<i class='icon-hand-grab-o'></i>";
			break;
		case 3:
			ai_choice.innerHTML="<i class='icon-hand-scissors-o'></i>";
			remis = remis+1;
			break;
	}
	return remis, count_scissors;
}

reset.addEventListener("click", function(){
	round_number.innerHTML="0";
	ty_result.innerHTML="0";
	ai_result.innerHTML="0";
	ty_choice.innerHTML="";
	ai_choice.innerHTML="";
	remis = 0;
	count_scissors = 0;
	count_rock = 0;
	count_paper = 0;
});

stats.addEventListener("click", function(){
	alert("TWOJE STATYSTYKI:\n\nWygrane: "+ty_result.innerHTML+"\nPrzegrane: "+ai_result.innerHTML+"\nRemisy: "+remis+"\n\nPapier: "+count_paper+"\nKamień: "+count_rock+"\nNożyce: "+count_scissors);
});