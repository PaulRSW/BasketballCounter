
let addHmEl = document.getElementById("home-score")
let addGstEl = document.getElementById("guest-score")
let hmCount = 0
let gstCount = 0

function addScore(x, team) {



  if (team == "home"){
    if (x==1){
      hmCount +=1;
      addHmEl.textContent =hmCount;
    } else if(x ==2){
      hmCount+=2;
      addHmEl.textContent=hmCount;
    } else {
      hmCount+=3;
      addHmEl.textContent=hmCount;
    }


  }
else if (team == 'guest') {
    if (x==1) {
      gstCount +=1;
      addGstEl.textContent = gstCount;
    }  else if (x==2){
        gstCount +=2;
        addGstEl.textContent = gstCount;
      } else {
        gstCount +=3;
        addGstEl.textContent = gstCount;
      }
    }

}
