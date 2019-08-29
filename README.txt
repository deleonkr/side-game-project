Kristine de Leon

05/07/2018

FINAL PROJECT FOR JOUR555

Project Title: I want you to love me - A dating game for human cat lovers


Ever see a cat inside an Amazon shipping box and want to take it home? Now you can! Go on a date with Bob Dylan the bengal cat. He'll ask you classic first date questions and give you four choices to respond. There's no such thing as a wrong answer on a date, but as you know, it may not always work out. Points are based on his whims, so try your best to woo him. 


How the game works:


You are on a date with a cat. The cat, named Bob Dylan, will ask you questions that you can answer with given choices. 


Based on the questions and answers that the cat asks, hearts are rewarded and stored at the top of the screen. The goal of the game is to get the most number of hearts you can. When the date is over, and if you have achieved the requisite number of hearts, the date is either a success or not. 


###About the Build 


**HTML5** - I stacked the home page and game page in separate divs and toggled their visibility based on click events. I then consolidated the end/win and game pages to prevent adding an extra page. :)


**CSS** - I was able to implement some simple CSS animation in the game, such as the drop down title on the home page, and the bobbing head on the second page. I borrowed some of the logic that we used in our James Brown exercise to execute bob of the head.


**Javascript** - I wrote the code in jQuery, as it was the easiest way for me to implement. I wrapped all of the questions into a very large object literal and was able to continuously feed each question and answer into a function. 

1) I used a for loop and conditionals to make hearts appear whenever the user/player selected a choice that encoded a nonzero number of hearts. Here’s my code using for loops:
	
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

2) I created an array of object questions. This allowed me to generate new questions easily after the click listener events.

3) I was inspired by Keith’s James Brown head and used it for the bobbing Bengal cat head. Whenever you click on the bobbing head, you’ll hear a cat meow or hiss … or get cat called!


###Development


I knew I wanted to a do a cat-themed choose your own adventure game, but it ended up evolving into a cat lover's dating game. After I had a solid idea of what the cat's personality was going to be like, I sketched out some ideas and chose some pictures to work with. I made the art in Photoshop with photos of my dead cat, Bob Dylan, (R.I.P.) and started coding the game. 

The royalty-free cat noises were downloaded from Audioblocks.org. 


###Future Improvements

Next time, I would like to add more cats with different personalities to my game. That way, the user will be able to choose which kitty they would want to go on a date with. :)
