var lx = parseFloat($('.school-list li:gt(0)').width());
var n = parseFloat($('.school-list li').length);
var wx = $('.school-list').width();
$('.school-list').parent().parent().append('<span id="left"></span>');
$('.school-list').parent().parent().append('<span id="right"></span>');
var top = $('#left').offset().top;
var left = $('#right').offset().left;
$('.school-list').parent().nextAll('span').css({'display':'inline-block','width':'50px','height':'50px','line-height':'50px','background-color':'gray','position':'relative'});
$('#left').css({'left':left-50+'px'});
$('#right').css({'left':left+wx+'px'});
$('.school-list').parent().css({'width':wx+'px','overflow':'hidden'});
$('.school-list li').css({'position':'relative'});
$('.school-list').css({'width':(n+1)*(lx+20)+'px','position':'relative','left':-(lx+20)+'px'});
function toRight(){
    $('.school-list li').stop().animate({left: '+='+(lx+20)+'px'},'slow');
}
function toLeft(){
    $('.school-list li').stop().animate({left: '-='+(lx+20)+'px'},'slow');
}
function resetRight(){
    $('.school-list').prepend($('.school-list').children().last().clone(true))
    $('.school-list').children().last().remove();
    $('.school-list li').css({'left':0});
}
function resetLeft(){
    $('.school-list').append($('.school-list').children().first().clone(true))
    $('.school-list').children().first().remove();
    $('.school-list li').css({'left':0});
}
resetRight();
$('.school-list').parent().nextAll('span').hover(function(){
    $(this).css({'cursor':'pointer','background-color':'black'});
},function(){
    $(this).css({'cursor':'none','background-color':'gray'});
})
$('#right').on('click',function(){
    toRight();
    setTimeout('resetRight()',750);
})
$('#left').on('click',function(){
    toLeft();
    setTimeout('resetLeft()',750);
})

$('.wf-cell,.isotope-item article .blog-content').each(function () {
    $(this).children('div').eq(0).remove();
    $(this).children('a').remove();
    $(this).children('div').eq(1).insertBefore($(this).children('h2'));
});