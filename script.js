var checkNum = 0;
renderTime();

function renderTime() {
	var currentTime = new Date();

	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
    var s = currentTime.getSeconds() ;

	setTimeout('renderTime()',1000);

	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}

    var myClock = document.getElementById('clockDisplay');
	myClock.textContent = h + ":" + m + ":" + s;
	myClock.innerText = h + ":" + m + ":" + s;
}

document.getElementById('button').onclick = function(){
	changeColor();
}

function changeColor(){
	var randomColor = Math.round(Math.random()*5) + 1;

	while(true){
		if (randomColor == checkNum){
			randomColor = Math.round(Math.random()*5) + 1;
		}
		else{
			break;
		}
	}

	checkNum = randomColor;

	if(randomColor == 1)
		ColorValue = "FFCCCC"; //peach
	if(randomColor == 2)
		ColorValue = "CCAFFF"; //violet
	if(randomColor == 3)
		ColorValue = "A6BEFF"; //lt blue
	if(randomColor == 4)
		ColorValue = "FFCC99"; //lt orange
	if(randomColor == 5)
		ColorValue = "D5CCBB"; //tan
	if(randomColor == 6)
		ColorValue = "99FF66"; //green

	document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
	
}

 document.onkeydown = function(e){
	if(e.keyCode == 32)
		document.getElementById('button').click();
}



