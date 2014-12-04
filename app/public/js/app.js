$(document).ready(function() {
  
  $.get( "/api/about.json", function( data ) {
  // $.get( "/api/spec.json", function( data ) {
    // $( "#stuff" ).html( data.title );
    // $( "#stuff" ).html( data.date );
    $( "#stuff" ).html( data.body );
    alert( "Load was performed." );
  }, "json");

});