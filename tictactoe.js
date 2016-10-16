        var playerOne = "X";
        var computerTurn = "O";
        var cells = document.getElementsByClassName('cells');
        var X = document.querySelector("#button-x");
        var O = document.querySelector("#button-o");
    
        function selectPlayer(button){
            if(X){
                playerOne == "X";
                computerTurn == "O";
            } else if(O){
                playerOne == "O";
                computerTurn == "X";
            } else {}
        }

        function startGame(){
           for(var i = 1; i <=9; i++) {
            clearGame(i); 
            document.turn = playerOne;
            document.winner = null;
            displayOutcome(document.turn + " is up first!");
            }
        }

        function clearGame(number) {
            document.getElementById(number).innerHTML = "";
            
        }


        /* broken script
        * when do I call this? 
        * is this defined correctly?
        */
        function resetGame(){
            for(var i = 1; i <=9; i++) {
                if(checkForWinner() === true && checkForDraw() === true){
                clearGame(i);
                }
            }
        }


        function displayOutcome(msg) {
            document.getElementById("outcome").innerHTML = msg;
        }


        function nextMove(cell) {
            if (document.winner != null) {
                    displayOutcome(document.winner + " already won the game.");
            
            
            } else if(cell.innerHTML === ""){
                cell.innerHTML = document.turn;
                switchPlayer();
                //playNextAvailCell();
                playRandomCell();
                switchPlayer();
                console.log(board());

                 
            } else {
                displayOutcome("That square is already used.");
            }
        }

        function switchPlayer() {
           
            if(checkForWinner(document.turn)) {
                displayOutcome("Congrats, " + document.turn + ". You Win!")
                document.winner = document.turn;

            } else if(checkForDraw(document.turn)) {
                displayOutcome("It's a draw.") 
            

            } else if(document.turn === playerOne){
                document.turn = computerTurn;
                //displayOutcome("It's " + document.turn + " turn.")
        

            } else {
                document.turn = playerOne;
            }  
        }
    
        
        function board() {  
        //returns representation of empty and full cells on board
            document.cellArr = [];
            for(var i = 1; i <= 9; i++) {
                document.cellArr.push(getBox(i));       
            }
            return document.cellArr;
        }
        
        /* Inactive function 
         *function playNextAvailCell() {
         *
         *    for(var i = 0; i < 9; i++) {
         *        if(cells[i].innerHTML !== ""){
         *            cells[i] = cells.innerHTML
         *            continue;
         *        }
         *        else {
         *            cells[i].innerHTML = computerTurn;
         *                cells[i] = cells.innerHTML
         *                   break;    
         *        }
         *
         *    }
         *   
         *  }
         */

        var emptyStrArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        
        function playRandomCell() {
            for(i = 0; i <= 9; i++) {
            var randNum = Math.floor(Math.random() * (emptyStrArr.length));
                if(cells[randNum].innerHTML !== "") {
                    continue;
                }
                else {
                    cells[randNum].innerHTML = computerTurn;
                    break;
                }
            }
        }
        
        
        function pickRandCell() {
            //stores integer in index randNum
            var randNum = Math.floor(Math.random() * (emptyStrArr.length));
            //stores random cell using emptyStrArr 
            var toPlay = emptyStrArr[randNum];
            //deletes that integer from emptyStrArr 
            emptyStrArr.splice(randNum, 1);
            //returns cell to be played by computer player
            return toPlay;
        }


        function checkForWinner(move) {
            var result = false;
            if (checkRow(1, 2, 3, move) || 
                checkRow(4, 5, 6, move) ||
                checkRow(7, 8, 9, move) || 
                checkRow(1, 4, 7, move) ||
                checkRow(2, 5, 8, move) ||
                checkRow(3, 6, 9, move) ||
                checkRow(1, 5, 9, move) ||
                checkRow(3, 5, 7, move)) {
                
                result = true;
            }
            return result;
        }

        function checkRow(a, b, c, move) {
            var result = false;
            if(getBox(a) === move && getBox(b) === move && getBox(c) === move){
                result = true;
            }

            return result;
        } 

        

        function getBox(number) {
            var cellId = document.getElementById(number).innerHTML;
            return cellId;

        }

        
        function checkForDraw() {
            var result = false;
            if(isBoardFull() === true && checkForWinner() === false) {
            result = true;
            }
            return result;
        }

        
        function isBoardFull(cells) {
            var cells = document.querySelectorAll('.cells');
            
            for(var i = 0; i < cells.length; i++) {
               if (cells[i].innerHTML.length === 0) {
                return false;
                
               }
               
           }
           return true;
           }