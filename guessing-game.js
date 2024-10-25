function guessingGame() {
    const secret = Math.floor(Math.random() * 100);
    let numGuesses = 0;
    let won = false;
    return function guess(guessNum) {
        if (won) return "The game is over, you already won!";
        numGuesses++;
        if (guessNum === secret) {
            won = true;
            return `You win! You found ${secret} in ${numGuesses} guesses.`;
        }
        return (guessNum > secret) ? `${guessNum} is too high!` : `${guessNum} is too low!`;
    }
}

module.exports = { guessingGame };
