let correctNumber = Math.floor(Math.random() * 15)
console.log(`the correct number is ${correctNumber}`)

let guessed = false
let totalGuesses= 0
let gamerGuess = 0
correctNumber += 1

function evalGuess() {
 totalGuesses += 1
 gamerGuess = document.querySelector('#guess').value
 console.log(totalGuesses, gamerGuess)

 const feedback = document.querySelector('#feedback')

 if (gamerGuess == correctNumber) {
     console.log(`gamerGuess is equal to correctNumber`)
     feedback.innerText = 'you win!'
     giveAward()
 } else if(gamerGuess > correctNumber && gamerGuess < 16) {
    feedback.innerText = 'too high, try again'
  } else if(gamerGuess < correctNumber && gamerGuess > 0) {
    feedback.innerText = 'too low. try again'
  } else {
    feedback.innerText = 'please choose a number between 0 and 15'
    totalGuesses -= 1
    }
     document.querySelector('#attempts').innerText = totalGuesses
    }

function giveAward() {
console.log('congratulations!')
let imagePath = '#'
switch (totalGuesses) {
    case 1:
    case 2:
    case 3:
    imagePath = 'images/blue.png'
    break;
    case 4:
    case 5:
    case 6:
    imagePath = 'images/red.png'
    break;
    case 7:
      break;
    case 8:
    case 9:
      imagePath = 'images/yellow.png'
      break;
}

    const awardImage = document.createElement('img')
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)
}