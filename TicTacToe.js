let turn = "x";
let audio = new Audio("start.mp3");
let button = document.getElementById("btn");
let gameover = false;
//CHANGE THE TURN X TO 0 AND ALSO 0 TO X//
const changeTurn = () => {
    if (turn === "x") {
        return "0";
    }
    else {
        return "x";

    }
}
//CHECK THE WINNER X OR 0//
const check = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    arr.forEach(e => {

        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")
        ) {

            document.querySelector(".para").innerText = boxtext[e[0]].innerText + " is won";
            gameover = true;
            document.querySelector(".imges").getElementsByTagName("img")[0].style.width = "50px";
            audio.play();
        }
    })
}
//SHOW THE TURN ON BOXTEXT X TO 0 AND ALSO UPDATE THE PARA//
let row = document.getElementsByClassName("row_1");
Array.from(row).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            check();
            if (!gameover) {
                document.getElementsByClassName("para")[0].innerText = "Turn for" + turn;
                
            }
        }

    })
})

//RESET BUTTON//
btn.addEventListener("click", () => {
    let boxtext = document.getElementsByClassName("boxtext");
    Array.from(boxtext).forEach((element) => {
        element.innerText = '';

    })
    if (gameover) {
        turn = "x";
        document.getElementsByClassName("para")[0].innerText = "Turn for " + turn;
        document.querySelector(".imges").getElementsByTagName("img")[0].style.width = "0px";
        audio.pause();
    }
})