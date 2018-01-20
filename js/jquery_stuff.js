$(document).ready(function(){

$('[data-trigger="dropdown-trigger"]').mouseenter(function() {
  var submenu = $(this).parent().find(".submenu");
  submenu.addClass("active");

$(".main-menu").on("mouseleave",function() {
  submenu.removeClass("active");
})
});

});
