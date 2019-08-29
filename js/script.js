/* script.js 
   Author: Kristine de Leon
   Date: 05/07/2018
*/


$(document).ready(function(){ 
	console.log('Love meter activated!');

	let player = {
    	name: [],
   		points: 0,
  	}

	//make an array of an object of questions
	let questions = [
		{ask: 'What makes you fall in love?',
			answers: [
		    { word: 'Hair color',
		      points: 0,
		    },
		    { word: 'Eye color',
		      points: 1,
		    },
		    { word: 'Personality',
		      points: 2,
		    },
		    { word: 'Cuddle-ability',
		      points: 3,
		    }
		   	],
		},
	    {ask: 'What are you looking for in a pet?',
			answers: [
			{ word: 'A Warm Body To Share A Bed With',
			points: 3,
			},
			{ word: 'Shared Expenses',
			points: 1,
			},
			{ word: 'Emotional Support',
			points: 2,
			},
			{ word: 'A thing to talk at.',
			points: 0,
			},
			]
	    },
	    {ask: 'What is your favorite hobby?',
			answers: [
			{ word: 'Running',
			points: 0,
			},
			{ word: 'Sleeping',
			points: 3,
			},
			{ word: 'Snacking',
			points: 2,
			},
			{ word: 'Farting',
			points: 1,
			},
			]
	    },
	    {ask: 'How do you define love?',
	      answers: [
	      { word: 'Sexual',
	        points: 1,
	      },
	      { word: 'Emotional',
	        points: 2,
	      },
	      { word: 'Intellectual',
	        points: 3,
	      },
	      { word: 'Financial',
	        points: 0,
	      },
	      ]
	    },
	    {ask: 'What is your favorite way to show affection?',
	      answers: [
	      { word: 'A high-five',
	        points: 0,
	      },
	      { word: 'A kiss',
	        points: 2,
	      },
	      { word: 'Pet on the head',
	        points: 1,
	      },
	      { word: 'A hug.',
	        points: 3,
	      },
	      ]
	    },
	    {ask: 'What\'s your biggest weakness?',
	      answers: [
	      { word: 'Plastic bags.',
	        points: 3,
	      },
	      { word: 'Brown paper bags.',
	        points: 2,
	      },
	      { word: 'Boxes.',
	        points: 1,
	      },
	      { word: 'Reusable plastic bags.',
	        points: 0,
	      },
	      ]
	    },
	    {ask: 'How would you describe your perfect day?',
	      answers: [
	      { word: 'Reading a book all day',
	        points: 3,
	      },
	      { word: 'Eating yummy food on a hammock',
	        points: 0,
	      },
	      { word: 'Chilling at the beach',
	        points: 1,
	      },
	      { word: 'Climbing a 14000-ft mountain',
	        points: 2,
	      },
	      ]
	    },
	    {ask: 'Which game would you rather play?',
	      answers: [
	      { word: 'Dominion',
	        points: 3,
	      },
	      { word: 'Mario Kart',
	        points: 0,
	      },
	      { word: 'Chess',
	        points: 2,
	      },
	      { word: 'Settlers of Catan',
	        points: 1,
	      },
	      ]
	    },
	     {ask: 'If you were to sing me a lullaby song?',
	      answers: [
	      { word: '"This is the Day" by The The',
	        points: 3,
	      },
	      { word: '"Fade Into You" by Mazzy Star',
	        points: 2,
	      },
	      { word: '"Hairdresser on Fire" by The Smiths',
	        points: 1,
	      },
	      { word: '"By Your Side" by Beachwood Sparks',
	        points: 0,
	      },
	      ]
	    },
	    {ask: 'What are you looking for in a pet?',
	      answers: [
	      { word: 'A companion I can bring to work.',
	        points: 0,
	      },
	      { word: 'Someone who will eat my leftovers',
	        points: 1,
	      },
	      { word: 'An animal pal who can see ghosts.',
	        points: 3,
	      },
	      { word: 'Someone who will greet me at the door.',
	        points: 2,
	      },
	      ]
	    },
  	]

  	// console.log(questions)
  	let charResponses = ['Are you feline hurt?,', 'Purrfect,', 'Ummm...sure OK,', 'What dat again,', 'Let\'s paws and reflect', 'That\'s im-paw-sible,', 'Purrrfect,', 'Ex-squeeze me,', 'If I toss a stick, will you go away?', 'Doggone it,']
  
	const $playButton = $('#submit');
	let counter = 0;
	let charCounter = 0;



	//when button is clicked, start the game
	if($playButton) {
		$playButton.submit(start);

		//function to start the game:
		function start(event) {

			event.preventDefault();
			const $homepage = $('#homepage');
			const $gamepage = $('#gamepage');

			//hide home page and show game page
			$homepage.css('visibility', 'hidden');
			$gamepage.css('visibility', 'visible');

			//grab user input name and store it in the object
			let $enteredName = $('#input').val();
			player.name.push($enteredName);

			//call the makeQuestion function at the counter
			makeQuestion(counter);
	    };
	}

	//loop through the questions for user to select answer
	function makeQuestion() {

		const $questionbox = $('#questionbox');
		const $responsebox = $('#responsebox');
		$responsebox.css('visibility','hidden');
		$questionbox.css('visibility','visible');


		// create a variable called questionask
		let $questionask = $('#question');

		//print the current question
		$questionask.html(questions[counter].ask);

		//loop through all of the answers
		for (let j=0; j < questions[counter].answers.length; j++) {
			let $answer = $('.answer')
			console.log($answer)

	  		//print the current answer
	  		// $answer[j].html(questions[counter].answers[j].word); <- this doesn't work :'(
	   		$answer[j].innerHTML=questions[counter].answers[j].word;
		};
	}

	//call makeHearts function
	makeHearts();


	//makehearts function definition
  	function makeHearts(){
		for (let i=0; i < questions[counter].answers.length; i++){
			let $answer = $('.answer')

        	//grab the points of the each answer
      		$answer[i].points = questions[counter].answers[i].points;

      		//store the points in a variable called nodePoints
      		let nodePoints = $answer[i].points;
      		console.log(nodePoints);

      		//add event listener
       		$answer[i].addEventListener('click',function(){
      		// $answer[i].click(function(){ <- this doesn't work :'(

        		//on click, add the points of the answer to the current points
        		player.points += nodePoints;
        		console.log(player.points);

        		//render the points into hearts
        		let score = player.points;
        		let hearts = ' ';

        		//loop through the score
        		for (let n=0; n < score; n++) {

          			//change the score into a heart
          			hearts += '&hearts;'
        		}

		        //increase counter
		        counter++;
		        console.log(counter);

		        $('#hearts').html(hearts);
		        charTalk();
		        getWinner();

		    });
    	};
  	}

  	//make character respond
  	function charTalk() {
		const $questionbox = $('#questionbox');
		const $responsebox = $('#responsebox');
		const $response = $('#response');
		const $nextbutton = $('#next');

		//hide question box, and then show response box
		$responsebox.css('visibility','visible');
		$questionbox.css('visibility','hidden');

		//print in the response box the character's response
		$response.html(charResponses[charCounter] + ' ' + player.name);

		//increase char(acter) response counter
		charCounter++;

		//when next button is clicked, run makeQuestion again
		if ($nextbutton) {
			$nextbutton.click(function() {
		    	makeQuestion(counter);
		  	});
		};
  	}

	function getWinner() {
		const $nextButton = $('#next')
		const $lovemeter = $('#lovemeter')
		const $winnerbox = $('#winnerbox')
		const $responsebox = $('#responsebox');

		//if the loop has run 10 times & player points is more than 20, then print winning statement
		if ((player.points >= 20) && (counter === 10)) {

			//winner is printed in the the result box
			$winnerbox.html('It\'s official: Bob Dylan and ' + player.name + ' are in love!');

			//toggle off visibility of next button, response box, lovemeter, and winnerbox
			$nextButton.css('visibility','hidden');
			$responsebox.css('visibility','hidden');
			$lovemeter.css('visibility','hidden');
			$winnerbox.css('visibility','visible');
		}

		//if the loop has run 10 times & player points is less than 20, then print losing statement
		else if ((player.points <= 20) && (counter === 10)){
		  	//loser is printed in the the result box
		  	$winnerbox.html('You\'re litter-ally appawling! Get outta here meow, ' + player.name + '!');

		  	//toggle off visibility of next button, response box, lovemeter, and winnerbox
		  	//toggle off next button
		  	$nextButton.css('visibility','hidden');
		  	$responsebox.css('visibility','hidden');
		  	$lovemeter.css('visibility','hidden');
		  	$winnerbox.css('visibility','visible');
		};
	}

	//grab the reset button
	let $resetButton = $('#reset');

	//when the button is clicked, reset game
	if($resetButton) {
		$resetButton.click(reset);
		function reset() {
	  		location.reload();
		};
	};



	/* SOUNDS THE CAT CAN MAKE  -- BASED ON THE CODE FROM KEITH PLOCEK */

	// only gets run when you call this function.
	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
	    	j = Math.floor(Math.random() * (i + 1));
	    	x = a[i];
	    	a[i] = a[j];
	    	a[j] = x;
		}
	}

	var bin = ["media/cat2.wav","media/cat-purr.wav","media/cat-whistle-2.wav","media/cat-meow3.wav","media/cat-hiss.wav","media/cat-meow.wav"];

	var leng = bin.length;

	var rando = Math.floor((Math.random() * length) + 1);

//	console.log(rando);

	shuffle(bin);

	console.log(bin);
	//here, you'll see that it's different everytime.

	$("#gamecharhead").click(function(){

		$("#cat-noise").attr("src", bin[rando]);
		$("#cat-noise")[0].play();

		$("#cat-noise").on('playing', function(){
			$("#gamecharhead").removeClass("jiggle");
		});

		$("#cat-noise").on('playing', function(){
			$("#gamecharhead").addClass("jiggle");
		});


		console.log(bin);

		//add to end of the array with push so that it could loop.
		//take the first thing and take to the end. to loop.
		bin.push(bin[0]);
		bin.shift();
	});


}); //end document.ready block

