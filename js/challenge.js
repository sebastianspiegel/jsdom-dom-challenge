const timerDisplay = document.getElementById('counter');
const pauseButton = document.getElementById('pause');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const submitButton = document.getElementById('submit');

document.addEventListener("DOMContentLoaded", () => {
    console.log("The timer has started"); 
    // autoTimer(0); 
});

let numNow = parseInt(document.getElementById('counter').innerText);
function autoTimer(num) {
    let totalSeconds = num;
    const int = setInterval(setTime, 1000);
    function setTime(){
        ++totalSeconds;
        timerDisplay.innerHTML = totalSeconds;
    };
    pauseButton.addEventListener('click', event => {
        console.log("The timer has paused");
        minusButton.insertAdjacentHTML('afterbegin', `<disabled></disabled>`)
        clearInterval(int);
        pauseButton.innerText = 'resume';
        pauseButton.addEventListener('click', event => {
            autoTimer(numNow);
            pauseButton.innerText = 'pause';
        });
    });
    minusButton.addEventListener('click', event => {
        clearInterval(int);
        autoTimer(numNow - 1); 
    });
    plusButton.addEventListener('click', event => {
        clearInterval(int);
        autoTimer(numNow + 1); 
    });
};


submitButton.addEventListener('click', event => { 
    const comment = document.getElementById('comment-input');
    const commentList = document.getElementById('list');
    event.preventDefault();
    commentList.insertAdjacentHTML('afterbegin', `<li>${comment.value}</li>`);
    comment.value = "";
});

const likesList = document.getElementsByClassName('likes')[0]
heartButton.addEventListener('click', event => {
    const numNow = document.getElementById('counter').innerText;
    likesList.insertAdjacentHTML('afterbegin', `<li>${numNow} has been liked X times</li>`);
});

