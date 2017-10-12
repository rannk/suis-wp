var lx = parseFloat(jQuery('.school-list li:gt(0)').width());
var n = parseFloat(jQuery('.school-list li').length);
var wx = jQuery('.school-list').width();
jQuery('.school-list').parent().parent().append('<span id="left"></span>');
jQuery('.school-list').parent().parent().append('<span id="right"></span>');
var top = jQuery('#left').offset().top;
var left = jQuery('#right').offset().left;
jQuery('.school-list').parent().nextAll('span').css({'display':'inline-block','width':'50px','height':'50px','line-height':'50px','background-color':'gray','position':'relative'});
jQuery('#left').css({'left':left-50+'px'});
jQuery('#right').css({'left':left+wx+'px'});
jQuery('.school-list').parent().css({'width':wx+'px','overflow':'hidden'});
jQuery('.school-list li').css({'position':'relative'});
jQuery('.school-list').css({'width':(n+1)*(lx+20)+'px','position':'relative','left':-(lx+20)+'px'});
function toRight(){
    jQuery('.school-list li').stop().animate({left: '+='+(lx+20)+'px'},'slow');
}
function toLeft(){
    jQuery('.school-list li').stop().animate({left: '-='+(lx+20)+'px'},'slow');
}
function resetRight(){
    jQuery('.school-list').prepend(jQuery('.school-list').children().last().clone(true))
    jQuery('.school-list').children().last().remove();
    jQuery('.school-list li').css({'left':0});
}
function resetLeft(){
    jQuery('.school-list').append(jQuery('.school-list').children().first().clone(true))
    jQuery('.school-list').children().first().remove();
    jQuery('.school-list li').css({'left':0});
}
resetRight();
jQuery('.school-list').parent().nextAll('span').hover(function(){
    jQuery(this).css({'cursor':'pointer','background-color':'black'});
},function(){
    jQuery(this).css({'cursor':'none','background-color':'gray'});
})
jQuery('#right').on('click',function(){
    toRight();
    setTimeout('resetRight()',750);
})
jQuery('#left').on('click',function(){
    toLeft();
    setTimeout('resetLeft()',750);
})

jQuery('.wf-cell,.isotope-item article .blog-content').each(function () {
    jQuery(this).children('div').eq(0).remove();
    jQuery(this).children('a').remove();
    jQuery(this).children('div').eq(1).insertBefore(jQuery(this).children('h2'));
});