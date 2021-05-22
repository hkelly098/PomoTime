var isPaused = false;
var numOfPomo = 1

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function timer(timerLength, kindOfTimer){
  if (isPaused == false){
      if (timerLength != 0){
        minute = Math.floor(timerLength / 60);
        seconds = timerLength % 60;

        if(minute < 10){
          document.getElementById("minute").textContent = "0" + minute;
        }
        else{
          document.getElementById("minute").textContent = minute;
        }

        if(seconds < 10){
          document.getElementById("second").textContent = "0" + seconds;
        }
        else{
          document.getElementById("second").textContent = seconds;
        }

        document.getElementById("title").textContent = document.getElementById("time").textContent;

        sleep(1000).then(() => {timer(minute * 60 + seconds - 1, kindOfTimer)})
      }
      else{
        document.getElementById("minute").textContent = "00";
        document.getElementById("second").textContent = "00";

        document.getElementById("alarm").play();
        pause()

        if (kindOfTimer == "timerTime"){
          if(numOfPomo == 4){
            document.getElementById("lbreakButton").style.display = "block"
          }
          else{
            document.getElementById("sbreakButton").style.display = "block"
          }

        }
        else{
          document.getElementById("timerButton").style.display = "block"
          numOfPomo += 1
          document.getElementById("pomoCounter").textContent = numOfPomo + " Pomodoros!"
        }

      }
    }


  }


function startTimer(kindOfTimer){

  document.getElementById("timerText").style.display = "block";
  document.getElementById("timer").style.display = "block";
  document.getElementById("userInput").style.display = "none";
  document.getElementById("timerButton").style.display = "none";


  document.getElementById("tomato").style.display = "none";
  document.getElementById("tomatoWalking").style.display = "block";

  document.getElementById("alarm").pause();

  console.log("kind of Timer" + kindOfTimer)


  if (kindOfTimer == "timerTime"){
    document.getElementById("timerText").textContent = "On Timer"
    inputTimer = document.getElementById("timerTime").value

  }
  else if (kindOfTimer == "sbreakButton"){
    document.getElementById("timerText").textContent = "On Short Break"
    inputTimer = document.getElementById("sbreak").value
    console.log(inputTimer)
  }
  else{
    document.getElementById("timerText").textContent = "On Long Break"
    inputTimer = document.getElementById("lbreak").value
  }
  isPaused = false;
  console.log(kindOfTimer + " " + inputTimer)
  timerLength = inputTimer * 60;
  timer(timerLength, kindOfTimer);
}


function pause(){
  isPaused = true;
  document.getElementById("tomato").style.display = "block";
  document.getElementById("tomatoWalking").style.display = "none";
}

function resume(){
  min = document.getElementById("minute").textContent;
  sec = document.getElementById("second").textContent;
  console.log(min)
  console.log(sec)
  isPaused = false;
  document.getElementById("tomato").style.display = "none";
  document.getElementById("tomatoWalking").style.display = "block";
  timer(min * 60 + parseInt(sec));
}


function shortBreak(){
  document.getElementById("alarm").pause();
  isPaused = false;
  document.getElementById("sbreakButton").style.display = "none"
  startTimer('sbreakButton')
}

function longBreak(){
  document.getElementById("alarm").pause();
  isPaused = false;
  document.getElementById("lbreakButton").style.display = "none"
  startTimer('lbreakButton')
}
