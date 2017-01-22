var colors = [];

var squares = document.querySelectorAll(".square");
var colorHead = document.querySelector("#winningColor");
var messageDisplay = document.querySelector("#message");
var winningColor = "";
var squareNum = 6;
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

reset.addEventListener("click", function() {
	resetGame();
});

easy.addEventListener("click", function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	squareNum=3;
	resetGame();
	for (var i = 0; i < squares.length; i++) {
		if(!colors[i]){
			squares[i].style.display = "none";
		}
	}
	});

hard.addEventListener("click", function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	squareNum=6;
	resetGame();
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
		}
	}
});

//MAIN PROCESSING
// 1. make an array of random colors
colors = setColors(squareNum);
	// TESTER console.log(colors);
winningColor = pickColor();
	// TESTER console.log(winningColor);

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
		squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//compare color to picked color
	if(this.style.background === winningColor){
		messageDisplay.textContent = " Correct! ";
		changeToWinningColors(winningColor);
		h1.style.background = winningColor;
		reset.textContent = "Play Again?";
	}
	else{
	this.style.background = "#232323";	
	messageDisplay.textContent = "try again";
	}
	});
}	



//FUNCTIONS
/**  Takes the initial colors of 

*/
function pickColor(){
	var randNum = Math.floor(Math.random() * (colors.length));
	colorHead.textContent = colors[randNum];
	return colors[randNum];
}

function changeToWinningColors(tempColor) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = tempColor;
	}
}

	
// creates an array, adds random RGB numbers according
// to amount of num
function setColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
		// TESTER: console.log(arr[i]);
	}	
	return arr;
}

function randomColor(){
	var nums = [];
	var str ="";
	var color;
	for (var j = 0; j< 3; j++) {
			nums.push(Math.floor(Math.random() * (255 + 1)));
		// TESTER: console.log(nums[j]);
		}

	color = str.concat(
		"rgb(", 
		nums[0],", ", 
		nums[1],", ", 
		nums[2], ")");
	return color;
}

function resetGame(){
	colors = setColors(squareNum);
	winningColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
		//squares[i].style.background = "#232323";
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
	reset.textContent = "New Colors";

}