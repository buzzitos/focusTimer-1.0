import {
  buttonPlay,
  buttonStop,
  buttonMoreMinutes,
  buttonLessMinutes,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

let timerTimeout

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer(){
  let minutes = "2"
  updateTimerDisplay(minutes,0)
  console.log(minutes)
}

function moreMinutes (minutes){
  
  minutesDisplay.textContent = String(minutes++)
  
}

function countdown(){
  timerTimeout = setTimeout(function(){
    
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
  
    if (minutes <= 0 && seconds <= 0){
      resetTimer()
      return     
    }
    
    if (seconds <= 0){
      seconds = 3
      minutesDisplay.textContent = String(--minutes).padStart(2,"0")
    }
      secondsDisplay.textContent = String(--seconds).padStart(2, "0")
    


    countdown ()
    
  },1000)
}



 
buttonPlay.addEventListener('click', function(){
  countdown()
})

buttonStop.addEventListener('click', function(){
  clearTimeout(timerTimeout)
  resetTimer()
})

buttonMoreMinutes.addEventListener('click', function(){
  moreMinutes(5)
  console.log( minutesDisplay.textContent)
})