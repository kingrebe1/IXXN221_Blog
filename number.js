let counter = 0;
let randomNum = 0;

function gameSetup() {
	console.log(randomNum);
	console.log(counter);
	randomNum=Math.floor(Math.random() * 100) + 1;
 	counter=0;
 	document.getElementById('closeness').value="";
 	document.getElementById('counter').value=counter;
 	document.getElementById('guess').value="";
};

document.getElementsByClassName('set')[0].onclick = gameSetup;

function testGuess() {
	let yourNum = document.getElementById('guess').value;
	let variance = Math.abs(randomNum-yourNum);
	
	if (variance > 50) {
		document.getElementById('closeness').value="Freezing";
	} else if (variance <=50 && variance >=20) {
		document.getElementById('closeness').value="Cold";
	} else if (variance < 20 && variance >=10) {
		document.getElementById('closeness').value="Warm";
	} else if (variance <10 && variance >= 5) {
		document.getElementById('closeness').value="Hot";
	} else if (variance <5 && variance > 0) {
		document.getElementById('closeness').value="Boiling";
	} else if (variance == 0) {
		document.getElementById('closeness').value="Congratulations! You guessed the correct number!";
	}

	counter=counter+1;
	document.getElementById('counter').value=counter;
};

document.getElementsByClassName('testGuess')[0].onclick = testGuess;