var turn = 0;
var boxes = new Array(3);
for(i = 0; i < 3; i++){
	boxes[i] = new Array(3);
}
var gameOver = false;
var p1Score = 0;
var p2Score = 0;
var p1ScoreDisplay = document.querySelector("#p1Score");
var p2ScoreDisplay = document.querySelector("#p2Score");
var resetButton = document.querySelector("#reset");

setUpBoxes();


resetButton.addEventListener("click",function(){
	for(var i = 0; i < boxes.length; i++){
		for(var j = 0; j < boxes.length; j++){
			boxes[i][j].textContent = "";
			boxes[i][j].classList.remove("O");
			boxes[i][j].classList.remove("X");
		}
	}
});

function setUpBoxes(){
	fillBoxes();
	for(var i = 0; i < boxes.length; i++){
		for(var j = 0; j < boxes.length; j++){
			boxes[i][j].addEventListener("click", function(){
				if(this.classList.contains("X") == false && this.classList.contains("O") == false && gameOver == false){
					if(turn % 2 === 0){
						this.textContent = "X";
						this.classList.add("X");
					} else {
						this.textContent = "O";
						this.classList.add("O");
					}
					turn++;
					checkWinner();
				};
			});
		};
	}
}

function checkWinner(){
	checkPX();
	checkPO();
}

function fillBoxes(){
	var boxIndex = 0;
	var box = document.querySelectorAll(".box");
	for(var i = 0; i < 3; i++){
		for (var j = 0; j < 3; j++) {
			boxes[i][j] = box[boxIndex];
			boxIndex++;
		}
	}
}

function checkPX(){
	// Check if player X has won
	for(var i = 0; i < boxes.length; i++){
		//Check Rows
		if(boxes[i][0].classList.contains("X") && boxes[i][1].classList.contains("X") && boxes[i][2].classList.contains("X")){
			gameOver = true;
			p1Score++;
			p1ScoreDisplay.textContent = p1Score;
		}
		//Check Columns
		if(boxes[0][i].classList.contains("X") && boxes[1][i].classList.contains("X") && boxes[2][i].classList.contains("X")){
			gameOver = true;
			p1Score++;
			p1ScoreDisplay.textContent = p1Score;
		}
	}
	//Check Diagnols
	if(boxes[0][0].classList.contains("X") && boxes[1][1].classList.contains("X") && boxes[2][2].classList.contains("X")){
		gameOver = true;
		p1Score++;
		p1ScoreDisplay.textContent = p1Score;
	}
	if(boxes[0][2].classList.contains("X") && boxes[1][1].classList.contains("X") && boxes[2][0].classList.contains("X")){
		gameOver = true;
		p1Score++;
		p1ScoreDisplay.textContent = p1Score;
	}
}

function checkPO() {
	// Check if player O has won
	for(var i = 0; i < boxes.length; i++){
		//Check Rows
		if(boxes[i][0].classList.contains("O") && boxes[i][1].classList.contains("O") && boxes[i][2].classList.contains("O")){
			gameOver = true;
			p2Score++;
			p2ScoreDisplay.textContent = p2Score;
		}
		//Check Columns
		if(boxes[0][i].classList.contains("O") && boxes[1][i].classList.contains("O") && boxes[2][i].classList.contains("O")){
			gameOver = true;
			p2Score++;
			p2ScoreDisplay.textContent = p2Score;
		}
	}
	//Check Diagnols
	if(boxes[0][0].classList.contains("O") && boxes[1][1].classList.contains("O") && boxes[2][2].classList.contains("O")){
		gameOver = true;
		p2Score++;
		p2ScoreDisplay.textContent = p2Score;
	}
	if(boxes[0][2].classList.contains("O") && boxes[1][1].classList.contains("O") && boxes[2][0].classList.contains("O")){
		gameOver = true;
		p2Score++;
		p2ScoreDisplay.textContent = p2Score;
	}
}
