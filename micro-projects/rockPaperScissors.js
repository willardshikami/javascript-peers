//variable to take user input
var userChoice = prompt("Rock, Paper, Scissors?");
var computerChoice = Math.random();

//if statement to give rock paper & scissors random values
if(computerChoice < 0.34){
    computerChoice = "Rock";    
}else if(computerChoice <= 0.67){
    computerChoice = "Paper";    
}else{
    computerChoice = "Scissors";
}

//Function to iterate throught the various choices
function compare(choice1, choice2){
    if(choice1 === choice2){
        return "It's a Draw";
    }
    
    if(choice1 === "Rock"){
        if(choice2 === "Scissors"){
            return "Rock Wins";
        }else{
            return "Paper Wins";   
        }  
    }
    
    if(choice1 === "Paper"){
        if(choice2 === "Rock"){
            return "Paper Wins";
        }else{
            return "Scissors Wins";   
        }
    }
    
    if(choice1 === "Rock"){
        if(choice2 === "Scissors"){
            return "Rock Wins";
        }else{
            return "Scissors Wins";    
        }
    }

    if(choice1 === "Scissors"){
        if(choice2 === "Rock"){
            return "Rock Wins"
        }else{
            return "Scissors Wins"
        }
    }
}

compare(userChoice, computerChoice);