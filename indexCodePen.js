const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonMoreMinutes = document.querySelector(".more-five-minutes")
const buttonLessMinutes = document.querySelector(".less-five-minutes")
const displayMinutes = document.querySelector(".minutes")
const displaySeconds = document.querySelector(".seconds")

let minutes = Number(displayMinutes.textContent)

let timerTimeout


//219584
function updateTimerDisplay(minutes, seconds){
  displayMinutes.textContent = String(minutes).padStart(2, "0")
  displaySeconds.textContent = String(seconds).padStart(2, "0")
}

function resetTimer (){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeout)
}
  
function moreFiveMinutes(){
 displayMinutes.textContent = String(minutes++)
}

function lessFiveMinutes(){
 displayMinutes.textContent = String(--minutes)
}

function timer(){
    let minutes = Number(displayMinutes.textContent)
    let seconds = Number(displaySeconds.textContent)
     if (seconds <= 0){
     seconds = 3
     displayMinutes.textContent = String(--minutes).padStart(2, "0")
   }
     displaySeconds.textContent = String(--seconds).padStart(2, "0")  
}

function countdown() {
  timerTimeout = setTimeout(function(){ 
    
    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinutes.textContent)
    
    timer()
    
     if (minutes <= 0 && seconds <=0){
       resetTimer()
       console.log("oi")
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
  console.log("pause")
})

buttonMoreMinutes.addEventListener('click', function(){
  moreFiveMinutes()
  console.log("mais")
})

buttonLessMinutes.addEventListener('click', function(){
  lessFiveMinutes()
  console.log("menos")
})