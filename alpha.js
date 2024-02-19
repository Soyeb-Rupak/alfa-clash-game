// function play(){
// const homeSection=document.getElementById('home-screen')
// homeSection.classList.add('hidden')

// const playGroundSection=document.getElementById('play-ground')
// playGroundSection.classList.remove('hidden');


// }
function handleKeyboardButtonPress( event){
    const playerPressed= event.key
    console.log('player Pressed', playerPressed);

    const currentAlphabetElement=document.getElementById('currentAlphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase()
   console.log(playerPressed, expectedAlphabet );
  
    
// cheeked match or not
if(playerPressed===expectedAlphabet){

const currentScore=getTextElementValueById('current-score');
const updateScore=currentScore+1;
setTextElementValueById('current-score', updateScore);


// const currentScoreElement=document.getElementById('current-score')
// const currentScoreText=currentScoreElement.innerText;
// const currentScore=parseInt(currentScoreText);
// console.log(currentScore);
// const newScore=currentScore+1;
// currentScoreElement.innerText=newScore;

    removeBackgroundColorById(expectedAlphabet)
   continueGame();
}else{
    console.log('you loser');

    const currentLife= getTextElementValueById('current-life');
    const updateLife=currentLife-1;
    setTextElementValueById('current-life', updateLife);

    // const currentLife=document.getElementById('current-life')
    // const currentLifeText=currentLife.innerText;
    // const presentLife=currentLifeText-1
    // console.log(presentLife);
    // currentLife.innerText=presentLife;
}




}

document.addEventListener('keyup', handleKeyboardButtonPress )

function continueGame(){

    const alphabet =getRandomAlphabet();
    // console.log('your Random Alphabet', alphabet);
  
    // const alphabetUppercase=alphabet.toUpperCase()

    const currentAlphabetElement=document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText=alphabet;
    

   
     // set Back Ground Color-----------
     setBackgroundColorById(alphabet)
    }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
    
}