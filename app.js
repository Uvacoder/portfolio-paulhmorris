// <---------------- Variables ----------------> //
const overlay = document.querySelector('#overlay');
const reset = document.querySelector('.btn_reset');
const tries = document.querySelectorAll('.tries');
const keyboard = document.querySelector('#qwerty');
const phraseList = document.querySelector('#phrase ul');
const phrases = [
  'country road take me home',
  'cool as a cucumber',
  'back to the drawing board',
  'the road less traveled',
  'between a rock and a hard place'
]

let missed = 0;

// <---------------- Functions ----------------> //
function getRandomPhraseAsArray(arr) {
  let phraseArr = arr[(Math.floor(Math.random() * (6 - 1)))].split('');
  console.log(phraseArr);
  return phraseArr;
} 

function addPhraseToDisplay(arr) {
  resetGame();

  for (i = 0; i < arr.length; i++) {
    let li = document.createElement('li')
    li.textContent = arr[i];
    if (arr[i] === ' ') {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
    phraseList.appendChild(li);
  }
};

function checkLetter(letter) {
  let letterArr = document.querySelectorAll('.letter');
  let letterFound = null;
  
  for (i = 0; i < letterArr.length; i++) {
    if (letterArr[i].textContent.toLowerCase() === letter) {
      // Add animations and show the correct letters
      letterArr[i].classList.add('animated', 'jackInTheBox', 'show');
      letterFound = true;
      console.log(`Letter '${letter}' selected`);
    }
  }
  return letterFound;
};

function checkWin() {
  
  function changeScreen(text) {
    overlay.style.display = '';
    overlay.className = text;
    reset.textContent = 'Reset';
  }

  let showArr = document.querySelectorAll('.show');
  let letterArr = document.querySelectorAll('.letter');
  if (showArr.length === letterArr.length) {
    changeScreen('win');
  } else if (missed === 5) {
    changeScreen('lose');
  }
};

function resetGame() {
  phraseList.innerHTML = ''; // I found this code snippet on StackOverflow by user 'Gabriel McAdams'
  
  // Reset key classes and set disabled to false
  let keys = document.querySelectorAll('.keyrow button');
  for (i = 0; i < keys.length; i++) {
    keys[i].className = '';
    keys[i].disabled = false;
  }
  // Reset hearts
  missed = 0;
  let hearts = document.querySelectorAll('.tries img');
  for (i = 0; i < hearts.length; i++) {
    hearts[i].src = 'images/liveHeart.png';
  }
}

// <---------------- Event Listeners ----------------> //
reset.addEventListener('click', function() {
  addPhraseToDisplay(getRandomPhraseAsArray(phrases));
  overlay.style.display = 'none';
  console.log('Game loaded!');
});

keyboard.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.className = 'chosen';
    e.target.disabled = true;
    let letterFound = checkLetter(e.target.textContent);
    if (letterFound === null) {
      missed += 1;
      tries[missed - 1].firstElementChild.src = 'images/lostHeart.png';
      console.log(missed + ' misses');
    }
    checkWin();
  }
});