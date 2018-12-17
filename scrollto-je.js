


/* Uncomment and comment away bottom part to test "fixed focus" scrolling

// Removed document.ready, put the script at the bottom of the page        
// Bind to the click of all links with a #hash in the href
$('.scrollrow:not(:first) a').focus(function(e) {
  // Prevent the jump and the #hash from appearing on the address bar
  e.preventDefault();
  // Scroll the focused element close to top of window 
  $(this).parent().parent().stop(true).scrollTo(this, 400, {offset: {top:-90, left:-80}});
});


$('.scrollrow a').focus(function(e) {
  // Prevent the jump and the #hash from appearing on the address bar
  e.preventDefault();
  // Scroll to focused element, with offset
  $(this).parent().stop(true).scrollTo(this, {duration:300, interrupt:true, offset:-80});
});
*/






// Removed document.ready, put the script at the bottom of the page        

// Vertical scroll: 
$('.scrollrow a, .noscrollrow a').focus(function(e) { //First one could also be scrollrow:not(:first)
  e.preventDefault();
  // Scroll the focused element close to top of window 
  $(this).parent().parent().stop(true).scrollTo(this, 400, {offset: {top:-90, left:-80}});
});


// Horizontal scroll small plugs:
$('.scrollrow--small a').focus(function(e) {
  e.preventDefault();
  $(this).parent().stop(true).scrollTo(this, {duration:300, interrupt:true, offset:-932});
});

// Horizontal scroll medium plugs:
$('.scrollrow--medium a').focus(function(e) {
  e.preventDefault();
  $(this).parent().stop(true).scrollTo(this, {duration:300, interrupt:true, offset:-832});
});

// Horizontal scroll large plugs:
$('.scrollrow--large a').focus(function(e) {
  e.preventDefault();
  $(this).parent().stop(true).scrollTo(this, {duration:300, interrupt:true, offset:-630});
});

// Horizontal scroll portrait plugs:
$('.scrollrow--portrait a').focus(function(e) {
  e.preventDefault();
  $(this).parent().stop(true).scrollTo(this, {duration:300, interrupt:true, offset:-987});
});

// Horizontal scroll category plugs:
$('.scrollrow--category a').focus(function(e) {
  e.preventDefault();
  $(this).parent().stop(true).scrollTo(this, {duration:300, interrupt:true, offset:-1027});
});





