/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge;

if(votingAge >= 18) {
    console.log(true);
} else {
    console.log(false);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let legalDrinkingAge = 21;
let patronAge = 22;
let bartender;

if (patronAge >= legalDrinkingAge) {
    bartender = "What would you like to drink?";
} else {
    bartender = "Sorry Kid, you are to young to be served here";
}

console.log(bartender)

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string = "1999";
let integer = Number(string);

console.log(integer);

//Task d: Write a function to multiply a*b 

function multiply (a,b) {
    return a*b;
}

console.log(multiply(2,2));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age) {
    return age * 7;
}

console.log(dogYears(34));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

// Note to user months should be enterd as a decimal. Example 2 months = .2

function dogFeeder(weight, age) {
    if(age >= 1 ){                                                      // adult dogs at least 1 year

        if(weight <= 5) {                                               // up to 5 lbs - 5% of their body weight
            return .05 * weight + "lbs of dog food";

        } else if (weight > 5 && weight <=10) {                         // 6 - 10 lbs - 4% of their body weight
            return .04 * weight + "lbs of dog food";

        } else if (weight > 10 && weight <= 15) {                       // 11 - 15 lbs - 3% of their body weight
            return .03 * weight + "lbs of dog food";

        } else if (weight > 15) {                                        // > 15lbs - 2% of their body weight 
            return .02 * weight + "lbs of dog food";
        }

    } else if (age < 1){                                                // Puppies less than 1 year

        if(age >= .2 && age <= .4) {                                    // 2 - 4 months 10% of their body weight
            return .1 * weight + "lbs of dog food";

        } else if (age >= .4 && age <= .7) {                            // 4 - 7 months 5% of their body weight 
            return .05 * weight + "lbs of dog food";

        }else if (age >= .7 && age <= 1) {                              // 7 - 12 months 4% of their body weight
            return .04 * weight + "lbs of dog food";
        }
    } 
}
 
    console.log(dogFeeder(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


function rpsGame (humanChoice) {

    let humanChoiceToNumber;
    let computerChoice = Math.floor(Math.random() * Math.floor(3));
    console.log(computerChoice);

    // take in humanChoice (rock, paper, scissors) transform into a numeric repersentitive. 

    if(humanChoice.toLowerCase() === "rock"){
        humanChoiceToNumber = 2;
    } else if (humanChoice.toLowerCase() === "scissors") {
        humanChoiceToNumber = 1;
    }else if(humanChoice.toLowerCase() === "paper"){
        humanChoiceToNumber = 0;
    } else {
        return "This is not an accepted input";
    }

    console.log(humanChoiceToNumber);
    // possible combinations of game play 

    if(humanChoiceToNumber === 2 && computerChoice === 0) {
        return "Sorry my friend you Lose";
    }else if (humanChoiceToNumber === 2 && computerChoice === 1) {
        return "You win";
    }else if (humanChoiceToNumber === 2 && computerChoice === 2){
        return "You tied with the computer";
    }

    else if (humanChoiceToNumber === 1 && computerChoice === 2){
        return "Sorry my friend you Lose";
    }else if (humanChoiceToNumber === 1 && computerChoice === 0){
        return "You win";
    }else if (humanChoiceToNumber === 1 && computerChoice === 1){
        return "You tied with the computer";
    }

    else if (humanChoiceToNumber === 0 && computerChoice === 2){
        return "You win";
    } else if (humanChoiceToNumber === 0 && computerChoice === 1){
        return "Sorry my friend you Lose";
    }else if(humanChoiceToNumber === 0 && computerChoice === 0){
        return "You tied with the computer";
    } else {
        return "Error please refresh and try again.";
    }
}

console.log(rpsGame("Rock"));
 

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kilometerToMiles (kilometers) { 
    return Math.round(0.62137119 * kilometers) + " miles";         // 1 kilometer is equal to 0.621371 miles
}

console.log(kilometerToMiles(10));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCentimeters (feet){
    return (feet * 30.48) + " centimeters";
}

console.log(feetToCentimeters(10));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, 
// (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong (startingNumber) {
    for(let i = startingNumber; i>=1; i--){
        console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around, " + (i - 1) + " bottles of soda on the wall.");
    }
}

annoyingSong(99);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function GradeCalc (gradeOutOfOneHundred) {
    if (gradeOutOfOneHundred <= 60){
        return "You have recieved an F grade";
    }else if(gradeOutOfOneHundred > 60 && gradeOutOfOneHundred <= 69){
        return "You have recieved a D grade";
    } else if(gradeOutOfOneHundred >= 70 && gradeOutOfOneHundred <= 79){
        return "You have recieved a C grade";
    } else if(gradeOutOfOneHundred >= 80 && gradeOutOfOneHundred <= 89){
        return "You have recieved a B grade";
    } else if (gradeOutOfOneHundred >= 90) {
        return "You hae recieved an A grade"
    } else {
        return "You have recieved an incomplete"
    }
}
 
console.log(GradeCalc(95));
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





