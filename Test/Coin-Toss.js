let score = JSON.parse(localStorage.getItem("score")) || {wins: 0,losses: 0};
let coinImage = JSON.parse(localStorage.getItem("coinImage")) || "./images/coin-toss.jfif";
let personalMessage = JSON.parse(localStorage.getItem("personalMessage")) || "";
let gameResult = JSON.parse(localStorage.getItem("gameResult")) || "Guess Heads or Tails";
updateGame();

function playGame(guess){
    if(tossCoin() === guess){
        score.wins++;
        personalMessage = "Nice Guess!";
    }
    else{
        score.losses++;
        personalMessage = "Unlucky!";
    }
    updateGame();
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("coinImage", JSON.stringify(document.querySelector(".coin-image").src));
    localStorage.setItem("personalMessage", JSON.stringify(personalMessage));
    localStorage.setItem("gameResult", JSON.stringify(gameResult));
}

function tossCoin(){
    if(Math.random() < 0.5){
        gameResult = "It's Heads";
        coinImage = "./images/head.jfif";
        return 'h';
        }
    else{
        gameResult = "It's Tails";
        coinImage = "./images/tail.jfif";
        return 't';
    }
}

function resetGame(){
    score.wins = 0;
    score.losses = 0;
    localStorage.removeItem("score");
    localStorage.removeItem("coinImage");
    localStorage.removeItem("personalMessage");
    localStorage.removeItem("gameResult");
    updateGame();
    document.querySelector(".personal-message").innerHTML = "Game Reset";
    document.querySelector(".coin-image").src = "./images/coin-toss.jfif";
    document.querySelector(".game-result").innerHTML = "Guess Heads or Tails";
}

function updateGame(){
    document.querySelector(".wins").innerHTML = `Wins: ${score.wins}`;
    document.querySelector(".losses").innerHTML = `Losses: ${score.losses}`;
    document.querySelector(".coin-image").src = coinImage;
    document.querySelector(".game-result").innerHTML = gameResult;
    document.querySelector(".personal-message").innerHTML = personalMessage;
}