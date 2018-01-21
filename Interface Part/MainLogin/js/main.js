$(document).ready(function()
{
    $(".loading").hide(4000)	
	$(".w").fadeIn(4000);
	$(".img").animate({
		top:'27%',
	},3000)
	$(".img").fadeOut(1000)
	$(".s").delay(3000).animate({
		width:'400'
	},2000)
    $(".s").animate({
		height:'250'
	},2000)
    $(".s form").delay(3000).fadeIn(5000)
    $("h3").delay(3000).fadeIn(1000);
    if($(window).width() < 791)
    {
           $(".w").hide();
           $(".res .head").fadeIn(3000)
    }
})