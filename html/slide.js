$(function() {
	slide();
function slide() {
$('#txtsld1').delay(3000).fadeOut(2000)
$('#txtsld2').fadeOut(0).delay(2500).fadeIn(4000).delay(3000).fadeOut(2000)
$('#txtsld3').fadeOut(0).delay(9000).fadeIn(4000).delay(3000).fadeOut(2000)
$('#txtsld1').delay(10500).fadeIn(4000)


$('#img1').delay(3000).fadeOut(2000)
$('#img2').fadeOut(0).delay(2500).fadeIn(4000).delay(3000).fadeOut(2000)
$('#img3').fadeOut(0).delay(9000).fadeIn(4000).delay(3000).fadeOut(2000)
$('#img1').delay(10500).fadeIn(4000)


};
setInterval (slide, 19500);
});

