"use strick"

$(document).ready(function () {

    $("#burgerBtn").click(function () {
        $("#MenuBurger").slideToggle();
    });

    $( function() {
        $( "#datepickerStart" ).datepicker();
      } );

      $( function() {
        $( "#datepickerEnd" ).datepicker();
      } );


});