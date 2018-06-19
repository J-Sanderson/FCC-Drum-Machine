const DESCRIPTIONS = {
  "q-pad": "Heater 1",
  "w-pad": "Heater 2",
  "e-pad": "Heater 3",
  "a-pad": "Heater 4",
  "s-pad": "Clap",
  "d-pad": "Open HH",
  "z-pad": "Kick n' Hat",
  "x-pad": "Kick",
  "c-pad": "Closed HH"
}

const KEYS = ["Q","W","E","A","S","D","Z","X","C"];

function playAudio(clip, desc) {
  clip.play();
  $("#display").empty().append(desc);
};

$(document).ready(function() {
  
  $(".drum-pad").click(function() {
    
    let clip = $(this).find("audio")[0];
    let desc = DESCRIPTIONS[this.id];
    playAudio(clip, desc);
    
  });
  
  $(document).keyup(function(e) {
    
    let pressed = String.fromCharCode(e.keyCode);
    if (KEYS.indexOf(pressed) >= 0) {
      
      let clip = $("#drum-pads").find("#"+pressed)[0];
      let desc = DESCRIPTIONS[pressed.toLowerCase() + "-pad"];
      playAudio(clip, desc);
      
    }
    
  });
  
});