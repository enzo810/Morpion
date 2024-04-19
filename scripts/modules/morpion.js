export class Morpion {
    constructor(game){
        let currentPlayer = 1;
            const temp = document.getElementsByClassName("cell");
            const grid = Array.from(temp);
            let divCurrentPlayer = document.getElementById("currentPlayer");
            divCurrentPlayer.textContent = "Joueur 1";
            let replayButton = document.getElementById("replay");
            for (let i = 0; i < 9; i++) {
                let element = grid[i];
                console.log(element);
                if(i <= 2){
                    element.setAttribute("data-x", i+1);
                    element.setAttribute("data-y", 1);
                }
                if(i > 2 && i <=5){
                    element.setAttribute("data-x", i-2);
                    element.setAttribute("data-y", 2);
                }
                if(i > 5){
                    element.setAttribute("data-x", i-5);
                    element.setAttribute("data-y", 3);
                }
                element.setAttribute("data-player", "aucun");
                element.addEventListener("click", function(){
                    if(element.getAttribute("data-etat") !== "use"){
                        if(currentPlayer === 1){
                            let X = document.createElement("p");
                            X.innerHTML="X";
                            element.appendChild(X);
                            element.setAttribute("data-player", currentPlayer)
                            element.setAttribute("data-etat", "use")
                            let player = element.getAttribute("data-player");
                            let elementy = parseInt(element.getAttribute("data-y"));
                            let points = 0;
                            for (let i = 1; i < 4; i++) {
                                let elementTested = document.querySelector(`[data-x="${i}"][data-y="${elementy}"]`)
                                if(elementTested.getAttribute("data-player") === player){
                                    points += 1;
                                }
                            }
                            if(points === 3){
                                let playerWonDiv  = document.getElementsByClassName("win-display")[0]
                                playerWonDiv.textContent = `JOUEUR ${currentPlayer} A GAGNÉ`;
                                console.log(playerWonDiv);
                                game.setAttribute("class", "won");
                                replayButton.addEventListener("click", function(){
                                    for (let i = 0; i < 9; i++) {
                                        let element = grid[i];
                                        element.textContent = "";
                                        element.setAttribute("data-player", "aucun");
                                        element.setAttribute("data-etat", "");
                                        element.setAttribute("data-x", "");
                                        element.setAttribute("data-y", "");

                                    }
                                })
                            } else {
                                points = 0;
                            }
                            let elementx = parseInt(element.getAttribute("data-x"));
                            for (let i = 1; i < 4; i++) {
                                let elementTested = document.querySelector(`[data-x="${elementx}"][data-y="${i}"]`)
                                if(elementTested.getAttribute("data-player") === player){
                                    points += 1;
                                }
                            }
                            if(points === 3){
                                let game = document.getElementById("grid");
                                let playerWonDiv  = document.getElementsByClassName("win-display")[0]
                                playerWonDiv.textContent = `JOUEUR ${currentPlayer} A GAGNÉ`;
                                console.log(playerWonDiv);
                                game.setAttribute("class", "won");
                            } else {
                                points = 0;
                            }
                            currentPlayer = 2;
                            divCurrentPlayer.textContent = `Joueur ${currentPlayer}`;
                        } else {
                            let O = document.createElement("p");
                            O.innerHTML="O";
                            element.appendChild(O);
                            element.setAttribute("data-player", currentPlayer)
                            element.setAttribute("data-etat", "use")
                            let player = element.getAttribute("data-player");
                            let elementy = parseInt(element.getAttribute("data-y"));
                            let points = 0;
                            for (let i = 1; i < 4; i++) {
                                let elementTested = document.querySelector(`[data-x="${i}"][data-y="${elementy}"]`)
                                if(elementTested.getAttribute("data-player") === player){
                                    points += 1;
                                }
                            }
                            if(points === 3){
                                let game = document.getElementById("grid");
                                let playerWonDiv  = document.getElementsByClassName("win-display")[0]
                                playerWonDiv.textContent = `JOUEUR ${currentPlayer} A GAGNÉ`;
                                console.log(playerWonDiv);
                                game.setAttribute("class", "won");
                            } else {
                                points = 0;
                            }
                            let elementx = parseInt(element.getAttribute("data-x"));
                            for (let i = 1; i < 4; i++) {
                                let elementTested = document.querySelector(`[data-x="${elementx}"][data-y="${i}"]`)
                                if(elementTested.getAttribute("data-player") === player){
                                    points += 1;
                                }
                            }
                            if(points === 3){
                                let game = document.getElementById("grid");
                                let playerWonDiv  = document.getElementsByClassName("win-display")[0]
                                playerWonDiv.textContent = `JOUEUR ${currentPlayer} A GAGNÉ`;
                                console.log(playerWonDiv);
                                game.setAttribute("class", "won");
                            } else {
                                points = 0;
                            }
                            currentPlayer = 1;
                            divCurrentPlayer.textContent = `Joueur ${currentPlayer}`;
                        }  
                    }
                })
            }
        }
    }
