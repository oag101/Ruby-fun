/* global $ */

$(document).on("turbolinks:load", function(){
  //Fade alerts after 1 second
  $('.alert').delay(1000).fadeOut(4000);
});