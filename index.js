let playerOneScore = 0;
let playerTwoScore = 0;
function rollDice(){ 
    document.querySelector(".image1").classList.remove("rotate-die")
    document.querySelector(".image2").classList.remove("rotate-die")
    let player1 = Math.round(Math.random()*5) + 1;
    let player2 = Math.round(Math.random()*5) + 1; 
    //update the image
    let image1 = "dice-" + player1 + ".svg" 
    let image2 = "dice-" + player2 + ".svg" 
    document.querySelector(".player-1 img").src = image1
    document.querySelector(".player-2 img").src = image2 

    //check if the name value is set and update the Player name
    let playerOneName = document.querySelector(".p1-name").value
    let playerTwoName = document.querySelector(".p2-name").value

    //declare the winner and update player score
    document.querySelector(".win-result").classList.add("result-box")
    if(player1 === player2){ 
        document.querySelector(".result-box").textContent = "Draw"
    }
    else if (player1 > player2){
        document.querySelector(".result-box").textContent = playerOneName + " Wins!"
        document.querySelector(".p1-score").textContent = ++playerOneScore
    }
    else {
        document.querySelector(".result-box").textContent = playerTwoName + " Wins!"
        document.querySelector(".p2-score").textContent = ++playerTwoScore
    }

}


/**
 * set the die image back to the rotating dice
 * remove result class
 * reset each player scores and name fields
 */
function resetGame(){
    playerOneScore = 0;
    playerTwoScore = 0;
    document.querySelector(".p1-score").textContent = 0;
    document.querySelector(".p2-score").textContent = 0;

    document.querySelector(".image1").classList.add("rotate-die")
    document.querySelector(".image2").classList.add("rotate-die")

    document.querySelector(".player-1 img").src = "dice_logo2.png.png"
    document.querySelector(".player-2 img").src = "dice_logo2.png.png"

    document.querySelector(".result-box").textContent = ""
    document.querySelector(".win-result").classList.remove("result-box")

}
