function epicness()
		{
			var sound = new Audio("test2.mp3");
			sound.play();
			confirm("Ready?  Tip: 'A true ninja uses two hands, the left and the right.'");
		}
		setTimeout(timer(),10);
		var hits = 0;
		//onclick on dummy
		function hit()
		{
			hits ++;
			console.log("click!");
			console.log(hits);
			h2 =  document.getElementsByTagName('h2');
			document.getElementById("hits").innerHTML = hits;
			winCondition();
		}
		// win condition
		function winCondition()
		{
			console.log("in winCondition:: hits = "+hits);
			if (hits == 20)
			{
					stop.onclick = function() 
					{
					clearTimeout(t);
					}
					
				alert("PASSED!");
				window.location="game3intro.html";
			}
		}


//timer credits to http://jsfiddle.net/pvk6p/245/

var h1 = document.getElementsByTagName('h1')[0],
    seconds = 99, minutes = 20, hours = 0,
    t;

function add() {
    seconds--;
    if (seconds == 0 ){
        seconds = 99;
        minutes--;
        if (minutes >= 99) {
            minutes = 0;
            hours--;
        }
    }
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
	
	//lose condition
	if (minutes == 0)
	{
		alert("try again");
		location.reload();
	}
}
function timer() {
    t = setTimeout(add, 10);
}
