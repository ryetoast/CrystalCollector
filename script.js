 var targetNumber = 53;
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var html=
       "<p> Number to Get: " + targetNumber + "</p>" +
           "<p>Your Score: " + counter + "</p>" +
           "<p> Wins: " + wins + "</p>" +
           "<p> Losses: " + losses + "</p>"
         ;  
  // Now for the hard part. Creating multiple crystals each with their own unique number value.
  // We begin by expanding our array to include four options.
  var numberOptions = [];
  var imgSrc=["assets/coin.jpg","assets/diamond.jpg","assets/gem.jpg","assets/othergem.jpg"];
   // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < 4; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", imgSrc[i]);
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    numberOptions[i]=(Math.floor(Math.random() * 12) + 1);
    console.log(numberOptions)
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }
  initialize();
  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    if (counter === targetNumber) {
      alert("You win!");
      wins++;
      initialize();
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++;
      initialize();
    }
    updateDisplay();
  });

  //Lets psuedo code and build our functions down here since we are starting with one activities code.
  //Firstly we need an initialize function that runs at start up and every time a game is won or lost.
    //the initialize function will generate a random between 19-121 for the targetNumber
    // It will also populate the numberOptions array with four new randoms between 1-12
    //counter wil reset to zero.
    //the dynamic displays must also be triggered here so the game sets and resets properly.
    //a loop is already being used above to create the crystals. this loop must be used to generate different images for the final game.
      // basically you ned you change the src in the imageCrystal thing above to an array call that holds four images.
  //Secondly we need to update our dynamic displays and our conditionals to support our desired functionlity
    //basically instead of alerts we will use dynamic html to display wins losses target nmber and counter.
    //also the conditionals need to increment wins and osses as well as correctly call intialize.
function initialize(){
  targetNumber=(Math.floor(Math.random() * 121) + 19);
  counter=0;

   numberOptions[i]=(Math.floor(Math.random() * 12) + 1);
   imageCrystal.attr("data-crystalvalue", numberOptions[i]);
updateDisplay();
}
function updateDisplay(){
  var html=
       "<p> Number to Get: " + targetNumber + "</p>" +
           "<p>Your Score: " + counter + "</p>" +
           "<p> Wins: " + wins + "</p>" +
           "<p> Losses: " + losses + "</p>"
         ;  
    document.querySelector('#scoreboard').innerHTML=html;
}