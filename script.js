 var seconds = 00;
 var tens = 00;
 var appendSeconds = document.getElementById('seconds');
 var appendTens = document.getElementById('tens');
 var buttonStart = document.getElementById('button-start');
 var buttonStop = document.getElementById('button-stop');
 var buttonReset = document.getElementById('button-reset');
 var interval; //to store timer values

 function startTimer(){
 	tens++;

 	if(tens < 9){
 		appendTens.innerHTML = '0' + tens;
 	}
 	if(tens > 9){
 		appendTens.innerHTML = tens;
 	}
 	if (tens > 99) {
 		seconds++;
 		appendSeconds.innerHTML = '0' + seconds;
 		tens = 0;
 		appendTens.innerHTML = '0' + 0;
 	}
 	if (seconds>9) {
 		appendSeconds.innerHTML = seconds;
 	}
 }

 buttonStart.onclick = function(){
 	interval = setInterval(startTimer);
 };

 buttonReset.onclick = function(){
 	clearInterval(interval);
 	tens = '00';
 	seconds = '00';
 	appendTens.innerHTML = tens;
 	appendSeconds.innerHTML = seconds;
 };

 buttonStop.onclick = function(){
 	clearInterval(interval);
 };