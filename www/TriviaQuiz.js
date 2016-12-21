// TriviaQuiz constructor
// Set up the initial object properties
var TriviaQuiz = function(t, x) {
	this.target = t;
	this.question_data = x;
	this.current_question = -1;
	this.score = 0;
	// Start the first question
	this.nextQuestion();
}

// TriviaQuiz.nextQuestion
// Processes the next question by manipulating the DOM
TriviaQuiz.prototype.nextQuestion = function () {
	
	// Increment the question count
	this.current_question++;

	// If no more questions, end the game
	if (this.current_question == this.question_data.length) {
		this.endGame();
		return;
	}

	var this_obj = this.question_data[this.current_question];
	var this_question = this_obj["question"];
	var this_answers = this_obj["answers"];
	
	// Fill the DOM with the current question and answers
	this.target.find('.question').html(this_question);
	for (var i=0; i<this_answers.length; i++) {
		this.target.find('.answers .answer-' + i).html(this_answers[i]["text"]);
	}
	
	// Set the click events for the questions
	this.activateClickEvents();

}

// TrviaQuiz.activateClickEvents
// When clicking on each answer, check whether it is correct
TriviaQuiz.prototype.activateClickEvents = function () {
	// Temporary "this" store as overloaded in the anonymous function below
	game = this;
	this.target.find('.answers div').on('click', function () {
		// Find the position number of the answer and check it
		var ans_index = $(this).index('.answers div');
		game.checkAnswer(ans_index);
	});
}

// TriviaQuiz.checkAnswer
// Validate the chosen answer and if correct, go to the next question
// If wrong, do something else
TriviaQuiz.prototype.checkAnswer = function (i) {
	// Use the question property to work out if this answer is correct
	var this_obj = this.question_data[this.current_question];
	var this_answers = this_obj["answers"];
	if (this_answers[i]["correct"]) {
		// Add the appropriate points and move on to the next question
		this.score++;
		this.updateScore();
		this.nextQuestion();
	}
	else {
		// Do something here
		alert("Try again");
	}
}

// TriviaQuiz.updateScore
// Updates the score box with the newest score count
TriviaQuiz.prototype.updateScore = function () {
	this.target.find('.scoreBox .score').html(this.score);
}

// TriviaQuiz.endGame
// Finish the game and show highscore table
TriviaQuiz.prototype.endGame = function () {
	alert("You got " + this.score + " out of " + this.question_data.length + " questions correct.\n" +
		"Thanks for playing");
	this.target.html('');
}