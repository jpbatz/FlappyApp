$(document).ready(function() {

// runs when about is clicked
$('.about').click(about_click);

function about_click() {

    $.get( "/api/about.json", function( data ) {
      // $( "#stuff" ).html( data.title );
      // $( "#stuff" ).html( data.date );
      $( "#stuff" ).html( data.body );
      // alert( "Load was performed." );
    }, "json");

  }

// when page is loaded
  about_click();



// runs when specs is clicked
$('.specs').click(spec_function);

function spec_function() {

    $.get( "/api/spec.json", function( data ) {
      // $( "#stuff" ).html( data.title );
      // $( "#stuff" ).html( data.date );
      $( "#stuff" ).html( data.body );
      // alert( "Load was performed." );
    }, "json");

  }

  var bird_text = "";

  $('body').on('mouseenter', 'span.bird', function() {
    console.log("Bird Pic!");
    bird_text = $(this).html();
    $(this).html('<img src="/images/logo.png">');
  });

  $('body').on('mouseleave', 'span.bird', function() {
    console.log("Bird Word!");
    $(this).html(bird_text);
  });

});