let randomNo = Math.floor(Math.random()*1000+1);
console.log(randomNo)

let submitBtn = document.querySelector('#submit')
let userInput = document.querySelector('#guessField')
let remaining = document.querySelector('.remaining')
let lowOrHigh = document.querySelector('.lowOrHigh')
let newGameBtn = document.querySelector('.hide')

let numGuess = 1
let canPlay = true;


if(canPlay){
submitBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    const guess = userInput.value
    validate(guess)
})
}

function validate(guess){
    if(isNaN(guess)) alert("Enter a valid Number")
    else if(guess < 1) alert("Please Enter a Number Greater than 0")
    else if(guess > 1000) alert("Please Enter a Number Less than 1000")
    else{
        displayGuess()
        if(numGuess === 11){
           displayMessage(`Game Over Random Number was ${randomNo}`)
           endGame()
        }
        else{
           checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess == randomNo){
        displayMessage('Hurrah!!! You Guessed it Right...')
        endGame()
    }
    else if(guess < randomNo){
        displayMessage('Number is Too Low!!!')
    }
    else{
        displayMessage('Number is Too High!!!')
    }
}

function displayGuess(){
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.setAttribute('disabled' , '') //Disable the input field
    submitBtn.setAttribute('disabled' , '') //Disable the guess btn
    
    newGameBtn.classList.remove("hide")
    canPlay = false
    newGame()
}

function newGame(){
    newGameBtn.addEventListener('click' , ()=>{
        newGameBtn.classList.add("hide")
        randomNo = Math.floor(Math.random()*1000+1)
        numGuess = 1
        userInput.removeAttribute('disabled' , '')
        submitBtn.removeAttribute('disabled' , '')
        lowOrHigh.innerHTML = ''
        userInput.value = ''
    })
}




