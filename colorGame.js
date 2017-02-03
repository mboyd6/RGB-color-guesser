var colors = [];
var winningColor;
var squareNum = 6;
var squares = document.querySelectorAll(".square");
var colorHead = document.querySelector("#winningColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var modeButtons = document.querySelectorAll(".mode");


init();

//FUNCTIONS
function init(){
//mode buttons
	setUpModeButtons();
// square event listeners
	setUpSquares();
// new game button
	setUpResetButton();
// initializes the first color options
	resetGame();
}

function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? squareNum = 3 : squareNum = 6;
			resetGame();
		});
	}
}
function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].style.background = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
		if(this.style.background === winningColor){
			changeToWinningColors(winningColor);
		}
		else{
		this.style.background = "#232323";	
		messageDisplay.textContent = "try again";
		}
		});
	}	
}

function setUpResetButton(){
	reset.addEventListener("click", function() {
	resetGame();
});
}

//resets the game 
function resetGame(){
	colors = setColors(squareNum);
	winningColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	reset.textContent = "New Colors";
	messageDisplay.textContent = "";

}

//returns an array of random colors as long as the num specified
function setColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
		// TESTER: console.log(arr[i]);
	}	
	return arr;
}

// used in setColor() function. returns an random color formatted
// like "rgb(33, 54, 222)"
function randomColor(){
	var nums = [];
	var str ="";
	var color;
	for (var j = 0; j< 3; j++) {
			nums.push(Math.floor(Math.random() * (255 + 1)));
		}

	color = str.concat(
		"rgb(", 
		nums[0],", ", 
		nums[1],", ", 
		nums[2], ")");
	return color;
}

//picks a winning color in the format "rbg(44, 33, 60)"
function pickColor(){
	var randNum = Math.floor(Math.random() * (colors.length));
	colorHead.textContent = colors[randNum];
	return colors[randNum];
}

//used when the winning color is clicked
function changeToWinningColors(tempColor) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = tempColor;
	}
	h1.style.background = winningColor;
	messageDisplay.textContent = " Correct! ";
	reset.textContent = "Play Again?";
}


