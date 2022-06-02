/*--------------- Start oF Modal JS----------------------*/
$(document).ready(function(){
    $("#wat").click(function(){
        $("#myModal").modal("show");
    });
});



/*------------ Nav Bar JS -------------------------------*/
function NavbarFunc() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}


function active_disactive_user(val, id)
{
    if(val==1){
      $('#heatstat').css('color', '#00e68a');
      $('#aerstat').css('color', '#00e68a');
      $('#tanstat').css('color', '#00e68a');
      $('#drastat').css('color', '#00e68a');
    }
  else if(val==2){
    $('#heatstat').css('color', '#8F00FF');
      $('#aerstat').css('color', '#8F00FF');
      $('#tanstat').css('color', '#8F00FF');
      $('#drastat').css('color', '#8F00FF');
  }
  else{
     $('#heatstat').css('color', '#f34f1c');
      $('#aerstat').css('color', '#f34f1c');
      $('#tanstat').css('color', '#f34f1c');
      $('#drastat').css('color', '#f34f1c');
  }
}