document.addEventListener('DOMContentLoaded', () =>{
    let random = Math.ceil(Math.random()*100) + 1;
    let guessInput = document.getElementById("guessNumber");
    let result = document.getElementById("result");
    let score = document.getElementById("score");
    let guesses = 0;

    document.getElementById("submitGuesses").addEventListener("click", ()=> {
        let userGuess = parseInt(guessInput.value)
        guesses++;

        if(userGuess == random){
            result.textContent = "Congratulations! You guess the correct number."
            score.textContent = `Your score is: ${100 - guesses}`
        }
        else if (userGuess > random) {
            result.textContent = "Your guess is too high!"
            guessInput.value = ""
        }
        else{
            result.textContent = "Your guess is too low!"
             guessInput.value = ""
        }

        if (userGuess == random){
            guessInput.disabled = true;
            document.getElementById("submitGuesses").disabled = true;
        }
    })
})