$(document).ready(function(){
	var preview1 = $('.product__prev1');
	var preview2 = $('.product__prev2');
	var preview3 = $('.product__prev3');
	var current = $('.product__currentimage');
	var prev1_source = preview1.attr('src');
	var prev2_source = preview2.attr('src');
	var prev3_source = preview3.attr('src');
	var cur_source = current.attr('src');
	current.css('width',current.css('width'));
	preview1.hover(
		function(){
			current.attr('src', prev1_source);
		},
		function(){
			current.attr('src', cur_source);
		});
	preview2.hover(
		function(){
			current.attr('src', prev2_source);
		},
		function(){
			current.attr('src', cur_source);
		});
	preview3.hover(
		function(){
			current.attr('src', prev3_source);
		},
		function(){
			current.attr('src', cur_source);
		});
});
$('.product__value').keypress(function(event) {
	if (event.charCode < 48 || event.charCode > 57)
    return false;
});
var numvar = + $('.product__value').attr('value');
$('.product__value').keyup(function(){
	numvar = + $('.product__value').val();
	console.log(numvar);
});
$('.product__more').click(function(){
    if (numvar < 999) 
    numvar += 1;
    $(".product__value").val(numvar);
    console.log(numvar);
});
$('.product__less').click(function(){
    if (numvar > 1)
    numvar -= 1;
    $(".product__value").val(numvar);
    console.log(numvar);
});
$('.product__button--store').bind('click',function(e) {
	e.preventDefault();
	if (numvar == 1) 
		$.Zebra_Dialog('В корзину добавленa '+numvar+' позиция!');
	
	else {
		$.Zebra_Dialog('В корзину добавлено '+numvar+' позиций!');
	}
});
