$(document).ready(function() {
  $("#user-height").submit(function(event) {
    event.preventDefault();
    let userHeight = parseInt($("#height").val());
    const teaHeight = 36;
    const terrorHeight = 58;
    const flamingHeight = 60;
    const mountainHeight = 62;
    const maxHeightTea = 60;
    const maxHeightFlaming = 70;
    const maxHeightTerror = 80;
    $("#tea-cups, #tower-of-terror, #flaming-roller-coaster, #magic-mountain").removeClass("rideable");
    $("#tea-cups p, #tower-of-terror p, #flaming-roller-coaster p").remove();

    if (userHeight >= teaHeight) {
      $("#tea-cups").addClass("rideable");
      if (userHeight > maxHeightTea){
        $("#tea-cups").append("<p>You are too tall</p>")
      }
    } 
    
    if (userHeight >= terrorHeight) {
      $("#tower-of-terror").addClass("rideable");
      if (userHeight > maxHeightTerror){
        $("#tower-of-terror").append("<p>You are too tall</p>")
      }
    }
    
    if (userHeight >= flamingHeight) {
      $("#flaming-roller-coaster").addClass("rideable");
      if (userHeight > maxHeightFlaming){
        $("#flaming-roller-coaster").append("<p>You are too tall</p>")
      }
    }

    if (userHeight >= mountainHeight) {
      $("#magic-mountain").addClass("rideable");
    }
  });
});