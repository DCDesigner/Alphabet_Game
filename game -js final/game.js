function playSound(sampleName) {

    var sample = document.getElementById(sampleName);
    sample.play();
    
    document.getElementById("display").innerHTML=sampleName;
  }

  window.addEventListener('keydown', function (event) {
      var k=event.keyCode;

   
      if(k===65) playSound('A'); else
      if(k===66) playSound('B'); else
      if(k===67) playSound('C'); else
      if(k===68) playSound('D'); else
      if(k===69) playSound('E'); else
      if(k===70) playSound('F'); else
      if(k===71) playSound('G'); else
      if(k===72) playSound('H'); else
      if(k===73) playSound('I'); else
      if(k===74) playSound('J'); else
      if(k===75) playSound('K'); else
      if(k===76) playSound('L'); else
      if(k===77) playSound('M'); else
      if(k===78) playSound('N'); else
      if(k===79) playSound('O'); else
      if(k===80) playSound('P'); else
      if(k===81) playSound('Q'); else
      if(k===82) playSound('R'); else
      if(k===83) playSound('S'); else
      if(k===84) playSound('T'); else
      if(k===85) playSound('U'); else
      if(k===86) playSound('V'); else
      if(k===87) playSound('W'); else
      if(k===88) playSound('X'); else
      if(k===89) playSound('Y'); else
      if(k===90) playSound('Z');


  })

