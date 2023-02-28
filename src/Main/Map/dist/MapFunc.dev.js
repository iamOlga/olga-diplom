"use strict";

$('#map path').on('mouseenter', function () {
  var selected = $(this);
  selected.addClass('cls-3').removeClass('cls-1');
  /* if($(this).hasClass("item1")){
       $(".info_brest").addClass('info').removeClass('info_hide');
  } */
});