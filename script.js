var comp_choice = "";
var comp_increment = 0;
var player_increment = 0;
const player_score = document.querySelector(".skor_pemain");
const comp_score = document.querySelector(".skor_comp");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

function computerMove(){
    const possibility = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * possibility.length);
    const move = possibility [random];
    if(move == "rock"){
        return 0;
    }else if(move == "scissor"){
        return 1;
    }else if(move == "paper"){
        return 2;
    }
}

function play(movement){
    var compMove = computerMove();
    comp_choice = compMove;
    plaMove = movement;
    
    if((plaMove + 1) % 3 == comp_choice){
        comp_increment++
        comp_score.innerHTML = comp_increment;
    }else if(plaMove == comp_choice){
        console.log("SERI DECK");
    }else{
        player_increment++
        player_score.innerHTML = player_increment; 
    }
    lastMove(plaMove, comp_choice);
}

function lastMove(player, computer){
    $('.player').attr("src", lastChoice(player));
    $('.computer').attr("src", lastChoice(computer));
}

function lastChoice(choice){
    if(choice == 0){
        return "img/rock.png"
    }
    else if(choice == 1){
        return "img/scissor.png"
    }
    else if(choice == 2){
        return "img/paper.png"
    }
}

function reset(){
    player_increment = 0;
    player_score.innerHTML = player_increment;
    comp_increment = 0;
    comp_score.innerHTML = comp_increment;
}