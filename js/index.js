import {
  buttonPlay,
  buttonStop,
  buttonMoreMinutes,
  buttonLessMinutes,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

let timerTimeout

let minutes = Number(minutesDisplay.textContent)
let fiveMinutes = Number(minutesDisplay.textContent)


function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}


function resetTimer(){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeout)
  fiveMinutes = minutes
}

function timer(){
  let minutesTimer = Number(minutesDisplay.textContent)
  let secondsTimer = Number(secondsDisplay.textContent)
   if (secondsTimer <= 0){
   secondsTimer = 5
   minutesDisplay.textContent = String(--minutesTimer).padStart(2, "0")
   fiveMinutes--
 }
   secondsDisplay.textContent = String(--secondsTimer).padStart(2, "0")  
}

function countdown(){
  timerTimeout = setTimeout(function(){
    let countdownMinutes = Number(minutesDisplay.textContent)
    let countdownSeconds = Number(secondsDisplay.textContent)
    timer()
    
    if (countdownMinutes <= 0 && countdownSeconds <= 0){
      resetTimer()
      return     
    }
    

    countdown ()
    
  },1000)
}


buttonPlay.addEventListener('click', function(){
  countdown()
})

buttonStop.addEventListener('click', function(){
  clearTimeout(timerTimeout)
  updateTimerDisplay(minutes, 0)
  resetTimer()
})

buttonMoreMinutes.addEventListener('click', function(){
  fiveMinutes = fiveMinutes + 5
  minutesDisplay.textContent = String(fiveMinutes).padStart(2, "0")
  console.log(secondsDisplay)
})

buttonLessMinutes.addEventListener('click', function(){
  console.log(fiveMinutes)
  if (fiveMinutes <= 5){
    resetTimer()
  }else{
    fiveMinutes = fiveMinutes - 5
    minutesDisplay.textContent = String(fiveMinutes).padStart(2, "0")
  }
})
