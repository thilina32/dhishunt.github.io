function load(){
  rs.play()
    setInterval(bg,1500)
    rs.play()
    
}


var cloor = 1;

function bg() {
    
    
  if (cloor == 1) {
    
    cloor = cloor + 1

    //dotransition = "all 2s";cument.getElementById("bg").style.
    document.getElementById("bg").style.backgroundColor = "rgba(67, 160, 226, 0.708)";
    
    
  } else {
    //alert ("ok");
    cloor = cloor - 1
    document.getElementById("bg").style.backgroundColor = "rgba(255, 255, 255, 0.793)";
    
    
  }
   
}

var rs = new Audio("s.mp3");


