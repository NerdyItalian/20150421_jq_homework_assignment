var countChecked = function() {
  var n = $("input:checked").length;
  $("div").text("You checked that you like " + n + " of the colors!" );
};
countChecked();
 
$(document).ready(function(){
$( "input[type=checkbox]" ).on( "click", countChecked)
});