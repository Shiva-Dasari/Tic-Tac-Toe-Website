let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let megContainer = document.querySelector(".mesg-container");
let mesg = document.querySelector("#mes");

let count = 0 ;

let turn0 = true; // true == o and false == x

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach( (box) =>{
    box.addEventListener("click" , () =>{
        // console.log("clicked");
        if ( turn0 ){
            box.innerText = "o";
            turn0 = false;
            count++;
        }else{
            box.innerText = "x";
            turn0 = true;
            count++;
        }
        box.disabled = true;

        checkWinner();
    });
});

const enabledBoxes = () =>{
    for ( let box of boxes ){
        box.disabled = false;
        box.innerText="";
    }
};
const disabledBoxes = () =>{
    for ( let box of boxes ){
        box.disabled = true;
    }
};

showWinner = (Winner) =>{
    if ( count === 9 ){
        mesg.innerText = "Match is an draw , Not Player Wins the game";
        megContainer.classList.remove("hide");
        disabledBoxes();

    }else{
        mesg.innerText = `Congratulations, Winner is ${Winner}`;
        megContainer.classList.remove("hide");
        disabledBoxes();
    }
};

checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if ( pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if ( pos1Val === pos2Val && pos2Val === pos3Val ){
                // console.log("Winner" , pos1Val);

                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    megContainer.classList.add("hide");
};

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);