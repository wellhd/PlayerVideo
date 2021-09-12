// declare variable
var myVideo = document.querySelector("#video");

// function commands
function playPause(){
  if(myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}

function Big(){
myVideo.width = 640;
}

function Small(){
myVideo.width = 320;
}

function Normal(){
myVideo.width = 420;
}

function dec(){
myVideo.volume -= 0.1;
}

function any(){
  myVideo.volume += 0.1;
  }

  function telaCheia(){      

    myVideo.requestFullscreen(); 
}  

function muteVideo(){
  if(myVideo.muted)
    myVideo.muted = false;
  else
    myVideo.muted = true;
  }

