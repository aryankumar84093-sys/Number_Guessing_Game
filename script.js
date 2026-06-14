let max = prompt("Enter the max nuber:");
let random =Math.floor(Math.random()*max+1);
let guess = prompt("Enter your guess: ");

while(true){
    if(guess=="quit"){
        console.log("You quit the game");
        break;
    }
    else if(guess==random){
        console.log("You guessed Right,Congrats");
        break;
    }
    else if(guess>random){
        alert("Guess is large!");
    }
    else if(guess<random){
        alert("Guess is small!")
    }
    guess = prompt("Enter your guess again..");
}