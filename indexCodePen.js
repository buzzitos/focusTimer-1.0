const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonMoreMinutes = document.querySelector(".more-five-minutes")
const buttonLessMinutes = document.querySelector(".less-five-minutes")
const displayMinutes = document.querySelector(".minutes")
const displaySeconds = document.querySelector(".seconds")

let minutes = Number(displayMinutes.textContent)
let fiveMinutes = Number(displayMinutes.textContent)

let timerTimeout


//219584
function updateTimerDisplay(minutes, seconds){
  displayMinutes.textContent = String(minutes).padStart(2, "0")
  displaySeconds.textContent = String(seconds).padStart(2, "0")
}

function resetFiveMinutes(){
  fiveMinutes = minutes
}

function resetTimer (){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeout)

}
  

function timer(){
    let minutesTimer = Number(displayMinutes.textContent)
    let secondsTimer = Number(displaySeconds.textContent)
     if (secondsTimer <= 0){
     secondsTimer = 10
     displayMinutes.textContent = String(--minutesTimer).padStart(2, "0")
     fiveMinutes--
   }
     displaySeconds.textContent = String(--secondsTimer).padStart(2, "0")  
}


function countdown() {
  timerTimeout = setTimeout(function(){ 
    
    timer()
    
     if (minutes <= 0 && seconds <=0){
       resetTimer()
      return
     }
    countdown()
  },1000)
}


buttonPlay.addEventListener('click', function(){
  countdown()
})

buttonStop.addEventListener('click', function(){
  clearTimeout(timerTimeout)
  updateTimerDisplay(minutes, 0)
  resetFiveMinutes()
  console.log("pause")
})

buttonMoreMinutes.addEventListener('click', function(){
  fiveMinutes = fiveMinutes + 5
  displayMinutes.textContent = String(fiveMinutes).padStart(2, "0")
  console.log(displayMinutes.textContent)
})

buttonLessMinutes.addEventListener('click', function(){
  if (fiveMinutes <= 5){
    resetTimer()
  }else{
    fiveMinutes = fiveMinutes - 5
    displayMinutes.textContent = String(fiveMinutes).padStart(2, "0")
  }
})