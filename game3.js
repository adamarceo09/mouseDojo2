	setTimeout(timer(),10);
		var winCon = 0;
		
		function epicness()
		{
			var sound = new Audio("test3.mp3");
			sound.play();
			confirm("Ready?  Tip: 'A true ninja knows not to drag the mouse in desperation.'");
		}
		//onclick  box
		function hit(_boxNo)
		{
			this.boxNo = _boxNo
			//console.log(boxNo)
			//console.log(document.getElementById=("box"+boxNo));	
			document.getElementById("box"+boxNo).setAttribute("src","active.png");
			winCondition();
			
			// win condition
			function winCondition()
			{
				
				for(boxLimit = 25; boxLimit > 0; boxLimit --)
				{
					var isWin = document.getElementById("box"+boxLimit).src
					console.log(isWin);	
					if ( document.getElementById("box"+24).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
						  document.getElementById("box"+25).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" &&
							document.getElementById("box"+24).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+23).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+22).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+21).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+20).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+19).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+18).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+17).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+16).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+15).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+14).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+13).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+12).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+11).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+10).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+9).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+8).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+7).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+6).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+5).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+4).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+3).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+2).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" && 
							document.getElementById("box"+1).src == "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/active.png" 
							)
						
						{
							console.log("in winCondition; box "+boxLimit+" is active");
							console.log("box"+boxLimit+" is active");
							
							
							window.location="endGame.html";
							alert("PASSED!");
							stop.onclick = function() 
							{
							clearTimeout(t);
							}
								
							
						}
					else
						{
							console.log("box"+boxLimit+" is not active");
						}
					
				}
				
				
				}
		}
		
		


//timer credits to http://jsfiddle.net/pvk6p/245/

var h1 = document.getElementsByTagName('h1')[0],
    seconds = 99, minutes = 10, hours = 0,
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


