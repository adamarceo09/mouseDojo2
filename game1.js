
	
	function epicness()
		{
			var sound = new Audio("test1.mp3");
			sound.play();
			confirm("Ready?  Tip: 'A true ninja knows what STRAIGHT means.'");
		}
	
	setTimeout(timer(),3000);
	//shuffle arrow choices
	var nums = [0,1,2,3]
	function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
		//console.log(nums[counter]);
		document.getElementById("choice"+counter).setAttribute("src","arrow"+nums[counter]+".jpg");
    }

    return array;
}
//inload
shuffle(nums);



//onclick on choices
function selectArrow(_arrowPressed)
{
var choiceLimit = _arrowPressed
		console.log("inWhile");
		console.log(document.getElementById("choice"+choiceLimit));
		switch (document.getElementById("choice"+choiceLimit).src)
		{
		case "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/arrow0.jpg":
		var player = document.getElementById("player");
        player.style.top = parseInt(player.style.top) - 20 + 'px';
		shuffle(nums);
		coordsPlz();
		winCondition();
		break;
		
		case "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/arrow1.jpg":
		var player = document.getElementById("player");
        player.style.top = parseInt(player.style.top) + 20 + 'px';
		shuffle(nums);
		coordsPlz();
		winCondition();
		break;
		
		case "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/arrow2.jpg":
		var player = document.getElementById("player");
        player.style.left = parseInt(player.style.left) - 20 + 'px';
		shuffle(nums);
		coordsPlz();
		winCondition();
		break;
		
		case "file:///C:/Users/Adam%20Arceo/Documents/Javascript%20Activities/mouseDojo/arrow3.jpg":
		var player = document.getElementById("player");
        player.style.left = parseInt(player.style.left) + 20 + 'px';
		shuffle(nums);
		coordsPlz();
		winCondition();
	    break;
		}
		
		// win condition
		function winCondition()
		{
			if (document.getElementById("player").style.left === "660px" && document.getElementById("player").style.top === "470px")
			{
				alert("NICE!");
				window.location="game2intro.html";
					
					stop.onclick = function() 
					{
					clearTimeout(t);
					}
				
			}
		}
		
		//coordinates please
		function coordsPlz()
		{
		console.log(document.getElementById("player").style.left);
		console.log(document.getElementById("player").style.top);
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
		alert("try again")
		location.reload();
	}
}
function timer() {
    t = setTimeout(add, 10);
}